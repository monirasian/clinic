import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: ':slug',
    loadComponent: () =>
      import('./components/service-detail.component').then((module) => module.ServiceDetailComponent)
  },
  {
    path: '',
    loadComponent: () =>
      import('./components/departments.component').then((module) => module.DepartmentsComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentsRoutingModule {}
