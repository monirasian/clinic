import {
  API_BASE_URL
} from "./chunk-KAR7HZ5G.js";
import {
  HttpClient
} from "./chunk-C4HPYBEJ.js";
import {
  Inject,
  Injectable,
  map,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-JCLQJVGK.js";

// src/app/modules/clinics/clinics.service.ts
var _clinicsService = class _clinicsService {
  constructor(http, apiBaseUrl) {
    this.http = http;
    this.apiBaseUrl = apiBaseUrl;
  }
  getAll() {
    return this.http.get(`${this.apiBaseUrl}/clinics`).pipe(map((payload) => this.extractArray(payload)), map((items) => items.map((item, index) => this.toclinic(item, index))));
  }
  extractArray(payload) {
    if (Array.isArray(payload)) {
      return payload;
    }
    if (!payload || typeof payload !== "object") {
      return [];
    }
    const record = payload;
    for (const key of ["data", "items", "results", "rows", "$values"]) {
      if (Array.isArray(record[key])) {
        return record[key];
      }
    }
    return [];
  }
  toclinic(item, index) {
    return {
      Id: this.toNumber(item["Id"] ?? item["id"]) || index + 1,
      Name: this.pick(item, ["Name", "name"]) || `clinic ${index + 1}`,
      Address: this.pick(item, ["Address", "address"]),
      Phone: this.pick(item, ["Phone", "phone"]),
      Email: this.pick(item, ["Email", "email"]),
      City: this.pick(item, ["City", "city"]),
      IsActive: this.toBoolean(item["IsActive"] ?? item["isActive"])
    };
  }
  pick(item, keys) {
    for (const key of keys) {
      const value = item[key];
      if (typeof value === "string" && value.trim().length > 0) {
        return value;
      }
    }
    return "";
  }
  toNumber(value) {
    if (typeof value === "number" && Number.isFinite(value)) {
      return value;
    }
    if (typeof value === "string" && value.trim().length > 0) {
      const parsed = Number(value);
      if (Number.isFinite(parsed)) {
        return parsed;
      }
    }
    return null;
  }
  toBoolean(value) {
    if (typeof value === "boolean") {
      return value;
    }
    if (typeof value === "number") {
      return value === 1;
    }
    if (typeof value === "string") {
      const normalized = value.trim().toLowerCase();
      if (normalized === "1" || normalized === "true" || normalized === "active") {
        return true;
      }
      if (normalized === "0" || normalized === "false" || normalized === "inactive") {
        return false;
      }
    }
    return true;
  }
};
_clinicsService.\u0275fac = function clinicsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _clinicsService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(API_BASE_URL));
};
_clinicsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _clinicsService, factory: _clinicsService.\u0275fac, providedIn: "root" });
var clinicsService = _clinicsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(clinicsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: void 0, decorators: [{
    type: Inject,
    args: [API_BASE_URL]
  }] }], null);
})();

export {
  clinicsService
};
//# sourceMappingURL=chunk-VDYAP6BO.js.map
