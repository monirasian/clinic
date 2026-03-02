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

// src/app/modules/departments/departments-routing.module.ts
var routes = [
  {
    path: ":slug",
    loadComponent: () => import("./chunk-ABQIEAUI.js").then((module) => module.ServiceDetailComponent)
  },
  {
    path: "",
    loadComponent: () => import("./chunk-7TTEKFCL.js").then((module) => module.DepartmentsComponent)
  }
];
var _DepartmentsRoutingModule = class _DepartmentsRoutingModule {
};
_DepartmentsRoutingModule.\u0275fac = function DepartmentsRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DepartmentsRoutingModule)();
};
_DepartmentsRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DepartmentsRoutingModule });
_DepartmentsRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var DepartmentsRoutingModule = _DepartmentsRoutingModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DepartmentsRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/modules/departments/departments.module.ts
var _DepartmentsModule = class _DepartmentsModule {
};
_DepartmentsModule.\u0275fac = function DepartmentsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DepartmentsModule)();
};
_DepartmentsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DepartmentsModule });
_DepartmentsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, DepartmentsRoutingModule] });
var DepartmentsModule = _DepartmentsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DepartmentsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, DepartmentsRoutingModule]
    }]
  }], null, null);
})();
export {
  DepartmentsModule
};
//# sourceMappingURL=chunk-YVZ3SUYX.js.map
