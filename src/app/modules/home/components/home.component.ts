import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { DashboadComponent } from '../../../dashboad/dashboad.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, DashboadComponent],
  template: `<app-dashboad></app-dashboad>`
})
export class HomeComponent {}
