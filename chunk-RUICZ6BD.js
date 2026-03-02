import {
  AdminAuthService
} from "./chunk-SNWVSXOE.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-YVJY77VO.js";
import {
  API_BASE_URL
} from "./chunk-KAR7HZ5G.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-HB7SU3DO.js";
import {
  HttpClient
} from "./chunk-C4HPYBEJ.js";
import {
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  __spreadProps,
  __spreadValues,
  catchError,
  forkJoin,
  inject,
  map,
  of,
  setClassMetadata,
  timeout,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
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

// src/app/modules/admin/components/admin-crud.component.ts
function AdminCrudComponent_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const clinic_r1 = ctx.$implicit;
    \u0275\u0275property("value", clinic_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("clinic ", clinic_r1);
  }
}
function AdminCrudComponent_p_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Select a record from the list and click Edit.");
    \u0275\u0275elementEnd();
  }
}
function AdminCrudComponent_p_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.message);
  }
}
function AdminCrudComponent_table_26_th_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1, "Roles");
    \u0275\u0275elementEnd();
  }
}
function AdminCrudComponent_table_26_th_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1, "Sync");
    \u0275\u0275elementEnd();
  }
}
function AdminCrudComponent_table_26_tr_20_td_11_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function AdminCrudComponent_table_26_tr_20_td_11_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(role_r5);
  }
}
function AdminCrudComponent_table_26_tr_20_td_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, AdminCrudComponent_table_26_tr_20_td_11_span_1_Template, 2, 0, "span", 11)(2, AdminCrudComponent_table_26_tr_20_td_11_span_2_Template, 2, 1, "span", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r4.roles.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", item_r4.roles);
  }
}
function AdminCrudComponent_table_26_tr_20_td_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td")(1, "span", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("syncing", ctx_r1.roleSyncState(item_r4.id) === "syncing")("success", ctx_r1.roleSyncState(item_r4.id) === "success")("partial", ctx_r1.roleSyncState(item_r4.id) === "partial")("failed", ctx_r1.roleSyncState(item_r4.id) === "failed");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.roleSyncLabel(item_r4.id), " ");
  }
}
function AdminCrudComponent_table_26_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 21);
    \u0275\u0275listener("click", function AdminCrudComponent_table_26_tr_20_Template_tr_click_0_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectRecord(item_r4));
    });
    \u0275\u0275elementStart(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, AdminCrudComponent_table_26_tr_20_td_11_Template, 3, 2, "td", 11)(12, AdminCrudComponent_table_26_tr_20_td_12_Template, 3, 9, "td", 11);
    \u0275\u0275elementStart(13, "td")(14, "span", 22);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 23);
    \u0275\u0275listener("click", function AdminCrudComponent_table_26_tr_20_Template_td_click_16_listener($event) {
      \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(17, "button", 24);
    \u0275\u0275listener("click", function AdminCrudComponent_table_26_tr_20_Template_button_click_17_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.edit(item_r4.id));
    });
    \u0275\u0275text(18, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 25);
    \u0275\u0275listener("click", function AdminCrudComponent_table_26_tr_20_Template_button_click_19_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.remove(item_r4.id));
    });
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", (ctx_r1.selectedRecord == null ? null : ctx_r1.selectedRecord.id) === item_r4.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.description || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.email || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.clinicId ?? "-");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.entity === "users");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.entity === "users");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("inactive", !item_r4.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r4.isActive ? "Active" : "Inactive");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSaving || ctx_r1.deletingIds.has(item_r4.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSaving || ctx_r1.deletingIds.has(item_r4.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.deletingIds.has(item_r4.id) ? "Deleting..." : "Delete", " ");
  }
}
function AdminCrudComponent_table_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 19)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "clinic");
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, AdminCrudComponent_table_26_th_13_Template, 2, 0, "th", 11)(14, AdminCrudComponent_table_26_th_14_Template, 2, 0, "th", 11);
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275template(20, AdminCrudComponent_table_26_tr_20_Template, 21, 15, "tr", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275property("ngIf", ctx_r1.entity === "users");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.entity === "users");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r1.filteredRecords);
  }
}
function AdminCrudComponent_p_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "No records yet.");
    \u0275\u0275elementEnd();
  }
}
function AdminCrudComponent_aside_28_p_13_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function AdminCrudComponent_aside_28_p_13_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(role_r6);
  }
}
function AdminCrudComponent_aside_28_p_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p")(1, "strong");
    \u0275\u0275text(2, "Roles:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AdminCrudComponent_aside_28_p_13_span_3_Template, 2, 0, "span", 11)(4, AdminCrudComponent_aside_28_p_13_span_4_Template, 2, 1, "span", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.selectedRecord.roles.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.selectedRecord.roles);
  }
}
function AdminCrudComponent_aside_28_p_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p")(1, "strong");
    \u0275\u0275text(2, "Role Sync:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 28);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("syncing", ctx_r1.roleSyncState(ctx_r1.selectedRecord.id) === "syncing")("success", ctx_r1.roleSyncState(ctx_r1.selectedRecord.id) === "success")("partial", ctx_r1.roleSyncState(ctx_r1.selectedRecord.id) === "partial")("failed", ctx_r1.roleSyncState(ctx_r1.selectedRecord.id) === "failed");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.roleSyncLabel(ctx_r1.selectedRecord.id), " ");
  }
}
function AdminCrudComponent_aside_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "aside", 29)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p")(6, "strong");
    \u0275\u0275text(7, "Status:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p")(10, "strong");
    \u0275\u0275text(11, "clinic:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, AdminCrudComponent_aside_28_p_13_Template, 5, 2, "p", 11)(14, AdminCrudComponent_aside_28_p_14_Template, 5, 9, "p", 11);
    \u0275\u0275elementStart(15, "p")(16, "strong");
    \u0275\u0275text(17, "Description:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedRecord.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedRecord.email || "No email");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedRecord.isActive ? "Active" : "Inactive");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedRecord.clinicId ?? "-");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.entity === "users");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.entity === "users");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedRecord.description || "-");
  }
}
function AdminCrudComponent_form_29_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "label", 45);
    \u0275\u0275text(2, "Roles (comma separated)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function AdminCrudComponent_form_29_ng_container_20_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.rolesCsv, $event) || (ctx_r1.rolesCsv = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.rolesCsv);
  }
}
function AdminCrudComponent_form_29_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function AdminCrudComponent_form_29_button_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.resetForm());
    });
    \u0275\u0275text(1, "Cancel");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.isSaving);
  }
}
function AdminCrudComponent_form_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 30);
    \u0275\u0275listener("ngSubmit", function AdminCrudComponent_form_29_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275elementStart(1, "label", 31);
    \u0275\u0275text(2, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function AdminCrudComponent_form_29_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.name, $event) || (ctx_r1.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "label", 33);
    \u0275\u0275text(5, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "textarea", 34);
    \u0275\u0275twoWayListener("ngModelChange", function AdminCrudComponent_form_29_Template_textarea_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.description, $event) || (ctx_r1.form.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "label", 35);
    \u0275\u0275text(8, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function AdminCrudComponent_form_29_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.email, $event) || (ctx_r1.form.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "label", 37);
    \u0275\u0275text(11, "clinic Id");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 38);
    \u0275\u0275twoWayListener("ngModelChange", function AdminCrudComponent_form_29_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.clinicId, $event) || (ctx_r1.form.clinicId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "label", 39);
    \u0275\u0275text(14, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "select", 40);
    \u0275\u0275twoWayListener("ngModelChange", function AdminCrudComponent_form_29_Template_select_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.isActive, $event) || (ctx_r1.form.isActive = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(16, "option", 41);
    \u0275\u0275text(17, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 41);
    \u0275\u0275text(19, "Inactive");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, AdminCrudComponent_form_29_ng_container_20_Template, 4, 1, "ng-container", 11);
    \u0275\u0275elementStart(21, "div", 42)(22, "button", 43);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, AdminCrudComponent_form_29_button_24_Template, 2, 1, "button", 44);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.name);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.description);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.email);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.clinicId);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.isActive);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", false);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.entity === "users");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSaving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.isSaving ? "Saving..." : ctx_r1.isEditMode ? "Update" : "Create");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isEditMode || ctx_r1.currentAction === "create");
  }
}
var _AdminCrudComponent = class _AdminCrudComponent {
  constructor(route, router, http, authService) {
    this.route = route;
    this.router = router;
    this.http = http;
    this.authService = authService;
    this.entity = "";
    this.title = "";
    this.currentAction = "list";
    this.records = [];
    this.form = {
      name: "",
      description: "",
      status: "Active",
      clinicId: void 0,
      email: "",
      isActive: true,
      roles: []
    };
    this.editId = null;
    this.selectedRecord = null;
    this.searchText = "";
    this.statusFilter = "all";
    this.clinicFilter = "all";
    this.rolesCsv = "";
    this.message = "";
    this.isSaving = false;
    this.deletingIds = /* @__PURE__ */ new Set();
    this.authFailed = false;
    this.roleCatalog = /* @__PURE__ */ new Map();
    this.roleNameToId = /* @__PURE__ */ new Map();
    this.roleSyncStateByUserId = /* @__PURE__ */ new Map();
    this.apiBaseUrl = inject(API_BASE_URL);
    this.requestTimeoutMs = 1e4;
  }
  get isEditMode() {
    return this.editId !== null;
  }
  get showForm() {
    if (this.currentAction === "create") {
      return true;
    }
    return this.currentAction === "edit" && this.editId !== null;
  }
  get filteredRecords() {
    const search = this.searchText.trim().toLowerCase();
    return this.records.filter((record) => {
      const searchOk = !search || record.name.toLowerCase().includes(search) || record.description.toLowerCase().includes(search) || record.email.toLowerCase().includes(search);
      const statusOk = this.statusFilter === "all" || this.statusFilter === "active" && record.isActive || this.statusFilter === "inactive" && !record.isActive;
      const clinicOk = this.clinicFilter === "all" || String(record.clinicId ?? "") === this.clinicFilter;
      return searchOk && statusOk && clinicOk;
    });
  }
  get clinicOptions() {
    const clinics = this.records.map((record) => record.clinicId).filter((value) => typeof value === "number").map((value) => String(value));
    return Array.from(new Set(clinics)).sort((a, b) => Number(a) - Number(b));
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.entity = params.get("entity") ?? "";
      const segments = this.router.url.split("?")[0].split("/").filter(Boolean);
      this.currentAction = segments.length > 2 ? segments[2] : "list";
      const editIdParam = params.get("id");
      this.editId = editIdParam ? Number(editIdParam) : null;
      this.title = `${this.toTitle(this.entity)} CRUD`;
      this.loadRecords();
      this.applyEditSelection();
    });
  }
  applyEditSelection() {
    if (this.editId !== null) {
      const found = this.records.find((record) => record.id === this.editId);
      if (found) {
        this.form = {
          name: found.name,
          description: found.description,
          status: found.status,
          clinicId: found.clinicId,
          email: found.email,
          isActive: found.isActive,
          roles: [...found.roles]
        };
        this.rolesCsv = found.roles.join(", ");
        this.selectedRecord = found;
      }
    } else {
      this.resetFormValues();
    }
  }
  save() {
    if (this.isSaving) {
      return;
    }
    if (!this.form.name.trim()) {
      return;
    }
    this.isSaving = true;
    const roles = this.entity === "users" ? this.parseRolesCsv(this.rolesCsv) : [];
    const fallbackId = this.editId ?? (this.records.length ? Math.max(...this.records.map((record) => record.id)) + 1 : 1);
    const draftRecord = {
      id: fallbackId,
      name: this.form.name.trim(),
      description: this.form.description.trim(),
      email: this.form.email.trim(),
      clinicId: this.form.clinicId,
      isActive: this.form.isActive,
      status: this.form.isActive ? "Active" : "Inactive",
      roles
    };
    const payload = this.toApiPayload(draftRecord);
    if (this.editId !== null) {
      this.updateRecordWithFallback(this.editId, payload).subscribe((saved) => {
        if (saved) {
          this.message = "Record updated.";
          this.loadRecords();
          if (this.entity === "users") {
            this.syncUserRolesToApi(draftRecord);
          }
          this.isSaving = false;
          this.resetForm();
          return;
        }
        this.records = this.records.map((record) => record.id === this.editId ? draftRecord : record);
        this.persistRecords();
        this.selectedRecord = this.records.find((item) => item.id === this.editId) || null;
        this.message = "API update endpoint not available. Updated locally.";
        if (this.entity === "users" && this.selectedRecord) {
          this.syncUserRolesToApi(this.selectedRecord);
        }
        this.isSaving = false;
        this.resetForm();
      });
      return;
    }
    this.createRecordWithFallback(payload).subscribe((saved) => {
      if (saved) {
        this.message = "Record created.";
        this.loadRecords();
        this.isSaving = false;
        this.resetForm();
        return;
      }
      this.records = [...this.records, draftRecord];
      this.persistRecords();
      this.selectedRecord = draftRecord;
      this.message = "API create endpoint not available. Saved locally.";
      if (this.entity === "users") {
        this.syncUserRolesToApi(draftRecord);
      }
      this.isSaving = false;
      this.resetForm();
    });
  }
  edit(id) {
    this.router.navigate(["/admin", this.entity, "edit", id]);
  }
  remove(id) {
    if (this.isSaving || this.deletingIds.has(id)) {
      return;
    }
    this.deletingIds.add(id);
    this.deleteRecordWithFallback(id).subscribe((deleted) => {
      this.records = this.records.filter((record) => record.id !== id);
      this.persistRecords();
      this.message = deleted ? "Record deleted." : "API delete endpoint not available. Removed locally.";
      this.deletingIds.delete(id);
      if (this.editId === id) {
        this.resetForm();
      }
    });
  }
  resetForm() {
    this.router.navigate(["/admin", this.entity, "list"]);
    this.editId = null;
    this.resetFormValues();
  }
  startCreate() {
    this.router.navigate(["/admin", this.entity, "create"]);
  }
  selectRecord(record) {
    this.selectedRecord = record;
  }
  roleSyncState(userId) {
    return this.roleSyncStateByUserId.get(userId) ?? "idle";
  }
  roleSyncLabel(userId) {
    const state = this.roleSyncState(userId);
    if (state === "syncing") {
      return "Syncing";
    }
    if (state === "success") {
      return "Synced";
    }
    if (state === "partial") {
      return "Partial";
    }
    if (state === "failed") {
      return "Failed";
    }
    return "-";
  }
  storageKey() {
    return `admin-crud-${this.entity}`;
  }
  loadRecords() {
    this.records = [];
    this.authFailed = false;
    this.loadRecordsFromApi();
  }
  loadRecordsFromApi() {
    const endpoints = this.resolveEntityEndpoints();
    this.loadRecordsFromEndpoint(endpoints, 0);
  }
  loadRecordsFromEndpoint(endpoints, index) {
    if (index >= endpoints.length) {
      this.loadRecordsFromStorage();
      this.message = this.records.length > 0 ? "Showing cached data." : "Failed to load data from API.";
      this.applyEditSelection();
      return;
    }
    this.http.get(`${this.apiBaseUrl}/${endpoints[index]}`, { withCredentials: true }).pipe(timeout(this.requestTimeoutMs), map((response) => this.extractArrayPayload(response)), map((items) => items.map((item, itemIndex) => this.toCrudRecord(item, itemIndex))), catchError((error) => {
      if (error?.status === 401) {
        this.handleUnauthorized();
        return of(null);
      }
      console.error(`[Admin CRUD] Failed to load ${endpoints[index]}`, error);
      return of(null);
    })).subscribe((items) => {
      if (items === null) {
        if (this.authFailed) {
          return;
        }
        this.loadRecordsFromEndpoint(endpoints, index + 1);
        return;
      }
      this.records = items;
      this.persistRecords();
      this.selectedRecord = this.records.length > 0 ? this.records[0] : null;
      this.rolesCsv = this.selectedRecord?.roles.join(", ") ?? "";
      this.applyEditSelection();
      this.message = "";
      if (this.entity === "users") {
        this.loadUserRolesFromApi();
      }
    });
  }
  loadUserRolesFromApi() {
    forkJoin({
      roles: this.getEndpointArray(this.resolveRoleEndpoints()),
      userRoles: this.getEndpointArray(this.resolveUserRoleEndpoints())
    }).subscribe(({ roles, userRoles }) => {
      const roleRecords = roles.map((item) => this.toRoleRecord(item)).filter((item) => item !== null);
      const assignmentRecords = userRoles.map((item) => this.toUserRoleAssignment(item)).filter((item) => item !== null);
      this.roleCatalog = /* @__PURE__ */ new Map();
      this.roleNameToId = /* @__PURE__ */ new Map();
      for (const role of roleRecords) {
        this.roleCatalog.set(role.id, role.name);
        this.roleNameToId.set(role.name.toLowerCase(), role.id);
      }
      const rolesByUser = /* @__PURE__ */ new Map();
      for (const assignment of assignmentRecords) {
        const roleName = this.roleCatalog.get(assignment.roleId);
        if (!roleName) {
          continue;
        }
        const existing = rolesByUser.get(assignment.userId) ?? [];
        if (!existing.includes(roleName)) {
          existing.push(roleName);
        }
        rolesByUser.set(assignment.userId, existing);
      }
      this.records = this.records.map((record) => __spreadProps(__spreadValues({}, record), {
        roles: rolesByUser.get(record.id) ?? record.roles
      }));
      if (this.selectedRecord) {
        this.selectedRecord = this.records.find((record) => record.id === this.selectedRecord.id) ?? this.selectedRecord;
      }
      if (this.isEditMode && this.selectedRecord) {
        this.rolesCsv = this.selectedRecord.roles.join(", ");
      }
    });
  }
  syncUserRolesToApi(user) {
    this.roleSyncStateByUserId.set(user.id, "syncing");
    const desiredRoleNames = user.roles;
    forkJoin({
      roles: this.getEndpointArray(this.resolveRoleEndpoints()),
      userRoles: this.getEndpointArray(this.resolveUserRoleEndpoints())
    }).subscribe(({ roles, userRoles }) => {
      const roleRecords = roles.map((item) => this.toRoleRecord(item)).filter((item) => item !== null);
      const assignmentRecords = userRoles.map((item) => this.toUserRoleAssignment(item)).filter((item) => item !== null).filter((item) => item.userId === user.id);
      const roleNameToId = /* @__PURE__ */ new Map();
      for (const role of roleRecords) {
        roleNameToId.set(role.name.toLowerCase(), role.id);
      }
      const desiredRoleIds = desiredRoleNames.map((roleName) => roleNameToId.get(roleName.toLowerCase())).filter((value) => typeof value === "number");
      const currentRoleIds = assignmentRecords.map((assignment) => assignment.roleId);
      const toAdd = desiredRoleIds.filter((roleId) => !currentRoleIds.includes(roleId));
      const toRemove = assignmentRecords.filter((assignment) => !desiredRoleIds.includes(assignment.roleId));
      const addRequests = toAdd.map((roleId) => this.addUserRole(user.id, roleId));
      const removeRequests = toRemove.map((assignment) => this.removeUserRole(assignment.id));
      const requests = [...addRequests, ...removeRequests];
      if (requests.length === 0) {
        this.roleSyncStateByUserId.set(user.id, "success");
        this.loadUserRolesFromApi();
        return;
      }
      forkJoin(requests).subscribe((results) => {
        const succeeded = results.filter((result) => result).length;
        if (succeeded === results.length) {
          this.roleSyncStateByUserId.set(user.id, "success");
          this.message = "User roles synced with API.";
          this.loadUserRolesFromApi();
          return;
        }
        if (succeeded === 0) {
          this.roleSyncStateByUserId.set(user.id, "failed");
          this.message = "Failed to sync some role assignments with API.";
          this.loadUserRolesFromApi();
          return;
        }
        this.roleSyncStateByUserId.set(user.id, "partial");
        this.message = "Partially synced role assignments with API.";
        this.loadUserRolesFromApi();
      });
    });
  }
  addUserRole(userId, roleId, index = 0) {
    const endpoints = this.resolveUserRoleEndpoints();
    if (index >= endpoints.length) {
      return of(false);
    }
    return this.http.post(`${this.apiBaseUrl}/${endpoints[index]}`, { UserId: userId, RoleId: roleId }, { withCredentials: true }).pipe(timeout(this.requestTimeoutMs), map(() => true), catchError(() => this.addUserRole(userId, roleId, index + 1)));
  }
  removeUserRole(assignmentId, index = 0) {
    const endpoints = this.resolveUserRoleEndpoints();
    if (index >= endpoints.length) {
      return of(false);
    }
    return this.http.delete(`${this.apiBaseUrl}/${endpoints[index]}/${assignmentId}`, { withCredentials: true }).pipe(timeout(this.requestTimeoutMs), map(() => true), catchError(() => this.removeUserRole(assignmentId, index + 1)));
  }
  getEndpointArray(endpoints, index = 0) {
    if (index >= endpoints.length) {
      return of([]);
    }
    return this.http.get(`${this.apiBaseUrl}/${endpoints[index]}`, { withCredentials: true }).pipe(timeout(this.requestTimeoutMs), map((payload) => this.extractArrayPayload(payload)), catchError(() => this.getEndpointArray(endpoints, index + 1)));
  }
  resolveRoleEndpoints() {
    return ["roles", "role"];
  }
  resolveUserRoleEndpoints() {
    return ["userroles", "userrole"];
  }
  toRoleRecord(item) {
    const id = this.toOptionalNumber(item["Id"] ?? item["id"]);
    const name = this.pickString(item, ["Name", "name", "Title", "title"]);
    if (!id || !name) {
      return null;
    }
    return { id, name };
  }
  toUserRoleAssignment(item) {
    const id = this.toOptionalNumber(item["Id"] ?? item["id"]);
    const userId = this.toOptionalNumber(item["UserId"] ?? item["userId"]);
    const roleId = this.toOptionalNumber(item["RoleId"] ?? item["roleId"]);
    if (!id || !userId || !roleId) {
      return null;
    }
    return { id, userId, roleId };
  }
  handleUnauthorized() {
    if (this.authFailed) {
      return;
    }
    this.authFailed = true;
    this.message = "Session expired. Please log in again.";
    this.authService.logout().subscribe(() => {
      this.router.navigate(["/admin"]);
    });
  }
  loadRecordsFromStorage() {
    const raw = localStorage.getItem(this.storageKey());
    if (!raw) {
      this.records = [];
      return;
    }
    try {
      const parsed = JSON.parse(raw);
      this.records = Array.isArray(parsed) ? parsed : [];
    } catch {
      this.records = [];
    }
  }
  resolveEntityEndpoints() {
    const candidates = [this.entity];
    if (this.entity === "users") {
      candidates.push("user");
    }
    if (this.entity.endsWith("s") && this.entity.length > 1) {
      candidates.push(this.entity.slice(0, -1));
    }
    return Array.from(new Set(candidates));
  }
  toApiPayload(record) {
    return {
      Id: record.id,
      Name: record.name,
      Description: record.description,
      Email: record.email,
      clinicId: record.clinicId,
      IsActive: record.isActive,
      Status: record.status,
      Roles: record.roles
    };
  }
  createRecordWithFallback(payload, index = 0) {
    const endpoints = this.resolveEntityEndpoints();
    if (index >= endpoints.length) {
      return of(false);
    }
    return this.http.post(`${this.apiBaseUrl}/${endpoints[index]}`, payload, { withCredentials: true }).pipe(timeout(this.requestTimeoutMs), map(() => true), catchError((error) => {
      if (error?.status === 401) {
        this.handleUnauthorized();
        return of(false);
      }
      return this.createRecordWithFallback(payload, index + 1);
    }));
  }
  updateRecordWithFallback(recordId, payload, index = 0) {
    const endpoints = this.resolveEntityEndpoints().map((endpoint) => `${endpoint}/${recordId}`);
    return this.updateRecordWithPut(endpoints, payload, 0, index);
  }
  updateRecordWithPut(endpoints, payload, index = 0, startIndex = 0) {
    const currentIndex = index + startIndex;
    if (currentIndex >= endpoints.length) {
      return this.updateRecordWithPatch(endpoints, payload, 0);
    }
    return this.http.put(`${this.apiBaseUrl}/${endpoints[currentIndex]}`, payload, { withCredentials: true }).pipe(timeout(this.requestTimeoutMs), map(() => true), catchError((error) => {
      if (error?.status === 401) {
        this.handleUnauthorized();
        return of(false);
      }
      return this.updateRecordWithPut(endpoints, payload, index + 1, startIndex);
    }));
  }
  updateRecordWithPatch(endpoints, payload, index = 0) {
    if (index >= endpoints.length) {
      return of(false);
    }
    return this.http.patch(`${this.apiBaseUrl}/${endpoints[index]}`, payload, { withCredentials: true }).pipe(timeout(this.requestTimeoutMs), map(() => true), catchError((error) => {
      if (error?.status === 401) {
        this.handleUnauthorized();
        return of(false);
      }
      return this.updateRecordWithPatch(endpoints, payload, index + 1);
    }));
  }
  deleteRecordWithFallback(recordId, index = 0) {
    const endpoints = this.resolveEntityEndpoints();
    if (index >= endpoints.length) {
      return of(false);
    }
    return this.http.delete(`${this.apiBaseUrl}/${endpoints[index]}/${recordId}`, { withCredentials: true }).pipe(timeout(this.requestTimeoutMs), map(() => true), catchError((error) => {
      if (error?.status === 401) {
        this.handleUnauthorized();
        return of(false);
      }
      return this.deleteRecordWithFallback(recordId, index + 1);
    }));
  }
  extractArrayPayload(payload) {
    return this.findFirstArray(payload);
  }
  toCrudRecord(item, index) {
    const idValue = item["Id"] ?? item["id"];
    const id = this.toOptionalNumber(idValue) ?? index + 1;
    const firstName = this.pickString(item, ["FirstName", "firstName"]);
    const lastName = this.pickString(item, ["LastName", "lastName"]);
    const fullName = `${firstName} ${lastName}`.trim();
    const name = this.pickString(item, ["Name", "name"]) || this.pickString(item, ["Username", "username"]) || this.pickString(item, ["FullName", "fullName"]) || fullName || this.pickString(item, ["Title", "title"]) || this.pickString(item, ["InvoiceNumber", "invoiceNumber"]) || this.pickString(item, ["MedicationName", "medicationName"]) || this.pickString(item, ["TestName", "testName"]) || this.pickString(item, ["ReferenceNumber", "referenceNumber"]) || `Item ${id}`;
    const description = this.pickString(item, ["Description", "description"]) || this.pickString(item, ["Status", "status"]) || this.pickString(item, ["Position", "position"]) || this.pickString(item, ["Reason", "reason"]) || this.pickString(item, ["Notes", "notes"]) || this.pickString(item, ["Email", "email"]) || "";
    const status = this.pickString(item, ["Status", "status"]) || "";
    const email = this.pickString(item, ["Email", "email"]);
    const clinicId = this.toOptionalNumber(item["clinicId"] ?? item["clinicId"]);
    const isActive = this.toBoolean(item["IsActive"] ?? item["isActive"], status);
    const roles = this.extractRoles(item);
    return {
      id,
      name,
      description,
      status: status || (isActive ? "Active" : "Inactive"),
      clinicId,
      email,
      isActive,
      roles
    };
  }
  extractRoles(item) {
    const directCandidates = [item["Role"], item["role"], item["Roles"], item["roles"]];
    for (const candidate of directCandidates) {
      const parsed = this.parseRolesValue(candidate);
      if (parsed.length > 0) {
        return parsed;
      }
    }
    const nestedCandidates = [item["UserRoles"], item["userRoles"], item["RoleNames"], item["roleNames"]];
    for (const candidate of nestedCandidates) {
      const parsed = this.parseRolesValue(candidate);
      if (parsed.length > 0) {
        return parsed;
      }
    }
    return [];
  }
  parseRolesValue(value) {
    if (typeof value === "string") {
      return this.parseRolesCsv(value);
    }
    if (Array.isArray(value)) {
      const mapped = value.map((entry) => {
        if (typeof entry === "string") {
          return entry;
        }
        if (entry && typeof entry === "object") {
          const record = entry;
          const roleName = this.pickString(record, ["Name", "name", "RoleName", "roleName", "Title", "title"]);
          return roleName;
        }
        return "";
      }).filter((entry) => entry.trim().length > 0).map((entry) => entry.trim());
      return Array.from(new Set(mapped));
    }
    return [];
  }
  parseRolesCsv(value) {
    const parsed = value.split(",").map((entry) => entry.trim()).filter((entry) => entry.length > 0);
    return Array.from(new Set(parsed));
  }
  findFirstArray(value) {
    if (Array.isArray(value)) {
      return value;
    }
    if (!value || typeof value !== "object") {
      return [];
    }
    const record = value;
    const keys = ["data", "items", "results", "rows", "value", "$values"];
    for (const key of keys) {
      const nested = record[key];
      if (Array.isArray(nested)) {
        return nested;
      }
    }
    for (const nestedValue of Object.values(record)) {
      const found = this.findFirstArray(nestedValue);
      if (found.length > 0) {
        return found;
      }
    }
    return [];
  }
  pickString(item, keys) {
    for (const key of keys) {
      const value = item[key];
      if (typeof value === "string" && value.trim().length > 0) {
        return value;
      }
    }
    return "";
  }
  toOptionalNumber(value) {
    if (typeof value === "number" && Number.isFinite(value)) {
      return value;
    }
    if (typeof value === "string" && value.trim().length > 0) {
      const parsed = Number(value);
      if (Number.isFinite(parsed)) {
        return parsed;
      }
    }
    return void 0;
  }
  toBoolean(value, statusText) {
    if (typeof value === "boolean") {
      return value;
    }
    if (typeof value === "number") {
      return value === 1;
    }
    if (typeof value === "string") {
      const normalized = value.trim().toLowerCase();
      if (normalized === "1" || normalized === "true" || normalized === "active") {
        return true;
      }
      if (normalized === "0" || normalized === "false" || normalized === "inactive") {
        return false;
      }
    }
    return !statusText.toLowerCase().includes("inactive");
  }
  persistRecords() {
    localStorage.setItem(this.storageKey(), JSON.stringify(this.records));
  }
  resetFormValues() {
    this.form = {
      name: "",
      description: "",
      status: "Active",
      clinicId: void 0,
      email: "",
      isActive: true,
      roles: []
    };
    this.rolesCsv = "";
  }
  toTitle(value) {
    if (!value) {
      return "Admin";
    }
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
};
_AdminCrudComponent.\u0275fac = function AdminCrudComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AdminCrudComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(AdminAuthService));
};
_AdminCrudComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminCrudComponent, selectors: [["app-admin-crud"]], decls: 30, vars: 13, consts: [[1, "admin-crud"], [1, "toolbar"], ["type", "button", 3, "click"], [1, "filters"], ["type", "text", "placeholder", "Search name, email, description", "aria-label", "Search records", 3, "ngModelChange", "ngModel"], ["aria-label", "Filter by status", 3, "ngModelChange", "ngModel"], ["value", "all"], ["value", "active"], ["value", "inactive"], ["aria-label", "Filter by clinic", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "message", 4, "ngIf"], [1, "layout"], ["class", "crud-table", 4, "ngIf"], ["class", "detail", 4, "ngIf"], ["class", "crud-form", 3, "ngSubmit", 4, "ngIf"], [3, "value"], [1, "message"], [1, "crud-table"], [3, "selected", "click", 4, "ngFor", "ngForOf"], [3, "click"], [1, "status"], [1, "actions-cell", 3, "click"], ["type", "button", 1, "secondary", 3, "click", "disabled"], ["type", "button", 1, "danger", 3, "click", "disabled"], ["class", "role-pill", 4, "ngFor", "ngForOf"], [1, "role-pill"], [1, "sync-pill"], [1, "detail"], [1, "crud-form", 3, "ngSubmit"], ["for", "crud-name"], ["id", "crud-name", "name", "name", "required", "", 3, "ngModelChange", "ngModel"], ["for", "crud-description"], ["id", "crud-description", "name", "description", 3, "ngModelChange", "ngModel"], ["for", "crud-email"], ["id", "crud-email", "name", "email", 3, "ngModelChange", "ngModel"], ["for", "crud-clinic"], ["id", "crud-clinic", "type", "number", "name", "clinicId", 3, "ngModelChange", "ngModel"], ["for", "crud-active"], ["id", "crud-active", "name", "isActive", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [1, "actions"], ["type", "submit", 3, "disabled"], ["type", "button", "class", "secondary", 3, "disabled", "click", 4, "ngIf"], ["for", "crud-roles"], ["id", "crud-roles", "name", "rolesCsv", "placeholder", "Admin, Doctor", 3, "ngModelChange", "ngModel"]], template: function AdminCrudComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "header", 1)(2, "div")(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 2);
    \u0275\u0275listener("click", function AdminCrudComponent_Template_button_click_7_listener() {
      return ctx.startCreate();
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 3)(10, "input", 4);
    \u0275\u0275twoWayListener("ngModelChange", function AdminCrudComponent_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
      return $event;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 5);
    \u0275\u0275twoWayListener("ngModelChange", function AdminCrudComponent_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.statusFilter, $event) || (ctx.statusFilter = $event);
      return $event;
    });
    \u0275\u0275elementStart(12, "option", 6);
    \u0275\u0275text(13, "All Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 7);
    \u0275\u0275text(15, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 8);
    \u0275\u0275text(17, "Inactive");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "select", 9);
    \u0275\u0275twoWayListener("ngModelChange", function AdminCrudComponent_Template_select_ngModelChange_18_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.clinicFilter, $event) || (ctx.clinicFilter = $event);
      return $event;
    });
    \u0275\u0275elementStart(19, "option", 6);
    \u0275\u0275text(20, "All clinics");
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, AdminCrudComponent_option_21_Template, 2, 2, "option", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, AdminCrudComponent_p_22_Template, 2, 0, "p", 11)(23, AdminCrudComponent_p_23_Template, 2, 1, "p", 12);
    \u0275\u0275elementStart(24, "div", 13)(25, "div");
    \u0275\u0275template(26, AdminCrudComponent_table_26_Template, 21, 3, "table", 14)(27, AdminCrudComponent_p_27_Template, 2, 0, "p", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, AdminCrudComponent_aside_28_Template, 19, 7, "aside", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, AdminCrudComponent_form_29_Template, 25, 11, "form", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx.toTitle(ctx.entity), " operations workspace");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("+ New ", ctx.toTitle(ctx.entity));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx.statusFilter);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx.clinicFilter);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx.clinicOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.currentAction === "edit" && !ctx.isEditMode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.message);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.filteredRecords.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.filteredRecords.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.selectedRecord);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.showForm);
  }
}, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, RouterModule], styles: ["\n\n.admin-crud[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  background: white;\n  padding: 16px;\n  display: grid;\n  gap: 12px;\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.toolbar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.toolbar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: #64748b;\n}\n.filters[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr;\n  gap: 8px;\n}\n.crud-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 8px;\n  max-width: 520px;\n}\n.crud-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.crud-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], \n.crud-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.filters[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  padding: 8px 10px;\n}\n.layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  gap: 12px;\n}\n.detail[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  padding: 10px;\n  background: #f8fafc;\n}\n.detail[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n}\n.detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-top: 4px;\n}\nbutton[_ngcontent-%COMP%] {\n  border: 1px solid #2563eb;\n  background: #2563eb;\n  color: white;\n  border-radius: 8px;\n  padding: 8px 12px;\n  cursor: pointer;\n  font-weight: 600;\n}\nbutton.secondary[_ngcontent-%COMP%] {\n  border-color: #d1d5db;\n  background: white;\n  color: #1f2937;\n}\nbutton.danger[_ngcontent-%COMP%] {\n  border-color: #dc2626;\n  background: #dc2626;\n}\n.crud-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.crud-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.crud-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  padding: 8px;\n  text-align: left;\n}\n.crud-table[_ngcontent-%COMP%]   tr.selected[_ngcontent-%COMP%] {\n  background: #eff6ff;\n}\n.status[_ngcontent-%COMP%] {\n  border: 1px solid #16a34a;\n  color: #166534;\n  border-radius: 999px;\n  padding: 2px 8px;\n  font-size: 0.75rem;\n}\n.status.inactive[_ngcontent-%COMP%] {\n  border-color: #94a3b8;\n  color: #475569;\n}\n.role-pill[_ngcontent-%COMP%] {\n  border: 1px solid #cbd5e1;\n  border-radius: 999px;\n  padding: 2px 8px;\n  font-size: 0.75rem;\n  margin-right: 4px;\n  display: inline-block;\n}\n.sync-pill[_ngcontent-%COMP%] {\n  border: 1px solid #cbd5e1;\n  border-radius: 999px;\n  padding: 2px 8px;\n  font-size: 0.75rem;\n  display: inline-block;\n  color: #334155;\n}\n.sync-pill.syncing[_ngcontent-%COMP%] {\n  border-color: #93c5fd;\n  background: #eff6ff;\n  color: #1d4ed8;\n}\n.sync-pill.success[_ngcontent-%COMP%] {\n  border-color: #86efac;\n  background: #f0fdf4;\n  color: #166534;\n}\n.sync-pill.partial[_ngcontent-%COMP%] {\n  border-color: #fcd34d;\n  background: #fffbeb;\n  color: #92400e;\n}\n.sync-pill.failed[_ngcontent-%COMP%] {\n  border-color: #fca5a5;\n  background: #fef2f2;\n  color: #991b1b;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.message[_ngcontent-%COMP%] {\n  margin: 6px 0;\n  color: #1d4ed8;\n}\n@media (max-width: 1100px) {\n  .layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .filters[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=admin-crud.component.css.map */"] });
var AdminCrudComponent = _AdminCrudComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminCrudComponent, [{
    type: Component,
    args: [{ selector: "app-admin-crud", standalone: true, imports: [CommonModule, FormsModule, RouterModule], template: `
    <section class="admin-crud">
      <header class="toolbar">
        <div>
          <h2>{{ title }}</h2>
          <p>{{ toTitle(entity) }} operations workspace</p>
        </div>
        <button type="button" (click)="startCreate()">+ New {{ toTitle(entity) }}</button>
      </header>

      <div class="filters">
        <input type="text" [(ngModel)]="searchText" placeholder="Search name, email, description" aria-label="Search records" />
        <select [(ngModel)]="statusFilter" aria-label="Filter by status">
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <select [(ngModel)]="clinicFilter" aria-label="Filter by clinic">
          <option value="all">All clinics</option>
          <option *ngFor="let clinic of clinicOptions" [value]="clinic">clinic {{ clinic }}</option>
        </select>
      </div>

      <p *ngIf="currentAction === 'edit' && !isEditMode">Select a record from the list and click Edit.</p>
      <p *ngIf="message" class="message">{{ message }}</p>

      <div class="layout">
        <div>
          <table *ngIf="filteredRecords.length > 0" class="crud-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Email</th>
                <th>clinic</th>
                <th *ngIf="entity === 'users'">Roles</th>
                <th *ngIf="entity === 'users'">Sync</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let item of filteredRecords" (click)="selectRecord(item)" [class.selected]="selectedRecord?.id === item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.description || '-' }}</td>
                <td>{{ item.email || '-' }}</td>
                <td>{{ item.clinicId ?? '-' }}</td>
                <td *ngIf="entity === 'users'">
                  <span *ngIf="item.roles.length === 0">-</span>
                  <span *ngFor="let role of item.roles" class="role-pill">{{ role }}</span>
                </td>
                <td *ngIf="entity === 'users'">
                  <span class="sync-pill" [class.syncing]="roleSyncState(item.id) === 'syncing'" [class.success]="roleSyncState(item.id) === 'success'" [class.partial]="roleSyncState(item.id) === 'partial'" [class.failed]="roleSyncState(item.id) === 'failed'">
                    {{ roleSyncLabel(item.id) }}
                  </span>
                </td>
                <td>
                  <span class="status" [class.inactive]="!item.isActive">{{ item.isActive ? 'Active' : 'Inactive' }}</span>
                </td>
                <td class="actions-cell" (click)="$event.stopPropagation()">
                  <button type="button" class="secondary" (click)="edit(item.id)" [disabled]="isSaving || deletingIds.has(item.id)">Edit</button>
                  <button type="button" class="danger" (click)="remove(item.id)" [disabled]="isSaving || deletingIds.has(item.id)">
                    {{ deletingIds.has(item.id) ? 'Deleting...' : 'Delete' }}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <p *ngIf="filteredRecords.length === 0">No records yet.</p>
        </div>

        <aside class="detail" *ngIf="selectedRecord">
          <h3>{{ selectedRecord.name }}</h3>
          <p>{{ selectedRecord.email || 'No email' }}</p>
          <p><strong>Status:</strong> {{ selectedRecord.isActive ? 'Active' : 'Inactive' }}</p>
          <p><strong>clinic:</strong> {{ selectedRecord.clinicId ?? '-' }}</p>
          <p *ngIf="entity === 'users'">
            <strong>Roles:</strong>
            <span *ngIf="selectedRecord.roles.length === 0">-</span>
            <span *ngFor="let role of selectedRecord.roles" class="role-pill">{{ role }}</span>
          </p>
          <p *ngIf="entity === 'users'">
            <strong>Role Sync:</strong>
            <span class="sync-pill" [class.syncing]="roleSyncState(selectedRecord.id) === 'syncing'" [class.success]="roleSyncState(selectedRecord.id) === 'success'" [class.partial]="roleSyncState(selectedRecord.id) === 'partial'" [class.failed]="roleSyncState(selectedRecord.id) === 'failed'">
              {{ roleSyncLabel(selectedRecord.id) }}
            </span>
          </p>
          <p><strong>Description:</strong> {{ selectedRecord.description || '-' }}</p>
        </aside>
      </div>

      <form *ngIf="showForm" class="crud-form" (ngSubmit)="save()">
        <label for="crud-name">Name</label>
        <input id="crud-name" name="name" [(ngModel)]="form.name" required />

        <label for="crud-description">Description</label>
        <textarea id="crud-description" name="description" [(ngModel)]="form.description"></textarea>

        <label for="crud-email">Email</label>
        <input id="crud-email" name="email" [(ngModel)]="form.email" />

        <label for="crud-clinic">clinic Id</label>
        <input id="crud-clinic" type="number" name="clinicId" [(ngModel)]="form.clinicId" />

        <label for="crud-active">Active</label>
        <select id="crud-active" name="isActive" [(ngModel)]="form.isActive">
          <option [ngValue]="true">Active</option>
          <option [ngValue]="false">Inactive</option>
        </select>

        <ng-container *ngIf="entity === 'users'">
          <label for="crud-roles">Roles (comma separated)</label>
          <input id="crud-roles" name="rolesCsv" [(ngModel)]="rolesCsv" placeholder="Admin, Doctor" />
        </ng-container>

        <div class="actions">
          <button type="submit" [disabled]="isSaving">{{ isSaving ? 'Saving...' : (isEditMode ? 'Update' : 'Create') }}</button>
          <button *ngIf="isEditMode || currentAction === 'create'" type="button" class="secondary" (click)="resetForm()" [disabled]="isSaving">Cancel</button>
        </div>
      </form>
    </section>
  `, styles: ["/* angular:styles/component:scss;b65608904be73d3d27eaff743fb439d3a0e9ecb5eded081e30c18612cddf9efc;D:/xampp/htdocs/clinic/src/app/modules/admin/components/admin-crud.component.ts */\n.admin-crud {\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  background: white;\n  padding: 16px;\n  display: grid;\n  gap: 12px;\n}\n.toolbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.toolbar h2 {\n  margin: 0;\n}\n.toolbar p {\n  margin: 4px 0 0;\n  color: #64748b;\n}\n.filters {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr;\n  gap: 8px;\n}\n.crud-form {\n  display: grid;\n  gap: 8px;\n  max-width: 520px;\n}\n.crud-form input,\n.crud-form textarea,\n.crud-form select,\n.filters input,\n.filters select {\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  padding: 8px 10px;\n}\n.layout {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  gap: 12px;\n}\n.detail {\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  padding: 10px;\n  background: #f8fafc;\n}\n.detail h3 {\n  margin: 0 0 6px;\n}\n.detail p {\n  margin: 4px 0;\n}\n.actions {\n  display: flex;\n  gap: 8px;\n  margin-top: 4px;\n}\nbutton {\n  border: 1px solid #2563eb;\n  background: #2563eb;\n  color: white;\n  border-radius: 8px;\n  padding: 8px 12px;\n  cursor: pointer;\n  font-weight: 600;\n}\nbutton.secondary {\n  border-color: #d1d5db;\n  background: white;\n  color: #1f2937;\n}\nbutton.danger {\n  border-color: #dc2626;\n  background: #dc2626;\n}\n.crud-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.crud-table th,\n.crud-table td {\n  border: 1px solid #e5e7eb;\n  padding: 8px;\n  text-align: left;\n}\n.crud-table tr.selected {\n  background: #eff6ff;\n}\n.status {\n  border: 1px solid #16a34a;\n  color: #166534;\n  border-radius: 999px;\n  padding: 2px 8px;\n  font-size: 0.75rem;\n}\n.status.inactive {\n  border-color: #94a3b8;\n  color: #475569;\n}\n.role-pill {\n  border: 1px solid #cbd5e1;\n  border-radius: 999px;\n  padding: 2px 8px;\n  font-size: 0.75rem;\n  margin-right: 4px;\n  display: inline-block;\n}\n.sync-pill {\n  border: 1px solid #cbd5e1;\n  border-radius: 999px;\n  padding: 2px 8px;\n  font-size: 0.75rem;\n  display: inline-block;\n  color: #334155;\n}\n.sync-pill.syncing {\n  border-color: #93c5fd;\n  background: #eff6ff;\n  color: #1d4ed8;\n}\n.sync-pill.success {\n  border-color: #86efac;\n  background: #f0fdf4;\n  color: #166534;\n}\n.sync-pill.partial {\n  border-color: #fcd34d;\n  background: #fffbeb;\n  color: #92400e;\n}\n.sync-pill.failed {\n  border-color: #fca5a5;\n  background: #fef2f2;\n  color: #991b1b;\n}\n.actions-cell {\n  display: flex;\n  gap: 8px;\n}\n.message {\n  margin: 6px 0;\n  color: #1d4ed8;\n}\n@media (max-width: 1100px) {\n  .layout {\n    grid-template-columns: 1fr;\n  }\n  .filters {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=admin-crud.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: HttpClient }, { type: AdminAuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminCrudComponent, { className: "AdminCrudComponent", filePath: "src/app/modules/admin/components/admin-crud.component.ts", lineNumber: 353 });
})();
export {
  AdminCrudComponent
};
//# sourceMappingURL=chunk-RUICZ6BD.js.map
