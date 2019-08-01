(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-loans-admin-loans-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin-panel/admin-loans/add-or-edit-loan/add-or-edit-loan.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin-panel/admin-loans/add-or-edit-loan/add-or-edit-loan.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\"  class=\"nt-form\" *ngIf=\"product\" >\r\n\r\n  <div class=\"container-fluid table-edit\">\r\n\r\n      <div class=\"row table-edit__actions\">\r\n          <div class=\"col-12 table-edit__actions__wrapper\">\r\n\r\n              <button mat-raised-button (click)=\"dialogRef.close()\">{{'~cancel' | translate}}</button>\r\n\r\n              <button mat-raised-button color=\"accent\"  type=\"submit\"\r\n              *ngIf=\"product?.lnId\"\r\n              (click)=\"onUpdate()\"\r\n              [ngClass]=\"{'is-loading': loading}\"\r\n              [disabled]=\"loading\"\r\n              >{{'~update' | translate}}</button>\r\n\r\n              <button mat-raised-button color=\"accent\"  type=\"submit\"\r\n              *ngIf=\"!product?.lnId\"\r\n              (click)=\"onAdd()\"\r\n              [ngClass]=\"{'is-loading': loading}\"\r\n              [disabled]=\"loading\"\r\n              >{{'~add' | translate}}</button>\r\n\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n\r\n    <div class=\"row table-edit__inputs\">\r\n        <div class=\"col-12 col-md-6 p-0\">\r\n\r\n            <select-search name=\"bankId\" [(ngModel)]=\"product.bankId\"\r\n               class=\"table-edit__inputs__field\" appearance=\"legacy\" [banks]=\"banks$ | async\"\r\n               placeholder=\"{{'~bankId' | translate}}\" [appearance]=\"'legacy'\">\r\n           </select-search>\r\n\r\n           <mat-form-field class=\"table-edit__inputs__field\" appearance=\"legacy\">\r\n            <mat-label>{{'~bankName' | translate}}</mat-label>\r\n            <input matInput disabled placeholder=\"{{'~bankName' | translate}}\" required  name=\"bankName\"  [(ngModel)]=\"product.bankName\">\r\n          </mat-form-field>\r\n\r\n\r\n           <fieldset ngModelGroup=\"loanName\">\r\n\r\n              <mat-form-field class=\"table-edit__inputs__field\" appearance=\"legacy\">\r\n                <mat-label>{{'~loanName' | translate}} (AZ)</mat-label>\r\n                <input matInput placeholder=\"{{'~loanName' | translate}} (AZ)\" required  name=\"az\"  [(ngModel)]=\"product.loanName.az\">\r\n              </mat-form-field>\r\n\r\n              <mat-form-field class=\"table-edit__inputs__field\" appearance=\"legacy\">\r\n                  <mat-label>{{'~loanName' | translate}} (EN)</mat-label>\r\n                <input matInput placeholder=\"{{'~loanName' | translate}} (EN)\"   name=\"en\"  [(ngModel)]=\"product.loanName.en\">\r\n              </mat-form-field>\r\n\r\n              <mat-form-field class=\"table-edit__inputs__field\" appearance=\"legacy\">\r\n                  <mat-label>{{'~loanName' | translate}} (RU)</mat-label>\r\n                <input matInput placeholder=\"{{'~loanName' | translate}} (RU)\"   name=\"ru\"  [(ngModel)]=\"product.loanName.ru\">\r\n              </mat-form-field>i\r\n\r\n          </fieldset>\r\n\r\n\r\n          <fieldset ngModelGroup=\"description\">\r\n\r\n              <mat-form-field appearance=\"outline\">\r\n                  <mat-label >{{'~description' | translate}} (AZ)</mat-label>\r\n                  <textarea matInput\r\n                            ngModel name=\"az\"\r\n                            [(ngModel)]=\"product.description.az\"\r\n                            cdkTextareaAutosize\r\n                            #autosize=\"cdkTextareaAutosize\"\r\n                            cdkAutosizeMinRows=\"5\"\r\n                            cdkAutosizeMaxRows=\"5\"\r\n                            required\r\n                            >\r\n                          </textarea>\r\n                </mat-form-field>\r\n\r\n              <mat-form-field appearance=\"outline\">\r\n                  <mat-label >{{'~description' | translate}} (EN) </mat-label>\r\n                  <textarea matInput\r\n                            ngModel name=\"en\"\r\n                            [(ngModel)]=\"product.description.en\"\r\n                            cdkTextareaAutosize\r\n                            #autosize=\"cdkTextareaAutosize\"\r\n                            cdkAutosizeMinRows=\"5\"\r\n                            cdkAutosizeMaxRows=\"5\"\r\n                            >\r\n                          </textarea>\r\n                </mat-form-field>\r\n\r\n              <mat-form-field appearance=\"outline\">\r\n                  <mat-label >{{'~description' | translate}} (RU) </mat-label>\r\n                  <textarea matInput\r\n                            ngModel name=\"ru\"\r\n                            [(ngModel)]=\"product.description.ru\"\r\n                            cdkTextareaAutosize\r\n                            #autosize=\"cdkTextareaAutosize\"\r\n                            cdkAutosizeMinRows=\"5\"\r\n                            cdkAutosizeMaxRows=\"5\"\r\n                            >\r\n                          </textarea>\r\n                </mat-form-field>\r\n\r\n          </fieldset>\r\n\r\n          <fieldset ngModelGroup=\"descriptionPD\">\r\n\r\n              <mat-form-field appearance=\"outline\">\r\n                  <mat-label >{{'~descriptionPD' | translate}} (AZ)</mat-label>\r\n                  <textarea matInput\r\n                            ngModel name=\"az\"\r\n                            [(ngModel)]=\"product.descriptionPD.az\"\r\n                            cdkTextareaAutosize\r\n                            #autosize=\"cdkTextareaAutosize\"\r\n                            cdkAutosizeMinRows=\"5\"\r\n                            cdkAutosizeMaxRows=\"5\"\r\n                            >\r\n                          </textarea>\r\n                </mat-form-field>\r\n\r\n              <mat-form-field appearance=\"outline\">\r\n                  <mat-label >{{'~descriptionPD' | translate}} (EN) </mat-label>\r\n                  <textarea matInput\r\n                            ngModel name=\"en\"\r\n                            [(ngModel)]=\"product.descriptionPD.en\"\r\n                            cdkTextareaAutosize\r\n                            #autosize=\"cdkTextareaAutosize\"\r\n                            cdkAutosizeMinRows=\"5\"\r\n                            cdkAutosizeMaxRows=\"5\"\r\n                            >\r\n                          </textarea>\r\n                </mat-form-field>\r\n\r\n              <mat-form-field appearance=\"outline\">\r\n                  <mat-label >{{'~descriptionPD' | translate}} (RU) </mat-label>\r\n                  <textarea matInput\r\n                            ngModel name=\"ru\"\r\n                            [(ngModel)]=\"product.descriptionPD.ru\"\r\n                            cdkTextareaAutosize\r\n                            #autosize=\"cdkTextareaAutosize\"\r\n                            cdkAutosizeMinRows=\"5\"\r\n                            cdkAutosizeMaxRows=\"5\"\r\n                            >\r\n                          </textarea>\r\n                </mat-form-field>\r\n\r\n\r\n\r\n          </fieldset>\r\n\r\n          <fieldset ngModelGroup=\"descriptionDOC\">\r\n\r\n              <mat-form-field appearance=\"outline\">\r\n                  <mat-label >{{'~descriptionDOC' | translate}} (AZ)</mat-label>\r\n                  <textarea matInput\r\n                            ngModel name=\"az\"\r\n                            [(ngModel)]=\"product.descriptionDOC.az\"\r\n                            cdkTextareaAutosize\r\n                            #autosize=\"cdkTextareaAutosize\"\r\n                            cdkAutosizeMinRows=\"5\"\r\n                            cdkAutosizeMaxRows=\"5\"\r\n                            >\r\n                          </textarea>\r\n                </mat-form-field>\r\n\r\n              <mat-form-field appearance=\"outline\">\r\n                  <mat-label >{{'~descriptionDOC' | translate}} (EN) </mat-label>\r\n                  <textarea matInput\r\n                            ngModel name=\"en\"\r\n                            [(ngModel)]=\"product.descriptionDOC.en\"\r\n                            cdkTextareaAutosize\r\n                            #autosize=\"cdkTextareaAutosize\"\r\n                            cdkAutosizeMinRows=\"5\"\r\n                            cdkAutosizeMaxRows=\"5\"\r\n                            >\r\n                          </textarea>\r\n                </mat-form-field>\r\n\r\n              <mat-form-field appearance=\"outline\">\r\n                  <mat-label >{{'~descriptionDOC' | translate}} (RU) </mat-label>\r\n                  <textarea matInput\r\n                            ngModel name=\"ru\"\r\n                            [(ngModel)]=\"product.descriptionDOC.ru\"\r\n                            cdkTextareaAutosize\r\n                            #autosize=\"cdkTextareaAutosize\"\r\n                            cdkAutosizeMinRows=\"5\"\r\n                            cdkAutosizeMaxRows=\"5\"\r\n                            >\r\n                          </textarea>\r\n                </mat-form-field>\r\n\r\n\r\n          </fieldset>\r\n\r\n\r\n          </div>\r\n\r\n\r\n          <div class=\"col-12 col-md-6 p-0\">\r\n\r\n\r\n                <mat-form-field class=\"table-edit__inputs__field\">\r\n                  <mat-label>{{'~loanType'}}</mat-label>\r\n                  <mat-select  required  name=\"loanType\"  [(ngModel)]=\"product.loanType\">\r\n                    <mat-option value=\"IPOTEKA\"> IPOTEKA </mat-option>\r\n                    <mat-option value=\"CONSUMER\">CONSUMER</mat-option>\r\n                    <mat-option value=\"BUSINESS\">BUSINESS</mat-option>\r\n                    <mat-option value=\"AUTO\">AUTO</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n\r\n                <select-search name=\"currencyCode\" [(ngModel)]=\"product.currencyCode\"\r\n               [required]=\"true\"\r\n                 class=\"table-edit__inputs__field\" appearance=\"legacy\" [banks]=\"curCodes$ | async\"\r\n                  placeholder=\"{{'~currencyCode' | translate}}\" [appearance]=\"'legacy'\">\r\n               </select-search>\r\n\r\n\r\n                <mat-form-field class=\"table-edit__inputs__field\" appearance=\"legacy\">\r\n                    <mat-label>{{'~minAge' | translate}}</mat-label>\r\n                    <input matInput placeholder=\"{{'~minAge' | translate}}\" type=\"number\" name=\"minAge\"  [(ngModel)]=\"product.minAge\">\r\n                  </mat-form-field>\r\n\r\n                <mat-form-field class=\"table-edit__inputs__field\" appearance=\"legacy\">\r\n                    <mat-label>{{'~maxAge' | translate}}</mat-label>\r\n                    <input matInput placeholder=\"{{'~maxAge' | translate}}\" type=\"number\" name=\"maxAge\"  [(ngModel)]=\"product.maxAge\">\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"table-edit__inputs__field\" appearance=\"legacy\">\r\n                    <mat-label>{{'~minAmount' | translate}}</mat-label>\r\n                    <input matInput placeholder=\"{{'~minAmount' | translate}}\" required  type=\"number\" name=\"minAmount\"  [(ngModel)]=\"product.minAmount\">\r\n                  </mat-form-field>\r\n\r\n                <mat-form-field class=\"table-edit__inputs__field\" appearance=\"legacy\">\r\n                    <mat-label>{{'~maxAmount' | translate}}</mat-label>\r\n                    <input matInput placeholder=\"{{'~maxAmount' | translate}}\" required  type=\"number\" name=\"maxAmount\"  [(ngModel)]=\"product.maxAmount\">\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"table-edit__inputs__field\" appearance=\"legacy\">\r\n                  <mat-label>{{'~gracePeriod' | translate}}</mat-label>\r\n                  <input matInput placeholder=\"{{'~gracePeriod' | translate}}\" type=\"number\" required  name=\"withGracePeriod\"  [(ngModel)]=\"product.withGracePeriod\">\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"table-edit__inputs__field\" appearance=\"legacy\">\r\n                    <mat-label>{{'~minPeriod' | translate}}</mat-label>\r\n                    <input matInput placeholder=\"{{'~minPeriod' | translate}}\" required  type=\"number\" name=\"minPeriod\"  [(ngModel)]=\"product.minPeriod\">\r\n                  </mat-form-field>\r\n\r\n                <mat-form-field class=\"table-edit__inputs__field\" appearance=\"legacy\">\r\n                    <mat-label>{{'~maxPeriod' | translate}}</mat-label>\r\n                    <input matInput placeholder=\"{{'~maxPeriod' | translate}}\" required  type=\"number\" name=\"maxPeriod\"  [(ngModel)]=\"product.maxPeriod\">\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"table-edit__inputs__field\" appearance=\"legacy\">\r\n                    <mat-label>{{'~minEffectiveRate' | translate}}</mat-label>\r\n                    <input matInput placeholder=\"{{'~minEffectiveRate' | translate}}\" type=\"number\" name=\"minEffectiveRate\"  [(ngModel)]=\"product.minEffectiveRate\">\r\n                  </mat-form-field>\r\n\r\n                <mat-form-field class=\"table-edit__inputs__field\" appearance=\"legacy\">\r\n                    <mat-label>{{'~maxEffectiveRate' | translate}}</mat-label>\r\n                    <input matInput placeholder=\"{{'~maxEffectiveRate' | translate}}\" type=\"number\" name=\"maxEffectiveRate\"  [(ngModel)]=\"product.maxEffectiveRate\">\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"table-edit__inputs__field\" appearance=\"legacy\">\r\n                    <mat-label>{{'~minRate' | translate}}</mat-label>\r\n                    <input matInput placeholder=\"{{'~minRate' | translate}}\" type=\"number\" required\r\n                    name=\"minRate\"  [(ngModel)]=\"product.minRate\">\r\n                  </mat-form-field>\r\n\r\n                <mat-form-field class=\"table-edit__inputs__field\" appearance=\"legacy\">\r\n                    <mat-label>{{'~maxRate' | translate}}</mat-label>\r\n                    <input matInput placeholder=\"{{'~maxRate' | translate}}\" type=\"number\" required\r\n                     name=\"maxRate\"  [(ngModel)]=\"product.maxRate\">\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"table-edit__inputs__field\" appearance=\"legacy\">\r\n                    <mat-label>{{'~minSalary' | translate}}</mat-label>\r\n                    <input matInput placeholder=\"{{'~minSalary' | translate}}\" type=\"number\" name=\"minSalary\"  [(ngModel)]=\"product.minSalary\">\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"table-edit__inputs__field\" appearance=\"legacy\">\r\n                    <mat-label>{{'~insurance' | translate}}</mat-label>\r\n                    <input matInput placeholder=\"{{'~insurance' | translate}}\" type=\"number\" name=\"insurance\"  [(ngModel)]=\"product.insurance\">\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"table-edit__inputs__field\" appearance=\"legacy\">\r\n                    <mat-label>{{'~comissionCash' | translate}}</mat-label>\r\n                    <input matInput placeholder=\"{{'~comissionCash' | translate}}\" required  type=\"number\" name=\"comissionCash\"  [(ngModel)]=\"product.comissionCash\">\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"table-edit__inputs__field\" appearance=\"legacy\">\r\n                    <mat-label>{{'~comissionLoan' | translate}}</mat-label>\r\n                    <input matInput placeholder=\"{{'~comissionLoan' | translate}}\" required  type=\"number\" name=\"comissionLoan\"  [(ngModel)]=\"product.comissionLoan\">\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"table-edit__inputs__field\" appearance=\"legacy\">\r\n                    <mat-label>{{'~priority' | translate}}</mat-label>\r\n                    <input matInput placeholder=\"{{'~priority' | translate}}\" type=\"number\" required  name=\"priority\"  [(ngModel)]=\"product.priority\">\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"table-edit__inputs__field\">\r\n                    <mat-label>{{'~prodStatus'}}</mat-label>\r\n                    <mat-select  name=\"prodStatus\" [(ngModel)]=\"product.prodStatus\" required >\r\n                      <mat-option [value]=\"1\"> 1 </mat-option>\r\n                      <mat-option [value]=\"-1\">-1</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n\r\n               <fieldset>\r\n                  <mat-checkbox\r\n                  name=\"withEmpReference\"\r\n                  [(ngModel)]=\"product.withEmpReference\"\r\n                 >\r\n                  {{'~adminWithEmpReference' | translate}}\r\n\r\n               </mat-checkbox>\r\n\r\n               </fieldset>\r\n\r\n               <fieldset>\r\n                  <mat-checkbox\r\n                  name=\"withCollateral\"\r\n                  [(ngModel)]=\"product.withCollateral\"\r\n                 >\r\n                  {{'~adminWithCollateral' | translate}}\r\n               </mat-checkbox>\r\n\r\n               </fieldset>\r\n\r\n\r\n\r\n\r\n          </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n  <input type=\"hidden\" name=\"lnId\" [(ngModel)]=\"product.lnId\">\r\n\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin-panel/admin-loans/admin-loans.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin-panel/admin-loans/admin-loans.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"admin-module\">\r\n    <div class=\"admin-module__header\">\r\n      <div class=\"admin-module__header__moduleName\">{{ '~loans' | translate }}</div>\r\n      <div class=\"admin-module__header__actions\">\r\n\r\n        <mat-select [multiple]=\"true\" [ngModel]=\"visibleColumns\"\r\n        (ngModelChange)=\"onToggleColumns($event)\" name=\"columns\"\r\n         class=\"admin-module__header__actions__columns\">\r\n          <mat-select-trigger>{{'~columns' | translate}} </mat-select-trigger>\r\n          <div class=\"toggle-actions\">\r\n            <button mat-button color=\"primary\" (click)=\"showAllColumns()\">\r\n              {{ '~showAll' | translate }}\r\n            </button>\r\n            <button mat-button color=\"warn\" (click)=\"hideAllColumns()\">\r\n              {{ '~hideAll' | translate }}\r\n            </button>\r\n          </div>\r\n          <mat-option *ngFor=\"let col of allColumns\" [value]=\"col\">\r\n            {{col}}\r\n          </mat-option>\r\n      </mat-select>\r\n\r\n        <div class=\"admin-module__header__actions__general\">\r\n          <button [matMenuTriggerFor]=\"menu\">\r\n            <div class=\"admin-module__header__actions__general__icon\">\r\n              <i class=\"fas fa-cog\"></i>\r\n            </div>\r\n            <div class=\"admin-module__header__actions__general__text\">\r\n              {{ '~generalActions' | translate }}\r\n            </div>\r\n          </button>\r\n        </div>\r\n\r\n\r\n        <mat-menu #menu=\"matMenu\" class=\"general-actions-menu\">\r\n\r\n          <button mat-menu-item (click)=\"onAdd()\" > {{ '~addData' | translate }}\r\n          </button>\r\n\r\n          <button mat-menu-item disabled = \"true\"\r\n          > {{ '~removeSelected' | translate }}\r\n          </button>\r\n\r\n          <button mat-menu-item disabled = \"true\"  > {{ '~print' | translate }}\r\n          </button>\r\n\r\n          <button mat-menu-item disabled = \"true\" > {{ '~export' | translate }}\r\n          </button>\r\n\r\n        </mat-menu>\r\n\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"admin-module__content\">\r\n      <div class=\"native-table-wrapper\" *ngIf=\"dataSource else table_loader\">\r\n          <table class=\"material-table\"\r\n          mat-table\r\n          matSort\r\n           [dataSource]=\"dataSource\"\r\n           class=\"mat-elevation-z8\"\r\n           >\r\n\r\n              <ng-container *ngFor=\"let column of visibleColumns\">\r\n\r\n                      <ng-container [matColumnDef]=\"column\" [ngSwitch]=\"isMultiLang(column)\" >\r\n\r\n                        <ng-container *ngSwitchCase=\"'standard'\">\r\n                          <th mat-header-cell *matHeaderCellDef >\r\n\r\n                            <div class=\"th-content\">\r\n                                <div mat-sort-header>{{column}}</div>\r\n                                <mat-form-field appearance=\"legacy\">\r\n                                    <input matInput [ngModel] = \"getFilterValue(column)\" (keyup)=\"applyFilter(column, $event.target.value)\" placeholder=\"Filter {{column}}\">\r\n                                </mat-form-field>\r\n                            </div>\r\n\r\n                            </th>\r\n                            <td mat-cell *matCellDef=\"let element\">\r\n                                <div class=\"td-content\">\r\n                                 {{element[column]}}\r\n                                </div>\r\n                            </td>\r\n                        </ng-container>\r\n\r\n                        <ng-container *ngSwitchCase=\"'multilang'\">\r\n                            <th mat-header-cell *matHeaderCellDef >\r\n                                <div class=\"th-content\">\r\n                                    <div mat-sort-header>{{column}}</div>\r\n                                    <mat-form-field appearance=\"legacy\">\r\n                                        <input matInput (keyup)=\"applyMultiLangFilter(column, $event.target.value)\" placeholder=\"Filter {{column}}\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n\r\n                            </th>\r\n                            <td mat-cell *matCellDef=\"let element\">\r\n                              <div class=\"td-content\">\r\n                                  {{element[column] | valueTranslate}}\r\n                              </div>\r\n                            </td>\r\n                        </ng-container>\r\n\r\n                        <ng-container *ngSwitchDefault>\r\n                            <th mat-header-cell *matHeaderCellDef></th>\r\n                            <td mat-cell *matCellDef=\"let element\" >\r\n\r\n                              <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Add or Edit\">\r\n                                <mat-icon>format_align_right</mat-icon>\r\n                              </button>\r\n\r\n                              <mat-menu #menu=\"matMenu\">\r\n\r\n                                <button mat-menu-item (click)=\"onEdit(element)\">\r\n                                  <mat-icon>edit</mat-icon>\r\n                                  <span>EDIT</span>\r\n                                </button>\r\n\r\n                                <button mat-menu-item (click)=\"onDelete(element)\">\r\n                                  <mat-icon>remove</mat-icon>\r\n                                  <span>DELETE</span>\r\n                                </button>\r\n\r\n                              </mat-menu>\r\n\r\n                            </td>\r\n                          </ng-container>\r\n\r\n                       </ng-container>\r\n\r\n\r\n\r\n\r\n              </ng-container>\r\n\r\n\r\n\r\n\r\n              <tr mat-header-row *matHeaderRowDef=\"visibleColumns;sticky:true\"></tr>\r\n              <tr mat-row *matRowDef=\"let row; columns: visibleColumns;\"></tr>\r\n          </table>\r\n\r\n      </div>\r\n      <div class=\"admin-module__content__paginator\">\r\n          <mat-paginator [pageSizeOptions]=\"[20, 50, 500]\" showFirstLastButtons></mat-paginator>\r\n        </div>\r\n    </div>\r\n  </div>\r\n<ng-template #table_loader>\r\n  <div class=\"h-100\">\r\n      <table-loader></table-loader>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/admin-panel/admin-loans/add-or-edit-loan/add-or-edit-loan.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/admin-panel/admin-loans/add-or-edit-loan/add-or-edit-loan.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".upload-input-wrapper {\n  width: 100%;\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tcGFuZWwvYWRtaW4tbG9hbnMvYWRkLW9yLWVkaXQtbG9hbi9EOlxcc291cmNlIGNvZGVzXFxwbHVzLW1pbnVzL3NyY1xcYXBwXFxhZG1pbi1wYW5lbFxcYWRtaW4tbG9hbnNcXGFkZC1vci1lZGl0LWxvYW5cXGFkZC1vci1lZGl0LWxvYW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluLXBhbmVsL2FkbWluLWxvYW5zL2FkZC1vci1lZGl0LWxvYW4vYWRkLW9yLWVkaXQtbG9hbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi1wYW5lbC9hZG1pbi1sb2Fucy9hZGQtb3ItZWRpdC1sb2FuL2FkZC1vci1lZGl0LWxvYW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXBsb2FkLWlucHV0LXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG59IiwiLnVwbG9hZC1pbnB1dC13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/admin-panel/admin-loans/add-or-edit-loan/add-or-edit-loan.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/admin-panel/admin-loans/add-or-edit-loan/add-or-edit-loan.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AddOrEditLoanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOrEditLoanComponent", function() { return AddOrEditLoanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_home_loans_models_loanGroup_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/home/loans/models/loanGroup.model */ "./src/app/home/loans/models/loanGroup.model.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_shared_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared-admin.service */ "./src/app/admin-panel/shared/shared-admin.service.ts");
/* harmony import */ var _admin_loan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../admin-loan.service */ "./src/app/admin-panel/admin-loans/admin-loan.service.ts");
/* harmony import */ var _models_crud_command_type_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/crud-command-type.enum */ "./src/app/admin-panel/models/crud-command-type.enum.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _admin_panel_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../admin-panel.service */ "./src/app/admin-panel/admin-panel.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");











let AddOrEditLoanComponent = class AddOrEditLoanComponent {
    constructor(data, dialogRef, sharedAdminService, adminLoanService, adminService, translateService) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.sharedAdminService = sharedAdminService;
        this.adminLoanService = adminLoanService;
        this.adminService = adminService;
        this.translateService = translateService;
        this.banks$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
        this.curCodes$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
        this.banks$ = this.sharedAdminService.getBankList(true);
        this.curCodes$ = this.sharedAdminService.getCurrCodeList('loans');
    }
    ngOnInit() {
        this.product = this.data.item ? this.data.item : new src_app_home_loans_models_loanGroup_model__WEBPACK_IMPORTED_MODULE_2__["LoanProduct"]();
    }
    onUpdate() {
        if (!this.form.valid) {
            return;
        }
        this.loading = true;
        this.adminLoanService.crudProduct(_models_crud_command_type_enum__WEBPACK_IMPORTED_MODULE_7__["CrudCommandType"].UPDATE, this.product)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => this.loading = false))
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
        this.adminLoanService.crudProduct(_models_crud_command_type_enum__WEBPACK_IMPORTED_MODULE_7__["CrudCommandType"].INSERT, this.product)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => this.loading = false))
            .subscribe(res => {
            if (res) {
                this.onAddSuccess(res);
            }
        });
    }
    onAddSuccess(res) {
        this.adminService
            .createNotification(`[ LOAN ] ${this.translateService.instant('~addSuccess')}`, 'OK', 'success');
        this.dialogRef.close(res);
    }
    onUpdateSuccess(res) {
        this.adminService
            .createNotification(`[ LOAN ] ${this.translateService.instant('~updateSuccess')}`, 'OK', 'success');
        this.dialogRef.close(res);
    }
};
AddOrEditLoanComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: _shared_shared_admin_service__WEBPACK_IMPORTED_MODULE_5__["SharedAdminService"] },
    { type: _admin_loan_service__WEBPACK_IMPORTED_MODULE_6__["AdminLoanService"] },
    { type: _admin_panel_service__WEBPACK_IMPORTED_MODULE_9__["AdminPanelService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: false })
], AddOrEditLoanComponent.prototype, "form", void 0);
AddOrEditLoanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'add-or-edit-loan',
        template: __webpack_require__(/*! raw-loader!./add-or-edit-loan.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin-panel/admin-loans/add-or-edit-loan/add-or-edit-loan.component.html"),
        styles: [__webpack_require__(/*! ./add-or-edit-loan.component.scss */ "./src/app/admin-panel/admin-loans/add-or-edit-loan/add-or-edit-loan.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], AddOrEditLoanComponent);



/***/ }),

/***/ "./src/app/admin-panel/admin-loans/admin-loan.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/admin-panel/admin-loans/admin-loan.service.ts ***!
  \***************************************************************/
/*! exports provided: AdminLoanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoanService", function() { return AdminLoanService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _admin_panel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin-panel.service */ "./src/app/admin-panel/admin-panel.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");






let AdminLoanService = class AdminLoanService {
    constructor(http, adminPanelService) {
        this.http = http;
        this.adminPanelService = adminPanelService;
    }
    crudProduct(commandType, loanProduct = {}) {
        return this.http.post('mybank/crud/loanProduct', Object.assign({ adminToken: this.adminPanelService.token, commandType: commandType }, loanProduct)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res && res.data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(er => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null)));
    }
};
AdminLoanService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _admin_panel_service__WEBPACK_IMPORTED_MODULE_2__["AdminPanelService"] }
];
AdminLoanService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AdminLoanService);



/***/ }),

/***/ "./src/app/admin-panel/admin-loans/admin-loans.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/admin-panel/admin-loans/admin-loans.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n}\n\n::ng-deep .cdk-column-loanName {\n  width: 200px;\n}\n\n::ng-deep .cdk-column-editer {\n  width: 50px;\n  padding-right: 8px;\n  transition: color 100ms ease-in-out;\n  position: -webkit-sticky;\n  position: sticky;\n  right: 0;\n}\n\n::ng-deep .cdk-column-editer:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 100%;\n  width: 100%;\n  border-left: 1px solid #e0e0e0;\n  background: #ffffff;\n}\n\n::ng-deep .cdk-column-editer:hover {\n  color: var(--secondary-default);\n}\n\n.th-content {\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tcGFuZWwvYWRtaW4tbG9hbnMvRDpcXHNvdXJjZSBjb2Rlc1xccGx1cy1taW51cy9zcmNcXGFwcFxcYWRtaW4tcGFuZWxcXGFkbWluLWxvYW5zXFxhZG1pbi1sb2Fucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4tcGFuZWwvYWRtaW4tbG9hbnMvYWRtaW4tbG9hbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0o7O0FET0c7RUFDSSxZQUFBO0FDSlA7O0FET0c7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxRQUFBO0FDSko7O0FES0k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0hSOztBRE1JO0VBQ0ksK0JBQUE7QUNKUjs7QURZRTtFQUNJLGlCQUFBO0FDVE4iLCJmaWxlIjoic3JjL2FwcC9hZG1pbi1wYW5lbC9hZG1pbi1sb2Fucy9hZG1pbi1sb2Fucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICB9XHJcblxyXG4gICA6Om5nLWRlZXAgLmNkay1jb2x1bW4tYmFua0lke1xyXG4gICAgICAgLnRkLWNvbnRlbnQge1xyXG4gICAgICAgLy8gICAgbWF4LXdpZHRoOiA1MHB4O1xyXG4gICAgICAgIH1cclxuICAgfVxyXG4gICA6Om5nLWRlZXAgLmNkay1jb2x1bW4tbG9hbk5hbWUge1xyXG4gICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICB9XHJcblxyXG4gICA6Om5nLWRlZXAgLmNkay1jb2x1bW4tZWRpdGVyIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMTAwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlMGUwZTA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIH1cclxuICAvLyAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZGVmYXVsdCk7XHJcbiAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHRkLm1hdC1jb2x1bW4tZWRpdGVyIHtcclxuXHJcbiAgfVxyXG5cclxuICAudGgtY29udGVudCB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIH0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG46Om5nLWRlZXAgLmNkay1jb2x1bW4tbG9hbk5hbWUge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbjo6bmctZGVlcCAuY2RrLWNvbHVtbi1lZGl0ZXIge1xuICB3aWR0aDogNTBweDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xuICB0cmFuc2l0aW9uOiBjb2xvciAxMDBtcyBlYXNlLWluLW91dDtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgcmlnaHQ6IDA7XG59XG46Om5nLWRlZXAgLmNkay1jb2x1bW4tZWRpdGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlMGUwZTA7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG46Om5nLWRlZXAgLmNkay1jb2x1bW4tZWRpdGVyOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1kZWZhdWx0KTtcbn1cblxuLnRoLWNvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin-panel/admin-loans/admin-loans.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin-panel/admin-loans/admin-loans.component.ts ***!
  \******************************************************************/
/*! exports provided: AdminLoansComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoansComponent", function() { return AdminLoansComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _admin_loan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-loan.service */ "./src/app/admin-panel/admin-loans/admin-loan.service.ts");
/* harmony import */ var _models_crud_command_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/crud-command-type.enum */ "./src/app/admin-panel/models/crud-command-type.enum.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _add_or_edit_loan_add_or_edit_loan_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-or-edit-loan/add-or-edit-loan.component */ "./src/app/admin-panel/admin-loans/add-or-edit-loan/add-or-edit-loan.component.ts");
/* harmony import */ var _admin_panel_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../admin-panel.utils */ "./src/app/admin-panel/admin-panel.utils.ts");
/* harmony import */ var _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/components/confirm-dialog/confirm-dialog.component */ "./src/app/admin-panel/shared/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _admin_panel_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../admin-panel.service */ "./src/app/admin-panel/admin-panel.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");














let AdminLoansComponent = class AdminLoansComponent {
    constructor(adminLoanService, translateService, dialog, adminService, changeRef) {
        this.adminLoanService = adminLoanService;
        this.translateService = translateService;
        this.dialog = dialog;
        this.adminService = adminService;
        this.changeRef = changeRef;
        this.toggleColumnsControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormControl"]();
    }
    ngOnInit() {
        this.getData();
    }
    initToggleColumnControl() {
        this.toggleColumnsControl.setValue(this.allColumns);
        this.toggleColumnsControl.valueChanges.subscribe(res => {
            this.allColumns = res;
            // this.changeRef.detectChanges();
        });
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
        return (column === 'loanName' || column === 'description' || column === 'descriptionPD' || column === 'descriptionDOC') ? 'multilang' : 'standard';
    }
    getData() {
        this.dataSource = undefined;
        this.adminLoanService.crudProduct(_models_crud_command_type_enum__WEBPACK_IMPORTED_MODULE_3__["CrudCommandType"].SELECT, {})
            .subscribe(res => {
            if (!(res && res[0])) {
                return;
            }
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](res);
            if (this.dataFilterState) {
                const { column, filterValue, multi } = Object.assign({}, this.dataFilterState);
                multi ? this.applyMultiLangFilter(column, filterValue) :
                    this.applyFilter(column, filterValue);
            }
            const columns = Object.keys(res[0]);
            columns.push('editer');
            this.allColumns = [...columns].
                filter(column => (column !== 'description') && (column !== 'descriptionPD') && (column !== 'descriptionDOC') && (column !== 'lnId'));
            this.allColumns.unshift('lnId');
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
        const ref = this.dialog.open(_add_or_edit_loan_add_or_edit_loan_component__WEBPACK_IMPORTED_MODULE_8__["AddOrEditLoanComponent"], Object.assign({ data: {
                item: item
            } }, _admin_panel_utils__WEBPACK_IMPORTED_MODULE_9__["TableDialogConfig"]));
        ref.afterClosed().subscribe(res => {
            if (res) {
                this.getData();
            }
        });
    }
    onAdd() {
        const ref = this.dialog.open(_add_or_edit_loan_add_or_edit_loan_component__WEBPACK_IMPORTED_MODULE_8__["AddOrEditLoanComponent"], Object.assign({ data: {} }, _admin_panel_utils__WEBPACK_IMPORTED_MODULE_9__["TableDialogConfig"]));
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
                this.adminLoanService.crudProduct(_models_crud_command_type_enum__WEBPACK_IMPORTED_MODULE_3__["CrudCommandType"].DELETE, element)
                    .subscribe(res => {
                    if (res) {
                        this.adminService
                            .createNotification(`[ LOAN ] ${this.translateService.instant('~deleteSuccess')}`, 'OK', 'success');
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
AdminLoansComponent.ctorParameters = () => [
    { type: _admin_loan_service__WEBPACK_IMPORTED_MODULE_2__["AdminLoanService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _admin_panel_service__WEBPACK_IMPORTED_MODULE_11__["AdminPanelService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], { static: true })
], AdminLoansComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"], { static: false })
], AdminLoansComponent.prototype, "sort", void 0);
AdminLoansComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'admin-loans',
        template: __webpack_require__(/*! raw-loader!./admin-loans.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin-panel/admin-loans/admin-loans.component.html"),
        styles: [__webpack_require__(/*! ./admin-loans.component.scss */ "./src/app/admin-panel/admin-loans/admin-loans.component.scss")]
    })
], AdminLoansComponent);



/***/ }),

/***/ "./src/app/admin-panel/admin-loans/admin-loans.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/admin-panel/admin-loans/admin-loans.module.ts ***!
  \***************************************************************/
/*! exports provided: AdminLoansModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoansModule", function() { return AdminLoansModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _admin_loans_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-loans.component */ "./src/app/admin-panel/admin-loans/admin-loans.component.ts");
/* harmony import */ var _admin_loans_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-loans.routing */ "./src/app/admin-panel/admin-loans/admin-loans.routing.ts");
/* harmony import */ var _add_or_edit_loan_add_or_edit_loan_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-or-edit-loan/add-or-edit-loan.component */ "./src/app/admin-panel/admin-loans/add-or-edit-loan/add-or-edit-loan.component.ts");
/* harmony import */ var _shared_shared_admin_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared-admin.module */ "./src/app/admin-panel/shared/shared-admin.module.ts");
/* harmony import */ var _admin_loan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin-loan.service */ "./src/app/admin-panel/admin-loans/admin-loan.service.ts");








let AdminLoansModule = class AdminLoansModule {
};
AdminLoansModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_admin_loans_component__WEBPACK_IMPORTED_MODULE_3__["AdminLoansComponent"], _add_or_edit_loan_add_or_edit_loan_component__WEBPACK_IMPORTED_MODULE_5__["AddOrEditLoanComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_admin_module__WEBPACK_IMPORTED_MODULE_6__["SharedAdminModule"],
            _admin_loans_routing__WEBPACK_IMPORTED_MODULE_4__["AdminLoansRoutingModule"],
        ],
        entryComponents: [_add_or_edit_loan_add_or_edit_loan_component__WEBPACK_IMPORTED_MODULE_5__["AddOrEditLoanComponent"]],
        providers: [_admin_loan_service__WEBPACK_IMPORTED_MODULE_7__["AdminLoanService"]]
    })
], AdminLoansModule);



/***/ }),

/***/ "./src/app/admin-panel/admin-loans/admin-loans.routing.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin-panel/admin-loans/admin-loans.routing.ts ***!
  \****************************************************************/
/*! exports provided: AdminLoansRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoansRoutingModule", function() { return AdminLoansRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _admin_loans_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-loans.component */ "./src/app/admin-panel/admin-loans/admin-loans.component.ts");




const routes = [
    { path: '', component: _admin_loans_component__WEBPACK_IMPORTED_MODULE_3__["AdminLoansComponent"], data: { key: "admin/loans" } },
];
let AdminLoansRoutingModule = class AdminLoansRoutingModule {
};
AdminLoansRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AdminLoansRoutingModule);



/***/ }),

/***/ "./src/app/home/loans/models/loanGroup.model.ts":
/*!******************************************************!*\
  !*** ./src/app/home/loans/models/loanGroup.model.ts ***!
  \******************************************************/
/*! exports provided: LoanProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanProduct", function() { return LoanProduct; });
class LoanProduct {
    constructor() {
        this.lnID = null;
        this.bankID = null;
        //temp
        this.lnId = null;
        this.bankId = null;
        this.bankName = null;
        this.loanType = null;
        this.loanName = new Value();
        this.currencyCode = null;
        this.priority = null;
        this.withEmpReference = null;
        this.withCollateral = null;
        this.withGracePeriod = null;
        this.auditorium = null;
        this.comissionCash = null;
        this.comissionLoan = null;
        this.minAge = null;
        this.maxAge = null;
        this.minAmount = null;
        this.maxAmount = null;
        this.minPeriod = null;
        this.maxPeriod = null;
        this.minRate = null;
        this.maxRate = null;
        this.minEffectiveRate = null;
        this.maxEffectiveRate = null;
        this.insurance = null;
        this.minSalary = null;
        this.description = new Value();
        this.descriptionPD = new Value();
        this.descriptionDOC = new Value();
        this.minMonthlyPayment = null;
        this.maxMonthlyPayment = null;
        this.anunitet = null;
        this.prodStatus = null;
    }
}
class Value {
    constructor() {
        this.az = '';
        this.ru = '';
        this.en = '';
    }
}


/***/ })

}]);
//# sourceMappingURL=admin-loans-admin-loans-module-es2015.js.map