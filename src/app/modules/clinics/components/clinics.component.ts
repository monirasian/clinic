import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { clinic } from '../clinics.model';
import { clinicsService } from '../clinics.service';

@Component({
  selector: 'app-clinics',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <section>
      <h2>{{ 'SIMPLE.CLINICS.TITLE' | translate }}</h2>
      <p *ngIf="loading">{{ 'COMMON.LOADING' | translate }}</p>
      <p *ngIf="error">{{ error }}</p>
      <p *ngIf="!loading && !error">{{ 'COMMON.COUNT' | translate }}: {{ data.length }}</p>
    </section>
  `
})
export class clinicsComponent implements OnInit {
  data: clinic[] = [];
  loading = false;
  error: string | null = null;

  constructor(private readonly clinicsService: clinicsService) {}

  ngOnInit(): void {
    this.loading = true;
    this.clinicsService.getAll().subscribe({
      next: (data) => {
        this.data = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'SIMPLE.CLINICS.ERROR';
        this.loading = false;
      }
    });
  }
}

