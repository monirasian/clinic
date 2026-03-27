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

// src/app/modules/contact/contact-routing.module.ts
var routes = [
  {
    path: "",
    loadComponent: () => import("./chunk-EON4NNFE.js").then((module) => module.ContactComponent)
  }
];
var _ContactRoutingModule = class _ContactRoutingModule {
};
_ContactRoutingModule.\u0275fac = function ContactRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ContactRoutingModule)();
};
_ContactRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ContactRoutingModule });
_ContactRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var ContactRoutingModule = _ContactRoutingModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContactRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/modules/contact/contact.module.ts
var _ContactModule = class _ContactModule {
};
_ContactModule.\u0275fac = function ContactModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ContactModule)();
};
_ContactModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ContactModule });
_ContactModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, ContactRoutingModule] });
var ContactModule = _ContactModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContactModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ContactRoutingModule]
    }]
  }], null, null);
})();
export {
  ContactModule
};
//# sourceMappingURL=chunk-FVXQTDW5.js.map
