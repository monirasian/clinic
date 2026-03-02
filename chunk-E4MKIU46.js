import {
  TranslateModule,
  TranslatePipe
} from "./chunk-D67LXEMX.js";
import {
  CommonModule,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-JCLQJVGK.js";

// src/app/public/privacy.component.ts
var _PrivacyComponent = class _PrivacyComponent {
};
_PrivacyComponent.\u0275fac = function PrivacyComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PrivacyComponent)();
};
_PrivacyComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PrivacyComponent, selectors: [["app-privacy"]], decls: 10, vars: 9, consts: [[1, "static-page"]], template: function PrivacyComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 0)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "PRIVACY.TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, "PRIVACY.P1"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 7, "PRIVACY.P2"));
  }
}, dependencies: [CommonModule, TranslateModule, TranslatePipe], styles: ["\n\n.static-page[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  background: white;\n  padding: 16px;\n}\n.static-page[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n}\n.static-page[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 6px 0;\n  color: #475569;\n}\n/*# sourceMappingURL=privacy.component.css.map */"] });
var PrivacyComponent = _PrivacyComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrivacyComponent, [{
    type: Component,
    args: [{ selector: "app-privacy", standalone: true, imports: [CommonModule, TranslateModule], template: `
    <section class="static-page">
      <h2>{{ 'PRIVACY.TITLE' | translate }}</h2>
      <p>{{ 'PRIVACY.P1' | translate }}</p>
      <p>{{ 'PRIVACY.P2' | translate }}</p>
    </section>
  `, styles: ["/* angular:styles/component:scss;02b666a4dbd6faf0e1ef3b63abe25c50110d7950d058da4f4fbd58f07f906885;D:/xampp/htdocs/clinic/src/app/public/privacy.component.ts */\n.static-page {\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  background: white;\n  padding: 16px;\n}\n.static-page h2 {\n  margin: 0 0 10px;\n}\n.static-page p {\n  margin: 6px 0;\n  color: #475569;\n}\n/*# sourceMappingURL=privacy.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PrivacyComponent, { className: "PrivacyComponent", filePath: "src/app/public/privacy.component.ts", lineNumber: 36 });
})();

// src/app/public/terms.component.ts
var _TermsComponent = class _TermsComponent {
};
_TermsComponent.\u0275fac = function TermsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TermsComponent)();
};
_TermsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TermsComponent, selectors: [["app-terms"]], decls: 10, vars: 9, consts: [[1, "static-page"]], template: function TermsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 0)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "TERMS.TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, "TERMS.P1"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 7, "TERMS.P2"));
  }
}, dependencies: [CommonModule, TranslateModule, TranslatePipe], styles: ["\n\n.static-page[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  background: white;\n  padding: 16px;\n}\n.static-page[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n}\n.static-page[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 6px 0;\n  color: #475569;\n}\n/*# sourceMappingURL=terms.component.css.map */"] });
var TermsComponent = _TermsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TermsComponent, [{
    type: Component,
    args: [{ selector: "app-terms", standalone: true, imports: [CommonModule, TranslateModule], template: `
    <section class="static-page">
      <h2>{{ 'TERMS.TITLE' | translate }}</h2>
      <p>{{ 'TERMS.P1' | translate }}</p>
      <p>{{ 'TERMS.P2' | translate }}</p>
    </section>
  `, styles: ["/* angular:styles/component:scss;02b666a4dbd6faf0e1ef3b63abe25c50110d7950d058da4f4fbd58f07f906885;D:/xampp/htdocs/clinic/src/app/public/terms.component.ts */\n.static-page {\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  background: white;\n  padding: 16px;\n}\n.static-page h2 {\n  margin: 0 0 10px;\n}\n.static-page p {\n  margin: 6px 0;\n  color: #475569;\n}\n/*# sourceMappingURL=terms.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TermsComponent, { className: "TermsComponent", filePath: "src/app/public/terms.component.ts", lineNumber: 36 });
})();
export {
  PrivacyComponent,
  TermsComponent
};
//# sourceMappingURL=chunk-E4MKIU46.js.map
