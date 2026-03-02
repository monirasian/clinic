import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_BASE_URL } from '../../api.config';
import { Room } from './rooms.model';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  constructor(
    private readonly http: HttpClient,
    @Inject(API_BASE_URL) private readonly apiBaseUrl: string
  ) {}

  getAll(): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.apiBaseUrl}/rooms`);
  }
}
