import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { adminAuthGuard } from './admin-auth.guard';
import { adminLoginGuard } from './admin-login.guard';

const routes: Routes = [
  {
    path: 'login',
    canActivate: [adminLoginGuard],
    loadComponent: () => import('./components/admin.component').then((module) => module.AdminComponent)
  },
  {
    path: 'dashboard',
    canActivate: [adminAuthGuard],
    loadComponent: () => import('./components/admin-home.component').then((module) => module.AdminHomeComponent)
  },
  {
    path: 'home',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: ':entity/list',
    canActivate: [adminAuthGuard],
    loadComponent: () => import('./components/admin-crud.component').then((module) => module.AdminCrudComponent)
  },
  {
    path: ':entity/create',
    canActivate: [adminAuthGuard],
    loadComponent: () => import('./components/admin-crud.component').then((module) => module.AdminCrudComponent)
  },
  {
    path: ':entity/edit',
    canActivate: [adminAuthGuard],
    loadComponent: () => import('./components/admin-crud.component').then((module) => module.AdminCrudComponent)
  },
  {
    path: ':entity/edit/:id',
    canActivate: [adminAuthGuard],
    loadComponent: () => import('./components/admin-crud.component').then((module) => module.AdminCrudComponent)
  },
  {
    path: ':entity/delete',
    canActivate: [adminAuthGuard],
    loadComponent: () => import('./components/admin-crud.component').then((module) => module.AdminCrudComponent)
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: ':entity',
    redirectTo: ':entity/list'
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
