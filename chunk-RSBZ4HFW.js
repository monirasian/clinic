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

// src/app/modules/home/home-routing.module.ts
var routes = [
  {
    path: "",
    loadComponent: () => import("./chunk-3RG7UWIV.js").then((module) => module.HomeComponent)
  }
];
var _HomeRoutingModule = class _HomeRoutingModule {
};
_HomeRoutingModule.\u0275fac = function HomeRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HomeRoutingModule)();
};
_HomeRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _HomeRoutingModule });
_HomeRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var HomeRoutingModule = _HomeRoutingModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/modules/home/home.module.ts
var _HomeModule = class _HomeModule {
};
_HomeModule.\u0275fac = function HomeModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HomeModule)();
};
_HomeModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _HomeModule });
_HomeModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, HomeRoutingModule] });
var HomeModule = _HomeModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, HomeRoutingModule]
    }]
  }], null, null);
})();
export {
  HomeModule
};
//# sourceMappingURL=chunk-RSBZ4HFW.js.map
