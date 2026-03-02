import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

import { API_BASE_URL } from './api.config';
import { AdminAuthService } from './admin-auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const apiBaseUrl = inject(API_BASE_URL);
  const authService = inject(AdminAuthService);

  if (!req.url.startsWith(apiBaseUrl)) {
    return next(req);
  }

  const token = authService.getToken();
  if (!token) {
    return next(
      req.clone({
        withCredentials: true
      })
    );
  }

  return next(
    req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      },
      withCredentials: true
    })
  );
};