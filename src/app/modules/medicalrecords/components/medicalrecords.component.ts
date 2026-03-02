import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { MedicalRecord } from '../medicalrecords.model';
import { MedicalRecordsService } from '../medicalrecords.service';

@Component({
  selector: 'app-medicalrecords',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="records-page">
      <header class="toolbar">
        <div>
          <h2>Medical Records</h2>
          <p>clinical visit documentation and follow-up links.</p>
        </div>
        <button type="button" (click)="startCreate()" [disabled]="isSaving">+ New Record</button>
      </header>

      <div class="filters">
        <input type="date" [(ngModel)]="fromDate" aria-label="Filter from date" />
        <input type="date" [(ngModel)]="toDate" aria-label="Filter to date" />
        <input type="text" [(ngModel)]="patientFilter" placeholder="Patient id or name" aria-label="Filter by patient" />
        <input type="text" [(ngModel)]="doctorFilter" placeholder="Doctor id or name" aria-label="Filter by doctor" />
      </div>

      <p *ngIf="loading">Loading...</p>
      <p *ngIf="error" class="error">{{ error }}</p>

      <div class="layout" *ngIf="!loading && !error">
        <div class="card">
          <table *ngIf="filteredRecords.length > 0" class="records-table">
            <thead>
              <tr>
                <th>Visit Date</th>
                <th>Patient</th>
                <th>Doctor</th>
                <th>Appointment</th>
                <th>Chief Complaint</th>
                <th>Diagnosis</th>
              </tr>
            </thead>
            <tbody>
              <tr
                *ngFor="let item of filteredRecords"
                (click)="selectRecord(item)"
                [class.selected]="selectedRecord?.Id === item.Id"
              >
                <td>{{ dateOnly(item.VisitDate) }}</td>
                <td>{{ patientLabel(item) }}</td>
                <td>{{ doctorLabel(item) }}</td>
                <td>{{ item.AppointmentId ? ('#' + item.AppointmentId) : '-' }}</td>
                <td>{{ preview(item.ChiefComplaint) }}</td>
                <td>{{ preview(item.Diagnosis) }}</td>
              </tr>
            </tbody>
          </table>

          <p *ngIf="filteredRecords.length === 0" class="empty">No medical records found.</p>
        </div>

        <aside class="card detail" *ngIf="selectedRecord">
          <h3>Record #{{ selectedRecord.Id }}</h3>
          <p>{{ dateOnly(selectedRecord.VisitDate) }}</p>

          <div class="panel">
            <p><strong>Patient:</strong> {{ patientLabel(selectedRecord) }}</p>
            <p><strong>Doctor:</strong> {{ doctorLabel(selectedRecord) }}</p>
            <p><strong>Appointment:</strong> {{ selectedRecord.AppointmentId ? ('#' + selectedRecord.AppointmentId) : '-' }}</p>
            <p><strong>Chief Complaint:</strong> {{ selectedRecord.ChiefComplaint || '-' }}</p>
            <p><strong>Diagnosis:</strong> {{ selectedRecord.Diagnosis || '-' }}</p>
            <p><strong>Treatment Plan:</strong> {{ selectedRecord.TreatmentPlan || '-' }}</p>
            <p><strong>Notes:</strong> {{ selectedRecord.Notes || '-' }}</p>
          </div>

          <div class="actions">
            <button type="button" class="secondary" (click)="startEdit()" [disabled]="isSaving">Edit</button>
            <button type="button" class="secondary" [disabled]="isSaving">Open Appointment</button>
            <button type="button" class="secondary" [disabled]="isSaving">Related Labs</button>
            <button type="button" class="secondary" [disabled]="isSaving">Related Prescriptions</button>
          </div>
        </aside>
      </div>

      <section class="card create-form" *ngIf="showForm">
        <h3>{{ isEditMode ? 'Edit Medical Record' : 'New Medical Record' }}</h3>
        <form (ngSubmit)="saveRecord()">
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
              Appointment Id (optional)
              <input type="number" name="appointmentId" [(ngModel)]="form.AppointmentId" />
            </label>
            <label>
              Visit Date
              <input type="date" name="visitDate" [(ngModel)]="formDate" required />
            </label>
            <label class="full">
              Chief Complaint
              <textarea name="chiefComplaint" [(ngModel)]="form.ChiefComplaint"></textarea>
            </label>
            <label class="full">
              Diagnosis
              <textarea name="diagnosis" [(ngModel)]="form.Diagnosis" required></textarea>
            </label>
            <label class="full">
              Treatment Plan
              <textarea name="treatmentPlan" [(ngModel)]="form.TreatmentPlan"></textarea>
            </label>
            <label class="full">
              Notes
              <textarea name="notes" [(ngModel)]="form.Notes"></textarea>
            </label>
          </div>

          <div class="actions">
            <button type="submit" [disabled]="isSaving">{{ isSaving ? 'Saving...' : (isEditMode ? 'Update Record' : 'Save Record') }}</button>
            <button type="button" class="secondary" (click)="cancelForm()" [disabled]="isSaving">Cancel</button>
          </div>
        </form>
      </section>
    </section>
  `,
  styles: [
    `
      .records-page {
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
        grid-template-columns: repeat(4, minmax(140px, 1fr));
        gap: 8px;
      }

      .filters input,
      .create-form input,
      .create-form textarea {
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

      .records-table {
        width: 100%;
        border-collapse: collapse;
      }

      .records-table th,
      .records-table td {
        border-bottom: 1px solid #e2e8f0;
        padding: 8px;
        text-align: left;
        vertical-align: top;
      }

      .records-table tr {
        cursor: pointer;
      }

      .records-table tr.selected {
        background: #eff6ff;
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
export class MedicalRecordsComponent implements OnInit {
  data: MedicalRecord[] = [];
  loading = false;
  error: string | null = null;
  fromDate = '';
  toDate = '';
  patientFilter = '';
  doctorFilter = '';
  isSaving = false;
  selectedRecord: MedicalRecord | null = null;
  showForm = false;
  isEditMode = false;
  form: MedicalRecord = this.emptyForm();
  formDate = '';

  constructor(private readonly medicalRecordsService: MedicalRecordsService) {}

  get filteredRecords(): MedicalRecord[] {
    const patientText = this.patientFilter.trim().toLowerCase();
    const doctorText = this.doctorFilter.trim().toLowerCase();

    return this.data.filter((record) => {
      const visitDate = new Date(record.VisitDate);
      const fromOk = !this.fromDate || this.startOfDay(visitDate) >= this.startOfDay(new Date(this.fromDate));
      const toOk = !this.toDate || this.startOfDay(visitDate) <= this.startOfDay(new Date(this.toDate));

      const patientValue = `${record.PatientId} ${record.PatientName || ''}`.toLowerCase();
      const doctorValue = `${record.DoctorId || ''} ${record.DoctorName || ''}`.toLowerCase();

      const patientOk = !patientText || patientValue.includes(patientText);
      const doctorOk = !doctorText || doctorValue.includes(doctorText);

      return fromOk && toOk && patientOk && doctorOk;
    });
  }

  ngOnInit(): void {
    this.loadRecords();
  }

  private loadRecords(selectId?: number): void {
    this.loading = true;
    this.error = null;
    this.medicalRecordsService.getAll().subscribe({
      next: (data) => {
        this.data = data;
        if (this.data.length === 0) {
          this.selectedRecord = null;
        } else if (selectId) {
          this.selectedRecord = this.data.find((item) => item.Id === selectId) || this.data[0];
        } else {
          this.selectedRecord = this.data[0];
        }
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load medicalrecords.';
        this.loading = false;
      }
    });
  }

  selectRecord(record: MedicalRecord): void {
    this.selectedRecord = record;
  }

  startCreate(): void {
    this.isEditMode = false;
    this.showForm = true;
    this.form = this.emptyForm();
    this.formDate = this.todayDate();
  }

  startEdit(): void {
    if (!this.selectedRecord) {
      return;
    }

    this.isEditMode = true;
    this.showForm = true;
    this.form = { ...this.selectedRecord };
    this.formDate = this.dateOnly(this.selectedRecord.VisitDate);
  }

  cancelForm(): void {
    this.showForm = false;
    this.isEditMode = false;
    this.form = this.emptyForm();
    this.formDate = '';
  }

  saveRecord(): void {
    if (this.isSaving) {
      return;
    }

    if (!this.form.PatientId || !this.formDate || !this.form.Diagnosis?.trim()) {
      return;
    }

    const payload: MedicalRecord = {
      ...this.form,
      VisitDate: new Date(this.formDate).toISOString(),
      Diagnosis: this.form.Diagnosis.trim(),
      Notes: this.form.Notes || ''
    };

    this.loading = true;
    this.error = null;
    this.isSaving = true;

    if (this.isEditMode && this.selectedRecord) {
      const updated: MedicalRecord = { ...payload, Id: this.selectedRecord.Id };
      this.medicalRecordsService.update(updated.Id, updated).subscribe((saved) => {
        if (saved) {
          this.isSaving = false;
          this.cancelForm();
          this.loadRecords(updated.Id);
          return;
        }

        this.data = this.data.map((item) => (item.Id === updated.Id ? updated : item));
        this.selectedRecord = this.data.find((item) => item.Id === updated.Id) || null;
        this.cancelForm();
        this.isSaving = false;
        this.loading = false;
        this.error = 'Medical record API update endpoint was not available. Updated locally in UI.';
      });
      return;
    }

    this.medicalRecordsService.create(payload).subscribe((saved) => {
      if (saved) {
        this.isSaving = false;
        this.cancelForm();
        this.loadRecords();
        return;
      }

      const nextId = this.data.length > 0 ? Math.max(...this.data.map((item) => item.Id || 0)) + 1 : 1;
      const created = { ...payload, Id: nextId };
      this.data = [created, ...this.data];
      this.selectedRecord = created;
      this.cancelForm();
      this.isSaving = false;
      this.loading = false;
      this.error = 'Medical record API create endpoint was not available. Saved locally in UI.';
    });
  }

  patientLabel(record: MedicalRecord): string {
    return record.PatientName || `Patient #${record.PatientId || '-'}`;
  }

  doctorLabel(record: MedicalRecord): string {
    if (record.DoctorName) {
      return record.DoctorName;
    }

    if (record.DoctorId) {
      return `Doctor #${record.DoctorId}`;
    }

    return '-';
  }

  dateOnly(value: string): string {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
      return '-';
    }

    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  preview(value?: string): string {
    const text = (value || '').trim();
    if (!text) {
      return '-';
    }

    return text.length > 48 ? `${text.slice(0, 48)}...` : text;
  }

  private emptyForm(): MedicalRecord {
    return {
      Id: 0,
      PatientId: 0,
      DoctorId: undefined,
      AppointmentId: undefined,
      VisitDate: '',
      ChiefComplaint: '',
      Diagnosis: '',
      TreatmentPlan: '',
      Notes: ''
    };
  }

  private todayDate(): string {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, '0');
    const d = String(now.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  private startOfDay(date: Date): number {
    if (Number.isNaN(date.getTime())) {
      return 0;
    }

    const clone = new Date(date);
    clone.setHours(0, 0, 0, 0);
    return clone.getTime();
  }
}

