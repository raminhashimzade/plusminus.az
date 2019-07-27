(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-bank-admin-bank-admin-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/bank-admin/bank-admin-change-password/bank-admin-change-password.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/bank-admin/bank-admin-change-password/bank-admin-change-password.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"component\">\n  <div class=\"component__title\">{{'~profileUpdate' | translate}}</div>\n  <div class=\"component__content\">\n    <form #f=\"ngForm\" class=\"component__content__form\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"component__content__form__fields\">\n\n            <mat-form-field class=\"example-full-width\">\n              <mat-label>{{'~username' | translate}}</mat-label>\n              <input matInput readonly onfocus=\"this.removeAttribute('readonly');\"\n                placeholder=\"username\" name = \"username\" [ngModel]=\"user.jti\"\n                required\n                [disabled]=\"true\"\n                >\n            </mat-form-field>\n\n            <mat-form-field class=\"example-full-width\">\n              <mat-label>{{'~oldPassword' | translate}}</mat-label>\n              <input matInput readonly onfocus=\"this.removeAttribute('readonly');\"\n                [type]=\"hideOldPassword ? 'password': 'text'\" name=\"oldPassword\" ngModel\n               required\n              >\n              <mat-icon matSuffix  (click)=\"hideOldPassword = !hideOldPassword\">{{hideOldPassword ? 'visibility' : 'visibility_off'}}</mat-icon>\n            </mat-form-field>\n\n            <mat-form-field class=\"example-full-width\">\n              <mat-label>{{'~newPassword' | translate}}</mat-label>\n              <input matInput readonly onfocus=\"this.removeAttribute('readonly');\"\n               [type]=\"hideNewPassword ? 'password': 'text'\" name=\"newPassword\" ngModel\n               required\n               >\n              <mat-icon matSuffix  (click)=\"hideNewPassword = !hideNewPassword\">{{hideNewPassword ? 'visibility' : 'visibility_off'}}</mat-icon>\n            </mat-form-field>\n\n            <mat-form-field class=\"example-full-width\">\n              <mat-label>{{'~confirmNewPassword' | translate}}</mat-label>\n              <input matInput readonly onfocus=\"this.removeAttribute('readonly');\"\n              [type]=\"confirmNewPassword ? 'password': 'text'\" name=\"confirmNewPassword\" ngModel\n              required\n              >\n              <mat-icon matSuffix  (click)=\"confirmNewPassword = !confirmNewPassword\">{{confirmNewPassword ? 'visibility' : 'visibility_off'}}</mat-icon>\n            </mat-form-field>\n            <div class=\"form-error\" >{{getErrorMessage('confirmNewPassword')}}</div>\n\n      </div>\n\n      <div class=\"component__content__form__submit\">\n        <button mat-raised-button color=\"accent\" type=\"submit\"\n          class=\"login-button\" [disabled]=\"loading\"\n          [ngClass]=\"{'is-loading': loading}\"\n        >{{'~save' | translate}}</button>\n      </div>\n    </form>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/bank-admin/bank-admin.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/bank-admin/bank-admin.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/bank-admin/bank-customers/bank-customers.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/bank-admin/bank-customers/bank-customers.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-12 col-lg-12 col-xl-12 pr-0\">\r\n        <div class=\"component\">\r\n            <div class=\"component__header\">\r\n                <p>{{'~forBanks' | translate}}</p>\r\n            </div>\r\n\r\n            <div class=\"arrows\" >\r\n              <button mat-mini-fab class=\"arrow --prev\" (click)=\"onPrevRateScroll()\" >\r\n                  <mat-icon inline=\"true\">arrow_forward_ios</mat-icon>\r\n                </button>\r\n              <button mat-mini-fab class=\"arrow --next\" (click)=\"onNextRateScroll()\" >\r\n                  <mat-icon inline=\"true\">arrow_forward_ios</mat-icon>\r\n                </button>\r\n            </div>\r\n\r\n            <div class=\"component__content\" id=\"customers-table\">\r\n                <h3 (click)=\"getOrderList()\">{{'~orders' | translate}}</h3>\r\n\r\n\r\n                <table class=\"table plus-minus --customers\" *ngIf=\"!loading else table_loader\">\r\n                  <thead>\r\n                  <th> {{'~orderDateTime' | translate}} </th>\r\n                    <th>{{'~rqId' | translate}} </th>\r\n                    <th>{{'~cusName' | translate}} </th>\r\n                    <th>{{'~age' | translate}}</th>\r\n                    <th> {{'~requestAmt' | translate}} </th>\r\n                    <th> {{'~requestPeriod' | translate}} </th>\r\n                    <th>{{'~income' | translate}}</th>\r\n                    <th>{{'~otherMonthlyPayment' | translate}}</th>\r\n                    <th>{{'~information' | translate}}</th>\r\n\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let order of orders\">\r\n                        <td>{{order.dateTime}}</td>\r\n                      <td>{{order.rqId}}</td>\r\n                      <td>{{order.cusName}}</td>\r\n                      <td>{{order.age}}</td>\r\n                      <td>\r\n                        <div class=\"td-content\">\r\n                            {{order.requestAmt}}\r\n                            {{order.currencyCode}} <br>\r\n                        </div>\r\n                      </td>\r\n                      <td>{{order.requestPeriod}} {{'~month' | translate}}</td>\r\n\r\n                      <td>\r\n                          <div class=\"td-content\">\r\n                              {{order.income}}\r\n                              {{order.currencyCode}} <br>\r\n                              <span *ngIf=\"order.official\"> ({{'~official' | translate}} <span *ngIf=\"order.voen\">,{{'~voen' | translate}}</span>) <br> </span>\r\n                              <span *ngIf=\"order.unOfficial\">({{'~unOfficial' | translate}} <span *ngIf=\"order.voen\">,{{'~voen' | translate}}</span>) <br></span>\r\n\r\n                          </div>\r\n                      </td>\r\n                      <td>{{order.guarantor}}</td>\r\n                      <td class=\"information\">\r\n\r\n\r\n                          <div class=\"actions\">\r\n                              <a mat-icon-button\r\n                              color=\"primary\"\r\n                              title=\"{{'~contactNumber' | translate}}\"\r\n                              (click)=\"onCustomerContactPopup(order, $event.target)\"\r\n                               >\r\n                                 <mat-icon>phone</mat-icon>\r\n                              </a>\r\n\r\n                              <a mat-icon-button\r\n                              title=\"{{'~called' | translate}}\"\r\n                              [color]=\"order.called ? 'accent' : 'primary'\"\r\n                              (click)=\"onCustomerNotePopup(order, $event.target)\"\r\n                           >\r\n                              <mat-icon>event_note</mat-icon>\r\n                             </a>\r\n\r\n                              <a mat-icon-button\r\n                              [color]=\"'warn'\"\r\n                              title=\"{{'~cancelOrder' | translate}}\"\r\n                              (click)=\"onCancelOrder(order)\"\r\n                           >\r\n                              <mat-icon>cancel</mat-icon>\r\n                             </a>\r\n\r\n                              <!-- <a mat-icon-button\r\n                              color=\"accent\"\r\n                              [matBadge]=\"order.called ? 1 : ''\" matBadgePosition=\"after\"\r\n                              matBadgeColor=\"warn\"\r\n                              (click)=\"onCustomerNotePopup(order, $event.target)\"\r\n                           >\r\n                              <mat-icon>phone_in_talk</mat-icon>\r\n                             </a> -->\r\n\r\n\r\n                          </div>\r\n                        </td>\r\n\r\n\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n\r\n\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"card-wrapper\">\r\n          <div class=\"card\">\r\n            <div class=\"card__header\">{{'~statistics' | translate}}</div>\r\n            <div class=\"card__content\">\r\n\r\n                <div class=\"card__content__row\" (click)=\"onGetAll()\" [ngClass]=\"{'active': !called && !cancelled}\">\r\n                    <p>{{'~orders' | translate}}</p>\r\n                    <b> - {{orderStats?.totalOrderCount}}</b>\r\n                </div>\r\n\r\n                <div class=\"card__content__row\" (click)=\"onGetCalled()\" [ngClass]=\"{'active': called}\">\r\n                    <p>{{'~called' | translate}}</p>\r\n                    <b> - {{orderStats?.contactedCount}}</b>\r\n                </div>\r\n\r\n                <div class=\"card__content__row\" (click)=\"onGetCancelled()\" [ngClass]=\"{'active': cancelled}\">\r\n                    <p>{{'~cancelled' | translate}}</p>\r\n                    <b> - {{orderStats?.canceledCount}}</b>\r\n                </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n  <ng-template #table_loader>\r\n    <table-loader></table-loader>\r\n  </ng-template>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/bank-admin/bank-customers/customer-contact-popup/customer-contact-popup.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/bank-admin/bank-customers/customer-contact-popup/customer-contact-popup.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"component\" *ngIf=\"data else loading\">\r\n  <div class=\"component__header\">\r\n    <div class=\"component__header__title\">\r\n     {{'~information' | translate}}\r\n    </div>\r\n    <div class=\"component__header__icon\" (click)=\"close()\">\r\n        <i class=\"fas fa-times\"></i>\r\n    </div>\r\n  </div>\r\n  <div class=\"component__content\">\r\n\r\n    <div class=\"component__content__row \">\r\n        <div class=\"component__content__row__key\">Tel:</div>\r\n        <div class=\"component__content__row__value\">\r\n         {{data.mobilePhone}}\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"component__content__row \">\r\n        <div class=\"component__content__row__key\">{{'~birthDate' | translate}}:</div>\r\n        <div class=\"component__content__row__value\">\r\n         {{data.bithDate}}\r\n        </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n<ng-template #loading>\r\n  <div class=\"spinner-wrapper\">\r\n      <table-loader> </table-loader>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/bank-admin/bank-customers/customer-note-popup/customer-note-popup.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/bank-admin/bank-customers/customer-note-popup/customer-note-popup.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"component\" >\r\n    <div class=\"component__header\">\r\n      <div class=\"component__header__title\">\r\n       {{'~note' | translate}}\r\n      </div>\r\n      <div class=\"component__header__icon\" (click)=\"close()\">\r\n          <i class=\"fas fa-times\"></i>\r\n      </div>\r\n    </div>\r\n    <div class=\"component__content\">\r\n\r\n      <form #f=\"ngForm\" (ngSubmit)=\"onSubmit() \">\r\n\r\n          <mat-form-field appearance=\"outline\">\r\n              <mat-label >{{'~note' | translate}}</mat-label>\r\n              <textarea matInput\r\n                        ngModel name=\"bankNote\"\r\n                        cdkTextareaAutosize\r\n                        #bankNoteInput =\"matInput\"\r\n                        #autosize=\"cdkTextareaAutosize\"\r\n                        cdkAutosizeMinRows=\"10\"\r\n                        cdkAutosizeMaxRows=\"20\"\r\n                        required\r\n                        >\r\n                      </textarea>\r\n            </mat-form-field>\r\n\r\n            <button mat-raised-button color=\"accent\"\r\n              [disabled]=\"loading\"\r\n              [ngClass]=\"{'is-loading': loading}\"\r\n            >{{'~save' | translate}}</button>\r\n\r\n      </form>\r\n\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/bank-admin/bank-login/bank-login.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/bank-admin/bank-login/bank-login.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-12 col-xl-12\">\n            <div class=\"login\">\n                <div class=\"login__header\">\n                    <p>{{'~forBanks' | translate}}</p>\n                </div>\n\n                <div class=\"login__content\">\n\n                    <div class=\"login__content__info\">\n                        <h3>{{'~ourAdvantages' | translate}}</h3>\n                      <div class=\"advantages\">\n\n                      <div class=\"advantage\">\n                        <div class=\"advantage__symbol\"></div>\n                        <div class=\"advantage__text\">\n                          <p>{{'~ourAdvantage_1' | translate}}</p>\n                        </div>\n                      </div>\n\n                      <div class=\"advantage\">\n                        <div class=\"advantage__symbol\"></div>\n                        <div class=\"advantage__text\">\n                          <p>{{'~ourAdvantage_2' | translate}}</p>\n                        </div>\n                      </div>\n\n                      <div class=\"advantage\">\n                        <div class=\"advantage__symbol\"></div>\n                        <div class=\"advantage__text\">\n                          <p>{{'~ourAdvantage_3' | translate}}</p>\n                        </div>\n                      </div>\n\n                      <div class=\"advantage\">\n                        <div class=\"advantage__symbol\"></div>\n                        <div class=\"advantage__text\">\n                          <p>{{'~ourAdvantage_4' | translate}}</p>\n                        </div>\n                      </div>\n\n\n                    </div>\n                    </div>\n\n                    <div class=\"login__content__form\">\n                        <form #f=\"ngForm\" class=\"signup-form\" autocomplete=\"off\" (ngSubmit)=\"onSubmit()\">\n                            <mat-form-field class=\"form-field\" appearance=\"fill\" >\n                              <mat-label>{{'~login' | translate}}</mat-label>\n                              <input matInput placeholder=\"{{'~login' | translate}}\"\n                              ngModel name =\"login\" required\n                              readonly onfocus=\"this.removeAttribute('readonly');\"\n                              >\n                            </mat-form-field>\n\n                            <mat-form-field class=\"form-field\" appearance=\"fill\" >\n                                <mat-label>{{'~password' | translate}}</mat-label>\n                                <input matInput placeholder=\"{{'~password' | translate}}\"\n                                ngModel name =\"password\" required\n                                readonly onfocus=\"this.removeAttribute('readonly');\"\n                                type=\"password\">\n                              </mat-form-field>\n\n                              <div class=\"login__content__form__actions\">\n\n                                <button mat-raised-button\n                                [ngClass]=\"{'is-loading': loading}\"\n                                [disabled]=\"loading\"\n                                color =\"accent\" class=\"form-submit\" type=\"submit\"> {{'~login' | translate}}</button>\n\n                              </div>\n\n\n                          </form>\n                    </div>\n                </div>\n            </div>\n\n          </div>\n        </div>\n\n      </div>"

/***/ }),

/***/ "./src/app/home/bank-admin/bank-admin-change-password/bank-admin-change-password.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/home/bank-admin/bank-admin-change-password/bank-admin-change-password.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  background: #ffffff;\n  z-index: calc(var(--header-z-index) + 1);\n}\n\n.form-group {\n  margin-bottom: 0;\n}\n\n.component {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 85vh;\n}\n\n.component .component__title {\n  color: #aaaaaa;\n  font-weight: bold;\n  padding-bottom: 10px;\n  font-size: 25px;\n}\n\n.component .component__content .component__content__form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.component .component__content .component__content__form .component__content__form__fields {\n  display: flex;\n  flex-direction: column;\n  font-size: 15px;\n}\n\n.component .component__content .component__content__form .component__content__form__submit {\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9iYW5rLWFkbWluL2JhbmstYWRtaW4tY2hhbmdlLXBhc3N3b3JkL0Q6XFxzb3VyY2UgY29kZXNcXHBsdXMtbWludXMvc3JjXFxhcHBcXGhvbWVcXGJhbmstYWRtaW5cXGJhbmstYWRtaW4tY2hhbmdlLXBhc3N3b3JkXFxiYW5rLWFkbWluLWNoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9iYW5rLWFkbWluL2JhbmstYWRtaW4tY2hhbmdlLXBhc3N3b3JkL2JhbmstYWRtaW4tY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFDQSxtQkFBQTtFQUNBLHdDQUFBO0FDQ0o7O0FEQ0U7RUFDRSxnQkFBQTtBQ0VKOztBREFFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDR0o7O0FERkk7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUNJTjs7QUREUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDR1o7O0FERlk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDSWhCOztBREZZO0VBQ0ksaUJBQUE7QUNJaEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2JhbmstYWRtaW4vYmFuay1hZG1pbi1jaGFuZ2UtcGFzc3dvcmQvYmFuay1hZG1pbi1jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgei1pbmRleDogY2FsYyh2YXIoLS1oZWFkZXItei1pbmRleCkgKyAxKTtcclxuICB9XHJcbiAgLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbiAgLmNvbXBvbmVudHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiA4NXZoO1xyXG4gICAgLmNvbXBvbmVudF9fdGl0bGUge1xyXG4gICAgICBjb2xvcjogI2FhYWFhYTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICB9XHJcbiAgICAuY29tcG9uZW50X19jb250ZW50IHtcclxuICAgICAgICAuY29tcG9uZW50X19jb250ZW50X19mb3JtICAge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAuY29tcG9uZW50X19jb250ZW50X19mb3JtX19maWVsZHMge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbXBvbmVudF9fY29udGVudF9fZm9ybV9fc3VibWl0IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICB6LWluZGV4OiBjYWxjKHZhcigtLWhlYWRlci16LWluZGV4KSArIDEpO1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5jb21wb25lbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDg1dmg7XG59XG4uY29tcG9uZW50IC5jb21wb25lbnRfX3RpdGxlIHtcbiAgY29sb3I6ICNhYWFhYWE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuLmNvbXBvbmVudCAuY29tcG9uZW50X19jb250ZW50IC5jb21wb25lbnRfX2NvbnRlbnRfX2Zvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbXBvbmVudCAuY29tcG9uZW50X19jb250ZW50IC5jb21wb25lbnRfX2NvbnRlbnRfX2Zvcm0gLmNvbXBvbmVudF9fY29udGVudF9fZm9ybV9fZmllbGRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLmNvbXBvbmVudCAuY29tcG9uZW50X19jb250ZW50IC5jb21wb25lbnRfX2NvbnRlbnRfX2Zvcm0gLmNvbXBvbmVudF9fY29udGVudF9fZm9ybV9fc3VibWl0IHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/bank-admin/bank-admin-change-password/bank-admin-change-password.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/home/bank-admin/bank-admin-change-password/bank-admin-change-password.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: BankAdminChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankAdminChangePasswordComponent", function() { return BankAdminChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _bank_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bank-admin.service */ "./src/app/home/bank-admin/bank-admin.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.service */ "./src/app/shared/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let BankAdminChangePasswordComponent = class BankAdminChangePasswordComponent {
    constructor(translateService, sharedService, bankAdminService, router) {
        this.translateService = translateService;
        this.sharedService = sharedService;
        this.bankAdminService = bankAdminService;
        this.router = router;
        this.hideOldPassword = true;
        this.hideNewPassword = true;
        this.confirmNewPassword = true;
    }
    ngOnInit() {
        this.user = this.bankAdminService.getUser();
    }
    onSubmit() {
        if (!this.form.valid) {
            return;
        }
        if (this.form.controls['confirmNewPassword'].value !== this.form.controls['newPassword'].value) {
            return;
        }
        this.loading = true;
        this.bankAdminService.changePassword(this.form.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => this.loading = false))
            .subscribe(res => {
            if (!!res.success) {
                this.sharedService.createNotification('~passwordChangeSuccess', 'OK', 'success');
                this.bankAdminService.logout();
            }
        });
    }
    getErrorMessage(control) {
        if (!this.form) {
            return;
        }
        if (control === 'confirmNewPassword') {
            if (this.form.touched && (this.form.controls['confirmNewPassword'].value !== this.form.controls['newPassword'].value)) {
                return this.translateService.instant('~newPasswordIsNotMatched');
            }
        }
    }
};
BankAdminChangePasswordComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
    { type: src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: _bank_admin_service__WEBPACK_IMPORTED_MODULE_3__["BankAdminService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: false })
], BankAdminChangePasswordComponent.prototype, "form", void 0);
BankAdminChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'bank-admin-change-password',
        template: __webpack_require__(/*! raw-loader!./bank-admin-change-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/bank-admin/bank-admin-change-password/bank-admin-change-password.component.html"),
        styles: [__webpack_require__(/*! ./bank-admin-change-password.component.scss */ "./src/app/home/bank-admin/bank-admin-change-password/bank-admin-change-password.component.scss")]
    })
], BankAdminChangePasswordComponent);



/***/ }),

/***/ "./src/app/home/bank-admin/bank-admin.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/home/bank-admin/bank-admin.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYmFuay1hZG1pbi9iYW5rLWFkbWluLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/bank-admin/bank-admin.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/home/bank-admin/bank-admin.component.ts ***!
  \*********************************************************/
/*! exports provided: BankAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankAdminComponent", function() { return BankAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BankAdminComponent = class BankAdminComponent {
    constructor() { }
    ngOnInit() {
    }
};
BankAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'bank-admin',
        template: __webpack_require__(/*! raw-loader!./bank-admin.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/bank-admin/bank-admin.component.html"),
        styles: [__webpack_require__(/*! ./bank-admin.component.scss */ "./src/app/home/bank-admin/bank-admin.component.scss")]
    })
], BankAdminComponent);



/***/ }),

/***/ "./src/app/home/bank-admin/bank-admin.guard.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/bank-admin/bank-admin.guard.ts ***!
  \*****************************************************/
/*! exports provided: BankAdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankAdminGuard", function() { return BankAdminGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _bank_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bank-admin.service */ "./src/app/home/bank-admin/bank-admin.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let BankAdminGuard = class BankAdminGuard {
    constructor(bankService, router) {
        this.bankService = bankService;
        this.router = router;
    }
    canActivate(route, state) {
        const token = this.bankService.getToken();
        if (token) {
            return true;
        }
        this.router.navigateByUrl('/home/bank-admin/login');
    }
};
BankAdminGuard.ctorParameters = () => [
    { type: _bank_admin_service__WEBPACK_IMPORTED_MODULE_1__["BankAdminService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
BankAdminGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], BankAdminGuard);



/***/ }),

/***/ "./src/app/home/bank-admin/bank-admin.module.ts":
/*!******************************************************!*\
  !*** ./src/app/home/bank-admin/bank-admin.module.ts ***!
  \******************************************************/
/*! exports provided: BankAdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankAdminModule", function() { return BankAdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _bank_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bank-admin.component */ "./src/app/home/bank-admin/bank-admin.component.ts");
/* harmony import */ var _bank_admin_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bank-admin.routing */ "./src/app/home/bank-admin/bank-admin.routing.ts");
/* harmony import */ var _bank_login_bank_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bank-login/bank-login.component */ "./src/app/home/bank-admin/bank-login/bank-login.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _bank_customers_bank_customers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bank-customers/bank-customers.component */ "./src/app/home/bank-admin/bank-customers/bank-customers.component.ts");
/* harmony import */ var _bank_admin_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bank-admin.guard */ "./src/app/home/bank-admin/bank-admin.guard.ts");
/* harmony import */ var _bank_customers_customer_contact_popup_customer_contact_popup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bank-customers/customer-contact-popup/customer-contact-popup.component */ "./src/app/home/bank-admin/bank-customers/customer-contact-popup/customer-contact-popup.component.ts");
/* harmony import */ var src_app_popover_popover_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/popover/popover.module */ "./src/app/popover/popover.module.ts");
/* harmony import */ var _bank_customers_customer_note_popup_customer_note_popup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bank-customers/customer-note-popup/customer-note-popup.component */ "./src/app/home/bank-admin/bank-customers/customer-note-popup/customer-note-popup.component.ts");
/* harmony import */ var _bank_admin_change_password_bank_admin_change_password_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bank-admin-change-password/bank-admin-change-password.component */ "./src/app/home/bank-admin/bank-admin-change-password/bank-admin-change-password.component.ts");













let BankAdminModule = class BankAdminModule {
};
BankAdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _bank_admin_component__WEBPACK_IMPORTED_MODULE_3__["BankAdminComponent"],
            _bank_login_bank_login_component__WEBPACK_IMPORTED_MODULE_5__["BankLoginComponent"],
            _bank_customers_bank_customers_component__WEBPACK_IMPORTED_MODULE_7__["BankCustomersComponent"],
            _bank_customers_customer_contact_popup_customer_contact_popup_component__WEBPACK_IMPORTED_MODULE_9__["CustomerContactPopupComponent"],
            _bank_customers_customer_note_popup_customer_note_popup_component__WEBPACK_IMPORTED_MODULE_11__["CustomerNotePopupComponent"],
            _bank_admin_change_password_bank_admin_change_password_component__WEBPACK_IMPORTED_MODULE_12__["BankAdminChangePasswordComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _bank_admin_routing__WEBPACK_IMPORTED_MODULE_4__["BankAdminRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            src_app_popover_popover_module__WEBPACK_IMPORTED_MODULE_10__["PopoverModule"]
        ],
        providers: [_bank_admin_guard__WEBPACK_IMPORTED_MODULE_8__["BankAdminGuard"]],
        entryComponents: [_bank_customers_customer_contact_popup_customer_contact_popup_component__WEBPACK_IMPORTED_MODULE_9__["CustomerContactPopupComponent"], _bank_customers_customer_note_popup_customer_note_popup_component__WEBPACK_IMPORTED_MODULE_11__["CustomerNotePopupComponent"]]
    })
], BankAdminModule);



/***/ }),

/***/ "./src/app/home/bank-admin/bank-admin.routing.ts":
/*!*******************************************************!*\
  !*** ./src/app/home/bank-admin/bank-admin.routing.ts ***!
  \*******************************************************/
/*! exports provided: BankAdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankAdminRoutingModule", function() { return BankAdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _bank_login_bank_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bank-login/bank-login.component */ "./src/app/home/bank-admin/bank-login/bank-login.component.ts");
/* harmony import */ var _bank_customers_bank_customers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bank-customers/bank-customers.component */ "./src/app/home/bank-admin/bank-customers/bank-customers.component.ts");
/* harmony import */ var _bank_admin_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bank-admin.guard */ "./src/app/home/bank-admin/bank-admin.guard.ts");
/* harmony import */ var _bank_admin_change_password_bank_admin_change_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bank-admin-change-password/bank-admin-change-password.component */ "./src/app/home/bank-admin/bank-admin-change-password/bank-admin-change-password.component.ts");







const routes = [
    { path: '', redirectTo: 'customers', pathMatch: 'full' },
    { path: 'login', component: _bank_login_bank_login_component__WEBPACK_IMPORTED_MODULE_3__["BankLoginComponent"] },
    { path: 'customers', component: _bank_customers_bank_customers_component__WEBPACK_IMPORTED_MODULE_4__["BankCustomersComponent"], canActivate: [_bank_admin_guard__WEBPACK_IMPORTED_MODULE_5__["BankAdminGuard"]] },
    // {path: 'profile-update', component: BankAdminChangePasswordComponent}
    { path: 'profile-update', component: _bank_admin_change_password_bank_admin_change_password_component__WEBPACK_IMPORTED_MODULE_6__["BankAdminChangePasswordComponent"], canActivate: [_bank_admin_guard__WEBPACK_IMPORTED_MODULE_5__["BankAdminGuard"]] }
];
let BankAdminRoutingModule = class BankAdminRoutingModule {
};
BankAdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BankAdminRoutingModule);



/***/ }),

/***/ "./src/app/home/bank-admin/bank-customers/bank-customers.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/home/bank-admin/bank-customers/bank-customers.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  background: var(--background-secondary);\n  padding: 20px 0;\n  flex: 1 1 0;\n  width: 100%;\n}\n\n.active {\n  border-bottom: 1px solid var(--primary-default);\n}\n\n.card-wrapper {\n  display: inline-block;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 100px;\n  width: 140px;\n  margin-left: 10px;\n}\n\n.card-wrapper .card {\n  position: relative;\n}\n\n.card-wrapper .card .card__header {\n  padding: 10px;\n  font-weight: bold;\n  background: var(--secondary-default);\n}\n\n.card-wrapper .card .card__content {\n  padding: 10px;\n}\n\n.card-wrapper .card .card__content .card__content__row {\n  display: flex;\n  padding: 5px 0;\n  cursor: pointer;\n}\n\n.card-wrapper .card .card__content .card__content__row p {\n  font-size: 13px;\n}\n\n.card-wrapper .card .card__content .card__content__row b {\n  font-size: 13px;\n}\n\n.component {\n  display: inline-block;\n  vertical-align: top;\n  width: 100%;\n  box-shadow: 0.0625rem 0.125rem 0.6875rem 0 rgba(0, 0, 0, 0.2);\n  position: relative;\n  width: calc(100% - 150px);\n}\n\n.component .component__header {\n  background: var(--primary-default);\n  color: #ffffff;\n  font-family: \"Montserrat-SemiBold\";\n  font-size: 18px;\n  padding: 15px 20px;\n  font-weight: 400;\n  letter-spacing: -0.54px;\n  border-bottom: 1px solid #ffffff;\n}\n\n.component .component__content {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  background: #ffffff;\n  width: 100%;\n  overflow: auto;\n}\n\n.component .component__content h3 {\n  padding: 5px 20px;\n  color: var(--secondary-default);\n  cursor: pointer;\n}\n\n.component .component__content .table {\n  box-shadow: none;\n  table-layout: auto;\n}\n\n.component .component__content .table.--customers td {\n  text-align: center;\n}\n\n.component .component__content .table.--customers td .td-content {\n  text-align: center;\n}\n\n.component .component__content .table.--customers td.information .actions {\n  display: flex;\n}\n\n.arrows {\n  width: auto;\n  display: flex;\n  justify-content: space-between;\n  position: -webkit-sticky;\n  position: absolute;\n  top: 3px;\n  z-index: calc(var(--header-z-index) -1);\n  height: 0;\n  right: 24px;\n}\n\n.arrows .arrow {\n  font-size: 18px;\n  cursor: pointer;\n}\n\n.arrows .arrow.--prev {\n  -webkit-transform: translateX(-25px) rotateY(180deg);\n          transform: translateX(-25px) rotateY(180deg);\n}\n\n.arrows .arrow.--next {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9iYW5rLWFkbWluL2JhbmstY3VzdG9tZXJzL0Q6XFxzb3VyY2UgY29kZXNcXHBsdXMtbWludXMvc3JjXFxhcHBcXGhvbWVcXGJhbmstYWRtaW5cXGJhbmstY3VzdG9tZXJzXFxiYW5rLWN1c3RvbWVycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9iYW5rLWFkbWluL2JhbmstY3VzdG9tZXJzL2JhbmstY3VzdG9tZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLHVDQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSwrQ0FBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREFJO0VBQ0ksa0JBQUE7QUNFUjs7QUREUTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0FDR1o7O0FERFE7RUFDSSxhQUFBO0FDR1o7O0FERlk7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNJaEI7O0FESGdCO0VBQ0ksZUFBQTtBQ0twQjs7QURIZ0I7RUFDSSxlQUFBO0FDS3BCOztBREVBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSw2REFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURBSTtFQUNLLGtDQUFBO0VBQ0QsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0FDRVI7O0FEQUk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNFUjs7QUREUTtFQUNJLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0FDR1o7O0FERFE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDR1o7O0FERGdCO0VBQ0ksa0JBQUE7QUNHcEI7O0FERm9CO0VBQ0ksa0JBQUE7QUNJeEI7O0FERHdCO0VBQ0ksYUFBQTtBQ0c1Qjs7QURhQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLHVDQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNYSjs7QURhSTtFQUNJLGVBQUE7RUFDRCxlQUFBO0FDWFA7O0FEYVE7RUFDRSxvREFBQTtVQUFBLDRDQUFBO0FDWFY7O0FEYVE7RUFDRSxlQUFBO0FDWFYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2JhbmstYWRtaW4vYmFuay1jdXN0b21lcnMvYmFuay1jdXN0b21lcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcclxuICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgIGZsZXg6IDEgMSAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktZGVmYXVsdCk7XHJcbn1cclxuXHJcbi5jYXJkLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMTAwcHg7XHJcbiAgICB3aWR0aDoxNDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgLmNhcmQge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAuY2FyZF9faGVhZGVyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1kZWZhdWx0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmRfX2NvbnRlbnQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAuY2FyZF9fY29udGVudF9fcm93IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjVweCAwO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uY29tcG9uZW50IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaGFkb3c6IDAuMDYyNXJlbSAwLjEyNXJlbSAwLjY4NzVyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTUwcHgpO1xyXG4gICAgLmNvbXBvbmVudF9faGVhZGVyIHtcclxuICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1kZWZhdWx0KTtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0LVNlbWlCb2xkXCI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41NHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgfVxyXG4gICAgLmNvbXBvbmVudF9fY29udGVudCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDIwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZGVmYXVsdCk7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRhYmxlIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgdGFibGUtbGF5b3V0OiBhdXRvO1xyXG4gICAgICAgICAgICAmLi0tY3VzdG9tZXJzIHtcclxuICAgICAgICAgICAgICAgIHRkIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgLnRkLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICYuaW5mb3JtYXRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWN0aW9ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYXJyb3dzIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogM3B4O1xyXG4gICAgei1pbmRleDogY2FsYyh2YXIoLS1oZWFkZXItei1pbmRleCkgLTEpO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgcmlnaHQ6IDI0cHg7XHJcblxyXG4gICAgLmFycm93IHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICYuLS1wcmV2IHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjVweCkgcm90YXRlWSgxODBkZWcpIDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi4tLW5leHQge1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI1cHgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9IiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIGZsZXg6IDEgMSAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFjdGl2ZSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWRlZmF1bHQpO1xufVxuXG4uY2FyZC13cmFwcGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDEwMHB4O1xuICB3aWR0aDogMTQwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmNhcmQtd3JhcHBlciAuY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jYXJkLXdyYXBwZXIgLmNhcmQgLmNhcmRfX2hlYWRlciB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktZGVmYXVsdCk7XG59XG4uY2FyZC13cmFwcGVyIC5jYXJkIC5jYXJkX19jb250ZW50IHtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5jYXJkLXdyYXBwZXIgLmNhcmQgLmNhcmRfX2NvbnRlbnQgLmNhcmRfX2NvbnRlbnRfX3JvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2FyZC13cmFwcGVyIC5jYXJkIC5jYXJkX19jb250ZW50IC5jYXJkX19jb250ZW50X19yb3cgcCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5jYXJkLXdyYXBwZXIgLmNhcmQgLmNhcmRfX2NvbnRlbnQgLmNhcmRfX2NvbnRlbnRfX3JvdyBiIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uY29tcG9uZW50IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogMC4wNjI1cmVtIDAuMTI1cmVtIDAuNjg3NXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTUwcHgpO1xufVxuLmNvbXBvbmVudCAuY29tcG9uZW50X19oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWRlZmF1bHQpO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdC1TZW1pQm9sZFwiO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjU0cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmZmZmO1xufVxuLmNvbXBvbmVudCAuY29tcG9uZW50X19jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4uY29tcG9uZW50IC5jb21wb25lbnRfX2NvbnRlbnQgaDMge1xuICBwYWRkaW5nOiA1cHggMjBweDtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1kZWZhdWx0KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbXBvbmVudCAuY29tcG9uZW50X19jb250ZW50IC50YWJsZSB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHRhYmxlLWxheW91dDogYXV0bztcbn1cbi5jb21wb25lbnQgLmNvbXBvbmVudF9fY29udGVudCAudGFibGUuLS1jdXN0b21lcnMgdGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29tcG9uZW50IC5jb21wb25lbnRfX2NvbnRlbnQgLnRhYmxlLi0tY3VzdG9tZXJzIHRkIC50ZC1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbXBvbmVudCAuY29tcG9uZW50X19jb250ZW50IC50YWJsZS4tLWN1c3RvbWVycyB0ZC5pbmZvcm1hdGlvbiAuYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uYXJyb3dzIHtcbiAgd2lkdGg6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogM3B4O1xuICB6LWluZGV4OiBjYWxjKHZhcigtLWhlYWRlci16LWluZGV4KSAtMSk7XG4gIGhlaWdodDogMDtcbiAgcmlnaHQ6IDI0cHg7XG59XG4uYXJyb3dzIC5hcnJvdyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmFycm93cyAuYXJyb3cuLS1wcmV2IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yNXB4KSByb3RhdGVZKDE4MGRlZyk7XG59XG4uYXJyb3dzIC5hcnJvdy4tLW5leHQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/bank-admin/bank-customers/bank-customers.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/home/bank-admin/bank-customers/bank-customers.component.ts ***!
  \****************************************************************************/
/*! exports provided: BankCustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankCustomersComponent", function() { return BankCustomersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/shared.service */ "./src/app/shared/shared.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _bank_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bank-admin.service */ "./src/app/home/bank-admin/bank-admin.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_popover_popover_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/popover/popover.service */ "./src/app/popover/popover.service.ts");
/* harmony import */ var _customer_contact_popup_customer_contact_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer-contact-popup/customer-contact-popup.component */ "./src/app/home/bank-admin/bank-customers/customer-contact-popup/customer-contact-popup.component.ts");
/* harmony import */ var _customer_note_popup_customer_note_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customer-note-popup/customer-note-popup.component */ "./src/app/home/bank-admin/bank-customers/customer-note-popup/customer-note-popup.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var src_app_admin_panel_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/admin-panel/shared/components/confirm-dialog/confirm-dialog.component */ "./src/app/admin-panel/shared/components/confirm-dialog/confirm-dialog.component.ts");












let BankCustomersComponent = class BankCustomersComponent {
    constructor(bankService, changeRef, popper, titleService, translateService, sharedService, dialog) {
        this.bankService = bankService;
        this.changeRef = changeRef;
        this.popper = popper;
        this.titleService = titleService;
        this.translateService = translateService;
        this.sharedService = sharedService;
        this.dialog = dialog;
        this.cancelled = false;
        this.called = false;
        this.titleService.setTitle(this.translateService.instant('~forBanks'));
    }
    ngOnInit() {
        this.getOrderList();
        this.getOrderStats();
    }
    getOrderList() {
        this.orders = undefined;
        this.loading = true;
        this.changeRef.detectChanges();
        this.bankService.getOrderList(this.cancelled, this.called)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => {
            this.loading = false;
            this.changeRef.detectChanges();
        }))
            .subscribe(res => {
            this.orders = res;
        });
    }
    onCustomerContactPopup(order, target) {
        const ref = this.popper.open({
            content: _customer_contact_popup_customer_contact_popup_component__WEBPACK_IMPORTED_MODULE_6__["CustomerContactPopupComponent"],
            origin: target,
            width: '196px',
            data: {
                order: order
            }
        });
    }
    onCustomerNotePopup(order, target) {
        const ref = this.popper.open({
            content: _customer_note_popup_customer_note_popup_component__WEBPACK_IMPORTED_MODULE_7__["CustomerNotePopupComponent"],
            origin: target,
            width: '242px',
            height: '341px',
            data: {
                order: order
            }
        });
        ref.afterClosed$.subscribe((res) => {
            if (res && res && res.data && res.data.success) {
                this.getOrderList();
                this.getOrderStats();
            }
        });
    }
    onCancelOrder(order) {
        const ref = this.dialog.open(src_app_admin_panel_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmDialogComponent"], {
            data: {
                title: `${this.translateService.instant('~confirmOrderCancel')} ?`
            }
        });
        ref.afterClosed().subscribe(res => {
            if (res) {
                this.bankService.postLoanOrderCancel(order)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => this.loading = false))
                    .subscribe(res => {
                    if (res.success) {
                        this.sharedService.createNotification(this.translateService.instant('~orderCancelled'), 'OK', 'success');
                        this.getOrderList();
                        this.getOrderStats();
                    }
                });
            }
        });
    }
    onNextRateScroll() {
        try {
            const el = document.getElementById('customers-table');
            el.scrollBy({
                left: 200,
                behavior: 'smooth'
            });
        }
        catch (er) {
            console.log(er);
        }
        finally {
            this.changeRef.detectChanges();
        }
    }
    onPrevRateScroll() {
        try {
            const el = document.getElementById('customers-table');
            el.scrollBy({
                left: -200,
                behavior: 'smooth'
            });
        }
        catch (er) {
            console.log(er);
        }
        finally {
            this.changeRef.detectChanges();
        }
    }
    show(order, origin) {
        const ref = this.popper.open({
            content: _customer_contact_popup_customer_contact_popup_component__WEBPACK_IMPORTED_MODULE_6__["CustomerContactPopupComponent"],
            //  content: 'Hello world!',
            // content: InsidePopoverComponent,
            origin,
            width: '200px',
            data: {
                orderId: order
            }
        });
    }
    getOrderStats() {
        this.orderStats = undefined;
        this.bankService.getOrderStats()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => {
            this.changeRef.detectChanges();
        }))
            .subscribe(res => {
            this.orderStats = res;
        });
    }
    onGetCalled() {
        this.cancelled = false;
        this.called = true;
        this.getOrderList();
    }
    onGetCancelled() {
        this.cancelled = true;
        this.called = false;
        this.getOrderList();
    }
    onGetAll() {
        this.called = false;
        this.cancelled = false;
        this.getOrderList();
    }
};
BankCustomersComponent.ctorParameters = () => [
    { type: _bank_admin_service__WEBPACK_IMPORTED_MODULE_3__["BankAdminService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: src_app_popover_popover_service__WEBPACK_IMPORTED_MODULE_5__["Popover"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] },
    { type: _shared_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] }
];
BankCustomersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'bank-customers',
        template: __webpack_require__(/*! raw-loader!./bank-customers.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/bank-admin/bank-customers/bank-customers.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./bank-customers.component.scss */ "./src/app/home/bank-admin/bank-customers/bank-customers.component.scss")]
    })
], BankCustomersComponent);



/***/ }),

/***/ "./src/app/home/bank-admin/bank-customers/customer-contact-popup/customer-contact-popup.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/home/bank-admin/bank-customers/customer-contact-popup/customer-contact-popup.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  width: 100%;\n}\n\n.component {\n  background: var(--secondary-default);\n  padding: 20px;\n  width: 100%;\n}\n\n.component .component__header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 30px;\n}\n\n.component .component__header .component__header__title {\n  font-family: \"Montserrat-SemiBold\";\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: -0.19px;\n}\n\n.component .component__header .component__header__icon {\n  padding-left: 10px;\n  cursor: pointer;\n}\n\n.component .component__content .component__content__row {\n  display: flex;\n  color: #000000;\n  font-size: 17px;\n  margin-bottom: 12px;\n}\n\n.component .component__content .component__content__row .component__content__row__key {\n  font-size: 15px;\n  padding-right: 7px;\n  font-family: \"Montserrat-SemiBold\";\n  font-weight: 600;\n}\n\n.component .component__content .component__content__row .component__content__row__value {\n  font-weight: 400;\n  font-size: 14px;\n  font-family: \"Montserrat-Medium\";\n}\n\n.spinner-wrapper {\n  height: 182px;\n  width: 196px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9iYW5rLWFkbWluL2JhbmstY3VzdG9tZXJzL2N1c3RvbWVyLWNvbnRhY3QtcG9wdXAvRDpcXHNvdXJjZSBjb2Rlc1xccGx1cy1taW51cy9zcmNcXGFwcFxcaG9tZVxcYmFuay1hZG1pblxcYmFuay1jdXN0b21lcnNcXGN1c3RvbWVyLWNvbnRhY3QtcG9wdXBcXGN1c3RvbWVyLWNvbnRhY3QtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvYmFuay1hZG1pbi9iYW5rLWN1c3RvbWVycy9jdXN0b21lci1jb250YWN0LXBvcHVwL2N1c3RvbWVyLWNvbnRhY3QtcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksb0NBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREFJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQ0VSOztBRERRO0VBQ0ksa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0daOztBRERRO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FDR1o7O0FEQ1E7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0NaOztBREFZO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtBQ0VoQjs7QURBWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FDRWhCOztBRElBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYmFuay1hZG1pbi9iYW5rLWN1c3RvbWVycy9jdXN0b21lci1jb250YWN0LXBvcHVwL2N1c3RvbWVyLWNvbnRhY3QtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29tcG9uZW50IHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeS1kZWZhdWx0KTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC5jb21wb25lbnRfX2hlYWRlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgICAgICAuY29tcG9uZW50X19oZWFkZXJfX3RpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdC1TZW1pQm9sZFwiO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4xOXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29tcG9uZW50X19oZWFkZXJfX2ljb24ge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29tcG9uZW50X19jb250ZW50IHtcclxuICAgICAgICAuY29tcG9uZW50X19jb250ZW50X19yb3cge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgICAgICAgICAuY29tcG9uZW50X19jb250ZW50X19yb3dfX2tleSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA3cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0LVNlbWlCb2xkXCI7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb21wb25lbnRfX2NvbnRlbnRfX3Jvd19fdmFsdWUge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQtTWVkaXVtXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zcGlubmVyLXdyYXBwZXIge1xyXG4gICAgaGVpZ2h0OiAxODJweDtcclxuICAgIHdpZHRoOiAxOTZweDtcclxufSIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29tcG9uZW50IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWRlZmF1bHQpO1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb21wb25lbnQgLmNvbXBvbmVudF9faGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cbi5jb21wb25lbnQgLmNvbXBvbmVudF9faGVhZGVyIC5jb21wb25lbnRfX2hlYWRlcl9fdGl0bGUge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0LVNlbWlCb2xkXCI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjE5cHg7XG59XG4uY29tcG9uZW50IC5jb21wb25lbnRfX2hlYWRlciAuY29tcG9uZW50X19oZWFkZXJfX2ljb24ge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb21wb25lbnQgLmNvbXBvbmVudF9fY29udGVudCAuY29tcG9uZW50X19jb250ZW50X19yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuLmNvbXBvbmVudCAuY29tcG9uZW50X19jb250ZW50IC5jb21wb25lbnRfX2NvbnRlbnRfX3JvdyAuY29tcG9uZW50X19jb250ZW50X19yb3dfX2tleSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZy1yaWdodDogN3B4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0LVNlbWlCb2xkXCI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uY29tcG9uZW50IC5jb21wb25lbnRfX2NvbnRlbnQgLmNvbXBvbmVudF9fY29udGVudF9fcm93IC5jb21wb25lbnRfX2NvbnRlbnRfX3Jvd19fdmFsdWUge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQtTWVkaXVtXCI7XG59XG5cbi5zcGlubmVyLXdyYXBwZXIge1xuICBoZWlnaHQ6IDE4MnB4O1xuICB3aWR0aDogMTk2cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/bank-admin/bank-customers/customer-contact-popup/customer-contact-popup.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/home/bank-admin/bank-customers/customer-contact-popup/customer-contact-popup.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: CustomerContactPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerContactPopupComponent", function() { return CustomerContactPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_popover_popover_ref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/popover/popover-ref */ "./src/app/popover/popover-ref.ts");
/* harmony import */ var _bank_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../bank-admin.service */ "./src/app/home/bank-admin/bank-admin.service.ts");




let CustomerContactPopupComponent = class CustomerContactPopupComponent {
    constructor(popoverRef, bankService) {
        this.popoverRef = popoverRef;
        this.bankService = bankService;
        this.order = this.popoverRef.data.order;
    }
    ngOnInit() {
        this.postLoanOrderShowInfo();
    }
    close() {
        this.popoverRef.close();
    }
    postLoanOrderShowInfo() {
        this.bankService.postLoanOrderShowInfo(this.order)
            .subscribe(res => {
            this.data = res;
        });
    }
};
CustomerContactPopupComponent.ctorParameters = () => [
    { type: src_app_popover_popover_ref__WEBPACK_IMPORTED_MODULE_2__["PopoverRef"] },
    { type: _bank_admin_service__WEBPACK_IMPORTED_MODULE_3__["BankAdminService"] }
];
CustomerContactPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'customer-contact-popup',
        template: __webpack_require__(/*! raw-loader!./customer-contact-popup.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/bank-admin/bank-customers/customer-contact-popup/customer-contact-popup.component.html"),
        styles: [__webpack_require__(/*! ./customer-contact-popup.component.scss */ "./src/app/home/bank-admin/bank-customers/customer-contact-popup/customer-contact-popup.component.scss")]
    })
], CustomerContactPopupComponent);



/***/ }),

/***/ "./src/app/home/bank-admin/bank-customers/customer-note-popup/customer-note-popup.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/home/bank-admin/bank-customers/customer-note-popup/customer-note-popup.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  width: 100%;\n}\n\n.component {\n  padding: 20px;\n  width: 100%;\n}\n\n.component .component__header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 15px;\n  border-bottom: 1px solid #e1e1e1;\n  margin-bottom: 20px;\n}\n\n.component .component__header .component__header__title {\n  font-family: \"Montserrat-SemiBold\";\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: -0.19px;\n}\n\n.component .component__header .component__header__icon {\n  padding-left: 10px;\n  cursor: pointer;\n}\n\n.component .component__content .component__content__row {\n  display: flex;\n  color: #000000;\n  font-size: 17px;\n  margin-bottom: 12px;\n}\n\n.component .component__content .component__content__row .component__content__row__key {\n  font-size: 15px;\n  padding-right: 7px;\n  font-family: \"Montserrat-SemiBold\";\n  font-weight: 600;\n}\n\n.component .component__content .component__content__row .component__content__row__value {\n  font-weight: 400;\n  font-family: \"Montserrat-Medium\";\n}\n\n.spinner-wrapper {\n  height: 182px;\n  width: 196px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9iYW5rLWFkbWluL2JhbmstY3VzdG9tZXJzL2N1c3RvbWVyLW5vdGUtcG9wdXAvRDpcXHNvdXJjZSBjb2Rlc1xccGx1cy1taW51cy9zcmNcXGFwcFxcaG9tZVxcYmFuay1hZG1pblxcYmFuay1jdXN0b21lcnNcXGN1c3RvbWVyLW5vdGUtcG9wdXBcXGN1c3RvbWVyLW5vdGUtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvYmFuay1hZG1pbi9iYW5rLWN1c3RvbWVycy9jdXN0b21lci1ub3RlLXBvcHVwL2N1c3RvbWVyLW5vdGUtcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUNDSjs7QURBSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0FDRVI7O0FERFE7RUFDSSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDR1o7O0FERFE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNHWjs7QURDUTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQ1o7O0FEQVk7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0FDRWhCOztBREFZO0VBQ0ksZ0JBQUE7RUFDQSxnQ0FBQTtBQ0VoQjs7QURJQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9ob21lL2JhbmstYWRtaW4vYmFuay1jdXN0b21lcnMvY3VzdG9tZXItbm90ZS1wb3B1cC9jdXN0b21lci1ub3RlLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbXBvbmVudCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAuY29tcG9uZW50X19oZWFkZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWUxZTE7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAuY29tcG9uZW50X19oZWFkZXJfX3RpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdC1TZW1pQm9sZFwiO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4xOXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29tcG9uZW50X19oZWFkZXJfX2ljb24ge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29tcG9uZW50X19jb250ZW50IHtcclxuICAgICAgICAuY29tcG9uZW50X19jb250ZW50X19yb3cge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgICAgICAgICAuY29tcG9uZW50X19jb250ZW50X19yb3dfX2tleSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA3cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0LVNlbWlCb2xkXCI7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb21wb25lbnRfX2NvbnRlbnRfX3Jvd19fdmFsdWUge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQtTWVkaXVtXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zcGlubmVyLXdyYXBwZXIge1xyXG4gICAgaGVpZ2h0OiAxODJweDtcclxuICAgIHdpZHRoOiAxOTZweDtcclxufSIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29tcG9uZW50IHtcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29tcG9uZW50IC5jb21wb25lbnRfX2hlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTFlMWUxO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmNvbXBvbmVudCAuY29tcG9uZW50X19oZWFkZXIgLmNvbXBvbmVudF9faGVhZGVyX190aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQtU2VtaUJvbGRcIjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMTlweDtcbn1cbi5jb21wb25lbnQgLmNvbXBvbmVudF9faGVhZGVyIC5jb21wb25lbnRfX2hlYWRlcl9faWNvbiB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbXBvbmVudCAuY29tcG9uZW50X19jb250ZW50IC5jb21wb25lbnRfX2NvbnRlbnRfX3JvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDE3cHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4uY29tcG9uZW50IC5jb21wb25lbnRfX2NvbnRlbnQgLmNvbXBvbmVudF9fY29udGVudF9fcm93IC5jb21wb25lbnRfX2NvbnRlbnRfX3Jvd19fa2V5IHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA3cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQtU2VtaUJvbGRcIjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5jb21wb25lbnQgLmNvbXBvbmVudF9fY29udGVudCAuY29tcG9uZW50X19jb250ZW50X19yb3cgLmNvbXBvbmVudF9fY29udGVudF9fcm93X192YWx1ZSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQtTWVkaXVtXCI7XG59XG5cbi5zcGlubmVyLXdyYXBwZXIge1xuICBoZWlnaHQ6IDE4MnB4O1xuICB3aWR0aDogMTk2cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/bank-admin/bank-customers/customer-note-popup/customer-note-popup.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/home/bank-admin/bank-customers/customer-note-popup/customer-note-popup.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: CustomerNotePopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerNotePopupComponent", function() { return CustomerNotePopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_popover_popover_ref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/popover/popover-ref */ "./src/app/popover/popover-ref.ts");
/* harmony import */ var _bank_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../bank-admin.service */ "./src/app/home/bank-admin/bank-admin.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let CustomerNotePopupComponent = class CustomerNotePopupComponent {
    constructor(popoverRef, bankService) {
        this.popoverRef = popoverRef;
        this.bankService = bankService;
        this.order = this.popoverRef.data.order;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.form.form.controls['bankNote'].setValue(this.order.bankNote);
            this.bankNoteInput.focus();
        }, 300);
    }
    close() {
        this.popoverRef.close();
    }
    onSubmit() {
        if (!this.form.valid) {
            return;
        }
        this.loading = true;
        this.postLoanOrderCalled();
    }
    postLoanOrderCalled() {
        this.bankService.postLoanOrderCalled(this.order, this.form.value.bankNote)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => this.loading = false))
            .subscribe(res => this.popoverRef.close(res));
    }
};
CustomerNotePopupComponent.ctorParameters = () => [
    { type: src_app_popover_popover_ref__WEBPACK_IMPORTED_MODULE_2__["PopoverRef"] },
    { type: _bank_admin_service__WEBPACK_IMPORTED_MODULE_3__["BankAdminService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: true })
], CustomerNotePopupComponent.prototype, "form", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bankNoteInput', { static: true })
], CustomerNotePopupComponent.prototype, "bankNoteInput", void 0);
CustomerNotePopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'customer-note-popup',
        template: __webpack_require__(/*! raw-loader!./customer-note-popup.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/bank-admin/bank-customers/customer-note-popup/customer-note-popup.component.html"),
        styles: [__webpack_require__(/*! ./customer-note-popup.component.scss */ "./src/app/home/bank-admin/bank-customers/customer-note-popup/customer-note-popup.component.scss")]
    })
], CustomerNotePopupComponent);



/***/ }),

/***/ "./src/app/home/bank-admin/bank-login/bank-login.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/home/bank-admin/bank-login/bank-login.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  background: var(--background-secondary);\n  padding: 20px 0;\n  flex: 1 1 0;\n}\n\n.login {\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0.0625rem 0.125rem 0.6875rem 0 rgba(0, 0, 0, 0.2);\n}\n\n.login .login__header {\n  background: #ffffff;\n  color: var(--primary-default);\n  font-family: \"Montserrat-SemiBold\";\n  font-size: 18px;\n  padding: 10px 20px;\n  font-weight: 400;\n  letter-spacing: -0.54px;\n  border-bottom: 1px solid #00C853;\n}\n\n.login .login__content {\n  position: relative;\n  display: flex;\n  background: #ffffff;\n}\n\n.login .login__content .login__content__info {\n  flex: 7;\n  display: flex;\n  flex-direction: column;\n  padding: 3.125rem 20px;\n  background: #00C853;\n  position: relative;\n  color: #ffffff;\n  z-index: 2;\n  -webkit-clip-path: circle(62% at 38% 50%);\n          clip-path: circle(62% at 38% 50%);\n}\n\n.login .login__content .login__content__info .advantages {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  padding-top: 1.875rem;\n}\n\n.login .login__content .login__content__info .advantages .advantage {\n  display: flex;\n  align-items: center;\n  padding: 10px 0;\n}\n\n.login .login__content .login__content__info .advantages .advantage .advantage__symbol {\n  background: #ffffff;\n  flex: 0 0 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n\n.login .login__content .login__content__info .advantages .advantage .advantage__text {\n  font-size: 0.9375rem;\n}\n\n.login .login__content .login__content__form {\n  flex: 5;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background: #ffffff;\n  padding: 1.25rem;\n  width: 100%;\n}\n\n.login .login__content .login__content__form .signup-form {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.login .login__content .login__content__form .signup-form .form-submit {\n  width: 150px;\n  align-self: flex-end;\n}\n\n.login .login__content .login__content__form .login__content__form__actions {\n  display: flex;\n}\n\n@media all and (max-width: 992px) {\n  .login .login__content .login__content__info {\n    -webkit-clip-path: circle(62% at 30% 50%);\n            clip-path: circle(62% at 30% 50%);\n  }\n}\n\n@media all and (max-width: 768px) {\n  .login .login__content .login__content__info {\n    -webkit-clip-path: circle(62% at 16% 50%);\n            clip-path: circle(62% at 16% 50%);\n  }\n}\n\n@media all and (max-width: 576px) {\n  .login .login__content {\n    flex-direction: column;\n  }\n  .login .login__content .login__content__info {\n    -webkit-clip-path: none;\n            clip-path: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9iYW5rLWFkbWluL2JhbmstbG9naW4vRDpcXHNvdXJjZSBjb2Rlc1xccGx1cy1taW51cy9zcmNcXGFwcFxcaG9tZVxcYmFuay1hZG1pblxcYmFuay1sb2dpblxcYmFuay1sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9iYW5rLWFkbWluL2JhbmstbG9naW4vYmFuay1sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSx1Q0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQyw2REFBQTtBQ0NMOztBREFJO0VBQ0ssbUJBQUE7RUFDRCw2QkFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0FDRVI7O0FEQUk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0VSOztBRERRO0VBQ0ksT0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0UsbUJBQUE7RUFDRixrQkFBQTtFQUNBLGNBQUE7RUFDRSxVQUFBO0VBQ0QseUNBQUE7VUFBQSxpQ0FBQTtBQ0diOztBREZZO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0FDSWhCOztBREhnQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNLcEI7O0FESm9CO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNNeEI7O0FESm9CO0VBQ0ksb0JBQUE7QUNNeEI7O0FERFE7RUFDSSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQyxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0diOztBREZZO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ0loQjs7QURIZ0I7RUFDSSxZQUFBO0VBQ0Esb0JBQUE7QUNLcEI7O0FERlk7RUFDSSxhQUFBO0FDSWhCOztBRENBO0VBR1k7SUFDSSx5Q0FBQTtZQUFBLGlDQUFBO0VDQWQ7QUFDRjs7QURLQTtFQUdZO0lBQ0kseUNBQUE7WUFBQSxpQ0FBQTtFQ0xkO0FBQ0Y7O0FEU0E7RUFFUTtJQUNJLHNCQUFBO0VDUlY7RURTVTtJQUNJLHVCQUFBO1lBQUEsZUFBQTtFQ1BkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2JhbmstYWRtaW4vYmFuay1sb2dpbi9iYW5rLWxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICBmbGV4OiAxIDEgMDtcclxufVxyXG5cclxuLmxvZ2luIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgIGJveC1zaGFkb3c6IDAuMDYyNXJlbSAwLjEyNXJlbSAwLjY4NzVyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAubG9naW5fX2hlYWRlciB7XHJcbiAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktZGVmYXVsdCk7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdC1TZW1pQm9sZFwiO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNTRweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwQzg1MztcclxuICAgIH1cclxuICAgIC5sb2dpbl9fY29udGVudCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICAubG9naW5fX2NvbnRlbnRfX2luZm8ge1xyXG4gICAgICAgICAgICBmbGV4OiA3O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzLjEyNXJlbSAyMHB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMEM4NTM7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgIGNsaXAtcGF0aDogY2lyY2xlKDYyJSBhdCAzOCUgNTAlKTtcclxuICAgICAgICAgICAgLmFkdmFudGFnZXMge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEuODc1cmVtO1xyXG4gICAgICAgICAgICAgICAgLmFkdmFudGFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgICAgICAgICAgICAuYWR2YW50YWdlX19zeW1ib2wge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAwIDAgMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmFkdmFudGFnZV9fdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAubG9naW5fX2NvbnRlbnRfX2Zvcm0ge1xyXG4gICAgICAgICAgICBmbGV4OiA1O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICBwYWRkaW5nOiAxLjI1cmVtO1xyXG4gICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIC5zaWdudXAtZm9ybSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgLmZvcm0tc3VibWl0IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxvZ2luX19jb250ZW50X19mb3JtX19hY3Rpb25zIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIC5sb2dpbiB7XHJcbiAgICAgICAgLmxvZ2luX19jb250ZW50IHtcclxuICAgICAgICAgICAgLmxvZ2luX19jb250ZW50X19pbmZvIHtcclxuICAgICAgICAgICAgICAgIGNsaXAtcGF0aDogY2lyY2xlKDYyJSBhdCAzMCUgNTAlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmxvZ2luIHtcclxuICAgICAgICAubG9naW5fX2NvbnRlbnQge1xyXG4gICAgICAgICAgICAubG9naW5fX2NvbnRlbnRfX2luZm8ge1xyXG4gICAgICAgICAgICAgICAgY2xpcC1wYXRoOiBjaXJjbGUoNjIlIGF0IDE2JSA1MCUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgIC5sb2dpbiB7XHJcbiAgICAgICAgLmxvZ2luX19jb250ZW50IHtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgLmxvZ2luX19jb250ZW50X19pbmZvIHtcclxuICAgICAgICAgICAgICAgIGNsaXAtcGF0aDogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcbiAgcGFkZGluZzogMjBweCAwO1xuICBmbGV4OiAxIDEgMDtcbn1cblxuLmxvZ2luIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm94LXNoYWRvdzogMC4wNjI1cmVtIDAuMTI1cmVtIDAuNjg3NXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5sb2dpbiAubG9naW5fX2hlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWRlZmF1bHQpO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0LVNlbWlCb2xkXCI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNTRweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMEM4NTM7XG59XG4ubG9naW4gLmxvZ2luX19jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuLmxvZ2luIC5sb2dpbl9fY29udGVudCAubG9naW5fX2NvbnRlbnRfX2luZm8ge1xuICBmbGV4OiA3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAzLjEyNXJlbSAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjMDBDODUzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB6LWluZGV4OiAyO1xuICBjbGlwLXBhdGg6IGNpcmNsZSg2MiUgYXQgMzglIDUwJSk7XG59XG4ubG9naW4gLmxvZ2luX19jb250ZW50IC5sb2dpbl9fY29udGVudF9faW5mbyAuYWR2YW50YWdlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmctdG9wOiAxLjg3NXJlbTtcbn1cbi5sb2dpbiAubG9naW5fX2NvbnRlbnQgLmxvZ2luX19jb250ZW50X19pbmZvIC5hZHZhbnRhZ2VzIC5hZHZhbnRhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG4ubG9naW4gLmxvZ2luX19jb250ZW50IC5sb2dpbl9fY29udGVudF9faW5mbyAuYWR2YW50YWdlcyAuYWR2YW50YWdlIC5hZHZhbnRhZ2VfX3N5bWJvbCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGZsZXg6IDAgMCAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmxvZ2luIC5sb2dpbl9fY29udGVudCAubG9naW5fX2NvbnRlbnRfX2luZm8gLmFkdmFudGFnZXMgLmFkdmFudGFnZSAuYWR2YW50YWdlX190ZXh0IHtcbiAgZm9udC1zaXplOiAwLjkzNzVyZW07XG59XG4ubG9naW4gLmxvZ2luX19jb250ZW50IC5sb2dpbl9fY29udGVudF9fZm9ybSB7XG4gIGZsZXg6IDU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAxLjI1cmVtO1xuICB3aWR0aDogMTAwJTtcbn1cbi5sb2dpbiAubG9naW5fX2NvbnRlbnQgLmxvZ2luX19jb250ZW50X19mb3JtIC5zaWdudXAtZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmxvZ2luIC5sb2dpbl9fY29udGVudCAubG9naW5fX2NvbnRlbnRfX2Zvcm0gLnNpZ251cC1mb3JtIC5mb3JtLXN1Ym1pdCB7XG4gIHdpZHRoOiAxNTBweDtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG4ubG9naW4gLmxvZ2luX19jb250ZW50IC5sb2dpbl9fY29udGVudF9fZm9ybSAubG9naW5fX2NvbnRlbnRfX2Zvcm1fX2FjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAubG9naW4gLmxvZ2luX19jb250ZW50IC5sb2dpbl9fY29udGVudF9faW5mbyB7XG4gICAgY2xpcC1wYXRoOiBjaXJjbGUoNjIlIGF0IDMwJSA1MCUpO1xuICB9XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubG9naW4gLmxvZ2luX19jb250ZW50IC5sb2dpbl9fY29udGVudF9faW5mbyB7XG4gICAgY2xpcC1wYXRoOiBjaXJjbGUoNjIlIGF0IDE2JSA1MCUpO1xuICB9XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAubG9naW4gLmxvZ2luX19jb250ZW50IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5sb2dpbiAubG9naW5fX2NvbnRlbnQgLmxvZ2luX19jb250ZW50X19pbmZvIHtcbiAgICBjbGlwLXBhdGg6IG5vbmU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/bank-admin/bank-login/bank-login.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/home/bank-admin/bank-login/bank-login.component.ts ***!
  \********************************************************************/
/*! exports provided: BankLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankLoginComponent", function() { return BankLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _bank_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bank-admin.service */ "./src/app/home/bank-admin/bank-admin.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");







let BankLoginComponent = class BankLoginComponent {
    constructor(bankAdminService, router, translateService, titleService) {
        this.bankAdminService = bankAdminService;
        this.router = router;
        this.translateService = translateService;
        this.titleService = titleService;
        this.titleService.setTitle(this.translateService.instant('~forBanks'));
    }
    ngOnInit() {
        // this.autoLogin();
    }
    ngAfterViewInit() {
        // const options = {
        //   strings: ['Username'],
        //   typeSpeed: 40
        // };
        //  loadExternalScripts('./assets/scripts/defaults.js')
        //  .then(res => loadExternalScripts('./assets/scripts/initializer.js'))
        //  .then(res => loadExternalScripts('./assets/scripts/html-parser.js'))
        //  .then(res => loadExternalScripts('./assets/scripts/typed.js'))
        //  .then(res => {
        //   this.typed = new Typed('.form-field', options);
        // }).catch(er => console.log(er));
    }
    onSubmit() {
        if (!this.form.valid) {
            return;
        }
        this.loading = true;
        const login = this.form.value['login'];
        const password = this.form.value['password'];
        this.bankAdminService.fetchToken(login, password)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => this.loading = false))
            .subscribe(res => {
            this.router.navigateByUrl('/home/bank-admin/customers');
        });
    }
    autoLogin() {
        this.bankAdminService.fetchToken('32', '1')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => this.loading = false))
            .subscribe(res => {
            this.router.navigateByUrl('/home/bank-admin/customers');
        });
    }
};
BankLoginComponent.ctorParameters = () => [
    { type: _bank_admin_service__WEBPACK_IMPORTED_MODULE_2__["BankAdminService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: true })
], BankLoginComponent.prototype, "form", void 0);
BankLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'bank-login',
        template: __webpack_require__(/*! raw-loader!./bank-login.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/bank-admin/bank-login/bank-login.component.html"),
        styles: [__webpack_require__(/*! ./bank-login.component.scss */ "./src/app/home/bank-admin/bank-login/bank-login.component.scss")]
    })
], BankLoginComponent);



/***/ })

}]);
//# sourceMappingURL=home-bank-admin-bank-admin-module.js.map