import {
  clinicsService
} from "./chunk-VDYAP6BO.js";
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
  TranslatePipe
} from "./chunk-D67LXEMX.js";
import "./chunk-C4HPYBEJ.js";
import {
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-JCLQJVGK.js";

// src/app/modules/contact/components/contact.component.ts
function ContactComponent_article_23_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const clinic_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "COMMON.EMAIL"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", clinic_r1.Email);
  }
}
function ContactComponent_article_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 13)(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p")(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ContactComponent_article_23_p_10_Template, 5, 4, "p", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const clinic_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(clinic_r1.Name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(clinic_r1.Address || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(8, 5, "COMMON.PHONE"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", clinic_r1.Phone || "-");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", clinic_r1.Email);
  }
}
function ContactComponent_p_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "CONTACT.FORM.SENT"));
  }
}
var _ContactComponent = class _ContactComponent {
  constructor(clinicsService) {
    this.clinicsService = clinicsService;
    this.clinics = [];
    this.name = "";
    this.email = "";
    this.phone = "";
    this.subject = "";
    this.message = "";
    this.submitted = false;
  }
  ngOnInit() {
    this.clinicsService.getAll().subscribe({
      next: (data) => {
        this.clinics = data;
      },
      error: () => {
        this.clinics = [];
      }
    });
  }
  submit() {
    this.submitted = true;
    this.name = "";
    this.email = "";
    this.phone = "";
    this.subject = "";
    this.message = "";
  }
};
_ContactComponent.\u0275fac = function ContactComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ContactComponent)(\u0275\u0275directiveInject(clinicsService));
};
_ContactComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactComponent, selectors: [["app-contact"]], decls: 50, vars: 49, consts: [[1, "contact-page"], [1, "card"], [1, "locations"], ["class", "location", 4, "ngFor", "ngForOf"], [1, "contact-form", 3, "ngSubmit"], ["name", "name", "required", "", 3, "ngModelChange", "ngModel", "placeholder"], ["name", "email", "type", "email", "required", "", 3, "ngModelChange", "ngModel", "placeholder"], ["name", "phone", "required", "", 3, "ngModelChange", "ngModel", "placeholder"], ["name", "subject", "required", "", 3, "ngModelChange", "ngModel", "placeholder"], ["name", "message", "required", "", 3, "ngModelChange", "ngModel", "placeholder"], ["type", "submit"], ["class", "ok", 4, "ngIf"], [1, "card", "emergency"], [1, "location"], [4, "ngIf"], [1, "ok"]], template: function ContactComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "article", 1)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p")(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " +995 000 000 000");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p")(14, "strong");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " contact@hospital.local");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "article", 1)(19, "h3");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 2);
    \u0275\u0275template(23, ContactComponent_article_23_Template, 11, 7, "article", 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "article", 1)(25, "h3");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "form", 4);
    \u0275\u0275listener("ngSubmit", function ContactComponent_Template_form_ngSubmit_28_listener() {
      return ctx.submit();
    });
    \u0275\u0275elementStart(29, "input", 5);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ContactComponent_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.name, $event) || (ctx.name = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 6);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ContactComponent_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 7);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ContactComponent_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.phone, $event) || (ctx.phone = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "input", 8);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ContactComponent_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.subject, $event) || (ctx.subject = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "textarea", 9);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ContactComponent_Template_textarea_ngModelChange_37_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.message, $event) || (ctx.message = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 10);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(42, ContactComponent_p_42_Template, 3, 3, "p", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "article", 12)(44, "h3");
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "p");
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 21, "CONTACT.TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 23, "CONTACT.INTRO"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(11, 25, "COMMON.PHONE"), ":");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(16, 27, "COMMON.EMAIL"), ":");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 29, "CONTACT.CLINIC_LOCATIONS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx.clinics);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 31, "CONTACT.FORM.TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.name);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(30, 33, "CONTACT.FORM.NAME"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx.email);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(32, 35, "CONTACT.FORM.EMAIL"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx.phone);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(34, 37, "CONTACT.FORM.PHONE"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx.subject);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(36, 39, "CONTACT.FORM.SUBJECT"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx.message);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(38, 41, "CONTACT.FORM.MESSAGE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 43, "CONTACT.FORM.SEND"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.submitted);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 45, "CONTACT.EMERGENCY.TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(49, 47, "CONTACT.EMERGENCY.TEXT"));
  }
}, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, TranslateModule, TranslatePipe], styles: ["\n\n.contact-page[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n.card[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  background: white;\n  padding: 12px;\n}\nh2[_ngcontent-%COMP%], \nh3[_ngcontent-%COMP%], \nh4[_ngcontent-%COMP%] {\n  margin: 0;\n}\np[_ngcontent-%COMP%] {\n  color: #475569;\n}\n.locations[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 10px;\n}\n.location[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 10px;\n}\n.contact-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 8px;\n}\ninput[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%] {\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  padding: 8px 10px;\n}\nbutton[_ngcontent-%COMP%] {\n  border: 1px solid #2563eb;\n  background: #2563eb;\n  color: white;\n  border-radius: 8px;\n  padding: 8px 12px;\n  font-weight: 600;\n  width: fit-content;\n}\n.ok[_ngcontent-%COMP%] {\n  color: #166534;\n}\n.emergency[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #b91c1c;\n}\n@media (max-width: 900px) {\n  .locations[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=contact.component.css.map */"] });
var ContactComponent = _ContactComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContactComponent, [{
    type: Component,
    args: [{ selector: "app-contact", standalone: true, imports: [CommonModule, FormsModule, TranslateModule], template: `
    <section class="contact-page">
      <article class="card">
        <h2>{{ 'CONTACT.TITLE' | translate }}</h2>
        <p>{{ 'CONTACT.INTRO' | translate }}</p>
        <p><strong>{{ 'COMMON.PHONE' | translate }}:</strong> +995 000 000 000</p>
        <p><strong>{{ 'COMMON.EMAIL' | translate }}:</strong> contact@hospital.local</p>
      </article>

      <article class="card">
        <h3>{{ 'CONTACT.CLINIC_LOCATIONS' | translate }}</h3>
        <div class="locations">
          <article *ngFor="let clinic of clinics" class="location">
            <h4>{{ clinic.Name }}</h4>
            <p>{{ clinic.Address || '-' }}</p>
            <p><strong>{{ 'COMMON.PHONE' | translate }}:</strong> {{ clinic.Phone || '-' }}</p>
            <p *ngIf="clinic.Email"><strong>{{ 'COMMON.EMAIL' | translate }}:</strong> {{ clinic.Email }}</p>
          </article>
        </div>
      </article>

      <article class="card">
        <h3>{{ 'CONTACT.FORM.TITLE' | translate }}</h3>
        <form (ngSubmit)="submit()" class="contact-form">
          <input name="name" [(ngModel)]="name" [placeholder]="'CONTACT.FORM.NAME' | translate" required />
          <input name="email" [(ngModel)]="email" type="email" [placeholder]="'CONTACT.FORM.EMAIL' | translate" required />
          <input name="phone" [(ngModel)]="phone" [placeholder]="'CONTACT.FORM.PHONE' | translate" required />
          <input name="subject" [(ngModel)]="subject" [placeholder]="'CONTACT.FORM.SUBJECT' | translate" required />
          <textarea name="message" [(ngModel)]="message" [placeholder]="'CONTACT.FORM.MESSAGE' | translate" required></textarea>
          <button type="submit">{{ 'CONTACT.FORM.SEND' | translate }}</button>
        </form>
        <p *ngIf="submitted" class="ok">{{ 'CONTACT.FORM.SENT' | translate }}</p>
      </article>

      <article class="card emergency">
        <h3>{{ 'CONTACT.EMERGENCY.TITLE' | translate }}</h3>
        <p>{{ 'CONTACT.EMERGENCY.TEXT' | translate }}</p>
      </article>
    </section>
  `, styles: ["/* angular:styles/component:scss;48911f60ace88afd4f924cb1148ab7ce1f6f53c0e5a3c2fb09b84a53d9d4cbab;D:/xampp/htdocs/clinic/src/app/modules/contact/components/contact.component.ts */\n.contact-page {\n  display: grid;\n  gap: 12px;\n}\n.card {\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  background: white;\n  padding: 12px;\n}\nh2,\nh3,\nh4 {\n  margin: 0;\n}\np {\n  color: #475569;\n}\n.locations {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 10px;\n}\n.location {\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 10px;\n}\n.contact-form {\n  display: grid;\n  gap: 8px;\n}\ninput,\ntextarea {\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  padding: 8px 10px;\n}\nbutton {\n  border: 1px solid #2563eb;\n  background: #2563eb;\n  color: white;\n  border-radius: 8px;\n  padding: 8px 12px;\n  font-weight: 600;\n  width: fit-content;\n}\n.ok {\n  color: #166534;\n}\n.emergency p {\n  color: #b91c1c;\n}\n@media (max-width: 900px) {\n  .locations {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=contact.component.css.map */\n"] }]
  }], () => [{ type: clinicsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactComponent, { className: "ContactComponent", filePath: "src/app/modules/contact/components/contact.component.ts", lineNumber: 127 });
})();
export {
  ContactComponent
};
//# sourceMappingURL=chunk-EON4NNFE.js.map
