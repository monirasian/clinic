import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, forkJoin, map, Observable, of, timeout } from 'rxjs';

import { API_BASE_URL } from './api.config';
import {
  Appointment,
  clinic,
  DashboardData,
  Department,
  Doctor,
  Invoice,
  LabResult,
  MedicalRecord,
  Patient,
  Payment,
  Prescription,
  PrescriptionItem,
  Room
} from './clinic.models';

@Injectable({
  providedIn: 'root'
})
export class clinicApiService {
  private readonly http = inject(HttpClient);
  private readonly apiBaseUrl = inject(API_BASE_URL);
  private readonly requestTimeoutMs = 10000;

  private endpoint(path: string): string {
    return `${this.apiBaseUrl}/${path}`;
  }

  private extractArrayPayload<T>(payload: unknown): T[] {
    if (Array.isArray(payload)) {
      return payload as T[];
    }

    if (payload && typeof payload === 'object') {
      const record = payload as Record<string, unknown>;
      const keys = ['data', 'items', 'results', 'rows'];

      for (const key of keys) {
        if (Array.isArray(record[key])) {
          return record[key] as T[];
        }
      }
    }

    return [];
  }

  private safeGet<T>(path: string): Observable<T[]> {
    return this.http.get<unknown>(this.endpoint(path)).pipe(
      timeout(this.requestTimeoutMs),
      map((response) => this.extractArrayPayload<T>(response)),
      catchError((error) => {
        console.error(`[Dashboard API] Failed to load ${path}`, error);
        return of([]);
      })
    );
  }

  getclinics(): Observable<clinic[]> {
    return this.safeGet<clinic>('clinics');
  }

  getDepartments(): Observable<Department[]> {
    return this.safeGet<Department>('departments');
  }

  getDoctors(): Observable<Doctor[]> {
    return this.safeGet<Doctor>('doctors');
  }

  getPatients(): Observable<Patient[]> {
    return this.safeGet<Patient>('patients');
  }

  getRooms(): Observable<Room[]> {
    return this.safeGet<Room>('rooms');
  }

  getAppointments(): Observable<Appointment[]> {
    return this.safeGet<Appointment>('appointments');
  }

  getMedicalRecords(): Observable<MedicalRecord[]> {
    return this.safeGet<MedicalRecord>('medicalrecords');
  }

  getLabResults(): Observable<LabResult[]> {
    return this.safeGet<LabResult>('labresults');
  }

  getPrescriptions(): Observable<Prescription[]> {
    return this.safeGet<Prescription>('prescriptions');
  }

  getPrescriptionItems(): Observable<PrescriptionItem[]> {
    return this.safeGet<PrescriptionItem>('prescriptionitems');
  }

  getInvoices(): Observable<Invoice[]> {
    return this.safeGet<Invoice>('invoices');
  }

  getPayments(): Observable<Payment[]> {
    return this.safeGet<Payment>('payments');
  }

  loadDashboardData(): Observable<DashboardData> {
    return forkJoin({
      clinics: this.getclinics(),
      departments: this.getDepartments(),
      doctors: this.getDoctors(),
      patients: this.getPatients(),
      rooms: this.getRooms(),
      appointments: this.getAppointments(),
      medicalrecords: this.getMedicalRecords(),
      labresults: this.getLabResults(),
      prescriptions: this.getPrescriptions(),
      prescriptionitems: this.getPrescriptionItems(),
      invoices: this.getInvoices(),
      payments: this.getPayments()
    });
  }
}
