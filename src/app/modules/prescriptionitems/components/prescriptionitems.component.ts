import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { PrescriptionItem } from '../prescriptionitems.model';
import { PrescriptionItemsService } from '../prescriptionitems.service';

@Component({
  selector: 'app-prescriptionitems',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="items-page">
      <header class="toolbar">
        <div>
          <h2>Prescription Items</h2>
          <p>Medication rows linked to prescriptions.</p>
        </div>
      </header>

      <div class="filters">
        <input type="text" [(ngModel)]="medicationFilter" placeholder="Medication name" aria-label="Filter medication" />
        <input type="text" [(ngModel)]="prescriptionFilter" placeholder="Prescription id" aria-label="Filter prescription id" />
      </div>

      <p *ngIf="loading">Loading...</p>
      <p *ngIf="error" class="error">{{ error }}</p>

      <div class="card" *ngIf="!loading && !error">
        <table *ngIf="filteredItems.length > 0" class="items-table">
          <thead>
            <tr>
              <th>Prescription</th>
              <th>Medication</th>
              <th>Dosage</th>
              <th>Frequency</th>
              <th>Route</th>
              <th>Duration</th>
              <th>Instructions</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let item of filteredItems">
              <td>#{{ item.PrescriptionId }}</td>
              <td>{{ item.MedicationName }}</td>
              <td>{{ item.Dosage || '-' }}</td>
              <td>{{ item.Frequency || '-' }}</td>
              <td>{{ item.Route || '-' }}</td>
              <td>{{ item.DurationDays ? (item.DurationDays + ' days') : '-' }}</td>
              <td>{{ item.Instructions || '-' }}</td>
            </tr>
          </tbody>
        </table>
        <p *ngIf="filteredItems.length === 0" class="empty">No prescription items found.</p>
      </div>
    </section>
  `,
  styles: [
    `
      .items-page {
        display: grid;
        gap: 12px;
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
        grid-template-columns: 1fr 1fr;
        gap: 8px;
      }

      .filters input {
        border: 1px solid #cbd5e1;
        border-radius: 8px;
        padding: 8px 10px;
      }

      .card {
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        background: white;
        padding: 12px;
      }

      .items-table {
        width: 100%;
        border-collapse: collapse;
      }

      .items-table th,
      .items-table td {
        border-bottom: 1px solid #e2e8f0;
        padding: 8px;
        text-align: left;
      }

      .error {
        color: #dc2626;
      }

      .empty {
        margin: 0;
        color: #64748b;
      }
    `
  ]
})
export class PrescriptionItemsComponent implements OnInit {
  data: PrescriptionItem[] = [];
  loading = false;
  error: string | null = null;
  medicationFilter = '';
  prescriptionFilter = '';

  constructor(private readonly prescriptionItemsService: PrescriptionItemsService) {}

  get filteredItems(): PrescriptionItem[] {
    const med = this.medicationFilter.trim().toLowerCase();
    const prescription = this.prescriptionFilter.trim();

    return this.data.filter((item) => {
      const medicationOk = !med || (item.MedicationName || '').toLowerCase().includes(med);
      const prescriptionOk = !prescription || String(item.PrescriptionId).includes(prescription);
      return medicationOk && prescriptionOk;
    });
  }

  ngOnInit(): void {
    this.loading = true;
    this.prescriptionItemsService.getAll().subscribe({
      next: (data) => {
        this.data = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load prescriptionitems.';
        this.loading = false;
      }
    });
  }
}

