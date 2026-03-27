import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { catchError, forkJoin, of } from 'rxjs';

import { Department } from '../../departments/departments.model';
import { DepartmentsService } from '../../departments/departments.service';
import { Schedule } from '../../schedules/schedules.model';
import { SchedulesService } from '../../schedules/schedules.service';
import { Doctor } from '../doctors.model';
import { DoctorsService } from '../doctors.service';

@Component({
  selector: 'app-doctor-profile',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  template: `
    <section class="doctor-profile">
      <p class="back"><a routerLink="/doctors">{{ 'DOCTOR_PROFILE.BACK' | translate }}</a></p>
      <p *ngIf="loading">{{ 'COMMON.LOADING' | translate }}</p>
      <p *ngIf="error" class="error">{{ error | translate }}</p>

      <ng-container *ngIf="!loading && !error && doctor">
        <article class="card">
          <h2>{{ doctor.FullName || ('Doctor #' + doctor.Id) }}</h2>
          <p>{{ doctor.Specialty || ('COMMON.SPECIALIST' | translate) }}</p>
          <p><strong>{{ 'COMMON.DEPARTMENT' | translate }}:</strong> {{ departmentName(doctor.DepartmentId) }}</p>
          <p *ngIf="doctor.Email"><strong>{{ 'COMMON.EMAIL' | translate }}:</strong> {{ doctor.Email }}</p>
        </article>

        <article class="card">
          <h3>{{ 'DOCTOR_PROFILE.ABOUT_TITLE' | translate }}</h3>
          <p>{{ 'DOCTOR_PROFILE.ABOUT_TEXT' | translate }}</p>
        </article>

        <article class="card">
          <h3>{{ 'DOCTOR_PROFILE.AVAILABILITY_TITLE' | translate }}</h3>
          <table *ngIf="doctorSchedules.length > 0">
            <thead>
              <tr>
                <th>{{ 'COMMON.DAY' | translate }}</th>
                <th>{{ 'COMMON.START' | translate }}</th>
                <th>{{ 'COMMON.END' | translate }}</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let item of doctorSchedules">
                <td>{{ item.DayOfWeek }}</td>
                <td>{{ item.StartTime || '-' }}</td>
                <td>{{ item.EndTime || '-' }}</td>
              </tr>
            </tbody>
          </table>
          <p *ngIf="doctorSchedules.length === 0">{{ 'DOCTOR_PROFILE.NO_SCHEDULE' | translate }}</p>
        </article>

        <article class="card cta">
          <h3>{{ 'DOCTOR_PROFILE.CTA_TITLE' | translate }}</h3>
          <p>{{ 'DOCTOR_PROFILE.CTA_TEXT' | translate }}</p>
          <a routerLink="/contact">{{ 'DOCTOR_PROFILE.CTA_LINK' | translate }}</a>
        </article>
      </ng-container>
    </section>
  `,
  styles: [
    `
      .doctor-profile {
        display: grid;
        gap: 12px;
      }

      .back {
        margin: 0;
      }

      .back a,
      .cta a {
        color: #1e40af;
        text-decoration: none;
        font-weight: 600;
      }

      .card {
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        background: white;
        padding: 12px;
      }

      h2,
      h3 {
        margin: 0;
      }

      p {
        margin: 6px 0;
        color: #475569;
      }

      table {
        width: 100%;
        border-collapse: collapse;
      }

      th,
      td {
        border-bottom: 1px solid #e2e8f0;
        padding: 8px;
        text-align: left;
      }

      .error {
        color: #b91c1c;
      }
    `
  ]
})
export class DoctorProfileComponent implements OnInit {
  doctor: Doctor | null = null;
  doctorSchedules: Schedule[] = [];
  departments: Department[] = [];
  loading = false;
  error: string | null = null;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly doctorsService: DoctorsService,
    private readonly schedulesService: SchedulesService,
    private readonly departmentsService: DepartmentsService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) {
      this.error = 'DOCTOR_PROFILE.ERROR.NOT_FOUND';
      return;
    }

    this.loading = true;
    forkJoin({
      doctors: this.doctorsService.getAll(),
      schedules: this.schedulesService.getAll().pipe(catchError(() => of([]))),
      departments: this.departmentsService.getAll().pipe(catchError(() => of([])))
    }).subscribe({
      next: ({ doctors, schedules, departments }) => {
        this.doctor = doctors.find((item) => item.Id === id) || null;
        if (!this.doctor) {
          this.error = 'DOCTOR_PROFILE.ERROR.NOT_FOUND';
          this.loading = false;
          return;
        }

        this.departments = departments;
        this.doctorSchedules = schedules.filter((item) => item.DoctorId === this.doctor!.Id);
        this.loading = false;
      },
      error: () => {
        this.error = 'DOCTOR_PROFILE.ERROR.LOAD';
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
