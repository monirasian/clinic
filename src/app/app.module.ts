import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader, provideTranslateHttpLoader } from '@ngx-translate/http-loader';

import { environment } from '../environments/environment';
import { API_BASE_URL } from './api.config';
import { App } from './app';
import { routes } from './app.routes';
import { authInterceptor } from './auth.interceptor';
import { httpErrorLoggerInterceptor } from './http-error-logger.interceptor';

@NgModule({
  declarations: [App],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useClass: TranslateHttpLoader
      }
    })
  ],
  providers: [
    provideHttpClient(withInterceptors([authInterceptor, httpErrorLoggerInterceptor])),
    ...provideTranslateHttpLoader({
      prefix: './i18n/',
      suffix: '.json'
    }),
    {
      provide: API_BASE_URL,
      useValue: environment.apiBaseUrl
    }
  ],
  bootstrap: [App]
})
export class AppModule {}
