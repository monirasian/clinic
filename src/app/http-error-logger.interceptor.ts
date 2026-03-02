import { HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

export const httpErrorLoggerInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    tap({
      error: (error) => {
        const status = error?.status ?? 'unknown';
        const statusText = error?.statusText ?? 'Unknown Error';
        const message = error?.message ?? 'No additional details';

        console.error(
          `[HTTP ${req.method}] ${req.urlWithParams} -> ${status} ${statusText}. ${message}`,
          error
        );
      }
    })
  );
};