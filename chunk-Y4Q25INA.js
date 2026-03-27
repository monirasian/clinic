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

// src/app/modules/doctors/doctors.service.ts
var _DoctorsService = class _DoctorsService {
  constructor(http, apiBaseUrl) {
    this.http = http;
    this.apiBaseUrl = apiBaseUrl;
  }
  getAll() {
    return this.http.get(`${this.apiBaseUrl}/doctors`).pipe(map((payload) => this.extractArray(payload)), map((items) => items.map((item, index) => this.toDoctor(item, index))));
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
  toDoctor(item, index) {
    const firstName = this.pick(item, ["FirstName", "firstName"]);
    const lastName = this.pick(item, ["LastName", "lastName"]);
    const fullName = this.pick(item, ["FullName", "fullName", "Name", "name"]) || `${firstName} ${lastName}`.trim();
    return {
      Id: this.toNumber(item["Id"] ?? item["id"]) || index + 1,
      DepartmentId: this.toNumber(item["DepartmentId"] ?? item["departmentId"]) || 0,
      clinicId: this.toOptionalNumber(item["clinicId"] ?? item["clinicId"]),
      FullName: fullName,
      Specialty: this.pick(item, ["Specialty", "specialty", "Specialization", "specialization"]),
      Email: this.pick(item, ["Email", "email"]),
      Phone: this.pick(item, ["Phone", "phone"]),
      LicenseNumber: this.pick(item, ["LicenseNumber", "licenseNumber"]),
      Bio: this.pick(item, ["Bio", "bio", "Description", "description"])
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
  toOptionalNumber(value) {
    return this.toNumber(value) ?? void 0;
  }
};
_DoctorsService.\u0275fac = function DoctorsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DoctorsService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(API_BASE_URL));
};
_DoctorsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DoctorsService, factory: _DoctorsService.\u0275fac, providedIn: "root" });
var DoctorsService = _DoctorsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DoctorsService, [{
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
  DoctorsService
};
//# sourceMappingURL=chunk-Y4Q25INA.js.map
