import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <section class="static-page">
      <h2>{{ 'PRIVACY.TITLE' | translate }}</h2>
      <p>{{ 'PRIVACY.P1' | translate }}</p>
      <p>{{ 'PRIVACY.P2' | translate }}</p>
    </section>
  `,
  styles: [
    `
      .static-page {
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        background: white;
        padding: 16px;
      }

      .static-page h2 {
        margin: 0 0 10px;
      }

      .static-page p {
        margin: 6px 0;
        color: #475569;
      }
    `
  ]
})
export class PrivacyComponent {}
