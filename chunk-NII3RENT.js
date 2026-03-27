import {
  RouterModule
} from "./chunk-YVJY77VO.js";
import "./chunk-C4HPYBEJ.js";
import {
  CommonModule,
  NgModule,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-JCLQJVGK.js";

// src/app/modules/doctors/doctors-routing.module.ts
var routes = [
  {
    path: ":id",
    loadComponent: () => import("./chunk-2SLYESFF.js").then((module) => module.DoctorProfileComponent)
  },
  {
    path: "",
    loadComponent: () => import("./chunk-2SLYESFF.js").then((module) => module.DoctorsComponent)
  }
];
var _DoctorsRoutingModule = class _DoctorsRoutingModule {
};
_DoctorsRoutingModule.\u0275fac = function DoctorsRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DoctorsRoutingModule)();
};
_DoctorsRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DoctorsRoutingModule });
_DoctorsRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var DoctorsRoutingModule = _DoctorsRoutingModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DoctorsRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/modules/doctors/doctors.module.ts
var _DoctorsModule = class _DoctorsModule {
};
_DoctorsModule.\u0275fac = function DoctorsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DoctorsModule)();
};
_DoctorsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DoctorsModule });
_DoctorsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, DoctorsRoutingModule] });
var DoctorsModule = _DoctorsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DoctorsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, DoctorsRoutingModule]
    }]
  }], null, null);
})();
export {
  DoctorsModule
};
//# sourceMappingURL=chunk-NII3RENT.js.map
