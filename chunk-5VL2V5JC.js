import {
  RouterLink,
  RouterModule
} from "./chunk-YVJY77VO.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-D67LXEMX.js";
import "./chunk-C4HPYBEJ.js";
import {
  CommonModule,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-JCLQJVGK.js";

// src/app/modules/admin/components/admin-home.component.ts
var _AdminHomeComponent = class _AdminHomeComponent {
};
_AdminHomeComponent.\u0275fac = function AdminHomeComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AdminHomeComponent)();
};
_AdminHomeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminHomeComponent, selectors: [["app-admin-home"]], decls: 21, vars: 18, consts: [[1, "admin-home"], [1, "card"], [1, "grid"], ["routerLink", "/admin/users/list", 1, "card"], ["routerLink", "/admin/clinics/list", 1, "card"], ["routerLink", "/admin/departments/list", 1, "card"], ["routerLink", "/admin/doctors/list", 1, "card"]], template: function AdminHomeComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "header", 1)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "section", 2)(9, "a", 3);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "a", 4);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "a", 5);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "a", 6);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 6, "ADMIN_HOME.TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 8, "ADMIN_HOME.SUBTITLE"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 10, "ADMIN_HOME.USERS_ROLES"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 12, "ADMIN_HOME.CLINICS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 14, "ADMIN_HOME.DEPARTMENTS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 16, "ADMIN_HOME.DOCTORS"));
  }
}, dependencies: [CommonModule, RouterModule, RouterLink, TranslateModule, TranslatePipe], styles: ["\n\n.admin-home[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n.card[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  background: white;\n  padding: 12px;\n  text-decoration: none;\n  color: #0f172a;\n  font-weight: 600;\n}\n.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  color: #475569;\n  font-weight: 400;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 10px;\n}\n@media (max-width: 900px) {\n  .grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=admin-home.component.css.map */"] });
var AdminHomeComponent = _AdminHomeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminHomeComponent, [{
    type: Component,
    args: [{ selector: "app-admin-home", standalone: true, imports: [CommonModule, RouterModule, TranslateModule], template: `
    <section class="admin-home">
      <header class="card">
        <h2>{{ 'ADMIN_HOME.TITLE' | translate }}</h2>
        <p>{{ 'ADMIN_HOME.SUBTITLE' | translate }}</p>
      </header>

      <section class="grid">
        <a class="card" routerLink="/admin/users/list">{{ 'ADMIN_HOME.USERS_ROLES' | translate }}</a>
        <a class="card" routerLink="/admin/clinics/list">{{ 'ADMIN_HOME.CLINICS' | translate }}</a>
        <a class="card" routerLink="/admin/departments/list">{{ 'ADMIN_HOME.DEPARTMENTS' | translate }}</a>
        <a class="card" routerLink="/admin/doctors/list">{{ 'ADMIN_HOME.DOCTORS' | translate }}</a>
      </section>
    </section>
  `, styles: ["/* angular:styles/component:scss;6342e9b17e17fafe48d23152ad1f45e4cb3fd59231895bdcb57ac669d91e303f;D:/xampp/htdocs/clinic/src/app/modules/admin/components/admin-home.component.ts */\n.admin-home {\n  display: grid;\n  gap: 12px;\n}\n.card {\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  background: white;\n  padding: 12px;\n  text-decoration: none;\n  color: #0f172a;\n  font-weight: 600;\n}\n.card h2 {\n  margin: 0;\n}\n.card p {\n  margin: 6px 0 0;\n  color: #475569;\n  font-weight: 400;\n}\n.grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 10px;\n}\n@media (max-width: 900px) {\n  .grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=admin-home.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminHomeComponent, { className: "AdminHomeComponent", filePath: "src/app/modules/admin/components/admin-home.component.ts", lineNumber: 66 });
})();
export {
  AdminHomeComponent
};
//# sourceMappingURL=chunk-5VL2V5JC.js.map
