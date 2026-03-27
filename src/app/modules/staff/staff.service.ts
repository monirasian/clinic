import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_BASE_URL } from '../../api.config';
import { Staff } from './staff.model';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  constructor(
    private readonly http: HttpClient,
    @Inject(API_BASE_URL) private readonly apiBaseUrl: string
  ) {}

  getAll(): Observable<Staff[]> {
    return this.http.get<Staff[]>(`${this.apiBaseUrl}/staff`);
  }
}
