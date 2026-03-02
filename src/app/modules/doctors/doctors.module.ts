import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DoctorsRoutingModule } from './doctors-routing.module';

@NgModule({
  imports: [CommonModule, DoctorsRoutingModule]
})
export class DoctorsModule {}
