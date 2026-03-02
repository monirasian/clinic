import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of, timeout } from 'rxjs';

import { API_BASE_URL } from '../../api.config';
import { Patient } from './patients.model';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  private readonly requestTimeoutMs = 10000;

  constructor(
    private readonly http: HttpClient,
    @Inject(API_BASE_URL) private readonly apiBaseUrl: string
  ) {}

  getAll(): Observable<Patient[]> {
    return this.http
      .get<unknown>(`${this.apiBaseUrl}/patients`)
      .pipe(map((response) => this.extractArrayPayload<Patient>(response).map((item) => this.normalizePatient(item))));
  }

  create(patient: Patient): Observable<boolean> {
    return this.createWithFallback(['patients', 'patient'], patient, 0);
  }

  private createWithFallback(endpoints: string[], patient: Patient, index: number): Observable<boolean> {
    if (index >= endpoints.length) {
      return of(false);
    }

    return this.http
      .post<unknown>(`${this.apiBaseUrl}/${endpoints[index]}`, patient, { withCredentials: true })
      .pipe(
        timeout(this.requestTimeoutMs),
        map(() => true),
        catchError(() => this.createWithFallback(endpoints, patient, index + 1))
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

  private normalizePatient(patient: Patient): Patient {
    const raw = patient as unknown as Record<string, unknown>;
    const clinicIdValue = raw['clinicId'];
    const activeValue = raw['IsActive'];

    return {
      ...patient,
      Id: Number(raw['Id'] ?? patient.Id ?? 0),
      clinicId: typeof clinicIdValue === 'number' ? clinicIdValue : Number(clinicIdValue ?? 0) || undefined,
      IsActive:
        typeof activeValue === 'boolean'
          ? activeValue
          : activeValue === 1 || activeValue === '1' || activeValue === 'true'
    };
  }
}
