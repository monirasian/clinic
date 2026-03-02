import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  template: `
    <section class="admin-home">
      <header class="card">
        <h2>{{ 'ADMIN_HOME.TITLE' | translate }}</h2>
        <p>{{ 'ADMIN_HOME.SUBTITLE' | translate }}</p>
      </header>

      <section class="grid">
        <a class="card" routerLink="/admin/users/list">{{ 'ADMIN_HOME.USERS_ROLES' | translate }}</a>
        <a class="card" routerLink="/admin/clinics/list">{{ 'ADMIN_HOME.CLINICS' | translate }}</a>
        <a class="card" routerLink="/admin/departments/list">{{ 'ADMIN_HOME.DEPARTMENTS' | translate }}</a>
        <a class="card" routerLink="/admin/doctors/list">{{ 'ADMIN_HOME.DOCTORS' | translate }}</a>
      </section>
    </section>
  `,
  styles: [
    `
      .admin-home {
        display: grid;
        gap: 12px;
      }

      .card {
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        background: white;
        padding: 12px;
        text-decoration: none;
        color: #0f172a;
        font-weight: 600;
      }

      .card h2 {
        margin: 0;
      }

      .card p {
        margin: 6px 0 0;
        color: #475569;
        font-weight: 400;
      }

      .grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 10px;
      }

      @media (max-width: 900px) {
        .grid {
          grid-template-columns: 1fr;
        }
      }
    `
  ]
})
export class AdminHomeComponent {}
