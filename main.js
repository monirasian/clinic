import {
  AdminAuthService
} from "./chunk-SNWVSXOE.js";
import {
  BrowserModule,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  platformBrowser
} from "./chunk-YVJY77VO.js";
import {
  API_BASE_URL,
  environment
} from "./chunk-KAR7HZ5G.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  ɵNgSelectMultipleOption
} from "./chunk-HB7SU3DO.js";
import {
  TranslateLoader,
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-D67LXEMX.js";
import {
  HttpBackend,
  HttpClient,
  HttpClientModule,
  provideHttpClient,
  withInterceptors
} from "./chunk-C4HPYBEJ.js";
import {
  Component,
  Injectable,
  InjectionToken,
  NgForOf,
  NgIf,
  NgModule,
  __spreadValues,
  filter,
  inject,
  registerLocaleData,
  setClassMetadata,
  tap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-JCLQJVGK.js";

// node_modules/@ngx-translate/http-loader/fesm2022/ngx-translate-http-loader.mjs
var TRANSLATE_HTTP_LOADER_CONFIG = new InjectionToken("TRANSLATE_HTTP_LOADER_CONFIG");
var TranslateHttpLoader = class _TranslateHttpLoader {
  http;
  config;
  constructor() {
    this.config = __spreadValues({
      prefix: "/assets/i18n/",
      suffix: ".json",
      enforceLoading: false,
      useHttpBackend: false
    }, inject(TRANSLATE_HTTP_LOADER_CONFIG));
    this.http = this.config.useHttpBackend ? new HttpClient(inject(HttpBackend)) : inject(HttpClient);
  }
  /**
   * Gets the translations from the server
   */
  getTranslation(lang) {
    const cacheBuster = this.config.enforceLoading ? `?enforceLoading=${Date.now()}` : "";
    return this.http.get(`${this.config.prefix}${lang}${this.config.suffix}${cacheBuster}`);
  }
  static \u0275fac = function TranslateHttpLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TranslateHttpLoader)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TranslateHttpLoader,
    factory: _TranslateHttpLoader.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslateHttpLoader, [{
    type: Injectable
  }], () => [], null);
})();
function provideTranslateHttpLoader(config = {}) {
  const useBackend = config.useHttpBackend ?? false;
  return [{
    provide: TRANSLATE_HTTP_LOADER_CONFIG,
    useValue: config
  }, {
    provide: TranslateLoader,
    useClass: TranslateHttpLoader,
    deps: [useBackend ? HttpBackend : HttpClient, TRANSLATE_HTTP_LOADER_CONFIG]
  }];
}

// node_modules/@angular/common/locales/ka.js
var u = void 0;
function plural(val) {
  const n = val;
  if (n === 1)
    return 1;
  return 5;
}
var ka_default = ["ka", [["a", "p"], ["AM", "PM"]], [["AM", "PM"]], [["\u10D9", "\u10DD", "\u10E1", "\u10DD", "\u10EE", "\u10DE", "\u10E8"], ["\u10D9\u10D5\u10D8", "\u10DD\u10E0\u10E8", "\u10E1\u10D0\u10DB", "\u10DD\u10D7\u10EE", "\u10EE\u10E3\u10D7", "\u10DE\u10D0\u10E0", "\u10E8\u10D0\u10D1"], ["\u10D9\u10D5\u10D8\u10E0\u10D0", "\u10DD\u10E0\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8", "\u10E1\u10D0\u10DB\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8", "\u10DD\u10D7\u10EE\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8", "\u10EE\u10E3\u10D7\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8", "\u10DE\u10D0\u10E0\u10D0\u10E1\u10D9\u10D4\u10D5\u10D8", "\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8"], ["\u10D9\u10D5", "\u10DD\u10E0", "\u10E1\u10DB", "\u10DD\u10D7", "\u10EE\u10D7", "\u10DE\u10E0", "\u10E8\u10D1"]], u, [["\u10D8", "\u10D7", "\u10DB", "\u10D0", "\u10DB", "\u10D8", "\u10D8", "\u10D0", "\u10E1", "\u10DD", "\u10DC", "\u10D3"], ["\u10D8\u10D0\u10DC", "\u10D7\u10D4\u10D1", "\u10DB\u10D0\u10E0", "\u10D0\u10DE\u10E0", "\u10DB\u10D0\u10D8", "\u10D8\u10D5\u10DC", "\u10D8\u10D5\u10DA", "\u10D0\u10D2\u10D5", "\u10E1\u10D4\u10E5", "\u10DD\u10E5\u10E2", "\u10DC\u10DD\u10D4", "\u10D3\u10D4\u10D9"], ["\u10D8\u10D0\u10DC\u10D5\u10D0\u10E0\u10D8", "\u10D7\u10D4\u10D1\u10D4\u10E0\u10D5\u10D0\u10DA\u10D8", "\u10DB\u10D0\u10E0\u10E2\u10D8", "\u10D0\u10DE\u10E0\u10D8\u10DA\u10D8", "\u10DB\u10D0\u10D8\u10E1\u10D8", "\u10D8\u10D5\u10DC\u10D8\u10E1\u10D8", "\u10D8\u10D5\u10DA\u10D8\u10E1\u10D8", "\u10D0\u10D2\u10D5\u10D8\u10E1\u10E2\u10DD", "\u10E1\u10D4\u10E5\u10E2\u10D4\u10DB\u10D1\u10D4\u10E0\u10D8", "\u10DD\u10E5\u10E2\u10DD\u10DB\u10D1\u10D4\u10E0\u10D8", "\u10DC\u10DD\u10D4\u10DB\u10D1\u10D4\u10E0\u10D8", "\u10D3\u10D4\u10D9\u10D4\u10DB\u10D1\u10D4\u10E0\u10D8"]], u, [["\u10EB\u10D5. \u10EC.", "\u10D0\u10EE. \u10EC."], u, ["\u10EB\u10D5\u10D4\u10DA\u10D8 \u10EC\u10D4\u10DA\u10D7\u10D0\u10E6\u10E0\u10D8\u10EA\u10EE\u10D5\u10D8\u10D7", "\u10D0\u10EE\u10D0\u10DA\u10D8 \u10EC\u10D4\u10DA\u10D7\u10D0\u10E6\u10E0\u10D8\u10EA\u10EE\u10D5\u10D8\u10D7"]], 1, [6, 0], ["dd.MM.yy", "d MMM. y", "d MMMM, y", "EEEE, dd MMMM, y"], ["HH:mm", "HH:mm:ss", "HH:mm:ss z", "HH:mm:ss zzzz"], ["{1}, {0}", u, u, u], [",", "\xA0", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "\u10D0\u10E0\xA0\u10D0\u10E0\u10D8\u10E1\xA0\u10E0\u10D8\u10EA\u10EE\u10D5\u10D8", ":"], ["#,##0.###", "#,##0%", "#,##0.00\xA0\xA4", "#E0"], "GEL", "\u20BE", "\u10E5\u10D0\u10E0\u10D7\u10E3\u10DA\u10D8 \u10DA\u10D0\u10E0\u10D8", { "AUD": [u, "$"], "BYN": [u, "\u0440."], "CNY": [u, "\xA5"], "GEL": ["\u20BE"], "HKD": [u, "$"], "ILS": [u, "\u20AA"], "INR": [u, "\u20B9"], "JPY": [u, "\xA5"], "KRW": [u, "\u20A9"], "NZD": [u, "$"], "PHP": [u, "\u20B1"], "TWD": ["NT$"], "USD": ["US$", "$"], "VND": [u, "\u20AB"] }, "ltr", plural];

// src/app/app.ts
var _c0 = (a0) => ({ exact: a0 });
var _c1 = () => ({});
var _c2 = () => ({ exact: true });
function App_header_1_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const clinic_r3 = ctx.$implicit;
    \u0275\u0275property("value", clinic_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(clinic_r3);
  }
}
function App_header_1_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "button", 25);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 25);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 25);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 26);
    \u0275\u0275listener("click", function App_header_1_div_23_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.logoutFromHeader());
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "APP.MY_PROFILE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, "APP.CHANGE_PASSWORD"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 8, "APP.MY_CLINIC"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 10, "APP.SIGN_OUT"));
  }
}
function App_header_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "header", 7)(1, "div", 8)(2, "a", 9);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275element(4, "img", 10);
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 11)(9, "input", 12);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function App_header_1_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchText, $event) || (ctx_r1.searchText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 13)(13, "select", 14);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275listener("change", function App_header_1_Template_select_change_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onclinicChange($event));
    });
    \u0275\u0275template(15, App_header_1_option_15_Template, 2, 2, "option", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 16);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 17)(20, "button", 18);
    \u0275\u0275listener("click", function App_header_1_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleProfileMenu());
    });
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, App_header_1_div_23_Template, 13, 12, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "select", 20);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275listener("change", function App_header_1_Template_select_change_24_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLanguageChange($event));
    });
    \u0275\u0275elementStart(26, "option", 21);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option", 22);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(3, 15, "APP.CLINIC_OS"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 17, "APP.CLINIC_OS"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchText);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(10, 19, "APP.GLOBAL_SEARCH_PLACEHOLDER"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(11, 21, "APP.GLOBAL_SEARCH"));
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.selectedclinic);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(14, 23, "APP.CLINIC_SWITCHER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.clinicOptions);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 25, "APP.NOTIFICATIONS"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 27, "APP.PROFILE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isProfileMenuOpen);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.currentLanguage);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(25, 29, "NAV.LANGUAGE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 31, "LANG.ENGLISH"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 33, "LANG.GEORGIAN"));
  }
}
function App_aside_3_a_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 29);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r5.path)("routerLinkActiveOptions", \u0275\u0275pureFunction1(5, _c0, item_r5.path === "/"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, item_r5.labelKey), " ");
  }
}
function App_aside_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "aside", 27);
    \u0275\u0275template(1, App_aside_3_a_1_Template, 3, 7, "a", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.sidebarItems);
  }
}
function App_nav_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 30);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "div", 31)(3, "button", 32);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275element(5, "img", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 34);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a", 35);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "a", 36);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "a", 37);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "a", 38);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "a", 39);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 40)(25, "select", 41);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275listener("change", function App_nav_5_Template_select_change_25_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLanguageChange($event));
    });
    \u0275\u0275elementStart(27, "option", 21);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "option", 22);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 14, "APP.HEADER_MENU"));
    \u0275\u0275advance(3);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(36, _c1));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(4, 16, "NAV.MENU"));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(37, _c2));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 18, "NAV.HOME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 20, "NAV.SERVICES"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 22, "NAV.DOCTORS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 24, "NAV.CAREER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 26, "NAV.ABOUT_US"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 28, "NAV.CONTACT"));
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r1.currentLanguage);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(26, 30, "NAV.LANGUAGE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 32, "LANG.ENGLISH"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 34, "LANG.GEORGIAN"));
  }
}
function App_footer_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "footer", 42)(1, "div")(2, "h4");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div")(15, "h4");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "a", 43);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "a", 44);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "a", 45);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "a", 46);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "a", 47);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "a", 48);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div")(37, "h4");
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "a", 49);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "a", 50);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 14, "FOOTER.HOSPITAL_CONTACT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 16, "FOOTER.ADDRESS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 18, "FOOTER.PHONE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 20, "FOOTER.EMAIL"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 22, "FOOTER.QUICK_LINKS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 24, "NAV.HOME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 26, "NAV.SERVICES"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 28, "NAV.DOCTORS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 30, "NAV.CAREER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 32, "NAV.ABOUT_US"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 34, "NAV.CONTACT"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(39, 36, "FOOTER.POLICIES"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 38, "FOOTER.PRIVACY"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 40, "FOOTER.TERMS"));
  }
}
var _App = class _App {
  constructor(translate, router, adminAuthService) {
    this.translate = translate;
    this.router = router;
    this.adminAuthService = adminAuthService;
    this.currentLanguage = "en";
    this.isAdminRoute = false;
    this.isAdminAuthenticated = false;
    this.currentRole = "Admin";
    this.selectedclinic = "Main clinic";
    this.searchText = "";
    this.isProfileMenuOpen = false;
    this.supportedLanguages = ["en", "ka"];
    this.clinicOptions = ["Main clinic", "Branch clinic"];
    this.externalRoutes = [
      "/",
      "/dashboard",
      "/about",
      "/aboutus",
      "/career",
      "/contact",
      "/services",
      "/doctors",
      "/privacy",
      "/terms"
    ];
    this.roleMenus = {
      Admin: [
        { path: "/admin/dashboard", labelKey: "SIDEBAR.DASHBOARD" },
        { path: "/admin/patients/list", labelKey: "SIDEBAR.PATIENTS" },
        { path: "/admin/appointments/list", labelKey: "SIDEBAR.APPOINTMENTS" },
        { path: "/admin/medicalrecords/list", labelKey: "SIDEBAR.MEDICAL_RECORDS" },
        { path: "/admin/labresults/list", labelKey: "SIDEBAR.LAB_RESULTS" },
        { path: "/admin/prescriptions/list", labelKey: "SIDEBAR.PRESCRIPTIONS" },
        { path: "/admin/invoices/list", labelKey: "SIDEBAR.INVOICES" },
        { path: "/admin/payments/list", labelKey: "SIDEBAR.PAYMENTS" },
        { path: "/admin/clinics/list", labelKey: "SIDEBAR.CLINICS" },
        { path: "/admin/departments/list", labelKey: "SIDEBAR.DEPARTMENTS" },
        { path: "/admin/rooms/list", labelKey: "SIDEBAR.ROOMS" },
        { path: "/admin/doctors/list", labelKey: "SIDEBAR.DOCTORS" },
        { path: "/admin/staff/list", labelKey: "SIDEBAR.STAFF" },
        { path: "/admin/schedules/list", labelKey: "SIDEBAR.SCHEDULES" },
        { path: "/admin/users/list", labelKey: "SIDEBAR.USERS_ROLES" }
      ],
      Doctor: [
        { path: "/dashboard", labelKey: "SIDEBAR.DASHBOARD" },
        { path: "/schedules", labelKey: "SIDEBAR.MY_SCHEDULE" },
        { path: "/appointments", labelKey: "SIDEBAR.APPOINTMENTS" },
        { path: "/patients", labelKey: "SIDEBAR.PATIENTS" },
        { path: "/medicalrecords", labelKey: "SIDEBAR.MEDICAL_RECORDS" },
        { path: "/labresults", labelKey: "SIDEBAR.LAB_RESULTS" },
        { path: "/prescriptions", labelKey: "SIDEBAR.PRESCRIPTIONS" },
        { path: "/invoices", labelKey: "SIDEBAR.BILLING" }
      ],
      Nurse: [
        { path: "/dashboard", labelKey: "SIDEBAR.DASHBOARD" },
        { path: "/appointments", labelKey: "SIDEBAR.APPOINTMENTS" },
        { path: "/patients", labelKey: "SIDEBAR.PATIENTS" },
        { path: "/medicalrecords", labelKey: "SIDEBAR.MEDICAL_RECORDS" },
        { path: "/labresults", labelKey: "SIDEBAR.LAB_RESULTS" },
        { path: "/rooms", labelKey: "SIDEBAR.ROOMS" }
      ],
      Receptionist: [
        { path: "/dashboard", labelKey: "SIDEBAR.DASHBOARD" },
        { path: "/appointments", labelKey: "SIDEBAR.APPOINTMENTS" },
        { path: "/patients", labelKey: "SIDEBAR.PATIENTS" },
        { path: "/invoices", labelKey: "SIDEBAR.INVOICES" },
        { path: "/payments", labelKey: "SIDEBAR.PAYMENTS" },
        { path: "/rooms", labelKey: "SIDEBAR.ROOMS" }
      ]
    };
    registerLocaleData(ka_default);
    this.translate.addLangs(this.supportedLanguages);
    this.translate.setDefaultLang("en");
    const savedLanguage = localStorage.getItem("app-language");
    if (savedLanguage === "en" || savedLanguage === "ka") {
      this.currentLanguage = savedLanguage;
    }
    this.applyLanguage(this.currentLanguage);
    this.isAdminAuthenticated = this.adminAuthService.isLoggedIn();
    this.currentRole = this.adminAuthService.getRole();
    this.adminAuthService.authState$.subscribe((isLoggedIn) => {
      this.isAdminAuthenticated = isLoggedIn;
      if (!isLoggedIn) {
        this.isProfileMenuOpen = false;
      }
    });
    this.adminAuthService.roleState$.subscribe((role) => {
      this.currentRole = role;
    });
    this.setRouteState(this.router.url);
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
      const navigation = event;
      this.setRouteState(navigation.urlAfterRedirects);
    });
  }
  onLanguageChange(event) {
    const target = event.target;
    if (!target) {
      return;
    }
    const selected = target.value;
    if (!this.supportedLanguages.includes(selected)) {
      return;
    }
    this.currentLanguage = selected;
    localStorage.setItem("app-language", selected);
    this.applyLanguage(selected);
  }
  get showMenu() {
    return !this.isAdminRoute;
  }
  get showAdminShell() {
    return this.isAdminAuthenticated && this.isAdminRoute;
  }
  get sidebarItems() {
    return this.roleMenus[this.currentRole];
  }
  onclinicChange(event) {
    const target = event.target;
    if (!target) {
      return;
    }
    this.selectedclinic = target.value;
  }
  toggleProfileMenu() {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }
  applyLanguage(language) {
    this.translate.use(language);
    document.documentElement.lang = language;
  }
  setRouteState(url) {
    this.isAdminRoute = url.startsWith("/admin");
  }
  logoutFromHeader() {
    this.adminAuthService.logout().subscribe(() => {
      this.router.navigate(["/admin"]);
    });
  }
};
_App.\u0275fac = function App_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _App)(\u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AdminAuthService));
};
_App.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], standalone: false, decls: 8, vars: 6, consts: [[1, "app-shell"], ["class", "top-header", 4, "ngIf"], [1, "layout"], ["class", "sidebar", "aria-label", "Primary navigation", 4, "ngIf"], [1, "content"], ["class", "menu", 4, "ngIf"], ["class", "site-footer", 4, "ngIf"], [1, "top-header"], [1, "header-left"], ["routerLink", "/", 1, "header-brand"], ["src", "clinicLogo.jpg", "alt", "clinic logo", 1, "logo"], [1, "header-center"], ["type", "text", 3, "ngModelChange", "ngModel", "placeholder"], [1, "header-right"], [3, "change", "value"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "button", 1, "secondary"], [1, "profile-menu-wrapper"], ["type", "button", 1, "secondary", 3, "click"], ["class", "profile-menu", "role", "menu", 4, "ngIf"], ["id", "menu-language", 3, "change", "value"], ["value", "en"], ["value", "ka"], [3, "value"], ["role", "menu", 1, "profile-menu"], ["type", "button", "role", "menuitem"], ["type", "button", "role", "menuitem", 3, "click"], ["aria-label", "Primary navigation", 1, "sidebar"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions"], [1, "menu"], [1, "menu-left"], ["type", "button", "routerLink", "/", 1, "menu-trigger", 3, "queryParams"], ["src", "clinicLogo.jpg", "alt", "", "aria-hidden", "true", 1, "menu-logo"], ["routerLink", "/", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/services", "routerLinkActive", "active"], ["routerLink", "/doctors", "routerLinkActive", "active"], ["routerLink", "/career", "routerLinkActive", "active"], ["routerLink", "/about", "routerLinkActive", "active"], ["routerLink", "/contact", "routerLinkActive", "active"], [1, "menu-right"], ["id", "menu-language-public", 3, "change", "value"], [1, "site-footer"], ["routerLink", "/"], ["routerLink", "/services"], ["routerLink", "/doctors"], ["routerLink", "/career"], ["routerLink", "/about"], ["routerLink", "/contact"], ["routerLink", "/privacy"], ["routerLink", "/terms"]], template: function App_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 0);
    \u0275\u0275template(1, App_header_1_Template, 32, 35, "header", 1);
    \u0275\u0275elementStart(2, "div", 2);
    \u0275\u0275template(3, App_aside_3_Template, 2, 1, "aside", 3);
    \u0275\u0275elementStart(4, "section", 4);
    \u0275\u0275template(5, App_nav_5_Template, 33, 38, "nav", 5);
    \u0275\u0275element(6, "router-outlet");
    \u0275\u0275template(7, App_footer_7_Template, 46, 42, "footer", 6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.showAdminShell);
    \u0275\u0275advance();
    \u0275\u0275classProp("with-sidebar", ctx.showAdminShell);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.showAdminShell);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.showMenu);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.showMenu);
  }
}, dependencies: [NgForOf, NgIf, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NgControlStatus, NgModel, RouterOutlet, RouterLink, RouterLinkActive, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.app-shell[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: #f6f7fb;\n}\n.top-header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 50;\n  min-height: 72px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 0 16px;\n}\n.header-left[_ngcontent-%COMP%], \n.header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.header-brand[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  text-decoration: none;\n  color: inherit;\n}\n.header-center[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n}\n.header-center[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 520px;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 8px 12px;\n}\n.header-right[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.header-right[_ngcontent-%COMP%]   .secondary[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 8px 10px;\n  background: #ffffff;\n  color: #0f172a;\n  font-weight: 600;\n}\n.logo[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 0;\n  display: block;\n  border: none;\n  object-fit: cover;\n}\n.layout[_ngcontent-%COMP%] {\n  max-width: 1320px;\n  margin: 0 auto;\n  padding: 16px;\n}\n.layout.with-sidebar[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 260px 1fr;\n  gap: 16px;\n}\n.sidebar[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 10px;\n  height: fit-content;\n  position: sticky;\n  top: 72px;\n}\n.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  padding: 10px 12px;\n  border-radius: 10px;\n  color: #0f172a;\n  text-decoration: none;\n  font-weight: 600;\n}\n.sidebar[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background: #e8edff;\n  color: #1e40af;\n}\n.content[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.site-footer[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 16px;\n  background: white;\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 16px;\n}\n.site-footer[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n}\n.site-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0;\n  color: #475569;\n}\n.site-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  color: #1f2937;\n  text-decoration: none;\n  margin: 4px 0;\n}\n.profile-menu-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.profile-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 6px);\n  right: 0;\n  min-width: 180px;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  background: #ffffff;\n  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);\n  padding: 6px;\n  display: grid;\n  gap: 4px;\n}\n.profile-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid transparent;\n  background: transparent;\n  color: #0f172a;\n  text-align: left;\n  border-radius: 8px;\n  padding: 8px;\n  cursor: pointer;\n}\n.profile-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n}\n.menu[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 14px;\n  background: white;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.menu-left[_ngcontent-%COMP%], \n.menu-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border: 1px solid #d1d5db;\n  background: white;\n  border-radius: 8px;\n  padding: 8px 10px;\n  text-align: left;\n  cursor: pointer;\n  font-weight: 600;\n  text-decoration: none;\n  color: #1f2937;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n.menu[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background: #2563eb;\n  border-color: #2563eb;\n  color: white;\n}\n.menu-trigger[_ngcontent-%COMP%] {\n  border: 1px solid #d1d5db;\n  background: white;\n  border-radius: 8px;\n  padding: 8px 10px;\n  cursor: pointer;\n  font-weight: 600;\n  color: #1f2937;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n.menu-logo[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 0;\n  border: none;\n  display: block;\n  object-fit: cover;\n}\n.menu-right[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  padding: 8px 10px;\n  min-width: 180px;\n}\n.menu-right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #2563eb;\n  background: #2563eb;\n  color: white;\n  border-radius: 8px;\n  padding: 8px 12px;\n  cursor: pointer;\n  font-weight: 600;\n}\n.menu-right[_ngcontent-%COMP%]   .language-switcher[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #374151;\n}\n.menu-right[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  padding: 8px 10px;\n  background: white;\n  color: #1f2937;\n  font-weight: 600;\n}\n@media (max-width: 900px) {\n  .top-header[_ngcontent-%COMP%] {\n    height: auto;\n    padding: 10px;\n    flex-wrap: wrap;\n  }\n  .header-center[_ngcontent-%COMP%] {\n    order: 3;\n    width: 100%;\n  }\n  .layout.with-sidebar[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .sidebar[_ngcontent-%COMP%] {\n    position: static;\n  }\n  .menu-left[_ngcontent-%COMP%], \n   .menu-right[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0;\n  }\n  .menu-right[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n  }\n  .site-footer[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=app.css.map */"] });
var App = _App;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", standalone: false, template: `<main class="app-shell">\r
	<header *ngIf="showAdminShell" class="top-header">\r
		<div class="header-left">\r
			<a class="header-brand" routerLink="/" [attr.aria-label]="'APP.CLINIC_OS' | translate">\r
				<img class="logo" src="clinicLogo.jpg" alt="clinic logo" />\r
				<strong>{{ 'APP.CLINIC_OS' | translate }}</strong>\r
			</a>\r
		</div>\r
\r
		<div class="header-center">\r
			<input\r
				type="text"\r
				[(ngModel)]="searchText"\r
				[placeholder]="'APP.GLOBAL_SEARCH_PLACEHOLDER' | translate"\r
				[attr.aria-label]="'APP.GLOBAL_SEARCH' | translate"\r
			/>\r
		</div>\r
\r
		<div class="header-right">\r
			<select [value]="selectedclinic" (change)="onclinicChange($event)" [attr.aria-label]="'APP.CLINIC_SWITCHER' | translate">\r
				<option *ngFor="let clinic of clinicOptions" [value]="clinic">{{ clinic }}</option>\r
			</select>\r
			<button type="button" class="secondary">{{ 'APP.NOTIFICATIONS' | translate }}</button>\r
			<div class="profile-menu-wrapper">\r
				<button type="button" class="secondary" (click)="toggleProfileMenu()">{{ 'APP.PROFILE' | translate }}</button>\r
				<div *ngIf="isProfileMenuOpen" class="profile-menu" role="menu">\r
					<button type="button" role="menuitem">{{ 'APP.MY_PROFILE' | translate }}</button>\r
					<button type="button" role="menuitem">{{ 'APP.CHANGE_PASSWORD' | translate }}</button>\r
					<button type="button" role="menuitem">{{ 'APP.MY_CLINIC' | translate }}</button>\r
					<button type="button" role="menuitem" (click)="logoutFromHeader()">{{ 'APP.SIGN_OUT' | translate }}</button>\r
				</div>\r
			</div>\r
			<select\r
				id="menu-language"\r
				[attr.aria-label]="'NAV.LANGUAGE' | translate"\r
				[value]="currentLanguage"\r
				(change)="onLanguageChange($event)"\r
			>\r
				<option value="en">{{ 'LANG.ENGLISH' | translate }}</option>\r
				<option value="ka">{{ 'LANG.GEORGIAN' | translate }}</option>\r
			</select>\r
		</div>\r
	</header>\r
\r
	<div class="layout" [class.with-sidebar]="showAdminShell">\r
		<aside *ngIf="showAdminShell" class="sidebar" aria-label="Primary navigation">\r
			<a\r
				*ngFor="let item of sidebarItems"\r
				[routerLink]="item.path"\r
				routerLinkActive="active"\r
				[routerLinkActiveOptions]="{ exact: item.path === '/' }"\r
			>\r
				{{ item.labelKey | translate }}\r
			</a>\r
		</aside>\r
\r
		<section class="content">\r
			<nav *ngIf="showMenu" class="menu" [attr.aria-label]="'APP.HEADER_MENU' | translate">\r
				<div class="menu-left">\r
					<button type="button" class="menu-trigger" [attr.aria-label]="'NAV.MENU' | translate" routerLink="/" [queryParams]="{}">\r
						<img class="menu-logo" src="clinicLogo.jpg" alt="" aria-hidden="true" />\r
					</button>\r
					<a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">{{ 'NAV.HOME' | translate }}</a>\r
					<a routerLink="/services" routerLinkActive="active">{{ 'NAV.SERVICES' | translate }}</a>\r
					<a routerLink="/doctors" routerLinkActive="active">{{ 'NAV.DOCTORS' | translate }}</a>\r
					<a routerLink="/career" routerLinkActive="active">{{ 'NAV.CAREER' | translate }}</a>\r
					<a routerLink="/about" routerLinkActive="active">{{ 'NAV.ABOUT_US' | translate }}</a>\r
					<a routerLink="/contact" routerLinkActive="active">{{ 'NAV.CONTACT' | translate }}</a>\r
				</div>\r
\r
				<div class="menu-right">\r
					\r
					<select\r
						id="menu-language-public"\r
						[attr.aria-label]="'NAV.LANGUAGE' | translate"\r
						[value]="currentLanguage"\r
						(change)="onLanguageChange($event)"\r
					>\r
						<option value="en">{{ 'LANG.ENGLISH' | translate }}</option>\r
						<option value="ka">{{ 'LANG.GEORGIAN' | translate }}</option>\r
					</select>\r
				</div>\r
			</nav>\r
\r
			<router-outlet></router-outlet>\r
\r
			<footer *ngIf="showMenu" class="site-footer">\r
				<div>\r
					<h4>{{ 'FOOTER.HOSPITAL_CONTACT' | translate }}</h4>\r
					<p>{{ 'FOOTER.ADDRESS' | translate }}</p>\r
					<p>{{ 'FOOTER.PHONE' | translate }}</p>\r
					<p>{{ 'FOOTER.EMAIL' | translate }}</p>\r
				</div>\r
				<div>\r
					<h4>{{ 'FOOTER.QUICK_LINKS' | translate }}</h4>\r
					<a routerLink="/">{{ 'NAV.HOME' | translate }}</a>\r
					<a routerLink="/services">{{ 'NAV.SERVICES' | translate }}</a>\r
					<a routerLink="/doctors">{{ 'NAV.DOCTORS' | translate }}</a>\r
					<a routerLink="/career">{{ 'NAV.CAREER' | translate }}</a>\r
					<a routerLink="/about">{{ 'NAV.ABOUT_US' | translate }}</a>\r
					<a routerLink="/contact">{{ 'NAV.CONTACT' | translate }}</a>\r
				</div>\r
				<div>\r
					<h4>{{ 'FOOTER.POLICIES' | translate }}</h4>\r
					<a routerLink="/privacy">{{ 'FOOTER.PRIVACY' | translate }}</a>\r
					<a routerLink="/terms">{{ 'FOOTER.TERMS' | translate }}</a>\r
				</div>\r
			</footer>\r
		</section>\r
	</div>\r
</main>\r
`, styles: ["/* src/app/app.scss */\n:host {\n  display: block;\n}\n.app-shell {\n  min-height: 100vh;\n  background: #f6f7fb;\n}\n.top-header {\n  position: sticky;\n  top: 0;\n  z-index: 50;\n  min-height: 72px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 0 16px;\n}\n.header-left,\n.header-right {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.header-brand {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  text-decoration: none;\n  color: inherit;\n}\n.header-center {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n}\n.header-center input {\n  width: 100%;\n  max-width: 520px;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 8px 12px;\n}\n.header-right select,\n.header-right .secondary {\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 8px 10px;\n  background: #ffffff;\n  color: #0f172a;\n  font-weight: 600;\n}\n.logo {\n  width: 48px;\n  height: 48px;\n  border-radius: 0;\n  display: block;\n  border: none;\n  object-fit: cover;\n}\n.layout {\n  max-width: 1320px;\n  margin: 0 auto;\n  padding: 16px;\n}\n.layout.with-sidebar {\n  display: grid;\n  grid-template-columns: 260px 1fr;\n  gap: 16px;\n}\n.sidebar {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 10px;\n  height: fit-content;\n  position: sticky;\n  top: 72px;\n}\n.sidebar a {\n  display: block;\n  padding: 10px 12px;\n  border-radius: 10px;\n  color: #0f172a;\n  text-decoration: none;\n  font-weight: 600;\n}\n.sidebar a.active {\n  background: #e8edff;\n  color: #1e40af;\n}\n.content {\n  min-width: 0;\n}\n.site-footer {\n  margin-top: 20px;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 16px;\n  background: white;\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 16px;\n}\n.site-footer h4 {\n  margin: 0 0 8px;\n}\n.site-footer p {\n  margin: 4px 0;\n  color: #475569;\n}\n.site-footer a {\n  display: block;\n  color: #1f2937;\n  text-decoration: none;\n  margin: 4px 0;\n}\n.profile-menu-wrapper {\n  position: relative;\n}\n.profile-menu {\n  position: absolute;\n  top: calc(100% + 6px);\n  right: 0;\n  min-width: 180px;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  background: #ffffff;\n  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);\n  padding: 6px;\n  display: grid;\n  gap: 4px;\n}\n.profile-menu button {\n  border: 1px solid transparent;\n  background: transparent;\n  color: #0f172a;\n  text-align: left;\n  border-radius: 8px;\n  padding: 8px;\n  cursor: pointer;\n}\n.profile-menu button:hover {\n  background: #f1f5f9;\n}\n.menu {\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 14px;\n  background: white;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.menu-left,\n.menu-right {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.menu a {\n  border: 1px solid #d1d5db;\n  background: white;\n  border-radius: 8px;\n  padding: 8px 10px;\n  text-align: left;\n  cursor: pointer;\n  font-weight: 600;\n  text-decoration: none;\n  color: #1f2937;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n.menu a.active {\n  background: #2563eb;\n  border-color: #2563eb;\n  color: white;\n}\n.menu-trigger {\n  border: 1px solid #d1d5db;\n  background: white;\n  border-radius: 8px;\n  padding: 8px 10px;\n  cursor: pointer;\n  font-weight: 600;\n  color: #1f2937;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n.menu-logo {\n  width: 36px;\n  height: 36px;\n  border-radius: 0;\n  border: none;\n  display: block;\n  object-fit: cover;\n}\n.menu-right input {\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  padding: 8px 10px;\n  min-width: 180px;\n}\n.menu-right button {\n  border: 1px solid #2563eb;\n  background: #2563eb;\n  color: white;\n  border-radius: 8px;\n  padding: 8px 12px;\n  cursor: pointer;\n  font-weight: 600;\n}\n.menu-right .language-switcher {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #374151;\n}\n.menu-right select {\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  padding: 8px 10px;\n  background: white;\n  color: #1f2937;\n  font-weight: 600;\n}\n@media (max-width: 900px) {\n  .top-header {\n    height: auto;\n    padding: 10px;\n    flex-wrap: wrap;\n  }\n  .header-center {\n    order: 3;\n    width: 100%;\n  }\n  .layout.with-sidebar {\n    grid-template-columns: 1fr;\n  }\n  .sidebar {\n    position: static;\n  }\n  .menu-left,\n  .menu-right {\n    width: 100%;\n    margin: 0;\n  }\n  .menu-right input {\n    flex: 1;\n    min-width: 0;\n  }\n  .site-footer {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=app.css.map */\n"] }]
  }], () => [{ type: TranslateService }, { type: Router }, { type: AdminAuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 21 });
})();

// src/app/external-only.guard.ts
var externalOnlyGuard = () => {
  return true;
};

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    canActivate: [externalOnlyGuard],
    loadChildren: () => import("./chunk-RSBZ4HFW.js").then((module) => module.HomeModule)
  },
  {
    path: "home",
    canActivate: [externalOnlyGuard],
    loadChildren: () => import("./chunk-RSBZ4HFW.js").then((module) => module.HomeModule)
  },
  {
    path: "about",
    canActivate: [externalOnlyGuard],
    loadChildren: () => import("./chunk-Z2OXRXCU.js").then((module) => module.AboutusModule)
  },
  {
    path: "aboutus",
    redirectTo: "about",
    pathMatch: "full"
  },
  {
    path: "dashboard",
    redirectTo: "",
    pathMatch: "full"
  },
  {
    path: "career",
    canActivate: [externalOnlyGuard],
    loadChildren: () => import("./chunk-LDHHPPJL.js").then((module) => module.CareerModule)
  },
  {
    path: "contact",
    canActivate: [externalOnlyGuard],
    loadChildren: () => import("./chunk-FVXQTDW5.js").then((module) => module.ContactModule)
  },
  {
    path: "admin",
    loadChildren: () => import("./chunk-OZJSRKFL.js").then((module) => module.AdminModule)
  },
  {
    path: "services",
    canActivate: [externalOnlyGuard],
    loadChildren: () => import("./chunk-YVZ3SUYX.js").then((module) => module.DepartmentsModule)
  },
  {
    path: "departments",
    redirectTo: "services",
    pathMatch: "full"
  },
  {
    path: "doctors",
    loadChildren: () => import("./chunk-NII3RENT.js").then((module) => module.DoctorsModule)
  },
  {
    path: "privacy",
    canActivate: [externalOnlyGuard],
    loadComponent: () => import("./chunk-E4MKIU46.js").then((module) => module.PrivacyComponent)
  },
  {
    path: "terms",
    canActivate: [externalOnlyGuard],
    loadComponent: () => import("./chunk-E4MKIU46.js").then((module) => module.TermsComponent)
  },
  {
    path: "**",
    redirectTo: ""
  }
];

// src/app/auth.interceptor.ts
var authInterceptor = (req, next) => {
  const apiBaseUrl = inject(API_BASE_URL);
  const authService = inject(AdminAuthService);
  if (!req.url.startsWith(apiBaseUrl)) {
    return next(req);
  }
  const token = authService.getToken();
  if (!token) {
    return next(req.clone({
      withCredentials: true
    }));
  }
  return next(req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    },
    withCredentials: true
  }));
};

// src/app/http-error-logger.interceptor.ts
var httpErrorLoggerInterceptor = (req, next) => {
  return next(req).pipe(tap({
    error: (error) => {
      const status = error?.status ?? "unknown";
      const statusText = error?.statusText ?? "Unknown Error";
      const message = error?.message ?? "No additional details";
      console.error(`[HTTP ${req.method}] ${req.urlWithParams} -> ${status} ${statusText}. ${message}`, error);
    }
  }));
};

// src/app/app.module.ts
var _AppModule = class _AppModule {
};
_AppModule.\u0275fac = function AppModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppModule)();
};
_AppModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppModule, bootstrap: [App] });
_AppModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [
  provideHttpClient(withInterceptors([authInterceptor, httpErrorLoggerInterceptor])),
  ...provideTranslateHttpLoader({
    prefix: "./i18n/",
    suffix: ".json"
  }),
  {
    provide: API_BASE_URL,
    useValue: environment.apiBaseUrl
  }
], imports: [
  BrowserModule,
  HttpClientModule,
  FormsModule,
  RouterModule.forRoot(routes),
  TranslateModule.forRoot({
    defaultLanguage: "en",
    loader: {
      provide: TranslateLoader,
      useClass: TranslateHttpLoader
    }
  })
] });
var AppModule = _AppModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppModule, [{
    type: NgModule,
    args: [{
      declarations: [App],
      imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot(routes),
        TranslateModule.forRoot({
          defaultLanguage: "en",
          loader: {
            provide: TranslateLoader,
            useClass: TranslateHttpLoader
          }
        })
      ],
      providers: [
        provideHttpClient(withInterceptors([authInterceptor, httpErrorLoggerInterceptor])),
        ...provideTranslateHttpLoader({
          prefix: "./i18n/",
          suffix: ".json"
        }),
        {
          provide: API_BASE_URL,
          useValue: environment.apiBaseUrl
        }
      ],
      bootstrap: [App]
    }]
  }], null, null);
})();

// src/main.ts
platformBrowser().bootstrapModule(AppModule).catch((err) => console.error(err));
/*! Bundled license information:

@angular/common/locales/ka.js:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.dev/license
   *)
*/
//# sourceMappingURL=main.js.map
