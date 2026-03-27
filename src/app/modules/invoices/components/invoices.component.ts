import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Invoice } from '../invoices.model';
import { InvoicesService } from '../invoices.service';

@Component({
  selector: 'app-invoices',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="invoices-page">
      <header class="toolbar">
        <div>
          <h2>Invoices</h2>
          <p>Manage invoice lifecycle and balances.</p>
        </div>
        <button type="button" (click)="startCreate()" [disabled]="isSaving">+ New Invoice</button>
      </header>

      <div class="filters">
        <select [(ngModel)]="statusFilter" aria-label="Filter by status">
          <option value="all">All Status</option>
          <option value="Draft">Draft</option>
          <option value="Issued">Issued</option>
          <option value="Paid">Paid</option>
          <option value="Cancelled">Cancelled</option>
        </select>
        <input type="date" [(ngModel)]="fromDate" aria-label="From date" />
        <input type="date" [(ngModel)]="toDate" aria-label="To date" />
        <input type="text" [(ngModel)]="patientSearch" placeholder="Patient / Invoice #" aria-label="Search invoice" />
        <select [(ngModel)]="clinicFilter" aria-label="Filter by clinic">
          <option value="all">All clinics</option>
          <option *ngFor="let clinic of clinicOptions" [value]="clinic">clinic {{ clinic }}</option>
        </select>
      </div>

      <p *ngIf="loading">Loading...</p>
      <p *ngIf="error" class="error">{{ error }}</p>

      <div class="layout" *ngIf="!loading && !error">
        <div class="card">
          <table *ngIf="filteredInvoices.length > 0" class="invoices-table">
            <thead>
              <tr>
                <th>Invoice #</th>
                <th>Date</th>
                <th>Patient</th>
                <th>Subtotal</th>
                <th>Tax</th>
                <th>Discount</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr
                *ngFor="let invoice of filteredInvoices"
                (click)="selectInvoice(invoice)"
                [class.selected]="selectedInvoice?.Id === invoice.Id"
              >
                <td>{{ invoice.InvoiceNumber || ('INV-' + invoice.Id) }}</td>
                <td>{{ dateOnly(invoice.InvoiceDate) }}</td>
                <td>{{ patientLabel(invoice) }}</td>
                <td>{{ money(invoice.Subtotal || 0) }}</td>
                <td>{{ money(invoice.TaxAmount || 0) }}</td>
                <td>{{ money(invoice.DiscountAmount || 0) }}</td>
                <td>{{ money(invoice.TotalAmount) }}</td>
                <td>
                  <span class="status" [class.paid]="invoice.Status === 'Paid'" [class.cancelled]="invoice.Status === 'Cancelled'">
                    {{ invoice.Status }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <p *ngIf="filteredInvoices.length === 0" class="empty">No invoices found.</p>
        </div>

        <aside class="card detail" *ngIf="selectedInvoice">
          <h3>{{ selectedInvoice.InvoiceNumber || ('INV-' + selectedInvoice.Id) }}</h3>
          <p>{{ dateOnly(selectedInvoice.InvoiceDate) }}</p>

          <div class="panel">
            <p><strong>Patient:</strong> {{ patientLabel(selectedInvoice) }}</p>
            <p><strong>Status:</strong> {{ selectedInvoice.Status }}</p>
            <p><strong>Subtotal:</strong> {{ money(selectedInvoice.Subtotal || 0) }}</p>
            <p><strong>Tax:</strong> {{ money(selectedInvoice.TaxAmount || 0) }}</p>
            <p><strong>Discount:</strong> {{ money(selectedInvoice.DiscountAmount || 0) }}</p>
            <p><strong>Total:</strong> {{ money(selectedInvoice.TotalAmount) }}</p>
            <p><strong>Balance:</strong> {{ money(selectedInvoice.Balance ?? selectedInvoice.TotalAmount) }}</p>
            <p><strong>Notes:</strong> {{ selectedInvoice.Notes || '-' }}</p>
          </div>

          <div class="actions">
            <button type="button" class="secondary" (click)="issueSelected()" [disabled]="isSaving || selectedInvoice.Status !== 'Draft'">Issue Invoice</button>
            <button type="button" class="secondary" (click)="recordPaymentOnSelected()" [disabled]="isSaving || selectedInvoice.Status === 'Cancelled' || selectedInvoice.Status === 'Paid'">Record Payment</button>
            <button type="button" class="secondary" (click)="cancelSelected()" [disabled]="isSaving || selectedInvoice.Status === 'Cancelled'">Cancel Invoice</button>
            <button type="button" class="secondary" [disabled]="isSaving">Print</button>
          </div>
        </aside>
      </div>

      <section class="card create-form" *ngIf="showCreateForm">
        <h3>New Invoice</h3>
        <form (ngSubmit)="createInvoice()">
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
              Appointment Id (optional)
              <input type="number" name="appointmentId" [(ngModel)]="form.AppointmentId" />
            </label>
            <label>
              Invoice Number
              <input name="invoiceNumber" [(ngModel)]="form.InvoiceNumber" />
            </label>
            <label>
              Invoice Date
              <input type="date" name="invoiceDate" [(ngModel)]="formDate" required />
            </label>
            <label>
              Status
              <select name="status" [(ngModel)]="form.Status">
                <option value="Draft">Draft</option>
                <option value="Issued">Issued</option>
              </select>
            </label>
            <label>
              Subtotal
              <input type="number" name="subtotal" [(ngModel)]="form.Subtotal" min="0" step="0.01" />
            </label>
            <label>
              Tax
              <input type="number" name="tax" [(ngModel)]="form.TaxAmount" min="0" step="0.01" />
            </label>
            <label>
              Discount
              <input type="number" name="discount" [(ngModel)]="form.DiscountAmount" min="0" step="0.01" />
            </label>
            <label>
              Total
              <input type="number" [value]="calcFormTotal()" readonly />
            </label>
            <label class="full">
              Notes
              <input name="notes" [(ngModel)]="form.Notes" />
            </label>
          </div>

          <div class="actions">
            <button type="submit" [disabled]="isSaving">{{ isSaving ? 'Saving...' : 'Save Invoice' }}</button>
            <button type="button" class="secondary" (click)="cancelCreate()" [disabled]="isSaving">Cancel</button>
          </div>
        </form>
      </section>
    </section>
  `,
  styles: [
    `
      .invoices-page {
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
        grid-template-columns: repeat(5, minmax(140px, 1fr));
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

      .invoices-table {
        width: 100%;
        border-collapse: collapse;
      }

      .invoices-table th,
      .invoices-table td {
        border-bottom: 1px solid #e2e8f0;
        padding: 8px;
        text-align: left;
      }

      .invoices-table tr {
        cursor: pointer;
      }

      .invoices-table tr.selected {
        background: #eff6ff;
      }

      .status {
        border: 1px solid #f59e0b;
        color: #b45309;
        border-radius: 999px;
        padding: 2px 8px;
        font-size: 0.75rem;
      }

      .status.paid {
        border-color: #16a34a;
        color: #166534;
      }

      .status.cancelled {
        border-color: #dc2626;
        color: #991b1b;
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
export class InvoicesComponent implements OnInit {
  data: Invoice[] = [];
  loading = false;
  error: string | null = null;
  statusFilter = 'all';
  fromDate = '';
  toDate = '';
  patientSearch = '';
  clinicFilter = 'all';
  isSaving = false;
  selectedInvoice: Invoice | null = null;
  showCreateForm = false;
  form: Invoice = this.emptyForm();
  formDate = '';

  constructor(private readonly invoicesService: InvoicesService) {}

  get filteredInvoices(): Invoice[] {
    const text = this.patientSearch.trim().toLowerCase();

    return this.data.filter((invoice) => {
      const statusOk = this.statusFilter === 'all' || invoice.Status === this.statusFilter;
      const clinicOk = this.clinicFilter === 'all' || String(invoice.clinicId ?? '') === this.clinicFilter;

      const invoiceDate = new Date(invoice.InvoiceDate);
      const fromOk = !this.fromDate || this.startOfDay(invoiceDate) >= this.startOfDay(new Date(this.fromDate));
      const toOk = !this.toDate || this.startOfDay(invoiceDate) <= this.startOfDay(new Date(this.toDate));

      const searchOk =
        !text ||
        (invoice.InvoiceNumber || '').toLowerCase().includes(text) ||
        this.patientLabel(invoice).toLowerCase().includes(text);

      return statusOk && clinicOk && fromOk && toOk && searchOk;
    });
  }

  get clinicOptions(): string[] {
    const values = this.data
      .map((invoice) => invoice.clinicId)
      .filter((value): value is number => typeof value === 'number')
      .map((value) => String(value));

    return Array.from(new Set(values)).sort((a, b) => Number(a) - Number(b));
  }

  ngOnInit(): void {
    this.loadInvoices();
  }

  private loadInvoices(selectId?: number): void {
    this.loading = true;
    this.error = null;
    this.invoicesService.getAll().subscribe({
      next: (data) => {
        this.data = data;
        if (this.data.length === 0) {
          this.selectedInvoice = null;
        } else if (selectId) {
          this.selectedInvoice = this.data.find((invoice) => invoice.Id === selectId) || this.data[0];
        } else {
          this.selectedInvoice = this.data[0];
        }
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load invoices.';
        this.loading = false;
      }
    });
  }

  selectInvoice(invoice: Invoice): void {
    this.selectedInvoice = invoice;
  }

  issueSelected(): void {
    if (!this.selectedInvoice || this.selectedInvoice.Status !== 'Draft') {
      return;
    }

    this.patchSelected({ Status: 'Issued' });
  }

  cancelSelected(): void {
    if (!this.selectedInvoice) {
      return;
    }

    this.patchSelected({ Status: 'Cancelled' });
  }

  recordPaymentOnSelected(): void {
    if (!this.selectedInvoice) {
      return;
    }

    this.patchSelected({
      Status: 'Paid',
      Balance: 0
    });
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

  createInvoice(): void {
    if (this.isSaving) {
      return;
    }

    if (!this.form.PatientId || !this.formDate) {
      return;
    }

    const total = this.calcFormTotal();
    const nextId = this.data.length > 0 ? Math.max(...this.data.map((item) => item.Id || 0)) + 1 : 1;

    const invoice: Invoice = {
      ...this.form,
      Id: 0,
      InvoiceNumber: (this.form.InvoiceNumber || '').trim() || this.autoInvoiceNumber(nextId),
      InvoiceDate: new Date(this.formDate).toISOString(),
      TotalAmount: total,
      Balance: total,
      Status: this.form.Status || 'Draft'
    };

    this.loading = true;
    this.error = null;
    this.isSaving = true;
    this.invoicesService.create(invoice).subscribe((saved) => {
      if (saved) {
        this.isSaving = false;
        this.showCreateForm = false;
        this.form = this.emptyForm();
        this.formDate = '';
        this.loadInvoices();
        return;
      }

      const localInvoice = { ...invoice, Id: nextId };
      this.data = [localInvoice, ...this.data];
      this.selectedInvoice = localInvoice;
      this.showCreateForm = false;
      this.form = this.emptyForm();
      this.formDate = '';
      this.isSaving = false;
      this.loading = false;
      this.error = 'Invoice API create endpoint was not available. Saved locally in UI.';
    });
  }

  calcFormTotal(): number {
    const subtotal = this.form.Subtotal || 0;
    const tax = this.form.TaxAmount || 0;
    const discount = this.form.DiscountAmount || 0;

    return Math.max(0, subtotal + tax - discount);
  }

  patientLabel(invoice: Invoice): string {
    return invoice.PatientName || `Patient #${invoice.PatientId || '-'}`;
  }

  money(value: number): string {
    return `$${value.toFixed(2)}`;
  }

  dateOnly(value: string): string {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
      return '-';
    }

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  private patchSelected(patch: Partial<Invoice>): void {
    if (!this.selectedInvoice) {
      return;
    }

    const updated: Invoice = {
      ...this.selectedInvoice,
      ...patch
    };

    this.loading = true;
    this.error = null;
    this.isSaving = true;
    this.invoicesService.update(updated.Id, updated).subscribe((saved) => {
      if (saved) {
        this.isSaving = false;
        this.loadInvoices(updated.Id);
        return;
      }

      this.data = this.data.map((invoice) => (invoice.Id === updated.Id ? updated : invoice));
      this.selectedInvoice = this.data.find((invoice) => invoice.Id === updated.Id) || null;
      this.isSaving = false;
      this.loading = false;
      this.error = 'Invoice API update endpoint was not available. Updated locally in UI.';
    });
  }

  private emptyForm(): Invoice {
    return {
      Id: 0,
      clinicId: 1,
      PatientId: 0,
      AppointmentId: undefined,
      InvoiceNumber: '',
      InvoiceDate: '',
      Subtotal: 0,
      TaxAmount: 0,
      DiscountAmount: 0,
      TotalAmount: 0,
      Notes: '',
      Status: 'Draft'
    };
  }

  private autoInvoiceNumber(id: number): string {
    const now = new Date();
    const year = now.getFullYear();
    return `INV-${year}-${String(id).padStart(4, '0')}`;
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

