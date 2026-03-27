import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of, timeout } from 'rxjs';

import { API_BASE_URL } from '../../api.config';
import { MedicalRecord } from './medicalrecords.model';

@Injectable({
  providedIn: 'root'
})
export class MedicalRecordsService {
  private readonly requestTimeoutMs = 10000;

  constructor(
    private readonly http: HttpClient,
    @Inject(API_BASE_URL) private readonly apiBaseUrl: string
  ) {}

  getAll(): Observable<MedicalRecord[]> {
    return this.http
      .get<unknown>(`${this.apiBaseUrl}/medicalrecords`)
      .pipe(
        map((response) => this.extractArrayPayload<Record<string, unknown>>(response)),
        map((items) => items.map((item, index) => this.toMedicalRecord(item, index)))
      );
  }

  create(record: MedicalRecord): Observable<boolean> {
    return this.createWithFallback(['medicalrecords', 'medicalrecord'], record, 0);
  }

  update(recordId: number, record: MedicalRecord): Observable<boolean> {
    return this.putWithFallback([`medicalrecords/${recordId}`, `medicalrecord/${recordId}`], record, 0);
  }

  private createWithFallback(endpoints: string[], record: MedicalRecord, index: number): Observable<boolean> {
    if (index >= endpoints.length) {
      return of(false);
    }

    return this.http
      .post<unknown>(`${this.apiBaseUrl}/${endpoints[index]}`, record, { withCredentials: true })
      .pipe(
        timeout(this.requestTimeoutMs),
        map(() => true),
        catchError(() => this.createWithFallback(endpoints, record, index + 1))
      );
  }

  private putWithFallback(endpoints: string[], record: MedicalRecord, index: number): Observable<boolean> {
    if (index >= endpoints.length) {
      return this.patchWithFallback(endpoints, record, 0);
    }

    return this.http
      .put<unknown>(`${this.apiBaseUrl}/${endpoints[index]}`, record, { withCredentials: true })
      .pipe(
        timeout(this.requestTimeoutMs),
        map(() => true),
        catchError(() => this.putWithFallback(endpoints, record, index + 1))
      );
  }

  private patchWithFallback(endpoints: string[], record: MedicalRecord, index: number): Observable<boolean> {
    if (index >= endpoints.length) {
      return of(false);
    }

    return this.http
      .patch<unknown>(`${this.apiBaseUrl}/${endpoints[index]}`, record, { withCredentials: true })
      .pipe(
        timeout(this.requestTimeoutMs),
        map(() => true),
        catchError(() => this.patchWithFallback(endpoints, record, index + 1))
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

  private toMedicalRecord(item: Record<string, unknown>, index: number): MedicalRecord {
    return {
      Id: this.toNumber(item['Id'] ?? item['id']) || index + 1,
      PatientId: this.toNumber(item['PatientId'] ?? item['patientId']) || 0,
      DoctorId: this.toOptionalNumber(item['DoctorId'] ?? item['doctorId']),
      AppointmentId: this.toOptionalNumber(item['AppointmentId'] ?? item['appointmentId']),
      VisitDate:
        this.pickString(item, ['VisitDate', 'visitDate', 'RecordDate', 'recordDate', 'CreatedAt', 'createdAt']) ||
        new Date().toISOString(),
      ChiefComplaint: this.pickString(item, ['ChiefComplaint', 'chiefComplaint', 'Complaint', 'complaint']),
      Diagnosis: this.pickString(item, ['Diagnosis', 'diagnosis']) || '-',
      TreatmentPlan: this.pickString(item, ['TreatmentPlan', 'treatmentPlan']),
      Notes: this.pickString(item, ['Notes', 'notes']),
      PatientName: this.pickString(item, ['PatientName', 'patientName']),
      DoctorName: this.pickString(item, ['DoctorName', 'doctorName'])
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
