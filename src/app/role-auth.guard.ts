import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AdminAuthService, AppRole } from './admin-auth.service';

export const roleAuthGuard: CanActivateFn = (route) => {
  const authService = inject(AdminAuthService);
  const router = inject(Router);

  if (!authService.isLoggedIn()) {
    return router.createUrlTree(['/admin/login']);
  }

  const allowedRoles = route.data?.['roles'] as AppRole[] | undefined;
  if (!allowedRoles || allowedRoles.length === 0) {
    return true;
  }

  if (authService.hasAnyRole(allowedRoles)) {
    return true;
  }

  return router.createUrlTree(['/']);
};