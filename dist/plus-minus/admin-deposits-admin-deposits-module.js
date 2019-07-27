(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-deposits-admin-deposits-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin-panel/admin-deposits/add-or-edit-deposit/add-or-edit-deposit.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin-panel/admin-deposits/add-or-edit-deposit/add-or-edit-deposit.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\"  class=\"nt-form\" *ngIf=\"depositProduct\" >\r\n\r\n  <div class=\"container-fluid table-edit\">\r\n\r\n      <div class=\"row table-edit__actions\">\r\n          <div class=\"col-12 table-edit__actions__wrapper\">\r\n\r\n              <button mat-raised-button (click)=\"dialogRef.close()\">{{'~cancel' | translate}}</button>\r\n\r\n              <button mat-raised-button color=\"accent\"  type=\"submit\"\r\n              *ngIf=\"depositProduct?.dpId\"\r\n              (click)=\"onUpdate()\"\r\n              [ngClass]=\"{'is-loading': loading}\"\r\n              [disabled]=\"loading\"\r\n              >{{'~update' | translate}}</button>\r\n\r\n              <button mat-raised-button color=\"accent\"  type=\"submit\"\r\n              *ngIf=\"!depositProduct?.dpId\"\r\n              (click)=\"onAdd()\"\r\n              [ngClass]=\"{'is-loading': loading}\"\r\n              [disabled]=\"loading\"\r\n              >{{'~add' | translate}}</button>\r\n\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n\r\n    <div class=\"row table-edit__inputs\">\r\n        <div class=\"col-12 col-md-6 p-0\">\r\n\r\n            <select-search name=\"bankId\" [(ngModel)]=\"depositProduct.bankId\"\r\n               class=\"table-edit__inputs__field\" appearance=\"legacy\" [banks]=\"banks$ | async\"\r\n               placeholder=\"{{'~bankId' | translate}}\" [appearance]=\"'legacy'\">\r\n           </select-search>\r\n\r\n           <mat-form-field class=\"table-edit__inputs__field\" appearance=\"legacy\">\r\n            <mat-label>{{'~bankName' | translate}}</mat-label>\r\n            <input matInput disabled placeholder=\"{{'~bankName' | translate}}\" required  name=\"bankName\"  [(ngModel)]=\"depositProduct.bankName\">\r\n          </mat-form-field>\r\n\r\n\r\n           <fieldset ngModelGroup=\"depositName\">\r\n\r\n              <mat-form-field class=\"table-edit__inputs__field\" appearance=\"legacy\">\r\n                <mat-label>{{'~depositName' | translate}} (AZ)</mat-label>\r\n                <input matInput placeholder=\"{{'~depositName' | translate}} (AZ)\" required  name=\"az\"  [(ngModel)]=\"depositProduct.depositName.az\">\r\n              </mat-form-field>\r\n\r\n              <mat-form-field class=\"table-edit__inputs__field\" appearance=\"legacy\">\r\n                  <mat-label>{{'~depositName' | translate}} (EN)</mat-label>\r\n                <input matInput placeholder=\"{{'~depositName' | translate}} (EN)\"   name=\"en\"  [(ngModel)]=\"depositProduct.depositName.en\">\r\n              </mat-form-field>\r\n\r\n              <mat-form-field class=\"table-edit__inputs__field\" appearance=\"legacy\">\r\n                  <mat-label>{{'~depositName' | translate}} (RU)</mat-label>\r\n                <input matInput placeholder=\"{{'~depositName' | translate}} (RU)\"   name=\"ru\"  [(ngModel)]=\"depositProduct.depositName.ru\">\r\n              </mat-form-field>i\r\n\r\n          </fieldset>\r\n\r\n\r\n          <fieldset ngModelGroup=\"description\">\r\n\r\n              <mat-form-field appearance=\"outline\">\r\n                  <mat-label >{{'~description' | translate}} (AZ)</mat-label>\r\n                  <textarea matInput\r\n                            ngModel name=\"az\"\r\n                            [(ngModel)]=\"depositProduct.description.az\"\r\n                            cdkTextareaAutosize\r\n                            #autosize=\"cdkTextareaAutosize\"\r\n                            cdkAutosizeMinRows=\"5\"\r\n                            cdkAutosizeMaxRows=\"5\"\r\n                            >\r\n                          </textarea>\r\n                </mat-form-field>\r\n\r\n              <mat-form-field appearance=\"outline\">\r\n                  <mat-label >{{'~description' | translate}} (EN) </mat-label>\r\n                  <textarea matInput\r\n                            ngModel name=\"en\"\r\n                            [(ngModel)]=\"depositProduct.description.en\"\r\n                            cdkTextareaAutosize\r\n                            #autosize=\"cdkTextareaAutosize\"\r\n                            cdkAutosizeMinRows=\"5\"\r\n                            cdkAutosizeMaxRows=\"5\"\r\n                            >\r\n                          </textarea>\r\n                </mat-form-field>\r\n\r\n              <mat-form-field appearance=\"outline\">\r\n                  <mat-label >{{'~description' | translate}} (RU) </mat-label>\r\n                  <textarea matInput\r\n                            ngModel name=\"ru\"\r\n                            [(ngModel)]=\"depositProduct.description.ru\"\r\n                            cdkTextareaAutosize\r\n                            #autosize=\"cdkTextareaAutosize\"\r\n                            cdkAutosizeMinRows=\"5\"\r\n                            cdkAutosizeMaxRows=\"5\"\r\n                            >\r\n                          </textarea>\r\n                </mat-form-field>\r\n\r\n          </fieldset>\r\n\r\n          <fieldset ngModelGroup=\"present\">\r\n\r\n              <mat-form-field appearance=\"outline\">\r\n                  <mat-label >{{'~present' | translate}} (AZ)</mat-label>\r\n                  <textarea matInput\r\n                            ngModel name=\"az\"\r\n                            [(ngModel)]=\"depositProduct.present.az\"\r\n                            cdkTextareaAutosize\r\n                            #autosize=\"cdkTextareaAutosize\"\r\n                            cdkAutosizeMinRows=\"5\"\r\n                            cdkAutosizeMaxRows=\"5\"\r\n                            >\r\n                          </textarea>\r\n                </mat-form-field>\r\n\r\n              <mat-form-field appearance=\"outline\">\r\n                  <mat-label >{{'~present' | translate}} (EN) </mat-label>\r\n                  <textarea matInput\r\n                            ngModel name=\"en\"\r\n                            [(ngModel)]=\"depositProduct.present.en\"\r\n                            cdkTextareaAutosize\r\n                            #autosize=\"cdkTextareaAutosize\"\r\n                            cdkAutosizeMinRows=\"5\"\r\n                            cdkAutosizeMaxRows=\"5\"\r\n                            >\r\n                          </textarea>\r\n                </mat-form-field>\r\n\r\n              <mat-form-field appearance=\"outline\">\r\n                  <mat-label >{{'~present' | translate}} (RU) </mat-label>\r\n                  <textarea matInput\r\n                            ngModel name=\"ru\"\r\n                            [(ngModel)]=\"depositProduct.present.ru\"\r\n                            cdkTextareaAutosize\r\n                            #autosize=\"cdkTextareaAutosize\"\r\n                            cdkAutosizeMinRows=\"5\"\r\n                            cdkAutosizeMaxRows=\"5\"\r\n                            >\r\n                          </textarea>\r\n                </mat-form-field>\r\n\r\n\r\n          </fieldset>\r\n\r\n          </div>\r\n\r\n\r\n          <div class=\"col-12 col-md-6 p-0\">\r\n\r\n\r\n                <select-search name=\"currencyCode\" [(ngModel)]=\"depositProduct.currencyCode\"\r\n               [required]=\"true\"\r\n                 class=\"table-edit__inputs__field\" appearance=\"legacy\" [banks]=\"curCodes$ | async\"\r\n                  placeholder=\"{{'~currencyCode' | translate}}\" [appearance]=\"'legacy'\">\r\n               </select-search>\r\n\r\n              <mat-form-field>\r\n                  <mat-label>{{'~liqType' | translate}}</mat-label>\r\n                  <mat-select  name=\"liqType\"  [(ngModel)]=\"depositProduct.liqType\">\r\n\r\n                  <mat-option value=\"QUARTER\"> QUARTER </mat-option>\r\n                  <mat-option value=\"6MONTH\"> 6MONTH </mat-option>\r\n                  <mat-option value=\"MONTHLY\"> MONTHLY </mat-option>\r\n                  <mat-option value=\"LASTDAY\"> LASTDAY </mat-option>\r\n                  <mat-option value=\"AVANS\"> AVANS </mat-option>\r\n\r\n                  </mat-select>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"table-edit__inputs__field\" appearance=\"legacy\">\r\n                    <mat-label>{{'~minAmount' | translate}}</mat-label>\r\n                    <input matInput placeholder=\"{{'~minAmount' | translate}}\" required  type=\"number\" name=\"minAmount\"  [(ngModel)]=\"depositProduct.minAmount\">\r\n                  </mat-form-field>\r\n\r\n                <mat-form-field class=\"table-edit__inputs__field\" appearance=\"legacy\">\r\n                    <mat-label>{{'~maxAmount' | translate}}</mat-label>\r\n                    <input matInput placeholder=\"{{'~maxAmount' | translate}}\" required  type=\"number\" name=\"maxAmount\"  [(ngModel)]=\"depositProduct.maxAmount\">\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"table-edit__inputs__field\" appearance=\"legacy\">\r\n                    <mat-label>{{'~minPeriod' | translate}}</mat-label>\r\n                    <input matInput placeholder=\"{{'~minPeriod' | translate}}\" required  type=\"number\" name=\"minPeriod\"  [(ngModel)]=\"depositProduct.minPeriod\">\r\n                  </mat-form-field>\r\n\r\n                <mat-form-field class=\"table-edit__inputs__field\" appearance=\"legacy\">\r\n                    <mat-label>{{'~maxPeriod' | translate}}</mat-label>\r\n                    <input matInput placeholder=\"{{'~maxPeriod' | translate}}\" required  type=\"number\" name=\"maxPeriod\"  [(ngModel)]=\"depositProduct.maxPeriod\">\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"table-edit__inputs__field\" appearance=\"legacy\">\r\n                    <mat-label>{{'~minRate' | translate}}</mat-label>\r\n                    <input matInput placeholder=\"{{'~minRate' | translate}}\" type=\"number\" required\r\n                    name=\"minRate\"  [(ngModel)]=\"depositProduct.minRate\">\r\n                  </mat-form-field>\r\n\r\n                <mat-form-field class=\"table-edit__inputs__field\" appearance=\"legacy\">\r\n                    <mat-label>{{'~maxRate' | translate}}</mat-label>\r\n                    <input matInput placeholder=\"{{'~maxRate' | translate}}\" type=\"number\" required\r\n                     name=\"maxRate\"  [(ngModel)]=\"depositProduct.maxRate\">\r\n                </mat-form-field>\r\n\r\n\r\n\r\n                <mat-form-field class=\"table-edit__inputs__field\" appearance=\"legacy\">\r\n                    <mat-label>{{'~priority' | translate}}</mat-label>\r\n                    <input matInput placeholder=\"{{'~priority' | translate}}\" type=\"number\" required  name=\"priority\"  [(ngModel)]=\"depositProduct.priority\">\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"table-edit__inputs__field\">\r\n                    <mat-label>{{'~prodStatus'}}</mat-label>\r\n                    <mat-select  name=\"prodStatus\" [(ngModel)]=\"depositProduct.prodStatus\" required >\r\n                      <mat-option [value]=\"1\"> 1 </mat-option>\r\n                      <mat-option [value]=\"-1\">-1</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n\r\n               <fieldset>\r\n                  <mat-checkbox\r\n                  name=\"withAutoProlongation\"\r\n                  [(ngModel)]=\"depositProduct.withAutoProlongation\"\r\n                 >\r\n                  {{'~withAutoProlongation' | translate}}\r\n\r\n               </mat-checkbox>\r\n\r\n               </fieldset>\r\n\r\n               <fieldset>\r\n                  <mat-checkbox\r\n                  name=\"withCapitalisation\"\r\n                  [(ngModel)]=\"depositProduct.withCapitalisation\"\r\n                 >\r\n                  {{'~withCapitalisation' | translate}}\r\n               </mat-checkbox>\r\n\r\n               </fieldset>\r\n\r\n               <fieldset>\r\n                  <mat-checkbox\r\n                  name=\"withRefill\"\r\n                  [(ngModel)]=\"depositProduct.withRefill\"\r\n                 >\r\n                  {{'~withRefill' | translate}}\r\n               </mat-checkbox>\r\n\r\n               </fieldset>\r\n\r\n\r\n\r\n          </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n  <input type=\"hidden\" name=\"lnId\" [(ngModel)]=\"depositProduct.lnId\">\r\n\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin-panel/admin-deposits/admin-deposits.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin-panel/admin-deposits/admin-deposits.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"admin-module\">\r\n  <div class=\"admin-module__header\">\r\n    <div class=\"admin-module__header__moduleName\">{{ '~loans' | translate }}</div>\r\n    <div class=\"admin-module__header__actions\">\r\n\r\n      <mat-select [multiple]=\"true\" [ngModel]=\"visibleColumns\"\r\n      (ngModelChange)=\"onToggleColumns($event)\" name=\"columns\"\r\n       class=\"admin-module__header__actions__columns\">\r\n        <mat-select-trigger>{{'~columns' | translate}} </mat-select-trigger>\r\n        <div class=\"toggle-actions\">\r\n          <button mat-button color=\"primary\" (click)=\"showAllColumns()\">\r\n            {{ '~showAll' | translate }}\r\n          </button>\r\n          <button mat-button color=\"warn\" (click)=\"hideAllColumns()\">\r\n            {{ '~hideAll' | translate }}\r\n          </button>\r\n        </div>\r\n        <mat-option *ngFor=\"let col of allColumns\" [value]=\"col\">\r\n          {{col}}\r\n        </mat-option>\r\n    </mat-select>\r\n\r\n      <div class=\"admin-module__header__actions__general\">\r\n        <button [matMenuTriggerFor]=\"menu\">\r\n          <div class=\"admin-module__header__actions__general__icon\">\r\n            <i class=\"fas fa-cog\"></i>\r\n          </div>\r\n          <div class=\"admin-module__header__actions__general__text\">\r\n            {{ '~generalActions' | translate }}\r\n          </div>\r\n        </button>\r\n      </div>\r\n\r\n\r\n      <mat-menu #menu=\"matMenu\" class=\"general-actions-menu\">\r\n\r\n        <button mat-menu-item (click)=\"onAdd()\" > {{ '~addData' | translate }}\r\n        </button>\r\n\r\n        <button mat-menu-item disabled = \"true\"\r\n        > {{ '~removeSelected' | translate }}\r\n        </button>\r\n\r\n        <button mat-menu-item disabled = \"true\"  > {{ '~print' | translate }}\r\n        </button>\r\n\r\n        <button mat-menu-item disabled = \"true\" > {{ '~export' | translate }}\r\n        </button>\r\n\r\n      </mat-menu>\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"admin-module__content\">\r\n    <div class=\"native-table-wrapper\" *ngIf=\"dataSource else table_loader\">\r\n        <table class=\"material-table\"\r\n        mat-table\r\n        matSort\r\n         [dataSource]=\"dataSource\"\r\n         class=\"mat-elevation-z8\"\r\n         >\r\n\r\n            <ng-container *ngFor=\"let column of visibleColumns\">\r\n\r\n                    <ng-container [matColumnDef]=\"column\" [ngSwitch]=\"isMultiLang(column)\" >\r\n\r\n                      <ng-container *ngSwitchCase=\"'standard'\">\r\n                        <th mat-header-cell *matHeaderCellDef >\r\n\r\n                          <div class=\"th-content\">\r\n                              <div mat-sort-header>{{column}}</div>\r\n                              <mat-form-field appearance=\"legacy\">\r\n                                  <input [ngModel] = \"getFilterValue(column)\" matInput (keyup)=\"applyFilter(column, $event.target.value)\" placeholder=\"Filter {{column}}\">\r\n                              </mat-form-field>\r\n                          </div>\r\n\r\n                          </th>\r\n                          <td mat-cell *matCellDef=\"let element\">\r\n                              <div class=\"td-content\">\r\n                               {{element[column]}}\r\n                              </div>\r\n                          </td>\r\n                      </ng-container>\r\n\r\n                      <ng-container *ngSwitchCase=\"'multilang'\">\r\n                          <th mat-header-cell *matHeaderCellDef >\r\n                              <div class=\"th-content\">\r\n                                  <div mat-sort-header>{{column}}</div>\r\n                                  <mat-form-field appearance=\"legacy\">\r\n                                      <input matInput (keyup)=\"applyMultiLangFilter(column, $event.target.value)\" placeholder=\"Filter {{column}}\">\r\n                                  </mat-form-field>\r\n                              </div>\r\n\r\n                          </th>\r\n                          <td mat-cell *matCellDef=\"let element\">\r\n                            <div class=\"td-content\">\r\n                                {{element[column] | valueTranslate}}\r\n                            </div>\r\n                          </td>\r\n                      </ng-container>\r\n\r\n                      <ng-container *ngSwitchDefault>\r\n                          <th mat-header-cell *matHeaderCellDef></th>\r\n                          <td mat-cell *matCellDef=\"let element\" >\r\n\r\n                            <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Add or Edit\">\r\n                              <mat-icon>format_align_right</mat-icon>\r\n                            </button>\r\n\r\n                            <mat-menu #menu=\"matMenu\">\r\n\r\n                              <button mat-menu-item (click)=\"onEdit(element)\">\r\n                                <mat-icon>edit</mat-icon>\r\n                                <span>EDIT</span>\r\n                              </button>\r\n\r\n                              <button mat-menu-item (click)=\"onDelete(element)\">\r\n                                <mat-icon>remove</mat-icon>\r\n                                <span>DELETE</span>\r\n                              </button>\r\n\r\n                            </mat-menu>\r\n\r\n                          </td>\r\n                        </ng-container>\r\n\r\n                     </ng-container>\r\n\r\n\r\n\r\n\r\n            </ng-container>\r\n\r\n\r\n\r\n\r\n            <tr mat-header-row *matHeaderRowDef=\"visibleColumns;sticky:true\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: visibleColumns;\"></tr>\r\n        </table>\r\n\r\n    </div>\r\n    <div class=\"admin-module__content__paginator\">\r\n        <mat-paginator [pageSizeOptions]=\"[20, 50, 500]\" showFirstLastButtons></mat-paginator>\r\n      </div>\r\n  </div>\r\n</div>\r\n<ng-template #table_loader>\r\n<div class=\"h-100\">\r\n    <table-loader></table-loader>\r\n</div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/admin-panel/admin-deposits/add-or-edit-deposit/add-or-edit-deposit.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/admin-panel/admin-deposits/add-or-edit-deposit/add-or-edit-deposit.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXBhbmVsL2FkbWluLWRlcG9zaXRzL2FkZC1vci1lZGl0LWRlcG9zaXQvYWRkLW9yLWVkaXQtZGVwb3NpdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin-panel/admin-deposits/add-or-edit-deposit/add-or-edit-deposit.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/admin-panel/admin-deposits/add-or-edit-deposit/add-or-edit-deposit.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: AddOrEditDepositComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOrEditDepositComponent", function() { return AddOrEditDepositComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_home_deposits_models_deposit_group_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/home/deposits/models/deposit-group.model */ "./src/app/home/deposits/models/deposit-group.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _admin_deposit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../admin-deposit.service */ "./src/app/admin-panel/admin-deposits/admin-deposit.service.ts");
/* harmony import */ var _models_crud_command_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/crud-command-type.enum */ "./src/app/admin-panel/models/crud-command-type.enum.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _shared_shared_admin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared-admin.service */ "./src/app/admin-panel/shared/shared-admin.service.ts");
/* harmony import */ var _admin_panel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../admin-panel.service */ "./src/app/admin-panel/admin-panel.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");











let AddOrEditDepositComponent = class AddOrEditDepositComponent {
    constructor(data, dialogRef, sharedAdminService, adminDepositService, adminService, translateService) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.sharedAdminService = sharedAdminService;
        this.adminDepositService = adminDepositService;
        this.adminService = adminService;
        this.translateService = translateService;
        this.banks$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])([]);
        this.curCodes$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])([]);
        this.banks$ = this.sharedAdminService.getBankList(true);
        this.curCodes$ = this.sharedAdminService.getCurrCodeList('loans');
    }
    ngOnInit() {
        console.log(this.data.item);
        this.depositProduct = this.data.item ? this.data.item : new src_app_home_deposits_models_deposit_group_model__WEBPACK_IMPORTED_MODULE_1__["DepositProduct"]();
    }
    onUpdate() {
        if (!this.form.valid) {
            return;
        }
        this.loading = true;
        this.adminDepositService.crudDepositProduct(_models_crud_command_type_enum__WEBPACK_IMPORTED_MODULE_4__["CrudCommandType"].UPDATE, this.depositProduct)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(() => this.loading = false))
            .subscribe(res => {
            if (res) {
                this.onUpdateSuccess(res);
            }
        });
    }
    onAdd() {
        if (!this.form.valid) {
            return;
        }
        this.loading = true;
        this.adminDepositService.crudDepositProduct(_models_crud_command_type_enum__WEBPACK_IMPORTED_MODULE_4__["CrudCommandType"].INSERT, this.depositProduct)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(() => this.loading = false))
            .subscribe(res => {
            if (res) {
                this.onAddSuccess(res);
            }
        });
    }
    onAddSuccess(res) {
        this.adminService
            .createNotification(`[ Deposit ] ${this.translateService.instant('~addSuccess')}`, 'OK', 'success');
        this.dialogRef.close(res);
    }
    onUpdateSuccess(res) {
        this.adminService
            .createNotification(`[ Deposit ] ${this.translateService.instant('~updateSuccess')}`, 'OK', 'success');
        this.dialogRef.close(res);
    }
};
AddOrEditDepositComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"] },
    { type: _shared_shared_admin_service__WEBPACK_IMPORTED_MODULE_7__["SharedAdminService"] },
    { type: _admin_deposit_service__WEBPACK_IMPORTED_MODULE_3__["AdminDepositService"] },
    { type: _admin_panel_service__WEBPACK_IMPORTED_MODULE_8__["AdminPanelService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('f', { static: false })
], AddOrEditDepositComponent.prototype, "form", void 0);
AddOrEditDepositComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'add-or-edit-deposit',
        template: __webpack_require__(/*! raw-loader!./add-or-edit-deposit.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin-panel/admin-deposits/add-or-edit-deposit/add-or-edit-deposit.component.html"),
        styles: [__webpack_require__(/*! ./add-or-edit-deposit.component.scss */ "./src/app/admin-panel/admin-deposits/add-or-edit-deposit/add-or-edit-deposit.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"]))
], AddOrEditDepositComponent);



/***/ }),

/***/ "./src/app/admin-panel/admin-deposits/admin-deposit.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/admin-panel/admin-deposits/admin-deposit.service.ts ***!
  \*********************************************************************/
/*! exports provided: AdminDepositService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDepositService", function() { return AdminDepositService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _admin_panel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin-panel.service */ "./src/app/admin-panel/admin-panel.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");






let AdminDepositService = class AdminDepositService {
    constructor(http, adminPanelService) {
        this.http = http;
        this.adminPanelService = adminPanelService;
    }
    crudDepositProduct(commandType, loanProduct = {}) {
        return this.http.post('mybank/crud/depositProduct', Object.assign({ adminToken: this.adminPanelService.token, commandType: commandType }, loanProduct)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res && res.data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(er => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null)));
    }
};
AdminDepositService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _admin_panel_service__WEBPACK_IMPORTED_MODULE_2__["AdminPanelService"] }
];
AdminDepositService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AdminDepositService);



/***/ }),

/***/ "./src/app/admin-panel/admin-deposits/admin-deposits.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/admin-panel/admin-deposits/admin-deposits.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n}\n\n.td-content {\n  max-height: 48px;\n  overflow: hidden;\n}\n\n::ng-deep .cdk-column-depositName {\n  width: 200px;\n}\n\n::ng-deep .cdk-column-editer {\n  width: 50px;\n  padding-right: 8px;\n  transition: color 100ms ease-in-out;\n  position: -webkit-sticky;\n  position: sticky;\n  right: 0;\n}\n\n::ng-deep .cdk-column-editer:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 100%;\n  width: 100%;\n  border-left: 1px solid #e0e0e0;\n  background: #ffffff;\n}\n\n::ng-deep .cdk-column-editer:hover {\n  color: var(--secondary-default);\n}\n\n.th-content {\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tcGFuZWwvYWRtaW4tZGVwb3NpdHMvRDpcXHNvdXJjZSBjb2Rlc1xccGx1cy1taW51cy9zcmNcXGFwcFxcYWRtaW4tcGFuZWxcXGFkbWluLWRlcG9zaXRzXFxhZG1pbi1kZXBvc2l0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4tcGFuZWwvYWRtaW4tZGVwb3NpdHMvYWRtaW4tZGVwb3NpdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0o7O0FERUc7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDQ1A7O0FETUc7RUFDSSxZQUFBO0FDSFA7O0FETUc7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxRQUFBO0FDSEo7O0FESUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0ZSOztBREtJO0VBQ0ksK0JBQUE7QUNIUjs7QURXRTtFQUNJLGlCQUFBO0FDUk4iLCJmaWxlIjoic3JjL2FwcC9hZG1pbi1wYW5lbC9hZG1pbi1kZXBvc2l0cy9hZG1pbi1kZXBvc2l0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICB9XHJcblxyXG4gICAudGQtY29udGVudCB7XHJcbiAgICAgICBtYXgtaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgfVxyXG4gICA6Om5nLWRlZXAgLmNkay1jb2x1bW4tYmFua0lke1xyXG4gICAgICAgLnRkLWNvbnRlbnQge1xyXG4gICAgICAgLy8gICAgbWF4LXdpZHRoOiA1MHB4O1xyXG4gICAgICAgIH1cclxuICAgfVxyXG4gICA6Om5nLWRlZXAgLmNkay1jb2x1bW4tZGVwb3NpdE5hbWV7XHJcbiAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgIH1cclxuXHJcbiAgIDo6bmctZGVlcCAuY2RrLWNvbHVtbi1lZGl0ZXIge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAxMDBtcyBlYXNlLWluLW91dDtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICByaWdodDogMDtcclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2UwZTBlMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgfVxyXG4gIC8vICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1kZWZhdWx0KTtcclxuICAgIH1cclxuICAgfVxyXG5cclxuICAgdGQubWF0LWNvbHVtbi1lZGl0ZXIge1xyXG5cclxuICB9XHJcblxyXG4gIC50aC1jb250ZW50IHtcclxuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgfSIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi50ZC1jb250ZW50IHtcbiAgbWF4LWhlaWdodDogNDhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuOjpuZy1kZWVwIC5jZGstY29sdW1uLWRlcG9zaXROYW1lIHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG46Om5nLWRlZXAgLmNkay1jb2x1bW4tZWRpdGVyIHtcbiAgd2lkdGg6IDUwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMTAwbXMgZWFzZS1pbi1vdXQ7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHJpZ2h0OiAwO1xufVxuOjpuZy1kZWVwIC5jZGstY29sdW1uLWVkaXRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTBlMGUwO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuOjpuZy1kZWVwIC5jZGstY29sdW1uLWVkaXRlcjpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZGVmYXVsdCk7XG59XG5cbi50aC1jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/admin-panel/admin-deposits/admin-deposits.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin-panel/admin-deposits/admin-deposits.component.ts ***!
  \************************************************************************/
/*! exports provided: AdminDepositsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDepositsComponent", function() { return AdminDepositsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _admin_panel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../admin-panel.service */ "./src/app/admin-panel/admin-panel.service.ts");
/* harmony import */ var _models_crud_command_type_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/crud-command-type.enum */ "./src/app/admin-panel/models/crud-command-type.enum.ts");
/* harmony import */ var _admin_panel_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../admin-panel.utils */ "./src/app/admin-panel/admin-panel.utils.ts");
/* harmony import */ var _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/components/confirm-dialog/confirm-dialog.component */ "./src/app/admin-panel/shared/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _admin_deposit_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin-deposit.service */ "./src/app/admin-panel/admin-deposits/admin-deposit.service.ts");
/* harmony import */ var _add_or_edit_deposit_add_or_edit_deposit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add-or-edit-deposit/add-or-edit-deposit.component */ "./src/app/admin-panel/admin-deposits/add-or-edit-deposit/add-or-edit-deposit.component.ts");













let AdminDepositsComponent = class AdminDepositsComponent {
    constructor(adminDepositService, translateService, dialog, adminService, changeRef) {
        this.adminDepositService = adminDepositService;
        this.translateService = translateService;
        this.dialog = dialog;
        this.adminService = adminService;
        this.changeRef = changeRef;
        this.allColumns = [];
        this.visibleColumns = [];
    }
    ngOnInit() {
        this.getData();
    }
    applyFilter(column, filterValue) {
        this.dataSource.filterPredicate =
            (data, filter) => data[column].toString().toLowerCase().includes(filter.toLowerCase());
        this.dataSource.filter = filterValue;
        this.dataFilterState = { column, filterValue, multi: false };
    }
    applyMultiLangFilter(column, filterValue) {
        this.dataSource.filterPredicate =
            (data, filter) => data[column]['az'].toLowerCase().includes(filter.toLowerCase());
        this.dataSource.filter = filterValue;
        this.dataFilterState = { column, filterValue, multi: true };
    }
    isMultiLang(column) {
        if (column === 'editer') {
            return 'editer';
        }
        return (column === 'depositName' || column === 'description' || column === 'present') ? 'multilang' : 'standard';
    }
    getData() {
        this.dataSource = undefined;
        this.adminDepositService.crudDepositProduct(_models_crud_command_type_enum__WEBPACK_IMPORTED_MODULE_8__["CrudCommandType"].SELECT, {})
            .subscribe(res => {
            if (!(res && res[0])) {
                return;
            }
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](res);
            if (this.dataFilterState) {
                const { column, filterValue, multi } = Object.assign({}, this.dataFilterState);
                multi ? this.applyMultiLangFilter(column, filterValue) :
                    this.applyFilter(column, filterValue);
            }
            const columns = Object.keys(res[0]);
            columns.push('editer');
            this.allColumns = [...columns].
                filter(column => (column !== 'description') && (column !== 'descriptionPD') && (column !== 'descriptionDOC') && (column !== 'dpId'));
            this.allColumns.unshift('dpId');
            this.visibleColumns = [...this.allColumns];
            setTimeout(() => {
                this.dataSource.sort = this.sort;
                this.dataSource.paginator = this.paginator;
            }, 10);
        });
    }
    getFilterValue(column) {
        if (!(this.dataFilterState && this.dataFilterState.column === column)) {
            return;
        }
        return this.dataFilterState.filterValue;
    }
    onEdit(item) {
        const ref = this.dialog.open(_add_or_edit_deposit_add_or_edit_deposit_component__WEBPACK_IMPORTED_MODULE_12__["AddOrEditDepositComponent"], Object.assign({ data: {
                item: item
            } }, _admin_panel_utils__WEBPACK_IMPORTED_MODULE_9__["TableDialogConfig"]));
        ref.afterClosed().subscribe(res => {
            if (res) {
                this.getData();
            }
        });
    }
    onAdd() {
        const ref = this.dialog.open(_add_or_edit_deposit_add_or_edit_deposit_component__WEBPACK_IMPORTED_MODULE_12__["AddOrEditDepositComponent"], Object.assign({ data: {} }, _admin_panel_utils__WEBPACK_IMPORTED_MODULE_9__["TableDialogConfig"]));
        ref.afterClosed().subscribe(res => res && this.getData());
    }
    onDelete(element) {
        const ref = this.dialog.open(_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmDialogComponent"], {
            data: {
                title: "Əminsiz silməyə ?"
            }
        });
        ref.afterClosed().subscribe(res => {
            if (res) {
                this.adminDepositService.crudDepositProduct(_models_crud_command_type_enum__WEBPACK_IMPORTED_MODULE_8__["CrudCommandType"].DELETE, element)
                    .subscribe(res => {
                    if (res) {
                        this.adminService
                            .createNotification(`[ Deposit ] ${this.translateService.instant('~deleteSuccess')}`, 'OK', 'success');
                        this.getData();
                    }
                });
            }
        });
    }
    showAllColumns() {
        this.visibleColumns = [...this.allColumns];
    }
    hideAllColumns() {
        this.visibleColumns = [];
    }
    onToggleColumns(columns) {
        this.visibleColumns = columns;
    }
};
AdminDepositsComponent.ctorParameters = () => [
    { type: _admin_deposit_service__WEBPACK_IMPORTED_MODULE_11__["AdminDepositService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _admin_panel_service__WEBPACK_IMPORTED_MODULE_7__["AdminPanelService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
], AdminDepositsComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: false })
], AdminDepositsComponent.prototype, "sort", void 0);
AdminDepositsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'admin-deposits',
        template: __webpack_require__(/*! raw-loader!./admin-deposits.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin-panel/admin-deposits/admin-deposits.component.html"),
        styles: [__webpack_require__(/*! ./admin-deposits.component.scss */ "./src/app/admin-panel/admin-deposits/admin-deposits.component.scss")]
    })
], AdminDepositsComponent);



/***/ }),

/***/ "./src/app/admin-panel/admin-deposits/admin-deposits.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/admin-panel/admin-deposits/admin-deposits.module.ts ***!
  \*********************************************************************/
/*! exports provided: AdminDepositsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDepositsModule", function() { return AdminDepositsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _admin_deposit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-deposit.service */ "./src/app/admin-panel/admin-deposits/admin-deposit.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _admin_deposits_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-deposits.component */ "./src/app/admin-panel/admin-deposits/admin-deposits.component.ts");
/* harmony import */ var _admin_deposits_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-deposits.routing */ "./src/app/admin-panel/admin-deposits/admin-deposits.routing.ts");
/* harmony import */ var _shared_shared_admin_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared-admin.module */ "./src/app/admin-panel/shared/shared-admin.module.ts");
/* harmony import */ var _add_or_edit_deposit_add_or_edit_deposit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-or-edit-deposit/add-or-edit-deposit.component */ "./src/app/admin-panel/admin-deposits/add-or-edit-deposit/add-or-edit-deposit.component.ts");








let AdminDepositsModule = class AdminDepositsModule {
};
AdminDepositsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_admin_deposits_component__WEBPACK_IMPORTED_MODULE_4__["AdminDepositsComponent"], _add_or_edit_deposit_add_or_edit_deposit_component__WEBPACK_IMPORTED_MODULE_7__["AddOrEditDepositComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _admin_deposits_routing__WEBPACK_IMPORTED_MODULE_5__["AdminDepositsRoutingModule"],
            _shared_shared_admin_module__WEBPACK_IMPORTED_MODULE_6__["SharedAdminModule"],
        ],
        providers: [_admin_deposit_service__WEBPACK_IMPORTED_MODULE_1__["AdminDepositService"]],
        entryComponents: [_add_or_edit_deposit_add_or_edit_deposit_component__WEBPACK_IMPORTED_MODULE_7__["AddOrEditDepositComponent"]]
    })
], AdminDepositsModule);



/***/ }),

/***/ "./src/app/admin-panel/admin-deposits/admin-deposits.routing.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin-panel/admin-deposits/admin-deposits.routing.ts ***!
  \**********************************************************************/
/*! exports provided: AdminDepositsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDepositsRoutingModule", function() { return AdminDepositsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _admin_deposits_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-deposits.component */ "./src/app/admin-panel/admin-deposits/admin-deposits.component.ts");




const routes = [
    { path: '', component: _admin_deposits_component__WEBPACK_IMPORTED_MODULE_3__["AdminDepositsComponent"], data: { key: "admin/deposits" } },
];
let AdminDepositsRoutingModule = class AdminDepositsRoutingModule {
};
AdminDepositsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AdminDepositsRoutingModule);



/***/ }),

/***/ "./src/app/home/deposits/models/deposit-group.model.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/deposits/models/deposit-group.model.ts ***!
  \*************************************************************/
/*! exports provided: DepositProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositProduct", function() { return DepositProduct; });
class DepositProduct {
    constructor() {
        this.dpID = null;
        this.dpId = null;
        this.bankID = null;
        this.bankId = null;
        this.bankName = null;
        this.depositName = new Value();
        this.currencyCode = null;
        this.priority = null;
        this.minAmount = null;
        this.minRate = null;
        this.maxRate = null;
        this.minPeriod = null;
        this.maxPeriod = null;
        this.liqType = null;
        this.withCapitalisation = null;
        this.withWithdraw = null;
        this.withRefill = null;
        this.withAutoProloing = null;
        this.description = new Value();
        this.descriptionPresent = new Value();
        this.present = new Value();
        this.website = null;
        this.income = null;
        this.withAutoProlongation = null;
        this.prodStatus = null;
    }
}
class Value {
    constructor() {
        this.az = null;
        this.ru = null;
        this.en = null;
    }
}


/***/ })

}]);
//# sourceMappingURL=admin-deposits-admin-deposits-module.js.map