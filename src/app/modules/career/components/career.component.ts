import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  template: `
    <section class="career-page">
      <article class="card hero">
        <h2>{{ 'CAREER.TITLE' | translate }}</h2>
        <p>{{ 'CAREER.INTRO' | translate }}</p>
      </article>

      <article class="card">
        <h3>{{ 'CAREER.BENEFITS.TITLE' | translate }}</h3>
        <div class="grid">
          <p>{{ 'CAREER.BENEFITS.ITEM_1' | translate }}</p>
          <p>{{ 'CAREER.BENEFITS.ITEM_2' | translate }}</p>
          <p>{{ 'CAREER.BENEFITS.ITEM_3' | translate }}</p>
          <p>{{ 'CAREER.BENEFITS.ITEM_4' | translate }}</p>
        </div>
      </article>

      <article class="card">
        <h3>{{ 'CAREER.HIRING_AREAS.TITLE' | translate }}</h3>
        <ul>
          <li>{{ 'CAREER.HIRING_AREAS.ITEM_1' | translate }}</li>
          <li>{{ 'CAREER.HIRING_AREAS.ITEM_2' | translate }}</li>
          <li>{{ 'CAREER.HIRING_AREAS.ITEM_3' | translate }}</li>
          <li>{{ 'CAREER.HIRING_AREAS.ITEM_4' | translate }}</li>
        </ul>
      </article>

      <article class="card">
        <h3>{{ 'CAREER.APPLY.TITLE' | translate }}</h3>
        <p>{{ 'CAREER.APPLY.TEXT' | translate }}</p>
        <form (ngSubmit)="submit()" class="apply-form">
          <input name="fullName" [(ngModel)]="fullName" [placeholder]="'CAREER.FORM.FULL_NAME' | translate" required />
          <input name="email" [(ngModel)]="email" type="email" [placeholder]="'CAREER.FORM.EMAIL' | translate" required />
          <input name="phone" [(ngModel)]="phone" [placeholder]="'CAREER.FORM.PHONE' | translate" required />
          <textarea name="message" [(ngModel)]="message" [placeholder]="'CAREER.FORM.ROLE_OF_INTEREST' | translate"></textarea>
          <button type="submit">{{ 'CAREER.FORM.SUBMIT' | translate }}</button>
        </form>
        <p *ngIf="submitted" class="ok">{{ 'CAREER.FORM.THANKS' | translate }}</p>
      </article>
    </section>
  `,
  styles: [
    `
      .career-page {
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
      h3 {
        margin: 0;
      }

      p,
      li {
        color: #475569;
      }

      .grid {
        display: grid;
        gap: 8px;
      }

      .apply-form {
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
        margin: 8px 0 0;
      }
    `
  ]
})
export class CareerComponent {
  fullName = '';
  email = '';
  phone = '';
  message = '';
  submitted = false;

  submit(): void {
    this.submitted = true;
    this.fullName = '';
    this.email = '';
    this.phone = '';
    this.message = '';
  }
}
