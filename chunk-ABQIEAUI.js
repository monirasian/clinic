import {
  DoctorsService
} from "./chunk-Y4Q25INA.js";
import {
  DepartmentsService
} from "./chunk-PPEJOPBZ.js";
import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-YVJY77VO.js";
import "./chunk-KAR7HZ5G.js";
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
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-JCLQJVGK.js";

// src/app/modules/departments/components/service-detail.component.ts
var _c0 = (a0) => ["/doctors", a0];
function ServiceDetailComponent_p_5_Template(rf, ctx) {
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
function ServiceDetailComponent_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r0.error));
  }
}
function ServiceDetailComponent_ng_container_7_p_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "SERVICE_DETAIL.SPECIALISTS.NONE"));
  }
}
function ServiceDetailComponent_ng_container_7_article_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 11)(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 12);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const doctor_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(doctor_r2.FullName || "Doctor #" + doctor_r2.Id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(doctor_r2.Specialty || \u0275\u0275pipeBind1(5, 4, "COMMON.SPECIALIST"));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c0, doctor_r2.Id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 6, "COMMON.VIEW_PROFILE"));
  }
}
function ServiceDetailComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "article", 6)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "article", 6)(8, "h3");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "ul")(12, "li");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "li");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "li");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "article", 6)(22, "h3");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "ul")(26, "li");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "li");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "li");
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "article", 6)(36, "h3");
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 7);
    \u0275\u0275template(40, ServiceDetailComponent_ng_container_7_p_40_Template, 3, 3, "p", 3)(41, ServiceDetailComponent_ng_container_7_article_41_Template, 9, 10, "article", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "article", 9)(43, "h3");
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "p");
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "a", 10);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.service.Name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.service.Description || \u0275\u0275pipeBind1(6, 16, "SERVICE_DETAIL.DEFAULT_DESC"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 18, "SERVICE_DETAIL.CONDITIONS.TITLE"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 20, "SERVICE_DETAIL.CONDITIONS.ITEM_1"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 22, "SERVICE_DETAIL.CONDITIONS.ITEM_2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 24, "SERVICE_DETAIL.CONDITIONS.ITEM_3"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 26, "SERVICE_DETAIL.PROCEDURES.TITLE"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 28, "SERVICE_DETAIL.PROCEDURES.ITEM_1"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 30, "SERVICE_DETAIL.PROCEDURES.ITEM_2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 32, "SERVICE_DETAIL.PROCEDURES.ITEM_3"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 34, "SERVICE_DETAIL.SPECIALISTS.TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.specialists.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.specialists);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 36, "SERVICE_DETAIL.CTA.TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(48, 38, "SERVICE_DETAIL.CTA.TEXT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(51, 40, "SERVICE_DETAIL.CTA.LINK"));
  }
}
var _ServiceDetailComponent = class _ServiceDetailComponent {
  constructor(route, departmentsService, doctorsService) {
    this.route = route;
    this.departmentsService = departmentsService;
    this.doctorsService = doctorsService;
    this.service = null;
    this.specialists = [];
    this.loading = false;
    this.error = null;
  }
  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get("slug") || "";
    const id = Number(slug.split("-")[0]);
    if (!id) {
      this.error = "SERVICE_DETAIL.ERROR.NOT_FOUND";
      return;
    }
    this.loading = true;
    forkJoin({
      services: this.departmentsService.getAll(),
      doctors: this.doctorsService.getAll()
    }).subscribe({
      next: ({ services, doctors }) => {
        this.service = services.find((item) => item.Id === id) || null;
        if (!this.service) {
          this.error = "SERVICE_DETAIL.ERROR.NOT_FOUND";
          this.loading = false;
          return;
        }
        this.specialists = doctors.filter((doctor) => doctor.DepartmentId === this.service.Id);
        this.loading = false;
      },
      error: () => {
        this.error = "SERVICE_DETAIL.ERROR.LOAD";
        this.loading = false;
      }
    });
  }
};
_ServiceDetailComponent.\u0275fac = function ServiceDetailComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ServiceDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(DepartmentsService), \u0275\u0275directiveInject(DoctorsService));
};
_ServiceDetailComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServiceDetailComponent, selectors: [["app-service-detail"]], decls: 8, vars: 6, consts: [[1, "service-detail"], [1, "back"], ["routerLink", "/services"], [4, "ngIf"], ["class", "error", 4, "ngIf"], [1, "error"], [1, "card"], [1, "specialists"], ["class", "doctor", 4, "ngFor", "ngForOf"], [1, "card", "cta"], ["routerLink", "/contact"], [1, "doctor"], [3, "routerLink"]], template: function ServiceDetailComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "p", 1)(2, "a", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, ServiceDetailComponent_p_5_Template, 3, 3, "p", 3)(6, ServiceDetailComponent_p_6_Template, 3, 3, "p", 4)(7, ServiceDetailComponent_ng_container_7_Template, 52, 42, "ng-container", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "SERVICE_DETAIL.BACK"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.error);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading && !ctx.error && ctx.service);
  }
}, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, TranslateModule, TranslatePipe], styles: ["\n\n.service-detail[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n.back[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.back[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.doctor[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.cta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1e40af;\n  text-decoration: none;\n  font-weight: 600;\n}\n.card[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  background: white;\n  padding: 12px;\n}\nh2[_ngcontent-%COMP%], \nh3[_ngcontent-%COMP%], \nh4[_ngcontent-%COMP%] {\n  margin: 0;\n}\np[_ngcontent-%COMP%], \nli[_ngcontent-%COMP%] {\n  color: #475569;\n}\n.specialists[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 8px;\n}\n.doctor[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 10px;\n}\n.error[_ngcontent-%COMP%] {\n  color: #b91c1c;\n}\n/*# sourceMappingURL=service-detail.component.css.map */"] });
var ServiceDetailComponent = _ServiceDetailComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServiceDetailComponent, [{
    type: Component,
    args: [{ selector: "app-service-detail", standalone: true, imports: [CommonModule, RouterModule, TranslateModule], template: `
    <section class="service-detail">
      <p class="back"><a routerLink="/services">{{ 'SERVICE_DETAIL.BACK' | translate }}</a></p>
      <p *ngIf="loading">{{ 'COMMON.LOADING' | translate }}</p>
      <p *ngIf="error" class="error">{{ error | translate }}</p>

      <ng-container *ngIf="!loading && !error && service">
        <article class="card">
          <h2>{{ service.Name }}</h2>
          <p>{{ service.Description || ('SERVICE_DETAIL.DEFAULT_DESC' | translate) }}</p>
        </article>

        <article class="card">
          <h3>{{ 'SERVICE_DETAIL.CONDITIONS.TITLE' | translate }}</h3>
          <ul>
            <li>{{ 'SERVICE_DETAIL.CONDITIONS.ITEM_1' | translate }}</li>
            <li>{{ 'SERVICE_DETAIL.CONDITIONS.ITEM_2' | translate }}</li>
            <li>{{ 'SERVICE_DETAIL.CONDITIONS.ITEM_3' | translate }}</li>
          </ul>
        </article>

        <article class="card">
          <h3>{{ 'SERVICE_DETAIL.PROCEDURES.TITLE' | translate }}</h3>
          <ul>
            <li>{{ 'SERVICE_DETAIL.PROCEDURES.ITEM_1' | translate }}</li>
            <li>{{ 'SERVICE_DETAIL.PROCEDURES.ITEM_2' | translate }}</li>
            <li>{{ 'SERVICE_DETAIL.PROCEDURES.ITEM_3' | translate }}</li>
          </ul>
        </article>

        <article class="card">
          <h3>{{ 'SERVICE_DETAIL.SPECIALISTS.TITLE' | translate }}</h3>
          <div class="specialists">
            <p *ngIf="specialists.length === 0">{{ 'SERVICE_DETAIL.SPECIALISTS.NONE' | translate }}</p>
            <article *ngFor="let doctor of specialists" class="doctor">
              <h4>{{ doctor.FullName || ('Doctor #' + doctor.Id) }}</h4>
              <p>{{ doctor.Specialty || ('COMMON.SPECIALIST' | translate) }}</p>
              <a [routerLink]="['/doctors', doctor.Id]">{{ 'COMMON.VIEW_PROFILE' | translate }}</a>
            </article>
          </div>
        </article>

        <article class="card cta">
          <h3>{{ 'SERVICE_DETAIL.CTA.TITLE' | translate }}</h3>
          <p>{{ 'SERVICE_DETAIL.CTA.TEXT' | translate }}</p>
          <a routerLink="/contact">{{ 'SERVICE_DETAIL.CTA.LINK' | translate }}</a>
        </article>
      </ng-container>
    </section>
  `, styles: ["/* angular:styles/component:scss;c03a0d8a5d5bfae864a67e07809363b231c8acb2f2bb98c8b199bb8e31c38512;D:/xampp/htdocs/clinic/src/app/modules/departments/components/service-detail.component.ts */\n.service-detail {\n  display: grid;\n  gap: 12px;\n}\n.back {\n  margin: 0;\n}\n.back a,\n.doctor a,\n.cta a {\n  color: #1e40af;\n  text-decoration: none;\n  font-weight: 600;\n}\n.card {\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  background: white;\n  padding: 12px;\n}\nh2,\nh3,\nh4 {\n  margin: 0;\n}\np,\nli {\n  color: #475569;\n}\n.specialists {\n  display: grid;\n  gap: 8px;\n}\n.doctor {\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 10px;\n}\n.error {\n  color: #b91c1c;\n}\n/*# sourceMappingURL=service-detail.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: DepartmentsService }, { type: DoctorsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServiceDetailComponent, { className: "ServiceDetailComponent", filePath: "src/app/modules/departments/components/service-detail.component.ts", lineNumber: 120 });
})();
export {
  ServiceDetailComponent
};
//# sourceMappingURL=chunk-ABQIEAUI.js.map
