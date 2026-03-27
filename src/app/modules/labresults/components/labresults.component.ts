import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { LabResult } from '../labresults.model';
import { LabResultsService } from '../labresults.service';

@Component({
  selector: 'app-labresults',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="labs-page">
      <header class="toolbar">
        <div>
          <h2>Lab Results</h2>
          <p>Track ordered, in-progress, and completed tests.</p>
        </div>
        <button type="button" (click)="startCreate()" [disabled]="isSaving">+ New Lab Result</button>
      </header>

      <div class="filters">
        <select [(ngModel)]="statusFilter" aria-label="Filter by status">
          <option value="all">All Statuses</option>
          <option value="Ordered">Ordered</option>
          <option value="InProgress">In Progress</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
        <input type="date" [(ngModel)]="fromDate" aria-label="From date" />
        <input type="date" [(ngModel)]="toDate" aria-label="To date" />
        <input type="text" [(ngModel)]="testSearch" placeholder="Test name" aria-label="Filter by test" />
        <input type="text" [(ngModel)]="patientSearch" placeholder="Patient id or name" aria-label="Filter by patient" />
        <input type="text" [(ngModel)]="doctorSearch" placeholder="Doctor id or name" aria-label="Filter by doctor" />
      </div>

      <p *ngIf="loading">Loading...</p>
      <p *ngIf="error" class="error">{{ error }}</p>

      <div class="layout" *ngIf="!loading && !error">
        <div class="card">
          <table *ngIf="filteredResults.length > 0" class="labs-table">
            <thead>
              <tr>
                <th>Status</th>
                <th>Test Name</th>
                <th>Patient</th>
                <th>Doctor</th>
                <th>Appointment</th>
                <th>Taken At</th>
                <th>Reported At</th>
              </tr>
            </thead>
            <tbody>
              <tr
                *ngFor="let item of filteredResults"
                (click)="selectResult(item)"
                [class.selected]="selectedResult?.Id === item.Id"
              >
                <td><span class="status" [class.completed]="item.Status === 'Completed'" [class.cancelled]="item.Status === 'Cancelled'">{{ item.Status }}</span></td>
                <td>{{ item.TestName }}</td>
                <td>{{ patientLabel(item) }}</td>
                <td>{{ doctorLabel(item) }}</td>
                <td>{{ item.AppointmentId ? ('#' + item.AppointmentId) : '-' }}</td>
                <td>{{ dateTime(item.TakenAt) }}</td>
                <td>{{ dateTime(item.ReportedAt) }}</td>
              </tr>
            </tbody>
          </table>
          <p *ngIf="filteredResults.length === 0" class="empty">No lab results found.</p>
        </div>

        <aside class="card detail" *ngIf="selectedResult">
          <h3>{{ selectedResult.TestName }}</h3>
          <p>{{ patientLabel(selectedResult) }} · {{ doctorLabel(selectedResult) }}</p>

          <div class="timeline">
            <span [class.active]="isAtLeast('Ordered', selectedResult.Status)">Ordered</span>
            <span [class.active]="isAtLeast('InProgress', selectedResult.Status)">In Progress</span>
            <span [class.active]="isAtLeast('Completed', selectedResult.Status)">Completed</span>
          </div>

          <div class="panel">
            <p><strong>Status:</strong> {{ selectedResult.Status }}</p>
            <p><strong>Taken At:</strong> {{ dateTime(selectedResult.TakenAt) }}</p>
            <p><strong>Reported At:</strong> {{ dateTime(selectedResult.ReportedAt) }}</p>
            <p><strong>Result:</strong> {{ selectedResult.ResultValue || '-' }} {{ selectedResult.Unit || '' }}</p>
            <p><strong>Reference Range:</strong> {{ selectedResult.ReferenceRange || '-' }}</p>
            <p><strong>Notes:</strong> {{ selectedResult.Notes || '-' }}</p>
          </div>

          <div class="actions">
            <button type="button" class="secondary" (click)="setStatus('Ordered')" [disabled]="isSaving">Set Ordered</button>
            <button type="button" class="secondary" (click)="setStatus('InProgress')" [disabled]="isSaving">Set In Progress</button>
            <button type="button" class="secondary" (click)="setStatus('Completed')" [disabled]="isSaving">Set Completed</button>
            <button type="button" class="secondary" [disabled]="isSaving">Print</button>
          </div>
        </aside>
      </div>

      <section class="card create-form" *ngIf="showCreateForm">
        <h3>New Lab Result</h3>
        <form (ngSubmit)="createResult()">
          <div class="grid two-col">
            <label>
              Patient Id
              <input type="number" name="patientId" [(ngModel)]="form.PatientId" required />
            </label>
            <label>
              Doctor Id
              <input type="number" name="doctorId" [(ngModel)]="form.DoctorId" />
            </label>
            <label>
              Appointment Id
              <input type="number" name="appointmentId" [(ngModel)]="form.AppointmentId" />
            </label>
            <label>
              Test Name
              <input name="testName" [(ngModel)]="form.TestName" required />
            </label>
            <label>
              Status
              <select name="status" [(ngModel)]="form.Status">
                <option value="Ordered">Ordered</option>
                <option value="InProgress">In Progress</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </label>
            <label>
              Taken At
              <input type="datetime-local" name="takenAt" [(ngModel)]="formTakenAt" />
            </label>
            <label>
              Reported At
              <input type="datetime-local" name="reportedAt" [(ngModel)]="formReportedAt" />
            </label>
            <label>
              Result Value
              <input name="resultValue" [(ngModel)]="form.ResultValue" />
            </label>
            <label>
              Unit
              <input name="unit" [(ngModel)]="form.Unit" />
            </label>
            <label>
              Reference Range
              <input name="referenceRange" [(ngModel)]="form.ReferenceRange" />
            </label>
            <label class="full">
              Notes
              <textarea name="notes" [(ngModel)]="form.Notes"></textarea>
            </label>
          </div>

          <div class="actions">
            <button type="submit" [disabled]="isSaving">{{ isSaving ? 'Saving...' : 'Save Lab Result' }}</button>
            <button type="button" class="secondary" (click)="cancelCreate()" [disabled]="isSaving">Cancel</button>
          </div>
        </form>
      </section>
    </section>
  `,
  styles: [
    `
      .labs-page {
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
        grid-template-columns: repeat(6, minmax(120px, 1fr));
        gap: 8px;
      }

      .filters input,
      .filters select,
      .create-form input,
      .create-form textarea,
      .create-form select {
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

      .labs-table {
        width: 100%;
        border-collapse: collapse;
      }

      .labs-table th,
      .labs-table td {
        border-bottom: 1px solid #e2e8f0;
        padding: 8px;
        text-align: left;
      }

      .labs-table tr {
        cursor: pointer;
      }

      .labs-table tr.selected {
        background: #eff6ff;
      }

      .status {
        border: 1px solid #f59e0b;
        color: #b45309;
        border-radius: 999px;
        padding: 2px 8px;
        font-size: 0.75rem;
      }

      .status.completed {
        border-color: #16a34a;
        color: #166534;
      }

      .status.cancelled {
        border-color: #dc2626;
        color: #991b1b;
      }

      .timeline {
        display: flex;
        gap: 8px;
        margin: 10px 0;
      }

      .timeline span {
        border: 1px solid #cbd5e1;
        border-radius: 999px;
        padding: 4px 10px;
        font-size: 0.8rem;
        color: #475569;
      }

      .timeline span.active {
        border-color: #1e40af;
        color: #1e40af;
        background: #dbeafe;
      }

      .panel p {
        margin: 4px 0;
      }

      .actions {
        margin-top: 10px;
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
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
          grid-template-columns: 1fr 1fr;
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
export class LabResultsComponent implements OnInit {
  data: LabResult[] = [];
  loading = false;
  error: string | null = null;
  statusFilter = 'all';
  fromDate = '';
  toDate = '';
  testSearch = '';
  patientSearch = '';
  doctorSearch = '';
  isSaving = false;
  selectedResult: LabResult | null = null;
  showCreateForm = false;
  form: LabResult = this.emptyForm();
  formTakenAt = '';
  formReportedAt = '';

  constructor(private readonly labResultsService: LabResultsService) {}

  get filteredResults(): LabResult[] {
    const testText = this.testSearch.trim().toLowerCase();
    const patientText = this.patientSearch.trim().toLowerCase();
    const doctorText = this.doctorSearch.trim().toLowerCase();

    return this.data.filter((item) => {
      const statusOk = this.statusFilter === 'all' || item.Status === this.statusFilter;

      const dateCandidate = item.ReportedAt || item.TakenAt || '';
      const date = dateCandidate ? new Date(dateCandidate) : null;
      const fromOk = !this.fromDate || (date !== null && this.startOfDay(date) >= this.startOfDay(new Date(this.fromDate)));
      const toOk = !this.toDate || (date !== null && this.startOfDay(date) <= this.startOfDay(new Date(this.toDate)));

      const testOk = !testText || (item.TestName || '').toLowerCase().includes(testText);
      const patientOk =
        !patientText || `${item.PatientId} ${item.PatientName || ''}`.toLowerCase().includes(patientText);
      const doctorOk =
        !doctorText || `${item.DoctorId || ''} ${item.DoctorName || ''}`.toLowerCase().includes(doctorText);

      return statusOk && fromOk && toOk && testOk && patientOk && doctorOk;
    });
  }

  ngOnInit(): void {
    this.loadResults();
  }

  private loadResults(selectId?: number): void {
    this.loading = true;
    this.error = null;
    this.labResultsService.getAll().subscribe({
      next: (data) => {
        this.data = data;
        if (this.data.length === 0) {
          this.selectedResult = null;
        } else if (selectId) {
          this.selectedResult = this.data.find((item) => item.Id === selectId) || this.data[0];
        } else {
          this.selectedResult = this.data[0];
        }
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load labresults.';
        this.loading = false;
      }
    });
  }

  selectResult(item: LabResult): void {
    this.selectedResult = item;
  }

  setStatus(status: 'Ordered' | 'InProgress' | 'Completed'): void {
    if (!this.selectedResult || this.isSaving) {
      return;
    }

    const updated: LabResult = {
      ...this.selectedResult,
      Status: status,
      ReportedAt: status === 'Completed' ? new Date().toISOString() : this.selectedResult.ReportedAt
    };

    this.loading = true;
    this.error = null;
    this.isSaving = true;
    this.labResultsService.update(updated.Id, updated).subscribe((saved) => {
      if (saved) {
        this.isSaving = false;
        this.loadResults(updated.Id);
        return;
      }

      this.data = this.data.map((item) => (item.Id === updated.Id ? updated : item));
      this.selectedResult = this.data.find((item) => item.Id === updated.Id) || null;
      this.isSaving = false;
      this.loading = false;
      this.error = 'Lab result API update endpoint was not available. Updated locally in UI.';
    });
  }

  startCreate(): void {
    this.showCreateForm = true;
    this.form = this.emptyForm();
    const now = this.toLocalInput(new Date());
    this.formTakenAt = now;
    this.formReportedAt = '';
  }

  cancelCreate(): void {
    this.showCreateForm = false;
    this.form = this.emptyForm();
    this.formTakenAt = '';
    this.formReportedAt = '';
  }

  createResult(): void {
    if (this.isSaving) {
      return;
    }

    if (!this.form.PatientId || !this.form.TestName?.trim()) {
      return;
    }

    const nextId = this.data.length > 0 ? Math.max(...this.data.map((item) => item.Id || 0)) + 1 : 1;

    const result: LabResult = {
      ...this.form,
      Id: 0,
      TestName: this.form.TestName.trim(),
      Status: this.form.Status || 'Ordered',
      TakenAt: this.formTakenAt ? new Date(this.formTakenAt).toISOString() : undefined,
      ReportedAt: this.formReportedAt ? new Date(this.formReportedAt).toISOString() : undefined,
      ResultValue: this.form.ResultValue || '-'
    };

    this.loading = true;
    this.error = null;
    this.isSaving = true;
    this.labResultsService.create(result).subscribe((saved) => {
      if (saved) {
        this.isSaving = false;
        this.cancelCreate();
        this.loadResults();
        return;
      }

      const localResult = { ...result, Id: nextId };
      this.data = [localResult, ...this.data];
      this.selectedResult = localResult;
      this.cancelCreate();
      this.isSaving = false;
      this.loading = false;
      this.error = 'Lab result API create endpoint was not available. Saved locally in UI.';
    });
  }

  patientLabel(item: LabResult): string {
    return item.PatientName || `Patient #${item.PatientId || '-'}`;
  }

  doctorLabel(item: LabResult): string {
    if (item.DoctorName) {
      return item.DoctorName;
    }

    if (item.DoctorId) {
      return `Doctor #${item.DoctorId}`;
    }

    return '-';
  }

  dateTime(value?: string): string {
    if (!value) {
      return '-';
    }

    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
      return '-';
    }

    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    const hh = String(date.getHours()).padStart(2, '0');
    const mm = String(date.getMinutes()).padStart(2, '0');
    return `${y}-${m}-${d} ${hh}:${mm}`;
  }

  isAtLeast(stage: 'Ordered' | 'InProgress' | 'Completed', status?: string): boolean {
    const order = ['Ordered', 'InProgress', 'Completed'];
    const currentIndex = order.indexOf(status || 'Ordered');
    const stageIndex = order.indexOf(stage);

    return currentIndex >= 0 && currentIndex >= stageIndex;
  }

  private emptyForm(): LabResult {
    return {
      Id: 0,
      PatientId: 0,
      DoctorId: undefined,
      AppointmentId: undefined,
      TestName: '',
      Status: 'Ordered',
      TakenAt: '',
      ReportedAt: '',
      ResultValue: '',
      Unit: '',
      ReferenceRange: '',
      Notes: ''
    };
  }

  private startOfDay(date: Date): number {
    if (Number.isNaN(date.getTime())) {
      return 0;
    }

    const clone = new Date(date);
    clone.setHours(0, 0, 0, 0);
    return clone.getTime();
  }

  private toLocalInput(date: Date): string {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    const hh = String(date.getHours()).padStart(2, '0');
    const mm = String(date.getMinutes()).padStart(2, '0');
    return `${y}-${m}-${d}T${hh}:${mm}`;
  }
}

