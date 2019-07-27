(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~home-exchange-rates-exchange-rates-module~home-landing-page-landing-page-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/landing-page/favorable-rates-preview/favorable-rates-preview-table/favorable-rates-preview-table.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/landing-page/favorable-rates-preview/favorable-rates-preview-table/favorable-rates-preview-table.component.html ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"favorable-rates-table\" *ngIf=\"currency?.rates && currency?.rates[0]?.buy\">\r\n  <thead *ngIf=\"showThead\">\r\n    <th>{{'~currency' | translate}}</th>\r\n    <th>{{'~bestBuy' | translate}}</th>\r\n    <th>{{'~bestSell' | translate}}</th>\r\n  </thead>\r\n  <tbody>\r\n    <tr >\r\n      <td valign=\"top\"><div class=\"currencyCode\">{{currency.currencyCode}}</div></td>\r\n\r\n      <td valign=\"top\">\r\n         <div class=\"rate\">\r\n        <div class=\"rate__value\"> {{currency?.rates[0]?.buy?.rate}} <span><i class=\"fas fa-arrow-down\"></i></span></div>\r\n        <div class=\"rate__banks\">\r\n            <div class=\"rate__banks__item\" *ngFor=\"let bank of currency?.rates[0]?.buy?.bankName[0]?.split(',')\">\r\n              {{bank}}\r\n            </div>\r\n        </div>\r\n      </div> </td>\r\n\r\n      <td valign=\"top\">\r\n        <div class=\"rate\">\r\n        <div class=\"rate__value\"> {{currency?.rates[0]?.sell?.rate}} <span><i class=\"fas fa-arrow-down\"></i></span></div>\r\n        <div class=\"rate__banks\">\r\n            <div class=\"rate__banks__item\" *ngFor=\"let bank of currency?.rates[0]?.sell?.bankName[0]?.split(',')\">\r\n              {{bank}}\r\n            </div>\r\n        </div>\r\n      </div> </td>\r\n\r\n    </tr>\r\n  </tbody>\r\n</table>"

/***/ }),

/***/ "./src/app/home/home.service.ts":
/*!**************************************!*\
  !*** ./src/app/home/home.service.ts ***!
  \**************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let HomeService = class HomeService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    getcurrBestRateList() {
        return this.http.post('mybank/currBestRateList', {
            token: this.authService.getToken(),
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res && res.data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(er => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null)));
    }
    getBankList(partner) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post('mybank/banklist', {
            token: this.authService.getToken(),
            partner: partner
        }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res && res.data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(er => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null)));
    }
};
HomeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
];
HomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    })
], HomeService);



/***/ }),

/***/ "./src/app/home/landing-page/favorable-rates-preview/favorable-rates-preview-table/favorable-rates-preview-table.component.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/home/landing-page/favorable-rates-preview/favorable-rates-preview-table/favorable-rates-preview-table.component.scss ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin: 0.625rem;\n}\n\ntable {\n  border-collapse: collapse;\n  width: 360px;\n}\n\nthead {\n  border-bottom: 1px solid #dcdcdc;\n}\n\nth {\n  color: #5f5f5f;\n  font-family: \"Montserrat-Medium\";\n  font-size: 12px;\n  font-weight: 400;\n  padding-right: 1.875rem;\n  padding-bottom: 0.625rem;\n}\n\ntd:nth-child(1) {\n  width: 20%;\n}\n\ntd:nth-child(2), td:nth-child(3) {\n  width: 40%;\n}\n\ntd .currencyCode {\n  color: var(--secondary-default);\n  font-family: \"Montserrat-SemiBold\";\n  font-size: 1.25rem;\n  text-transform: uppercase;\n  padding-right: 1.875rem;\n}\n\ntd .rate {\n  display: flex;\n  flex-direction: column;\n  padding-right: 1.875rem;\n  min-height: 5rem;\n}\n\ntd .rate .rate__value {\n  font-family: \"Montserrat-Medium\";\n  font-size: 13px;\n  font-weight: 400;\n  padding-right: 0.4375rem;\n}\n\ntd .rate .rate__value span {\n  color: #ff3c4e;\n  font-size: 13px;\n  display: none;\n}\n\ntd .rate .rate__banks {\n  display: flex;\n  flex-direction: column;\n}\n\ntd .rate .rate__banks .rate__banks__item {\n  color: var(--primary-default);\n  font-family: \"Montserrat-Medium\";\n  font-size: 12px;\n  margin-bottom: 5px;\n  font-weight: 400;\n  min-width: 9.375rem;\n}\n\n@media (max-width: 576px) {\n  td .rate .rate__banks .rate__banks__item {\n    min-width: 5.3125rem;\n  }\n}\n\n@media (max-width: 768px) {\n  :host {\n    width: 100%;\n  }\n}\n\n@media (max-width: 576px) {\n  :host {\n    display: flex;\n    justify-content: flex-start;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9sYW5kaW5nLXBhZ2UvZmF2b3JhYmxlLXJhdGVzLXByZXZpZXcvZmF2b3JhYmxlLXJhdGVzLXByZXZpZXctdGFibGUvRDpcXHNvdXJjZSBjb2Rlc1xccGx1cy1taW51cy9zcmNcXGFwcFxcaG9tZVxcbGFuZGluZy1wYWdlXFxmYXZvcmFibGUtcmF0ZXMtcHJldmlld1xcZmF2b3JhYmxlLXJhdGVzLXByZXZpZXctdGFibGVcXGZhdm9yYWJsZS1yYXRlcy1wcmV2aWV3LXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2xhbmRpbmctcGFnZS9mYXZvcmFibGUtcmF0ZXMtcHJldmlldy9mYXZvcmFibGUtcmF0ZXMtcHJldmlldy10YWJsZS9mYXZvcmFibGUtcmF0ZXMtcHJldmlldy10YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ0E7RUFDRSxnQ0FBQTtBQ0VGOztBREFBO0VBQ0ksY0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtBQ0dKOztBREFJO0VBQ0ksVUFBQTtBQ0dSOztBRERJO0VBQ0ksVUFBQTtBQ0dSOztBRERHO0VBQ0ssK0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtBQ0dSOztBRERHO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ0dQOztBREZRO0VBQ0ksZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQ0laOztBREhZO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDS2hCOztBREZRO0VBQ0csYUFBQTtFQUNBLHNCQUFBO0FDSVg7O0FESFc7RUFDSyw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxtQkFBQTtBQ0loQjs7QURIZ0I7RUFSTDtJQVNVLG9CQUFBO0VDTW5CO0FBQ0Y7O0FEREE7RUFDRztJQUNJLFdBQUE7RUNJTDtBQUNGOztBRERBO0VBQ0k7SUFDSSxhQUFBO0lBQ0EsMkJBQUE7RUNHTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9sYW5kaW5nLXBhZ2UvZmF2b3JhYmxlLXJhdGVzLXByZXZpZXcvZmF2b3JhYmxlLXJhdGVzLXByZXZpZXctdGFibGUvZmF2b3JhYmxlLXJhdGVzLXByZXZpZXctdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMC42MjVyZW07XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB3aWR0aDogMzYwcHg7XHJcbn1cclxudGhlYWQge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGNkY2RjO1xyXG59XHJcbnRoIHtcclxuICAgIGNvbG9yOiAjNWY1ZjVmO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0LU1lZGl1bSc7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgcGFkZGluZy1yaWdodDogMS44NzVyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC42MjVyZW07XHJcbn1cclxudGQge1xyXG4gICAgJjpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICB9XHJcbiAgICAmOm50aC1jaGlsZCgyKSwgJjpudGgtY2hpbGQoMykge1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICB9XHJcbiAgIC5jdXJyZW5jeUNvZGUge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZGVmYXVsdCk7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkJztcclxuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxLjg3NXJlbTtcclxuICAgfVxyXG4gICAucmF0ZSB7XHJcbiAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgIHBhZGRpbmctcmlnaHQ6IDEuODc1cmVtO1xyXG4gICAgICAgbWluLWhlaWdodDogNXJlbTtcclxuICAgICAgICAucmF0ZV9fdmFsdWUge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQtTWVkaXVtJztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwLjQzNzVyZW07XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZjNjNGU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yYXRlX19iYW5rcyB7XHJcbiAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgIC5yYXRlX19iYW5rc19faXRlbSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1kZWZhdWx0KTtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdC1NZWRpdW0nO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgIC8vICAgbGluZS1oZWlnaHQ6IDAuODU5NHJlbTtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogOS4zNzVyZW07XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA1LjMxMjVyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxufVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICA6aG9zdCB7XHJcbiAgICAgICB3aWR0aDogMTAwJTtcclxuICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgIDpob3N0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAuNjI1cmVtO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHdpZHRoOiAzNjBweDtcbn1cblxudGhlYWQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RjZGNkYztcbn1cblxudGgge1xuICBjb2xvcjogIzVmNWY1ZjtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdC1NZWRpdW1cIjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nLXJpZ2h0OiAxLjg3NXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNjI1cmVtO1xufVxuXG50ZDpudGgtY2hpbGQoMSkge1xuICB3aWR0aDogMjAlO1xufVxudGQ6bnRoLWNoaWxkKDIpLCB0ZDpudGgtY2hpbGQoMykge1xuICB3aWR0aDogNDAlO1xufVxudGQgLmN1cnJlbmN5Q29kZSB7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZGVmYXVsdCk7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQtU2VtaUJvbGRcIjtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nLXJpZ2h0OiAxLjg3NXJlbTtcbn1cbnRkIC5yYXRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy1yaWdodDogMS44NzVyZW07XG4gIG1pbi1oZWlnaHQ6IDVyZW07XG59XG50ZCAucmF0ZSAucmF0ZV9fdmFsdWUge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0LU1lZGl1bVwiO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmctcmlnaHQ6IDAuNDM3NXJlbTtcbn1cbnRkIC5yYXRlIC5yYXRlX192YWx1ZSBzcGFuIHtcbiAgY29sb3I6ICNmZjNjNGU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZGlzcGxheTogbm9uZTtcbn1cbnRkIC5yYXRlIC5yYXRlX19iYW5rcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG50ZCAucmF0ZSAucmF0ZV9fYmFua3MgLnJhdGVfX2JhbmtzX19pdGVtIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZGVmYXVsdCk7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQtTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtaW4td2lkdGg6IDkuMzc1cmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIHRkIC5yYXRlIC5yYXRlX19iYW5rcyAucmF0ZV9fYmFua3NfX2l0ZW0ge1xuICAgIG1pbi13aWR0aDogNS4zMTI1cmVtO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICA6aG9zdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICA6aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/landing-page/favorable-rates-preview/favorable-rates-preview-table/favorable-rates-preview-table.component.ts":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/home/landing-page/favorable-rates-preview/favorable-rates-preview-table/favorable-rates-preview-table.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: FavorableRatesPreviewTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavorableRatesPreviewTableComponent", function() { return FavorableRatesPreviewTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FavorableRatesPreviewTableComponent = class FavorableRatesPreviewTableComponent {
    constructor(changeRef) {
        this.changeRef = changeRef;
    }
    resize() {
        this.onWindowResize();
        this.changeRef.detectChanges();
    }
    ngOnInit() {
    }
    get showThead() {
        console.log('calc th');
        const width = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
        return (width > 768) || (width <= 768 && this.index === 0);
    }
    onWindowResize() {
    }
};
FavorableRatesPreviewTableComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FavorableRatesPreviewTableComponent.prototype, "currency", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FavorableRatesPreviewTableComponent.prototype, "index", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
], FavorableRatesPreviewTableComponent.prototype, "resize", null);
FavorableRatesPreviewTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'favorable-rates-preview-table',
        template: __webpack_require__(/*! raw-loader!./favorable-rates-preview-table.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/landing-page/favorable-rates-preview/favorable-rates-preview-table/favorable-rates-preview-table.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./favorable-rates-preview-table.component.scss */ "./src/app/home/landing-page/favorable-rates-preview/favorable-rates-preview-table/favorable-rates-preview-table.component.scss")]
    })
], FavorableRatesPreviewTableComponent);



/***/ }),

/***/ "./src/app/home/landing-page/favorable-rates-preview/favorable-rates-preview-table/favorable-rates-preview-table.module.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/home/landing-page/favorable-rates-preview/favorable-rates-preview-table/favorable-rates-preview-table.module.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: FavorableRatesPreviewTableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavorableRatesPreviewTableModule", function() { return FavorableRatesPreviewTableModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _favorable_rates_preview_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./favorable-rates-preview-table.component */ "./src/app/home/landing-page/favorable-rates-preview/favorable-rates-preview-table/favorable-rates-preview-table.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");





let FavorableRatesPreviewTableModule = class FavorableRatesPreviewTableModule {
};
FavorableRatesPreviewTableModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_favorable_rates_preview_table_component__WEBPACK_IMPORTED_MODULE_3__["FavorableRatesPreviewTableComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ],
        exports: [_favorable_rates_preview_table_component__WEBPACK_IMPORTED_MODULE_3__["FavorableRatesPreviewTableComponent"]]
    })
], FavorableRatesPreviewTableModule);



/***/ })

}]);
//# sourceMappingURL=default~home-exchange-rates-exchange-rates-module~home-landing-page-landing-page-module.js.map