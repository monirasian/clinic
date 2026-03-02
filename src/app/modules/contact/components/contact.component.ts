import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { clinic } from '../../clinics/clinics.model';
import { clinicsService } from '../../clinics/clinics.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  template: `
    <section class="contact-page">
      <article class="card">
        <h2>{{ 'CONTACT.TITLE' | translate }}</h2>
        <p>{{ 'CONTACT.INTRO' | translate }}</p>
        <p><strong>{{ 'COMMON.PHONE' | translate }}:</strong> +995 000 000 000</p>
        <p><strong>{{ 'COMMON.EMAIL' | translate }}:</strong> contact@hospital.local</p>
      </article>

      <article class="card">
        <h3>{{ 'CONTACT.CLINIC_LOCATIONS' | translate }}</h3>
        <div class="locations">
          <article *ngFor="let clinic of clinics" class="location">
            <h4>{{ clinic.Name }}</h4>
            <p>{{ clinic.Address || '-' }}</p>
            <p><strong>{{ 'COMMON.PHONE' | translate }}:</strong> {{ clinic.Phone || '-' }}</p>
            <p *ngIf="clinic.Email"><strong>{{ 'COMMON.EMAIL' | translate }}:</strong> {{ clinic.Email }}</p>
          </article>
        </div>
      </article>

      <article class="card">
        <h3>{{ 'CONTACT.FORM.TITLE' | translate }}</h3>
        <form (ngSubmit)="submit()" class="contact-form">
          <input name="name" [(ngModel)]="name" [placeholder]="'CONTACT.FORM.NAME' | translate" required />
          <input name="email" [(ngModel)]="email" type="email" [placeholder]="'CONTACT.FORM.EMAIL' | translate" required />
          <input name="phone" [(ngModel)]="phone" [placeholder]="'CONTACT.FORM.PHONE' | translate" required />
          <input name="subject" [(ngModel)]="subject" [placeholder]="'CONTACT.FORM.SUBJECT' | translate" required />
          <textarea name="message" [(ngModel)]="message" [placeholder]="'CONTACT.FORM.MESSAGE' | translate" required></textarea>
          <button type="submit">{{ 'CONTACT.FORM.SEND' | translate }}</button>
        </form>
        <p *ngIf="submitted" class="ok">{{ 'CONTACT.FORM.SENT' | translate }}</p>
      </article>

      <article class="card emergency">
        <h3>{{ 'CONTACT.EMERGENCY.TITLE' | translate }}</h3>
        <p>{{ 'CONTACT.EMERGENCY.TEXT' | translate }}</p>
      </article>
    </section>
  `,
  styles: [
    `
      .contact-page {
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

      p {
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

      .contact-form {
        display: grid;
        gap: 8px;
      }

      input,
      textarea {
        border: 1px solid #d1d5db;
        border-radius: 8px;
        padding: 8px 10px;
      }

      button {
        border: 1px solid #2563eb;
        background: #2563eb;
        color: white;
        border-radius: 8px;
        padding: 8px 12px;
        font-weight: 600;
        width: fit-content;
      }

      .ok {
        color: #166534;
      }

      .emergency p {
        color: #b91c1c;
      }

      @media (max-width: 900px) {
        .locations {
          grid-template-columns: 1fr;
        }
      }
    `
  ]
})
export class ContactComponent implements OnInit {
  clinics: clinic[] = [];
  name = '';
  email = '';
  phone = '';
  subject = '';
  message = '';
  submitted = false;

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

  submit(): void {
    this.submitted = true;
    this.name = '';
    this.email = '';
    this.phone = '';
    this.subject = '';
    this.message = '';
  }
}
