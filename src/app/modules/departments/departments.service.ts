import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { API_BASE_URL } from '../../api.config';
import { Department } from './departments.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {
  constructor(
    private readonly http: HttpClient,
    @Inject(API_BASE_URL) private readonly apiBaseUrl: string
  ) {}

  getAll(): Observable<Department[]> {
    return this.http.get<unknown>(`${this.apiBaseUrl}/departments`).pipe(
      map((payload) => this.extractArray(payload)),
      map((items) => items.map((item, index) => this.toDepartment(item, index)))
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

  private toDepartment(item: Record<string, unknown>, index: number): Department {
    return {
      Id: this.toNumber(item['Id'] ?? item['id']) || index + 1,
      clinicId: this.toNumber(item['clinicId'] ?? item['clinicId']) || 0,
      Name: this.pick(item, ['Name', 'name']) || `Service ${index + 1}`,
      Description: this.pick(item, ['Description', 'description'])
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
}
