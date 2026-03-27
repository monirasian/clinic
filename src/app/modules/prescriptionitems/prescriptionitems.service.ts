import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of, timeout } from 'rxjs';

import { API_BASE_URL } from '../../api.config';
import { PrescriptionItem } from './prescriptionitems.model';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionItemsService {
  private readonly requestTimeoutMs = 10000;

  constructor(
    private readonly http: HttpClient,
    @Inject(API_BASE_URL) private readonly apiBaseUrl: string
  ) {}

  getAll(): Observable<PrescriptionItem[]> {
    return this.http
      .get<unknown>(`${this.apiBaseUrl}/prescriptionitems`)
      .pipe(
        map((response) => this.extractArrayPayload<Record<string, unknown>>(response)),
        map((items) => items.map((item, index) => this.toItem(item, index)))
      );
  }

  create(item: PrescriptionItem): Observable<boolean> {
    return this.createWithFallback(['prescriptionitems', 'prescriptionitem'], item, 0);
  }

  private createWithFallback(endpoints: string[], item: PrescriptionItem, index: number): Observable<boolean> {
    if (index >= endpoints.length) {
      return of(false);
    }

    return this.http
      .post<unknown>(`${this.apiBaseUrl}/${endpoints[index]}`, item, { withCredentials: true })
      .pipe(
        timeout(this.requestTimeoutMs),
        map(() => true),
        catchError(() => this.createWithFallback(endpoints, item, index + 1))
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

  private toItem(item: Record<string, unknown>, index: number): PrescriptionItem {
    return {
      Id: this.toNumber(item['Id'] ?? item['id']) || index + 1,
      PrescriptionId: this.toNumber(item['PrescriptionId'] ?? item['prescriptionId']) || 0,
      MedicationName: this.pickString(item, ['MedicationName', 'medicationName']) || 'Medication',
      Dosage: this.pickString(item, ['Dosage', 'dosage']) || '',
      Frequency: this.pickString(item, ['Frequency', 'frequency']),
      Route: this.pickString(item, ['Route', 'route']),
      DurationDays: this.toOptionalNumber(item['DurationDays'] ?? item['durationDays']),
      Instructions: this.pickString(item, ['Instructions', 'instructions'])
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
