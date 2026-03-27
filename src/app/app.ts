import { registerLocaleData } from '@angular/common';
import localeKa from '@angular/common/locales/ka';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

import { AdminAuthService, AppRole } from './admin-auth.service';

interface RoleNavItem {
  path: string;
  labelKey: string;
}

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  currentLanguage = 'en';
  isAdminRoute = false;
  isAdminAuthenticated = false;
  currentRole: AppRole = 'Admin';
  selectedclinic = 'Main clinic';
  searchText = '';
  isProfileMenuOpen = false;
  private readonly supportedLanguages = ['en', 'ka'];
  readonly clinicOptions = ['Main clinic', 'Branch clinic'];
  private readonly externalRoutes = [
    '/',
    '/dashboard',
    '/about',
    '/aboutus',
    '/career',
    '/contact',
    '/services',
    '/doctors',
    '/privacy',
    '/terms'
  ];
  readonly roleMenus: Record<AppRole, RoleNavItem[]> = {
    Admin: [
      { path: '/admin/dashboard', labelKey: 'SIDEBAR.DASHBOARD' },
      { path: '/admin/patients/list', labelKey: 'SIDEBAR.PATIENTS' },
      { path: '/admin/appointments/list', labelKey: 'SIDEBAR.APPOINTMENTS' },
      { path: '/admin/medicalrecords/list', labelKey: 'SIDEBAR.MEDICAL_RECORDS' },
      { path: '/admin/labresults/list', labelKey: 'SIDEBAR.LAB_RESULTS' },
      { path: '/admin/prescriptions/list', labelKey: 'SIDEBAR.PRESCRIPTIONS' },
      { path: '/admin/invoices/list', labelKey: 'SIDEBAR.INVOICES' },
      { path: '/admin/payments/list', labelKey: 'SIDEBAR.PAYMENTS' },
      { path: '/admin/clinics/list', labelKey: 'SIDEBAR.CLINICS' },
      { path: '/admin/departments/list', labelKey: 'SIDEBAR.DEPARTMENTS' },
      { path: '/admin/rooms/list', labelKey: 'SIDEBAR.ROOMS' },
      { path: '/admin/doctors/list', labelKey: 'SIDEBAR.DOCTORS' },
      { path: '/admin/staff/list', labelKey: 'SIDEBAR.STAFF' },
      { path: '/admin/schedules/list', labelKey: 'SIDEBAR.SCHEDULES' },
      { path: '/admin/users/list', labelKey: 'SIDEBAR.USERS_ROLES' }
    ],
    Doctor: [
      { path: '/dashboard', labelKey: 'SIDEBAR.DASHBOARD' },
      { path: '/schedules', labelKey: 'SIDEBAR.MY_SCHEDULE' },
      { path: '/appointments', labelKey: 'SIDEBAR.APPOINTMENTS' },
      { path: '/patients', labelKey: 'SIDEBAR.PATIENTS' },
      { path: '/medicalrecords', labelKey: 'SIDEBAR.MEDICAL_RECORDS' },
      { path: '/labresults', labelKey: 'SIDEBAR.LAB_RESULTS' },
      { path: '/prescriptions', labelKey: 'SIDEBAR.PRESCRIPTIONS' },
      { path: '/invoices', labelKey: 'SIDEBAR.BILLING' }
    ],
    Nurse: [
      { path: '/dashboard', labelKey: 'SIDEBAR.DASHBOARD' },
      { path: '/appointments', labelKey: 'SIDEBAR.APPOINTMENTS' },
      { path: '/patients', labelKey: 'SIDEBAR.PATIENTS' },
      { path: '/medicalrecords', labelKey: 'SIDEBAR.MEDICAL_RECORDS' },
      { path: '/labresults', labelKey: 'SIDEBAR.LAB_RESULTS' },
      { path: '/rooms', labelKey: 'SIDEBAR.ROOMS' }
    ],
    Receptionist: [
      { path: '/dashboard', labelKey: 'SIDEBAR.DASHBOARD' },
      { path: '/appointments', labelKey: 'SIDEBAR.APPOINTMENTS' },
      { path: '/patients', labelKey: 'SIDEBAR.PATIENTS' },
      { path: '/invoices', labelKey: 'SIDEBAR.INVOICES' },
      { path: '/payments', labelKey: 'SIDEBAR.PAYMENTS' },
      { path: '/rooms', labelKey: 'SIDEBAR.ROOMS' }
    ]
  };

  constructor(
    private readonly translate: TranslateService,
    private readonly router: Router,
    private readonly adminAuthService: AdminAuthService
  ) {
    registerLocaleData(localeKa);
    this.translate.addLangs(this.supportedLanguages);
    this.translate.setDefaultLang('en');

    const savedLanguage = localStorage.getItem('app-language');
    if (savedLanguage === 'en' || savedLanguage === 'ka') {
      this.currentLanguage = savedLanguage;
    }

    this.applyLanguage(this.currentLanguage);
    this.isAdminAuthenticated = this.adminAuthService.isLoggedIn();
    this.currentRole = this.adminAuthService.getRole();

    this.adminAuthService.authState$.subscribe((isLoggedIn) => {
      this.isAdminAuthenticated = isLoggedIn;
      if (!isLoggedIn) {
        this.isProfileMenuOpen = false;
      }
    });

    this.adminAuthService.roleState$.subscribe((role) => {
      this.currentRole = role;
    });

    this.setRouteState(this.router.url);

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        const navigation = event as NavigationEnd;
        this.setRouteState(navigation.urlAfterRedirects);
      });
  }

  onLanguageChange(event: Event): void {
    const target = event.target as HTMLSelectElement | null;
    if (!target) {
      return;
    }

    const selected = target.value;
    if (!this.supportedLanguages.includes(selected)) {
      return;
    }

    this.currentLanguage = selected;
    localStorage.setItem('app-language', selected);
    this.applyLanguage(selected);
  }

  get showMenu(): boolean {
    return !this.isAdminRoute;
  }

  get showAdminShell(): boolean {
    return this.isAdminAuthenticated && this.isAdminRoute;
  }

  get sidebarItems(): RoleNavItem[] {
    return this.roleMenus[this.currentRole];
  }

  onclinicChange(event: Event): void {
    const target = event.target as HTMLSelectElement | null;
    if (!target) {
      return;
    }

    this.selectedclinic = target.value;
  }

  toggleProfileMenu(): void {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }

  private applyLanguage(language: string): void {
    this.translate.use(language);
    document.documentElement.lang = language;
  }

  private setRouteState(url: string): void {
    this.isAdminRoute = url.startsWith('/admin');
  }

  logoutFromHeader(): void {
    this.adminAuthService.logout().subscribe(() => {
      this.router.navigate(['/admin']);
    });
  }
}

