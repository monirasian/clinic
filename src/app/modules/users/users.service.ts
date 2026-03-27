import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { API_BASE_URL } from '../../api.config';
import { User } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(
    private readonly http: HttpClient,
    @Inject(API_BASE_URL) private readonly apiBaseUrl: string
  ) {}

  getAll(): Observable<User[]> {
    return this.http
      .get<unknown>(`${this.apiBaseUrl}/users`, { withCredentials: true })
      .pipe(map((response) => this.extractArrayPayload<User>(response)));
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
}
