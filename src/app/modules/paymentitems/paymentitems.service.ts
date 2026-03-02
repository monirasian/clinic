import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_BASE_URL } from '../../api.config';
import { PaymentItem } from './paymentitems.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentItemsService {
  constructor(
    private readonly http: HttpClient,
    @Inject(API_BASE_URL) private readonly apiBaseUrl: string
  ) {}

  getAll(): Observable<PaymentItem[]> {
    return this.http.get<PaymentItem[]>(`${this.apiBaseUrl}/paymentitems`);
  }
}
