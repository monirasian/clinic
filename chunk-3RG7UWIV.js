import {
  DoctorsService
} from "./chunk-Y4Q25INA.js";
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
  NgModel
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
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-JCLQJVGK.js";

// src/app/dashboad/dashboad.component.ts
var _c0 = (a0) => ["/services", a0];
var _c1 = (a0) => ["/doctors", a0];
function DashboadComponent_p_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "COMMON.LOADING"));
  }
}
function DashboadComponent_p_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
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
function DashboadComponent_section_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 13)(1, "article", 14)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "article", 14)(8, "h3");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "article", 14)(14, "h3");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "article", 14)(20, "h3");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 8, "HOME.STATS.DEPARTMENTS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.services.length);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 10, "HOME.STATS.DOCTORS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.doctors.length);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 12, "HOME.STATS.CLINICS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.clinics.length);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 14, "HOME.STATS.YEARS_OF_SERVICE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.yearsOfService);
  }
}
function DashboadComponent_section_21_article_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 18)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 19);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const service_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r2.Name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r2.Description || \u0275\u0275pipeBind1(5, 4, "HOME.FEATURED_SERVICES.DEFAULT_DESC"));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c0, ctx_r0.serviceSlug(service_r2)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 6, "COMMON.LEARN_MORE"));
  }
}
function DashboadComponent_section_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 14)(1, "header", 15)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 3);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 16);
    \u0275\u0275template(9, DashboadComponent_section_21_article_9_Template, 9, 10, "article", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "HOME.FEATURED_SERVICES.TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, "COMMON.SEE_ALL"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.featuredServices);
  }
}
function DashboadComponent_section_22_article_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 18)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 19);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const doctor_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.doctorDisplayName(doctor_r4));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", doctor_r4.Specialty || \u0275\u0275pipeBind1(5, 5, "COMMON.SPECIALIST"), " \xB7 ", \u0275\u0275pipeBind1(6, 7, ctx_r0.departmentName(doctor_r4.DepartmentId)));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c1, doctor_r4.Id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 9, "COMMON.VIEW_PROFILE"));
  }
}
function DashboadComponent_section_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 14)(1, "header", 15)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 20);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "input", 21);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function DashboadComponent_section_22_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.doctorSearch, $event) || (ctx_r0.doctorSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 22);
    \u0275\u0275template(11, DashboadComponent_section_22_article_11_Template, 10, 13, "article", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, "HOME.FIND_DOCTOR.TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 7, "HOME.FIND_DOCTOR.VIEW_ALL"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.doctorSearch);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 9, "HOME.FIND_DOCTOR.SEARCH_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.featuredDoctors);
  }
}
function DashboadComponent_section_23_article_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 18)(1, "h3");
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
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const clinic_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(clinic_r5.Name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(clinic_r5.Address || \u0275\u0275pipeBind1(5, 4, "HOME.LOCATIONS.ADDRESS_FALLBACK"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(9, 6, "COMMON.PHONE"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", clinic_r5.Phone || "-");
  }
}
function DashboadComponent_section_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 14)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 23);
    \u0275\u0275template(5, DashboadComponent_section_23_article_5_Template, 11, 8, "article", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "HOME.LOCATIONS.TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.clinics);
  }
}
function DashboadComponent_section_24_article_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 18)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, item_r6));
  }
}
function DashboadComponent_section_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 14)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 24);
    \u0275\u0275template(5, DashboadComponent_section_24_article_5_Template, 4, 3, "article", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "HOME.WHY.TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.whyChooseUs);
  }
}
function DashboadComponent_section_25_article_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 18)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const testimonial_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, testimonial_r7));
  }
}
function DashboadComponent_section_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 14)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 24);
    \u0275\u0275template(5, DashboadComponent_section_25_article_5_Template, 4, 3, "article", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "HOME.TESTIMONIALS.TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.testimonials);
  }
}
function DashboadComponent_section_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 25)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 2)(8, "a", 26);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a", 5);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "HOME.CTA.TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, "HOME.CTA.SUBTITLE"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 8, "HOME.CTA.CONTACT_US"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 10, "HOME.CTA.REQUEST_CALLBACK"));
  }
}
var _DashboadComponent = class _DashboadComponent {
  constructor(clinicsService, departmentsService, doctorsService) {
    this.clinicsService = clinicsService;
    this.departmentsService = departmentsService;
    this.doctorsService = doctorsService;
    this.clinics = [];
    this.services = [];
    this.doctors = [];
    this.loading = false;
    this.error = null;
    this.doctorSearch = "";
    this.whyChooseUs = [
      "HOME.WHY.ITEM_1",
      "HOME.WHY.ITEM_2",
      "HOME.WHY.ITEM_3",
      "HOME.WHY.ITEM_4",
      "HOME.WHY.ITEM_5",
      "HOME.WHY.ITEM_6"
    ];
    this.testimonials = [
      "HOME.TESTIMONIALS.ITEM_1",
      "HOME.TESTIMONIALS.ITEM_2",
      "HOME.TESTIMONIALS.ITEM_3"
    ];
    this.yearsOfService = 18;
  }
  get featuredServices() {
    return this.services.slice(0, 6);
  }
  get featuredDoctors() {
    const search = this.doctorSearch.trim().toLowerCase();
    const list = search ? this.doctors.filter((doctor) => {
      const fullName = (doctor.FullName || "").toLowerCase();
      const specialty = (doctor.Specialty || "").toLowerCase();
      const department = this.departmentName(doctor.DepartmentId).toLowerCase();
      return fullName.includes(search) || specialty.includes(search) || department.includes(search);
    }) : this.doctors;
    return list.slice(0, 4);
  }
  ngOnInit() {
    this.loadHomeData();
  }
  loadHomeData() {
    this.loading = true;
    this.error = null;
    forkJoin({
      clinics: this.clinicsService.getAll(),
      services: this.departmentsService.getAll(),
      doctors: this.doctorsService.getAll()
    }).subscribe({
      next: ({ clinics, services, doctors }) => {
        this.clinics = clinics;
        this.services = services;
        this.doctors = doctors;
        this.loading = false;
      },
      error: () => {
        this.error = "HOME.ERROR.LOAD";
        this.loading = false;
      }
    });
  }
  serviceSlug(item) {
    return `${item.Id}-${(item.Name || "service").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;
  }
  doctorDisplayName(doctor) {
    return doctor.FullName || `Doctor #${doctor.Id}`;
  }
  departmentName(departmentId) {
    if (!departmentId) {
      return "HOME.GENERAL";
    }
    const department = this.services.find((item) => item.Id === departmentId);
    return department?.Name ?? "HOME.NA";
  }
};
_DashboadComponent.\u0275fac = function DashboadComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DashboadComponent)(\u0275\u0275directiveInject(clinicsService), \u0275\u0275directiveInject(DepartmentsService), \u0275\u0275directiveInject(DoctorsService));
};
_DashboadComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboadComponent, selectors: [["app-dashboad"]], decls: 27, vars: 24, consts: [[1, "home-page"], [1, "hero", "card"], [1, "hero-actions"], ["routerLink", "/services"], ["routerLink", "/doctors", 1, "secondary"], ["routerLink", "/contact", 1, "secondary"], ["class", "info", 4, "ngIf"], ["class", "error", 4, "ngIf"], ["class", "stats", 4, "ngIf"], ["class", "card", 4, "ngIf"], ["class", "card cta", 4, "ngIf"], [1, "info"], [1, "error"], [1, "stats"], [1, "card"], [1, "section-head"], [1, "grid", "three"], ["class", "tile", 4, "ngFor", "ngForOf"], [1, "tile"], [3, "routerLink"], ["routerLink", "/doctors"], ["type", "text", 3, "ngModelChange", "ngModel", "placeholder"], [1, "grid", "two", "compact"], [1, "grid", "two"], [1, "grid", "three", "compact"], [1, "card", "cta"], ["routerLink", "/contact"]], template: function DashboadComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 0)(1, "section", 1)(2, "h1");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 2)(9, "a", 3);
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
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(18, DashboadComponent_p_18_Template, 3, 3, "p", 6)(19, DashboadComponent_p_19_Template, 3, 3, "p", 7)(20, DashboadComponent_section_20_Template, 25, 16, "section", 8)(21, DashboadComponent_section_21_Template, 10, 7, "section", 9)(22, DashboadComponent_section_22_Template, 12, 11, "section", 9)(23, DashboadComponent_section_23_Template, 6, 4, "section", 9)(24, DashboadComponent_section_24_Template, 6, 4, "section", 9)(25, DashboadComponent_section_25_Template, 6, 4, "section", 9)(26, DashboadComponent_section_26_Template, 14, 12, "section", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 14, "HOME.HERO.TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 16, "HOME.HERO.SUBTITLE"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 18, "HOME.HERO.VIEW_SERVICES"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 20, "HOME.HERO.FIND_DOCTOR"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 22, "NAV.CONTACT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.error);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading && !ctx.error);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading && !ctx.error);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading && !ctx.error);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading && !ctx.error);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading && !ctx.error);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading && !ctx.error);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading && !ctx.error);
  }
}, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterModule, RouterLink, TranslateModule, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.home-page[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 14px;\n}\n.card[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  background: white;\n  padding: 14px;\n}\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 2rem;\n}\n.hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  color: #475569;\n}\n.hero-actions[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.hero-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border: 1px solid #2563eb;\n  background: #2563eb;\n  color: white;\n  border-radius: 8px;\n  padding: 8px 12px;\n  text-decoration: none;\n  font-weight: 600;\n}\n.hero-actions[_ngcontent-%COMP%]   a.secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #1f2937;\n  border-color: #d1d5db;\n}\n.stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 10px;\n}\n.stats[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.95rem;\n  color: #475569;\n}\n.stats[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  font-size: 1.6rem;\n  font-weight: 700;\n}\n.section-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.section-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.section-head[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.tile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1e40af;\n  text-decoration: none;\n  font-weight: 600;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n}\n.grid.three[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.grid.two[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.tile[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 10px;\n}\n.tile[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.tile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 6px 0;\n  color: #475569;\n}\ninput[_ngcontent-%COMP%] {\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  padding: 8px 10px;\n  width: 100%;\n  margin-bottom: 10px;\n}\n.cta[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.cta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  color: #475569;\n}\n.info[_ngcontent-%COMP%], \n.error[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.error[_ngcontent-%COMP%] {\n  color: #b91c1c;\n}\n@media (max-width: 980px) {\n  .stats[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .grid.three[_ngcontent-%COMP%], \n   .grid.two[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=dashboad.component.css.map */"] });
var DashboadComponent = _DashboadComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboadComponent, [{
    type: Component,
    args: [{ selector: "app-dashboad", standalone: true, imports: [CommonModule, FormsModule, RouterModule, TranslateModule], template: `<main class="home-page">\r
  <section class="hero card">\r
    <h1>{{ 'HOME.HERO.TITLE' | translate }}</h1>\r
    <p>{{ 'HOME.HERO.SUBTITLE' | translate }}</p>\r
    <div class="hero-actions">\r
      <a routerLink="/services">{{ 'HOME.HERO.VIEW_SERVICES' | translate }}</a>\r
      <a routerLink="/doctors" class="secondary">{{ 'HOME.HERO.FIND_DOCTOR' | translate }}</a>\r
      <a routerLink="/contact" class="secondary">{{ 'NAV.CONTACT' | translate }}</a>\r
    </div>\r
  </section>\r
\r
  <p *ngIf="loading" class="info">{{ 'COMMON.LOADING' | translate }}</p>\r
  <p *ngIf="error" class="error">{{ error | translate }}</p>\r
\r
  <section class="stats" *ngIf="!loading && !error">\r
    <article class="card">\r
      <h3>{{ 'HOME.STATS.DEPARTMENTS' | translate }}</h3>\r
      <p>{{ services.length }}</p>\r
    </article>\r
    <article class="card">\r
      <h3>{{ 'HOME.STATS.DOCTORS' | translate }}</h3>\r
      <p>{{ doctors.length }}</p>\r
    </article>\r
    <article class="card">\r
      <h3>{{ 'HOME.STATS.CLINICS' | translate }}</h3>\r
      <p>{{ clinics.length }}</p>\r
    </article>\r
    <article class="card">\r
      <h3>{{ 'HOME.STATS.YEARS_OF_SERVICE' | translate }}</h3>\r
      <p>{{ yearsOfService }}</p>\r
    </article>\r
  </section>\r
\r
  <section class="card" *ngIf="!loading && !error">\r
    <header class="section-head">\r
      <h2>{{ 'HOME.FEATURED_SERVICES.TITLE' | translate }}</h2>\r
      <a routerLink="/services">{{ 'COMMON.SEE_ALL' | translate }}</a>\r
    </header>\r
    <div class="grid three">\r
      <article class="tile" *ngFor="let service of featuredServices">\r
        <h3>{{ service.Name }}</h3>\r
        <p>{{ service.Description || ('HOME.FEATURED_SERVICES.DEFAULT_DESC' | translate) }}</p>\r
        <a [routerLink]="['/services', serviceSlug(service)]">{{ 'COMMON.LEARN_MORE' | translate }}</a>\r
      </article>\r
    </div>\r
  </section>\r
\r
  <section class="card" *ngIf="!loading && !error">\r
    <header class="section-head">\r
      <h2>{{ 'HOME.FIND_DOCTOR.TITLE' | translate }}</h2>\r
      <a routerLink="/doctors">{{ 'HOME.FIND_DOCTOR.VIEW_ALL' | translate }}</a>\r
    </header>\r
    <input type="text" [(ngModel)]="doctorSearch" [placeholder]="'HOME.FIND_DOCTOR.SEARCH_PLACEHOLDER' | translate" />\r
    <div class="grid two compact">\r
      <article class="tile" *ngFor="let doctor of featuredDoctors">\r
        <h3>{{ doctorDisplayName(doctor) }}</h3>\r
        <p>{{ doctor.Specialty || ('COMMON.SPECIALIST' | translate) }} \xB7 {{ departmentName(doctor.DepartmentId) | translate }}</p>\r
        <a [routerLink]="['/doctors', doctor.Id]">{{ 'COMMON.VIEW_PROFILE' | translate }}</a>\r
      </article>\r
    </div>\r
  </section>\r
\r
  <section class="card" *ngIf="!loading && !error">\r
    <h2>{{ 'HOME.LOCATIONS.TITLE' | translate }}</h2>\r
    <div class="grid two">\r
      <article class="tile" *ngFor="let clinic of clinics">\r
        <h3>{{ clinic.Name }}</h3>\r
        <p>{{ clinic.Address || ('HOME.LOCATIONS.ADDRESS_FALLBACK' | translate) }}</p>\r
        <p><strong>{{ 'COMMON.PHONE' | translate }}:</strong> {{ clinic.Phone || '-' }}</p>\r
      </article>\r
    </div>\r
  </section>\r
\r
  <section class="card" *ngIf="!loading && !error">\r
    <h2>{{ 'HOME.WHY.TITLE' | translate }}</h2>\r
    <div class="grid three compact">\r
      <article class="tile" *ngFor="let item of whyChooseUs">\r
        <p>{{ item | translate }}</p>\r
      </article>\r
    </div>\r
  </section>\r
\r
  <section class="card" *ngIf="!loading && !error">\r
    <h2>{{ 'HOME.TESTIMONIALS.TITLE' | translate }}</h2>\r
    <div class="grid three compact">\r
      <article class="tile" *ngFor="let testimonial of testimonials">\r
        <p>{{ testimonial | translate }}</p>\r
      </article>\r
    </div>\r
  </section>\r
\r
  <section class="card cta" *ngIf="!loading && !error">\r
    <h2>{{ 'HOME.CTA.TITLE' | translate }}</h2>\r
    <p>{{ 'HOME.CTA.SUBTITLE' | translate }}</p>\r
    <div class="hero-actions">\r
      <a routerLink="/contact">{{ 'HOME.CTA.CONTACT_US' | translate }}</a>\r
      <a routerLink="/contact" class="secondary">{{ 'HOME.CTA.REQUEST_CALLBACK' | translate }}</a>\r
    </div>\r
  </section>\r
</main>\r
`, styles: ["/* src/app/dashboad/dashboad.component.scss */\n:host {\n  display: block;\n}\n.home-page {\n  display: grid;\n  gap: 14px;\n}\n.card {\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  background: white;\n  padding: 14px;\n}\n.hero h1 {\n  margin: 0;\n  font-size: 2rem;\n}\n.hero p {\n  margin: 8px 0 0;\n  color: #475569;\n}\n.hero-actions {\n  margin-top: 12px;\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.hero-actions a {\n  border: 1px solid #2563eb;\n  background: #2563eb;\n  color: white;\n  border-radius: 8px;\n  padding: 8px 12px;\n  text-decoration: none;\n  font-weight: 600;\n}\n.hero-actions a.secondary {\n  background: white;\n  color: #1f2937;\n  border-color: #d1d5db;\n}\n.stats {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 10px;\n}\n.stats h3 {\n  margin: 0;\n  font-size: 0.95rem;\n  color: #475569;\n}\n.stats p {\n  margin: 8px 0 0;\n  font-size: 1.6rem;\n  font-weight: 700;\n}\n.section-head {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.section-head h2 {\n  margin: 0;\n}\n.section-head a,\n.tile a {\n  color: #1e40af;\n  text-decoration: none;\n  font-weight: 600;\n}\n.grid {\n  display: grid;\n  gap: 10px;\n}\n.grid.three {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.grid.two {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.tile {\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 10px;\n}\n.tile h3 {\n  margin: 0;\n}\n.tile p {\n  margin: 6px 0;\n  color: #475569;\n}\ninput {\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  padding: 8px 10px;\n  width: 100%;\n  margin-bottom: 10px;\n}\n.cta h2 {\n  margin: 0;\n}\n.cta p {\n  margin: 8px 0 0;\n  color: #475569;\n}\n.info,\n.error {\n  margin: 0;\n}\n.error {\n  color: #b91c1c;\n}\n@media (max-width: 980px) {\n  .stats {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .grid.three,\n  .grid.two {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=dashboad.component.css.map */\n"] }]
  }], () => [{ type: clinicsService }, { type: DepartmentsService }, { type: DoctorsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboadComponent, { className: "DashboadComponent", filePath: "src/app/dashboad/dashboad.component.ts", lineNumber: 22 });
})();

// src/app/modules/home/components/home.component.ts
var _HomeComponent = class _HomeComponent {
};
_HomeComponent.\u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HomeComponent)();
};
_HomeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 1, vars: 0, template: function HomeComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-dashboad");
  }
}, dependencies: [CommonModule, DashboadComponent], encapsulation: 2 });
var HomeComponent = _HomeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{
      selector: "app-home",
      standalone: true,
      imports: [CommonModule, DashboadComponent],
      template: `<app-dashboad></app-dashboad>`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/modules/home/components/home.component.ts", lineNumber: 12 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-3RG7UWIV.js.map
