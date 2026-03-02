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
import {
  API_BASE_URL
} from "./chunk-KAR7HZ5G.js";
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
import {
  HttpClient
} from "./chunk-C4HPYBEJ.js";
import {
  CommonModule,
  Component,
  Inject,
  Injectable,
  NgForOf,
  NgIf,
  catchError,
  forkJoin,
  map,
  of,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
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

// src/app/modules/schedules/schedules.service.ts
var _SchedulesService = class _SchedulesService {
  constructor(http, apiBaseUrl) {
    this.http = http;
    this.apiBaseUrl = apiBaseUrl;
  }
  getAll() {
    return this.http.get(`${this.apiBaseUrl}/schedules`).pipe(map((payload) => this.extractArray(payload)), map((items) => items.map((item, index) => this.toSchedule(item, index))));
  }
  extractArray(payload) {
    if (Array.isArray(payload)) {
      return payload;
    }
    if (!payload || typeof payload !== "object") {
      return [];
    }
    const record = payload;
    for (const key of ["data", "items", "results", "rows", "$values"]) {
      if (Array.isArray(record[key])) {
        return record[key];
      }
    }
    return [];
  }
  toSchedule(item, index) {
    return {
      Id: this.toNumber(item["Id"] ?? item["id"]) || index + 1,
      DoctorId: this.toNumber(item["DoctorId"] ?? item["doctorId"]) || 0,
      DayOfWeek: this.pick(item, ["DayOfWeek", "dayOfWeek"]) || "-",
      StartTime: this.pick(item, ["StartTime", "startTime"]),
      EndTime: this.pick(item, ["EndTime", "endTime"])
    };
  }
  pick(item, keys) {
    for (const key of keys) {
      const value = item[key];
      if (typeof value === "string" && value.trim().length > 0) {
        return value;
      }
    }
    return "";
  }
  toNumber(value) {
    if (typeof value === "number" && Number.isFinite(value)) {
      return value;
    }
    if (typeof value === "string" && value.trim().length > 0) {
      const parsed = Number(value);
      if (Number.isFinite(parsed)) {
        return parsed;
      }
    }
    return null;
  }
};
_SchedulesService.\u0275fac = function SchedulesService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SchedulesService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(API_BASE_URL));
};
_SchedulesService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SchedulesService, factory: _SchedulesService.\u0275fac, providedIn: "root" });
var SchedulesService = _SchedulesService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SchedulesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: void 0, decorators: [{
    type: Inject,
    args: [API_BASE_URL]
  }] }], null);
})();

// src/app/modules/doctors/components/doctor-profile.component.ts
function DoctorProfileComponent_p_5_Template(rf, ctx) {
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
function DoctorProfileComponent_p_6_Template(rf, ctx) {
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
function DoctorProfileComponent_ng_container_7_p_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "COMMON.EMAIL"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.doctor.Email);
  }
}
function DoctorProfileComponent_ng_container_7_table_24_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.DayOfWeek);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.StartTime || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.EndTime || "-");
  }
}
function DoctorProfileComponent_ng_container_7_table_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table")(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275template(13, DoctorProfileComponent_ng_container_7_table_24_tr_13_Template, 7, 3, "tr", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, "COMMON.DAY"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 6, "COMMON.START"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 8, "COMMON.END"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.doctorSchedules);
  }
}
function DoctorProfileComponent_ng_container_7_p_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "DOCTOR_PROFILE.NO_SCHEDULE"));
  }
}
function DoctorProfileComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "article", 6)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p")(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, DoctorProfileComponent_ng_container_7_p_12_Template, 5, 4, "p", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "article", 6)(14, "h3");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "article", 6)(21, "h3");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, DoctorProfileComponent_ng_container_7_table_24_Template, 14, 10, "table", 3)(25, DoctorProfileComponent_ng_container_7_p_25_Template, 3, 3, "p", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "article", 7)(27, "h3");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p");
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "a", 8);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.doctor.FullName || "Doctor #" + ctx_r0.doctor.Id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.doctor.Specialty || \u0275\u0275pipeBind1(6, 13, "COMMON.SPECIALIST"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(10, 15, "COMMON.DEPARTMENT"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.departmentName(ctx_r0.doctor.DepartmentId));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.doctor.Email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 17, "DOCTOR_PROFILE.ABOUT_TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 19, "DOCTOR_PROFILE.ABOUT_TEXT"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 21, "DOCTOR_PROFILE.AVAILABILITY_TITLE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.doctorSchedules.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.doctorSchedules.length === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 23, "DOCTOR_PROFILE.CTA_TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 25, "DOCTOR_PROFILE.CTA_TEXT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 27, "DOCTOR_PROFILE.CTA_LINK"));
  }
}
var _DoctorProfileComponent = class _DoctorProfileComponent {
  constructor(route, doctorsService, schedulesService, departmentsService) {
    this.route = route;
    this.doctorsService = doctorsService;
    this.schedulesService = schedulesService;
    this.departmentsService = departmentsService;
    this.doctor = null;
    this.doctorSchedules = [];
    this.departments = [];
    this.loading = false;
    this.error = null;
  }
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    if (!id) {
      this.error = "DOCTOR_PROFILE.ERROR.NOT_FOUND";
      return;
    }
    this.loading = true;
    forkJoin({
      doctors: this.doctorsService.getAll(),
      schedules: this.schedulesService.getAll().pipe(catchError(() => of([]))),
      departments: this.departmentsService.getAll().pipe(catchError(() => of([])))
    }).subscribe({
      next: ({ doctors, schedules, departments }) => {
        this.doctor = doctors.find((item) => item.Id === id) || null;
        if (!this.doctor) {
          this.error = "DOCTOR_PROFILE.ERROR.NOT_FOUND";
          this.loading = false;
          return;
        }
        this.departments = departments;
        this.doctorSchedules = schedules.filter((item) => item.DoctorId === this.doctor.Id);
        this.loading = false;
      },
      error: () => {
        this.error = "DOCTOR_PROFILE.ERROR.LOAD";
        this.loading = false;
      }
    });
  }
  departmentName(departmentId) {
    if (!departmentId) {
      return "-";
    }
    return this.departments.find((item) => item.Id === departmentId)?.Name || `Department ${departmentId}`;
  }
};
_DoctorProfileComponent.\u0275fac = function DoctorProfileComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DoctorProfileComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(DoctorsService), \u0275\u0275directiveInject(SchedulesService), \u0275\u0275directiveInject(DepartmentsService));
};
_DoctorProfileComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DoctorProfileComponent, selectors: [["app-doctor-profile"]], decls: 8, vars: 6, consts: [[1, "doctor-profile"], [1, "back"], ["routerLink", "/doctors"], [4, "ngIf"], ["class", "error", 4, "ngIf"], [1, "error"], [1, "card"], [1, "card", "cta"], ["routerLink", "/contact"], [4, "ngFor", "ngForOf"]], template: function DoctorProfileComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "p", 1)(2, "a", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, DoctorProfileComponent_p_5_Template, 3, 3, "p", 3)(6, DoctorProfileComponent_p_6_Template, 3, 3, "p", 4)(7, DoctorProfileComponent_ng_container_7_Template, 36, 29, "ng-container", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "DOCTOR_PROFILE.BACK"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.error);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading && !ctx.error && ctx.doctor);
  }
}, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, TranslateModule, TranslatePipe], styles: ["\n\n.doctor-profile[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n.back[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.back[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.cta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1e40af;\n  text-decoration: none;\n  font-weight: 600;\n}\n.card[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  background: white;\n  padding: 12px;\n}\nh2[_ngcontent-%COMP%], \nh3[_ngcontent-%COMP%] {\n  margin: 0;\n}\np[_ngcontent-%COMP%] {\n  margin: 6px 0;\n  color: #475569;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\nth[_ngcontent-%COMP%], \ntd[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e2e8f0;\n  padding: 8px;\n  text-align: left;\n}\n.error[_ngcontent-%COMP%] {\n  color: #b91c1c;\n}\n/*# sourceMappingURL=doctor-profile.component.css.map */"] });
var DoctorProfileComponent = _DoctorProfileComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DoctorProfileComponent, [{
    type: Component,
    args: [{ selector: "app-doctor-profile", standalone: true, imports: [CommonModule, RouterModule, TranslateModule], template: `
    <section class="doctor-profile">
      <p class="back"><a routerLink="/doctors">{{ 'DOCTOR_PROFILE.BACK' | translate }}</a></p>
      <p *ngIf="loading">{{ 'COMMON.LOADING' | translate }}</p>
      <p *ngIf="error" class="error">{{ error | translate }}</p>

      <ng-container *ngIf="!loading && !error && doctor">
        <article class="card">
          <h2>{{ doctor.FullName || ('Doctor #' + doctor.Id) }}</h2>
          <p>{{ doctor.Specialty || ('COMMON.SPECIALIST' | translate) }}</p>
          <p><strong>{{ 'COMMON.DEPARTMENT' | translate }}:</strong> {{ departmentName(doctor.DepartmentId) }}</p>
          <p *ngIf="doctor.Email"><strong>{{ 'COMMON.EMAIL' | translate }}:</strong> {{ doctor.Email }}</p>
        </article>

        <article class="card">
          <h3>{{ 'DOCTOR_PROFILE.ABOUT_TITLE' | translate }}</h3>
          <p>{{ 'DOCTOR_PROFILE.ABOUT_TEXT' | translate }}</p>
        </article>

        <article class="card">
          <h3>{{ 'DOCTOR_PROFILE.AVAILABILITY_TITLE' | translate }}</h3>
          <table *ngIf="doctorSchedules.length > 0">
            <thead>
              <tr>
                <th>{{ 'COMMON.DAY' | translate }}</th>
                <th>{{ 'COMMON.START' | translate }}</th>
                <th>{{ 'COMMON.END' | translate }}</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let item of doctorSchedules">
                <td>{{ item.DayOfWeek }}</td>
                <td>{{ item.StartTime || '-' }}</td>
                <td>{{ item.EndTime || '-' }}</td>
              </tr>
            </tbody>
          </table>
          <p *ngIf="doctorSchedules.length === 0">{{ 'DOCTOR_PROFILE.NO_SCHEDULE' | translate }}</p>
        </article>

        <article class="card cta">
          <h3>{{ 'DOCTOR_PROFILE.CTA_TITLE' | translate }}</h3>
          <p>{{ 'DOCTOR_PROFILE.CTA_TEXT' | translate }}</p>
          <a routerLink="/contact">{{ 'DOCTOR_PROFILE.CTA_LINK' | translate }}</a>
        </article>
      </ng-container>
    </section>
  `, styles: ["/* angular:styles/component:scss;167dbde094671e5cc166206ac8cb0afed5ed9e215980e5d202344f1606f7ce7a;D:/xampp/htdocs/clinic/src/app/modules/doctors/components/doctor-profile.component.ts */\n.doctor-profile {\n  display: grid;\n  gap: 12px;\n}\n.back {\n  margin: 0;\n}\n.back a,\n.cta a {\n  color: #1e40af;\n  text-decoration: none;\n  font-weight: 600;\n}\n.card {\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  background: white;\n  padding: 12px;\n}\nh2,\nh3 {\n  margin: 0;\n}\np {\n  margin: 6px 0;\n  color: #475569;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\nth,\ntd {\n  border-bottom: 1px solid #e2e8f0;\n  padding: 8px;\n  text-align: left;\n}\n.error {\n  color: #b91c1c;\n}\n/*# sourceMappingURL=doctor-profile.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: DoctorsService }, { type: SchedulesService }, { type: DepartmentsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DoctorProfileComponent, { className: "DoctorProfileComponent", filePath: "src/app/modules/doctors/components/doctor-profile.component.ts", lineNumber: 119 });
})();

// src/app/modules/doctors/components/doctors.component.ts
var _c0 = (a0) => ["/doctors", a0];
function DoctorsComponent_option_17_Template(rf, ctx) {
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
function DoctorsComponent_p_18_Template(rf, ctx) {
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
function DoctorsComponent_p_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r1.error));
  }
}
function DoctorsComponent_section_20_article_1_p_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "COMMON.EMAIL"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r3.Email);
  }
}
function DoctorsComponent_section_20_article_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 15)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p")(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, DoctorsComponent_section_20_article_1_p_14_Template, 5, 4, "p", 7);
    \u0275\u0275elementStart(15, "a", 16);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.FullName || "Doctor #" + item_r3.Id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(6, 8, "COMMON.SPECIALIZATION"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r3.Specialty || \u0275\u0275pipeBind1(8, 10, "HOME.GENERAL"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(12, 12, "COMMON.DEPARTMENT"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.departmentName(item_r3.DepartmentId));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r3.Email);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(16, _c0, item_r3.Id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 14, "COMMON.VIEW_PROFILE"));
  }
}
function DoctorsComponent_section_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 13);
    \u0275\u0275template(1, DoctorsComponent_section_20_article_1_Template, 18, 18, "article", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredDoctors);
  }
}
function DoctorsComponent_p_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "DOCTORS.NO_RESULTS"));
  }
}
var _DoctorsComponent = class _DoctorsComponent {
  constructor(doctorsService, departmentsService) {
    this.doctorsService = doctorsService;
    this.departmentsService = departmentsService;
    this.data = [];
    this.departments = [];
    this.loading = false;
    this.error = null;
    this.search = "";
    this.departmentFilter = "all";
  }
  get departmentOptions() {
    return this.departments.map((item) => ({ id: String(item.Id), name: item.Name || `Department ${item.Id}` }));
  }
  get filteredDoctors() {
    const search = this.search.trim().toLowerCase();
    return this.data.filter((doctor) => {
      const matchesSearch = !search || (doctor.FullName || "").toLowerCase().includes(search) || (doctor.Specialty || "").toLowerCase().includes(search);
      const matchesDepartment = this.departmentFilter === "all" || String(doctor.DepartmentId) === this.departmentFilter;
      return matchesSearch && matchesDepartment;
    });
  }
  ngOnInit() {
    this.loading = true;
    forkJoin({
      doctors: this.doctorsService.getAll(),
      departments: this.departmentsService.getAll()
    }).subscribe({
      next: ({ doctors, departments }) => {
        this.data = doctors;
        this.departments = departments;
        this.loading = false;
      },
      error: () => {
        this.error = "DOCTORS.ERROR.LOAD";
        this.loading = false;
      }
    });
  }
  departmentName(departmentId) {
    if (!departmentId) {
      return "-";
    }
    return this.departments.find((item) => item.Id === departmentId)?.Name || `Department ${departmentId}`;
  }
};
_DoctorsComponent.\u0275fac = function DoctorsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DoctorsComponent)(\u0275\u0275directiveInject(DoctorsService), \u0275\u0275directiveInject(DepartmentsService));
};
_DoctorsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DoctorsComponent, selectors: [["app-doctors"]], decls: 22, vars: 25, consts: [[1, "doctors-page"], [1, "card"], [1, "card", "filters"], ["type", "text", 3, "ngModelChange", "ngModel", "placeholder"], [3, "ngModelChange", "ngModel"], ["value", "all"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "error", 4, "ngIf"], ["class", "grid", 4, "ngIf"], ["class", "empty", 4, "ngIf"], [3, "value"], [1, "error"], [1, "grid"], ["class", "card doctor", 4, "ngFor", "ngForOf"], [1, "card", "doctor"], [3, "routerLink"], [1, "empty"]], template: function DoctorsComponent_Template(rf, ctx) {
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
    \u0275\u0275twoWayListener("ngModelChange", function DoctorsComponent_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 4);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function DoctorsComponent_Template_select_ngModelChange_12_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.departmentFilter, $event) || (ctx.departmentFilter = $event);
      return $event;
    });
    \u0275\u0275elementStart(14, "option", 5);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, DoctorsComponent_option_17_Template, 2, 2, "option", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, DoctorsComponent_p_18_Template, 3, 3, "p", 7)(19, DoctorsComponent_p_19_Template, 3, 3, "p", 8)(20, DoctorsComponent_section_20_Template, 2, 1, "section", 9)(21, DoctorsComponent_p_21_Template, 3, 3, "p", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 13, "DOCTORS.TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 15, "DOCTORS.SUBTITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.search);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(10, 17, "DOCTORS.SEARCH_PLACEHOLDER"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(11, 19, "DOCTORS.SEARCH_ARIA"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.departmentFilter);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(13, 21, "DOCTORS.FILTER_DEPARTMENT_ARIA"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 23, "DOCTORS.ALL_DEPARTMENTS"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx.departmentOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.error);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading && !ctx.error);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading && !ctx.error && ctx.filteredDoctors.length === 0);
  }
}, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, RouterLink, TranslateModule, TranslatePipe], styles: ["\n\n.doctors-page[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n.card[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  background: white;\n  padding: 12px;\n}\n.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 6px 0;\n  color: #475569;\n}\n.filters[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr;\n  gap: 8px;\n}\ninput[_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%] {\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  padding: 8px 10px;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 10px;\n}\n.doctor[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1e40af;\n  text-decoration: none;\n  font-weight: 600;\n}\n.error[_ngcontent-%COMP%] {\n  color: #b91c1c;\n}\n.empty[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n}\n@media (max-width: 980px) {\n  .filters[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=doctors.component.css.map */"] });
var DoctorsComponent = _DoctorsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DoctorsComponent, [{
    type: Component,
    args: [{ selector: "app-doctors", standalone: true, imports: [CommonModule, FormsModule, RouterModule, TranslateModule], template: `
    <section class="doctors-page">
      <header class="card">
        <h2>{{ 'DOCTORS.TITLE' | translate }}</h2>
        <p>{{ 'DOCTORS.SUBTITLE' | translate }}</p>
      </header>

      <section class="card filters">
        <input type="text" [(ngModel)]="search" [placeholder]="'DOCTORS.SEARCH_PLACEHOLDER' | translate" [attr.aria-label]="'DOCTORS.SEARCH_ARIA' | translate" />
        <select [(ngModel)]="departmentFilter" [attr.aria-label]="'DOCTORS.FILTER_DEPARTMENT_ARIA' | translate">
          <option value="all">{{ 'DOCTORS.ALL_DEPARTMENTS' | translate }}</option>
          <option *ngFor="let option of departmentOptions" [value]="option.id">{{ option.name }}</option>
        </select>
      </section>

      <p *ngIf="loading">{{ 'COMMON.LOADING' | translate }}</p>
      <p *ngIf="error" class="error">{{ error | translate }}</p>

      <section class="grid" *ngIf="!loading && !error">
        <article class="card doctor" *ngFor="let item of filteredDoctors">
          <h3>{{ item.FullName || ('Doctor #' + item.Id) }}</h3>
          <p><strong>{{ 'COMMON.SPECIALIZATION' | translate }}:</strong> {{ item.Specialty || ('HOME.GENERAL' | translate) }}</p>
          <p><strong>{{ 'COMMON.DEPARTMENT' | translate }}:</strong> {{ departmentName(item.DepartmentId) }}</p>
          <p *ngIf="item.Email"><strong>{{ 'COMMON.EMAIL' | translate }}:</strong> {{ item.Email }}</p>
          <a [routerLink]="['/doctors', item.Id]">{{ 'COMMON.VIEW_PROFILE' | translate }}</a>
        </article>
      </section>

      <p *ngIf="!loading && !error && filteredDoctors.length === 0" class="empty">{{ 'DOCTORS.NO_RESULTS' | translate }}</p>
    </section>
  `, styles: ["/* angular:styles/component:scss;67bd6d2b99b0e2e40341a782f4ad9de70984a579a1b7404d3f8332a72ebbabf0;D:/xampp/htdocs/clinic/src/app/modules/doctors/components/doctors.component.ts */\n.doctors-page {\n  display: grid;\n  gap: 12px;\n}\n.card {\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  background: white;\n  padding: 12px;\n}\n.card h2,\n.card h3 {\n  margin: 0;\n}\n.card p {\n  margin: 6px 0;\n  color: #475569;\n}\n.filters {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr;\n  gap: 8px;\n}\ninput,\nselect {\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  padding: 8px 10px;\n}\n.grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 10px;\n}\n.doctor a {\n  color: #1e40af;\n  text-decoration: none;\n  font-weight: 600;\n}\n.error {\n  color: #b91c1c;\n}\n.empty {\n  margin: 0;\n  color: #64748b;\n}\n@media (max-width: 980px) {\n  .filters {\n    grid-template-columns: 1fr;\n  }\n  .grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=doctors.component.css.map */\n"] }]
  }], () => [{ type: DoctorsService }, { type: DepartmentsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DoctorsComponent, { className: "DoctorsComponent", filePath: "src/app/modules/doctors/components/doctors.component.ts", lineNumber: 118 });
})();
export {
  DoctorProfileComponent,
  DoctorsComponent
};
//# sourceMappingURL=chunk-2SLYESFF.js.map
