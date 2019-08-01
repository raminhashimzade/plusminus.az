(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-contact-contact-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/contact/contact.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/contact/contact.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container contact\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-12 p-0\">\r\n        <div class=\"contact__header\">\r\n            {{'~contact' | translate}}\r\n        </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row contact__content\">\r\n    <div class=\"col-12 col-md-6\">\r\n       <h4>{{'~contactUs' | translate}}</h4>\r\n        <form  #f=\"ngForm\"  (ngSubmit) =\"onSubmit()\" class=\"contact__content__form\">\r\n\r\n            <div class=\"telInput\">\r\n\r\n                <mat-form-field appearance=\"outline\" class=\"telInput__telPrefix\">\r\n                    <mat-select [(value)]=\"inputPrefix\">\r\n                      <mat-option  [value]=\"'50'\">\r\n                        050\r\n                      </mat-option>\r\n                      <mat-option  [value]=\"'51'\">\r\n                        051\r\n                      </mat-option>\r\n                      <mat-option  [value]=\"'55'\">\r\n                        055\r\n                      </mat-option>\r\n                      <mat-option  [value]=\"'70'\">\r\n                        070\r\n                      </mat-option>\r\n                      <mat-option  [value]=\"'77'\">\r\n                        077\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n\r\n                  <mat-form-field appearance=\"outline\" class=\"telInput__number\" >\r\n                      <mat-label>{{'~fillTelNumber' | translate }}</mat-label>\r\n                      <input matInput ngModel\r\n                      name=\"cusMobilePhone\" type=\"tel\"\r\n                      required\r\n                      minlength=\"7\"\r\n                      maxlength=\"7\"\r\n                      (input)=\"onTelInput($event)\"\r\n                      #telField =\"matInput\"\r\n                      >\r\n                      <mat-error *ngIf=\"form?.controls['cusMobilePhone']?.invalid\">{{getErrorMessage()}}</mat-error>\r\n                    </mat-form-field>\r\n            </div>\r\n\r\n            <mat-form-field appearance=\"outline\">\r\n              <mat-label>{{'~contactFormSubject' | translate}}</mat-label>\r\n                <input matInput ngModel name=\"messageSubject\" required >\r\n              </mat-form-field>\r\n\r\n              <mat-form-field appearance=\"outline\">\r\n                  <mat-label>{{'~contactFormText' | translate}}</mat-label>\r\n                  <textarea matInput\r\n                           ngModel name=\"messageBody\"\r\n                            cdkTextareaAutosize\r\n                            #autosize=\"cdkTextareaAutosize\"\r\n                            cdkAutosizeMinRows=\"10\"\r\n                            cdkAutosizeMaxRows=\"20\"\r\n                            required\r\n                            ></textarea>\r\n                </mat-form-field>\r\n\r\n                <button\r\n                  mat-raised-button color=\"accent\"\r\n                  [ngClass]=\"{'is-loading': loading}\"\r\n                  [disabled]=\"loading || isSent\"\r\n                  >{{'~send' | translate | uppercase}}</button>\r\n           </form>\r\n    </div>\r\n\r\n    <div class=\"col-12 col-md-6\">\r\n        <div class=\"contact__content__info\">\r\n\r\n          <h4>{{'~contacts' | translate}}</h4>\r\n\r\n          <h5>{{'~clientSupportService' | translate}}</h5>\r\n          <p> +994 50 300 33 23 </p>\r\n          <p> {{'~clientSupportWeekDays' | translate}}</p>\r\n          <p> info@plusminus.az</p>\r\n\r\n          <h5>{{'~clientSupportAdvertising' | translate}}</h5>\r\n          <p>order@plusminus.az</p>\r\n\r\n          <h5> {{'~follow-us' | translate}}</h5>\r\n          <div class=\"social-follow\">\r\n\r\n              <div class=\"social-follow__items\">\r\n                <a class=\"follow-item\" href=\" https://www.instagram.com/plusminus_az\" target=\"_blank\" rel=\"noopener\">\r\n                  <i class=\"fab fa-instagram\"></i>\r\n                </a>\r\n\r\n                <a class=\"follow-item\" href=\" https://www.facebook.com/plusminus.az\" target=\"_blank\" rel=\"noopener\">\r\n                  <i class=\"fab fa-facebook-f\"></i>\r\n              </a>\r\n\r\n                <a class=\"follow-item\" href=\"https://www.linkedin.com/company/plusminus-az\" target=\"_blank\" rel=\"noopener\">\r\n                    <i class=\"fab fa-linkedin\"></i>\r\n                </a>\r\n              </div>\r\n          </div>\r\n\r\n        </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/otp-verify/otp-verify.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/otp-verify/otp-verify.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"component\">\r\n    <div class=\"component__header\">\r\n      <div class=\"component__header__title\">\r\n        {{'~smsCodeSent' | translate }} ( {{data?.otpObject?.gsm}} ) <br>\r\n        {{'~pleaseFillCode' | translate }} <br>\r\n      </div>\r\n      <div class=\"component__header__resendOtp\">\r\n          <button mat-raised-button color=\"accent\" [disabled]=\"!canResendOtp\" (click)=\"sendOtp()\">\r\n              {{'~resend' | translate}}\r\n              <ng-container *ngIf=\"resendLeftTime > 0\">{{resendLeftTime}} {{'~seconds' | translate}}</ng-container>\r\n          </button>\r\n      </div>\r\n      <div class=\"component__header__subtitle\" *ngIf=\"data?.otpObject?.channel === 'LOAN'\">\r\n        {{'~step' | translate | titlecase}} 2/4\r\n      </div>\r\n    </div>\r\n    <div class=\"component__content\">\r\n      <div class=\"otpVerify\">\r\n        <div class=\"otpVerify__fields\">\r\n          <mat-form-field appearance=\"outline\" class=\"otpInput\">\r\n            <input matInput placeholder=\"*\"  type=\"tel\" (keyup)=\"onKeyUp('first', second, $event)\"  (focus)=\"onFocus('first')\" #firstField=\"matInput\"  ngModel name=\"first\"  maxlength=\"1\" required>\r\n          </mat-form-field>\r\n\r\n        <mat-form-field appearance=\"outline\" class=\"otpInput\">\r\n            <input matInput placeholder=\"*\"  type=\"tel\" (keyup)=\"onKeyUp('second', third, $event)\" (focus)=\"onFocus('second')\" ngModel name=\"second\" #second  maxlength=\"1\" required>\r\n          </mat-form-field>\r\n\r\n        <mat-form-field appearance=\"outline\" class=\"otpInput\">\r\n            <input matInput placeholder=\"*\"  type=\"tel\" (keyup)=\"onKeyUp('third', fourth, $event)\" (focus)=\"onFocus('third')\" ngModel name=\"third\" #third  maxlength=\"1\" required>\r\n          </mat-form-field>\r\n\r\n        <mat-form-field appearance=\"outline\" class=\"otpInput\">\r\n            <input matInput placeholder=\"*\"  type=\"tel\" (keyup)=\"onSubmit()\" (focus)=\"onFocus('fourth')\"  ngModel name=\"fourth\" #fourth  maxlength=\"1\" required>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"otpVerify__error\" *ngIf=\"otpError\" class=\"form-error\">\r\n          * {{'~otpVerifyError' | translate}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"component__footer\">\r\n      <div class=\"component__footer__back\">\r\n          <button mat-raised-button type=\"reset\"  (click)=\"onStepBack()\">{{'~back' | translate | titlecase}} </button>\r\n\r\n      </div>\r\n      <div class=\"component__footer__next\">\r\n        <button mat-raised-button color=\"primary\" [disabled]=\"!f?.valid\" #submitBtn type=\"submit\" [ngClass]=\"{'is-loading': loading}\">{{'~next' | translate | titlecase}} </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  </form>"

/***/ }),

/***/ "./src/app/home/contact/contact.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/home/contact/contact.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  background: var(--background-secondary);\n  padding: 10px 0;\n  flex: 1 0 0;\n}\n\n.contact {\n  background: #ffffff;\n  box-shadow: 0.0625rem 0.125rem 0.6875rem 0 rgba(0, 0, 0, 0.2);\n}\n\n.contact h4, .contact h5 {\n  margin: 10px 0;\n  font-family: \"Montserrat-SemiBold\";\n}\n\n.contact .contact__header {\n  width: 100%;\n  color: #ffffff;\n  background: var(--primary-default);\n  font-size: 1.125rem;\n  padding: 1.0625rem;\n}\n\n.contact .contact__content {\n  padding-top: 10px;\n  padding-bottom: 15px;\n}\n\n.contact .contact__content .contact__content__form {\n  display: flex;\n  flex-direction: column;\n}\n\n.contact .contact__content .contact__content__form .telInput {\n  display: flex;\n  width: 100%;\n  font-size: 1rem;\n}\n\n.contact .contact__content .contact__content__form .telInput .telInput__telPrefix {\n  width: 5.125rem;\n}\n\n.contact .contact__content .contact__content__form .telInput .telInput__number {\n  flex: 1;\n}\n\n@media (max-width: 776px) {\n  .contact .contact__content .contact__content__form .telInput {\n    font-size: 0.75rem;\n  }\n}\n\n.social-follow .social-follow__title {\n  font-size: 0.75rem;\n  color: #ffffff;\n  margin-bottom: 0.8125rem;\n}\n\n.social-follow .social-follow__items {\n  display: flex;\n}\n\n.social-follow .social-follow__items .follow-item {\n  background: #4a73c0;\n  color: #ffffff;\n  border-radius: 50%;\n  margin-right: 0.5625rem;\n  width: 1.9375rem;\n  height: 1.9375rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n.social-follow .social-follow__items .follow-item.--twitter {\n  color: #1EA1F2;\n}\n\n.social-follow .social-follow__items .follow-item.--instagram {\n  color: #B0468A;\n}\n\n.social-follow .social-follow__items .follow-item.--linkedin {\n  color: #0077B5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb250YWN0L0Q6XFxzb3VyY2UgY29kZXNcXHBsdXMtbWludXMvc3JjXFxhcHBcXGhvbWVcXGNvbnRhY3RcXGNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLHVDQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EsNkRBQUE7QUNDSjs7QURBSTtFQUNJLGNBQUE7RUFDQSxrQ0FBQTtBQ0VSOztBREFJO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNFUjs7QURBSTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7QUNFUjs7QUREUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQ0daOztBREZZO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDSWhCOztBREhnQjtFQUNJLGVBQUE7QUNLcEI7O0FESGdCO0VBQ0ksT0FBQTtBQ0twQjs7QURIZ0I7RUFWSjtJQVdRLGtCQUFBO0VDTWxCO0FBQ0Y7O0FEQ0k7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtBQ0VSOztBREFJO0VBQ0ksYUFBQTtBQ0VSOztBRERRO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNHWjs7QURGWTtFQUNJLGNBQUE7QUNJaEI7O0FERlk7RUFDSSxjQUFBO0FDSWhCOztBREZZO0VBQ0UsY0FBQTtBQ0lkIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIGZsZXg6IDEgMCAwO1xyXG59XHJcblxyXG4uY29udGFjdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMC4wNjI1cmVtIDAuMTI1cmVtIDAuNjg3NXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGg0LCBoNSB7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkJ1xyXG4gICAgfVxyXG4gICAgLmNvbnRhY3RfX2hlYWRlciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1kZWZhdWx0KTtcclxuICAgICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDEuMDYyNXJlbTtcclxuICAgIH1cclxuICAgIC5jb250YWN0X19jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgICAuY29udGFjdF9fY29udGVudF9fZm9ybSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIC50ZWxJbnB1dCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAudGVsSW5wdXRfX3RlbFByZWZpeCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUuMTI1cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRlbElucHV0X19udW1iZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzc2cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MC43NXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgfVxyXG59XHJcblxyXG4uc29jaWFsLWZvbGxvdyB7XHJcbiAgICAuc29jaWFsLWZvbGxvd19fdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjgxMjVyZW07XHJcbiAgICB9XHJcbiAgICAuc29jaWFsLWZvbGxvd19faXRlbXMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLmZvbGxvdy1pdGVtIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzRhNzNjMDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjU2MjVyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiAxLjkzNzVyZW07XHJcbiAgICAgICAgICAgIGhlaWdodDogMS45Mzc1cmVtO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAmLi0tdHdpdHRlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzFFQTFGMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLi0taW5zdGFncmFtIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjQjA0NjhBO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuLS1saW5rZWRpbiB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMwMDc3QjU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgZmxleDogMSAwIDA7XG59XG5cbi5jb250YWN0IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMC4wNjI1cmVtIDAuMTI1cmVtIDAuNjg3NXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5jb250YWN0IGg0LCAuY29udGFjdCBoNSB7XG4gIG1hcmdpbjogMTBweCAwO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0LVNlbWlCb2xkXCI7XG59XG4uY29udGFjdCAuY29udGFjdF9faGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWRlZmF1bHQpO1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xuICBwYWRkaW5nOiAxLjA2MjVyZW07XG59XG4uY29udGFjdCAuY29udGFjdF9fY29udGVudCB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cbi5jb250YWN0IC5jb250YWN0X19jb250ZW50IC5jb250YWN0X19jb250ZW50X19mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5jb250YWN0IC5jb250YWN0X19jb250ZW50IC5jb250YWN0X19jb250ZW50X19mb3JtIC50ZWxJbnB1dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDFyZW07XG59XG4uY29udGFjdCAuY29udGFjdF9fY29udGVudCAuY29udGFjdF9fY29udGVudF9fZm9ybSAudGVsSW5wdXQgLnRlbElucHV0X190ZWxQcmVmaXgge1xuICB3aWR0aDogNS4xMjVyZW07XG59XG4uY29udGFjdCAuY29udGFjdF9fY29udGVudCAuY29udGFjdF9fY29udGVudF9fZm9ybSAudGVsSW5wdXQgLnRlbElucHV0X19udW1iZXIge1xuICBmbGV4OiAxO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc3NnB4KSB7XG4gIC5jb250YWN0IC5jb250YWN0X19jb250ZW50IC5jb250YWN0X19jb250ZW50X19mb3JtIC50ZWxJbnB1dCB7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICB9XG59XG5cbi5zb2NpYWwtZm9sbG93IC5zb2NpYWwtZm9sbG93X190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi1ib3R0b206IDAuODEyNXJlbTtcbn1cbi5zb2NpYWwtZm9sbG93IC5zb2NpYWwtZm9sbG93X19pdGVtcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uc29jaWFsLWZvbGxvdyAuc29jaWFsLWZvbGxvd19faXRlbXMgLmZvbGxvdy1pdGVtIHtcbiAgYmFja2dyb3VuZDogIzRhNzNjMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjU2MjVyZW07XG4gIHdpZHRoOiAxLjkzNzVyZW07XG4gIGhlaWdodDogMS45Mzc1cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNvY2lhbC1mb2xsb3cgLnNvY2lhbC1mb2xsb3dfX2l0ZW1zIC5mb2xsb3ctaXRlbS4tLXR3aXR0ZXIge1xuICBjb2xvcjogIzFFQTFGMjtcbn1cbi5zb2NpYWwtZm9sbG93IC5zb2NpYWwtZm9sbG93X19pdGVtcyAuZm9sbG93LWl0ZW0uLS1pbnN0YWdyYW0ge1xuICBjb2xvcjogI0IwNDY4QTtcbn1cbi5zb2NpYWwtZm9sbG93IC5zb2NpYWwtZm9sbG93X19pdGVtcyAuZm9sbG93LWl0ZW0uLS1saW5rZWRpbiB7XG4gIGNvbG9yOiAjMDA3N0I1O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/contact/contact.component.ts":
/*!***************************************************!*\
  !*** ./src/app/home/contact/contact.component.ts ***!
  \***************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.service */ "./src/app/home/contact/contact.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.service */ "./src/app/shared/shared.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var src_app_shared_components_otp_verify_otp_verify_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/components/otp-verify/otp-verify.component */ "./src/app/shared/components/otp-verify/otp-verify.component.ts");









let ContactComponent = class ContactComponent {
    constructor(translateService, titleService, contactService, sharedService, dialog) {
        this.translateService = translateService;
        this.titleService = titleService;
        this.contactService = contactService;
        this.sharedService = sharedService;
        this.dialog = dialog;
        this.inputPrefix = '50';
        this.titleService.setTitle(this.translateService.instant('~contacts'));
    }
    ngOnInit() {
    }
    getErrorMessage() {
        return this.form.controls['cusMobilePhone'].hasError('required') ?
            `${this.translateService.instant('~pleaseFillTelNumber')}` : '';
    }
    onTelInput(e) {
        const value = e.target.value;
        this.form.controls['cusMobilePhone'].setValue(value.replace(/[^\d]/, ''));
    }
    onSubmit() {
        const gsm = `994${this.inputPrefix}${this.form.controls['cusMobilePhone'].value}`;
        if (!this.form.valid) {
            return;
        }
        const dialogRef = this.openOtpVerifyDialog(gsm);
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.postCustomerMessage();
            }
        });
    }
    postCustomerMessage() {
        const gsm = `994${this.inputPrefix}${this.form.controls['cusMobilePhone'].value}`;
        const newFormValue = {
            cusMobilePhone: gsm,
            messageSubject: this.form.value.messageSubject,
            messageBody: this.form.value.messageBody
        };
        if (!this.form.valid) {
            return;
        }
        this.loading = true;
        this.contactService.postCustomerMessage(newFormValue)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => this.loading = false)).subscribe(res => {
            this.isSent = true;
            this.sharedService.createNotification(this.translateService.instant('~messageSent'), 'OK', 'success');
        });
    }
    openOtpVerifyDialog(gsm) {
        const dialogRef = this.dialog.open(src_app_shared_components_otp_verify_otp_verify_component__WEBPACK_IMPORTED_MODULE_8__["OtpVerifyComponent"], {
            data: {
                otpObject: {
                    gsm: gsm
                }
            }
        });
        return dialogRef;
    }
};
ContactComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] },
    { type: _contact_service__WEBPACK_IMPORTED_MODULE_4__["ContactService"] },
    { type: src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: true })
], ContactComponent.prototype, "form", void 0);
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'contact',
        template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/contact/contact.component.html"),
        styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/home/contact/contact.component.scss")]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/home/contact/contact.module.ts":
/*!************************************************!*\
  !*** ./src/app/home/contact/contact.module.ts ***!
  \************************************************/
/*! exports provided: ContactModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactModule", function() { return ContactModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.component */ "./src/app/home/contact/contact.component.ts");
/* harmony import */ var _contact_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.routing */ "./src/app/home/contact/contact.routing.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
/* harmony import */ var src_app_shared_shared_translate_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared-translate.module */ "./src/app/shared/shared-translate.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_components_otp_verify_otp_verify_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/components/otp-verify/otp-verify.module */ "./src/app/shared/components/otp-verify/otp-verify.module.ts");









let ContactModule = class ContactModule {
};
ContactModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _contact_routing__WEBPACK_IMPORTED_MODULE_4__["ContactRoutingModule"],
            src_app_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            src_app_shared_shared_translate_module__WEBPACK_IMPORTED_MODULE_6__["SharedTranslateModule"],
            src_app_shared_components_otp_verify_otp_verify_module__WEBPACK_IMPORTED_MODULE_8__["OtpVerifyModule"]
        ]
    })
], ContactModule);



/***/ }),

/***/ "./src/app/home/contact/contact.routing.ts":
/*!*************************************************!*\
  !*** ./src/app/home/contact/contact.routing.ts ***!
  \*************************************************/
/*! exports provided: ContactRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactRoutingModule", function() { return ContactRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.component */ "./src/app/home/contact/contact.component.ts");




const routes = [
    { path: '', component: _contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"], pathMatch: 'full' },
];
let ContactRoutingModule = class ContactRoutingModule {
};
ContactRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ContactRoutingModule);



/***/ }),

/***/ "./src/app/home/contact/contact.service.ts":
/*!*************************************************!*\
  !*** ./src/app/home/contact/contact.service.ts ***!
  \*************************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let ContactService = class ContactService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    postCustomerMessage(formValue) {
        return this.http.post('mybank/postCustomerMessage', Object.assign({}, formValue, { token: this.authService.getToken() }));
    }
};
ContactService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
ContactService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ContactService);



/***/ }),

/***/ "./src/app/shared/components/otp-verify/otp-verify.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/otp-verify/otp-verify.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n}\n\n.component {\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  width: calc(var(--loan-request-step-second-width));\n  height: calc(var(--loan-request-step-second-height));\n  padding: var(--loan-request-step-padding);\n}\n\n.component .component__header {\n  display: flex;\n  flex-direction: column;\n}\n\n.component .component__header .component__header__title {\n  font-family: \"Montserrat-Medium\";\n  font-size: 1.125rem;\n  font-weight: 400;\n  letter-spacing: -0.0112rem;\n  letter-spacing: -0.0112rem;\n}\n\n.component .component__header .component__header__resendOtp button {\n  font-size: 11px;\n  margin-top: 7px;\n}\n\n.component .component__header .component__header__subtitle {\n  color: #7f7f7f;\n}\n\n.component .component__content {\n  flex: 1;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.component .component__content .otpVerify {\n  display: flex;\n  flex-direction: column;\n}\n\n.component .component__content .otpVerify .otpVerify__fields {\n  display: flex;\n}\n\n.component .component__content .otpVerify .otpVerify__fields .otpInput {\n  text-align: center;\n  width: 3.9375rem;\n  margin-right: 0.625rem;\n}\n\n.component .component__footer {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  min-height: 2.9375rem;\n  padding: 0 1.25rem;\n}\n\n.component .component__footer .component__footer__next {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvb3RwLXZlcmlmeS9EOlxcc291cmNlIGNvZGVzXFxwbHVzLW1pbnVzL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXG90cC12ZXJpZnlcXG90cC12ZXJpZnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL290cC12ZXJpZnkvb3RwLXZlcmlmeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSjs7QURHQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrREFBQTtFQUNBLG9EQUFBO0VBQ0EseUNBQUE7QUNBSjs7QURDSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQ0NSOztBREFRO0VBQ0ksZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtBQ0VaOztBRENZO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUNDaEI7O0FERVE7RUFDSSxjQUFBO0FDQVo7O0FER0k7RUFDSSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDRFI7O0FERVE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUNBWjs7QURDWTtFQUNJLGFBQUE7QUNDaEI7O0FEQWdCO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDRXBCOztBRE1JO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQ0pSOztBREtPO0VBQ0ksaUJBQUE7QUNIWCIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL290cC12ZXJpZnkvb3RwLXZlcmlmeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxufVxyXG5cclxuLmNvbXBvbmVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgd2lkdGg6IGNhbGModmFyKC0tbG9hbi1yZXF1ZXN0LXN0ZXAtc2Vjb25kLXdpZHRoKSk7XHJcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0tbG9hbi1yZXF1ZXN0LXN0ZXAtc2Vjb25kLWhlaWdodCkpO1xyXG4gICAgcGFkZGluZzogdmFyKC0tbG9hbi1yZXF1ZXN0LXN0ZXAtcGFkZGluZyk7XHJcbiAgICAuY29tcG9uZW50X19oZWFkZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAuY29tcG9uZW50X19oZWFkZXJfX3RpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0LU1lZGl1bSc7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMTEycmVtO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDExMnJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbXBvbmVudF9faGVhZGVyX19yZXNlbmRPdHAge1xyXG4gICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb21wb25lbnRfX2hlYWRlcl9fc3VidGl0bGUge1xyXG4gICAgICAgICAgICBjb2xvcjogIzdmN2Y3ZjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29tcG9uZW50X19jb250ZW50IHtcclxuICAgICAgICBmbGV4OjE7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIC5vdHBWZXJpZnkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAub3RwVmVyaWZ5X19maWVsZHMge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIC5vdHBJbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzLjkzNzVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjYyNXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAub3RwVmVyaWZ5X19lcnJvciB7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNvbXBvbmVudF9fZm9vdGVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDIuOTM3NXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAwIDEuMjVyZW07XHJcbiAgICAgICAuY29tcG9uZW50X19mb290ZXJfX25leHQge1xyXG4gICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgIC8vICAgICB3aWR0aDogNi4yNXJlbTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgIH1cclxuICAgIH1cclxufSIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jb21wb25lbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdzogYXV0bztcbiAgd2lkdGg6IGNhbGModmFyKC0tbG9hbi1yZXF1ZXN0LXN0ZXAtc2Vjb25kLXdpZHRoKSk7XG4gIGhlaWdodDogY2FsYyh2YXIoLS1sb2FuLXJlcXVlc3Qtc3RlcC1zZWNvbmQtaGVpZ2h0KSk7XG4gIHBhZGRpbmc6IHZhcigtLWxvYW4tcmVxdWVzdC1zdGVwLXBhZGRpbmcpO1xufVxuLmNvbXBvbmVudCAuY29tcG9uZW50X19oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmNvbXBvbmVudCAuY29tcG9uZW50X19oZWFkZXIgLmNvbXBvbmVudF9faGVhZGVyX190aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQtTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMTEycmVtO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDExMnJlbTtcbn1cbi5jb21wb25lbnQgLmNvbXBvbmVudF9faGVhZGVyIC5jb21wb25lbnRfX2hlYWRlcl9fcmVzZW5kT3RwIGJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbWFyZ2luLXRvcDogN3B4O1xufVxuLmNvbXBvbmVudCAuY29tcG9uZW50X19oZWFkZXIgLmNvbXBvbmVudF9faGVhZGVyX19zdWJ0aXRsZSB7XG4gIGNvbG9yOiAjN2Y3ZjdmO1xufVxuLmNvbXBvbmVudCAuY29tcG9uZW50X19jb250ZW50IHtcbiAgZmxleDogMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbXBvbmVudCAuY29tcG9uZW50X19jb250ZW50IC5vdHBWZXJpZnkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmNvbXBvbmVudCAuY29tcG9uZW50X19jb250ZW50IC5vdHBWZXJpZnkgLm90cFZlcmlmeV9fZmllbGRzIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5jb21wb25lbnQgLmNvbXBvbmVudF9fY29udGVudCAub3RwVmVyaWZ5IC5vdHBWZXJpZnlfX2ZpZWxkcyAub3RwSW5wdXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAzLjkzNzVyZW07XG4gIG1hcmdpbi1yaWdodDogMC42MjVyZW07XG59XG4uY29tcG9uZW50IC5jb21wb25lbnRfX2Zvb3RlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDIuOTM3NXJlbTtcbiAgcGFkZGluZzogMCAxLjI1cmVtO1xufVxuLmNvbXBvbmVudCAuY29tcG9uZW50X19mb290ZXIgLmNvbXBvbmVudF9fZm9vdGVyX19uZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/shared/components/otp-verify/otp-verify.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/otp-verify/otp-verify.component.ts ***!
  \**********************************************************************/
/*! exports provided: OtpVerifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpVerifyComponent", function() { return OtpVerifyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared.service */ "./src/app/shared/shared.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _enums_http_response_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../enums/http-response.enum */ "./src/app/shared/enums/http-response.enum.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








let OtpVerifyComponent = class OtpVerifyComponent {
    constructor(sharedService, translateService, dialogRef, data) {
        this.sharedService = sharedService;
        this.translateService = translateService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.resendTimerInterval = 100;
        this.resendLeftTime = this.resendTimerInterval + 1;
        this._onDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
    }
    ngOnInit() {
        this.initTimer();
        this.sendOtp();
        setTimeout(() => {
            this.firstField.focus();
        }, 300);
    }
    ngOnDestroy() {
        this._onDestroy$.next();
    }
    initTimer() {
        const source = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["timer"])(1000, 1000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._onDestroy$));
        const subscription = source.subscribe(res => {
            this.resendLeftTime = this.resendLeftTime - 1;
            if (res >= this.resendTimerInterval) {
                subscription.unsubscribe();
                this.canResendOtp = true;
            }
        });
    }
    sendOtp() {
        this.canResendOtp = false;
        const otpObject = this.data.otpObject;
        if (!otpObject) {
            return;
        }
        this.sharedService.sendOtp(otpObject)
            .subscribe();
    }
    onSubmit() {
        if (!this.form.valid) {
            return;
        }
        if (!(this.data && this.data.otpObject && this.data.otpObject.gsm)) {
            return;
        }
        this.loading = true;
        const otpCode = Object.values(this.form.value).join('');
        const newFormValue = {
            gsm: this.data.otpObject.gsm,
            otp: otpCode
        };
        console.log(newFormValue);
        this.sharedService.checkOTP(newFormValue)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => this.loading = false))
            .subscribe(res => {
            console.log(res);
            if (res && (res.success === _enums_http_response_enum__WEBPACK_IMPORTED_MODULE_6__["HttpResponseEnum"].success)) {
                this.dialogRef.close(res);
            }
            else if (res && (res.errorText === 'OTP not allowed')) {
                this.firstField.focus();
                this.otpError = true;
            }
            else {
                this.dialogRef.close();
            }
        });
    }
    onKeyUp(controlKey, nextInput, e) {
        const value = e.target.value;
        const replacedValue = value.replace(/[^\d]/, '');
        if (replacedValue) {
            this.form.controls[controlKey].setValue(replacedValue);
            nextInput.focus();
        }
        else {
            this.form.controls[controlKey].setValue('');
        }
    }
    onFocus(controlKey) {
        this.form.controls[controlKey].setValue('');
    }
    getErrorMessage(controlKey) {
        return this.form.controls[controlKey].hasError('required') ?
            this.translateService.instant('~requiredField') : '';
    }
    onCodeInput(controlKey, e) {
        const value = e.target.value;
        this.form.controls[controlKey].setValue(value.replace(/[^\d]/, ''));
    }
    onStepBack() {
        this.dialogRef.close();
    }
};
OtpVerifyComponent.ctorParameters = () => [
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: true })
], OtpVerifyComponent.prototype, "form", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('firstField', { static: true })
], OtpVerifyComponent.prototype, "firstField", void 0);
OtpVerifyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'otp-verify',
        template: __webpack_require__(/*! raw-loader!./otp-verify.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/otp-verify/otp-verify.component.html"),
        styles: [__webpack_require__(/*! ./otp-verify.component.scss */ "./src/app/shared/components/otp-verify/otp-verify.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], OtpVerifyComponent);



/***/ }),

/***/ "./src/app/shared/components/otp-verify/otp-verify.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/components/otp-verify/otp-verify.module.ts ***!
  \*******************************************************************/
/*! exports provided: OtpVerifyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpVerifyModule", function() { return OtpVerifyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _otp_verify_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./otp-verify.component */ "./src/app/shared/components/otp-verify/otp-verify.component.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared/shared.module.ts");





let OtpVerifyModule = class OtpVerifyModule {
};
OtpVerifyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_otp_verify_component__WEBPACK_IMPORTED_MODULE_3__["OtpVerifyComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ],
        exports: [_otp_verify_component__WEBPACK_IMPORTED_MODULE_3__["OtpVerifyComponent"]],
        entryComponents: [_otp_verify_component__WEBPACK_IMPORTED_MODULE_3__["OtpVerifyComponent"]]
    })
], OtpVerifyModule);



/***/ })

}]);
//# sourceMappingURL=home-contact-contact-module-es2015.js.map