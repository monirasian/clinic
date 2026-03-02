import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { catchError, forkJoin, map, Observable, of, timeout } from 'rxjs';

import { API_BASE_URL } from '../../../api.config';
import { AdminAuthService } from '../../../admin-auth.service';

interface CrudRecord {
  id: number;
  name: string;
  description: string;
  status: string;
  clinicId?: number;
  email: string;
  isActive: boolean;
  roles: string[];
}

interface RoleRecord {
  id: number;
  name: string;
}

interface UserRoleAssignment {
  id: number;
  userId: number;
  roleId: number;
}

type RoleSyncState = 'idle' | 'syncing' | 'success' | 'partial' | 'failed';

@Component({
  selector: 'app-admin-crud',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <section class="admin-crud">
      <header class="toolbar">
        <div>
          <h2>{{ title }}</h2>
          <p>{{ toTitle(entity) }} operations workspace</p>
        </div>
        <button type="button" (click)="startCreate()">+ New {{ toTitle(entity) }}</button>
      </header>

      <div class="filters">
        <input type="text" [(ngModel)]="searchText" placeholder="Search name, email, description" aria-label="Search records" />
        <select [(ngModel)]="statusFilter" aria-label="Filter by status">
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <select [(ngModel)]="clinicFilter" aria-label="Filter by clinic">
          <option value="all">All clinics</option>
          <option *ngFor="let clinic of clinicOptions" [value]="clinic">clinic {{ clinic }}</option>
        </select>
      </div>

      <p *ngIf="currentAction === 'edit' && !isEditMode">Select a record from the list and click Edit.</p>
      <p *ngIf="message" class="message">{{ message }}</p>

      <div class="layout">
        <div>
          <table *ngIf="filteredRecords.length > 0" class="crud-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Email</th>
                <th>clinic</th>
                <th *ngIf="entity === 'users'">Roles</th>
                <th *ngIf="entity === 'users'">Sync</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let item of filteredRecords" (click)="selectRecord(item)" [class.selected]="selectedRecord?.id === item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.description || '-' }}</td>
                <td>{{ item.email || '-' }}</td>
                <td>{{ item.clinicId ?? '-' }}</td>
                <td *ngIf="entity === 'users'">
                  <span *ngIf="item.roles.length === 0">-</span>
                  <span *ngFor="let role of item.roles" class="role-pill">{{ role }}</span>
                </td>
                <td *ngIf="entity === 'users'">
                  <span class="sync-pill" [class.syncing]="roleSyncState(item.id) === 'syncing'" [class.success]="roleSyncState(item.id) === 'success'" [class.partial]="roleSyncState(item.id) === 'partial'" [class.failed]="roleSyncState(item.id) === 'failed'">
                    {{ roleSyncLabel(item.id) }}
                  </span>
                </td>
                <td>
                  <span class="status" [class.inactive]="!item.isActive">{{ item.isActive ? 'Active' : 'Inactive' }}</span>
                </td>
                <td class="actions-cell" (click)="$event.stopPropagation()">
                  <button type="button" class="secondary" (click)="edit(item.id)" [disabled]="isSaving || deletingIds.has(item.id)">Edit</button>
                  <button type="button" class="danger" (click)="remove(item.id)" [disabled]="isSaving || deletingIds.has(item.id)">
                    {{ deletingIds.has(item.id) ? 'Deleting...' : 'Delete' }}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <p *ngIf="filteredRecords.length === 0">No records yet.</p>
        </div>

        <aside class="detail" *ngIf="selectedRecord">
          <h3>{{ selectedRecord.name }}</h3>
          <p>{{ selectedRecord.email || 'No email' }}</p>
          <p><strong>Status:</strong> {{ selectedRecord.isActive ? 'Active' : 'Inactive' }}</p>
          <p><strong>clinic:</strong> {{ selectedRecord.clinicId ?? '-' }}</p>
          <p *ngIf="entity === 'users'">
            <strong>Roles:</strong>
            <span *ngIf="selectedRecord.roles.length === 0">-</span>
            <span *ngFor="let role of selectedRecord.roles" class="role-pill">{{ role }}</span>
          </p>
          <p *ngIf="entity === 'users'">
            <strong>Role Sync:</strong>
            <span class="sync-pill" [class.syncing]="roleSyncState(selectedRecord.id) === 'syncing'" [class.success]="roleSyncState(selectedRecord.id) === 'success'" [class.partial]="roleSyncState(selectedRecord.id) === 'partial'" [class.failed]="roleSyncState(selectedRecord.id) === 'failed'">
              {{ roleSyncLabel(selectedRecord.id) }}
            </span>
          </p>
          <p><strong>Description:</strong> {{ selectedRecord.description || '-' }}</p>
        </aside>
      </div>

      <form *ngIf="showForm" class="crud-form" (ngSubmit)="save()">
        <label for="crud-name">Name</label>
        <input id="crud-name" name="name" [(ngModel)]="form.name" required />

        <label for="crud-description">Description</label>
        <textarea id="crud-description" name="description" [(ngModel)]="form.description"></textarea>

        <label for="crud-email">Email</label>
        <input id="crud-email" name="email" [(ngModel)]="form.email" />

        <label for="crud-clinic">clinic Id</label>
        <input id="crud-clinic" type="number" name="clinicId" [(ngModel)]="form.clinicId" />

        <label for="crud-active">Active</label>
        <select id="crud-active" name="isActive" [(ngModel)]="form.isActive">
          <option [ngValue]="true">Active</option>
          <option [ngValue]="false">Inactive</option>
        </select>

        <ng-container *ngIf="entity === 'users'">
          <label for="crud-roles">Roles (comma separated)</label>
          <input id="crud-roles" name="rolesCsv" [(ngModel)]="rolesCsv" placeholder="Admin, Doctor" />
        </ng-container>

        <div class="actions">
          <button type="submit" [disabled]="isSaving">{{ isSaving ? 'Saving...' : (isEditMode ? 'Update' : 'Create') }}</button>
          <button *ngIf="isEditMode || currentAction === 'create'" type="button" class="secondary" (click)="resetForm()" [disabled]="isSaving">Cancel</button>
        </div>
      </form>
    </section>
  `,
  styles: [
    `
      .admin-crud {
        border: 1px solid #e5e7eb;
        border-radius: 12px;
        background: white;
        padding: 16px;
        display: grid;
        gap: 12px;
      }

      .toolbar {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
      }

      .toolbar h2 {
        margin: 0;
      }

      .toolbar p {
        margin: 4px 0 0;
        color: #64748b;
      }

      .filters {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        gap: 8px;
      }

      .crud-form {
        display: grid;
        gap: 8px;
        max-width: 520px;
      }

      .crud-form input,
      .crud-form textarea,
      .crud-form select,
      .filters input,
      .filters select {
        border: 1px solid #d1d5db;
        border-radius: 8px;
        padding: 8px 10px;
      }

      .layout {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 12px;
      }

      .detail {
        border: 1px solid #e5e7eb;
        border-radius: 10px;
        padding: 10px;
        background: #f8fafc;
      }

      .detail h3 {
        margin: 0 0 6px;
      }

      .detail p {
        margin: 4px 0;
      }

      .actions {
        display: flex;
        gap: 8px;
        margin-top: 4px;
      }

      button {
        border: 1px solid #2563eb;
        background: #2563eb;
        color: white;
        border-radius: 8px;
        padding: 8px 12px;
        cursor: pointer;
        font-weight: 600;
      }

      button.secondary {
        border-color: #d1d5db;
        background: white;
        color: #1f2937;
      }

      button.danger {
        border-color: #dc2626;
        background: #dc2626;
      }

      .crud-table {
        width: 100%;
        border-collapse: collapse;
      }

      .crud-table th,
      .crud-table td {
        border: 1px solid #e5e7eb;
        padding: 8px;
        text-align: left;
      }

      .crud-table tr.selected {
        background: #eff6ff;
      }

      .status {
        border: 1px solid #16a34a;
        color: #166534;
        border-radius: 999px;
        padding: 2px 8px;
        font-size: 0.75rem;
      }

      .status.inactive {
        border-color: #94a3b8;
        color: #475569;
      }

      .role-pill {
        border: 1px solid #cbd5e1;
        border-radius: 999px;
        padding: 2px 8px;
        font-size: 0.75rem;
        margin-right: 4px;
        display: inline-block;
      }

      .sync-pill {
        border: 1px solid #cbd5e1;
        border-radius: 999px;
        padding: 2px 8px;
        font-size: 0.75rem;
        display: inline-block;
        color: #334155;
      }

      .sync-pill.syncing {
        border-color: #93c5fd;
        background: #eff6ff;
        color: #1d4ed8;
      }

      .sync-pill.success {
        border-color: #86efac;
        background: #f0fdf4;
        color: #166534;
      }

      .sync-pill.partial {
        border-color: #fcd34d;
        background: #fffbeb;
        color: #92400e;
      }

      .sync-pill.failed {
        border-color: #fca5a5;
        background: #fef2f2;
        color: #991b1b;
      }

      .actions-cell {
        display: flex;
        gap: 8px;
      }

      .message {
        margin: 6px 0;
        color: #1d4ed8;
      }

      @media (max-width: 1100px) {
        .layout {
          grid-template-columns: 1fr;
        }

        .filters {
          grid-template-columns: 1fr;
        }
      }
    `
  ]
})
export class AdminCrudComponent implements OnInit {
  entity = '';
  title = '';
  currentAction = 'list';
  records: CrudRecord[] = [];
  form: Omit<CrudRecord, 'id'> = {
    name: '',
    description: '',
    status: 'Active',
    clinicId: undefined,
    email: '',
    isActive: true,
    roles: []
  };
  editId: number | null = null;
  selectedRecord: CrudRecord | null = null;
  searchText = '';
  statusFilter = 'all';
  clinicFilter = 'all';
  rolesCsv = '';
  message = '';
  isSaving = false;
  deletingIds = new Set<number>();
  private authFailed = false;
  private roleCatalog = new Map<number, string>();
  private roleNameToId = new Map<string, number>();
  private roleSyncStateByUserId = new Map<number, RoleSyncState>();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly http: HttpClient,
    private readonly authService: AdminAuthService
  ) {}

  private readonly apiBaseUrl = inject(API_BASE_URL);
  private readonly requestTimeoutMs = 10000;

  get isEditMode(): boolean {
    return this.editId !== null;
  }

  get showForm(): boolean {
    if (this.currentAction === 'create') {
      return true;
    }

    return this.currentAction === 'edit' && this.editId !== null;
  }

  get filteredRecords(): CrudRecord[] {
    const search = this.searchText.trim().toLowerCase();

    return this.records.filter((record) => {
      const searchOk =
        !search ||
        record.name.toLowerCase().includes(search) ||
        record.description.toLowerCase().includes(search) ||
        record.email.toLowerCase().includes(search);

      const statusOk =
        this.statusFilter === 'all' ||
        (this.statusFilter === 'active' && record.isActive) ||
        (this.statusFilter === 'inactive' && !record.isActive);

      const clinicOk = this.clinicFilter === 'all' || String(record.clinicId ?? '') === this.clinicFilter;

      return searchOk && statusOk && clinicOk;
    });
  }

  get clinicOptions(): string[] {
    const clinics = this.records
      .map((record) => record.clinicId)
      .filter((value): value is number => typeof value === 'number')
      .map((value) => String(value));

    return Array.from(new Set(clinics)).sort((a, b) => Number(a) - Number(b));
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.entity = params.get('entity') ?? '';
      const segments = this.router.url.split('?')[0].split('/').filter(Boolean);
      this.currentAction = segments.length > 2 ? segments[2] : 'list';
      const editIdParam = params.get('id');
      this.editId = editIdParam ? Number(editIdParam) : null;
      this.title = `${this.toTitle(this.entity)} CRUD`;
      this.loadRecords();

      this.applyEditSelection();
    });
  }

  private applyEditSelection(): void {
    if (this.editId !== null) {
      const found = this.records.find((record) => record.id === this.editId);
      if (found) {
        this.form = {
          name: found.name,
          description: found.description,
          status: found.status,
          clinicId: found.clinicId,
          email: found.email,
          isActive: found.isActive,
          roles: [...found.roles]
        };
        this.rolesCsv = found.roles.join(', ');
        this.selectedRecord = found;
      }
    } else {
      this.resetFormValues();
    }
  }

  save(): void {
    if (this.isSaving) {
      return;
    }

    if (!this.form.name.trim()) {
      return;
    }

    this.isSaving = true;

    const roles = this.entity === 'users' ? this.parseRolesCsv(this.rolesCsv) : [];
    const fallbackId = this.editId ?? (this.records.length ? Math.max(...this.records.map((record) => record.id)) + 1 : 1);
    const draftRecord: CrudRecord = {
      id: fallbackId,
      name: this.form.name.trim(),
      description: this.form.description.trim(),
      email: this.form.email.trim(),
      clinicId: this.form.clinicId,
      isActive: this.form.isActive,
      status: this.form.isActive ? 'Active' : 'Inactive',
      roles
    };
    const payload = this.toApiPayload(draftRecord);

    if (this.editId !== null) {
      this.updateRecordWithFallback(this.editId, payload).subscribe((saved) => {
        if (saved) {
          this.message = 'Record updated.';
          this.loadRecords();
          if (this.entity === 'users') {
            this.syncUserRolesToApi(draftRecord);
          }
          this.isSaving = false;
          this.resetForm();
          return;
        }

        this.records = this.records.map((record) => (record.id === this.editId ? draftRecord : record));
        this.persistRecords();
        this.selectedRecord = this.records.find((item) => item.id === this.editId) || null;
        this.message = 'API update endpoint not available. Updated locally.';

        if (this.entity === 'users' && this.selectedRecord) {
          this.syncUserRolesToApi(this.selectedRecord);
        }

        this.isSaving = false;
        this.resetForm();
      });
      return;
    }

    this.createRecordWithFallback(payload).subscribe((saved) => {
      if (saved) {
        this.message = 'Record created.';
        this.loadRecords();
        this.isSaving = false;
        this.resetForm();
        return;
      }

      this.records = [...this.records, draftRecord];
      this.persistRecords();
      this.selectedRecord = draftRecord;
      this.message = 'API create endpoint not available. Saved locally.';

      if (this.entity === 'users') {
        this.syncUserRolesToApi(draftRecord);
      }

      this.isSaving = false;
      this.resetForm();
    });
  }

  edit(id: number): void {
    this.router.navigate(['/admin', this.entity, 'edit', id]);
  }

  remove(id: number): void {
    if (this.isSaving || this.deletingIds.has(id)) {
      return;
    }

    this.deletingIds.add(id);
    this.deleteRecordWithFallback(id).subscribe((deleted) => {
      this.records = this.records.filter((record) => record.id !== id);
      this.persistRecords();
      this.message = deleted ? 'Record deleted.' : 'API delete endpoint not available. Removed locally.';
      this.deletingIds.delete(id);

      if (this.editId === id) {
        this.resetForm();
      }
    });
  }

  resetForm(): void {
    this.router.navigate(['/admin', this.entity, 'list']);
    this.editId = null;
    this.resetFormValues();
  }

  startCreate(): void {
    this.router.navigate(['/admin', this.entity, 'create']);
  }

  selectRecord(record: CrudRecord): void {
    this.selectedRecord = record;
  }

  roleSyncState(userId: number): RoleSyncState {
    return this.roleSyncStateByUserId.get(userId) ?? 'idle';
  }

  roleSyncLabel(userId: number): string {
    const state = this.roleSyncState(userId);
    if (state === 'syncing') {
      return 'Syncing';
    }

    if (state === 'success') {
      return 'Synced';
    }

    if (state === 'partial') {
      return 'Partial';
    }

    if (state === 'failed') {
      return 'Failed';
    }

    return '-';
  }

  private storageKey(): string {
    return `admin-crud-${this.entity}`;
  }

  private loadRecords(): void {
    this.records = [];
    this.authFailed = false;
    this.loadRecordsFromApi();
  }

  private loadRecordsFromApi(): void {
    const endpoints = this.resolveEntityEndpoints();

    this.loadRecordsFromEndpoint(endpoints, 0);
  }

  private loadRecordsFromEndpoint(endpoints: string[], index: number): void {
    if (index >= endpoints.length) {
      this.loadRecordsFromStorage();
      this.message = this.records.length > 0 ? 'Showing cached data.' : 'Failed to load data from API.';
      this.applyEditSelection();
      return;
    }

    this.http
      .get<unknown>(`${this.apiBaseUrl}/${endpoints[index]}`, { withCredentials: true })
      .pipe(
        timeout(this.requestTimeoutMs),
        map((response) => this.extractArrayPayload(response)),
        map((items) => items.map((item, itemIndex) => this.toCrudRecord(item, itemIndex))),
        catchError((error) => {
          if (error?.status === 401) {
            this.handleUnauthorized();
            return of(null);
          }

          console.error(`[Admin CRUD] Failed to load ${endpoints[index]}`, error);
          return of(null);
        })
      )
      .subscribe((items) => {
        if (items === null) {
          if (this.authFailed) {
            return;
          }

          this.loadRecordsFromEndpoint(endpoints, index + 1);
          return;
        }

        this.records = items;
        this.persistRecords();
        this.selectedRecord = this.records.length > 0 ? this.records[0] : null;
        this.rolesCsv = this.selectedRecord?.roles.join(', ') ?? '';
        this.applyEditSelection();
        this.message = '';

        if (this.entity === 'users') {
          this.loadUserRolesFromApi();
        }
      });
  }

  private loadUserRolesFromApi(): void {
    forkJoin({
      roles: this.getEndpointArray(this.resolveRoleEndpoints()),
      userRoles: this.getEndpointArray(this.resolveUserRoleEndpoints())
    }).subscribe(({ roles, userRoles }) => {
      const roleRecords = roles.map((item) => this.toRoleRecord(item)).filter((item): item is RoleRecord => item !== null);
      const assignmentRecords = userRoles
        .map((item) => this.toUserRoleAssignment(item))
        .filter((item): item is UserRoleAssignment => item !== null);

      this.roleCatalog = new Map<number, string>();
      this.roleNameToId = new Map<string, number>();

      for (const role of roleRecords) {
        this.roleCatalog.set(role.id, role.name);
        this.roleNameToId.set(role.name.toLowerCase(), role.id);
      }

      const rolesByUser = new Map<number, string[]>();
      for (const assignment of assignmentRecords) {
        const roleName = this.roleCatalog.get(assignment.roleId);
        if (!roleName) {
          continue;
        }

        const existing = rolesByUser.get(assignment.userId) ?? [];
        if (!existing.includes(roleName)) {
          existing.push(roleName);
        }
        rolesByUser.set(assignment.userId, existing);
      }

      this.records = this.records.map((record) => ({
        ...record,
        roles: rolesByUser.get(record.id) ?? record.roles
      }));

      if (this.selectedRecord) {
        this.selectedRecord = this.records.find((record) => record.id === this.selectedRecord!.id) ?? this.selectedRecord;
      }

      if (this.isEditMode && this.selectedRecord) {
        this.rolesCsv = this.selectedRecord.roles.join(', ');
      }
    });
  }

  private syncUserRolesToApi(user: CrudRecord): void {
    this.roleSyncStateByUserId.set(user.id, 'syncing');

    const desiredRoleNames = user.roles;

    forkJoin({
      roles: this.getEndpointArray(this.resolveRoleEndpoints()),
      userRoles: this.getEndpointArray(this.resolveUserRoleEndpoints())
    }).subscribe(({ roles, userRoles }) => {
      const roleRecords = roles.map((item) => this.toRoleRecord(item)).filter((item): item is RoleRecord => item !== null);
      const assignmentRecords = userRoles
        .map((item) => this.toUserRoleAssignment(item))
        .filter((item): item is UserRoleAssignment => item !== null)
        .filter((item) => item.userId === user.id);

      const roleNameToId = new Map<string, number>();
      for (const role of roleRecords) {
        roleNameToId.set(role.name.toLowerCase(), role.id);
      }

      const desiredRoleIds = desiredRoleNames
        .map((roleName) => roleNameToId.get(roleName.toLowerCase()))
        .filter((value): value is number => typeof value === 'number');

      const currentRoleIds = assignmentRecords.map((assignment) => assignment.roleId);
      const toAdd = desiredRoleIds.filter((roleId) => !currentRoleIds.includes(roleId));
      const toRemove = assignmentRecords.filter((assignment) => !desiredRoleIds.includes(assignment.roleId));

      const addRequests = toAdd.map((roleId) => this.addUserRole(user.id, roleId));
      const removeRequests = toRemove.map((assignment) => this.removeUserRole(assignment.id));
      const requests = [...addRequests, ...removeRequests];

      if (requests.length === 0) {
        this.roleSyncStateByUserId.set(user.id, 'success');
        this.loadUserRolesFromApi();
        return;
      }

      forkJoin(requests).subscribe((results) => {
        const succeeded = results.filter((result) => result).length;

        if (succeeded === results.length) {
          this.roleSyncStateByUserId.set(user.id, 'success');
          this.message = 'User roles synced with API.';
          this.loadUserRolesFromApi();
          return;
        }

        if (succeeded === 0) {
          this.roleSyncStateByUserId.set(user.id, 'failed');
          this.message = 'Failed to sync some role assignments with API.';
          this.loadUserRolesFromApi();
          return;
        }

        this.roleSyncStateByUserId.set(user.id, 'partial');
        this.message = 'Partially synced role assignments with API.';
        this.loadUserRolesFromApi();
      });
    });
  }

  private addUserRole(userId: number, roleId: number, index = 0): Observable<boolean> {
    const endpoints = this.resolveUserRoleEndpoints();
    if (index >= endpoints.length) {
      return of(false);
    }

    return this.http
      .post<unknown>(`${this.apiBaseUrl}/${endpoints[index]}`, { UserId: userId, RoleId: roleId }, { withCredentials: true })
      .pipe(
        timeout(this.requestTimeoutMs),
        map(() => true),
        catchError(() => this.addUserRole(userId, roleId, index + 1))
      );
  }

  private removeUserRole(assignmentId: number, index = 0): Observable<boolean> {
    const endpoints = this.resolveUserRoleEndpoints();
    if (index >= endpoints.length) {
      return of(false);
    }

    return this.http
      .delete<unknown>(`${this.apiBaseUrl}/${endpoints[index]}/${assignmentId}`, { withCredentials: true })
      .pipe(
        timeout(this.requestTimeoutMs),
        map(() => true),
        catchError(() => this.removeUserRole(assignmentId, index + 1))
      );
  }

  private getEndpointArray(endpoints: string[], index = 0): Observable<Array<Record<string, unknown>>> {
    if (index >= endpoints.length) {
      return of([]);
    }

    return this.http.get<unknown>(`${this.apiBaseUrl}/${endpoints[index]}`, { withCredentials: true }).pipe(
      timeout(this.requestTimeoutMs),
      map((payload) => this.extractArrayPayload(payload)),
      catchError(() => this.getEndpointArray(endpoints, index + 1))
    );
  }

  private resolveRoleEndpoints(): string[] {
    return ['roles', 'role'];
  }

  private resolveUserRoleEndpoints(): string[] {
    return ['userroles', 'userrole'];
  }

  private toRoleRecord(item: Record<string, unknown>): RoleRecord | null {
    const id = this.toOptionalNumber(item['Id'] ?? item['id']);
    const name = this.pickString(item, ['Name', 'name', 'Title', 'title']);

    if (!id || !name) {
      return null;
    }

    return { id, name };
  }

  private toUserRoleAssignment(item: Record<string, unknown>): UserRoleAssignment | null {
    const id = this.toOptionalNumber(item['Id'] ?? item['id']);
    const userId = this.toOptionalNumber(item['UserId'] ?? item['userId']);
    const roleId = this.toOptionalNumber(item['RoleId'] ?? item['roleId']);

    if (!id || !userId || !roleId) {
      return null;
    }

    return { id, userId, roleId };
  }

  private handleUnauthorized(): void {
    if (this.authFailed) {
      return;
    }

    this.authFailed = true;
    this.message = 'Session expired. Please log in again.';
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/admin']);
    });
  }

  private loadRecordsFromStorage(): void {
    const raw = localStorage.getItem(this.storageKey());
    if (!raw) {
      this.records = [];
      return;
    }

    try {
      const parsed = JSON.parse(raw) as CrudRecord[];
      this.records = Array.isArray(parsed) ? parsed : [];
    } catch {
      this.records = [];
    }
  }

  private resolveEntityEndpoints(): string[] {
    const candidates = [this.entity];

    if (this.entity === 'users') {
      candidates.push('user');
    }

    if (this.entity.endsWith('s') && this.entity.length > 1) {
      candidates.push(this.entity.slice(0, -1));
    }

    return Array.from(new Set(candidates));
  }

  private toApiPayload(record: CrudRecord): Record<string, unknown> {
    return {
      Id: record.id,
      Name: record.name,
      Description: record.description,
      Email: record.email,
      clinicId: record.clinicId,
      IsActive: record.isActive,
      Status: record.status,
      Roles: record.roles
    };
  }

  private createRecordWithFallback(payload: Record<string, unknown>, index = 0): Observable<boolean> {
    const endpoints = this.resolveEntityEndpoints();
    if (index >= endpoints.length) {
      return of(false);
    }

    return this.http.post<unknown>(`${this.apiBaseUrl}/${endpoints[index]}`, payload, { withCredentials: true }).pipe(
      timeout(this.requestTimeoutMs),
      map(() => true),
      catchError((error) => {
        if (error?.status === 401) {
          this.handleUnauthorized();
          return of(false);
        }

        return this.createRecordWithFallback(payload, index + 1);
      })
    );
  }

  private updateRecordWithFallback(recordId: number, payload: Record<string, unknown>, index = 0): Observable<boolean> {
    const endpoints = this.resolveEntityEndpoints().map((endpoint) => `${endpoint}/${recordId}`);
    return this.updateRecordWithPut(endpoints, payload, 0, index);
  }

  private updateRecordWithPut(
    endpoints: string[],
    payload: Record<string, unknown>,
    index = 0,
    startIndex = 0
  ): Observable<boolean> {
    const currentIndex = index + startIndex;
    if (currentIndex >= endpoints.length) {
      return this.updateRecordWithPatch(endpoints, payload, 0);
    }

    return this.http.put<unknown>(`${this.apiBaseUrl}/${endpoints[currentIndex]}`, payload, { withCredentials: true }).pipe(
      timeout(this.requestTimeoutMs),
      map(() => true),
      catchError((error) => {
        if (error?.status === 401) {
          this.handleUnauthorized();
          return of(false);
        }

        return this.updateRecordWithPut(endpoints, payload, index + 1, startIndex);
      })
    );
  }

  private updateRecordWithPatch(endpoints: string[], payload: Record<string, unknown>, index = 0): Observable<boolean> {
    if (index >= endpoints.length) {
      return of(false);
    }

    return this.http.patch<unknown>(`${this.apiBaseUrl}/${endpoints[index]}`, payload, { withCredentials: true }).pipe(
      timeout(this.requestTimeoutMs),
      map(() => true),
      catchError((error) => {
        if (error?.status === 401) {
          this.handleUnauthorized();
          return of(false);
        }

        return this.updateRecordWithPatch(endpoints, payload, index + 1);
      })
    );
  }

  private deleteRecordWithFallback(recordId: number, index = 0): Observable<boolean> {
    const endpoints = this.resolveEntityEndpoints();
    if (index >= endpoints.length) {
      return of(false);
    }

    return this.http
      .delete<unknown>(`${this.apiBaseUrl}/${endpoints[index]}/${recordId}`, { withCredentials: true })
      .pipe(
        timeout(this.requestTimeoutMs),
        map(() => true),
        catchError((error) => {
          if (error?.status === 401) {
            this.handleUnauthorized();
            return of(false);
          }

          return this.deleteRecordWithFallback(recordId, index + 1);
        })
      );
  }

  private extractArrayPayload(payload: unknown): Array<Record<string, unknown>> {
    return this.findFirstArray(payload);
  }

  private toCrudRecord(item: Record<string, unknown>, index: number): CrudRecord {
    const idValue = item['Id'] ?? item['id'];
    const id = this.toOptionalNumber(idValue) ?? index + 1;

    const firstName = this.pickString(item, ['FirstName', 'firstName']);
    const lastName = this.pickString(item, ['LastName', 'lastName']);
    const fullName = `${firstName} ${lastName}`.trim();

    const name =
      this.pickString(item, ['Name', 'name']) ||
      this.pickString(item, ['Username', 'username']) ||
      this.pickString(item, ['FullName', 'fullName']) ||
      fullName ||
      this.pickString(item, ['Title', 'title']) ||
      this.pickString(item, ['InvoiceNumber', 'invoiceNumber']) ||
      this.pickString(item, ['MedicationName', 'medicationName']) ||
      this.pickString(item, ['TestName', 'testName']) ||
      this.pickString(item, ['ReferenceNumber', 'referenceNumber']) ||
      `Item ${id}`;

    const description =
      this.pickString(item, ['Description', 'description']) ||
      this.pickString(item, ['Status', 'status']) ||
      this.pickString(item, ['Position', 'position']) ||
      this.pickString(item, ['Reason', 'reason']) ||
      this.pickString(item, ['Notes', 'notes']) ||
      this.pickString(item, ['Email', 'email']) ||
      '';

    const status = this.pickString(item, ['Status', 'status']) || '';
    const email = this.pickString(item, ['Email', 'email']);
    const clinicId = this.toOptionalNumber(item['clinicId'] ?? item['clinicId']);
    const isActive = this.toBoolean(item['IsActive'] ?? item['isActive'], status);
    const roles = this.extractRoles(item);

    return {
      id,
      name,
      description,
      status: status || (isActive ? 'Active' : 'Inactive'),
      clinicId,
      email,
      isActive,
      roles
    };
  }

  private extractRoles(item: Record<string, unknown>): string[] {
    const directCandidates = [item['Role'], item['role'], item['Roles'], item['roles']];

    for (const candidate of directCandidates) {
      const parsed = this.parseRolesValue(candidate);
      if (parsed.length > 0) {
        return parsed;
      }
    }

    const nestedCandidates = [item['UserRoles'], item['userRoles'], item['RoleNames'], item['roleNames']];
    for (const candidate of nestedCandidates) {
      const parsed = this.parseRolesValue(candidate);
      if (parsed.length > 0) {
        return parsed;
      }
    }

    return [];
  }

  private parseRolesValue(value: unknown): string[] {
    if (typeof value === 'string') {
      return this.parseRolesCsv(value);
    }

    if (Array.isArray(value)) {
      const mapped = value
        .map((entry) => {
          if (typeof entry === 'string') {
            return entry;
          }

          if (entry && typeof entry === 'object') {
            const record = entry as Record<string, unknown>;
            const roleName = this.pickString(record, ['Name', 'name', 'RoleName', 'roleName', 'Title', 'title']);
            return roleName;
          }

          return '';
        })
        .filter((entry) => entry.trim().length > 0)
        .map((entry) => entry.trim());

      return Array.from(new Set(mapped));
    }

    return [];
  }

  private parseRolesCsv(value: string): string[] {
    const parsed = value
      .split(',')
      .map((entry) => entry.trim())
      .filter((entry) => entry.length > 0);

    return Array.from(new Set(parsed));
  }

  private findFirstArray(value: unknown): Array<Record<string, unknown>> {
    if (Array.isArray(value)) {
      return value as Array<Record<string, unknown>>;
    }

    if (!value || typeof value !== 'object') {
      return [];
    }

    const record = value as Record<string, unknown>;
    const keys = ['data', 'items', 'results', 'rows', 'value', '$values'];

    for (const key of keys) {
      const nested = record[key];
      if (Array.isArray(nested)) {
        return nested as Array<Record<string, unknown>>;
      }
    }

    for (const nestedValue of Object.values(record)) {
      const found = this.findFirstArray(nestedValue);
      if (found.length > 0) {
        return found;
      }
    }

    return [];
  }

  private pickString(item: Record<string, unknown>, keys: string[]): string {
    for (const key of keys) {
      const value = item[key];
      if (typeof value === 'string' && value.trim().length > 0) {
        return value;
      }
    }

    return '';
  }

  private toOptionalNumber(value: unknown): number | undefined {
    if (typeof value === 'number' && Number.isFinite(value)) {
      return value;
    }

    if (typeof value === 'string' && value.trim().length > 0) {
      const parsed = Number(value);
      if (Number.isFinite(parsed)) {
        return parsed;
      }
    }

    return undefined;
  }

  private toBoolean(value: unknown, statusText: string): boolean {
    if (typeof value === 'boolean') {
      return value;
    }

    if (typeof value === 'number') {
      return value === 1;
    }

    if (typeof value === 'string') {
      const normalized = value.trim().toLowerCase();
      if (normalized === '1' || normalized === 'true' || normalized === 'active') {
        return true;
      }

      if (normalized === '0' || normalized === 'false' || normalized === 'inactive') {
        return false;
      }
    }

    return !statusText.toLowerCase().includes('inactive');
  }

  private persistRecords(): void {
    localStorage.setItem(this.storageKey(), JSON.stringify(this.records));
  }

  private resetFormValues(): void {
    this.form = {
      name: '',
      description: '',
      status: 'Active',
      clinicId: undefined,
      email: '',
      isActive: true,
      roles: []
    };
    this.rolesCsv = '';
  }

  toTitle(value: string): string {
    if (!value) {
      return 'Admin';
    }

    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
