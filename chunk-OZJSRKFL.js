import {
  AdminAuthService
} from "./chunk-SNWVSXOE.js";
import {
  Router,
  RouterModule
} from "./chunk-YVJY77VO.js";
import "./chunk-KAR7HZ5G.js";
import "./chunk-C4HPYBEJ.js";
import {
  CommonModule,
  NgModule,
  inject,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-JCLQJVGK.js";

// src/app/modules/admin/admin-auth.guard.ts
var adminAuthGuard = () => {
  const authService = inject(AdminAuthService);
  const router = inject(Router);
  if (authService.isLoggedIn() && authService.hasAnyRole(["Admin"])) {
    return true;
  }
  return router.createUrlTree(["/admin/login"]);
};

// src/app/modules/admin/admin-login.guard.ts
var adminLoginGuard = () => {
  const authService = inject(AdminAuthService);
  const router = inject(Router);
  if (authService.isLoggedIn() && authService.hasAnyRole(["Admin"])) {
    return router.createUrlTree(["/admin/dashboard"]);
  }
  return true;
};

// src/app/modules/admin/admin-routing.module.ts
var routes = [
  {
    path: "login",
    canActivate: [adminLoginGuard],
    loadComponent: () => import("./chunk-775Z6SAE.js").then((module) => module.AdminComponent)
  },
  {
    path: "dashboard",
    canActivate: [adminAuthGuard],
    loadComponent: () => import("./chunk-5VL2V5JC.js").then((module) => module.AdminHomeComponent)
  },
  {
    path: "home",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  {
    path: ":entity/list",
    canActivate: [adminAuthGuard],
    loadComponent: () => import("./chunk-RUICZ6BD.js").then((module) => module.AdminCrudComponent)
  },
  {
    path: ":entity/create",
    canActivate: [adminAuthGuard],
    loadComponent: () => import("./chunk-RUICZ6BD.js").then((module) => module.AdminCrudComponent)
  },
  {
    path: ":entity/edit",
    canActivate: [adminAuthGuard],
    loadComponent: () => import("./chunk-RUICZ6BD.js").then((module) => module.AdminCrudComponent)
  },
  {
    path: ":entity/edit/:id",
    canActivate: [adminAuthGuard],
    loadComponent: () => import("./chunk-RUICZ6BD.js").then((module) => module.AdminCrudComponent)
  },
  {
    path: ":entity/delete",
    canActivate: [adminAuthGuard],
    loadComponent: () => import("./chunk-RUICZ6BD.js").then((module) => module.AdminCrudComponent)
  },
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  {
    path: ":entity",
    redirectTo: ":entity/list"
  },
  {
    path: "**",
    redirectTo: "dashboard"
  }
];
var _AdminRoutingModule = class _AdminRoutingModule {
};
_AdminRoutingModule.\u0275fac = function AdminRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AdminRoutingModule)();
};
_AdminRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AdminRoutingModule });
_AdminRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var AdminRoutingModule = _AdminRoutingModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/modules/admin/admin.module.ts
var _AdminModule = class _AdminModule {
};
_AdminModule.\u0275fac = function AdminModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AdminModule)();
};
_AdminModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AdminModule });
_AdminModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, AdminRoutingModule] });
var AdminModule = _AdminModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, AdminRoutingModule]
    }]
  }], null, null);
})();
export {
  AdminModule
};
//# sourceMappingURL=chunk-OZJSRKFL.js.map
