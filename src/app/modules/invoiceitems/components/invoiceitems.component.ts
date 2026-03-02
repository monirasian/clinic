import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { InvoiceItem } from '../invoiceitems.model';
import { InvoiceItemsService } from '../invoiceitems.service';

@Component({
  selector: 'app-invoiceitems',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <section>
      <h2>{{ 'SIMPLE.INVOICEITEMS.TITLE' | translate }}</h2>
      <p *ngIf="loading">{{ 'COMMON.LOADING' | translate }}</p>
      <p *ngIf="error">{{ error }}</p>
      <p *ngIf="!loading && !error">{{ 'COMMON.COUNT' | translate }}: {{ data.length }}</p>
    </section>
  `
})
export class InvoiceItemsComponent implements OnInit {
  data: InvoiceItem[] = [];
  loading = false;
  error: string | null = null;

  constructor(private readonly invoiceItemsService: InvoiceItemsService) {}

  ngOnInit(): void {
    this.loading = true;
    this.invoiceItemsService.getAll().subscribe({
      next: (data) => {
        this.data = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'SIMPLE.INVOICEITEMS.ERROR';
        this.loading = false;
      }
    });
  }
}

