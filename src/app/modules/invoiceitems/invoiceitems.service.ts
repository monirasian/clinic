import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_BASE_URL } from '../../api.config';
import { InvoiceItem } from './invoiceitems.model';

@Injectable({
  providedIn: 'root'
})
export class InvoiceItemsService {
  constructor(
    private readonly http: HttpClient,
    @Inject(API_BASE_URL) private readonly apiBaseUrl: string
  ) {}

  getAll(): Observable<InvoiceItem[]> {
    return this.http.get<InvoiceItem[]>(`${this.apiBaseUrl}/invoiceitems`);
  }
}
