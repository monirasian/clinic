import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { Room } from '../rooms.model';
import { RoomsService } from '../rooms.service';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <section>
      <h2>{{ 'SIMPLE.ROOMS.TITLE' | translate }}</h2>
      <p *ngIf="loading">{{ 'COMMON.LOADING' | translate }}</p>
      <p *ngIf="error">{{ error }}</p>
      <p *ngIf="!loading && !error">{{ 'COMMON.COUNT' | translate }}: {{ data.length }}</p>
    </section>
  `
})
export class RoomsComponent implements OnInit {
  data: Room[] = [];
  loading = false;
  error: string | null = null;

  constructor(private readonly roomsService: RoomsService) {}

  ngOnInit(): void {
    this.loading = true;
    this.roomsService.getAll().subscribe({
      next: (data) => {
        this.data = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'SIMPLE.ROOMS.ERROR';
        this.loading = false;
      }
    });
  }
}

