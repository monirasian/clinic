import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AdminAuthService } from '../../admin-auth.service';

export const adminLoginGuard: CanActivateFn = () => {
  const authService = inject(AdminAuthService);
  const router = inject(Router);

  if (authService.isLoggedIn() && authService.hasAnyRole(['Admin'])) {
    return router.createUrlTree(['/admin/dashboard']);
  }

  return true;
};
