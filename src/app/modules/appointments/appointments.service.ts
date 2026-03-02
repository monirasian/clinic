import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of, timeout } from 'rxjs';

import { API_BASE_URL } from '../../api.config';
import { Appointment } from './appointments.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {
  private readonly requestTimeoutMs = 10000;

  constructor(
    private readonly http: HttpClient,
    @Inject(API_BASE_URL) private readonly apiBaseUrl: string
  ) {}

  getAll(): Observable<Appointment[]> {
    return this.http
      .get<unknown>(`${this.apiBaseUrl}/appointments`)
      .pipe(
        map((response) => this.extractArrayPayload<Record<string, unknown>>(response)),
        map((items) => items.map((item, index) => this.toAppointment(item, index)))
      );
  }

  create(appointment: Appointment): Observable<boolean> {
    return this.createWithFallback(['appointments', 'appointment'], appointment, 0);
  }

  update(appointmentId: number, appointment: Appointment): Observable<boolean> {
    const detailEndpoints = [`appointments/${appointmentId}`, `appointment/${appointmentId}`];
    return this.putWithFallback(detailEndpoints, appointment, 0);
  }

  private createWithFallback(endpoints: string[], appointment: Appointment, index: number): Observable<boolean> {
    if (index >= endpoints.length) {
      return of(false);
    }

    return this.http
      .post<unknown>(`${this.apiBaseUrl}/${endpoints[index]}`, appointment, { withCredentials: true })
      .pipe(
        timeout(this.requestTimeoutMs),
        map(() => true),
        catchError(() => this.createWithFallback(endpoints, appointment, index + 1))
      );
  }

  private putWithFallback(endpoints: string[], appointment: Appointment, index: number): Observable<boolean> {
    if (index >= endpoints.length) {
      return this.patchWithFallback(endpoints, appointment, 0);
    }

    return this.http
      .put<unknown>(`${this.apiBaseUrl}/${endpoints[index]}`, appointment, { withCredentials: true })
      .pipe(
        timeout(this.requestTimeoutMs),
        map(() => true),
        catchError(() => this.putWithFallback(endpoints, appointment, index + 1))
      );
  }

  private patchWithFallback(endpoints: string[], appointment: Appointment, index: number): Observable<boolean> {
    if (index >= endpoints.length) {
      return of(false);
    }

    return this.http
      .patch<unknown>(`${this.apiBaseUrl}/${endpoints[index]}`, appointment, { withCredentials: true })
      .pipe(
        timeout(this.requestTimeoutMs),
        map(() => true),
        catchError(() => this.patchWithFallback(endpoints, appointment, index + 1))
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

  private toAppointment(item: Record<string, unknown>, index: number): Appointment {
    const id = Number(item['Id'] ?? item['id'] ?? index + 1);
    const patientId = Number(item['PatientId'] ?? item['patientId'] ?? 0);
    const doctorId = Number(item['DoctorId'] ?? item['doctorId'] ?? 0);
    const clinicId = this.toOptionalNumber(item['clinicId'] ?? item['clinicId']);
    const roomId = this.toOptionalNumber(item['RoomId'] ?? item['roomId']);

    const scheduledAt =
      this.pickString(item, ['ScheduledAt', 'scheduledAt', 'AppointmentDate', 'appointmentDate']) ||
      new Date().toISOString();

    const durationMinutes = this.toOptionalNumber(item['DurationMinutes'] ?? item['durationMinutes']);
    const status = this.pickString(item, ['Status', 'status']) || 'Scheduled';

    return {
      Id: id,
      PatientId: patientId,
      DoctorId: doctorId,
      clinicId: clinicId,
      RoomId: roomId,
      ScheduledAt: scheduledAt,
      DurationMinutes: durationMinutes,
      Reason: this.pickString(item, ['Reason', 'reason']),
      Notes: this.pickString(item, ['Notes', 'notes']),
      PatientName: this.pickString(item, ['PatientName', 'patientName']),
      DoctorName: this.pickString(item, ['DoctorName', 'doctorName']),
      RoomName: this.pickString(item, ['RoomName', 'roomName']),
      Status: status
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

  private toOptionalNumber(value: unknown): number | undefined {
    if (typeof value === 'number' && Number.isFinite(value)) {
      return value;
    }

    if (typeof value === 'string' && value.trim().length > 0) {
      const parsed = Number(value);
      if (Number.isFinite(parsed)) {
        return parsed;
      }
    }

    return undefined;
  }
}
