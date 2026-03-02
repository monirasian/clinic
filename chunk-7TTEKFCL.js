import {
  DepartmentsService
} from "./chunk-PPEJOPBZ.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-YVJY77VO.js";
import {
  clinicsService
} from "./chunk-VDYAP6BO.js";
import "./chunk-KAR7HZ5G.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
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
  forkJoin,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-JCLQJVGK.js";

// src/app/modules/departments/components/departments.component.ts
var _c0 = (a0) => ["/services", a0];
function DepartmentsComponent_option_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r1 = ctx.$implicit;
    \u0275\u0275property("value", option_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r1.name);
  }
}
function DepartmentsComponent_p_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "COMMON.LOADING"));
  }
}
function DepartmentsComponent_p_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function DepartmentsComponent_section_20_article_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 15)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p")(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a", 16);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.Name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.Description || \u0275\u0275pipeBind1(5, 6, "SERVICES.DEFAULT_DESC"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(9, 8, "COMMON.CLINIC"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.clinicName(item_r3.clinicId));
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c0, ctx_r1.serviceSlug(item_r3)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 10, "COMMON.VIEW_DETAILS"));
  }
}
function DepartmentsComponent_section_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 13);
    \u0275\u0275template(1, DepartmentsComponent_section_20_article_1_Template, 14, 14, "article", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredServices);
  }
}
function DepartmentsComponent_p_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "SERVICES.NO_RESULTS"));
  }
}
var _DepartmentsComponent = class _DepartmentsComponent {
  constructor(departmentsService, clinicsService) {
    this.departmentsService = departmentsService;
    this.clinicsService = clinicsService;
    this.data = [];
    this.clinics = [];
    this.loading = false;
    this.error = null;
    this.search = "";
    this.clinicFilter = "all";
  }
  get clinicOptions() {
    return this.clinics.map((clinic) => ({ id: String(clinic.Id), name: clinic.Name || `clinic ${clinic.Id}` }));
  }
  get filteredServices() {
    const search = this.search.trim().toLowerCase();
    return this.data.filter((item) => {
      const matchesSearch = !search || (item.Name || "").toLowerCase().includes(search);
      const matchesclinic = this.clinicFilter === "all" || String(item.clinicId) === this.clinicFilter;
      return matchesSearch && matchesclinic;
    });
  }
  ngOnInit() {
    this.loading = true;
    forkJoin({
      services: this.departmentsService.getAll(),
      clinics: this.clinicsService.getAll()
    }).subscribe({
      next: ({ services, clinics }) => {
        this.data = services;
        this.clinics = clinics;
        this.loading = false;
      },
      error: () => {
        this.error = "SERVICES.ERROR.LOAD";
        this.loading = false;
      }
    });
  }
  serviceSlug(item) {
    return `${item.Id}-${(item.Name || "service").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;
  }
  clinicName(clinicId) {
    return this.clinics.find((clinic) => clinic.Id === clinicId)?.Name || `${"clinic"} ${clinicId}`;
  }
};
_DepartmentsComponent.\u0275fac = function DepartmentsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DepartmentsComponent)(\u0275\u0275directiveInject(DepartmentsService), \u0275\u0275directiveInject(clinicsService));
};
_DepartmentsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DepartmentsComponent, selectors: [["app-departments"]], decls: 22, vars: 25, consts: [[1, "services-page"], [1, "card"], [1, "card", "filters"], ["type", "text", 3, "ngModelChange", "ngModel", "placeholder"], [3, "ngModelChange", "ngModel"], ["value", "all"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "error", 4, "ngIf"], ["class", "grid", 4, "ngIf"], ["class", "empty", 4, "ngIf"], [3, "value"], [1, "error"], [1, "grid"], ["class", "card service", 4, "ngFor", "ngForOf"], [1, "card", "service"], [3, "routerLink"], [1, "empty"]], template: function DepartmentsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "header", 1)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "section", 2)(9, "input", 3);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function DepartmentsComponent_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 4);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function DepartmentsComponent_Template_select_ngModelChange_12_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.clinicFilter, $event) || (ctx.clinicFilter = $event);
      return $event;
    });
    \u0275\u0275elementStart(14, "option", 5);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, DepartmentsComponent_option_17_Template, 2, 2, "option", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, DepartmentsComponent_p_18_Template, 3, 3, "p", 7)(19, DepartmentsComponent_p_19_Template, 2, 1, "p", 8)(20, DepartmentsComponent_section_20_Template, 2, 1, "section", 9)(21, DepartmentsComponent_p_21_Template, 3, 3, "p", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 13, "SERVICES.TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 15, "SERVICES.SUBTITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.search);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(10, 17, "SERVICES.SEARCH_PLACEHOLDER"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(11, 19, "SERVICES.SEARCH_ARIA"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.clinicFilter);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(13, 21, "SERVICES.FILTER_CLINIC_ARIA"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 23, "SERVICES.ALL_CLINICS"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx.clinicOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.error);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading && !ctx.error);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading && !ctx.error && ctx.filteredServices.length === 0);
  }
}, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, RouterLink, TranslateModule, TranslatePipe], styles: ["\n\n.services-page[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n.card[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  background: white;\n  padding: 12px;\n}\n.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 6px 0;\n  color: #475569;\n}\n.filters[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  gap: 8px;\n}\ninput[_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%] {\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  padding: 8px 10px;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 10px;\n}\n.service[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1e40af;\n  text-decoration: none;\n  font-weight: 600;\n}\n.error[_ngcontent-%COMP%] {\n  color: #b91c1c;\n}\n.empty[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n}\n@media (max-width: 980px) {\n  .filters[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=departments.component.css.map */"] });
var DepartmentsComponent = _DepartmentsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DepartmentsComponent, [{
    type: Component,
    args: [{ selector: "app-departments", standalone: true, imports: [CommonModule, FormsModule, RouterModule, TranslateModule], template: `
    <section class="services-page">
      <header class="card">
        <h2>{{ 'SERVICES.TITLE' | translate }}</h2>
        <p>{{ 'SERVICES.SUBTITLE' | translate }}</p>
      </header>

      <section class="card filters">
        <input type="text" [(ngModel)]="search" [placeholder]="'SERVICES.SEARCH_PLACEHOLDER' | translate" [attr.aria-label]="'SERVICES.SEARCH_ARIA' | translate" />
        <select [(ngModel)]="clinicFilter" [attr.aria-label]="'SERVICES.FILTER_CLINIC_ARIA' | translate">
          <option value="all">{{ 'SERVICES.ALL_CLINICS' | translate }}</option>
          <option *ngFor="let option of clinicOptions" [value]="option.id">{{ option.name }}</option>
        </select>
      </section>

      <p *ngIf="loading">{{ 'COMMON.LOADING' | translate }}</p>
      <p *ngIf="error" class="error">{{ error }}</p>

      <section class="grid" *ngIf="!loading && !error">
        <article class="card service" *ngFor="let item of filteredServices">
          <h3>{{ item.Name }}</h3>
          <p>{{ item.Description || ('SERVICES.DEFAULT_DESC' | translate) }}</p>
          <p><strong>{{ 'COMMON.CLINIC' | translate }}:</strong> {{ clinicName(item.clinicId) }}</p>
          <a [routerLink]="['/services', serviceSlug(item)]">{{ 'COMMON.VIEW_DETAILS' | translate }}</a>
        </article>
      </section>

      <p *ngIf="!loading && !error && filteredServices.length === 0" class="empty">{{ 'SERVICES.NO_RESULTS' | translate }}</p>
    </section>
  `, styles: ["/* angular:styles/component:scss;0ab5f72e7b6dc6f3119a8fc8fe0b4ac2e81cff7748f408d1e7b030db303b2e14;D:/xampp/htdocs/clinic/src/app/modules/departments/components/departments.component.ts */\n.services-page {\n  display: grid;\n  gap: 12px;\n}\n.card {\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  background: white;\n  padding: 12px;\n}\n.card h2,\n.card h3 {\n  margin: 0;\n}\n.card p {\n  margin: 6px 0;\n  color: #475569;\n}\n.filters {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  gap: 8px;\n}\ninput,\nselect {\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  padding: 8px 10px;\n}\n.grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 10px;\n}\n.service a {\n  color: #1e40af;\n  text-decoration: none;\n  font-weight: 600;\n}\n.error {\n  color: #b91c1c;\n}\n.empty {\n  margin: 0;\n  color: #64748b;\n}\n@media (max-width: 980px) {\n  .filters {\n    grid-template-columns: 1fr;\n  }\n  .grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=departments.component.css.map */\n"] }]
  }], () => [{ type: DepartmentsService }, { type: clinicsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DepartmentsComponent, { className: "DepartmentsComponent", filePath: "src/app/modules/departments/components/departments.component.ts", lineNumber: 117 });
})();
export {
  DepartmentsComponent
};
//# sourceMappingURL=chunk-7TTEKFCL.js.map
