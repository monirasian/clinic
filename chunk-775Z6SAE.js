import {
  AdminAuthService
} from "./chunk-SNWVSXOE.js";
import {
  Router
} from "./chunk-YVJY77VO.js";
import "./chunk-KAR7HZ5G.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-HB7SU3DO.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-D67LXEMX.js";
import "./chunk-C4HPYBEJ.js";
import {
  CommonModule,
  Component,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-JCLQJVGK.js";

// src/app/modules/admin/components/admin.component.ts
function AdminComponent_form_5_p_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function AdminComponent_form_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 4);
    \u0275\u0275listener("ngSubmit", function AdminComponent_form_5_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.login());
    });
    \u0275\u0275elementStart(1, "p", 5);
    \u0275\u0275text(2, "Use your admin username/email and password to access protected controllers.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "label", 6);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 7);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_form_5_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.username, $event) || (ctx_r1.username = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "label", 8);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 9);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_form_5_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.password, $event) || (ctx_r1.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 10);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, AdminComponent_form_5_p_16_Template, 2, 1, "p", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 9, "ADMIN.USERNAME"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.username);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(7, 11, "ADMIN.USERNAME_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 13, "ADMIN.PASSWORD"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.password);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(12, 15, "ADMIN.PASSWORD_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSubmitting || !ctx_r1.canSubmit);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 17, "ADMIN.LOGIN"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.error);
  }
}
function AdminComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 14);
    \u0275\u0275listener("click", function AdminComponent_div_6_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "ADMIN.WELCOME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "ADMIN.LOGOUT"));
  }
}
var _AdminComponent = class _AdminComponent {
  get canSubmit() {
    return this.username.trim().length > 0 && this.password.trim().length > 0;
  }
  constructor(authService, translate, router) {
    this.authService = authService;
    this.translate = translate;
    this.router = router;
    this.username = "";
    this.password = "";
    this.error = "";
    this.isAuthenticated = false;
    this.isSubmitting = false;
    this.isAuthenticated = this.authService.isLoggedIn() && this.authService.hasAnyRole(["Admin"]);
    if (this.isAuthenticated) {
      this.router.navigate(["/admin/dashboard"]);
    }
  }
  login() {
    if (this.isSubmitting) {
      return;
    }
    this.isSubmitting = true;
    this.authService.login(this.username.trim(), this.password).subscribe((isLoggedIn) => {
      this.isSubmitting = false;
      if (!isLoggedIn) {
        this.error = `${this.translate.instant("ADMIN.INVALID_CREDENTIALS")} (or session not issued by API).`;
        this.password = "";
        this.isAuthenticated = false;
        return;
      }
      this.error = "";
      this.isAuthenticated = true;
      this.password = "";
      this.router.navigate(["/admin/dashboard"]);
    });
  }
  logout() {
    this.authService.logout().subscribe(() => {
      this.isAuthenticated = false;
      this.password = "";
    });
  }
};
_AdminComponent.\u0275fac = function AdminComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AdminComponent)(\u0275\u0275directiveInject(AdminAuthService), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(Router));
};
_AdminComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminComponent, selectors: [["app-admin"]], decls: 7, vars: 5, consts: [[1, "admin-shell"], [1, "admin-panel"], ["class", "admin-login", 3, "ngSubmit", 4, "ngIf"], ["class", "admin-content", 4, "ngIf"], [1, "admin-login", 3, "ngSubmit"], [1, "hint"], ["for", "admin-username"], ["id", "admin-username", "name", "username", "required", "", 3, "ngModelChange", "ngModel", "placeholder"], ["for", "admin-password"], ["id", "admin-password", "name", "password", "type", "password", "required", "", 3, "ngModelChange", "ngModel", "placeholder"], ["type", "submit", 3, "disabled"], ["class", "error", 4, "ngIf"], [1, "error"], [1, "admin-content"], ["type", "button", 3, "click"]], template: function AdminComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "section", 1)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AdminComponent_form_5_Template, 17, 19, "form", 2)(6, AdminComponent_div_6_Template, 7, 6, "div", 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "ADMIN.TITLE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx.isAuthenticated);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isAuthenticated);
  }
}, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, TranslateModule, TranslatePipe], styles: ["\n\n.admin-shell[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n}\n.admin-panel[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  background: white;\n  padding: 16px;\n  width: min(420px, 100%);\n}\n.admin-login[_ngcontent-%COMP%], \n.admin-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  max-width: 360px;\n}\n.admin-login[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  padding: 8px 10px;\n}\n.admin-login[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.admin-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #2563eb;\n  background: #2563eb;\n  color: white;\n  border-radius: 8px;\n  padding: 8px 12px;\n  cursor: pointer;\n  font-weight: 600;\n  width: fit-content;\n}\n.error[_ngcontent-%COMP%] {\n  color: #b91c1c;\n  margin: 0;\n}\n.hint[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n  font-size: 0.875rem;\n}\n/*# sourceMappingURL=admin.component.css.map */"] });
var AdminComponent = _AdminComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminComponent, [{
    type: Component,
    args: [{ selector: "app-admin", standalone: true, imports: [CommonModule, FormsModule, TranslateModule], template: `
    <section class="admin-shell">
      <section class="admin-panel">
        <h2>{{ 'ADMIN.TITLE' | translate }}</h2>

        <form *ngIf="!isAuthenticated" class="admin-login" (ngSubmit)="login()">
          <p class="hint">Use your admin username/email and password to access protected controllers.</p>

          <label for="admin-username">{{ 'ADMIN.USERNAME' | translate }}</label>
          <input
            id="admin-username"
            name="username"
            [(ngModel)]="username"
            [placeholder]="'ADMIN.USERNAME_PLACEHOLDER' | translate"
            required
          />

          <label for="admin-password">{{ 'ADMIN.PASSWORD' | translate }}</label>
          <input
            id="admin-password"
            name="password"
            type="password"
            [(ngModel)]="password"
            [placeholder]="'ADMIN.PASSWORD_PLACEHOLDER' | translate"
            required
          />

          <button type="submit" [disabled]="isSubmitting || !canSubmit">{{ 'ADMIN.LOGIN' | translate }}</button>
          <p *ngIf="error" class="error">{{ error }}</p>
        </form>

        <div *ngIf="isAuthenticated" class="admin-content">
          <p>{{ 'ADMIN.WELCOME' | translate }}</p>
          <button type="button" (click)="logout()">{{ 'ADMIN.LOGOUT' | translate }}</button>
        </div>
      </section>
    </section>
  `, styles: ["/* angular:styles/component:scss;60771b8e136128a80dcfda68d0bb212e967fc8fd5e27d01de3b536c67d516a8e;D:/xampp/htdocs/clinic/src/app/modules/admin/components/admin.component.ts */\n.admin-shell {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n}\n.admin-panel {\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  background: white;\n  padding: 16px;\n  width: min(420px, 100%);\n}\n.admin-login,\n.admin-content {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  max-width: 360px;\n}\n.admin-login input {\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  padding: 8px 10px;\n}\n.admin-login button,\n.admin-content button {\n  border: 1px solid #2563eb;\n  background: #2563eb;\n  color: white;\n  border-radius: 8px;\n  padding: 8px 12px;\n  cursor: pointer;\n  font-weight: 600;\n  width: fit-content;\n}\n.error {\n  color: #b91c1c;\n  margin: 0;\n}\n.hint {\n  margin: 0;\n  color: #64748b;\n  font-size: 0.875rem;\n}\n/*# sourceMappingURL=admin.component.css.map */\n"] }]
  }], () => [{ type: AdminAuthService }, { type: TranslateService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminComponent, { className: "AdminComponent", filePath: "src/app/modules/admin/components/admin.component.ts", lineNumber: 109 });
})();
export {
  AdminComponent
};
//# sourceMappingURL=chunk-775Z6SAE.js.map
