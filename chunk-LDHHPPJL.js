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

// src/app/modules/career/career-routing.module.ts
var routes = [
  {
    path: "",
    loadComponent: () => import("./chunk-56IOYCKL.js").then((module) => module.CareerComponent)
  }
];
var _CareerRoutingModule = class _CareerRoutingModule {
};
_CareerRoutingModule.\u0275fac = function CareerRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CareerRoutingModule)();
};
_CareerRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CareerRoutingModule });
_CareerRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var CareerRoutingModule = _CareerRoutingModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CareerRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/modules/career/career.module.ts
var _CareerModule = class _CareerModule {
};
_CareerModule.\u0275fac = function CareerModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CareerModule)();
};
_CareerModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CareerModule });
_CareerModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, CareerRoutingModule] });
var CareerModule = _CareerModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CareerModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, CareerRoutingModule]
    }]
  }], null, null);
})();
export {
  CareerModule
};
//# sourceMappingURL=chunk-LDHHPPJL.js.map
