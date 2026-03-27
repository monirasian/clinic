import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { forkJoin } from 'rxjs';

import { Department } from '../../departments/departments.model';
import { DepartmentsService } from '../../departments/departments.service';
import { Doctor } from '../doctors.model';
import { DoctorsService } from '../doctors.service';

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, TranslateModule],
  template: `
    <section class="doctors-page">
      <header class="card">
        <h2>{{ 'DOCTORS.TITLE' | translate }}</h2>
        <p>{{ 'DOCTORS.SUBTITLE' | translate }}</p>
      </header>

      <section class="card filters">
        <input type="text" [(ngModel)]="search" [placeholder]="'DOCTORS.SEARCH_PLACEHOLDER' | translate" [attr.aria-label]="'DOCTORS.SEARCH_ARIA' | translate" />
        <select [(ngModel)]="departmentFilter" [attr.aria-label]="'DOCTORS.FILTER_DEPARTMENT_ARIA' | translate">
          <option value="all">{{ 'DOCTORS.ALL_DEPARTMENTS' | translate }}</option>
          <option *ngFor="let option of departmentOptions" [value]="option.id">{{ option.name }}</option>
        </select>
      </section>

      <p *ngIf="loading">{{ 'COMMON.LOADING' | translate }}</p>
      <p *ngIf="error" class="error">{{ error | translate }}</p>

      <section class="grid" *ngIf="!loading && !error">
        <article class="card doctor" *ngFor="let item of filteredDoctors">
          <h3>{{ item.FullName || ('Doctor #' + item.Id) }}</h3>
          <p><strong>{{ 'COMMON.SPECIALIZATION' | translate }}:</strong> {{ item.Specialty || ('HOME.GENERAL' | translate) }}</p>
          <p><strong>{{ 'COMMON.DEPARTMENT' | translate }}:</strong> {{ departmentName(item.DepartmentId) }}</p>
          <p *ngIf="item.Email"><strong>{{ 'COMMON.EMAIL' | translate }}:</strong> {{ item.Email }}</p>
          <a [routerLink]="['/doctors', item.Id]">{{ 'COMMON.VIEW_PROFILE' | translate }}</a>
        </article>
      </section>

      <p *ngIf="!loading && !error && filteredDoctors.length === 0" class="empty">{{ 'DOCTORS.NO_RESULTS' | translate }}</p>
    </section>
  `,
  styles: [
    `
      .doctors-page {
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
        grid-template-columns: 2fr 1fr 1fr;
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

      .doctor a {
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
export class DoctorsComponent implements OnInit {
  data: Doctor[] = [];
  departments: Department[] = [];
  loading = false;
  error: string | null = null;
  search = '';
  departmentFilter = 'all';

  constructor(
    private readonly doctorsService: DoctorsService,
    private readonly departmentsService: DepartmentsService
  ) {}

  get departmentOptions(): Array<{ id: string; name: string }> {
    return this.departments.map((item) => ({ id: String(item.Id), name: item.Name || `Department ${item.Id}` }));
  }

  get filteredDoctors(): Doctor[] {
    const search = this.search.trim().toLowerCase();
    return this.data.filter((doctor) => {
      const matchesSearch =
        !search ||
        (doctor.FullName || '').toLowerCase().includes(search) ||
        (doctor.Specialty || '').toLowerCase().includes(search);
      const matchesDepartment = this.departmentFilter === 'all' || String(doctor.DepartmentId) === this.departmentFilter;
      return matchesSearch && matchesDepartment;
    });
  }

  ngOnInit(): void {
    this.loading = true;
    forkJoin({
      doctors: this.doctorsService.getAll(),
      departments: this.departmentsService.getAll()
    }).subscribe({
      next: ({ doctors, departments }) => {
        this.data = doctors;
        this.departments = departments;
        this.loading = false;
      },
      error: () => {
        this.error = 'DOCTORS.ERROR.LOAD';
        this.loading = false;
      }
    });
  }

  departmentName(departmentId?: number): string {
    if (!departmentId) {
      return '-';
    }
    return this.departments.find((item) => item.Id === departmentId)?.Name || `Department ${departmentId}`;
  }
}
