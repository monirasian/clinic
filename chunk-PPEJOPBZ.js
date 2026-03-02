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

// src/app/modules/departments/departments.service.ts
var _DepartmentsService = class _DepartmentsService {
  constructor(http, apiBaseUrl) {
    this.http = http;
    this.apiBaseUrl = apiBaseUrl;
  }
  getAll() {
    return this.http.get(`${this.apiBaseUrl}/departments`).pipe(map((payload) => this.extractArray(payload)), map((items) => items.map((item, index) => this.toDepartment(item, index))));
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
  toDepartment(item, index) {
    return {
      Id: this.toNumber(item["Id"] ?? item["id"]) || index + 1,
      clinicId: this.toNumber(item["clinicId"] ?? item["clinicId"]) || 0,
      Name: this.pick(item, ["Name", "name"]) || `Service ${index + 1}`,
      Description: this.pick(item, ["Description", "description"])
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
};
_DepartmentsService.\u0275fac = function DepartmentsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DepartmentsService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(API_BASE_URL));
};
_DepartmentsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DepartmentsService, factory: _DepartmentsService.\u0275fac, providedIn: "root" });
var DepartmentsService = _DepartmentsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DepartmentsService, [{
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
  DepartmentsService
};
//# sourceMappingURL=chunk-PPEJOPBZ.js.map
