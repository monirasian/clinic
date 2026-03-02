import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { User } from '../users.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <section>
      <h2>{{ 'SIMPLE.USERS.TITLE' | translate }}</h2>
      <p *ngIf="loading">{{ 'COMMON.LOADING' | translate }}</p>
      <p *ngIf="error">{{ error }}</p>
      <p *ngIf="!loading && !error">{{ 'COMMON.COUNT' | translate }}: {{ data.length }}</p>
    </section>
  `
})
export class UsersComponent implements OnInit {
  data: User[] = [];
  loading = false;
  error: string | null = null;

  constructor(private readonly usersService: UsersService) {}

  ngOnInit(): void {
    this.loading = true;
    this.usersService.getAll().subscribe({
      next: (data) => {
        this.data = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'SIMPLE.USERS.ERROR';
        this.loading = false;
      }
    });
  }
}

