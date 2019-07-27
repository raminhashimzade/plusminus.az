(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-exchange-rates-exchange-rates-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/exchange-rates/exchange-rate-calculator/exchange-rate-calculator.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/exchange-rates/exchange-rate-calculator/exchange-rate-calculator.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"calculator\">\n  <div class=\"calculator__header\">\n    <div class=\"calculator__header__title\">\n      {{'~exchangeCalcTitle' | translate}}\n    </div>\n    <div class=\"calculator__header__subtitle\">\n        {{'~exchangeCalcSubtitle' | translate}}\n    </div>\n  </div>\n  <form class=\"calculator__input\" #f=\"ngForm\">\n\n    <div class=\"calculator__input__in\">\n        <mat-form-field class=\"calculator__input__amount\" appearance=\"outline\" >\n          <input matInput placeholder=\"0\" type=\"number\"  (input)=\"calcOutResult()\" name=\"amountIn\" ngModel>\n        </mat-form-field>\n\n        <mat-form-field class=\"calculator__input__currency\" appearance=\"outline\">\n            <mat-select ngModel name=\"currencyCodeIn\" (ngModelChange)=\"calcOutResult()\"  [ngModel] = \"currencyCodeIn\">\n              <mat-option value=\"USD\"> USD </mat-option>\n              <mat-option value=\"EUR\"> EUR </mat-option>\n              <mat-option value=\"GBP\"> GBP </mat-option>\n              <mat-option value=\"TRY\"> TRY </mat-option>\n              <mat-option value=\"RUB\"> RUB </mat-option>\n              <mat-option value=\"AZN\"> AZN </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n      <div class=\"exchange-arrow\">\n          <i class=\"fas fa-exchange-alt\"></i>\n      </div>\n    <div class=\"calculator__input__out\">\n\n      <mat-form-field class=\"calculator__input__amount\" appearance=\"outline\" >\n          <input matInput placeholder=\"0\" type=\"number\" name=\"amountOut\" ngModel (input)=\"calcInResult()\">\n        </mat-form-field>\n\n        <mat-form-field class=\"calculator__input__currency\" appearance=\"outline\">\n            <mat-select ngModel name=\"currencyCodeOut\" (ngModelChange)=\"calcOutResult()\" [ngModel] = \"currencyCodeOut\">\n              <mat-option value=\"AZN\"> AZN</mat-option>\n              <mat-option value=\"USD\"> USD </mat-option>\n              <mat-option value=\"EUR\"> EUR </mat-option>\n              <mat-option value=\"GBP\"> GBP </mat-option>\n              <mat-option value=\"TRY\"> TRY </mat-option>\n              <mat-option value=\"RUB\"> RUB </mat-option>\n            </mat-select>\n          </mat-form-field>\n    </div>\n\n    </form>\n  <div class=\"calculator__result\"></div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/exchange-rates/exchange-rate-visualize/exchange-rate-visualize.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/exchange-rates/exchange-rate-visualize/exchange-rate-visualize.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"card\">\r\n    <div class=\"card__header\">\r\n        {{'~compare' | translate}}\r\n     </div>\r\n\r\n     <div class=\"card__content\">\r\n        <form #f=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n            <div class=\"container-fluid\">\r\n              <div class=\"row align-items-center\">\r\n                <div class=\"col-12 col-lg-3\">\r\n                      <mat-form-field class=\"form__field\" [appearance]=\"'outline'\">\r\n                          <mat-label>{{'~currency' | translate}}</mat-label>\r\n                          <mat-select ngModel name=\"currencyCode\">\r\n                            <mat-option *ngFor=\"let option of currCodes$ | async\"\r\n                            [value]=\"option.value\"\r\n                            >{{option.label}}</mat-option>\r\n                          </mat-select>\r\n                        </mat-form-field>\r\n\r\n                </div>\r\n                        <div class=\"col-12 col-lg-3\">\r\n                            <mat-form-field class=\"form__field\" [appearance]=\"'outline'\">\r\n                                <mat-label>{{'~datefrom' | translate}}</mat-label>\r\n                                <input matInput [matDatepicker]=\"datefrom\" (focus)=\"datefrom?.open()\" placeholder=\"{{'~datefrom' | translate}}\" ngModel name=\"datefrom\">\r\n                                <mat-datepicker-toggle matSuffix [for]=\"datefrom\"></mat-datepicker-toggle>\r\n                                <mat-datepicker #datefrom></mat-datepicker>\r\n                              </mat-form-field>\r\n                        </div>\r\n\r\n                        <div class=\"col-12 col-lg-3\">\r\n                            <mat-form-field class=\"form__field\" [appearance]=\"'outline'\">\r\n                                <mat-label>{{'~dateUntil' | translate}}</mat-label>\r\n                                <input matInput [matDatepicker]=\"dateUntil\" (focus)=\"dateUntil?.open()\" placeholder=\"{{'~dateUntil' | translate}}\" ngModel name=\"dateUntil\">\r\n                                <mat-datepicker-toggle matSuffix [for]=\"dateUntil\"></mat-datepicker-toggle>\r\n                                <mat-datepicker #dateUntil></mat-datepicker>\r\n                              </mat-form-field>\r\n                        </div>\r\n\r\n                        <div class=\"col-12 col-lg-3\">\r\n                            <button mat-raised-button color=\"primary\" class=\"submit\" type=\"submit\">{{'~compare' | translate}}</button>\r\n                        </div>\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-12\">\r\n\r\n                  <div id=\"linechart_material\" *ngIf=\"data && !loading\" style=\"width: 95%; height:400px\"></div>\r\n\r\n                  <table-loader *ngIf=\"loading\" style=\"height: 400px\"></table-loader>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            </form>\r\n     </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/exchange-rates/exchange-rates.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/exchange-rates/exchange-rates.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"exchange-rates-preview\">\r\n        <div class=\"exchange-rates-preview__title\">\r\n            {{'~favorableRate' | translate}}\r\n        </div>\r\n        <div class=\"exchange-rates-preview__table\">\r\n          <ng-container *ngIf=\"favorableCurrencies else favorable_rates_loader\">\r\n           <favorable-rates-preview-table  *ngFor=\"let rate of favorableCurrencies;let i = index\" [currency] = \"rate\" [index]=\"i\"></favorable-rates-preview-table>\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <exchange-rate-calculator></exchange-rate-calculator>\r\n  </div>\r\n</div>\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"exchange-rate-visualize\">\r\n            <exchange-rate-visualize></exchange-rate-visualize>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <mat-form-field class=\"filter-field\">\r\n            <input matInput (keyup)=\"filterBanks($event.target.value.toString().toLowerCase())\"\r\n            placeholder=\"{{'~search' | translate}}\">\r\n          </mat-form-field>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"exchange-rates-full\">\r\n\r\n          <div class=\"arrows\" >\r\n          <button mat-mini-fab class=\"arrow --next\" (click)=\"onNextRateScroll()\" >\r\n              <mat-icon inline=\"true\">arrow_forward_ios</mat-icon>\r\n            </button>\r\n        </div>\r\n\r\n        <div class=\"exchange-rates-full__table\" >\r\n\r\n           <ng-container *ngIf=\"!loading else all_rates_loader\">\r\n              <table class=\"table\" *ngIf=\"filteredCurrencies && filteredCurrencies[0] \">\r\n                  <tr>\r\n                    <th class=\"--borderRight\">\r\n                      <div class=\"th-content --bank \">\r\n                        {{'~bank' | translate}}\r\n                      </div>\r\n                    </th>\r\n                    <th *ngFor=\"let rate of rateList\" colspan=\"2\" class=\"--borderRight\">\r\n                      <div class=\"th-content\">\r\n                        <div class=\"rateValue\">{{rate}} </div>\r\n                      </div>\r\n                    </th>\r\n                  </tr>\r\n                  <tr>\r\n                    <td></td>\r\n                    <ng-container *ngFor=\"let rate of rateList\">\r\n                        <td>\r\n                           <div class=\"th-content\">\r\n                             <div class=\"rateType\">\r\n                               <div class=\"rateType__name\">\r\n                                  {{'~buying' | translate | titlecase }}\r\n                               </div>\r\n                               <div class=\"rateType__sorting\" >\r\n                                  <span (click)=\"onSort(rate, 'buyRate', 'asc')\" [ngClass]=\"{'active': isActiveSort(rate, 'buyRate', 'asc')}\" >\r\n                                      <mat-icon>keyboard_arrow_up</mat-icon>\r\n                                    </span>\r\n                                    <span (click)=\"onSort(rate, 'buyRate', 'desc')\" [ngClass]=\"{'active': isActiveSort(rate, 'buyRate', 'desc')}\">\r\n                                       <mat-icon>keyboard_arrow_down</mat-icon>\r\n                                    </span>\r\n                               </div>\r\n                             </div>\r\n                           </div>\r\n                        </td>\r\n                        <td class=\"pl-0 --borderRight\">\r\n                            <div class=\"th-content\">\r\n                                <div class=\"rateType\">\r\n                                  <div class=\"rateType__name\">\r\n                                     {{'~selling' | translate | titlecase }}\r\n                                  </div>\r\n                                  <div class=\"rateType__sorting\">\r\n                                     <span (click)=\"onSort(rate, 'sellRate', 'asc')\" [ngClass]=\"{'active': isActiveSort(rate, 'sellRate', 'asc')}\">\r\n                                         <mat-icon>keyboard_arrow_up</mat-icon>\r\n                                       </span>\r\n                                       <span (click)=\"onSort(rate, 'sellRate', 'desc')\" [ngClass]=\"{'active': isActiveSort(rate, 'sellRate', 'desc')}\">\r\n                                          <mat-icon>keyboard_arrow_down</mat-icon>\r\n                                       </span>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </td>\r\n                    </ng-container>\r\n                  </tr>\r\n                  <tbody >\r\n                    <tr *ngFor=\"let currency of filteredCurrencies\">\r\n                      <td class=\"--borderRight\">\r\n                        <div class=\"td-content --bank\">\r\n                           {{currency?.bankName}}\r\n                        </div>\r\n                      </td>\r\n                      <ng-container  *ngFor=\"let rate of rateList\">\r\n                          <td >\r\n                              <div class=\"td-content --rate\">\r\n                                  <div class=\"buyRate\">{{currency.bankCurrRate.CASH[0][rate]?.buyRate}}</div>\r\n                              </div>\r\n                            </td>\r\n                          <td class=\"sell --borderRight pl-0\">\r\n                              <div class=\"td-content --rate\">\r\n                                  <div class=\"sellRate\">{{currency.bankCurrRate.CASH[0][rate]?.sellRate}}</div>\r\n                              </div>\r\n                            </td>\r\n                      </ng-container>\r\n\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n           </ng-container>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #favorable_rates_loader>\r\n  <table-loader></table-loader>\r\n</ng-template>\r\n\r\n<ng-template #all_rates_loader>\r\n  <table-loader></table-loader>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/home/exchange-rates/exchange-rate-calculator/exchange-rate-calculator.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/home/exchange-rates/exchange-rate-calculator/exchange-rate-calculator.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  box-shadow: 0.0625rem 0.125rem 0.6875rem 0rem rgba(0, 0, 0, 0.2);\n}\n\n.calculator {\n  display: flex;\n}\n\n.calculator .calculator__header {\n  display: flex;\n  flex-direction: column;\n  background: var(--primary-default);\n  padding: 1.0625rem;\n  color: #ffffff;\n}\n\n.calculator .calculator__header .calculator__header__title {\n  font-size: 1.125rem;\n  font-family: \"Montserrat-SemiBold\";\n}\n\n.calculator .calculator__header .calculator__header__subtitle {\n  font-size: 0.75rem;\n}\n\n.calculator .calculator__input {\n  flex: 1;\n  display: flex;\n  padding: 1.0625rem;\n  background: #ffffff;\n}\n\n.calculator .calculator__input .exchange-arrow {\n  margin: 1.4375rem 1.25rem;\n  font-size: 1.25rem;\n  display: flex;\n  color: var(--secondary-default);\n}\n\n.calculator .calculator__input .calculator__input__in, .calculator .calculator__input .calculator__input__out {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.calculator .calculator__input .calculator__input__in ::ng-deep .mat-form-field-wrapper, .calculator .calculator__input .calculator__input__out ::ng-deep .mat-form-field-wrapper {\n  padding: 0 !important;\n}\n\n.calculator .calculator__input .calculator__input__amount ::ng-deep input[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.calculator .calculator__input .calculator__input__currency {\n  width: 80px;\n  margin-left: 0.4375rem;\n}\n\n@media (max-width: 992px) {\n  .calculator {\n    flex-direction: column;\n  }\n  .calculator .calculator__input {\n    flex-direction: column;\n  }\n  .calculator .calculator__input .exchange-arrow {\n    margin: 10px 80px;\n  }\n}\n\n@media (max-width: 576px) {\n  .calculator .calculator__input .calculator__input__currency {\n    width: auto;\n    margin: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9leGNoYW5nZS1yYXRlcy9leGNoYW5nZS1yYXRlLWNhbGN1bGF0b3IvRDpcXHNvdXJjZSBjb2Rlc1xccGx1cy1taW51cy9zcmNcXGFwcFxcaG9tZVxcZXhjaGFuZ2UtcmF0ZXNcXGV4Y2hhbmdlLXJhdGUtY2FsY3VsYXRvclxcZXhjaGFuZ2UtcmF0ZS1jYWxjdWxhdG9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2V4Y2hhbmdlLXJhdGVzL2V4Y2hhbmdlLXJhdGUtY2FsY3VsYXRvci9leGNoYW5nZS1yYXRlLWNhbGN1bGF0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsZ0VBQUE7QUNDSjs7QURDQTtFQUNJLGFBQUE7QUNFSjs7QURESTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDR1I7O0FERlE7RUFDSSxtQkFBQTtFQUNBLGtDQUFBO0FDSVo7O0FERlE7RUFDSSxrQkFBQTtBQ0laOztBRERJO0VBQ0ksT0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDR1I7O0FERlE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLCtCQUFBO0FDSVo7O0FEQVE7RUFDSSxhQUFBO0VBQ0MsZUFBQTtBQ0ViOztBRERhO0VBQ0kscUJBQUE7QUNHakI7O0FEQ1U7RUFDTSx3QkFBQTtFQUNBLFNBQUE7QUNDaEI7O0FERVE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7QUNBWjs7QURTQTtFQUNJO0lBQ0ksc0JBQUE7RUNQTjtFRFFNO0lBQ0ksc0JBQUE7RUNOVjtFRE9VO0lBQ0ksaUJBQUE7RUNMZDtBQUNGOztBRFNBO0VBR1k7SUFDSSxXQUFBO0lBQ0EsU0FBQTtFQ1RkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2V4Y2hhbmdlLXJhdGVzL2V4Y2hhbmdlLXJhdGUtY2FsY3VsYXRvci9leGNoYW5nZS1yYXRlLWNhbGN1bGF0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJveC1zaGFkb3c6IDAuMDYyNXJlbSAwLjEyNXJlbSAwLjY4NzVyZW0gMHJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuLmNhbGN1bGF0b3Ige1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC5jYWxjdWxhdG9yX19oZWFkZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWRlZmF1bHQpO1xyXG4gICAgICAgIHBhZGRpbmc6IDEuMDYyNXJlbTtcclxuICAgICAgICBjb2xvcjojZmZmZmZmO1xyXG4gICAgICAgIC5jYWxjdWxhdG9yX19oZWFkZXJfX3RpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdC1TZW1pQm9sZFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FsY3VsYXRvcl9faGVhZGVyX19zdWJ0aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2FsY3VsYXRvcl9faW5wdXQge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBwYWRkaW5nOiAxLjA2MjVyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZDojZmZmZmZmO1xyXG4gICAgICAgIC5leGNoYW5nZS1hcnJvdyB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMS40Mzc1cmVtIDEuMjVyZW07XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1kZWZhdWx0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGN1bGF0b3JfX2lucHV0X19pbiB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxjdWxhdG9yX19pbnB1dF9faW4sIC5jYWxjdWxhdG9yX19pbnB1dF9fb3V0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgcGFkZGluZzogMCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYWxjdWxhdG9yX19pbnB1dF9fYW1vdW50e1xyXG4gICAgICAgICAgOjpuZy1kZWVwICBpbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGN1bGF0b3JfX2lucHV0X19jdXJyZW5jeSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMC40Mzc1cmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYWxjdWxhdG9yX19yZXN1bHQge1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgLmNhbGN1bGF0b3Ige1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgLmNhbGN1bGF0b3JfX2lucHV0IHtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgLmV4Y2hhbmdlLWFycm93IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogIDEwcHggODBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgIC5jYWxjdWxhdG9yIHtcclxuICAgICAgICAuY2FsY3VsYXRvcl9faW5wdXQge1xyXG4gICAgICAgICAgICAuY2FsY3VsYXRvcl9faW5wdXRfX2N1cnJlbmN5IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm94LXNoYWRvdzogMC4wNjI1cmVtIDAuMTI1cmVtIDAuNjg3NXJlbSAwcmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmNhbGN1bGF0b3Ige1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmNhbGN1bGF0b3IgLmNhbGN1bGF0b3JfX2hlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktZGVmYXVsdCk7XG4gIHBhZGRpbmc6IDEuMDYyNXJlbTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uY2FsY3VsYXRvciAuY2FsY3VsYXRvcl9faGVhZGVyIC5jYWxjdWxhdG9yX19oZWFkZXJfX3RpdGxlIHtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdC1TZW1pQm9sZFwiO1xufVxuLmNhbGN1bGF0b3IgLmNhbGN1bGF0b3JfX2hlYWRlciAuY2FsY3VsYXRvcl9faGVhZGVyX19zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbn1cbi5jYWxjdWxhdG9yIC5jYWxjdWxhdG9yX19pbnB1dCB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDEuMDYyNXJlbTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cbi5jYWxjdWxhdG9yIC5jYWxjdWxhdG9yX19pbnB1dCAuZXhjaGFuZ2UtYXJyb3cge1xuICBtYXJnaW46IDEuNDM3NXJlbSAxLjI1cmVtO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZGVmYXVsdCk7XG59XG4uY2FsY3VsYXRvciAuY2FsY3VsYXRvcl9faW5wdXQgLmNhbGN1bGF0b3JfX2lucHV0X19pbiwgLmNhbGN1bGF0b3IgLmNhbGN1bGF0b3JfX2lucHV0IC5jYWxjdWxhdG9yX19pbnB1dF9fb3V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmNhbGN1bGF0b3IgLmNhbGN1bGF0b3JfX2lucHV0IC5jYWxjdWxhdG9yX19pbnB1dF9faW4gOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyLCAuY2FsY3VsYXRvciAuY2FsY3VsYXRvcl9faW5wdXQgLmNhbGN1bGF0b3JfX2lucHV0X19vdXQgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuLmNhbGN1bGF0b3IgLmNhbGN1bGF0b3JfX2lucHV0IC5jYWxjdWxhdG9yX19pbnB1dF9fYW1vdW50IDo6bmctZGVlcCBpbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cbi5jYWxjdWxhdG9yIC5jYWxjdWxhdG9yX19pbnB1dCAuY2FsY3VsYXRvcl9faW5wdXRfX2N1cnJlbmN5IHtcbiAgd2lkdGg6IDgwcHg7XG4gIG1hcmdpbi1sZWZ0OiAwLjQzNzVyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmNhbGN1bGF0b3Ige1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmNhbGN1bGF0b3IgLmNhbGN1bGF0b3JfX2lucHV0IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5jYWxjdWxhdG9yIC5jYWxjdWxhdG9yX19pbnB1dCAuZXhjaGFuZ2UtYXJyb3cge1xuICAgIG1hcmdpbjogMTBweCA4MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmNhbGN1bGF0b3IgLmNhbGN1bGF0b3JfX2lucHV0IC5jYWxjdWxhdG9yX19pbnB1dF9fY3VycmVuY3kge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1hcmdpbjogMDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/exchange-rates/exchange-rate-calculator/exchange-rate-calculator.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/home/exchange-rates/exchange-rate-calculator/exchange-rate-calculator.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ExchangeRateCalculatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeRateCalculatorComponent", function() { return ExchangeRateCalculatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../home.service */ "./src/app/home/home.service.ts");



let ExchangeRateCalculatorComponent = class ExchangeRateCalculatorComponent {
    constructor(homeService) {
        this.homeService = homeService;
        this.currencyCodeIn = 'USD';
        this.currencyCodeOut = 'AZN';
    }
    ngOnInit() {
        this.getcurrBestRateList();
    }
    getcurrBestRateList() {
        this.homeService.getcurrBestRateList().subscribe(res => {
            this.rates = res;
        });
    }
    calcInResult() {
        console.log('calc in');
        const inCurrencyCode = this.form.controls['currencyCodeIn'].value;
        const inRate = this.getRate('buy', inCurrencyCode);
        const outAmount = this.form.controls['amountOut'].value;
        const outCurrencyCode = this.form.controls['currencyCodeOut'].value;
        const outRate = this.getRate('sell', outCurrencyCode);
        const result = (outAmount * outRate / inRate).toFixed(2);
        this.form.controls['amountIn'].setValue(result);
    }
    calcOutResult() {
        console.log('calc out');
        const inAmount = this.form.controls['amountIn'].value;
        const inCurrencyCode = this.form.controls['currencyCodeIn'].value;
        const inRate = this.getRate('buy', inCurrencyCode);
        const outCurrencyCode = this.form.controls['currencyCodeOut'].value;
        const outRate = this.getRate('sell', outCurrencyCode);
        const result = (inAmount * inRate / outRate).toFixed(2);
        this.form.controls['amountOut'].setValue(result);
    }
    getRate(type, currencyCode) {
        if (currencyCode === 'AZN') {
            console.log('AZN');
            return 1;
        }
        return +this.rates.find(r => r.currencyCode === currencyCode).rates[0][type].rate;
    }
};
ExchangeRateCalculatorComponent.ctorParameters = () => [
    { type: _home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: true })
], ExchangeRateCalculatorComponent.prototype, "form", void 0);
ExchangeRateCalculatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'exchange-rate-calculator',
        template: __webpack_require__(/*! raw-loader!./exchange-rate-calculator.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/exchange-rates/exchange-rate-calculator/exchange-rate-calculator.component.html"),
        styles: [__webpack_require__(/*! ./exchange-rate-calculator.component.scss */ "./src/app/home/exchange-rates/exchange-rate-calculator/exchange-rate-calculator.component.scss")]
    })
], ExchangeRateCalculatorComponent);



/***/ }),

/***/ "./src/app/home/exchange-rates/exchange-rate-visualize/exchange-rate-visualize.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/home/exchange-rates/exchange-rate-visualize/exchange-rate-visualize.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  width: 100%;\n  margin: 1.25rem 0;\n  box-shadow: 0.0625rem 0.125rem 0.6875rem 0rem rgba(0, 0, 0, 0.2);\n}\n\n.card .card__header {\n  padding: 1.25rem;\n  background: var(--primary-default);\n  color: #ffffff;\n  font-size: 1.125rem;\n}\n\n.card .card__content {\n  background: #ffffff;\n  padding: 1.25rem 0;\n}\n\n.card .card__content .form__field {\n  width: 100%;\n  font-size: 12px;\n}\n\n.card .card__content .form__field ::ng-deep .mat-form-field-wrapper {\n  padding: 0 !important;\n}\n\n::ng-deep .raphael-group-21-creditgroup {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9leGNoYW5nZS1yYXRlcy9leGNoYW5nZS1yYXRlLXZpc3VhbGl6ZS9EOlxcc291cmNlIGNvZGVzXFxwbHVzLW1pbnVzL3NyY1xcYXBwXFxob21lXFxleGNoYW5nZS1yYXRlc1xcZXhjaGFuZ2UtcmF0ZS12aXN1YWxpemVcXGV4Y2hhbmdlLXJhdGUtdmlzdWFsaXplLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2V4Y2hhbmdlLXJhdGVzL2V4Y2hhbmdlLXJhdGUtdmlzdWFsaXplL2V4Y2hhbmdlLXJhdGUtdmlzdWFsaXplLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdFQUFBO0FDQ0o7O0FESUk7RUFDSSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDRFI7O0FER0k7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FDRFI7O0FERVE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ0FaOztBRENZO0VBQ0kscUJBQUE7QUNDaEI7O0FET0E7RUFDSSxhQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9ob21lL2V4Y2hhbmdlLXJhdGVzL2V4Y2hhbmdlLXJhdGUtdmlzdWFsaXplL2V4Y2hhbmdlLXJhdGUtdmlzdWFsaXplLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMS4yNXJlbSAwO1xyXG4gICAgYm94LXNoYWRvdzogMC4wNjI1cmVtIDAuMTI1cmVtIDAuNjg3NXJlbSAwcmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuXHJcbi5jYXJkIHtcclxuICAgIC5jYXJkX19oZWFkZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDEuMjVyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1kZWZhdWx0KTtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gICAgfVxyXG4gICAgLmNhcmRfX2NvbnRlbnQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgcGFkZGluZzogMS4yNXJlbSAwO1xyXG4gICAgICAgIC5mb3JtX19maWVsZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b24uc3VibWl0IHtcclxuICAgICAgICAgLy8gICBoZWlnaHQ6IDQ4cHg7O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG46Om5nLWRlZXAgLnJhcGhhZWwtZ3JvdXAtMjEtY3JlZGl0Z3JvdXAge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufSIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDEuMjVyZW0gMDtcbiAgYm94LXNoYWRvdzogMC4wNjI1cmVtIDAuMTI1cmVtIDAuNjg3NXJlbSAwcmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmNhcmQgLmNhcmRfX2hlYWRlciB7XG4gIHBhZGRpbmc6IDEuMjVyZW07XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktZGVmYXVsdCk7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xufVxuLmNhcmQgLmNhcmRfX2NvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAxLjI1cmVtIDA7XG59XG4uY2FyZCAuY2FyZF9fY29udGVudCAuZm9ybV9fZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmNhcmQgLmNhcmRfX2NvbnRlbnQgLmZvcm1fX2ZpZWxkIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAucmFwaGFlbC1ncm91cC0yMS1jcmVkaXRncm91cCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/exchange-rates/exchange-rate-visualize/exchange-rate-visualize.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/home/exchange-rates/exchange-rate-visualize/exchange-rate-visualize.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ExchangeRateVisualizeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeRateVisualizeComponent", function() { return ExchangeRateVisualizeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_app_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.utils */ "./src/app/app.utils.ts");
/* harmony import */ var _exchange_rates_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../exchange-rates.service */ "./src/app/home/exchange-rates/exchange-rates.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.service */ "./src/app/shared/shared.service.ts");






let ExchangeRateVisualizeComponent = class ExchangeRateVisualizeComponent {
    constructor(exchangeRateService, changeRef, sharedService, translateService) {
        this.exchangeRateService = exchangeRateService;
        this.changeRef = changeRef;
        this.sharedService = sharedService;
        this.translateService = translateService;
        this.currCodes$ = this.sharedService.getCurrCodeList('exchange-rates');
    }
    ngOnInit() {
    }
    initChart() {
        google.charts.load('current', { 'packages': ['line'] });
        google.charts.setOnLoadCallback(this.drawChart.bind(this));
    }
    drawChart() {
        const data = new google.visualization.DataTable();
        data.addColumn('string', this.translateService.instant('~date'));
        data.addColumn('number', this.form.value.currencyCode);
        data.addRows(this.data);
        const options = {
            chart: {
                title: this.translateService.instant('~exchangeVisualizeChart'),
                subtitle: this.form.value.currencyCode
            }
        };
        this.loading = false;
        this.changeRef.detectChanges();
        setTimeout(() => {
            const chart = new google.charts.Line(document.getElementById('linechart_material'));
            chart.draw(data, google.charts.Line.convertOptions(options));
            this.changeRef.detectChanges();
        });
    }
    onSubmit() {
        this.data = null;
        this.loading = true;
        const newFormValue = Object(src_app_app_utils__WEBPACK_IMPORTED_MODULE_2__["parseMomentToString"])(Object(src_app_app_utils__WEBPACK_IMPORTED_MODULE_2__["deepClone"])(this.form.value));
        this.exchangeRateService.getcurrRateArchive(newFormValue)
            .subscribe((items) => {
            if (!items) {
                return;
            }
            const dataSource = items.map(item => {
                return [item.date, item.rate];
            }).reverse();
            this.data = dataSource;
            this.changeRef.detectChanges();
            this.initChart();
        });
    }
};
ExchangeRateVisualizeComponent.ctorParameters = () => [
    { type: _exchange_rates_service__WEBPACK_IMPORTED_MODULE_3__["ExchangeRatesService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: true })
], ExchangeRateVisualizeComponent.prototype, "form", void 0);
ExchangeRateVisualizeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'exchange-rate-visualize',
        template: __webpack_require__(/*! raw-loader!./exchange-rate-visualize.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/exchange-rates/exchange-rate-visualize/exchange-rate-visualize.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./exchange-rate-visualize.component.scss */ "./src/app/home/exchange-rates/exchange-rate-visualize/exchange-rate-visualize.component.scss")]
    })
], ExchangeRateVisualizeComponent);



/***/ }),

/***/ "./src/app/home/exchange-rates/exchange-rates.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/home/exchange-rates/exchange-rates.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  flex: 1 0 0;\n  width: 100%;\n  background: var(--background-secondary);\n}\n\n.exchange-rates-preview {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  width: 100%;\n  background: #ffffff;\n  margin: 1.25rem 0;\n  box-shadow: 0.0625rem 0.125rem 0.6875rem 0rem rgba(0, 0, 0, 0.2);\n}\n\n.exchange-rates-preview .exchange-rates-preview__title {\n  width: 100%;\n  color: #ffffff;\n  background: var(--primary-default);\n  font-size: 1.125rem;\n  padding: 1.0625rem;\n}\n\n.exchange-rates-preview .exchange-rates-preview__table {\n  display: flex;\n  flex-wrap: wrap;\n  min-height: 441px;\n  width: 100%;\n}\n\n.--borderRight {\n  border-right: 1px solid #e1e1e1;\n}\n\n.exchange-rates-full {\n  width: 100%;\n  min-height: 400px;\n}\n\n.exchange-rates-full .exchange-rates-full__table {\n  width: 100%;\n  overflow-x: auto;\n  position: relative;\n  background: #ffffff;\n  margin-bottom: 10px;\n  box-shadow: 0.0625rem 0.125rem 0.6875rem 0rem rgba(0, 0, 0, 0.2);\n}\n\n.exchange-rates-full .exchange-rates-full__table table {\n  width: 100%;\n}\n\n.exchange-rates-full .exchange-rates-full__table table th:first-child, .exchange-rates-full .exchange-rates-full__table table td:first-child {\n  position: -webkit-sticky;\n  position: sticky;\n  left: 0;\n  background: #ffffff;\n  z-index: calc(var(--header-z-index) - 1);\n}\n\n.exchange-rates-full .exchange-rates-full__table table .th-content.--bank {\n  color: #5f5f5f;\n  font-family: \"Montserrat-Medium\";\n  font-size: 12px;\n  text-transform: uppercase;\n}\n\n.exchange-rates-full .exchange-rates-full__table table .th-content .rateValue {\n  font-family: \"Montserrat-SemiBold\";\n  text-transform: uppercase;\n  margin-bottom: 0.625rem;\n  text-align: center;\n  color: var(--secondary-default);\n  font-weight: bold;\n  font-size: 1rem;\n}\n\n.exchange-rates-full .exchange-rates-full__table table .th-content .rateType {\n  display: flex;\n}\n\n.exchange-rates-full .exchange-rates-full__table table .th-content .rateType .rateType__sorting {\n  display: flex;\n  cursor: pointer;\n}\n\n.exchange-rates-full .exchange-rates-full__table table .th-content .rateType .rateType__sorting .active {\n  color: var(--primary-default);\n}\n\n.exchange-rates-full .exchange-rates-full__table table .td-content.--bank {\n  display: flex;\n  font-family: \"Montserrat-SemiBold\";\n  font-size: 12px;\n  font-weight: 400;\n  color: var(--primary-default);\n}\n\n.exchange-rates-full .exchange-rates-full__table table .td-content.--bank .location-icon {\n  margin-right: 0.625rem;\n  font-size: 1rem;\n}\n\n.exchange-rates-full .exchange-rates-full__table table .td-content.--rate .buyRate, .exchange-rates-full .exchange-rates-full__table table .td-content.--rate .sellRate {\n  color: #5f5f5f;\n  font-family: \"Montserrat-Medium\";\n  font-size: 12px;\n  text-transform: uppercase;\n  margin-bottom: 0.625rem;\n}\n\n.arrows {\n  width: auto;\n  display: flex;\n  justify-content: space-between;\n  position: -webkit-sticky;\n  position: absolute;\n  top: 3px;\n  z-index: calc(var(--header-z-index) - 1);\n  height: 0;\n  right: 6px;\n}\n\n.arrows .arrow {\n  font-size: 18px;\n  cursor: pointer;\n}\n\n.arrows .arrow.--prev {\n  -webkit-transform: translateX(-25px) rotateY(180deg);\n          transform: translateX(-25px) rotateY(180deg);\n}\n\n.arrows .arrow.--next {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9leGNoYW5nZS1yYXRlcy9EOlxcc291cmNlIGNvZGVzXFxwbHVzLW1pbnVzL3NyY1xcYXBwXFxob21lXFxleGNoYW5nZS1yYXRlc1xcZXhjaGFuZ2UtcmF0ZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvZXhjaGFuZ2UtcmF0ZXMvZXhjaGFuZ2UtcmF0ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx1Q0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0VBQUE7QUNDRjs7QURBRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0VKOztBREtBO0VBQ0UsK0JBQUE7QUNIRjs7QURNQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQ0hGOztBRElFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0QsZ0VBQUE7QUNGSDs7QURHSTtFQUNFLFdBQUE7QUNETjs7QURFTTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSx3Q0FBQTtBQ0FSOztBRElVO0VBQ0UsY0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDRlo7O0FESVU7RUFDRSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDRlo7O0FESVU7RUFDRSxhQUFBO0FDRlo7O0FESVk7RUFDSSxhQUFBO0VBQ0EsZUFBQTtBQ0ZoQjs7QURHZ0I7RUFDRSw2QkFBQTtBQ0RsQjs7QURVUTtFQUNFLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0FDUlY7O0FEU1U7RUFDRSxzQkFBQTtFQUNBLGVBQUE7QUNQWjs7QURXVTtFQUNFLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0FDVFo7O0FEa0JBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0Esd0NBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ2ZGOztBRGlCRTtFQUNJLGVBQUE7RUFDRCxlQUFBO0FDZkw7O0FEaUJNO0VBQ0Usb0RBQUE7VUFBQSw0Q0FBQTtBQ2ZSOztBRGlCTTtFQUNFLGVBQUE7QUNmUiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZXhjaGFuZ2UtcmF0ZXMvZXhjaGFuZ2UtcmF0ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZmxleDogMSAwIDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xyXG59XHJcblxyXG4uZXhjaGFuZ2UtcmF0ZXMtcHJldmlldyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIG1hcmdpbjogMS4yNXJlbSAwO1xyXG4gIGJveC1zaGFkb3c6IDAuMDYyNXJlbSAwLjEyNXJlbSAwLjY4NzVyZW0gMHJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgLmV4Y2hhbmdlLXJhdGVzLXByZXZpZXdfX3RpdGxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWRlZmF1bHQpO1xyXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICAgIHBhZGRpbmc6IDEuMDYyNXJlbTtcclxuICB9XHJcbiAgLmV4Y2hhbmdlLXJhdGVzLXByZXZpZXdfX3RhYmxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBtaW4taGVpZ2h0OiA0NDFweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgLy8gICBoZWlnaHQ6IDQ3NXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uLS1ib3JkZXJSaWdodCB7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2UxZTFlMTtcclxuXHJcbn1cclxuLmV4Y2hhbmdlLXJhdGVzLWZ1bGwge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gIC5leGNoYW5nZS1yYXRlcy1mdWxsX190YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgYm94LXNoYWRvdzogMC4wNjI1cmVtIDAuMTI1cmVtIDAuNjg3NXJlbSAwcmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIHRhYmxlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHRoOmZpcnN0LWNoaWxkLCB0ZDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgei1pbmRleDogY2FsYyh2YXIoLS1oZWFkZXItei1pbmRleCkgLSAxKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRoLWNvbnRlbnQge1xyXG4gICAgICAgICAgJi4tLWJhbmsge1xyXG4gICAgICAgICAgICBjb2xvcjogIzVmNWY1ZjtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0LU1lZGl1bSc7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5yYXRlVmFsdWUge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGQnO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjYyNXJlbTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWRlZmF1bHQpO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnJhdGVUeXBlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgLnJhdGVUeXBlX19uYW1lIHt9XHJcbiAgICAgICAgICAgIC5yYXRlVHlwZV9fc29ydGluZyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWRlZmF1bHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcbiAgICAgIHRkLnNlbGwge1xyXG4gICAgICB9XHJcbiAgICAgIC50ZC1jb250ZW50IHtcclxuICAgICAgICAmLi0tYmFuayB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdC1TZW1pQm9sZFwiO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWRlZmF1bHQpO1xyXG4gICAgICAgICAgLmxvY2F0aW9uLWljb24ge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNjI1cmVtO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuLS1yYXRlIHtcclxuICAgICAgICAgIC5idXlSYXRlLCAuc2VsbFJhdGUge1xyXG4gICAgICAgICAgICBjb2xvcjogIzVmNWY1ZjtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0LU1lZGl1bSc7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC42MjVyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLmFycm93cyB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDNweDtcclxuICB6LWluZGV4OiBjYWxjKHZhcigtLWhlYWRlci16LWluZGV4KSAtIDEpO1xyXG4gIGhlaWdodDogMDtcclxuICByaWdodDogNnB4O1xyXG5cclxuICAuYXJyb3cge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgJi4tLXByZXYge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjVweCkgcm90YXRlWSgxODBkZWcpIDtcclxuICAgICAgfVxyXG4gICAgICAmLi0tbmV4dCB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNXB4KTtcclxuICAgICAgfVxyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbGV4OiAxIDAgMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcbn1cblxuLmV4Y2hhbmdlLXJhdGVzLXByZXZpZXcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBtYXJnaW46IDEuMjVyZW0gMDtcbiAgYm94LXNoYWRvdzogMC4wNjI1cmVtIDAuMTI1cmVtIDAuNjg3NXJlbSAwcmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5leGNoYW5nZS1yYXRlcy1wcmV2aWV3IC5leGNoYW5nZS1yYXRlcy1wcmV2aWV3X190aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1kZWZhdWx0KTtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgcGFkZGluZzogMS4wNjI1cmVtO1xufVxuLmV4Y2hhbmdlLXJhdGVzLXByZXZpZXcgLmV4Y2hhbmdlLXJhdGVzLXByZXZpZXdfX3RhYmxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtaW4taGVpZ2h0OiA0NDFweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uLS1ib3JkZXJSaWdodCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlMWUxZTE7XG59XG5cbi5leGNoYW5nZS1yYXRlcy1mdWxsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xufVxuLmV4Y2hhbmdlLXJhdGVzLWZ1bGwgLmV4Y2hhbmdlLXJhdGVzLWZ1bGxfX3RhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm94LXNoYWRvdzogMC4wNjI1cmVtIDAuMTI1cmVtIDAuNjg3NXJlbSAwcmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5leGNoYW5nZS1yYXRlcy1mdWxsIC5leGNoYW5nZS1yYXRlcy1mdWxsX190YWJsZSB0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmV4Y2hhbmdlLXJhdGVzLWZ1bGwgLmV4Y2hhbmdlLXJhdGVzLWZ1bGxfX3RhYmxlIHRhYmxlIHRoOmZpcnN0LWNoaWxkLCAuZXhjaGFuZ2UtcmF0ZXMtZnVsbCAuZXhjaGFuZ2UtcmF0ZXMtZnVsbF9fdGFibGUgdGFibGUgdGQ6Zmlyc3QtY2hpbGQge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICB6LWluZGV4OiBjYWxjKHZhcigtLWhlYWRlci16LWluZGV4KSAtIDEpO1xufVxuLmV4Y2hhbmdlLXJhdGVzLWZ1bGwgLmV4Y2hhbmdlLXJhdGVzLWZ1bGxfX3RhYmxlIHRhYmxlIC50aC1jb250ZW50Li0tYmFuayB7XG4gIGNvbG9yOiAjNWY1ZjVmO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0LU1lZGl1bVwiO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uZXhjaGFuZ2UtcmF0ZXMtZnVsbCAuZXhjaGFuZ2UtcmF0ZXMtZnVsbF9fdGFibGUgdGFibGUgLnRoLWNvbnRlbnQgLnJhdGVWYWx1ZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQtU2VtaUJvbGRcIjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLWJvdHRvbTogMC42MjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1kZWZhdWx0KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5leGNoYW5nZS1yYXRlcy1mdWxsIC5leGNoYW5nZS1yYXRlcy1mdWxsX190YWJsZSB0YWJsZSAudGgtY29udGVudCAucmF0ZVR5cGUge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmV4Y2hhbmdlLXJhdGVzLWZ1bGwgLmV4Y2hhbmdlLXJhdGVzLWZ1bGxfX3RhYmxlIHRhYmxlIC50aC1jb250ZW50IC5yYXRlVHlwZSAucmF0ZVR5cGVfX3NvcnRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZXhjaGFuZ2UtcmF0ZXMtZnVsbCAuZXhjaGFuZ2UtcmF0ZXMtZnVsbF9fdGFibGUgdGFibGUgLnRoLWNvbnRlbnQgLnJhdGVUeXBlIC5yYXRlVHlwZV9fc29ydGluZyAuYWN0aXZlIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZGVmYXVsdCk7XG59XG4uZXhjaGFuZ2UtcmF0ZXMtZnVsbCAuZXhjaGFuZ2UtcmF0ZXMtZnVsbF9fdGFibGUgdGFibGUgLnRkLWNvbnRlbnQuLS1iYW5rIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdC1TZW1pQm9sZFwiO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWRlZmF1bHQpO1xufVxuLmV4Y2hhbmdlLXJhdGVzLWZ1bGwgLmV4Y2hhbmdlLXJhdGVzLWZ1bGxfX3RhYmxlIHRhYmxlIC50ZC1jb250ZW50Li0tYmFuayAubG9jYXRpb24taWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMC42MjVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5leGNoYW5nZS1yYXRlcy1mdWxsIC5leGNoYW5nZS1yYXRlcy1mdWxsX190YWJsZSB0YWJsZSAudGQtY29udGVudC4tLXJhdGUgLmJ1eVJhdGUsIC5leGNoYW5nZS1yYXRlcy1mdWxsIC5leGNoYW5nZS1yYXRlcy1mdWxsX190YWJsZSB0YWJsZSAudGQtY29udGVudC4tLXJhdGUgLnNlbGxSYXRlIHtcbiAgY29sb3I6ICM1ZjVmNWY7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQtTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLWJvdHRvbTogMC42MjVyZW07XG59XG5cbi5hcnJvd3Mge1xuICB3aWR0aDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzcHg7XG4gIHotaW5kZXg6IGNhbGModmFyKC0taGVhZGVyLXotaW5kZXgpIC0gMSk7XG4gIGhlaWdodDogMDtcbiAgcmlnaHQ6IDZweDtcbn1cbi5hcnJvd3MgLmFycm93IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYXJyb3dzIC5hcnJvdy4tLXByZXYge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI1cHgpIHJvdGF0ZVkoMTgwZGVnKTtcbn1cbi5hcnJvd3MgLmFycm93Li0tbmV4dCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/exchange-rates/exchange-rates.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/home/exchange-rates/exchange-rates.component.ts ***!
  \*****************************************************************/
/*! exports provided: ExchangeRatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeRatesComponent", function() { return ExchangeRatesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _exchange_rates_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exchange-rates.service */ "./src/app/home/exchange-rates/exchange-rates.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");






let ExchangeRatesComponent = class ExchangeRatesComponent {
    constructor(exchangeRatesService, changeRef, titlseService, translateService) {
        this.exchangeRatesService = exchangeRatesService;
        this.changeRef = changeRef;
        this.titlseService = titlseService;
        this.translateService = translateService;
        this.titlseService.setTitle(this.translateService.instant('~exchange-rates'));
    }
    ngOnInit() {
        this.getBestRates();
        this.getAllRates();
    }
    getBestRates() {
        this.exchangeRatesService.getcurrBestRateList().subscribe(res => {
            this.favorableCurrencies = res;
            this.changeRef.detectChanges();
        });
    }
    onSort(rate, type, sortBy) {
        try {
            this.sortState = { rate, type, sortBy };
            let sortedCurrencies;
            if (sortBy === 'desc') {
                sortedCurrencies = [...this.allCurrencies].sort((a, b) => {
                    if (+a.bankCurrRate.CASH[0][rate][type] > +b.bankCurrRate.CASH[0][rate][type]) {
                        return -1;
                    }
                    if (+a.bankCurrRate.CASH[0][rate][type] < +b.bankCurrRate.CASH[0][rate][type]) {
                        return 1;
                    }
                    return 0;
                });
            }
            else {
                sortedCurrencies = [...this.allCurrencies].sort((a, b) => {
                    if (+a.bankCurrRate.CASH[0][rate][type] > +b.bankCurrRate.CASH[0][rate][type]) {
                        return 1;
                    }
                    if (+a.bankCurrRate.CASH[0][rate][type] < +b.bankCurrRate.CASH[0][rate][type]) {
                        return -1;
                    }
                    return 0;
                });
            }
            this.allCurrencies = [...sortedCurrencies];
        }
        catch (er) {
            console.log(er);
        }
        finally {
            this.changeRef.detectChanges();
        }
    }
    isActiveSort(rate, type, sortBy) {
        return JSON.stringify(this.sortState) === JSON.stringify({ rate, type, sortBy });
    }
    getAllRates() {
        this.loading = true;
        this.exchangeRatesService.getCurrRateList()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => {
            this.loading = false;
            this.changeRef.detectChanges();
        }))
            .subscribe(res => {
            this.allCurrencies = res;
            this.filteredCurrencies = res;
            if (this.allCurrencies && this.allCurrencies[0]
                && this.allCurrencies[0].bankCurrRate
                && this.allCurrencies[0].bankCurrRate.CASH
                && this.allCurrencies[0].bankCurrRate.CASH[0]) {
                this.buildRateList();
                this.changeRef.detectChanges();
            }
        });
    }
    buildRateList() {
        const rateList = Object.keys(this.allCurrencies[0].bankCurrRate.CASH[0]);
        // this.rateList = rateList ? rateList.filter(rate => (rate !== 'OIL') && (rate !== 'GOLD')) : [];
        this.rateList = ['USD', 'EUR', 'RUB', 'TRY'];
        this.changeRef.detectChanges();
    }
    onNextRateScroll() {
        try {
            const el = document.getElementsByClassName('exchange-rates-full__table')[0];
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
    filterBanks(str) {
        if (!str) {
            this.filteredCurrencies = [...this.allCurrencies];
        }
        else {
            this.filteredCurrencies = [...this.allCurrencies].filter(cur => cur.bankName.toLowerCase().includes(str));
        }
    }
};
ExchangeRatesComponent.ctorParameters = () => [
    { type: _exchange_rates_service__WEBPACK_IMPORTED_MODULE_2__["ExchangeRatesService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }
];
ExchangeRatesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'exchange-rates',
        template: __webpack_require__(/*! raw-loader!./exchange-rates.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/exchange-rates/exchange-rates.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./exchange-rates.component.scss */ "./src/app/home/exchange-rates/exchange-rates.component.scss")]
    })
], ExchangeRatesComponent);



/***/ }),

/***/ "./src/app/home/exchange-rates/exchange-rates.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/home/exchange-rates/exchange-rates.module.ts ***!
  \**************************************************************/
/*! exports provided: ExchangeRatesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeRatesModule", function() { return ExchangeRatesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _exchange_rates_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exchange-rates.component */ "./src/app/home/exchange-rates/exchange-rates.component.ts");
/* harmony import */ var _exchange_rates_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exchange-rates.routing */ "./src/app/home/exchange-rates/exchange-rates.routing.ts");
/* harmony import */ var _landing_page_favorable_rates_preview_favorable_rates_preview_table_favorable_rates_preview_table_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../landing-page/favorable-rates-preview/favorable-rates-preview-table/favorable-rates-preview-table.module */ "./src/app/home/landing-page/favorable-rates-preview/favorable-rates-preview-table/favorable-rates-preview-table.module.ts");
/* harmony import */ var src_app_shared_shared_translate_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared-translate.module */ "./src/app/shared/shared-translate.module.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
/* harmony import */ var src_app_shared_pipes_img_src_pipe_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/pipes/img-src-pipe.module */ "./src/app/shared/pipes/img-src-pipe.module.ts");
/* harmony import */ var _table_loader_table_loader_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../table-loader/table-loader.module */ "./src/app/home/table-loader/table-loader.module.ts");
/* harmony import */ var _exchange_rate_visualize_exchange_rate_visualize_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./exchange-rate-visualize/exchange-rate-visualize.component */ "./src/app/home/exchange-rates/exchange-rate-visualize/exchange-rate-visualize.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _exchange_rate_calculator_exchange_rate_calculator_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./exchange-rate-calculator/exchange-rate-calculator.component */ "./src/app/home/exchange-rates/exchange-rate-calculator/exchange-rate-calculator.component.ts");













let ExchangeRatesModule = class ExchangeRatesModule {
};
ExchangeRatesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_exchange_rates_component__WEBPACK_IMPORTED_MODULE_3__["ExchangeRatesComponent"], _exchange_rate_visualize_exchange_rate_visualize_component__WEBPACK_IMPORTED_MODULE_10__["ExchangeRateVisualizeComponent"], _exchange_rate_calculator_exchange_rate_calculator_component__WEBPACK_IMPORTED_MODULE_12__["ExchangeRateCalculatorComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_translate_module__WEBPACK_IMPORTED_MODULE_6__["SharedTranslateModule"],
            src_app_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            src_app_shared_pipes_img_src_pipe_module__WEBPACK_IMPORTED_MODULE_8__["ImgSrcPipeModule"],
            _exchange_rates_routing__WEBPACK_IMPORTED_MODULE_4__["ExchangeRatesRoutingModule"],
            _table_loader_table_loader_module__WEBPACK_IMPORTED_MODULE_9__["TableLoaderModule"],
            _landing_page_favorable_rates_preview_favorable_rates_preview_table_favorable_rates_preview_table_module__WEBPACK_IMPORTED_MODULE_5__["FavorableRatesPreviewTableModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]
        ]
    })
], ExchangeRatesModule);



/***/ }),

/***/ "./src/app/home/exchange-rates/exchange-rates.routing.ts":
/*!***************************************************************!*\
  !*** ./src/app/home/exchange-rates/exchange-rates.routing.ts ***!
  \***************************************************************/
/*! exports provided: ExchangeRatesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeRatesRoutingModule", function() { return ExchangeRatesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _exchange_rates_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exchange-rates.component */ "./src/app/home/exchange-rates/exchange-rates.component.ts");




const routes = [
    { path: '', component: _exchange_rates_component__WEBPACK_IMPORTED_MODULE_3__["ExchangeRatesComponent"], pathMatch: 'full' },
];
let ExchangeRatesRoutingModule = class ExchangeRatesRoutingModule {
};
ExchangeRatesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ExchangeRatesRoutingModule);



/***/ }),

/***/ "./src/app/home/exchange-rates/exchange-rates.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/home/exchange-rates/exchange-rates.service.ts ***!
  \***************************************************************/
/*! exports provided: ExchangeRatesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeRatesService", function() { return ExchangeRatesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");






let ExchangeRatesService = class ExchangeRatesService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    getcurrBestRateList() {
        return this.http.post('mybank/currBestRateList', {
            token: this.authService.getToken(),
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res && res.data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(er => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null)));
    }
    getCurrRateList() {
        return this.http.post('mybank/currRateList', {
            token: this.authService.getToken(),
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res && res.data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(er => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null)));
    }
    getcurrRateArchive(formValue) {
        return this.http.post('mybank/currRateArchive', Object.assign({ token: this.authService.getToken() }, formValue)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res && res.data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(er => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null)));
    }
};
ExchangeRatesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
ExchangeRatesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ExchangeRatesService);



/***/ })

}]);
//# sourceMappingURL=home-exchange-rates-exchange-rates-module.js.map