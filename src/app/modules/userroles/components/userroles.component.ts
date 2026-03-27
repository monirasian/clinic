import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { UserRole } from '../userroles.model';
import { UserRolesService } from '../userroles.service';

@Component({
  selector: 'app-userroles',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <section>
      <h2>{{ 'SIMPLE.USERROLES.TITLE' | translate }}</h2>
      <p *ngIf="loading">{{ 'COMMON.LOADING' | translate }}</p>
      <p *ngIf="error">{{ error }}</p>
      <p *ngIf="!loading && !error">{{ 'COMMON.COUNT' | translate }}: {{ data.length }}</p>
    </section>
  `
})
export class UserRolesComponent implements OnInit {
  data: UserRole[] = [];
  loading = false;
  error: string | null = null;

  constructor(private readonly userRolesService: UserRolesService) {}

  ngOnInit(): void {
    this.loading = true;
    this.userRolesService.getAll().subscribe({
      next: (data) => {
        this.data = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'SIMPLE.USERROLES.ERROR';
        this.loading = false;
      }
    });
  }
}

