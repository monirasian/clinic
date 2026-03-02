import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { clinic } from '../../clinics/clinics.model';
import { clinicsService } from '../../clinics/clinics.service';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <section class="about-page">
      <article class="card">
        <h2>{{ 'ABOUT.TITLE' | translate }}</h2>
        <p>{{ 'ABOUT.INTRO' | translate }}</p>
      </article>

      <article class="card">
        <h3>{{ 'ABOUT.MVV.TITLE' | translate }}</h3>
        <p><strong>{{ 'ABOUT.MVV.MISSION_LABEL' | translate }}:</strong> {{ 'ABOUT.MVV.MISSION' | translate }}</p>
        <p><strong>{{ 'ABOUT.MVV.VISION_LABEL' | translate }}:</strong> {{ 'ABOUT.MVV.VISION' | translate }}</p>
        <p><strong>{{ 'ABOUT.MVV.VALUES_LABEL' | translate }}:</strong> {{ 'ABOUT.MVV.VALUES' | translate }}</p>
      </article>

      <article class="card">
        <h3>{{ 'ABOUT.FACILITIES.TITLE' | translate }}</h3>
        <ul>
          <li>{{ 'ABOUT.FACILITIES.ITEM_1' | translate }}</li>
          <li>{{ 'ABOUT.FACILITIES.ITEM_2' | translate }}</li>
          <li>{{ 'ABOUT.FACILITIES.ITEM_3' | translate }}</li>
        </ul>
      </article>

      <article class="card">
        <h3>{{ 'ABOUT.LOCATIONS' | translate }}</h3>
        <div class="locations">
          <article *ngFor="let clinic of clinics" class="location">
            <h4>{{ clinic.Name }}</h4>
            <p>{{ clinic.Address || '-' }}</p>
            <p><strong>{{ 'COMMON.PHONE' | translate }}:</strong> {{ clinic.Phone || '-' }}</p>
          </article>
        </div>
      </article>

      <article class="card">
        <h3>{{ 'ABOUT.ACCREDITATIONS.TITLE' | translate }}</h3>
        <p>{{ 'ABOUT.ACCREDITATIONS.TEXT' | translate }}</p>
      </article>
    </section>
  `,
  styles: [
    `
      .about-page {
        display: grid;
        gap: 12px;
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

      .locations {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 10px;
      }

      .location {
        border: 1px solid #e2e8f0;
        border-radius: 10px;
        padding: 10px;
      }

      @media (max-width: 900px) {
        .locations {
          grid-template-columns: 1fr;
        }
      }
    `
  ]
})
export class AboutusComponent implements OnInit {
  clinics: clinic[] = [];

  constructor(private readonly clinicsService: clinicsService) {}

  ngOnInit(): void {
    this.clinicsService.getAll().subscribe({
      next: (data) => {
        this.clinics = data;
      },
      error: () => {
        this.clinics = [];
      }
    });
  }
}
