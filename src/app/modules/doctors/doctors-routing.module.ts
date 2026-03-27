import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: ':id',
    loadComponent: () =>
      import('./components').then((module) => module.DoctorProfileComponent)
  },
  {
    path: '',
    loadComponent: () =>
      import('./components').then((module) => module.DoctorsComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorsRoutingModule {}
