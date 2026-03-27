import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { Staff } from '../staff.model';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-staff',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <section>
      <h2>{{ 'SIMPLE.STAFF.TITLE' | translate }}</h2>
      <p *ngIf="loading">{{ 'COMMON.LOADING' | translate }}</p>
      <p *ngIf="error">{{ error }}</p>
      <p *ngIf="!loading && !error">{{ 'COMMON.COUNT' | translate }}: {{ data.length }}</p>
    </section>
  `
})
export class StaffComponent implements OnInit {
  data: Staff[] = [];
  loading = false;
  error: string | null = null;

  constructor(private readonly staffService: StaffService) {}

  ngOnInit(): void {
    this.loading = true;
    this.staffService.getAll().subscribe({
      next: (data) => {
        this.data = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'SIMPLE.STAFF.ERROR';
        this.loading = false;
      }
    });
  }
}

