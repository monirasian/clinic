import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { Role } from '../roles.model';
import { RolesService } from '../roles.service';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <section>
      <h2>{{ 'SIMPLE.ROLES.TITLE' | translate }}</h2>
      <p *ngIf="loading">{{ 'COMMON.LOADING' | translate }}</p>
      <p *ngIf="error">{{ error }}</p>
      <p *ngIf="!loading && !error">{{ 'COMMON.COUNT' | translate }}: {{ data.length }}</p>
    </section>
  `
})
export class RolesComponent implements OnInit {
  data: Role[] = [];
  loading = false;
  error: string | null = null;

  constructor(private readonly rolesService: RolesService) {}

  ngOnInit(): void {
    this.loading = true;
    this.rolesService.getAll().subscribe({
      next: (data) => {
        this.data = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'SIMPLE.ROLES.ERROR';
        this.loading = false;
      }
    });
  }
}

