(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-request-customer-details-request-customer-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/request-customer-details/request-customer-details.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/request-customer-details/request-customer-details.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\" *ngIf=\"success\">\r\n  <div class=\"page__icon\">\r\n    <img src=\"./assets/icons/smile-secondary.png\">\r\n  </div>\r\n  <div class=\"page__text\">\r\n    <div class=\"page__text__primary\">\r\n      {{'~requestConfirmMsg' | translate}} !\r\n    </div>\r\n    <div class=\"page__text__secondary\">\r\n      {{'~requestConfirmSubMsg' | translate}}\r\n    </div>\r\n  </div>\r\n  <a class=\"page__navigate\" routerLink=\"/home\" >\r\n      <button mat-raised-button color=\"accent\">{{'~gotoMainPage' | translate}}</button>\r\n  </a>\r\n</div>"

/***/ }),

/***/ "./src/app/home/request-customer-details/request-customer-details.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/home/request-customer-details/request-customer-details.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  background: var(--primary-default);\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  z-index: 100;\n}\n\n.page {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.page .page__icon {\n  width: 125px;\n}\n\n.page .page__text {\n  color: #ffffff;\n}\n\n.page .page__text .page__text__primary {\n  text-align: center;\n  margin-top: 17px;\n  font-weight: bold;\n  font-size: 20px;\n}\n\n.page .page__text .page__text__secondary {\n  max-width: 317px;\n  text-align: center;\n  padding-top: 7px;\n  font-size: 13px;\n}\n\n.page .page__navigate {\n  margin-top: 17px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9yZXF1ZXN0LWN1c3RvbWVyLWRldGFpbHMvRDpcXHNvdXJjZSBjb2Rlc1xccGx1cy1taW51cy9zcmNcXGFwcFxcaG9tZVxccmVxdWVzdC1jdXN0b21lci1kZXRhaWxzXFxyZXF1ZXN0LWN1c3RvbWVyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvcmVxdWVzdC1jdXN0b21lci1kZXRhaWxzL3JlcXVlc3QtY3VzdG9tZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDRUo7O0FEREk7RUFDSSxZQUFBO0FDR1I7O0FEREk7RUFDSSxjQUFBO0FDR1I7O0FERlE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDSVo7O0FERlE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDSVo7O0FEREk7RUFDSSxnQkFBQTtBQ0dSIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9yZXF1ZXN0LWN1c3RvbWVyLWRldGFpbHMvcmVxdWVzdC1jdXN0b21lci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWRlZmF1bHQpO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbn1cclxuLnBhZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC5wYWdlX19pY29uIHtcclxuICAgICAgICB3aWR0aDogMTI1cHg7XHJcbiAgICB9XHJcbiAgICAucGFnZV9fdGV4dCB7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgLnBhZ2VfX3RleHRfX3ByaW1hcnkge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE3cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wYWdlX190ZXh0X19zZWNvbmRhcnkge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMxN3B4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA3cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucGFnZV9fbmF2aWdhdGUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE3cHg7XHJcbiAgICB9XHJcbn0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWRlZmF1bHQpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDA7XG59XG5cbi5wYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ucGFnZSAucGFnZV9faWNvbiB7XG4gIHdpZHRoOiAxMjVweDtcbn1cbi5wYWdlIC5wYWdlX190ZXh0IHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4ucGFnZSAucGFnZV9fdGV4dCAucGFnZV9fdGV4dF9fcHJpbWFyeSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTdweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5wYWdlIC5wYWdlX190ZXh0IC5wYWdlX190ZXh0X19zZWNvbmRhcnkge1xuICBtYXgtd2lkdGg6IDMxN3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA3cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5wYWdlIC5wYWdlX19uYXZpZ2F0ZSB7XG4gIG1hcmdpbi10b3A6IDE3cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/request-customer-details/request-customer-details.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/home/request-customer-details/request-customer-details.component.ts ***!
  \*************************************************************************************/
/*! exports provided: RequestCustomerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestCustomerDetailsComponent", function() { return RequestCustomerDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _loans_loans_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loans/loans.service */ "./src/app/home/loans/loans.service.ts");
/* harmony import */ var src_app_shared_enums_http_response_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enums/http-response.enum */ "./src/app/shared/enums/http-response.enum.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var RequestCustomerDetailsComponent = /** @class */ (function () {
    function RequestCustomerDetailsComponent(router, loansService, platformId) {
        this.router = router;
        this.loansService = loansService;
        this.platformId = platformId;
    }
    RequestCustomerDetailsComponent.prototype.ngOnInit = function () {
        this.postLoanOrderCheckLink();
    };
    RequestCustomerDetailsComponent.prototype.postLoanOrderCheckLink = function () {
        var _this = this;
        try {
            if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["isPlatformBrowser"])(this.platformId)) {
                return;
            }
            var url = new URL(window.location.protocol + "/" + window.location.host + "/" + window.location.hash.substr(2));
            var data = {
                linkHash: url.searchParams.get('h'),
                orderID: url.searchParams.get('id'),
                bankID: url.searchParams.get('bankid'),
                channel: 'SITE'
            };
            this.loansService.postLoanOrderCheckLink(data)
                .subscribe(function (res) {
                if (res && (res.success === src_app_shared_enums_http_response_enum__WEBPACK_IMPORTED_MODULE_4__["HttpResponseEnum"].success)) {
                    _this.success = true;
                }
                else {
                    _this.router.navigateByUrl('/error-page');
                }
            });
        }
        catch (er) {
            this.router.navigateByUrl('/error-page');
        }
    };
    RequestCustomerDetailsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _loans_loans_service__WEBPACK_IMPORTED_MODULE_3__["LoansService"] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] }
    ]; };
    RequestCustomerDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'request-customer-details',
            template: __webpack_require__(/*! raw-loader!./request-customer-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/request-customer-details/request-customer-details.component.html"),
            styles: [__webpack_require__(/*! ./request-customer-details.component.scss */ "./src/app/home/request-customer-details/request-customer-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]))
    ], RequestCustomerDetailsComponent);
    return RequestCustomerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/home/request-customer-details/request-customer-details.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/home/request-customer-details/request-customer-details.module.ts ***!
  \**********************************************************************************/
/*! exports provided: RequestCustomerDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestCustomerDetailsModule", function() { return RequestCustomerDetailsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _request_customer_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request-customer-details.component */ "./src/app/home/request-customer-details/request-customer-details.component.ts");
/* harmony import */ var src_app_shared_shared_translate_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared-translate.module */ "./src/app/shared/shared-translate.module.ts");
/* harmony import */ var _request_customer_details_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./request-customer-details.routing */ "./src/app/home/request-customer-details/request-customer-details.routing.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var RequestCustomerDetailsModule = /** @class */ (function () {
    function RequestCustomerDetailsModule() {
    }
    RequestCustomerDetailsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_request_customer_details_component__WEBPACK_IMPORTED_MODULE_3__["RequestCustomerDetailsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _request_customer_details_routing__WEBPACK_IMPORTED_MODULE_5__["RequestCustomerDetailsRoutingModule"],
                src_app_shared_shared_translate_module__WEBPACK_IMPORTED_MODULE_4__["SharedTranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"]
            ]
        })
    ], RequestCustomerDetailsModule);
    return RequestCustomerDetailsModule;
}());



/***/ }),

/***/ "./src/app/home/request-customer-details/request-customer-details.routing.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/home/request-customer-details/request-customer-details.routing.ts ***!
  \***********************************************************************************/
/*! exports provided: RequestCustomerDetailsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestCustomerDetailsRoutingModule", function() { return RequestCustomerDetailsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _request_customer_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request-customer-details.component */ "./src/app/home/request-customer-details/request-customer-details.component.ts");




var routes = [
    { path: '', component: _request_customer_details_component__WEBPACK_IMPORTED_MODULE_3__["RequestCustomerDetailsComponent"], pathMatch: 'full' }
];
var RequestCustomerDetailsRoutingModule = /** @class */ (function () {
    function RequestCustomerDetailsRoutingModule() {
    }
    RequestCustomerDetailsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], RequestCustomerDetailsRoutingModule);
    return RequestCustomerDetailsRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=home-request-customer-details-request-customer-details-module-es5.js.map