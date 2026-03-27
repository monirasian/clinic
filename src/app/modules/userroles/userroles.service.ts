import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_BASE_URL } from '../../api.config';
import { UserRole } from './userroles.model';

@Injectable({
  providedIn: 'root'
})
export class UserRolesService {
  constructor(
    private readonly http: HttpClient,
    @Inject(API_BASE_URL) private readonly apiBaseUrl: string
  ) {}

  getAll(): Observable<UserRole[]> {
    return this.http.get<UserRole[]>(`${this.apiBaseUrl}/userroles`);
  }
}
