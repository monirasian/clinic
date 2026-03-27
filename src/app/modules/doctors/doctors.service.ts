import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { API_BASE_URL } from '../../api.config';
import { Doctor } from './doctors.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  constructor(
    private readonly http: HttpClient,
    @Inject(API_BASE_URL) private readonly apiBaseUrl: string
  ) {}

  getAll(): Observable<Doctor[]> {
    return this.http.get<unknown>(`${this.apiBaseUrl}/doctors`).pipe(
      map((payload) => this.extractArray(payload)),
      map((items) => items.map((item, index) => this.toDoctor(item, index)))
    );
  }

  private extractArray(payload: unknown): Array<Record<string, unknown>> {
    if (Array.isArray(payload)) {
      return payload as Array<Record<string, unknown>>;
    }

    if (!payload || typeof payload !== 'object') {
      return [];
    }

    const record = payload as Record<string, unknown>;
    for (const key of ['data', 'items', 'results', 'rows', '$values']) {
      if (Array.isArray(record[key])) {
        return record[key] as Array<Record<string, unknown>>;
      }
    }

    return [];
  }

  private toDoctor(item: Record<string, unknown>, index: number): Doctor {
    const firstName = this.pick(item, ['FirstName', 'firstName']);
    const lastName = this.pick(item, ['LastName', 'lastName']);
    const fullName =
      this.pick(item, ['FullName', 'fullName', 'Name', 'name']) || `${firstName} ${lastName}`.trim();

    return {
      Id: this.toNumber(item['Id'] ?? item['id']) || index + 1,
      DepartmentId: this.toNumber(item['DepartmentId'] ?? item['departmentId']) || 0,
      clinicId: this.toOptionalNumber(item['clinicId'] ?? item['clinicId']),
      FullName: fullName,
      Specialty: this.pick(item, ['Specialty', 'specialty', 'Specialization', 'specialization']),
      Email: this.pick(item, ['Email', 'email']),
      Phone: this.pick(item, ['Phone', 'phone']),
      LicenseNumber: this.pick(item, ['LicenseNumber', 'licenseNumber']),
      Bio: this.pick(item, ['Bio', 'bio', 'Description', 'description'])
    };
  }

  private pick(item: Record<string, unknown>, keys: string[]): string {
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
