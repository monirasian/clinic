import { Routes } from '@angular/router';
import { externalOnlyGuard } from './external-only.guard';

export const routes: Routes = [
	{
		path: '',
		canActivate: [externalOnlyGuard],
		loadChildren: () =>
			import('./modules/home/home.module').then((module) => module.HomeModule)
	},
	{
		path: 'home',
		canActivate: [externalOnlyGuard],
		loadChildren: () =>
			import('./modules/home/home.module').then((module) => module.HomeModule)
	},
	{
		path: 'about',
		canActivate: [externalOnlyGuard],
		loadChildren: () =>
			import('./modules/aboutus/aboutus.module').then((module) => module.AboutusModule)
	},
	{
		path: 'aboutus',
		redirectTo: 'about',
		pathMatch: 'full'
	},
	{
		path: 'dashboard',
		redirectTo: '',
		pathMatch: 'full'
	},
	{
		path: 'career',
		canActivate: [externalOnlyGuard],
		loadChildren: () =>
			import('./modules/career/career.module').then((module) => module.CareerModule)
	},
	{
		path: 'contact',
		canActivate: [externalOnlyGuard],
		loadChildren: () =>
			import('./modules/contact/contact.module').then((module) => module.ContactModule)
	},
	{
		path: 'admin',
		loadChildren: () =>
			import('./modules/admin/admin.module').then((module) => module.AdminModule)
	},
	{
		path: 'services',
		canActivate: [externalOnlyGuard],
		loadChildren: () =>
			import('./modules/departments/departments.module').then((module) => module.DepartmentsModule)
	},
	{
		path: 'departments',
		redirectTo: 'services',
		pathMatch: 'full'
	},
	{
		path: 'doctors',
		loadChildren: () =>
			import('./modules/doctors/doctors.module').then((module) => module.DoctorsModule)
	},
	{
		path: 'privacy',
		canActivate: [externalOnlyGuard],
		loadComponent: () =>
			import('./public').then((module) => module.PrivacyComponent)
	},
	{
		path: 'terms',
		canActivate: [externalOnlyGuard],
		loadComponent: () =>
			import('./public').then((module) => module.TermsComponent)
	},
	{
		path: '**',
		redirectTo: ''
	}
];
