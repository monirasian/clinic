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
  TranslatePipe
} from "./chunk-D67LXEMX.js";
import {
  CommonModule,
  Component,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-JCLQJVGK.js";

// src/app/modules/career/components/career.component.ts
function CareerComponent_p_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "CAREER.FORM.THANKS"));
  }
}
var _CareerComponent = class _CareerComponent {
  constructor() {
    this.fullName = "";
    this.email = "";
    this.phone = "";
    this.message = "";
    this.submitted = false;
  }
  submit() {
    this.submitted = true;
    this.fullName = "";
    this.email = "";
    this.phone = "";
    this.message = "";
  }
};
_CareerComponent.\u0275fac = function CareerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CareerComponent)();
};
_CareerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CareerComponent, selectors: [["app-career"]], decls: 62, vars: 62, consts: [[1, "career-page"], [1, "card", "hero"], [1, "card"], [1, "grid"], [1, "apply-form", 3, "ngSubmit"], ["name", "fullName", "required", "", 3, "ngModelChange", "ngModel", "placeholder"], ["name", "email", "type", "email", "required", "", 3, "ngModelChange", "ngModel", "placeholder"], ["name", "phone", "required", "", 3, "ngModelChange", "ngModel", "placeholder"], ["name", "message", 3, "ngModelChange", "ngModel", "placeholder"], ["type", "submit"], ["class", "ok", 4, "ngIf"], [1, "ok"]], template: function CareerComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "article", 1)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "article", 2)(9, "h3");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 3)(13, "p");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "article", 2)(26, "h3");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "ul")(30, "li");
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "li");
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "li");
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "li");
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "article", 2)(43, "h3");
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "p");
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "form", 4);
    \u0275\u0275listener("ngSubmit", function CareerComponent_Template_form_ngSubmit_49_listener() {
      return ctx.submit();
    });
    \u0275\u0275elementStart(50, "input", 5);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function CareerComponent_Template_input_ngModelChange_50_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.fullName, $event) || (ctx.fullName = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "input", 6);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function CareerComponent_Template_input_ngModelChange_52_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "input", 7);
    \u0275\u0275pipe(55, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function CareerComponent_Template_input_ngModelChange_54_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.phone, $event) || (ctx.phone = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "textarea", 8);
    \u0275\u0275pipe(57, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function CareerComponent_Template_textarea_ngModelChange_56_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.message, $event) || (ctx.message = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "button", 9);
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(61, CareerComponent_p_61_Template, 3, 3, "p", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 24, "CAREER.TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 26, "CAREER.INTRO"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 28, "CAREER.BENEFITS.TITLE"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 30, "CAREER.BENEFITS.ITEM_1"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 32, "CAREER.BENEFITS.ITEM_2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 34, "CAREER.BENEFITS.ITEM_3"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 36, "CAREER.BENEFITS.ITEM_4"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 38, "CAREER.HIRING_AREAS.TITLE"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 40, "CAREER.HIRING_AREAS.ITEM_1"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 42, "CAREER.HIRING_AREAS.ITEM_2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 44, "CAREER.HIRING_AREAS.ITEM_3"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 46, "CAREER.HIRING_AREAS.ITEM_4"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 48, "CAREER.APPLY.TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(48, 50, "CAREER.APPLY.TEXT"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.fullName);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(51, 52, "CAREER.FORM.FULL_NAME"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx.email);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(53, 54, "CAREER.FORM.EMAIL"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx.phone);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(55, 56, "CAREER.FORM.PHONE"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx.message);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(57, 58, "CAREER.FORM.ROLE_OF_INTEREST"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(60, 60, "CAREER.FORM.SUBMIT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.submitted);
  }
}, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, TranslateModule, TranslatePipe], styles: ["\n\n.career-page[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n.card[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  background: white;\n  padding: 12px;\n}\nh2[_ngcontent-%COMP%], \nh3[_ngcontent-%COMP%] {\n  margin: 0;\n}\np[_ngcontent-%COMP%], \nli[_ngcontent-%COMP%] {\n  color: #475569;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 8px;\n}\n.apply-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 8px;\n}\ninput[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%] {\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  padding: 8px 10px;\n}\nbutton[_ngcontent-%COMP%] {\n  border: 1px solid #2563eb;\n  background: #2563eb;\n  color: white;\n  border-radius: 8px;\n  padding: 8px 12px;\n  font-weight: 600;\n  width: fit-content;\n}\n.ok[_ngcontent-%COMP%] {\n  color: #166534;\n  margin: 8px 0 0;\n}\n/*# sourceMappingURL=career.component.css.map */"] });
var CareerComponent = _CareerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CareerComponent, [{
    type: Component,
    args: [{ selector: "app-career", standalone: true, imports: [CommonModule, FormsModule, TranslateModule], template: `
    <section class="career-page">
      <article class="card hero">
        <h2>{{ 'CAREER.TITLE' | translate }}</h2>
        <p>{{ 'CAREER.INTRO' | translate }}</p>
      </article>

      <article class="card">
        <h3>{{ 'CAREER.BENEFITS.TITLE' | translate }}</h3>
        <div class="grid">
          <p>{{ 'CAREER.BENEFITS.ITEM_1' | translate }}</p>
          <p>{{ 'CAREER.BENEFITS.ITEM_2' | translate }}</p>
          <p>{{ 'CAREER.BENEFITS.ITEM_3' | translate }}</p>
          <p>{{ 'CAREER.BENEFITS.ITEM_4' | translate }}</p>
        </div>
      </article>

      <article class="card">
        <h3>{{ 'CAREER.HIRING_AREAS.TITLE' | translate }}</h3>
        <ul>
          <li>{{ 'CAREER.HIRING_AREAS.ITEM_1' | translate }}</li>
          <li>{{ 'CAREER.HIRING_AREAS.ITEM_2' | translate }}</li>
          <li>{{ 'CAREER.HIRING_AREAS.ITEM_3' | translate }}</li>
          <li>{{ 'CAREER.HIRING_AREAS.ITEM_4' | translate }}</li>
        </ul>
      </article>

      <article class="card">
        <h3>{{ 'CAREER.APPLY.TITLE' | translate }}</h3>
        <p>{{ 'CAREER.APPLY.TEXT' | translate }}</p>
        <form (ngSubmit)="submit()" class="apply-form">
          <input name="fullName" [(ngModel)]="fullName" [placeholder]="'CAREER.FORM.FULL_NAME' | translate" required />
          <input name="email" [(ngModel)]="email" type="email" [placeholder]="'CAREER.FORM.EMAIL' | translate" required />
          <input name="phone" [(ngModel)]="phone" [placeholder]="'CAREER.FORM.PHONE' | translate" required />
          <textarea name="message" [(ngModel)]="message" [placeholder]="'CAREER.FORM.ROLE_OF_INTEREST' | translate"></textarea>
          <button type="submit">{{ 'CAREER.FORM.SUBMIT' | translate }}</button>
        </form>
        <p *ngIf="submitted" class="ok">{{ 'CAREER.FORM.THANKS' | translate }}</p>
      </article>
    </section>
  `, styles: ["/* angular:styles/component:scss;e3ab54835245efd236d15d100009dbeef886f833e126dac4c1ceab33c1bc61bf;D:/xampp/htdocs/clinic/src/app/modules/career/components/career.component.ts */\n.career-page {\n  display: grid;\n  gap: 12px;\n}\n.card {\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  background: white;\n  padding: 12px;\n}\nh2,\nh3 {\n  margin: 0;\n}\np,\nli {\n  color: #475569;\n}\n.grid {\n  display: grid;\n  gap: 8px;\n}\n.apply-form {\n  display: grid;\n  gap: 8px;\n}\ninput,\ntextarea {\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  padding: 8px 10px;\n}\nbutton {\n  border: 1px solid #2563eb;\n  background: #2563eb;\n  color: white;\n  border-radius: 8px;\n  padding: 8px 12px;\n  font-weight: 600;\n  width: fit-content;\n}\n.ok {\n  color: #166534;\n  margin: 8px 0 0;\n}\n/*# sourceMappingURL=career.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CareerComponent, { className: "CareerComponent", filePath: "src/app/modules/career/components/career.component.ts", lineNumber: 109 });
})();
export {
  CareerComponent
};
//# sourceMappingURL=chunk-56IOYCKL.js.map
