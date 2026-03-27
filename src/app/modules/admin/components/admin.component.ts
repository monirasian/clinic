import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

import { AdminAuthService } from '../../../admin-auth.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  template: `
    <section class="admin-shell">
      <section class="admin-panel">
        <h2>{{ 'ADMIN.TITLE' | translate }}</h2>

        <form *ngIf="!isAuthenticated" class="admin-login" (ngSubmit)="login()">
          <p class="hint">Use your admin username/email and password to access protected controllers.</p>

          <label for="admin-username">{{ 'ADMIN.USERNAME' | translate }}</label>
          <input
            id="admin-username"
            name="username"
            [(ngModel)]="username"
            [placeholder]="'ADMIN.USERNAME_PLACEHOLDER' | translate"
            required
          />

          <label for="admin-password">{{ 'ADMIN.PASSWORD' | translate }}</label>
          <input
            id="admin-password"
            name="password"
            type="password"
            [(ngModel)]="password"
            [placeholder]="'ADMIN.PASSWORD_PLACEHOLDER' | translate"
            required
          />

          <button type="submit" [disabled]="isSubmitting || !canSubmit">{{ 'ADMIN.LOGIN' | translate }}</button>
          <p *ngIf="error" class="error">{{ error }}</p>
        </form>

        <div *ngIf="isAuthenticated" class="admin-content">
          <p>{{ 'ADMIN.WELCOME' | translate }}</p>
          <button type="button" (click)="logout()">{{ 'ADMIN.LOGOUT' | translate }}</button>
        </div>
      </section>
    </section>
  `,
  styles: [
    `
      .admin-shell {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px;
      }

      .admin-panel {
        border: 1px solid #e5e7eb;
        border-radius: 12px;
        background: white;
        padding: 16px;
        width: min(420px, 100%);
      }

      .admin-login,
      .admin-content {
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-width: 360px;
      }

      .admin-login input {
        border: 1px solid #d1d5db;
        border-radius: 8px;
        padding: 8px 10px;
      }

      .admin-login button,
      .admin-content button {
        border: 1px solid #2563eb;
        background: #2563eb;
        color: white;
        border-radius: 8px;
        padding: 8px 12px;
        cursor: pointer;
        font-weight: 600;
        width: fit-content;
      }

      .error {
        color: #b91c1c;
        margin: 0;
      }

      .hint {
        margin: 0;
        color: #64748b;
        font-size: 0.875rem;
      }
    `
  ]
})
export class AdminComponent {
  username = '';
  password = '';
  error = '';
  isAuthenticated = false;
  isSubmitting = false;

  get canSubmit(): boolean {
    return this.username.trim().length > 0 && this.password.trim().length > 0;
  }

  constructor(
    private readonly authService: AdminAuthService,
    private readonly translate: TranslateService,
    private readonly router: Router
  ) {
    this.isAuthenticated = this.authService.isLoggedIn() && this.authService.hasAnyRole(['Admin']);

    if (this.isAuthenticated) {
      this.router.navigate(['/admin/dashboard']);
    }
  }

  login(): void {
    if (this.isSubmitting) {
      return;
    }

    this.isSubmitting = true;
    this.authService.login(this.username.trim(), this.password).subscribe((isLoggedIn) => {
      this.isSubmitting = false;

      if (!isLoggedIn) {
        this.error = `${this.translate.instant('ADMIN.INVALID_CREDENTIALS')} (or session not issued by API).`;
        this.password = '';
        this.isAuthenticated = false;
        return;
      }

      this.error = '';
      this.isAuthenticated = true;
      this.password = '';
      this.router.navigate(['/admin/dashboard']);
    });
  }

  logout(): void {
    this.authService.logout().subscribe(() => {
      this.isAuthenticated = false;
      this.password = '';
    });
  }
}
