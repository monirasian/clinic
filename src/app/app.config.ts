import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';
import { API_BASE_URL } from './api.config';
import { authInterceptor } from './auth.interceptor';
import { httpErrorLoggerInterceptor } from './http-error-logger.interceptor';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor, httpErrorLoggerInterceptor])),
    {
      provide: API_BASE_URL,
      useValue: environment.apiBaseUrl
    }
  ]
};
