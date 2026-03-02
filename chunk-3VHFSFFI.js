import {
  clinicsService
} from "./chunk-VDYAP6BO.js";
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
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-JCLQJVGK.js";

// src/app/modules/aboutus/components/aboutus.component.ts
function AboutusComponent_article_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 4)(1, "h4");
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
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const clinic_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(clinic_r1.Name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(clinic_r1.Address || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(8, 4, "COMMON.PHONE"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", clinic_r1.Phone || "-");
  }
}
var _AboutusComponent = class _AboutusComponent {
  constructor(clinicsService) {
    this.clinicsService = clinicsService;
    this.clinics = [];
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
};
_AboutusComponent.\u0275fac = function AboutusComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AboutusComponent)(\u0275\u0275directiveInject(clinicsService));
};
_AboutusComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutusComponent, selectors: [["app-aboutus"]], decls: 57, vars: 49, consts: [[1, "about-page"], [1, "card"], [1, "locations"], ["class", "location", 4, "ngFor", "ngForOf"], [1, "location"]], template: function AboutusComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "article", 1)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "article", 1)(9, "h3");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p")(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p")(19, "strong");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p")(25, "strong");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "article", 1)(31, "h3");
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "ul")(35, "li");
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "li");
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "li");
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "article", 1)(45, "h3");
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 2);
    \u0275\u0275template(49, AboutusComponent_article_49_Template, 10, 6, "article", 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "article", 1)(51, "h3");
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "p");
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 17, "ABOUT.TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 19, "ABOUT.INTRO"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 21, "ABOUT.MVV.TITLE"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(15, 23, "ABOUT.MVV.MISSION_LABEL"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 25, "ABOUT.MVV.MISSION"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(21, 27, "ABOUT.MVV.VISION_LABEL"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 29, "ABOUT.MVV.VISION"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(27, 31, "ABOUT.MVV.VALUES_LABEL"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 33, "ABOUT.MVV.VALUES"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 35, "ABOUT.FACILITIES.TITLE"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 37, "ABOUT.FACILITIES.ITEM_1"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 39, "ABOUT.FACILITIES.ITEM_2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 41, "ABOUT.FACILITIES.ITEM_3"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 43, "ABOUT.LOCATIONS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx.clinics);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 45, "ABOUT.ACCREDITATIONS.TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(56, 47, "ABOUT.ACCREDITATIONS.TEXT"));
  }
}, dependencies: [CommonModule, NgForOf, TranslateModule, TranslatePipe], styles: ["\n\n.about-page[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n.card[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  background: white;\n  padding: 12px;\n}\nh2[_ngcontent-%COMP%], \nh3[_ngcontent-%COMP%], \nh4[_ngcontent-%COMP%] {\n  margin: 0;\n}\np[_ngcontent-%COMP%], \nli[_ngcontent-%COMP%] {\n  color: #475569;\n}\n.locations[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 10px;\n}\n.location[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 10px;\n}\n@media (max-width: 900px) {\n  .locations[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=aboutus.component.css.map */"] });
var AboutusComponent = _AboutusComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutusComponent, [{
    type: Component,
    args: [{ selector: "app-aboutus", standalone: true, imports: [CommonModule, TranslateModule], template: `
    <section class="about-page">
      <article class="card">
        <h2>{{ 'ABOUT.TITLE' | translate }}</h2>
        <p>{{ 'ABOUT.INTRO' | translate }}</p>
      </article>

      <article class="card">
        <h3>{{ 'ABOUT.MVV.TITLE' | translate }}</h3>
        <p><strong>{{ 'ABOUT.MVV.MISSION_LABEL' | translate }}:</strong> {{ 'ABOUT.MVV.MISSION' | translate }}</p>
        <p><strong>{{ 'ABOUT.MVV.VISION_LABEL' | translate }}:</strong> {{ 'ABOUT.MVV.VISION' | translate }}</p>
        <p><strong>{{ 'ABOUT.MVV.VALUES_LABEL' | translate }}:</strong> {{ 'ABOUT.MVV.VALUES' | translate }}</p>
      </article>

      <article class="card">
        <h3>{{ 'ABOUT.FACILITIES.TITLE' | translate }}</h3>
        <ul>
          <li>{{ 'ABOUT.FACILITIES.ITEM_1' | translate }}</li>
          <li>{{ 'ABOUT.FACILITIES.ITEM_2' | translate }}</li>
          <li>{{ 'ABOUT.FACILITIES.ITEM_3' | translate }}</li>
        </ul>
      </article>

      <article class="card">
        <h3>{{ 'ABOUT.LOCATIONS' | translate }}</h3>
        <div class="locations">
          <article *ngFor="let clinic of clinics" class="location">
            <h4>{{ clinic.Name }}</h4>
            <p>{{ clinic.Address || '-' }}</p>
            <p><strong>{{ 'COMMON.PHONE' | translate }}:</strong> {{ clinic.Phone || '-' }}</p>
          </article>
        </div>
      </article>

      <article class="card">
        <h3>{{ 'ABOUT.ACCREDITATIONS.TITLE' | translate }}</h3>
        <p>{{ 'ABOUT.ACCREDITATIONS.TEXT' | translate }}</p>
      </article>
    </section>
  `, styles: ["/* angular:styles/component:scss;f1f47d19111414f17b49eace285dce57242bf32371c58c4af79ee3e2080e711d;D:/xampp/htdocs/clinic/src/app/modules/aboutus/components/aboutus.component.ts */\n.about-page {\n  display: grid;\n  gap: 12px;\n}\n.card {\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  background: white;\n  padding: 12px;\n}\nh2,\nh3,\nh4 {\n  margin: 0;\n}\np,\nli {\n  color: #475569;\n}\n.locations {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 10px;\n}\n.location {\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 10px;\n}\n@media (max-width: 900px) {\n  .locations {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=aboutus.component.css.map */\n"] }]
  }], () => [{ type: clinicsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutusComponent, { className: "AboutusComponent", filePath: "src/app/modules/aboutus/components/aboutus.component.ts", lineNumber: 97 });
})();
export {
  AboutusComponent
};
//# sourceMappingURL=chunk-3VHFSFFI.js.map
