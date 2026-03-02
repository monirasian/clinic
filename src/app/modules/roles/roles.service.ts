import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_BASE_URL } from '../../api.config';
import { Role } from './roles.model';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  constructor(
    private readonly http: HttpClient,
    @Inject(API_BASE_URL) private readonly apiBaseUrl: string
  ) {}

  getAll(): Observable<Role[]> {
    return this.http.get<Role[]>(`${this.apiBaseUrl}/roles`);
  }
}
