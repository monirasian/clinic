import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { forkJoin } from 'rxjs';

import { clinic } from '../../clinics/clinics.model';
import { clinicsService } from '../../clinics/clinics.service';
import { Department } from '../departments.model';
import { DepartmentsService } from '../departments.service';

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, TranslateModule],
  template: `
    <section class="services-page">
      <header class="card">
        <h2>{{ 'SERVICES.TITLE' | translate }}</h2>
        <p>{{ 'SERVICES.SUBTITLE' | translate }}</p>
      </header>

      <section class="card filters">
        <input type="text" [(ngModel)]="search" [placeholder]="'SERVICES.SEARCH_PLACEHOLDER' | translate" [attr.aria-label]="'SERVICES.SEARCH_ARIA' | translate" />
        <select [(ngModel)]="clinicFilter" [attr.aria-label]="'SERVICES.FILTER_CLINIC_ARIA' | translate">
          <option value="all">{{ 'SERVICES.ALL_CLINICS' | translate }}</option>
          <option *ngFor="let option of clinicOptions" [value]="option.id">{{ option.name }}</option>
        </select>
      </section>

      <p *ngIf="loading">{{ 'COMMON.LOADING' | translate }}</p>
      <p *ngIf="error" class="error">{{ error }}</p>

      <section class="grid" *ngIf="!loading && !error">
        <article class="card service" *ngFor="let item of filteredServices">
          <h3>{{ item.Name }}</h3>
          <p>{{ item.Description || ('SERVICES.DEFAULT_DESC' | translate) }}</p>
          <p><strong>{{ 'COMMON.CLINIC' | translate }}:</strong> {{ clinicName(item.clinicId) }}</p>
          <a [routerLink]="['/services', serviceSlug(item)]">{{ 'COMMON.VIEW_DETAILS' | translate }}</a>
        </article>
      </section>

      <p *ngIf="!loading && !error && filteredServices.length === 0" class="empty">{{ 'SERVICES.NO_RESULTS' | translate }}</p>
    </section>
  `,
  styles: [
    `
      .services-page {
        display: grid;
        gap: 12px;
      }

      .card {
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        background: white;
        padding: 12px;
      }

      .card h2,
      .card h3 {
        margin: 0;
      }

      .card p {
        margin: 6px 0;
        color: #475569;
      }

      .filters {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 8px;
      }

      input,
      select {
        border: 1px solid #d1d5db;
        border-radius: 8px;
        padding: 8px 10px;
      }

      .grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 10px;
      }

      .service a {
        color: #1e40af;
        text-decoration: none;
        font-weight: 600;
      }

      .error {
        color: #b91c1c;
      }

      .empty {
        margin: 0;
        color: #64748b;
      }

      @media (max-width: 980px) {
        .filters {
          grid-template-columns: 1fr;
        }

        .grid {
          grid-template-columns: 1fr;
        }
      }
    `
  ]
})
export class DepartmentsComponent implements OnInit {
  data: Department[] = [];
  clinics: clinic[] = [];
  loading = false;
  error: string | null = null;
  search = '';
  clinicFilter = 'all';

  constructor(
    private readonly departmentsService: DepartmentsService,
    private readonly clinicsService: clinicsService
  ) {}

  get clinicOptions(): Array<{ id: string; name: string }> {
    return this.clinics.map((clinic) => ({ id: String(clinic.Id), name: clinic.Name || `clinic ${clinic.Id}` }));
  }

  get filteredServices(): Department[] {
    const search = this.search.trim().toLowerCase();
    return this.data.filter((item) => {
      const matchesSearch = !search || (item.Name || '').toLowerCase().includes(search);
      const matchesclinic = this.clinicFilter === 'all' || String(item.clinicId) === this.clinicFilter;
      return matchesSearch && matchesclinic;
    });
  }

  ngOnInit(): void {
    this.loading = true;
    forkJoin({
      services: this.departmentsService.getAll(),
      clinics: this.clinicsService.getAll()
    }).subscribe({
      next: ({ services, clinics }) => {
        this.data = services;
        this.clinics = clinics;
        this.loading = false;
      },
      error: () => {
        this.error = 'SERVICES.ERROR.LOAD';
        this.loading = false;
      }
    });
  }

  serviceSlug(item: Department): string {
    return `${item.Id}-${(item.Name || 'service')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')}`;
  }

  clinicName(clinicId: number): string {
    return this.clinics.find((clinic) => clinic.Id === clinicId)?.Name || `${'clinic'} ${clinicId}`;
  }
}
