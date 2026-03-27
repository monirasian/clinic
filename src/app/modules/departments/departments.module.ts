import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DepartmentsRoutingModule } from './departments-routing.module';

@NgModule({
  imports: [CommonModule, DepartmentsRoutingModule]
})
export class DepartmentsModule {}
