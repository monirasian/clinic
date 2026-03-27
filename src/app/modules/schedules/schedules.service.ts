import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { API_BASE_URL } from '../../api.config';
import { Schedule } from './schedules.model';

@Injectable({
  providedIn: 'root'
})
export class SchedulesService {
  constructor(
    private readonly http: HttpClient,
    @Inject(API_BASE_URL) private readonly apiBaseUrl: string
  ) {}

  getAll(): Observable<Schedule[]> {
    return this.http.get<unknown>(`${this.apiBaseUrl}/schedules`).pipe(
      map((payload) => this.extractArray(payload)),
      map((items) => items.map((item, index) => this.toSchedule(item, index)))
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

  private toSchedule(item: Record<string, unknown>, index: number): Schedule {
    return {
      Id: this.toNumber(item['Id'] ?? item['id']) || index + 1,
      DoctorId: this.toNumber(item['DoctorId'] ?? item['doctorId']) || 0,
      DayOfWeek: this.pick(item, ['DayOfWeek', 'dayOfWeek']) || '-',
      StartTime: this.pick(item, ['StartTime', 'startTime']),
      EndTime: this.pick(item, ['EndTime', 'endTime'])
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
