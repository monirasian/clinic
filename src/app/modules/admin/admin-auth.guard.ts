import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AdminAuthService } from '../../admin-auth.service';

export const adminAuthGuard: CanActivateFn = () => {
  const authService = inject(AdminAuthService);
  const router = inject(Router);

  if (authService.isLoggedIn() && authService.hasAnyRole(['Admin'])) {
    return true;
  }

  return router.createUrlTree(['/admin/login']);
};