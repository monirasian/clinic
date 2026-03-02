import {
  API_BASE_URL
} from "./chunk-KAR7HZ5G.js";
import {
  HttpClient
} from "./chunk-C4HPYBEJ.js";
import {
  BehaviorSubject,
  Injectable,
  catchError,
  inject,
  map,
  of,
  setClassMetadata,
  switchMap,
  timeout,
  ɵɵdefineInjectable
} from "./chunk-JCLQJVGK.js";

// src/app/admin-auth.service.ts
var _AdminAuthService = class _AdminAuthService {
  constructor() {
    this.storageKey = "admin-authenticated";
    this.tokenStorageKey = "admin-auth-token";
    this.roleStorageKey = "app-role";
    this.http = inject(HttpClient);
    this.apiBaseUrl = inject(API_BASE_URL);
    this.loginEndpoints = ["auth/login", "login", "admin/login"];
    this.logoutEndpoints = ["auth/logout", "logout", "admin/logout"];
    this.sessionProbeEndpoint = "users";
    this.requestTimeoutMs = 8e3;
    this.authStateSubject = new BehaviorSubject(this.resolveInitialAuthState());
    this.roleStateSubject = new BehaviorSubject(this.resolveInitialRole());
    this.authState$ = this.authStateSubject.asObservable();
    this.roleState$ = this.roleStateSubject.asObservable();
  }
  isLoggedIn() {
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
  getToken() {
    return localStorage.getItem(this.tokenStorageKey) ?? "";
  }
  hasValidStoredToken() {
    const token = this.getToken();
    return this.isJwtTokenLikelyValid(token);
  }
  resolveInitialAuthState() {
    if (this.hasValidStoredToken()) {
      return true;
    }
    return localStorage.getItem(this.storageKey) === "true";
  }
  resolveInitialRole() {
    const tokenRole = this.roleFromToken(this.getToken());
    if (tokenRole) {
      return tokenRole;
    }
    return this.resolveStoredRole();
  }
  getRole() {
    return this.roleStateSubject.value;
  }
  hasAnyRole(allowedRoles) {
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
  login(username, password) {
    const payload = {
      username,
      password,
      Username: username,
      Password: password,
      email: username,
      Email: username
    };
    return this.postWithFallbackResponse(this.loginEndpoints, payload).pipe(switchMap((httpResponse) => {
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
    }), map(({ body, token, isAuthenticated }) => {
      if (!isAuthenticated) {
        this.clearAuthState();
        return false;
      }
      if (token) {
        localStorage.setItem(this.tokenStorageKey, token);
      }
      this.setRole(this.extractRole(body, token));
      localStorage.setItem(this.storageKey, "true");
      this.authStateSubject.next(true);
      return true;
    }), catchError(() => {
      this.clearAuthState();
      return of(false);
    }));
  }
  logout() {
    return this.postWithFallback(this.logoutEndpoints, {}).pipe(map(() => {
      this.clearAuthState();
    }), catchError(() => {
      this.clearAuthState();
      return of(void 0);
    }));
  }
  postWithFallback(endpoints, payload, index = 0) {
    if (index >= endpoints.length) {
      return of(null);
    }
    const endpoint = endpoints[index];
    return this.http.post(`${this.apiBaseUrl}/${endpoint}`, payload, { withCredentials: true }).pipe(catchError(() => this.postWithFallback(endpoints, payload, index + 1)));
  }
  postWithFallbackResponse(endpoints, payload, index = 0) {
    if (index >= endpoints.length) {
      return of(null);
    }
    const endpoint = endpoints[index];
    return this.http.post(`${this.apiBaseUrl}/${endpoint}`, payload, {
      withCredentials: true,
      observe: "response"
    }).pipe(catchError(() => this.postWithFallbackResponse(endpoints, payload, index + 1)));
  }
  extractTokenFromHeaders(headers) {
    if (!headers) {
      return "";
    }
    const candidates = [
      headers.get("Authorization"),
      headers.get("authorization"),
      headers.get("X-Access-Token"),
      headers.get("x-access-token"),
      headers.get("X-Auth-Token"),
      headers.get("x-auth-token")
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
    return "";
  }
  verifySession() {
    return this.http.get(`${this.apiBaseUrl}/${this.sessionProbeEndpoint}`, { withCredentials: true }).pipe(timeout(this.requestTimeoutMs), map(() => true), catchError(() => of(false)));
  }
  isAuthSuccess(response) {
    if (response === null || response === void 0) {
      return false;
    }
    if (typeof response === "boolean") {
      return response;
    }
    if (typeof response !== "object") {
      return false;
    }
    const record = response;
    const success = record["success"];
    const authenticated = record["authenticated"];
    if (typeof success === "boolean") {
      return success;
    }
    if (typeof authenticated === "boolean") {
      return authenticated;
    }
    return Boolean(this.extractToken(response)) || Boolean(record["user"] || record["data"]);
  }
  extractToken(response) {
    if (!response || typeof response !== "object") {
      return "";
    }
    const record = response;
    const direct = this.pickString(record, [
      "token",
      "Token",
      "accessToken",
      "AccessToken",
      "access_token",
      "jwt",
      "Jwt",
      "jwtToken",
      "id_token",
      "idToken"
    ]);
    if (direct) {
      return direct;
    }
    const nestedCandidates = [record["data"], record["result"], record["payload"]];
    for (const nested of nestedCandidates) {
      if (nested && typeof nested === "object") {
        const nestedRecord = nested;
        const nestedToken = this.pickString(nestedRecord, [
          "token",
          "Token",
          "accessToken",
          "AccessToken",
          "access_token",
          "jwt",
          "Jwt",
          "jwtToken",
          "id_token",
          "idToken"
        ]);
        if (nestedToken) {
          return nestedToken;
        }
      }
    }
    return "";
  }
  pickString(record, keys) {
    for (const key of keys) {
      const value = record[key];
      if (typeof value === "string" && value.trim().length > 0) {
        return value;
      }
    }
    return "";
  }
  clearAuthState() {
    localStorage.removeItem(this.storageKey);
    localStorage.removeItem(this.tokenStorageKey);
    localStorage.removeItem(this.roleStorageKey);
    this.authStateSubject.next(false);
    this.roleStateSubject.next("Admin");
  }
  setRole(role) {
    localStorage.setItem(this.roleStorageKey, role);
    this.roleStateSubject.next(role);
  }
  resolveStoredRole() {
    const fromStorage = localStorage.getItem(this.roleStorageKey);
    if (fromStorage === "Doctor" || fromStorage === "Nurse" || fromStorage === "Receptionist") {
      return fromStorage;
    }
    return "Admin";
  }
  isJwtTokenLikelyValid(token) {
    if (!token || typeof token !== "string") {
      return false;
    }
    const parts = token.split(".");
    if (parts.length < 2) {
      return false;
    }
    try {
      const payloadBase64 = parts[1].replace(/-/g, "+").replace(/_/g, "/");
      const normalized = payloadBase64.padEnd(Math.ceil(payloadBase64.length / 4) * 4, "=");
      const payloadRaw = atob(normalized);
      const payload = JSON.parse(payloadRaw);
      const exp = payload["exp"];
      if (typeof exp === "number" && Number.isFinite(exp)) {
        const nowSeconds = Math.floor(Date.now() / 1e3);
        return exp > nowSeconds;
      }
      return true;
    } catch {
      return false;
    }
  }
  extractRole(response, token) {
    const fromToken = this.roleFromToken(token);
    if (fromToken) {
      return fromToken;
    }
    const fromResponse = this.roleFromResponse(response);
    if (fromResponse) {
      return fromResponse;
    }
    return "Admin";
  }
  roleFromResponse(response) {
    if (!response || typeof response !== "object") {
      return "";
    }
    const record = response;
    const direct = this.normalizeRole(record["role"]);
    if (direct) {
      return direct;
    }
    const nestedCandidates = [record["user"], record["data"], record["result"], record["payload"]];
    for (const nested of nestedCandidates) {
      if (!nested || typeof nested !== "object") {
        continue;
      }
      const nestedRecord = nested;
      const nestedRole = this.normalizeRole(nestedRecord["role"]);
      if (nestedRole) {
        return nestedRole;
      }
      const nestedRoles = nestedRecord["roles"];
      if (Array.isArray(nestedRoles)) {
        for (const role of nestedRoles) {
          const normalized = this.normalizeRole(role);
          if (normalized) {
            return normalized;
          }
        }
      }
    }
    return "";
  }
  roleFromToken(token) {
    if (!token || !token.includes(".")) {
      return "";
    }
    try {
      const payloadBase64 = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
      const normalized = payloadBase64.padEnd(Math.ceil(payloadBase64.length / 4) * 4, "=");
      const payloadRaw = atob(normalized);
      const payload = JSON.parse(payloadRaw);
      const directRole = this.normalizeRole(payload["role"]);
      if (directRole) {
        return directRole;
      }
      const schemaRole = this.normalizeRole(payload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]);
      if (schemaRole) {
        return schemaRole;
      }
      const roles = payload["roles"];
      if (Array.isArray(roles)) {
        for (const role of roles) {
          const normalizedRole = this.normalizeRole(role);
          if (normalizedRole) {
            return normalizedRole;
          }
        }
      }
    } catch {
      return "";
    }
    return "";
  }
  normalizeRole(value) {
    if (typeof value !== "string") {
      return "";
    }
    const normalized = value.trim().toLowerCase();
    if (normalized === "admin") {
      return "Admin";
    }
    if (normalized === "doctor") {
      return "Doctor";
    }
    if (normalized === "nurse") {
      return "Nurse";
    }
    if (normalized === "receptionist") {
      return "Receptionist";
    }
    return "";
  }
};
_AdminAuthService.\u0275fac = function AdminAuthService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AdminAuthService)();
};
_AdminAuthService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminAuthService, factory: _AdminAuthService.\u0275fac, providedIn: "root" });
var AdminAuthService = _AdminAuthService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminAuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  AdminAuthService
};
//# sourceMappingURL=chunk-SNWVSXOE.js.map
