import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { Schedule } from '../schedules.model';
import { SchedulesService } from '../schedules.service';

@Component({
  selector: 'app-schedules',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <section>
      <h2>{{ 'SIMPLE.SCHEDULES.TITLE' | translate }}</h2>
      <p *ngIf="loading">{{ 'COMMON.LOADING' | translate }}</p>
      <p *ngIf="error">{{ error }}</p>
      <p *ngIf="!loading && !error">{{ 'COMMON.COUNT' | translate }}: {{ data.length }}</p>
    </section>
  `
})
export class SchedulesComponent implements OnInit {
  data: Schedule[] = [];
  loading = false;
  error: string | null = null;

  constructor(private readonly schedulesService: SchedulesService) {}

  ngOnInit(): void {
    this.loading = true;
    this.schedulesService.getAll().subscribe({
      next: (data) => {
        this.data = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'SIMPLE.SCHEDULES.ERROR';
        this.loading = false;
      }
    });
  }
}

