import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Appointment } from '../appointments.model';
import { AppointmentsService } from '../appointments.service';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="appointments-page">
      <header class="toolbar">
        <div>
          <h2>Appointments</h2>
          <p>Manage scheduling, status, and clinical handoff actions.</p>
        </div>
        <div class="toolbar-actions">
          <button type="button" class="secondary" (click)="viewMode = viewMode === 'list' ? 'calendar' : 'list'" [disabled]="isSaving">
            {{ viewMode === 'list' ? 'Calendar View' : 'List View' }}
          </button>
          <button type="button" (click)="startCreate()" [disabled]="isSaving">+ New Appointment</button>
        </div>
      </header>

      <div class="filters">
        <input type="date" [(ngModel)]="fromDate" aria-label="From date" />
        <input type="date" [(ngModel)]="toDate" aria-label="To date" />

        <select [(ngModel)]="clinicFilter" aria-label="Filter by clinic">
          <option value="all">All clinics</option>
          <option *ngFor="let clinic of clinicOptions" [value]="clinic">clinic {{ clinic }}</option>
        </select>

        <select [(ngModel)]="doctorFilter" aria-label="Filter by doctor">
          <option value="all">All Doctors</option>
          <option *ngFor="let doctor of doctorOptions" [value]="doctor">Doctor {{ doctor }}</option>
        </select>

        <select [(ngModel)]="statusFilter" aria-label="Filter by status">
          <option value="all">All Statuses</option>
          <option value="Scheduled">Scheduled</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
          <option value="NoShow">No Show</option>
        </select>

        <select [(ngModel)]="roomFilter" aria-label="Filter by room">
          <option value="all">All Rooms</option>
          <option *ngFor="let room of roomOptions" [value]="room">Room {{ room }}</option>
        </select>
      </div>

      <p *ngIf="loading">Loading...</p>
      <p *ngIf="error" class="error">{{ error }}</p>

      <div class="layout" *ngIf="!loading && !error">
        <div class="card">
          <table *ngIf="viewMode === 'list' && filteredAppointments.length > 0" class="appointments-table">
            <thead>
              <tr>
                <th>Scheduled At</th>
                <th>Duration</th>
                <th>Patient</th>
                <th>Doctor</th>
                <th>Room</th>
                <th>Status</th>
                <th>Reason</th>
              </tr>
            </thead>
            <tbody>
              <tr
                *ngFor="let item of filteredAppointments"
                (click)="selectAppointment(item)"
                [class.selected]="selectedAppointment?.Id === item.Id"
              >
                <td>{{ formatDateTime(item.ScheduledAt) }}</td>
                <td>{{ item.DurationMinutes || 30 }} min</td>
                <td>{{ patientLabel(item) }}</td>
                <td>{{ doctorLabel(item) }}</td>
                <td>{{ roomLabel(item) }}</td>
                <td>
                  <span class="status" [class.cancelled]="item.Status === 'Cancelled'" [class.completed]="item.Status === 'Completed'">
                    {{ item.Status }}
                  </span>
                </td>
                <td>{{ item.Reason || '-' }}</td>
              </tr>
            </tbody>
          </table>

          <div *ngIf="viewMode === 'calendar'" class="calendar">
            <div *ngFor="let group of groupedByDay" class="calendar-day">
              <h4>{{ group.day }}</h4>
              <div *ngFor="let item of group.items" class="calendar-item" (click)="selectAppointment(item)">
                <strong>{{ timeOnly(item.ScheduledAt) }}</strong>
                <span>{{ patientLabel(item) }} · {{ doctorLabel(item) }} · {{ roomLabel(item) }}</span>
                <span class="status">{{ item.Status }}</span>
              </div>
            </div>
            <p *ngIf="groupedByDay.length === 0" class="empty">No appointments in selected date range.</p>
          </div>

          <p *ngIf="viewMode === 'list' && filteredAppointments.length === 0" class="empty">No appointments found.</p>
        </div>

        <aside class="card detail" *ngIf="selectedAppointment">
          <h3>Appointment #{{ selectedAppointment.Id }}</h3>
          <p>{{ formatDateTime(selectedAppointment.ScheduledAt) }}</p>

          <div class="status-actions">
            <button type="button" (click)="setStatus('Completed')" [disabled]="isSaving">Complete</button>
            <button type="button" class="secondary" (click)="setStatus('Cancelled')" [disabled]="isSaving">Cancel</button>
            <button type="button" class="secondary" (click)="setStatus('NoShow')" [disabled]="isSaving">Mark No-Show</button>
          </div>

          <div class="reschedule">
            <label>
              Reschedule
              <input type="datetime-local" [(ngModel)]="rescheduleDateTime" />
            </label>
            <button type="button" class="secondary" (click)="rescheduleSelected()" [disabled]="isSaving">Apply</button>
          </div>

          <div class="panel">
            <p><strong>Patient:</strong> {{ patientLabel(selectedAppointment) }}</p>
            <p><strong>Doctor:</strong> {{ doctorLabel(selectedAppointment) }}</p>
            <p><strong>Room:</strong> {{ roomLabel(selectedAppointment) }}</p>
            <p><strong>Reason:</strong> {{ selectedAppointment.Reason || '-' }}</p>
            <p><strong>Notes:</strong> {{ selectedAppointment.Notes || '-' }}</p>
          </div>

          <div class="link-actions">
            <button type="button" class="secondary" [disabled]="isSaving">Create Medical Record</button>
            <button type="button" class="secondary" [disabled]="isSaving">Add Lab Result</button>
            <button type="button" class="secondary" [disabled]="isSaving">Create Prescription</button>
            <button type="button" class="secondary" [disabled]="isSaving">Create Invoice</button>
          </div>
        </aside>
      </div>

      <section class="card create-form" *ngIf="showCreateForm">
        <h3>New Appointment</h3>
        <form (ngSubmit)="createAppointment()">
          <div class="grid two-col">
            <label>
              clinic Id
              <input type="number" name="clinicId" [(ngModel)]="form.clinicId" required />
            </label>
            <label>
              Patient Id
              <input type="number" name="patientId" [(ngModel)]="form.PatientId" required />
            </label>
            <label>
              Doctor Id
              <input type="number" name="doctorId" [(ngModel)]="form.DoctorId" required />
            </label>
            <label>
              Room Id
              <input type="number" name="roomId" [(ngModel)]="form.RoomId" />
            </label>
            <label>
              Scheduled At
              <input type="datetime-local" name="scheduledAt" [(ngModel)]="formScheduledLocal" required />
            </label>
            <label>
              Duration Minutes
              <input type="number" name="duration" [(ngModel)]="form.DurationMinutes" min="5" />
            </label>
            <label class="full">
              Reason
              <input name="reason" [(ngModel)]="form.Reason" />
            </label>
            <label class="full">
              Notes
              <input name="notes" [(ngModel)]="form.Notes" />
            </label>
          </div>

          <p class="warning" *ngIf="hasConflict(form)">Conflict warning: overlapping appointment for same doctor or room.</p>

          <div class="actions">
            <button type="submit" [disabled]="isSaving || hasConflict(form)">{{ isSaving ? 'Saving...' : 'Save Appointment' }}</button>
            <button type="button" class="secondary" (click)="cancelCreate()" [disabled]="isSaving">Cancel</button>
          </div>
        </form>
      </section>
    </section>
  `,
  styles: [
    `
      .appointments-page {
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

      .toolbar-actions {
        display: flex;
        gap: 8px;
      }

      button {
        border: 1px solid #1e40af;
        background: #1e40af;
        color: white;
        border-radius: 10px;
        padding: 8px 12px;
        font-weight: 600;
        cursor: pointer;
      }

      .secondary {
        border-color: #cbd5e1;
        background: white;
        color: #0f172a;
      }

      .filters {
        display: grid;
        grid-template-columns: repeat(6, minmax(130px, 1fr));
        gap: 8px;
      }

      .filters input,
      .filters select,
      .create-form input {
        border: 1px solid #cbd5e1;
        border-radius: 8px;
        padding: 8px 10px;
      }

      .layout {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 12px;
      }

      .card {
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        background: white;
        padding: 12px;
      }

      .appointments-table {
        width: 100%;
        border-collapse: collapse;
      }

      .appointments-table th,
      .appointments-table td {
        border-bottom: 1px solid #e2e8f0;
        padding: 8px;
        text-align: left;
        vertical-align: top;
      }

      .appointments-table tr {
        cursor: pointer;
      }

      .appointments-table tr.selected {
        background: #eff6ff;
      }

      .status {
        border: 1px solid #f59e0b;
        color: #b45309;
        border-radius: 999px;
        padding: 2px 8px;
        font-size: 0.75rem;
        white-space: nowrap;
      }

      .status.completed {
        border-color: #16a34a;
        color: #166534;
      }

      .status.cancelled {
        border-color: #dc2626;
        color: #991b1b;
      }

      .calendar {
        display: grid;
        gap: 10px;
      }

      .calendar-day h4 {
        margin: 0 0 6px;
      }

      .calendar-item {
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        padding: 8px;
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        align-items: center;
        margin-bottom: 6px;
        cursor: pointer;
      }

      .status-actions,
      .link-actions,
      .actions {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      .reschedule {
        margin: 10px 0;
        display: grid;
        gap: 6px;
      }

      .reschedule label {
        display: grid;
        gap: 4px;
        font-weight: 600;
      }

      .panel p {
        margin: 4px 0;
      }

      .grid.two-col {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
      }

      .grid.two-col label {
        display: grid;
        gap: 4px;
        font-weight: 600;
      }

      .grid.two-col .full {
        grid-column: 1 / -1;
      }

      .warning {
        color: #b45309;
        margin: 10px 0 0;
      }

      .error {
        color: #dc2626;
      }

      .empty {
        margin: 0;
        color: #64748b;
      }

      @media (max-width: 1100px) {
        .layout {
          grid-template-columns: 1fr;
        }

        .filters {
          grid-template-columns: repeat(3, minmax(120px, 1fr));
        }

        .grid.two-col {
          grid-template-columns: 1fr;
        }

        .grid.two-col .full {
          grid-column: auto;
        }
      }
    `
  ]
})
export class AppointmentsComponent implements OnInit {
  data: Appointment[] = [];
  loading = false;
  error: string | null = null;
  viewMode: 'list' | 'calendar' = 'list';
  fromDate = '';
  toDate = '';
  clinicFilter = 'all';
  doctorFilter = 'all';
  statusFilter = 'all';
  roomFilter = 'all';
  isSaving = false;
  selectedAppointment: Appointment | null = null;
  showCreateForm = false;
  rescheduleDateTime = '';
  form: Appointment = this.emptyForm();
  formScheduledLocal = '';

  constructor(private readonly appointmentsService: AppointmentsService) {}

  get filteredAppointments(): Appointment[] {
    return this.data.filter((item) => {
      const date = this.asDate(item.ScheduledAt);

      const fromOk = !this.fromDate || (date !== null && this.atStartOfDay(date) >= this.atStartOfDay(new Date(this.fromDate)));
      const toOk = !this.toDate || (date !== null && this.atStartOfDay(date) <= this.atStartOfDay(new Date(this.toDate)));
      const clinicOk = this.clinicFilter === 'all' || String(item.clinicId ?? '') === this.clinicFilter;
      const doctorOk = this.doctorFilter === 'all' || String(item.DoctorId ?? '') === this.doctorFilter;
      const statusOk = this.statusFilter === 'all' || item.Status === this.statusFilter;
      const roomOk = this.roomFilter === 'all' || String(item.RoomId ?? '') === this.roomFilter;

      return fromOk && toOk && clinicOk && doctorOk && statusOk && roomOk;
    });
  }

  get clinicOptions(): string[] {
    return this.distinctNumeric(this.data.map((item) => item.clinicId));
  }

  get doctorOptions(): string[] {
    return this.distinctNumeric(this.data.map((item) => item.DoctorId));
  }

  get roomOptions(): string[] {
    return this.distinctNumeric(this.data.map((item) => item.RoomId));
  }

  get groupedByDay(): Array<{ day: string; items: Appointment[] }> {
    const groups = new Map<string, Appointment[]>();

    for (const item of this.filteredAppointments) {
      const date = this.asDate(item.ScheduledAt);
      const key = date ? this.dateOnly(date) : 'Unknown Date';
      const list = groups.get(key) || [];
      list.push(item);
      groups.set(key, list);
    }

    return Array.from(groups.entries())
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([day, items]) => ({ day, items: items.sort((x, y) => x.ScheduledAt.localeCompare(y.ScheduledAt)) }));
  }

  ngOnInit(): void {
    this.loadAppointments();
  }

  private loadAppointments(selectId?: number): void {
    this.loading = true;
    this.error = null;
    this.appointmentsService.getAll().subscribe({
      next: (data) => {
        this.data = data;
        if (this.data.length === 0) {
          this.selectedAppointment = null;
        } else if (selectId) {
          this.selectedAppointment = this.data.find((item) => item.Id === selectId) || this.data[0];
        } else {
          this.selectedAppointment = this.data[0];
        }
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load appointments.';
        this.loading = false;
      }
    });
  }

  selectAppointment(item: Appointment): void {
    this.selectedAppointment = item;
    this.rescheduleDateTime = this.toLocalInputValue(item.ScheduledAt);
  }

  setStatus(status: 'Completed' | 'Cancelled' | 'NoShow'): void {
    if (!this.selectedAppointment || this.isSaving) {
      return;
    }

    const updated: Appointment = {
      ...this.selectedAppointment,
      Status: status
    };

    this.persistUpdate(updated);
  }

  rescheduleSelected(): void {
    if (!this.selectedAppointment || !this.rescheduleDateTime || this.isSaving) {
      return;
    }

    const newScheduledAt = new Date(this.rescheduleDateTime).toISOString();
    const updated: Appointment = {
      ...this.selectedAppointment,
      ScheduledAt: newScheduledAt,
      Status: this.selectedAppointment.Status === 'Cancelled' ? 'Scheduled' : this.selectedAppointment.Status
    };

    this.persistUpdate(updated);
  }

  startCreate(): void {
    this.showCreateForm = true;
    this.form = this.emptyForm();
    this.formScheduledLocal = this.toLocalInputValue(new Date().toISOString());
  }

  cancelCreate(): void {
    this.showCreateForm = false;
    this.form = this.emptyForm();
    this.formScheduledLocal = '';
  }

  createAppointment(): void {
    if (this.isSaving) {
      return;
    }

    if (!this.form.PatientId || !this.form.DoctorId || !this.formScheduledLocal) {
      return;
    }

    const candidate: Appointment = {
      ...this.form,
      Id: this.nextId(),
      ScheduledAt: new Date(this.formScheduledLocal).toISOString(),
      Status: 'Scheduled'
    };

    if (this.hasConflict(candidate)) {
      return;
    }

    this.loading = true;
    this.error = null;
    this.isSaving = true;
    this.appointmentsService.create(candidate).subscribe((saved) => {
      if (saved) {
        this.isSaving = false;
        this.showCreateForm = false;
        this.form = this.emptyForm();
        this.formScheduledLocal = '';
        this.loadAppointments();
        return;
      }

      this.data = [candidate, ...this.data];
      this.selectedAppointment = candidate;
      this.showCreateForm = false;
      this.form = this.emptyForm();
      this.formScheduledLocal = '';
      this.isSaving = false;
      this.loading = false;
      this.error = 'Appointment API create endpoint was not available. Saved locally in UI.';
    });
  }

  private persistUpdate(updated: Appointment): void {
    if (!updated.Id) {
      return;
    }

    this.loading = true;
    this.error = null;
    this.isSaving = true;
    this.appointmentsService.update(updated.Id, updated).subscribe((saved) => {
      if (saved) {
        this.isSaving = false;
        this.loadAppointments(updated.Id);
        return;
      }

      this.data = this.data.map((item) => (item.Id === updated.Id ? updated : item));
      this.selectedAppointment = this.data.find((item) => item.Id === updated.Id) || null;
      this.isSaving = false;
      this.loading = false;
      this.error = 'Appointment API update endpoint was not available. Updated locally in UI.';
    });
  }

  hasConflict(candidate: Appointment): boolean {
    const scheduledAt = candidate.ScheduledAt || (this.formScheduledLocal ? new Date(this.formScheduledLocal).toISOString() : '');
    if (!scheduledAt) {
      return false;
    }

    const start = this.asDate(scheduledAt);
    if (!start) {
      return false;
    }

    const duration = candidate.DurationMinutes || 30;
    const end = new Date(start.getTime() + duration * 60000);

    return this.data.some((item) => {
      if (item.Id === candidate.Id || item.Status === 'Cancelled') {
        return false;
      }

      const existingStart = this.asDate(item.ScheduledAt);
      if (!existingStart) {
        return false;
      }

      const existingDuration = item.DurationMinutes || 30;
      const existingEnd = new Date(existingStart.getTime() + existingDuration * 60000);
      const overlaps = start < existingEnd && end > existingStart;

      if (!overlaps) {
        return false;
      }

      const sameDoctor = !!candidate.DoctorId && candidate.DoctorId === item.DoctorId;
      const sameRoom = !!candidate.RoomId && !!item.RoomId && candidate.RoomId === item.RoomId;

      return sameDoctor || sameRoom;
    });
  }

  patientLabel(item: Appointment): string {
    return item.PatientName || `Patient #${item.PatientId || '-'}`;
  }

  doctorLabel(item: Appointment): string {
    return item.DoctorName || `Doctor #${item.DoctorId || '-'}`;
  }

  roomLabel(item: Appointment): string {
    if (item.RoomName) {
      return item.RoomName;
    }

    if (item.RoomId) {
      return `Room #${item.RoomId}`;
    }

    return '-';
  }

  formatDateTime(value: string): string {
    const date = this.asDate(value);
    if (!date) {
      return '-';
    }

    return `${this.dateOnly(date)} ${this.timeOnly(value)}`;
  }

  timeOnly(value: string): string {
    const date = this.asDate(value);
    if (!date) {
      return '--:--';
    }

    const hh = String(date.getHours()).padStart(2, '0');
    const mm = String(date.getMinutes()).padStart(2, '0');
    return `${hh}:${mm}`;
  }

  private emptyForm(): Appointment {
    return {
      Id: 0,
      PatientId: 0,
      DoctorId: 0,
      clinicId: 1,
      RoomId: undefined,
      ScheduledAt: '',
      DurationMinutes: 30,
      Reason: '',
      Notes: '',
      Status: 'Scheduled'
    };
  }

  private nextId(): number {
    return this.data.length > 0 ? Math.max(...this.data.map((item) => item.Id || 0)) + 1 : 1;
  }

  private distinctNumeric(values: Array<number | undefined>): string[] {
    const normalized = values
      .filter((value): value is number => typeof value === 'number')
      .map((value) => String(value));

    return Array.from(new Set(normalized)).sort((a, b) => Number(a) - Number(b));
  }

  private asDate(value: string): Date | null {
    if (!value) {
      return null;
    }

    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? null : date;
  }

  private dateOnly(date: Date): string {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  private atStartOfDay(date: Date): number {
    const clone = new Date(date);
    clone.setHours(0, 0, 0, 0);
    return clone.getTime();
  }

  private toLocalInputValue(value: string): string {
    const date = this.asDate(value);
    if (!date) {
      return '';
    }

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }
}

