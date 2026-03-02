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

// src/app/modules/aboutus/aboutus-routing.module.ts
var routes = [
  {
    path: "",
    loadComponent: () => import("./chunk-3VHFSFFI.js").then((module) => module.AboutusComponent)
  }
];
var _AboutusRoutingModule = class _AboutusRoutingModule {
};
_AboutusRoutingModule.\u0275fac = function AboutusRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AboutusRoutingModule)();
};
_AboutusRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AboutusRoutingModule });
_AboutusRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var AboutusRoutingModule = _AboutusRoutingModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutusRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/modules/aboutus/aboutus.module.ts
var _AboutusModule = class _AboutusModule {
};
_AboutusModule.\u0275fac = function AboutusModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AboutusModule)();
};
_AboutusModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AboutusModule });
_AboutusModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, AboutusRoutingModule] });
var AboutusModule = _AboutusModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutusModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, AboutusRoutingModule]
    }]
  }], null, null);
})();
export {
  AboutusModule
};
//# sourceMappingURL=chunk-Z2OXRXCU.js.map
