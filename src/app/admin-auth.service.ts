import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { catchError, map, Observable, of, switchMap, timeout } from 'rxjs';

import { API_BASE_URL } from './api.config';

export type AppRole = 'Admin' | 'Doctor' | 'Nurse' | 'Receptionist';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {
  private readonly storageKey = 'admin-authenticated';
  private readonly tokenStorageKey = 'admin-auth-token';
  private readonly roleStorageKey = 'app-role';
  private readonly http = inject(HttpClient);
  private readonly apiBaseUrl = inject(API_BASE_URL);
  private readonly loginEndpoints = ['auth/login', 'login', 'admin/login'];
  private readonly logoutEndpoints = ['auth/logout', 'logout', 'admin/logout'];
  private readonly sessionProbeEndpoint = 'users';
  private readonly requestTimeoutMs = 8000;
  private readonly authStateSubject = new BehaviorSubject<boolean>(this.resolveInitialAuthState());
  private readonly roleStateSubject = new BehaviorSubject<AppRole>(this.resolveInitialRole());
  readonly authState$ = this.authStateSubject.asObservable();
  readonly roleState$ = this.roleStateSubject.asObservable();

  isLoggedIn(): boolean {
    if (this.hasValidStoredToken()) {
      if (!this.authStateSubject.value) {
        this.authStateSubject.next(true);
      }

      const tokenRole = this.roleFromToken(this.getToken());
      if (tokenRole && tokenRole !== this.roleStateSubject.value) {
        this.setRole(tokenRole);
      }

      return true;
    }

    return this.authStateSubject.value;
  }

  getToken(): string {
    return localStorage.getItem(this.tokenStorageKey) ?? '';
  }

  private hasValidStoredToken(): boolean {
    const token = this.getToken();
    return this.isJwtTokenLikelyValid(token);
  }

  private resolveInitialAuthState(): boolean {
    if (this.hasValidStoredToken()) {
      return true;
    }

    return localStorage.getItem(this.storageKey) === 'true';
  }

  private resolveInitialRole(): AppRole {
    const tokenRole = this.roleFromToken(this.getToken());
    if (tokenRole) {
      return tokenRole;
    }

    return this.resolveStoredRole();
  }

  getRole(): AppRole {
    return this.roleStateSubject.value;
  }

  hasAnyRole(allowedRoles: AppRole[]): boolean {
    if (allowedRoles.includes(this.getRole())) {
      return true;
    }

    const tokenRole = this.roleFromToken(this.getToken());
    if (tokenRole) {
      this.setRole(tokenRole);
      return allowedRoles.includes(tokenRole);
    }

    return false;
  }

  login(username: string, password: string): Observable<boolean> {
    const payload = {
      username,
      password,
      Username: username,
      Password: password,
      email: username,
      Email: username
    };

    return this.postWithFallbackResponse(this.loginEndpoints, payload).pipe(
      switchMap((httpResponse) => {
        const body = httpResponse?.body ?? null;
        const headerToken = this.extractTokenFromHeaders(httpResponse?.headers);
        const bodyToken = this.extractToken(body);
        const token = headerToken || bodyToken;

        const bodySuccess = this.isAuthSuccess(body);
        const isAuthenticated = bodySuccess || Boolean(token);

        if (isAuthenticated) {
          return of({ body, token, isAuthenticated: true });
        }

        return this.verifySession().pipe(map((verified) => ({ body, token, isAuthenticated: verified })));
      }),
      map(({ body, token, isAuthenticated }) => {
        if (!isAuthenticated) {
          this.clearAuthState();
          return false;
        }

        if (token) {
          localStorage.setItem(this.tokenStorageKey, token);
        }

        this.setRole(this.extractRole(body, token));

        localStorage.setItem(this.storageKey, 'true');
        this.authStateSubject.next(true);
        return true;
      }),
      catchError(() => {
        this.clearAuthState();
        return of(false);
      })
    );
  }

  logout(): Observable<void> {
    return this.postWithFallback(this.logoutEndpoints, {}).pipe(
      map(() => {
        this.clearAuthState();
      }),
      catchError(() => {
        this.clearAuthState();
        return of(void 0);
      })
    );
  }

  private postWithFallback(
    endpoints: string[],
    payload: unknown,
    index = 0
  ): Observable<unknown> {
    if (index >= endpoints.length) {
      return of(null);
    }

    const endpoint = endpoints[index];

    return this.http
      .post<unknown>(`${this.apiBaseUrl}/${endpoint}`, payload, { withCredentials: true })
      .pipe(catchError(() => this.postWithFallback(endpoints, payload, index + 1)));
  }

  private postWithFallbackResponse(
    endpoints: string[],
    payload: unknown,
    index = 0
  ): Observable<HttpResponse<unknown> | null> {
    if (index >= endpoints.length) {
      return of(null);
    }

    const endpoint = endpoints[index];

    return this.http
      .post<unknown>(`${this.apiBaseUrl}/${endpoint}`, payload, {
        withCredentials: true,
        observe: 'response'
      })
      .pipe(catchError(() => this.postWithFallbackResponse(endpoints, payload, index + 1)));
  }

  private extractTokenFromHeaders(headers: HttpHeaders | undefined): string {
    if (!headers) {
      return '';
    }

    const candidates = [
      headers.get('Authorization'),
      headers.get('authorization'),
      headers.get('X-Access-Token'),
      headers.get('x-access-token'),
      headers.get('X-Auth-Token'),
      headers.get('x-auth-token')
    ];

    for (const raw of candidates) {
      if (!raw) {
        continue;
      }

      const value = raw.trim();
      if (value.length === 0) {
        continue;
      }

      const bearerMatch = /^bearer\s+(.+)$/i.exec(value);
      if (bearerMatch?.[1]) {
        return bearerMatch[1].trim();
      }

      return value;
    }

    return '';
  }

  private verifySession(): Observable<boolean> {
    return this.http
      .get<unknown>(`${this.apiBaseUrl}/${this.sessionProbeEndpoint}`, { withCredentials: true })
      .pipe(
        timeout(this.requestTimeoutMs),
        map(() => true),
        catchError(() => of(false))
      );
  }

  private isAuthSuccess(response: unknown): boolean {
    if (response === null || response === undefined) {
      return false;
    }

    if (typeof response === 'boolean') {
      return response;
    }

    if (typeof response !== 'object') {
      return false;
    }

    const record = response as Record<string, unknown>;
    const success = record['success'];
    const authenticated = record['authenticated'];

    if (typeof success === 'boolean') {
      return success;
    }

    if (typeof authenticated === 'boolean') {
      return authenticated;
    }

    return Boolean(this.extractToken(response)) || Boolean(record['user'] || record['data']);
  }

  private extractToken(response: unknown): string {
    if (!response || typeof response !== 'object') {
      return '';
    }

    const record = response as Record<string, unknown>;

    const direct = this.pickString(record, [
      'token',
      'Token',
      'accessToken',
      'AccessToken',
      'access_token',
      'jwt',
      'Jwt',
      'jwtToken',
      'id_token',
      'idToken'
    ]);
    if (direct) {
      return direct;
    }

    const nestedCandidates = [record['data'], record['result'], record['payload']];
    for (const nested of nestedCandidates) {
      if (nested && typeof nested === 'object') {
        const nestedRecord = nested as Record<string, unknown>;
        const nestedToken = this.pickString(nestedRecord, [
          'token',
          'Token',
          'accessToken',
          'AccessToken',
          'access_token',
          'jwt',
          'Jwt',
          'jwtToken',
          'id_token',
          'idToken'
        ]);
        if (nestedToken) {
          return nestedToken;
        }
      }
    }

    return '';
  }

  private pickString(record: Record<string, unknown>, keys: string[]): string {
    for (const key of keys) {
      const value = record[key];
      if (typeof value === 'string' && value.trim().length > 0) {
        return value;
      }
    }

    return '';
  }

  private clearAuthState(): void {
    localStorage.removeItem(this.storageKey);
    localStorage.removeItem(this.tokenStorageKey);
    localStorage.removeItem(this.roleStorageKey);
    this.authStateSubject.next(false);
    this.roleStateSubject.next('Admin');
  }

  private setRole(role: AppRole): void {
    localStorage.setItem(this.roleStorageKey, role);
    this.roleStateSubject.next(role);
  }

  private resolveStoredRole(): AppRole {
    const fromStorage = localStorage.getItem(this.roleStorageKey);
    if (fromStorage === 'Doctor' || fromStorage === 'Nurse' || fromStorage === 'Receptionist') {
      return fromStorage;
    }

    return 'Admin';
  }

  private isJwtTokenLikelyValid(token: string): boolean {
    if (!token || typeof token !== 'string') {
      return false;
    }

    const parts = token.split('.');
    if (parts.length < 2) {
      return false;
    }

    try {
      const payloadBase64 = parts[1].replace(/-/g, '+').replace(/_/g, '/');
      const normalized = payloadBase64.padEnd(Math.ceil(payloadBase64.length / 4) * 4, '=');
      const payloadRaw = atob(normalized);
      const payload = JSON.parse(payloadRaw) as Record<string, unknown>;

      const exp = payload['exp'];
      if (typeof exp === 'number' && Number.isFinite(exp)) {
        const nowSeconds = Math.floor(Date.now() / 1000);
        return exp > nowSeconds;
      }

      return true;
    } catch {
      return false;
    }
  }

  private extractRole(response: unknown, token: string): AppRole {
    const fromToken = this.roleFromToken(token);
    if (fromToken) {
      return fromToken;
    }

    const fromResponse = this.roleFromResponse(response);
    if (fromResponse) {
      return fromResponse;
    }

    return 'Admin';
  }

  private roleFromResponse(response: unknown): AppRole | '' {
    if (!response || typeof response !== 'object') {
      return '';
    }

    const record = response as Record<string, unknown>;
    const direct = this.normalizeRole(record['role']);
    if (direct) {
      return direct;
    }

    const nestedCandidates = [record['user'], record['data'], record['result'], record['payload']];
    for (const nested of nestedCandidates) {
      if (!nested || typeof nested !== 'object') {
        continue;
      }

      const nestedRecord = nested as Record<string, unknown>;
      const nestedRole = this.normalizeRole(nestedRecord['role']);
      if (nestedRole) {
        return nestedRole;
      }

      const nestedRoles = nestedRecord['roles'];
      if (Array.isArray(nestedRoles)) {
        for (const role of nestedRoles) {
          const normalized = this.normalizeRole(role);
          if (normalized) {
            return normalized;
          }
        }
      }
    }

    return '';
  }

  private roleFromToken(token: string): AppRole | '' {
    if (!token || !token.includes('.')) {
      return '';
    }

    try {
      const payloadBase64 = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
      const normalized = payloadBase64.padEnd(Math.ceil(payloadBase64.length / 4) * 4, '=');
      const payloadRaw = atob(normalized);
      const payload = JSON.parse(payloadRaw) as Record<string, unknown>;

      const directRole = this.normalizeRole(payload['role']);
      if (directRole) {
        return directRole;
      }

      const schemaRole = this.normalizeRole(payload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']);
      if (schemaRole) {
        return schemaRole;
      }

      const roles = payload['roles'];
      if (Array.isArray(roles)) {
        for (const role of roles) {
          const normalizedRole = this.normalizeRole(role);
          if (normalizedRole) {
            return normalizedRole;
          }
        }
      }
    } catch {
      return '';
    }

    return '';
  }

  private normalizeRole(value: unknown): AppRole | '' {
    if (typeof value !== 'string') {
      return '';
    }

    const normalized = value.trim().toLowerCase();

    if (
      normalized === 'admin' ||
      normalized === 'administrator' ||
      normalized === 'superadmin' ||
      normalized === 'super-admin' ||
      normalized === 'super_admin'
    ) {
      return 'Admin';
    }

    if (normalized === 'doctor' || normalized === 'physician') {
      return 'Doctor';
    }

    if (normalized === 'nurse') {
      return 'Nurse';
    }

    if (
      normalized === 'receptionist' ||
      normalized === 'frontdesk' ||
      normalized === 'front_desk' ||
      normalized === 'front-desk' ||
      normalized === 'frontoffice' ||
      normalized === 'front_office' ||
      normalized === 'front-office'
    ) {
      return 'Receptionist';
    }

    return '';
  }
}
