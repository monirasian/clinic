import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of, timeout } from 'rxjs';

import { API_BASE_URL } from '../../api.config';
import { Prescription } from './prescriptions.model';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionsService {
  private readonly requestTimeoutMs = 10000;

  constructor(
    private readonly http: HttpClient,
    @Inject(API_BASE_URL) private readonly apiBaseUrl: string
  ) {}

  getAll(): Observable<Prescription[]> {
    return this.http
      .get<unknown>(`${this.apiBaseUrl}/prescriptions`)
      .pipe(
        map((response) => this.extractArrayPayload<Record<string, unknown>>(response)),
        map((items) => items.map((item, index) => this.toPrescription(item, index)))
      );
  }

  create(prescription: Prescription): Observable<boolean> {
    return this.createWithFallback(['prescriptions', 'prescription'], prescription, 0);
  }

  private createWithFallback(endpoints: string[], prescription: Prescription, index: number): Observable<boolean> {
    if (index >= endpoints.length) {
      return of(false);
    }

    return this.http
      .post<unknown>(`${this.apiBaseUrl}/${endpoints[index]}`, prescription, { withCredentials: true })
      .pipe(
        timeout(this.requestTimeoutMs),
        map(() => true),
        catchError(() => this.createWithFallback(endpoints, prescription, index + 1))
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

  private toPrescription(item: Record<string, unknown>, index: number): Prescription {
    return {
      Id: this.toNumber(item['Id'] ?? item['id']) || index + 1,
      PatientId: this.toNumber(item['PatientId'] ?? item['patientId']) || 0,
      DoctorId: this.toNumber(item['DoctorId'] ?? item['doctorId']) || 0,
      AppointmentId: this.toOptionalNumber(item['AppointmentId'] ?? item['appointmentId']),
      IssuedAt:
        this.pickString(item, ['IssuedAt', 'issuedAt', 'IssueDate', 'issueDate', 'CreatedAt', 'createdAt']) ||
        new Date().toISOString(),
      Notes: this.pickString(item, ['Notes', 'notes']),
      PatientName: this.pickString(item, ['PatientName', 'patientName']),
      DoctorName: this.pickString(item, ['DoctorName', 'doctorName']),
      ItemsCount: this.toOptionalNumber(item['ItemsCount'] ?? item['itemsCount'])
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
