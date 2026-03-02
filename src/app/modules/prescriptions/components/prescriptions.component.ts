import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

import { Prescription, PrescriptionMedicationItem } from '../prescriptions.model';
import { PrescriptionsService } from '../prescriptions.service';
import { PrescriptionItemsService } from '../../prescriptionitems/prescriptionitems.service';
import { PrescriptionItem } from '../../prescriptionitems/prescriptionitems.model';

@Component({
  selector: 'app-prescriptions',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="prescriptions-page">
      <header class="toolbar">
        <div>
          <h2>Prescriptions</h2>
          <p>Issue, review, and print medication plans.</p>
        </div>
        <button type="button" (click)="startCreate()" [disabled]="isSaving">+ New Prescription</button>
      </header>

      <div class="filters">
        <input type="date" [(ngModel)]="fromDate" aria-label="From date" />
        <input type="date" [(ngModel)]="toDate" aria-label="To date" />
        <input type="text" [(ngModel)]="patientFilter" placeholder="Patient id or name" aria-label="Filter by patient" />
        <input type="text" [(ngModel)]="doctorFilter" placeholder="Doctor id or name" aria-label="Filter by doctor" />
      </div>

      <p *ngIf="loading">Loading...</p>
      <p *ngIf="error" class="error">{{ error }}</p>

      <div class="layout" *ngIf="!loading && !error">
        <div class="card">
          <table *ngIf="filteredPrescriptions.length > 0" class="prescriptions-table">
            <thead>
              <tr>
                <th>Issued At</th>
                <th>Patient</th>
                <th>Doctor</th>
                <th>Appointment</th>
                <th>Items</th>
              </tr>
            </thead>
            <tbody>
              <tr
                *ngFor="let item of filteredPrescriptions"
                (click)="selectPrescription(item)"
                [class.selected]="selectedPrescription?.Id === item.Id"
              >
                <td>{{ dateOnly(item.IssuedAt) }}</td>
                <td>{{ patientLabel(item) }}</td>
                <td>{{ doctorLabel(item) }}</td>
                <td>{{ item.AppointmentId ? ('#' + item.AppointmentId) : '-' }}</td>
                <td>{{ itemsFor(item.Id).length }}</td>
              </tr>
            </tbody>
          </table>
          <p *ngIf="filteredPrescriptions.length === 0" class="empty">No prescriptions found.</p>
        </div>

        <aside class="card detail" *ngIf="selectedPrescription">
          <h3>Prescription #{{ selectedPrescription.Id }}</h3>
          <p>{{ dateOnly(selectedPrescription.IssuedAt) }}</p>

          <div class="panel">
            <p><strong>Patient:</strong> {{ patientLabel(selectedPrescription) }}</p>
            <p><strong>Doctor:</strong> {{ doctorLabel(selectedPrescription) }}</p>
            <p><strong>Appointment:</strong> {{ selectedPrescription.AppointmentId ? ('#' + selectedPrescription.AppointmentId) : '-' }}</p>
            <p><strong>Notes:</strong> {{ selectedPrescription.Notes || '-' }}</p>
          </div>

          <h4>Medication Items</h4>
          <table class="items-table" *ngIf="itemsFor(selectedPrescription.Id).length > 0">
            <thead>
              <tr>
                <th>Medication</th>
                <th>Dosage</th>
                <th>Frequency</th>
                <th>Route</th>
                <th>Duration</th>
                <th>Instructions</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let row of itemsFor(selectedPrescription.Id)">
                <td>{{ row.MedicationName }}</td>
                <td>{{ row.Dosage || '-' }}</td>
                <td>{{ row.Frequency || '-' }}</td>
                <td>{{ row.Route || '-' }}</td>
                <td>{{ row.DurationDays ? (row.DurationDays + ' days') : '-' }}</td>
                <td>{{ row.Instructions || '-' }}</td>
              </tr>
            </tbody>
          </table>
          <p *ngIf="itemsFor(selectedPrescription.Id).length === 0" class="empty">No medication items.</p>

          <div class="actions">
            <button type="button" class="secondary" [disabled]="isSaving">Print Prescription</button>
          </div>
        </aside>
      </div>

      <section class="card create-form" *ngIf="showCreateForm">
        <h3>New Prescription</h3>
        <form (ngSubmit)="createPrescription()">
          <div class="grid two-col">
            <label>
              Patient Id
              <input type="number" name="patientId" [(ngModel)]="form.PatientId" required />
            </label>
            <label>
              Doctor Id
              <input type="number" name="doctorId" [(ngModel)]="form.DoctorId" required />
            </label>
            <label>
              Appointment Id (optional)
              <input type="number" name="appointmentId" [(ngModel)]="form.AppointmentId" />
            </label>
            <label>
              Issued At
              <input type="date" name="issuedAt" [(ngModel)]="formDate" required />
            </label>
            <label class="full">
              Notes
              <textarea name="notes" [(ngModel)]="form.Notes"></textarea>
            </label>
          </div>

          <h4>Prescription Items</h4>
          <div class="item-grid" *ngFor="let row of formItems; let i = index">
            <input [(ngModel)]="row.MedicationName" [name]="'medicationName' + i" placeholder="Medication Name" required />
            <input [(ngModel)]="row.Dosage" [name]="'dosage' + i" placeholder="Dosage" />
            <input [(ngModel)]="row.Frequency" [name]="'frequency' + i" placeholder="Frequency" />
            <input [(ngModel)]="row.Route" [name]="'route' + i" placeholder="Route" />
            <input type="number" [(ngModel)]="row.DurationDays" [name]="'durationDays' + i" placeholder="Duration Days" />
            <input [(ngModel)]="row.Instructions" [name]="'instructions' + i" placeholder="Instructions" />
            <button type="button" class="secondary" (click)="removeItemRow(i)" [disabled]="isSaving || formItems.length === 1">Remove</button>
          </div>

          <div class="item-actions">
            <button type="button" class="secondary" (click)="addItemRow()" [disabled]="isSaving">+ Add Item</button>
          </div>

          <div class="actions">
            <button type="submit" [disabled]="isSaving">{{ isSaving ? 'Saving...' : 'Save Prescription' }}</button>
            <button type="button" class="secondary" (click)="cancelCreate()" [disabled]="isSaving">Cancel</button>
          </div>
        </form>
      </section>
    </section>
  `,
  styles: [
    `
      .prescriptions-page {
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

      .prescriptions-table,
      .items-table {
        width: 100%;
        border-collapse: collapse;
      }

      .prescriptions-table th,
      .prescriptions-table td,
      .items-table th,
      .items-table td {
        border-bottom: 1px solid #e2e8f0;
        padding: 8px;
        text-align: left;
      }

      .prescriptions-table tr {
        cursor: pointer;
      }

      .prescriptions-table tr.selected {
        background: #eff6ff;
      }

      .panel p {
        margin: 4px 0;
      }

      .actions,
      .item-actions {
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

      .item-grid {
        display: grid;
        grid-template-columns: repeat(7, minmax(120px, 1fr));
        gap: 8px;
        margin-top: 8px;
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

        .item-grid {
          grid-template-columns: 1fr;
        }
      }
    `
  ]
})
export class PrescriptionsComponent implements OnInit {
  data: Prescription[] = [];
  items: PrescriptionItem[] = [];
  loading = false;
  error: string | null = null;
  fromDate = '';
  toDate = '';
  patientFilter = '';
  doctorFilter = '';
  isSaving = false;
  selectedPrescription: Prescription | null = null;
  showCreateForm = false;
  form: Prescription = this.emptyForm();
  formItems: PrescriptionMedicationItem[] = [this.emptyFormItem()];
  formDate = '';

  constructor(
    private readonly prescriptionsService: PrescriptionsService,
    private readonly prescriptionItemsService: PrescriptionItemsService
  ) {}

  get filteredPrescriptions(): Prescription[] {
    const patientText = this.patientFilter.trim().toLowerCase();
    const doctorText = this.doctorFilter.trim().toLowerCase();

    return this.data.filter((item) => {
      const issuedAt = new Date(item.IssuedAt);
      const fromOk = !this.fromDate || this.startOfDay(issuedAt) >= this.startOfDay(new Date(this.fromDate));
      const toOk = !this.toDate || this.startOfDay(issuedAt) <= this.startOfDay(new Date(this.toDate));

      const patientValue = `${item.PatientId} ${item.PatientName || ''}`.toLowerCase();
      const doctorValue = `${item.DoctorId} ${item.DoctorName || ''}`.toLowerCase();
      const patientOk = !patientText || patientValue.includes(patientText);
      const doctorOk = !doctorText || doctorValue.includes(doctorText);

      return fromOk && toOk && patientOk && doctorOk;
    });
  }

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(selectId?: number): void {
    this.loading = true;
    this.error = null;
    forkJoin({
      prescriptions: this.prescriptionsService.getAll(),
      items: this.prescriptionItemsService.getAll()
    }).subscribe({
      next: ({ prescriptions, items }) => {
        this.data = prescriptions;
        this.items = items;
        if (this.data.length === 0) {
          this.selectedPrescription = null;
        } else if (selectId) {
          this.selectedPrescription = this.data.find((item) => item.Id === selectId) || this.data[0];
        } else {
          this.selectedPrescription = this.data[0];
        }
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load prescriptions.';
        this.loading = false;
      }
    });
  }

  selectPrescription(item: Prescription): void {
    this.selectedPrescription = item;
  }

  itemsFor(prescriptionId: number): PrescriptionItem[] {
    return this.items.filter((item) => item.PrescriptionId === prescriptionId);
  }

  startCreate(): void {
    this.showCreateForm = true;
    this.form = this.emptyForm();
    this.formItems = [this.emptyFormItem()];
    this.formDate = this.todayDate();
  }

  cancelCreate(): void {
    this.showCreateForm = false;
    this.form = this.emptyForm();
    this.formItems = [this.emptyFormItem()];
    this.formDate = '';
  }

  addItemRow(): void {
    if (this.isSaving) {
      return;
    }

    this.formItems = [...this.formItems, this.emptyFormItem()];
  }

  removeItemRow(index: number): void {
    if (this.isSaving) {
      return;
    }

    if (this.formItems.length === 1) {
      return;
    }

    this.formItems = this.formItems.filter((_, itemIndex) => itemIndex !== index);
  }

  createPrescription(): void {
    if (this.isSaving) {
      return;
    }

    if (!this.form.PatientId || !this.form.DoctorId || !this.formDate) {
      return;
    }

    const cleanedItems = this.formItems.filter((row) => row.MedicationName.trim().length > 0);
    if (cleanedItems.length === 0) {
      return;
    }

    const nextPrescriptionId = this.data.length > 0 ? Math.max(...this.data.map((item) => item.Id || 0)) + 1 : 1;
    const prescription: Prescription = {
      ...this.form,
      Id: nextPrescriptionId,
      IssuedAt: new Date(this.formDate).toISOString(),
      Notes: this.form.Notes || '',
      ItemsCount: cleanedItems.length
    };

    const nextItemBaseId = this.items.length > 0 ? Math.max(...this.items.map((item) => item.Id || 0)) + 1 : 1;
    const createdItems: PrescriptionItem[] = cleanedItems.map((row, index) => ({
      Id: nextItemBaseId + index,
      PrescriptionId: nextPrescriptionId,
      MedicationName: row.MedicationName.trim(),
      Dosage: row.Dosage || '',
      Frequency: row.Frequency,
      Route: row.Route,
      DurationDays: row.DurationDays,
      Instructions: row.Instructions
    }));

    this.loading = true;
    this.error = null;
    this.isSaving = true;
    this.prescriptionsService.create(prescription).subscribe((prescriptionSaved) => {
      const itemCreates = createdItems.map((item) => this.prescriptionItemsService.create(item));

      forkJoin(itemCreates).subscribe((itemResults) => {
        const allItemsSaved = itemResults.every((value) => value);
        if (prescriptionSaved && allItemsSaved) {
          this.isSaving = false;
          this.cancelCreate();
          this.loadData(nextPrescriptionId);
          return;
        }

        this.data = [prescription, ...this.data];
        this.items = [...createdItems, ...this.items];
        this.selectedPrescription = prescription;
        this.cancelCreate();
        this.isSaving = false;
        this.loading = false;
        this.error = 'Prescription API endpoints were not fully available. Saved locally in UI.';
      });
    });
  }

  patientLabel(item: Prescription): string {
    return item.PatientName || `Patient #${item.PatientId || '-'}`;
  }

  doctorLabel(item: Prescription): string {
    return item.DoctorName || `Doctor #${item.DoctorId || '-'}`;
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

  private emptyForm(): Prescription {
    return {
      Id: 0,
      PatientId: 0,
      DoctorId: 0,
      AppointmentId: undefined,
      IssuedAt: '',
      Notes: ''
    };
  }

  private emptyFormItem(): PrescriptionMedicationItem {
    return {
      Id: 0,
      PrescriptionId: 0,
      MedicationName: '',
      Dosage: '',
      Frequency: '',
      Route: '',
      DurationDays: undefined,
      Instructions: ''
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

