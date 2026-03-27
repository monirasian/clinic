import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of, timeout } from 'rxjs';

import { API_BASE_URL } from '../../api.config';
import { Invoice } from './invoices.model';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {
  private readonly requestTimeoutMs = 10000;

  constructor(
    private readonly http: HttpClient,
    @Inject(API_BASE_URL) private readonly apiBaseUrl: string
  ) {}

  getAll(): Observable<Invoice[]> {
    return this.http
      .get<unknown>(`${this.apiBaseUrl}/invoices`)
      .pipe(
        map((response) => this.extractArrayPayload<Record<string, unknown>>(response)),
        map((items) => items.map((item, index) => this.toInvoice(item, index)))
      );
  }

  create(invoice: Invoice): Observable<boolean> {
    return this.createWithFallback(['invoices', 'invoice'], invoice, 0);
  }

  update(invoiceId: number, invoice: Invoice): Observable<boolean> {
    return this.putWithFallback([`invoices/${invoiceId}`, `invoice/${invoiceId}`], invoice, 0);
  }

  private createWithFallback(endpoints: string[], invoice: Invoice, index: number): Observable<boolean> {
    if (index >= endpoints.length) {
      return of(false);
    }

    return this.http
      .post<unknown>(`${this.apiBaseUrl}/${endpoints[index]}`, invoice, { withCredentials: true })
      .pipe(
        timeout(this.requestTimeoutMs),
        map(() => true),
        catchError(() => this.createWithFallback(endpoints, invoice, index + 1))
      );
  }

  private putWithFallback(endpoints: string[], invoice: Invoice, index: number): Observable<boolean> {
    if (index >= endpoints.length) {
      return this.patchWithFallback(endpoints, invoice, 0);
    }

    return this.http
      .put<unknown>(`${this.apiBaseUrl}/${endpoints[index]}`, invoice, { withCredentials: true })
      .pipe(
        timeout(this.requestTimeoutMs),
        map(() => true),
        catchError(() => this.putWithFallback(endpoints, invoice, index + 1))
      );
  }

  private patchWithFallback(endpoints: string[], invoice: Invoice, index: number): Observable<boolean> {
    if (index >= endpoints.length) {
      return of(false);
    }

    return this.http
      .patch<unknown>(`${this.apiBaseUrl}/${endpoints[index]}`, invoice, { withCredentials: true })
      .pipe(
        timeout(this.requestTimeoutMs),
        map(() => true),
        catchError(() => this.patchWithFallback(endpoints, invoice, index + 1))
      );
  }

  private extractArrayPayload<T>(payload: unknown): T[] {
    if (Array.isArray(payload)) {
      return payload as T[];
    }

    if (payload && typeof payload === 'object') {
      const record = payload as Record<string, unknown>;
      const keys = ['data', 'items', 'results', 'rows', '$values'];
      for (const key of keys) {
        if (Array.isArray(record[key])) {
          return record[key] as T[];
        }
      }
    }

    return [];
  }

  private toInvoice(item: Record<string, unknown>, index: number): Invoice {
    const id = Number(item['Id'] ?? item['id'] ?? index + 1);
    const totalAmount = this.toNumber(item['TotalAmount'] ?? item['totalAmount'] ?? item['Total'] ?? item['total']) || 0;

    return {
      Id: id,
      clinicId: this.toOptionalNumber(item['clinicId'] ?? item['clinicId']),
      PatientId: this.toNumber(item['PatientId'] ?? item['patientId']) || 0,
      AppointmentId: this.toOptionalNumber(item['AppointmentId'] ?? item['appointmentId']),
      InvoiceNumber: this.pickString(item, ['InvoiceNumber', 'invoiceNumber', 'Number', 'number']) || `INV-${id}`,
      InvoiceDate: this.pickString(item, ['InvoiceDate', 'invoiceDate', 'CreatedAt', 'createdAt']) || new Date().toISOString(),
      Subtotal: this.toOptionalNumber(item['Subtotal'] ?? item['subtotal']),
      TaxAmount: this.toOptionalNumber(item['TaxAmount'] ?? item['taxAmount'] ?? item['Tax'] ?? item['tax']),
      DiscountAmount: this.toOptionalNumber(item['DiscountAmount'] ?? item['discountAmount'] ?? item['Discount'] ?? item['discount']),
      TotalAmount: totalAmount,
      Notes: this.pickString(item, ['Notes', 'notes']),
      PatientName: this.pickString(item, ['PatientName', 'patientName']),
      Balance: this.toOptionalNumber(item['Balance'] ?? item['balance']) ?? totalAmount,
      Status: this.pickString(item, ['Status', 'status']) || 'Draft'
    };
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

  private toNumber(value: unknown): number | null {
    if (typeof value === 'number' && Number.isFinite(value)) {
      return value;
    }
    if (typeof value === 'string' && value.trim().length > 0) {
      const parsed = Number(value);
      if (Number.isFinite(parsed)) {
        return parsed;
      }
    }

    return null;
  }

  private toOptionalNumber(value: unknown): number | undefined {
    return this.toNumber(value) ?? undefined;
  }
}
