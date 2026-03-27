import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { PaymentItem } from '../paymentitems.model';
import { PaymentItemsService } from '../paymentitems.service';

@Component({
  selector: 'app-paymentitems',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <section>
      <h2>{{ 'SIMPLE.PAYMENTITEMS.TITLE' | translate }}</h2>
      <p *ngIf="loading">{{ 'COMMON.LOADING' | translate }}</p>
      <p *ngIf="error">{{ error }}</p>
      <p *ngIf="!loading && !error">{{ 'COMMON.COUNT' | translate }}: {{ data.length }}</p>
    </section>
  `
})
export class PaymentItemsComponent implements OnInit {
  data: PaymentItem[] = [];
  loading = false;
  error: string | null = null;

  constructor(private readonly paymentItemsService: PaymentItemsService) {}

  ngOnInit(): void {
    this.loading = true;
    this.paymentItemsService.getAll().subscribe({
      next: (data) => {
        this.data = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'SIMPLE.PAYMENTITEMS.ERROR';
        this.loading = false;
      }
    });
  }
}

