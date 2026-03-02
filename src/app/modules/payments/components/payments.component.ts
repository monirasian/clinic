import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Payment } from '../payments.model';
import { PaymentsService } from '../payments.service';

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="payments-page">
      <header class="toolbar">
        <div>
          <h2>Payments</h2>
          <p>Track receipts and payment methods.</p>
        </div>
        <button type="button" (click)="startCreate()" [disabled]="isSaving">+ Record Payment</button>
      </header>

      <div class="filters">
        <input type="date" [(ngModel)]="fromDate" aria-label="From date" />
        <input type="date" [(ngModel)]="toDate" aria-label="To date" />
        <select [(ngModel)]="methodFilter" aria-label="Filter by method">
          <option value="all">All Methods</option>
          <option value="Cash">Cash</option>
          <option value="Card">Card</option>
          <option value="BankTransfer">Bank Transfer</option>
          <option value="Insurance">Insurance</option>
        </select>
        <input type="text" [(ngModel)]="search" placeholder="Invoice # / Patient" aria-label="Search payment" />
      </div>

      <p *ngIf="loading">Loading...</p>
      <p *ngIf="error" class="error">{{ error }}</p>

      <div class="layout" *ngIf="!loading && !error">
        <div class="card">
          <table *ngIf="filteredPayments.length > 0" class="payments-table">
            <thead>
              <tr>
                <th>Payment Date</th>
                <th>Invoice #</th>
                <th>Patient</th>
                <th>Amount</th>
                <th>Method</th>
                <th>Reference</th>
              </tr>
            </thead>
            <tbody>
              <tr
                *ngFor="let payment of filteredPayments"
                (click)="selectPayment(payment)"
                [class.selected]="selectedPayment?.Id === payment.Id"
              >
                <td>{{ dateOnly(payment.PaymentDate) }}</td>
                <td>{{ invoiceLabel(payment) }}</td>
                <td>{{ patientLabel(payment) }}</td>
                <td>{{ money(payment.Amount) }}</td>
                <td>{{ payment.Method }}</td>
                <td>{{ payment.ReferenceNumber || '-' }}</td>
              </tr>
            </tbody>
          </table>
          <p *ngIf="filteredPayments.length === 0" class="empty">No payments found.</p>
        </div>

        <aside class="card detail" *ngIf="selectedPayment">
          <h3>Payment #{{ selectedPayment.Id }}</h3>
          <p>{{ dateOnly(selectedPayment.PaymentDate) }}</p>
          <div class="panel">
            <p><strong>Invoice:</strong> {{ invoiceLabel(selectedPayment) }}</p>
            <p><strong>Patient:</strong> {{ patientLabel(selectedPayment) }}</p>
            <p><strong>Amount:</strong> {{ money(selectedPayment.Amount) }}</p>
            <p><strong>Method:</strong> {{ selectedPayment.Method }}</p>
            <p><strong>Reference:</strong> {{ selectedPayment.ReferenceNumber || '-' }}</p>
            <p><strong>Notes:</strong> {{ selectedPayment.Notes || '-' }}</p>
          </div>
          <div class="actions">
            <button type="button" class="secondary" [disabled]="isSaving">Print Receipt</button>
            <button type="button" class="secondary" [disabled]="isSaving">Open Invoice</button>
          </div>
        </aside>
      </div>

      <section class="card create-form" *ngIf="showCreateForm">
        <h3>Record Payment</h3>
        <form (ngSubmit)="createPayment()">
          <div class="grid two-col">
            <label>
              Invoice Id
              <input type="number" name="invoiceId" [(ngModel)]="form.InvoiceId" required />
            </label>
            <label>
              Payment Date
              <input type="date" name="paymentDate" [(ngModel)]="formDate" required />
            </label>
            <label>
              Amount
              <input type="number" name="amount" [(ngModel)]="form.Amount" min="0.01" step="0.01" required />
            </label>
            <label>
              Method
              <select name="method" [(ngModel)]="form.Method">
                <option value="Cash">Cash</option>
                <option value="Card">Card</option>
                <option value="BankTransfer">Bank Transfer</option>
                <option value="Insurance">Insurance</option>
              </select>
            </label>
            <label>
              Reference Number
              <input name="referenceNumber" [(ngModel)]="form.ReferenceNumber" />
            </label>
            <label>
              Patient Id (optional)
              <input type="number" name="patientId" [(ngModel)]="form.PatientId" />
            </label>
            <label class="full">
              Notes
              <input name="notes" [(ngModel)]="form.Notes" />
            </label>
          </div>

          <div class="actions">
            <button type="submit" [disabled]="isSaving">{{ isSaving ? 'Saving...' : 'Save Payment' }}</button>
            <button type="button" class="secondary" (click)="cancelCreate()" [disabled]="isSaving">Cancel</button>
          </div>
        </form>
      </section>
    </section>
  `,
  styles: [
    `
      .payments-page {
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
        grid-template-columns: repeat(4, minmax(140px, 1fr));
        gap: 8px;
      }

      .filters input,
      .filters select,
      .create-form input,
      .create-form select {
        border: 1px solid #cbd5e1;
        border-radius: 8px;
        padding: 8px 10px;
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

      .payments-table {
        width: 100%;
        border-collapse: collapse;
      }

      .payments-table th,
      .payments-table td {
        border-bottom: 1px solid #e2e8f0;
        padding: 8px;
        text-align: left;
      }

      .payments-table tr {
        cursor: pointer;
      }

      .payments-table tr.selected {
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
export class PaymentsComponent implements OnInit {
  data: Payment[] = [];
  loading = false;
  error: string | null = null;
  fromDate = '';
  toDate = '';
  methodFilter = 'all';
  search = '';
  isSaving = false;
  selectedPayment: Payment | null = null;
  showCreateForm = false;
  form: Payment = this.emptyForm();
  formDate = '';

  constructor(private readonly paymentsService: PaymentsService) {}

  get filteredPayments(): Payment[] {
    const text = this.search.trim().toLowerCase();

    return this.data.filter((payment) => {
      const methodOk = this.methodFilter === 'all' || payment.Method === this.methodFilter;

      const paymentDate = new Date(payment.PaymentDate);
      const fromOk = !this.fromDate || this.startOfDay(paymentDate) >= this.startOfDay(new Date(this.fromDate));
      const toOk = !this.toDate || this.startOfDay(paymentDate) <= this.startOfDay(new Date(this.toDate));

      const searchOk =
        !text ||
        this.invoiceLabel(payment).toLowerCase().includes(text) ||
        this.patientLabel(payment).toLowerCase().includes(text);

      return methodOk && fromOk && toOk && searchOk;
    });
  }

  ngOnInit(): void {
    this.loadPayments();
  }

  private loadPayments(selectId?: number): void {
    this.loading = true;
    this.error = null;
    this.paymentsService.getAll().subscribe({
      next: (data) => {
        this.data = data;
        if (this.data.length === 0) {
          this.selectedPayment = null;
        } else if (selectId) {
          this.selectedPayment = this.data.find((payment) => payment.Id === selectId) || this.data[0];
        } else {
          this.selectedPayment = this.data[0];
        }
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load payments.';
        this.loading = false;
      }
    });
  }

  selectPayment(payment: Payment): void {
    this.selectedPayment = payment;
  }

  startCreate(): void {
    this.showCreateForm = true;
    this.form = this.emptyForm();
    this.formDate = this.todayDate();
  }

  cancelCreate(): void {
    this.showCreateForm = false;
    this.form = this.emptyForm();
    this.formDate = '';
  }

  createPayment(): void {
    if (this.isSaving) {
      return;
    }

    if (!this.form.InvoiceId || !this.formDate || !this.form.Amount) {
      return;
    }

    const nextId = this.data.length > 0 ? Math.max(...this.data.map((item) => item.Id || 0)) + 1 : 1;
    const payment: Payment = {
      ...this.form,
      Id: 0,
      PaymentDate: new Date(this.formDate).toISOString(),
      Method: this.form.Method || 'Cash'
    };

    this.loading = true;
    this.error = null;
    this.isSaving = true;
    this.paymentsService.create(payment).subscribe((saved) => {
      if (saved) {
        this.isSaving = false;
        this.showCreateForm = false;
        this.form = this.emptyForm();
        this.formDate = '';
        this.loadPayments();
        return;
      }

      const localPayment = { ...payment, Id: nextId };
      this.data = [localPayment, ...this.data];
      this.selectedPayment = localPayment;
      this.showCreateForm = false;
      this.form = this.emptyForm();
      this.formDate = '';
      this.isSaving = false;
      this.loading = false;
      this.error = 'Payment API create endpoint was not available. Saved locally in UI.';
    });
  }

  invoiceLabel(payment: Payment): string {
    if (payment.InvoiceNumber) {
      return payment.InvoiceNumber;
    }

    return payment.InvoiceId ? `INV-${payment.InvoiceId}` : '-';
  }

  patientLabel(payment: Payment): string {
    return payment.PatientName || `Patient #${payment.PatientId || '-'}`;
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

  money(value: number): string {
    return `$${value.toFixed(2)}`;
  }

  private emptyForm(): Payment {
    return {
      Id: 0,
      InvoiceId: 0,
      InvoiceNumber: '',
      PatientId: undefined,
      PatientName: '',
      PaymentDate: '',
      Amount: 0,
      Method: 'Cash',
      ReferenceNumber: '',
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

