import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { forkJoin } from 'rxjs';

import { Doctor } from '../../doctors/doctors.model';
import { DoctorsService } from '../../doctors/doctors.service';
import { Department } from '../departments.model';
import { DepartmentsService } from '../departments.service';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  template: `
    <section class="service-detail">
      <p class="back"><a routerLink="/services">{{ 'SERVICE_DETAIL.BACK' | translate }}</a></p>
      <p *ngIf="loading">{{ 'COMMON.LOADING' | translate }}</p>
      <p *ngIf="error" class="error">{{ error | translate }}</p>

      <ng-container *ngIf="!loading && !error && service">
        <article class="card">
          <h2>{{ service.Name }}</h2>
          <p>{{ service.Description || ('SERVICE_DETAIL.DEFAULT_DESC' | translate) }}</p>
        </article>

        <article class="card">
          <h3>{{ 'SERVICE_DETAIL.CONDITIONS.TITLE' | translate }}</h3>
          <ul>
            <li>{{ 'SERVICE_DETAIL.CONDITIONS.ITEM_1' | translate }}</li>
            <li>{{ 'SERVICE_DETAIL.CONDITIONS.ITEM_2' | translate }}</li>
            <li>{{ 'SERVICE_DETAIL.CONDITIONS.ITEM_3' | translate }}</li>
          </ul>
        </article>

        <article class="card">
          <h3>{{ 'SERVICE_DETAIL.PROCEDURES.TITLE' | translate }}</h3>
          <ul>
            <li>{{ 'SERVICE_DETAIL.PROCEDURES.ITEM_1' | translate }}</li>
            <li>{{ 'SERVICE_DETAIL.PROCEDURES.ITEM_2' | translate }}</li>
            <li>{{ 'SERVICE_DETAIL.PROCEDURES.ITEM_3' | translate }}</li>
          </ul>
        </article>

        <article class="card">
          <h3>{{ 'SERVICE_DETAIL.SPECIALISTS.TITLE' | translate }}</h3>
          <div class="specialists">
            <p *ngIf="specialists.length === 0">{{ 'SERVICE_DETAIL.SPECIALISTS.NONE' | translate }}</p>
            <article *ngFor="let doctor of specialists" class="doctor">
              <h4>{{ doctor.FullName || ('Doctor #' + doctor.Id) }}</h4>
              <p>{{ doctor.Specialty || ('COMMON.SPECIALIST' | translate) }}</p>
              <a [routerLink]="['/doctors', doctor.Id]">{{ 'COMMON.VIEW_PROFILE' | translate }}</a>
            </article>
          </div>
        </article>

        <article class="card cta">
          <h3>{{ 'SERVICE_DETAIL.CTA.TITLE' | translate }}</h3>
          <p>{{ 'SERVICE_DETAIL.CTA.TEXT' | translate }}</p>
          <a routerLink="/contact">{{ 'SERVICE_DETAIL.CTA.LINK' | translate }}</a>
        </article>
      </ng-container>
    </section>
  `,
  styles: [
    `
      .service-detail {
        display: grid;
        gap: 12px;
      }

      .back {
        margin: 0;
      }

      .back a,
      .doctor a,
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
      h3,
      h4 {
        margin: 0;
      }

      p,
      li {
        color: #475569;
      }

      .specialists {
        display: grid;
        gap: 8px;
      }

      .doctor {
        border: 1px solid #e2e8f0;
        border-radius: 10px;
        padding: 10px;
      }

      .error {
        color: #b91c1c;
      }
    `
  ]
})
export class ServiceDetailComponent implements OnInit {
  service: Department | null = null;
  specialists: Doctor[] = [];
  loading = false;
  error: string | null = null;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly departmentsService: DepartmentsService,
    private readonly doctorsService: DoctorsService
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug') || '';
    const id = Number(slug.split('-')[0]);
    if (!id) {
      this.error = 'SERVICE_DETAIL.ERROR.NOT_FOUND';
      return;
    }

    this.loading = true;
    forkJoin({
      services: this.departmentsService.getAll(),
      doctors: this.doctorsService.getAll()
    }).subscribe({
      next: ({ services, doctors }) => {
        this.service = services.find((item) => item.Id === id) || null;
        if (!this.service) {
          this.error = 'SERVICE_DETAIL.ERROR.NOT_FOUND';
          this.loading = false;
          return;
        }

        this.specialists = doctors.filter((doctor) => doctor.DepartmentId === this.service!.Id);
        this.loading = false;
      },
      error: () => {
        this.error = 'SERVICE_DETAIL.ERROR.LOAD';
        this.loading = false;
      }
    });
  }
}
