import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of, timeout } from 'rxjs';

import { API_BASE_URL } from '../../api.config';
import { Payment } from './payments.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  private readonly requestTimeoutMs = 10000;

  constructor(
    private readonly http: HttpClient,
    @Inject(API_BASE_URL) private readonly apiBaseUrl: string
  ) {}

  getAll(): Observable<Payment[]> {
    return this.http
      .get<unknown>(`${this.apiBaseUrl}/payments`)
      .pipe(
        map((response) => this.extractArrayPayload<Record<string, unknown>>(response)),
        map((items) => items.map((item, index) => this.toPayment(item, index)))
      );
  }

  create(payment: Payment): Observable<boolean> {
    return this.createWithFallback(['payments', 'payment'], payment, 0);
  }

  private createWithFallback(endpoints: string[], payment: Payment, index: number): Observable<boolean> {
    if (index >= endpoints.length) {
      return of(false);
    }

    return this.http
      .post<unknown>(`${this.apiBaseUrl}/${endpoints[index]}`, payment, { withCredentials: true })
      .pipe(
        timeout(this.requestTimeoutMs),
        map(() => true),
        catchError(() => this.createWithFallback(endpoints, payment, index + 1))
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

  private toPayment(item: Record<string, unknown>, index: number): Payment {
    const id = Number(item['Id'] ?? item['id'] ?? index + 1);

    return {
      Id: id,
      InvoiceId: this.toNumber(item['InvoiceId'] ?? item['invoiceId']) || 0,
      InvoiceNumber: this.pickString(item, ['InvoiceNumber', 'invoiceNumber']),
      PatientId: this.toOptionalNumber(item['PatientId'] ?? item['patientId']),
      PatientName: this.pickString(item, ['PatientName', 'patientName']),
      PaymentDate: this.pickString(item, ['PaymentDate', 'paymentDate', 'CreatedAt', 'createdAt']) || new Date().toISOString(),
      Amount: this.toNumber(item['Amount'] ?? item['amount']) || 0,
      Method: this.pickString(item, ['Method', 'method']) || 'Cash',
      ReferenceNumber: this.pickString(item, ['ReferenceNumber', 'referenceNumber']),
      Notes: this.pickString(item, ['Notes', 'notes'])
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
