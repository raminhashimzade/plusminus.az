(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-landing-page-landing-page-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/landing-page/best-offers/best-credit-card-offers/best-credit-card-offers.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/landing-page/best-offers/best-credit-card-offers/best-credit-card-offers.component.html ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n   <div class=\"swiper-container\" [swiper]=\"config\" *ngIf=\"offers$ | async as offers\">\r\n      <div class=\"swiper-wrapper credits\">\r\n        <div class=\"swiper-slide\" *ngFor=\"let offer of offers;let i=index;let first=first\">\r\n          <credit-offer-card [offer]=\"offer\"> </credit-offer-card>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"swiper-pagination\"></div>\r\n\r\n    </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/landing-page/best-offers/best-credit-card-offers/credit-card-offer-card/credit-card-offer-card.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/landing-page/best-offers/best-credit-card-offers/credit-card-offer-card/credit-card-offer-card.component.html ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card__header\">\r\n        <div class=\"card__header__title\">\r\n            <div class=\"card__header__title__logo\">\r\n                {{offer.bankName}}\r\n              </div>\r\n          <div class=\"card__header__title__secondary\"> «{{offer.offerName}}»</div>\r\n        </div>\r\n        <div class=\"card__header__logo\">\r\n            <i class=\"fas fa-university\"></i>\r\n        </div>\r\n    </div>\r\n    <div class=\"card__content\">\r\n        <div class=\"credit-percent\">\r\n          <div class=\"credit-percent__title\">\r\n          {{offer.leftTop}}\r\n          </div>\r\n          <div class=\"credit-percent__subtitle\">{{offer.leftButtom}} </div>\r\n        </div>\r\n        <div class=\"credit-count\">\r\n          <div class=\"credit-count__title\">\r\n\r\n              {{offer.rightTop}}\r\n\r\n          </div>\r\n          <div class=\"credit-count__subtitle\">\r\n\r\n              {{offer.rightButtom}}\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card__footer\">\r\n      <a mat-stroked-button color=\"primary\" href=\"{{offer.webLink}}\" target=\"_blank\" rel=\"noopener\"> {{'~detailed' | translate}}</a>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/landing-page/best-offers/best-credit-offers/best-credit-offers.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/landing-page/best-offers/best-credit-offers/best-credit-offers.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n   <div class=\"swiper-container\" [swiper]=\"config\" *ngIf=\"offers$ | async as offers\">\r\n      <div class=\"swiper-wrapper credits\">\r\n        <div class=\"swiper-slide\" *ngFor=\"let offer of offers;let i=index;let first=first\">\r\n          <credit-offer-card [offer]=\"offer\"> </credit-offer-card>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"swiper-pagination\"></div>\r\n\r\n    </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/landing-page/best-offers/best-credit-offers/credit-offer-card/credit-offer-card.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/landing-page/best-offers/best-credit-offers/credit-offer-card/credit-offer-card.component.html ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card__header\">\r\n      <div class=\"card__header__title\">\r\n          <div class=\"card__header__title__logo\">\r\n              {{offer.bankName}}\r\n            </div>\r\n        <div class=\"card__header__title__secondary\"> «{{offer.offerName}}»</div>\r\n      </div>\r\n      <div class=\"card__header__logo\">\r\n          <i class=\"fas fa-university\"></i>\r\n      </div>\r\n  </div>\r\n  <div class=\"card__content\">\r\n      <div class=\"credit-percent\">\r\n        <div class=\"credit-percent__title\">\r\n        {{offer.leftTop}}\r\n        </div>\r\n        <div class=\"credit-percent__subtitle\">{{offer.leftButtom}} </div>\r\n      </div>\r\n      <div class=\"credit-count\">\r\n        <div class=\"credit-count__title\">\r\n\r\n            {{offer.rightTop}}\r\n\r\n        </div>\r\n        <div class=\"credit-count__subtitle\">\r\n\r\n            {{offer.rightButtom}}\r\n\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"card__footer\">\r\n    <a mat-stroked-button color=\"primary\" href=\"{{offer.webLink}}\" target=\"_blank\" rel=\"noopener\"> {{'~detailed' | translate}}</a>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/landing-page/best-offers/best-debit-card-offers/best-debit-card-offers.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/landing-page/best-offers/best-debit-card-offers/best-debit-card-offers.component.html ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n   <div class=\"swiper-container\" [swiper]=\"config\" *ngIf=\"offers$ | async as offers\">\r\n      <div class=\"swiper-wrapper credits\">\r\n        <div class=\"swiper-slide\" *ngFor=\"let offer of offers;let i=index;let first=first\">\r\n          <credit-offer-card [offer]=\"offer\"> </credit-offer-card>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"swiper-pagination\"></div>\r\n\r\n    </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/landing-page/best-offers/best-debit-card-offers/debit-card-offer-card/debit-card-offer-card.component.html":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/landing-page/best-offers/best-debit-card-offers/debit-card-offer-card/debit-card-offer-card.component.html ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card__header\">\r\n        <div class=\"card__header__title\">\r\n            <div class=\"card__header__title__logo\">\r\n                {{offer.bankName}}\r\n              </div>\r\n          <div class=\"card__header__title__secondary\"> «{{offer.offerName}}»</div>\r\n        </div>\r\n        <div class=\"card__header__logo\">\r\n            <i class=\"fas fa-university\"></i>\r\n        </div>\r\n    </div>\r\n    <div class=\"card__content\">\r\n        <div class=\"credit-percent\">\r\n          <div class=\"credit-percent__title\">\r\n          {{offer.leftTop}}\r\n          </div>\r\n          <div class=\"credit-percent__subtitle\">{{offer.leftButtom}} </div>\r\n        </div>\r\n        <div class=\"credit-count\">\r\n          <div class=\"credit-count__title\">\r\n\r\n              {{offer.rightTop}}\r\n\r\n          </div>\r\n          <div class=\"credit-count__subtitle\">\r\n\r\n              {{offer.rightButtom}}\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card__footer\">\r\n      <a mat-stroked-button color=\"primary\" href=\"{{offer.webLink}}\" target=\"_blank\" rel=\"noopener\"> {{'~detailed' | translate}}</a>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/landing-page/best-offers/best-deposit-offers/best-deposit-offer/best-deposit-offer.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/landing-page/best-offers/best-deposit-offers/best-deposit-offer/best-deposit-offer.component.html ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card__header\">\r\n        <div class=\"card__header__title\">\r\n            <div class=\"card__header__title__logo\">\r\n                {{offer.bankName}}\r\n              </div>\r\n          <div class=\"card__header__title__secondary\"> «{{offer.offerName}}»</div>\r\n        </div>\r\n        <div class=\"card__header__logo\">\r\n            <i class=\"fas fa-university\"></i>\r\n        </div>\r\n    </div>\r\n    <div class=\"card__content\">\r\n        <div class=\"credit-percent\">\r\n          <div class=\"credit-percent__title\">\r\n          {{offer.leftTop}}\r\n          </div>\r\n          <div class=\"credit-percent__subtitle\">{{offer.leftButtom}} </div>\r\n        </div>\r\n        <div class=\"credit-count\">\r\n          <div class=\"credit-count__title\">\r\n\r\n              {{offer.rightTop}}\r\n\r\n          </div>\r\n          <div class=\"credit-count__subtitle\">\r\n\r\n              {{offer.rightButtom}}\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card__footer\">\r\n      <a mat-stroked-button color=\"primary\" href=\"{{offer.webLink}}\" target=\"_blank\" rel=\"noopener\"> {{'~detailed' | translate}}</a>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/landing-page/best-offers/best-deposit-offers/best-deposit-offers.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/landing-page/best-offers/best-deposit-offers/best-deposit-offers.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n   <div class=\"swiper-container\" [swiper]=\"config\" *ngIf=\"offers$ | async as offers\">\r\n      <div class=\"swiper-wrapper credits\">\r\n        <div class=\"swiper-slide\" *ngFor=\"let offer of offers;let i=index;let first=first\">\r\n          <credit-offer-card [offer]=\"offer\"> </credit-offer-card>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"swiper-pagination\"></div>\r\n\r\n    </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/landing-page/best-offers/best-offers.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/landing-page/best-offers/best-offers.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container-overlay\">\r\n\r\n</div>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"section\">\r\n            <div class=\"section__title\">{{'~best-offers' | translate}}</div>\r\n            <div class=\"section__content\">\r\n                <mat-tab-group [disableRipple]=\"true\" [selectedIndex]=\"selectedTabIndex\" [animationDuration]=\"'1s'\">\r\n                    <mat-tab label=\"{{'~loans' | translate}}\">\r\n\r\n                        <ng-template matTabContent>\r\n                            <best-credit-offers></best-credit-offers>\r\n                          </ng-template>\r\n                    </mat-tab>\r\n\r\n                     <mat-tab label=\"{{'~deposits' | translate}}\" >\r\n                        <ng-template matTabContent>\r\n                            <best-deposit-offers></best-deposit-offers>\r\n                          </ng-template>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"{{'~credit-cards' | translate}}\">\r\n                      <ng-template matTabContent>\r\n                          <best-credit-card-offers></best-credit-card-offers>\r\n                        </ng-template>\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"{{'~debit-cards' | translate}}\">\r\n                      <ng-template matTabContent>\r\n                          <best-debit-card-offers></best-debit-card-offers>\r\n                        </ng-template>\r\n                    </mat-tab>\r\n                  </mat-tab-group>\r\n            </div>\r\n          </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/landing-page/favorable-rates-preview/favorable-rates-preview.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/landing-page/favorable-rates-preview/favorable-rates-preview.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container-overlay\">\r\n\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n          <div class=\"section\">\r\n              <div class=\"section__title\">{{'~favorableRate' | translate}}</div>\r\n              <div class=\"section__content\" *ngIf=\"rates\" >\r\n                <favorable-rates-preview-table  *ngFor=\"let rate of rates;let i = index\" [currency] = \"rate\" [index]=\"i\"></favorable-rates-preview-table>\r\n              </div>\r\n              <div class=\"section__footer\">\r\n                <div class=\"section__footer__date\">\r\n                    <!-- Курс актуален на 14:21:16, 16.04.2019 -->\r\n                </div>\r\n                <div class=\"section__footer__action\">\r\n                   <a routerLink=\"/home/exchange-rates\"> {{'~allCurrencies' | translate}}</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/landing-page/landing-page.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/landing-page/landing-page.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main-banner></main-banner>\r\n<our-services></our-services>\r\n<best-offers></best-offers>\r\n<favorable-rates-preview></favorable-rates-preview>\r\n<our-partners></our-partners>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/landing-page/main-banner/loan-slide/loan-slide.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/landing-page/main-banner/loan-slide/loan-slide.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n <div class=\"slide__cover --loans\">\r\n  <!-- <img src=\"./assets/images/PLUSMINUS_HOMEPAGE_BANNER.webp\" /> -->\r\n  </div>\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <div class=\"slide\">\r\n\r\n          <div class=\"slide__content\">\r\n            <div class=\"slide__content__title\" >\r\n                {{'~selectCredits' | translate}}\r\n            </div>\r\n            <div class=\"slide__content__shortInfo\" id =\"slideLoanShortInfo\" >\r\n              {{'~selectCreditsShortInfo' | translate}}\r\n            </div>\r\n            <div class=\"slide__detailed\">\r\n              <button mat-raised-button (click)=\"onRequestLoansFromAllBanks()\" >{{ '~requestLoan' | translate }}</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/landing-page/main-banner/main-banner.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/landing-page/main-banner/main-banner.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div  class=\"swiper-container\" [swiper]=\"config\">\r\n    <div class=\"swiper-wrapper\">\r\n      <div class=\"swiper-slide\">\r\n          <loan-slide ></loan-slide>\r\n      </div>\r\n      <div class=\"swiper-slide\">\r\n          <mortgage-slide ></mortgage-slide>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"swiper-pagination\"></div>\r\n\r\n    <div class=\"swiper-button-prev\"></div>\r\n    <div class=\"swiper-button-next\"></div>\r\n  </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/landing-page/main-banner/mortgage-slide/mortgage-slide.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/landing-page/main-banner/mortgage-slide/mortgage-slide.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n <div class=\"slide__cover --mortgage\">\r\n    <!-- <img [src]=\"slide.coverPhoto\" /> -->\r\n  </div>\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <div class=\"slide\" >\r\n\r\n          <div class=\"slide__content\">\r\n            <div class=\"slide__content__title\" >\r\n              {{'~mortgage' | translate}}\r\n            </div>\r\n            <div class=\"slide__content__shortInfo\">\r\n              {{'~mortgageBannerMessage' | translate}}\r\n            </div>\r\n            <div class=\"slide__detailed\">\r\n              <a mat-raised-button   routerLink=\"/home/mortgage\">{{ '~compare' | translate }}</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/landing-page/our-partners/bank-partners/bank-partner-card/bank-partner-card.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/landing-page/our-partners/bank-partners/bank-partner-card/bank-partner-card.component.html ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"partner\" href=\"{{partner?.bankWebSite}}\" target=\"_blank\" rel=\"noopener\">\r\n  <img src=\"./assets/icons/banks/{{partner.bankID}}.svg\">\r\n</a>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/landing-page/our-partners/bank-partners/bank-partners.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/landing-page/our-partners/bank-partners/bank-partners.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row justify-content-start\">\r\n    <div class=\"col-4 col-md-3 col-lg-3 col-xl-2 pr-0 pl-0\" *ngFor=\"let partner of (partners$ | async) \">\r\n        <bank-partner-card   [partner]=\"partner\">  </bank-partner-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/landing-page/our-partners/our-partners.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/landing-page/our-partners/our-partners.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container-overlay\">\r\n\r\n</div>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"section\">\r\n            <div class=\"section__title\">{{'~our-partners' | translate}}</div>\r\n            <div class=\"section__content\">\r\n                     <bank-partners></bank-partners>\r\n            </div>\r\n          </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/landing-page/our-services/our-services.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/landing-page/our-services/our-services.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-6 col-md-4 p-0\" *ngFor=\"let service of services\">\r\n      <service-card [service]=\"service\"></service-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/landing-page/our-services/service-card/service-card.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/landing-page/our-services/service-card/service-card.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"service-card\" *ngIf=\"service\" routerLink=\"/home/{{service.url}}\" [ngClass]=\"{'disabled': service?.disabled}\">\r\n  <div class=\"service-card__icon\">\r\n    <img src=\"{{ service.iconPath }}\" />\r\n  </div>\r\n  <div class=\"service-card__name\" [translate]=\"service.name\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/typed.js/lib/typed.js":
/*!********************************************!*\
  !*** ./node_modules/typed.js/lib/typed.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * 
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.9
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _initializerJs = __webpack_require__(1);
	
	var _htmlParserJs = __webpack_require__(3);
	
	/**
	 * Welcome to Typed.js!
	 * @param {string} elementId HTML element ID _OR_ HTML element
	 * @param {object} options options object
	 * @returns {object} a new Typed object
	 */
	
	var Typed = (function () {
	  function Typed(elementId, options) {
	    _classCallCheck(this, Typed);
	
	    // Initialize it up
	    _initializerJs.initializer.load(this, options, elementId);
	    // All systems go!
	    this.begin();
	  }
	
	  /**
	   * Toggle start() and stop() of the Typed instance
	   * @public
	   */
	
	  _createClass(Typed, [{
	    key: 'toggle',
	    value: function toggle() {
	      this.pause.status ? this.start() : this.stop();
	    }
	
	    /**
	     * Stop typing / backspacing and enable cursor blinking
	     * @public
	     */
	  }, {
	    key: 'stop',
	    value: function stop() {
	      if (this.typingComplete) return;
	      if (this.pause.status) return;
	      this.toggleBlinking(true);
	      this.pause.status = true;
	      this.options.onStop(this.arrayPos, this);
	    }
	
	    /**
	     * Start typing / backspacing after being stopped
	     * @public
	     */
	  }, {
	    key: 'start',
	    value: function start() {
	      if (this.typingComplete) return;
	      if (!this.pause.status) return;
	      this.pause.status = false;
	      if (this.pause.typewrite) {
	        this.typewrite(this.pause.curString, this.pause.curStrPos);
	      } else {
	        this.backspace(this.pause.curString, this.pause.curStrPos);
	      }
	      this.options.onStart(this.arrayPos, this);
	    }
	
	    /**
	     * Destroy this instance of Typed
	     * @public
	     */
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.reset(false);
	      this.options.onDestroy(this);
	    }
	
	    /**
	     * Reset Typed and optionally restarts
	     * @param {boolean} restart
	     * @public
	     */
	  }, {
	    key: 'reset',
	    value: function reset() {
	      var restart = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
	
	      clearInterval(this.timeout);
	      this.replaceText('');
	      if (this.cursor && this.cursor.parentNode) {
	        this.cursor.parentNode.removeChild(this.cursor);
	        this.cursor = null;
	      }
	      this.strPos = 0;
	      this.arrayPos = 0;
	      this.curLoop = 0;
	      if (restart) {
	        this.insertCursor();
	        this.options.onReset(this);
	        this.begin();
	      }
	    }
	
	    /**
	     * Begins the typing animation
	     * @private
	     */
	  }, {
	    key: 'begin',
	    value: function begin() {
	      var _this = this;
	
	      this.typingComplete = false;
	      this.shuffleStringsIfNeeded(this);
	      this.insertCursor();
	      if (this.bindInputFocusEvents) this.bindFocusEvents();
	      this.timeout = setTimeout(function () {
	        // Check if there is some text in the element, if yes start by backspacing the default message
	        if (!_this.currentElContent || _this.currentElContent.length === 0) {
	          _this.typewrite(_this.strings[_this.sequence[_this.arrayPos]], _this.strPos);
	        } else {
	          // Start typing
	          _this.backspace(_this.currentElContent, _this.currentElContent.length);
	        }
	      }, this.startDelay);
	    }
	
	    /**
	     * Called for each character typed
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'typewrite',
	    value: function typewrite(curString, curStrPos) {
	      var _this2 = this;
	
	      if (this.fadeOut && this.el.classList.contains(this.fadeOutClass)) {
	        this.el.classList.remove(this.fadeOutClass);
	        if (this.cursor) this.cursor.classList.remove(this.fadeOutClass);
	      }
	
	      var humanize = this.humanizer(this.typeSpeed);
	      var numChars = 1;
	
	      if (this.pause.status === true) {
	        this.setPauseStatus(curString, curStrPos, true);
	        return;
	      }
	
	      // contain typing function in a timeout humanize'd delay
	      this.timeout = setTimeout(function () {
	        // skip over any HTML chars
	        curStrPos = _htmlParserJs.htmlParser.typeHtmlChars(curString, curStrPos, _this2);
	
	        var pauseTime = 0;
	        var substr = curString.substr(curStrPos);
	        // check for an escape character before a pause value
	        // format: \^\d+ .. eg: ^1000 .. should be able to print the ^ too using ^^
	        // single ^ are removed from string
	        if (substr.charAt(0) === '^') {
	          if (/^\^\d+/.test(substr)) {
	            var skip = 1; // skip at least 1
	            substr = /\d+/.exec(substr)[0];
	            skip += substr.length;
	            pauseTime = parseInt(substr);
	            _this2.temporaryPause = true;
	            _this2.options.onTypingPaused(_this2.arrayPos, _this2);
	            // strip out the escape character and pause value so they're not printed
	            curString = curString.substring(0, curStrPos) + curString.substring(curStrPos + skip);
	            _this2.toggleBlinking(true);
	          }
	        }
	
	        // check for skip characters formatted as
	        // "this is a `string to print NOW` ..."
	        if (substr.charAt(0) === '`') {
	          while (curString.substr(curStrPos + numChars).charAt(0) !== '`') {
	            numChars++;
	            if (curStrPos + numChars > curString.length) break;
	          }
	          // strip out the escape characters and append all the string in between
	          var stringBeforeSkip = curString.substring(0, curStrPos);
	          var stringSkipped = curString.substring(stringBeforeSkip.length + 1, curStrPos + numChars);
	          var stringAfterSkip = curString.substring(curStrPos + numChars + 1);
	          curString = stringBeforeSkip + stringSkipped + stringAfterSkip;
	          numChars--;
	        }
	
	        // timeout for any pause after a character
	        _this2.timeout = setTimeout(function () {
	          // Accounts for blinking while paused
	          _this2.toggleBlinking(false);
	
	          // We're done with this sentence!
	          if (curStrPos >= curString.length) {
	            _this2.doneTyping(curString, curStrPos);
	          } else {
	            _this2.keepTyping(curString, curStrPos, numChars);
	          }
	          // end of character pause
	          if (_this2.temporaryPause) {
	            _this2.temporaryPause = false;
	            _this2.options.onTypingResumed(_this2.arrayPos, _this2);
	          }
	        }, pauseTime);
	
	        // humanized value for typing
	      }, humanize);
	    }
	
	    /**
	     * Continue to the next string & begin typing
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'keepTyping',
	    value: function keepTyping(curString, curStrPos, numChars) {
	      // call before functions if applicable
	      if (curStrPos === 0) {
	        this.toggleBlinking(false);
	        this.options.preStringTyped(this.arrayPos, this);
	      }
	      // start typing each new char into existing string
	      // curString: arg, this.el.html: original text inside element
	      curStrPos += numChars;
	      var nextString = curString.substr(0, curStrPos);
	      this.replaceText(nextString);
	      // loop the function
	      this.typewrite(curString, curStrPos);
	    }
	
	    /**
	     * We're done typing all strings
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'doneTyping',
	    value: function doneTyping(curString, curStrPos) {
	      var _this3 = this;
	
	      // fires callback function
	      this.options.onStringTyped(this.arrayPos, this);
	      this.toggleBlinking(true);
	      // is this the final string
	      if (this.arrayPos === this.strings.length - 1) {
	        // callback that occurs on the last typed string
	        this.complete();
	        // quit if we wont loop back
	        if (this.loop === false || this.curLoop === this.loopCount) {
	          return;
	        }
	      }
	      this.timeout = setTimeout(function () {
	        _this3.backspace(curString, curStrPos);
	      }, this.backDelay);
	    }
	
	    /**
	     * Backspaces 1 character at a time
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'backspace',
	    value: function backspace(curString, curStrPos) {
	      var _this4 = this;
	
	      if (this.pause.status === true) {
	        this.setPauseStatus(curString, curStrPos, true);
	        return;
	      }
	      if (this.fadeOut) return this.initFadeOut();
	
	      this.toggleBlinking(false);
	      var humanize = this.humanizer(this.backSpeed);
	
	      this.timeout = setTimeout(function () {
	        curStrPos = _htmlParserJs.htmlParser.backSpaceHtmlChars(curString, curStrPos, _this4);
	        // replace text with base text + typed characters
	        var curStringAtPosition = curString.substr(0, curStrPos);
	        _this4.replaceText(curStringAtPosition);
	
	        // if smartBack is enabled
	        if (_this4.smartBackspace) {
	          // the remaining part of the current string is equal of the same part of the new string
	          var nextString = _this4.strings[_this4.arrayPos + 1];
	          if (nextString && curStringAtPosition === nextString.substr(0, curStrPos)) {
	            _this4.stopNum = curStrPos;
	          } else {
	            _this4.stopNum = 0;
	          }
	        }
	
	        // if the number (id of character in current string) is
	        // less than the stop number, keep going
	        if (curStrPos > _this4.stopNum) {
	          // subtract characters one by one
	          curStrPos--;
	          // loop the function
	          _this4.backspace(curString, curStrPos);
	        } else if (curStrPos <= _this4.stopNum) {
	          // if the stop number has been reached, increase
	          // array position to next string
	          _this4.arrayPos++;
	          // When looping, begin at the beginning after backspace complete
	          if (_this4.arrayPos === _this4.strings.length) {
	            _this4.arrayPos = 0;
	            _this4.options.onLastStringBackspaced();
	            _this4.shuffleStringsIfNeeded();
	            _this4.begin();
	          } else {
	            _this4.typewrite(_this4.strings[_this4.sequence[_this4.arrayPos]], curStrPos);
	          }
	        }
	        // humanized value for typing
	      }, humanize);
	    }
	
	    /**
	     * Full animation is complete
	     * @private
	     */
	  }, {
	    key: 'complete',
	    value: function complete() {
	      this.options.onComplete(this);
	      if (this.loop) {
	        this.curLoop++;
	      } else {
	        this.typingComplete = true;
	      }
	    }
	
	    /**
	     * Has the typing been stopped
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @param {boolean} isTyping
	     * @private
	     */
	  }, {
	    key: 'setPauseStatus',
	    value: function setPauseStatus(curString, curStrPos, isTyping) {
	      this.pause.typewrite = isTyping;
	      this.pause.curString = curString;
	      this.pause.curStrPos = curStrPos;
	    }
	
	    /**
	     * Toggle the blinking cursor
	     * @param {boolean} isBlinking
	     * @private
	     */
	  }, {
	    key: 'toggleBlinking',
	    value: function toggleBlinking(isBlinking) {
	      if (!this.cursor) return;
	      // if in paused state, don't toggle blinking a 2nd time
	      if (this.pause.status) return;
	      if (this.cursorBlinking === isBlinking) return;
	      this.cursorBlinking = isBlinking;
	      if (isBlinking) {
	        this.cursor.classList.add('typed-cursor--blink');
	      } else {
	        this.cursor.classList.remove('typed-cursor--blink');
	      }
	    }
	
	    /**
	     * Speed in MS to type
	     * @param {number} speed
	     * @private
	     */
	  }, {
	    key: 'humanizer',
	    value: function humanizer(speed) {
	      return Math.round(Math.random() * speed / 2) + speed;
	    }
	
	    /**
	     * Shuffle the sequence of the strings array
	     * @private
	     */
	  }, {
	    key: 'shuffleStringsIfNeeded',
	    value: function shuffleStringsIfNeeded() {
	      if (!this.shuffle) return;
	      this.sequence = this.sequence.sort(function () {
	        return Math.random() - 0.5;
	      });
	    }
	
	    /**
	     * Adds a CSS class to fade out current string
	     * @private
	     */
	  }, {
	    key: 'initFadeOut',
	    value: function initFadeOut() {
	      var _this5 = this;
	
	      this.el.className += ' ' + this.fadeOutClass;
	      if (this.cursor) this.cursor.className += ' ' + this.fadeOutClass;
	      return setTimeout(function () {
	        _this5.arrayPos++;
	        _this5.replaceText('');
	
	        // Resets current string if end of loop reached
	        if (_this5.strings.length > _this5.arrayPos) {
	          _this5.typewrite(_this5.strings[_this5.sequence[_this5.arrayPos]], 0);
	        } else {
	          _this5.typewrite(_this5.strings[0], 0);
	          _this5.arrayPos = 0;
	        }
	      }, this.fadeOutDelay);
	    }
	
	    /**
	     * Replaces current text in the HTML element
	     * depending on element type
	     * @param {string} str
	     * @private
	     */
	  }, {
	    key: 'replaceText',
	    value: function replaceText(str) {
	      if (this.attr) {
	        this.el.setAttribute(this.attr, str);
	      } else {
	        if (this.isInput) {
	          this.el.value = str;
	        } else if (this.contentType === 'html') {
	          this.el.innerHTML = str;
	        } else {
	          this.el.textContent = str;
	        }
	      }
	    }
	
	    /**
	     * If using input elements, bind focus in order to
	     * start and stop the animation
	     * @private
	     */
	  }, {
	    key: 'bindFocusEvents',
	    value: function bindFocusEvents() {
	      var _this6 = this;
	
	      if (!this.isInput) return;
	      this.el.addEventListener('focus', function (e) {
	        _this6.stop();
	      });
	      this.el.addEventListener('blur', function (e) {
	        if (_this6.el.value && _this6.el.value.length !== 0) {
	          return;
	        }
	        _this6.start();
	      });
	    }
	
	    /**
	     * On init, insert the cursor element
	     * @private
	     */
	  }, {
	    key: 'insertCursor',
	    value: function insertCursor() {
	      if (!this.showCursor) return;
	      if (this.cursor) return;
	      this.cursor = document.createElement('span');
	      this.cursor.className = 'typed-cursor';
	      this.cursor.innerHTML = this.cursorChar;
	      this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling);
	    }
	  }]);
	
	  return Typed;
	})();
	
	exports['default'] = Typed;
	module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _defaultsJs = __webpack_require__(2);
	
	var _defaultsJs2 = _interopRequireDefault(_defaultsJs);
	
	/**
	 * Initialize the Typed object
	 */
	
	var Initializer = (function () {
	  function Initializer() {
	    _classCallCheck(this, Initializer);
	  }
	
	  _createClass(Initializer, [{
	    key: 'load',
	
	    /**
	     * Load up defaults & options on the Typed instance
	     * @param {Typed} self instance of Typed
	     * @param {object} options options object
	     * @param {string} elementId HTML element ID _OR_ instance of HTML element
	     * @private
	     */
	
	    value: function load(self, options, elementId) {
	      // chosen element to manipulate text
	      if (typeof elementId === 'string') {
	        self.el = document.querySelector(elementId);
	      } else {
	        self.el = elementId;
	      }
	
	      self.options = _extends({}, _defaultsJs2['default'], options);
	
	      // attribute to type into
	      self.isInput = self.el.tagName.toLowerCase() === 'input';
	      self.attr = self.options.attr;
	      self.bindInputFocusEvents = self.options.bindInputFocusEvents;
	
	      // show cursor
	      self.showCursor = self.isInput ? false : self.options.showCursor;
	
	      // custom cursor
	      self.cursorChar = self.options.cursorChar;
	
	      // Is the cursor blinking
	      self.cursorBlinking = true;
	
	      // text content of element
	      self.elContent = self.attr ? self.el.getAttribute(self.attr) : self.el.textContent;
	
	      // html or plain text
	      self.contentType = self.options.contentType;
	
	      // typing speed
	      self.typeSpeed = self.options.typeSpeed;
	
	      // add a delay before typing starts
	      self.startDelay = self.options.startDelay;
	
	      // backspacing speed
	      self.backSpeed = self.options.backSpeed;
	
	      // only backspace what doesn't match the previous string
	      self.smartBackspace = self.options.smartBackspace;
	
	      // amount of time to wait before backspacing
	      self.backDelay = self.options.backDelay;
	
	      // Fade out instead of backspace
	      self.fadeOut = self.options.fadeOut;
	      self.fadeOutClass = self.options.fadeOutClass;
	      self.fadeOutDelay = self.options.fadeOutDelay;
	
	      // variable to check whether typing is currently paused
	      self.isPaused = false;
	
	      // input strings of text
	      self.strings = self.options.strings.map(function (s) {
	        return s.trim();
	      });
	
	      // div containing strings
	      if (typeof self.options.stringsElement === 'string') {
	        self.stringsElement = document.querySelector(self.options.stringsElement);
	      } else {
	        self.stringsElement = self.options.stringsElement;
	      }
	
	      if (self.stringsElement) {
	        self.strings = [];
	        self.stringsElement.style.display = 'none';
	        var strings = Array.prototype.slice.apply(self.stringsElement.children);
	        var stringsLength = strings.length;
	
	        if (stringsLength) {
	          for (var i = 0; i < stringsLength; i += 1) {
	            var stringEl = strings[i];
	            self.strings.push(stringEl.innerHTML.trim());
	          }
	        }
	      }
	
	      // character number position of current string
	      self.strPos = 0;
	
	      // current array position
	      self.arrayPos = 0;
	
	      // index of string to stop backspacing on
	      self.stopNum = 0;
	
	      // Looping logic
	      self.loop = self.options.loop;
	      self.loopCount = self.options.loopCount;
	      self.curLoop = 0;
	
	      // shuffle the strings
	      self.shuffle = self.options.shuffle;
	      // the order of strings
	      self.sequence = [];
	
	      self.pause = {
	        status: false,
	        typewrite: true,
	        curString: '',
	        curStrPos: 0
	      };
	
	      // When the typing is complete (when not looped)
	      self.typingComplete = false;
	
	      // Set the order in which the strings are typed
	      for (var i in self.strings) {
	        self.sequence[i] = i;
	      }
	
	      // If there is some text in the element
	      self.currentElContent = this.getCurrentElContent(self);
	
	      self.autoInsertCss = self.options.autoInsertCss;
	
	      this.appendAnimationCss(self);
	    }
	  }, {
	    key: 'getCurrentElContent',
	    value: function getCurrentElContent(self) {
	      var elContent = '';
	      if (self.attr) {
	        elContent = self.el.getAttribute(self.attr);
	      } else if (self.isInput) {
	        elContent = self.el.value;
	      } else if (self.contentType === 'html') {
	        elContent = self.el.innerHTML;
	      } else {
	        elContent = self.el.textContent;
	      }
	      return elContent;
	    }
	  }, {
	    key: 'appendAnimationCss',
	    value: function appendAnimationCss(self) {
	      var cssDataName = 'data-typed-js-css';
	      if (!self.autoInsertCss) {
	        return;
	      }
	      if (!self.showCursor && !self.fadeOut) {
	        return;
	      }
	      if (document.querySelector('[' + cssDataName + ']')) {
	        return;
	      }
	
	      var css = document.createElement('style');
	      css.type = 'text/css';
	      css.setAttribute(cssDataName, true);
	
	      var innerCss = '';
	      if (self.showCursor) {
	        innerCss += '\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ';
	      }
	      if (self.fadeOut) {
	        innerCss += '\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ';
	      }
	      if (css.length === 0) {
	        return;
	      }
	      css.innerHTML = innerCss;
	      document.body.appendChild(css);
	    }
	  }]);
	
	  return Initializer;
	})();
	
	exports['default'] = Initializer;
	var initializer = new Initializer();
	exports.initializer = initializer;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	/**
	 * Defaults & options
	 * @returns {object} Typed defaults & options
	 * @public
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var defaults = {
	  /**
	   * @property {array} strings strings to be typed
	   * @property {string} stringsElement ID of element containing string children
	   */
	  strings: ['These are the default values...', 'You know what you should do?', 'Use your own!', 'Have a great day!'],
	  stringsElement: null,
	
	  /**
	   * @property {number} typeSpeed type speed in milliseconds
	   */
	  typeSpeed: 0,
	
	  /**
	   * @property {number} startDelay time before typing starts in milliseconds
	   */
	  startDelay: 0,
	
	  /**
	   * @property {number} backSpeed backspacing speed in milliseconds
	   */
	  backSpeed: 0,
	
	  /**
	   * @property {boolean} smartBackspace only backspace what doesn't match the previous string
	   */
	  smartBackspace: true,
	
	  /**
	   * @property {boolean} shuffle shuffle the strings
	   */
	  shuffle: false,
	
	  /**
	   * @property {number} backDelay time before backspacing in milliseconds
	   */
	  backDelay: 700,
	
	  /**
	   * @property {boolean} fadeOut Fade out instead of backspace
	   * @property {string} fadeOutClass css class for fade animation
	   * @property {boolean} fadeOutDelay Fade out delay in milliseconds
	   */
	  fadeOut: false,
	  fadeOutClass: 'typed-fade-out',
	  fadeOutDelay: 500,
	
	  /**
	   * @property {boolean} loop loop strings
	   * @property {number} loopCount amount of loops
	   */
	  loop: false,
	  loopCount: Infinity,
	
	  /**
	   * @property {boolean} showCursor show cursor
	   * @property {string} cursorChar character for cursor
	   * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
	   */
	  showCursor: true,
	  cursorChar: '|',
	  autoInsertCss: true,
	
	  /**
	   * @property {string} attr attribute for typing
	   * Ex: input placeholder, value, or just HTML text
	   */
	  attr: null,
	
	  /**
	   * @property {boolean} bindInputFocusEvents bind to focus and blur if el is text input
	   */
	  bindInputFocusEvents: false,
	
	  /**
	   * @property {string} contentType 'html' or 'null' for plaintext
	   */
	  contentType: 'html',
	
	  /**
	   * All typing is complete
	   * @param {Typed} self
	   */
	  onComplete: function onComplete(self) {},
	
	  /**
	   * Before each string is typed
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  preStringTyped: function preStringTyped(arrayPos, self) {},
	
	  /**
	   * After each string is typed
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onStringTyped: function onStringTyped(arrayPos, self) {},
	
	  /**
	   * During looping, after last string is typed
	   * @param {Typed} self
	   */
	  onLastStringBackspaced: function onLastStringBackspaced(self) {},
	
	  /**
	   * Typing has been stopped
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onTypingPaused: function onTypingPaused(arrayPos, self) {},
	
	  /**
	   * Typing has been started after being stopped
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onTypingResumed: function onTypingResumed(arrayPos, self) {},
	
	  /**
	   * After reset
	   * @param {Typed} self
	   */
	  onReset: function onReset(self) {},
	
	  /**
	   * After stop
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onStop: function onStop(arrayPos, self) {},
	
	  /**
	   * After start
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onStart: function onStart(arrayPos, self) {},
	
	  /**
	   * After destroy
	   * @param {Typed} self
	   */
	  onDestroy: function onDestroy(self) {}
	};
	
	exports['default'] = defaults;
	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	
	/**
	 * TODO: These methods can probably be combined somehow
	 * Parse HTML tags & HTML Characters
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var HTMLParser = (function () {
	  function HTMLParser() {
	    _classCallCheck(this, HTMLParser);
	  }
	
	  _createClass(HTMLParser, [{
	    key: 'typeHtmlChars',
	
	    /**
	     * Type HTML tags & HTML Characters
	     * @param {string} curString Current string
	     * @param {number} curStrPos Position in current string
	     * @param {Typed} self instance of Typed
	     * @returns {number} a new string position
	     * @private
	     */
	
	    value: function typeHtmlChars(curString, curStrPos, self) {
	      if (self.contentType !== 'html') return curStrPos;
	      var curChar = curString.substr(curStrPos).charAt(0);
	      if (curChar === '<' || curChar === '&') {
	        var endTag = '';
	        if (curChar === '<') {
	          endTag = '>';
	        } else {
	          endTag = ';';
	        }
	        while (curString.substr(curStrPos + 1).charAt(0) !== endTag) {
	          curStrPos++;
	          if (curStrPos + 1 > curString.length) {
	            break;
	          }
	        }
	        curStrPos++;
	      }
	      return curStrPos;
	    }
	
	    /**
	     * Backspace HTML tags and HTML Characters
	     * @param {string} curString Current string
	     * @param {number} curStrPos Position in current string
	     * @param {Typed} self instance of Typed
	     * @returns {number} a new string position
	     * @private
	     */
	  }, {
	    key: 'backSpaceHtmlChars',
	    value: function backSpaceHtmlChars(curString, curStrPos, self) {
	      if (self.contentType !== 'html') return curStrPos;
	      var curChar = curString.substr(curStrPos).charAt(0);
	      if (curChar === '>' || curChar === ';') {
	        var endTag = '';
	        if (curChar === '>') {
	          endTag = '<';
	        } else {
	          endTag = '&';
	        }
	        while (curString.substr(curStrPos - 1).charAt(0) !== endTag) {
	          curStrPos--;
	          if (curStrPos < 0) {
	            break;
	          }
	        }
	        curStrPos--;
	      }
	      return curStrPos;
	    }
	  }]);
	
	  return HTMLParser;
	})();
	
	exports['default'] = HTMLParser;
	var htmlParser = new HTMLParser();
	exports.htmlParser = htmlParser;

/***/ })
/******/ ])
});
;

/***/ }),

/***/ "./src/app/home/landing-page/best-offers/best-credit-card-offers/best-credit-card-offers.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/home/landing-page/best-offers/best-credit-card-offers/best-credit-card-offers.component.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  min-height: 13.125rem;\n  margin: 1.875rem 0;\n  width: 100%;\n  min-height: 280px;\n  overflow: hidden;\n}\n\n.swiper-slide {\n  width: 340px;\n}\n\n@media (max-width: 320px) {\n  .swiper-slide {\n    width: 290px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9sYW5kaW5nLXBhZ2UvYmVzdC1vZmZlcnMvYmVzdC1jcmVkaXQtY2FyZC1vZmZlcnMvRDpcXHNvdXJjZSBjb2Rlc1xccGx1cy1taW51cy9zcmNcXGFwcFxcaG9tZVxcbGFuZGluZy1wYWdlXFxiZXN0LW9mZmVyc1xcYmVzdC1jcmVkaXQtY2FyZC1vZmZlcnNcXGJlc3QtY3JlZGl0LWNhcmQtb2ZmZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2xhbmRpbmctcGFnZS9iZXN0LW9mZmVycy9iZXN0LWNyZWRpdC1jYXJkLW9mZmVycy9iZXN0LWNyZWRpdC1jYXJkLW9mZmVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDQTtFQUNDLFlBQUE7QUNFRDs7QURFQTtFQUNFO0lBQ0UsWUFBQTtFQ0NGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2xhbmRpbmctcGFnZS9iZXN0LW9mZmVycy9iZXN0LWNyZWRpdC1jYXJkLW9mZmVycy9iZXN0LWNyZWRpdC1jYXJkLW9mZmVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtaW4taGVpZ2h0OiAxMy4xMjVyZW07XHJcbiAgICBtYXJnaW46IDEuODc1cmVtIDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDI4MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uc3dpcGVyLXNsaWRlIHtcclxuIHdpZHRoOiAzNDBweDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4gIC5zd2lwZXItc2xpZGUge1xyXG4gICAgd2lkdGg6IDI5MHB4O1xyXG4gICB9XHJcbn0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi1oZWlnaHQ6IDEzLjEyNXJlbTtcbiAgbWFyZ2luOiAxLjg3NXJlbSAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMjgwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICB3aWR0aDogMzQwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCkge1xuICAuc3dpcGVyLXNsaWRlIHtcbiAgICB3aWR0aDogMjkwcHg7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/landing-page/best-offers/best-credit-card-offers/best-credit-card-offers.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/home/landing-page/best-offers/best-credit-card-offers/best-credit-card-offers.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: BestCreditCardOffersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestCreditCardOffersComponent", function() { return BestCreditCardOffersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _best_offer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../best-offer.service */ "./src/app/home/landing-page/best-offers/best-offer.service.ts");



let BestCreditCardOffersComponent = class BestCreditCardOffersComponent {
    constructor(bestOfferService) {
        this.bestOfferService = bestOfferService;
        this.config = {
            a11y: true,
            direction: 'horizontal',
            slidesPerView: 'auto',
            keyboard: true,
            mousewheel: false,
            scrollbar: false,
            navigation: false,
            pagination: { el: '.swiper-pagination', clickable: true }
        };
    }
    ngOnInit() {
        this.offers$ = this.bestOfferService.getBestOffers('CREDIT_CARD');
    }
    ngOnDestroy() {
    }
};
BestCreditCardOffersComponent.ctorParameters = () => [
    { type: _best_offer_service__WEBPACK_IMPORTED_MODULE_2__["BestOfferService"] }
];
BestCreditCardOffersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'best-credit-card-offers',
        template: __webpack_require__(/*! raw-loader!./best-credit-card-offers.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/landing-page/best-offers/best-credit-card-offers/best-credit-card-offers.component.html"),
        styles: [__webpack_require__(/*! ./best-credit-card-offers.component.scss */ "./src/app/home/landing-page/best-offers/best-credit-card-offers/best-credit-card-offers.component.scss")]
    })
], BestCreditCardOffersComponent);



/***/ }),

/***/ "./src/app/home/landing-page/best-offers/best-credit-card-offers/credit-card-offer-card/credit-card-offer-card.component.scss":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/home/landing-page/best-offers/best-credit-card-offers/credit-card-offer-card/credit-card-offer-card.component.scss ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  height: 234px;\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  background: #ffffff;\n  width: 100%;\n  height: 100%;\n  box-shadow: none;\n  padding: 20px;\n  border: solid 2px #eaf1fe;\n  margin-right: 0.625rem;\n  position: relative;\n  transition-property: transform, box-shadow;\n  transition-duration: 300ms;\n  transition-timing-function: ease-in-out;\n  cursor: pointer;\n}\n\n.card .card__header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  width: 100%;\n  padding-bottom: 17px;\n  background: #ffffff;\n  border-bottom: 1px solid #dddede;\n}\n\n.card .card__header .card__header__title {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  font-size: 16px;\n}\n\n.card .card__header .card__header__title .card__header__title__logo {\n  width: 145px;\n  max-height: 30px;\n}\n\n.card .card__header .card__header__title .card__header__title__secondary {\n  font-size: 13px;\n  margin-top: 4px;\n}\n\n.card .card__header .card__header__logo {\n  font-size: 26px;\n  color: var(--secondary-default);\n}\n\n.card .card__content {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 17px;\n}\n\n.card .card__content .credit-percent .credit-percent__title {\n  font-family: \"Montserrat-SemiBold\";\n  font-size: 1.5rem;\n  white-space: nowrap;\n}\n\n.card .card__content .credit-percent .credit-percent__title span {\n  font-size: 1.125rem;\n}\n\n.card .card__content .credit-percent .credit-percent__subtitle {\n  font-family: \"Montserrat-SemiBold\";\n  font-size: 12px;\n  margin-top: 2px;\n}\n\n.card .card__content .credit-count .credit-count__title {\n  font-family: \"Montserrat-SemiBold\";\n}\n\n.card .card__content .credit-count .credit-count__title span, .card .card__content .credit-count .credit-count__title b, .card .card__content .credit-count .credit-count__title p {\n  font-family: \"Montserrat-SemiBold\";\n  font-size: 1.125rem;\n  white-space: nowrap;\n}\n\n.card .card__content .credit-count .credit-count__subtitle {\n  margin-top: 2px;\n}\n\n.card .card__content .credit-count .credit-count__subtitle span {\n  font-size: 12px;\n}\n\n.card .card__footer {\n  margin-top: auto;\n}\n\n.card:hover {\n  box-shadow: 0 1.5625rem 1.25rem rgba(94, 94, 94, 0.15);\n  transform: translateY(-0.625rem);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9sYW5kaW5nLXBhZ2UvYmVzdC1vZmZlcnMvYmVzdC1jcmVkaXQtY2FyZC1vZmZlcnMvY3JlZGl0LWNhcmQtb2ZmZXItY2FyZC9EOlxcc291cmNlIGNvZGVzXFxwbHVzLW1pbnVzL3NyY1xcYXBwXFxob21lXFxsYW5kaW5nLXBhZ2VcXGJlc3Qtb2ZmZXJzXFxiZXN0LWNyZWRpdC1jYXJkLW9mZmVyc1xcY3JlZGl0LWNhcmQtb2ZmZXItY2FyZFxcY3JlZGl0LWNhcmQtb2ZmZXItY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9sYW5kaW5nLXBhZ2UvYmVzdC1vZmZlcnMvYmVzdC1jcmVkaXQtY2FyZC1vZmZlcnMvY3JlZGl0LWNhcmQtb2ZmZXItY2FyZC9jcmVkaXQtY2FyZC1vZmZlci1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUVBLGFBQUE7QUNBSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsMEJBQUE7RUFDQSx1Q0FBQTtFQUNBLGVBQUE7QUNDSjs7QURBSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQ0VSOztBRERRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNHWjs7QURGWTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQ0loQjs7QURGWTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FDSWhCOztBREFRO0VBQ0ksZUFBQTtFQUNBLCtCQUFBO0FDRVo7O0FERUk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0FSOztBREVZO0VBQ0Usa0NBQUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FDQWhCOztBRENnQjtFQUNJLG1CQUFBO0FDQ3BCOztBREVZO0VBQ0ksa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0FoQjs7QURJWTtFQUNJLGtDQUFBO0FDRmhCOztBREdnQjtFQUNJLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0RwQjs7QURJWTtFQUNJLGVBQUE7QUNGaEI7O0FER2M7RUFDRSxlQUFBO0FDRGhCOztBRE1JO0VBQ0ksZ0JBQUE7QUNKUjs7QURPQTtFQUNJLHNEQUFBO0VBQ0EsZ0NBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbGFuZGluZy1wYWdlL2Jlc3Qtb2ZmZXJzL2Jlc3QtY3JlZGl0LWNhcmQtb2ZmZXJzL2NyZWRpdC1jYXJkLW9mZmVyLWNhcmQvY3JlZGl0LWNhcmQtb2ZmZXItY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAvLyB3aWR0aDogMjAuOTM3NXJlbTtcclxuICAgIGhlaWdodDogMjM0cHg7XHJcbn1cclxuLmNhcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAycHggI2VhZjFmZTtcclxuICAgIG1hcmdpbi1yaWdodDogMC42MjVyZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIGJveC1zaGFkb3c7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcclxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC5jYXJkX19oZWFkZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxN3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRlZGU7XHJcbiAgICAgICAgLmNhcmRfX2hlYWRlcl9fdGl0bGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAuY2FyZF9faGVhZGVyX190aXRsZV9fbG9nbyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTQ1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY2FyZF9faGVhZGVyX190aXRsZV9fc2Vjb25kYXJ5IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICAgICAvLyAgICAgY29sb3I6ICB2YXIoLS1zZWNvbmRhcnktZGVmYXVsdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmRfX2hlYWRlcl9fbG9nbyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1kZWZhdWx0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgLmNhcmRfX2NvbnRlbnQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDE3cHg7XHJcbiAgICAgICAgLmNyZWRpdC1wZXJjZW50IHtcclxuICAgICAgICAgICAgLmNyZWRpdC1wZXJjZW50X190aXRsZSB7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkJztcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNyZWRpdC1wZXJjZW50X19zdWJ0aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGQnO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jcmVkaXQtY291bnQge1xyXG4gICAgICAgICAgICAuY3JlZGl0LWNvdW50X190aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGQnO1xyXG4gICAgICAgICAgICAgICAgc3BhbiwgYiwgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkJztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MS4xMjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY3JlZGl0LWNvdW50X19zdWJ0aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNhcmRfX2Zvb3RlciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIH1cclxuXHJcbiY6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAxLjU2MjVyZW0gMS4yNXJlbSByZ2JhKDk0LCA5NCwgOTQsIDAuMTUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjYyNXJlbSk7XHJcbn1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG5cclxufSIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMjM0cHg7XG59XG5cbi5jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlcjogc29saWQgMnB4ICNlYWYxZmU7XG4gIG1hcmdpbi1yaWdodDogMC42MjVyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBib3gtc2hhZG93O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2FyZCAuY2FyZF9faGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctYm90dG9tOiAxN3B4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGVkZTtcbn1cbi5jYXJkIC5jYXJkX19oZWFkZXIgLmNhcmRfX2hlYWRlcl9fdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmNhcmQgLmNhcmRfX2hlYWRlciAuY2FyZF9faGVhZGVyX190aXRsZSAuY2FyZF9faGVhZGVyX190aXRsZV9fbG9nbyB7XG4gIHdpZHRoOiAxNDVweDtcbiAgbWF4LWhlaWdodDogMzBweDtcbn1cbi5jYXJkIC5jYXJkX19oZWFkZXIgLmNhcmRfX2hlYWRlcl9fdGl0bGUgLmNhcmRfX2hlYWRlcl9fdGl0bGVfX3NlY29uZGFyeSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuLmNhcmQgLmNhcmRfX2hlYWRlciAuY2FyZF9faGVhZGVyX19sb2dvIHtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWRlZmF1bHQpO1xufVxuLmNhcmQgLmNhcmRfX2NvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTdweDtcbn1cbi5jYXJkIC5jYXJkX19jb250ZW50IC5jcmVkaXQtcGVyY2VudCAuY3JlZGl0LXBlcmNlbnRfX3RpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdC1TZW1pQm9sZFwiO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5jYXJkIC5jYXJkX19jb250ZW50IC5jcmVkaXQtcGVyY2VudCAuY3JlZGl0LXBlcmNlbnRfX3RpdGxlIHNwYW4ge1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xufVxuLmNhcmQgLmNhcmRfX2NvbnRlbnQgLmNyZWRpdC1wZXJjZW50IC5jcmVkaXQtcGVyY2VudF9fc3VidGl0bGUge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0LVNlbWlCb2xkXCI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuLmNhcmQgLmNhcmRfX2NvbnRlbnQgLmNyZWRpdC1jb3VudCAuY3JlZGl0LWNvdW50X190aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQtU2VtaUJvbGRcIjtcbn1cbi5jYXJkIC5jYXJkX19jb250ZW50IC5jcmVkaXQtY291bnQgLmNyZWRpdC1jb3VudF9fdGl0bGUgc3BhbiwgLmNhcmQgLmNhcmRfX2NvbnRlbnQgLmNyZWRpdC1jb3VudCAuY3JlZGl0LWNvdW50X190aXRsZSBiLCAuY2FyZCAuY2FyZF9fY29udGVudCAuY3JlZGl0LWNvdW50IC5jcmVkaXQtY291bnRfX3RpdGxlIHAge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0LVNlbWlCb2xkXCI7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uY2FyZCAuY2FyZF9fY29udGVudCAuY3JlZGl0LWNvdW50IC5jcmVkaXQtY291bnRfX3N1YnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuLmNhcmQgLmNhcmRfX2NvbnRlbnQgLmNyZWRpdC1jb3VudCAuY3JlZGl0LWNvdW50X19zdWJ0aXRsZSBzcGFuIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmNhcmQgLmNhcmRfX2Zvb3RlciB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG59XG4uY2FyZDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMS41NjI1cmVtIDEuMjVyZW0gcmdiYSg5NCwgOTQsIDk0LCAwLjE1KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjYyNXJlbSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/landing-page/best-offers/best-credit-card-offers/credit-card-offer-card/credit-card-offer-card.component.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/home/landing-page/best-offers/best-credit-card-offers/credit-card-offer-card/credit-card-offer-card.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: CreditCardOfferCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditCardOfferCardComponent", function() { return CreditCardOfferCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");



let CreditCardOfferCardComponent = class CreditCardOfferCardComponent {
    constructor(translateService) {
        this.translateService = translateService;
        this.lang = this.translateService.getDefaultLang();
        this.translateService.onDefaultLangChange.subscribe(res => this.lang = res);
    }
    ngOnInit() {
    }
};
CreditCardOfferCardComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CreditCardOfferCardComponent.prototype, "offer", void 0);
CreditCardOfferCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'credit-card-offer-card',
        template: __webpack_require__(/*! raw-loader!./credit-card-offer-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/landing-page/best-offers/best-credit-card-offers/credit-card-offer-card/credit-card-offer-card.component.html"),
        styles: [__webpack_require__(/*! ./credit-card-offer-card.component.scss */ "./src/app/home/landing-page/best-offers/best-credit-card-offers/credit-card-offer-card/credit-card-offer-card.component.scss")]
    })
], CreditCardOfferCardComponent);



/***/ }),

/***/ "./src/app/home/landing-page/best-offers/best-credit-offers/best-credit-offers.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/home/landing-page/best-offers/best-credit-offers/best-credit-offers.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  min-height: 13.125rem;\n  margin: 1.875rem 0;\n  width: 100%;\n  min-height: 280px;\n  overflow: hidden;\n}\n\n.swiper-slide {\n  width: 340px;\n}\n\n@media (max-width: 320px) {\n  .swiper-slide {\n    width: 290px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9sYW5kaW5nLXBhZ2UvYmVzdC1vZmZlcnMvYmVzdC1jcmVkaXQtb2ZmZXJzL0Q6XFxzb3VyY2UgY29kZXNcXHBsdXMtbWludXMvc3JjXFxhcHBcXGhvbWVcXGxhbmRpbmctcGFnZVxcYmVzdC1vZmZlcnNcXGJlc3QtY3JlZGl0LW9mZmVyc1xcYmVzdC1jcmVkaXQtb2ZmZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2xhbmRpbmctcGFnZS9iZXN0LW9mZmVycy9iZXN0LWNyZWRpdC1vZmZlcnMvYmVzdC1jcmVkaXQtb2ZmZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVFO0VBQ0UsWUFBQTtBQ0NKOztBREVBO0VBQ0U7SUFDRSxZQUFBO0VDQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbGFuZGluZy1wYWdlL2Jlc3Qtb2ZmZXJzL2Jlc3QtY3JlZGl0LW9mZmVycy9iZXN0LWNyZWRpdC1vZmZlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWluLWhlaWdodDogMTMuMTI1cmVtO1xyXG4gICAgbWFyZ2luOiAxLjg3NXJlbSAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAyODBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbiAgLnN3aXBlci1zbGlkZSB7XHJcbiAgICB3aWR0aDogMzQwcHhcclxuICAgfVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcbiAgLnN3aXBlci1zbGlkZSB7XHJcbiAgICB3aWR0aDogMjkwcHg7XHJcbiAgIH1cclxufSIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLWhlaWdodDogMTMuMTI1cmVtO1xuICBtYXJnaW46IDEuODc1cmVtIDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAyODBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnN3aXBlci1zbGlkZSB7XG4gIHdpZHRoOiAzNDBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gIC5zd2lwZXItc2xpZGUge1xuICAgIHdpZHRoOiAyOTBweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/landing-page/best-offers/best-credit-offers/best-credit-offers.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/home/landing-page/best-offers/best-credit-offers/best-credit-offers.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: BestCreditOffersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestCreditOffersComponent", function() { return BestCreditOffersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _best_offer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../best-offer.service */ "./src/app/home/landing-page/best-offers/best-offer.service.ts");



let BestCreditOffersComponent = class BestCreditOffersComponent {
    constructor(bestOfferService) {
        this.bestOfferService = bestOfferService;
        this.config = {
            a11y: true,
            direction: 'horizontal',
            slidesPerView: 'auto',
            keyboard: true,
            mousewheel: false,
            scrollbar: false,
            navigation: false,
            pagination: { el: '.swiper-pagination', clickable: true }
        };
    }
    ngOnInit() {
        this.offers$ = this.bestOfferService.getBestOffers('LOAN');
    }
    ngOnDestroy() {
    }
};
BestCreditOffersComponent.ctorParameters = () => [
    { type: _best_offer_service__WEBPACK_IMPORTED_MODULE_2__["BestOfferService"] }
];
BestCreditOffersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'best-credit-offers',
        template: __webpack_require__(/*! raw-loader!./best-credit-offers.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/landing-page/best-offers/best-credit-offers/best-credit-offers.component.html"),
        styles: [__webpack_require__(/*! ./best-credit-offers.component.scss */ "./src/app/home/landing-page/best-offers/best-credit-offers/best-credit-offers.component.scss")]
    })
], BestCreditOffersComponent);



/***/ }),

/***/ "./src/app/home/landing-page/best-offers/best-credit-offers/credit-offer-card/credit-offer-card.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/home/landing-page/best-offers/best-credit-offers/credit-offer-card/credit-offer-card.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  height: 234px;\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  background: #ffffff;\n  width: 100%;\n  height: 100%;\n  box-shadow: none;\n  padding: 20px;\n  border: solid 2px #eaf1fe;\n  margin-right: 0.625rem;\n  position: relative;\n  transition-property: transform, box-shadow;\n  transition-duration: 300ms;\n  transition-timing-function: ease-in-out;\n  cursor: pointer;\n}\n\n.card .card__header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  width: 100%;\n  padding-bottom: 17px;\n  background: #ffffff;\n  border-bottom: 1px solid #dddede;\n}\n\n.card .card__header .card__header__title {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  font-size: 16px;\n}\n\n.card .card__header .card__header__title .card__header__title__logo {\n  width: 145px;\n  max-height: 30px;\n}\n\n.card .card__header .card__header__title .card__header__title__secondary {\n  font-size: 13px;\n  margin-top: 4px;\n}\n\n.card .card__header .card__header__logo {\n  font-size: 26px;\n  color: var(--secondary-default);\n}\n\n.card .card__content {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 17px;\n}\n\n.card .card__content .credit-percent .credit-percent__title {\n  font-family: \"Montserrat-SemiBold\";\n  font-size: 1.5rem;\n  white-space: nowrap;\n}\n\n.card .card__content .credit-percent .credit-percent__title span {\n  font-size: 1.125rem;\n}\n\n.card .card__content .credit-percent .credit-percent__subtitle {\n  font-family: \"Montserrat-SemiBold\";\n  font-size: 12px;\n  margin-top: 2px;\n}\n\n.card .card__content .credit-count .credit-count__title {\n  font-family: \"Montserrat-SemiBold\";\n}\n\n.card .card__content .credit-count .credit-count__title span, .card .card__content .credit-count .credit-count__title b, .card .card__content .credit-count .credit-count__title p {\n  font-family: \"Montserrat-SemiBold\";\n  font-size: 1.125rem;\n  white-space: nowrap;\n}\n\n.card .card__content .credit-count .credit-count__subtitle {\n  margin-top: 2px;\n}\n\n.card .card__content .credit-count .credit-count__subtitle span {\n  font-size: 12px;\n}\n\n.card .card__footer {\n  margin-top: auto;\n}\n\n.card:hover {\n  box-shadow: 0 1.5625rem 1.25rem rgba(94, 94, 94, 0.15);\n  transform: translateY(-0.625rem);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9sYW5kaW5nLXBhZ2UvYmVzdC1vZmZlcnMvYmVzdC1jcmVkaXQtb2ZmZXJzL2NyZWRpdC1vZmZlci1jYXJkL0Q6XFxzb3VyY2UgY29kZXNcXHBsdXMtbWludXMvc3JjXFxhcHBcXGhvbWVcXGxhbmRpbmctcGFnZVxcYmVzdC1vZmZlcnNcXGJlc3QtY3JlZGl0LW9mZmVyc1xcY3JlZGl0LW9mZmVyLWNhcmRcXGNyZWRpdC1vZmZlci1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2xhbmRpbmctcGFnZS9iZXN0LW9mZmVycy9iZXN0LWNyZWRpdC1vZmZlcnMvY3JlZGl0LW9mZmVyLWNhcmQvY3JlZGl0LW9mZmVyLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBRUEsYUFBQTtBQ0FKOztBREVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSwwQkFBQTtFQUNBLHVDQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREFJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FDRVI7O0FERFE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0daOztBREZZO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDSWhCOztBREZZO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUNJaEI7O0FEQVE7RUFDSSxlQUFBO0VBQ0EsK0JBQUE7QUNFWjs7QURFSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDQVI7O0FERVk7RUFDRSxrQ0FBQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUNBaEI7O0FEQ2dCO0VBQ0ksbUJBQUE7QUNDcEI7O0FERVk7RUFDSSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDQWhCOztBRElZO0VBQ0ksa0NBQUE7QUNGaEI7O0FER2dCO0VBQ0ksa0NBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDRHBCOztBRElZO0VBQ0ksZUFBQTtBQ0ZoQjs7QURHYztFQUNFLGVBQUE7QUNEaEI7O0FETUk7RUFDSSxnQkFBQTtBQ0pSOztBRE9BO0VBQ0ksc0RBQUE7RUFDQSxnQ0FBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9sYW5kaW5nLXBhZ2UvYmVzdC1vZmZlcnMvYmVzdC1jcmVkaXQtb2ZmZXJzL2NyZWRpdC1vZmZlci1jYXJkL2NyZWRpdC1vZmZlci1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgIC8vIHdpZHRoOiAyMC45Mzc1cmVtO1xyXG4gICAgaGVpZ2h0OiAyMzRweDtcclxufVxyXG4uY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDJweCAjZWFmMWZlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjYyNXJlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgYm94LXNoYWRvdztcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xyXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLmNhcmRfX2hlYWRlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE3cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGVkZTtcclxuICAgICAgICAuY2FyZF9faGVhZGVyX190aXRsZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIC5jYXJkX19oZWFkZXJfX3RpdGxlX19sb2dvIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNDVweDtcclxuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jYXJkX19oZWFkZXJfX3RpdGxlX19zZWNvbmRhcnkge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgICAgIC8vICAgICBjb2xvcjogIHZhcigtLXNlY29uZGFyeS1kZWZhdWx0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FyZF9faGVhZGVyX19sb2dvIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWRlZmF1bHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICAuY2FyZF9fY29udGVudCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTdweDtcclxuICAgICAgICAuY3JlZGl0LXBlcmNlbnQge1xyXG4gICAgICAgICAgICAuY3JlZGl0LXBlcmNlbnRfX3RpdGxlIHtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGQnO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY3JlZGl0LXBlcmNlbnRfX3N1YnRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdC1TZW1pQm9sZCc7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNyZWRpdC1jb3VudCB7XHJcbiAgICAgICAgICAgIC5jcmVkaXQtY291bnRfX3RpdGxlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdC1TZW1pQm9sZCc7XHJcbiAgICAgICAgICAgICAgICBzcGFuLCBiLCBwIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGQnO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxLjEyNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jcmVkaXQtY291bnRfX3N1YnRpdGxlIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2FyZF9fZm9vdGVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgfVxyXG5cclxuJjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDEuNTYyNXJlbSAxLjI1cmVtIHJnYmEoOTQsIDk0LCA5NCwgMC4xNSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuNjI1cmVtKTtcclxufVxyXG5cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcblxyXG59IiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAyMzRweDtcbn1cblxuLmNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyOiBzb2xpZCAycHggI2VhZjFmZTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjYyNXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIGJveC1zaGFkb3c7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jYXJkIC5jYXJkX19oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1ib3R0b206IDE3cHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZWRlO1xufVxuLmNhcmQgLmNhcmRfX2hlYWRlciAuY2FyZF9faGVhZGVyX190aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uY2FyZCAuY2FyZF9faGVhZGVyIC5jYXJkX19oZWFkZXJfX3RpdGxlIC5jYXJkX19oZWFkZXJfX3RpdGxlX19sb2dvIHtcbiAgd2lkdGg6IDE0NXB4O1xuICBtYXgtaGVpZ2h0OiAzMHB4O1xufVxuLmNhcmQgLmNhcmRfX2hlYWRlciAuY2FyZF9faGVhZGVyX190aXRsZSAuY2FyZF9faGVhZGVyX190aXRsZV9fc2Vjb25kYXJ5IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG4uY2FyZCAuY2FyZF9faGVhZGVyIC5jYXJkX19oZWFkZXJfX2xvZ28ge1xuICBmb250LXNpemU6IDI2cHg7XG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZGVmYXVsdCk7XG59XG4uY2FyZCAuY2FyZF9fY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxN3B4O1xufVxuLmNhcmQgLmNhcmRfX2NvbnRlbnQgLmNyZWRpdC1wZXJjZW50IC5jcmVkaXQtcGVyY2VudF9fdGl0bGUge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0LVNlbWlCb2xkXCI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmNhcmQgLmNhcmRfX2NvbnRlbnQgLmNyZWRpdC1wZXJjZW50IC5jcmVkaXQtcGVyY2VudF9fdGl0bGUgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG59XG4uY2FyZCAuY2FyZF9fY29udGVudCAuY3JlZGl0LXBlcmNlbnQgLmNyZWRpdC1wZXJjZW50X19zdWJ0aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQtU2VtaUJvbGRcIjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG4uY2FyZCAuY2FyZF9fY29udGVudCAuY3JlZGl0LWNvdW50IC5jcmVkaXQtY291bnRfX3RpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdC1TZW1pQm9sZFwiO1xufVxuLmNhcmQgLmNhcmRfX2NvbnRlbnQgLmNyZWRpdC1jb3VudCAuY3JlZGl0LWNvdW50X190aXRsZSBzcGFuLCAuY2FyZCAuY2FyZF9fY29udGVudCAuY3JlZGl0LWNvdW50IC5jcmVkaXQtY291bnRfX3RpdGxlIGIsIC5jYXJkIC5jYXJkX19jb250ZW50IC5jcmVkaXQtY291bnQgLmNyZWRpdC1jb3VudF9fdGl0bGUgcCB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQtU2VtaUJvbGRcIjtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5jYXJkIC5jYXJkX19jb250ZW50IC5jcmVkaXQtY291bnQgLmNyZWRpdC1jb3VudF9fc3VidGl0bGUge1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG4uY2FyZCAuY2FyZF9fY29udGVudCAuY3JlZGl0LWNvdW50IC5jcmVkaXQtY291bnRfX3N1YnRpdGxlIHNwYW4ge1xuICBmb250LXNpemU6IDEycHg7XG59XG4uY2FyZCAuY2FyZF9fZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbn1cbi5jYXJkOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAxLjU2MjVyZW0gMS4yNXJlbSByZ2JhKDk0LCA5NCwgOTQsIDAuMTUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuNjI1cmVtKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/landing-page/best-offers/best-credit-offers/credit-offer-card/credit-offer-card.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/home/landing-page/best-offers/best-credit-offers/credit-offer-card/credit-offer-card.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: CreditOfferCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditOfferCardComponent", function() { return CreditOfferCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");



let CreditOfferCardComponent = class CreditOfferCardComponent {
    constructor(translateService) {
        this.translateService = translateService;
        this.lang = this.translateService.getDefaultLang();
        this.translateService.onDefaultLangChange.subscribe(res => this.lang = res);
    }
    ngOnInit() {
    }
};
CreditOfferCardComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CreditOfferCardComponent.prototype, "offer", void 0);
CreditOfferCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'credit-offer-card',
        template: __webpack_require__(/*! raw-loader!./credit-offer-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/landing-page/best-offers/best-credit-offers/credit-offer-card/credit-offer-card.component.html"),
        styles: [__webpack_require__(/*! ./credit-offer-card.component.scss */ "./src/app/home/landing-page/best-offers/best-credit-offers/credit-offer-card/credit-offer-card.component.scss")]
    })
], CreditOfferCardComponent);



/***/ }),

/***/ "./src/app/home/landing-page/best-offers/best-debit-card-offers/best-debit-card-offers.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/home/landing-page/best-offers/best-debit-card-offers/best-debit-card-offers.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  min-height: 13.125rem;\n  margin: 1.875rem 0;\n  width: 100%;\n  min-height: 280px;\n  overflow: hidden;\n}\n\n.swiper-slide {\n  width: 340px;\n}\n\n@media (max-width: 320px) {\n  .swiper-slide {\n    width: 290px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9sYW5kaW5nLXBhZ2UvYmVzdC1vZmZlcnMvYmVzdC1kZWJpdC1jYXJkLW9mZmVycy9EOlxcc291cmNlIGNvZGVzXFxwbHVzLW1pbnVzL3NyY1xcYXBwXFxob21lXFxsYW5kaW5nLXBhZ2VcXGJlc3Qtb2ZmZXJzXFxiZXN0LWRlYml0LWNhcmQtb2ZmZXJzXFxiZXN0LWRlYml0LWNhcmQtb2ZmZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2xhbmRpbmctcGFnZS9iZXN0LW9mZmVycy9iZXN0LWRlYml0LWNhcmQtb2ZmZXJzL2Jlc3QtZGViaXQtY2FyZC1vZmZlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDQyxZQUFBO0FDRUQ7O0FERUE7RUFDRTtJQUNFLFlBQUE7RUNDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9sYW5kaW5nLXBhZ2UvYmVzdC1vZmZlcnMvYmVzdC1kZWJpdC1jYXJkLW9mZmVycy9iZXN0LWRlYml0LWNhcmQtb2ZmZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1pbi1oZWlnaHQ6IDEzLjEyNXJlbTtcclxuICAgIG1hcmdpbjogMS44NzVyZW0gMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMjgwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5zd2lwZXItc2xpZGUge1xyXG4gd2lkdGg6IDM0MHB4O1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcbiAgLnN3aXBlci1zbGlkZSB7XHJcbiAgICB3aWR0aDogMjkwcHg7XHJcbiAgIH1cclxufSIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLWhlaWdodDogMTMuMTI1cmVtO1xuICBtYXJnaW46IDEuODc1cmVtIDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAyODBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnN3aXBlci1zbGlkZSB7XG4gIHdpZHRoOiAzNDBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gIC5zd2lwZXItc2xpZGUge1xuICAgIHdpZHRoOiAyOTBweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/landing-page/best-offers/best-debit-card-offers/best-debit-card-offers.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/home/landing-page/best-offers/best-debit-card-offers/best-debit-card-offers.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: BestDebitCardOffersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestDebitCardOffersComponent", function() { return BestDebitCardOffersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _best_offer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../best-offer.service */ "./src/app/home/landing-page/best-offers/best-offer.service.ts");



let BestDebitCardOffersComponent = class BestDebitCardOffersComponent {
    constructor(bestOfferService) {
        this.bestOfferService = bestOfferService;
        this.config = {
            a11y: true,
            direction: 'horizontal',
            slidesPerView: 'auto',
            keyboard: true,
            mousewheel: false,
            scrollbar: false,
            navigation: false,
            pagination: { el: '.swiper-pagination', clickable: true }
        };
    }
    ngOnInit() {
        this.offers$ = this.bestOfferService.getBestOffers('DEBET_CARD');
    }
    ngOnDestroy() {
    }
};
BestDebitCardOffersComponent.ctorParameters = () => [
    { type: _best_offer_service__WEBPACK_IMPORTED_MODULE_2__["BestOfferService"] }
];
BestDebitCardOffersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'best-debit-card-offers',
        template: __webpack_require__(/*! raw-loader!./best-debit-card-offers.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/landing-page/best-offers/best-debit-card-offers/best-debit-card-offers.component.html"),
        styles: [__webpack_require__(/*! ./best-debit-card-offers.component.scss */ "./src/app/home/landing-page/best-offers/best-debit-card-offers/best-debit-card-offers.component.scss")]
    })
], BestDebitCardOffersComponent);



/***/ }),

/***/ "./src/app/home/landing-page/best-offers/best-debit-card-offers/debit-card-offer-card/debit-card-offer-card.component.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/home/landing-page/best-offers/best-debit-card-offers/debit-card-offer-card/debit-card-offer-card.component.scss ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  height: 234px;\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  background: #ffffff;\n  width: 100%;\n  height: 100%;\n  box-shadow: none;\n  padding: 20px;\n  border: solid 2px #eaf1fe;\n  margin-right: 0.625rem;\n  position: relative;\n  transition-property: transform, box-shadow;\n  transition-duration: 300ms;\n  transition-timing-function: ease-in-out;\n  cursor: pointer;\n}\n\n.card .card__header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  width: 100%;\n  padding-bottom: 17px;\n  background: #ffffff;\n  border-bottom: 1px solid #dddede;\n}\n\n.card .card__header .card__header__title {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  font-size: 16px;\n}\n\n.card .card__header .card__header__title .card__header__title__logo {\n  width: 145px;\n  max-height: 30px;\n}\n\n.card .card__header .card__header__title .card__header__title__secondary {\n  font-size: 13px;\n  margin-top: 4px;\n}\n\n.card .card__header .card__header__logo {\n  font-size: 26px;\n  color: var(--secondary-default);\n}\n\n.card .card__content {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 17px;\n}\n\n.card .card__content .credit-percent .credit-percent__title {\n  font-family: \"Montserrat-SemiBold\";\n  font-size: 1.5rem;\n  white-space: nowrap;\n}\n\n.card .card__content .credit-percent .credit-percent__title span {\n  font-size: 1.125rem;\n}\n\n.card .card__content .credit-percent .credit-percent__subtitle {\n  font-family: \"Montserrat-SemiBold\";\n  font-size: 12px;\n  margin-top: 2px;\n}\n\n.card .card__content .credit-count .credit-count__title {\n  font-family: \"Montserrat-SemiBold\";\n}\n\n.card .card__content .credit-count .credit-count__title span, .card .card__content .credit-count .credit-count__title b, .card .card__content .credit-count .credit-count__title p {\n  font-family: \"Montserrat-SemiBold\";\n  font-size: 1.125rem;\n  white-space: nowrap;\n}\n\n.card .card__content .credit-count .credit-count__subtitle {\n  margin-top: 2px;\n}\n\n.card .card__content .credit-count .credit-count__subtitle span {\n  font-size: 12px;\n}\n\n.card .card__footer {\n  margin-top: auto;\n}\n\n.card:hover {\n  box-shadow: 0 1.5625rem 1.25rem rgba(94, 94, 94, 0.15);\n  transform: translateY(-0.625rem);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9sYW5kaW5nLXBhZ2UvYmVzdC1vZmZlcnMvYmVzdC1kZWJpdC1jYXJkLW9mZmVycy9kZWJpdC1jYXJkLW9mZmVyLWNhcmQvRDpcXHNvdXJjZSBjb2Rlc1xccGx1cy1taW51cy9zcmNcXGFwcFxcaG9tZVxcbGFuZGluZy1wYWdlXFxiZXN0LW9mZmVyc1xcYmVzdC1kZWJpdC1jYXJkLW9mZmVyc1xcZGViaXQtY2FyZC1vZmZlci1jYXJkXFxkZWJpdC1jYXJkLW9mZmVyLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvbGFuZGluZy1wYWdlL2Jlc3Qtb2ZmZXJzL2Jlc3QtZGViaXQtY2FyZC1vZmZlcnMvZGViaXQtY2FyZC1vZmZlci1jYXJkL2RlYml0LWNhcmQtb2ZmZXItY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFFQSxhQUFBO0FDQUo7O0FERUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsdUNBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQUk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUNFUjs7QUREUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDR1o7O0FERlk7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUNJaEI7O0FERlk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQ0loQjs7QURBUTtFQUNJLGVBQUE7RUFDQSwrQkFBQTtBQ0VaOztBREVJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNBUjs7QURFWTtFQUNFLGtDQUFBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQ0FoQjs7QURDZ0I7RUFDSSxtQkFBQTtBQ0NwQjs7QURFWTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNBaEI7O0FESVk7RUFDSSxrQ0FBQTtBQ0ZoQjs7QURHZ0I7RUFDSSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNEcEI7O0FESVk7RUFDSSxlQUFBO0FDRmhCOztBREdjO0VBQ0UsZUFBQTtBQ0RoQjs7QURNSTtFQUNJLGdCQUFBO0FDSlI7O0FET0E7RUFDSSxzREFBQTtFQUNBLGdDQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9ob21lL2xhbmRpbmctcGFnZS9iZXN0LW9mZmVycy9iZXN0LWRlYml0LWNhcmQtb2ZmZXJzL2RlYml0LWNhcmQtb2ZmZXItY2FyZC9kZWJpdC1jYXJkLW9mZmVyLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgLy8gd2lkdGg6IDIwLjkzNzVyZW07XHJcbiAgICBoZWlnaHQ6IDIzNHB4O1xyXG59XHJcbi5jYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlcjogc29saWQgMnB4ICNlYWYxZmU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNjI1cmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBib3gtc2hhZG93O1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XHJcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAuY2FyZF9faGVhZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTdweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZWRlO1xyXG4gICAgICAgIC5jYXJkX19oZWFkZXJfX3RpdGxlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgLmNhcmRfX2hlYWRlcl9fdGl0bGVfX2xvZ28ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE0NXB4O1xyXG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNhcmRfX2hlYWRlcl9fdGl0bGVfX3NlY29uZGFyeSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgICAgLy8gICAgIGNvbG9yOiAgdmFyKC0tc2Vjb25kYXJ5LWRlZmF1bHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJkX19oZWFkZXJfX2xvZ28ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZGVmYXVsdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIC5jYXJkX19jb250ZW50IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxN3B4O1xyXG4gICAgICAgIC5jcmVkaXQtcGVyY2VudCB7XHJcbiAgICAgICAgICAgIC5jcmVkaXQtcGVyY2VudF9fdGl0bGUge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdC1TZW1pQm9sZCc7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jcmVkaXQtcGVyY2VudF9fc3VidGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkJztcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY3JlZGl0LWNvdW50IHtcclxuICAgICAgICAgICAgLmNyZWRpdC1jb3VudF9fdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkJztcclxuICAgICAgICAgICAgICAgIHNwYW4sIGIsIHAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdC1TZW1pQm9sZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjEuMTI1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNyZWRpdC1jb3VudF9fc3VidGl0bGUge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXJkX19mb290ZXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICB9XHJcblxyXG4mOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMS41NjI1cmVtIDEuMjVyZW0gcmdiYSg5NCwgOTQsIDk0LCAwLjE1KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC42MjVyZW0pO1xyXG59XHJcblxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuXHJcbn0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDIzNHB4O1xufVxuXG4uY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3gtc2hhZG93OiBub25lO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXI6IHNvbGlkIDJweCAjZWFmMWZlO1xuICBtYXJnaW4tcmlnaHQ6IDAuNjI1cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgYm94LXNoYWRvdztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNhcmQgLmNhcmRfX2hlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWJvdHRvbTogMTdweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRlZGU7XG59XG4uY2FyZCAuY2FyZF9faGVhZGVyIC5jYXJkX19oZWFkZXJfX3RpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5jYXJkIC5jYXJkX19oZWFkZXIgLmNhcmRfX2hlYWRlcl9fdGl0bGUgLmNhcmRfX2hlYWRlcl9fdGl0bGVfX2xvZ28ge1xuICB3aWR0aDogMTQ1cHg7XG4gIG1heC1oZWlnaHQ6IDMwcHg7XG59XG4uY2FyZCAuY2FyZF9faGVhZGVyIC5jYXJkX19oZWFkZXJfX3RpdGxlIC5jYXJkX19oZWFkZXJfX3RpdGxlX19zZWNvbmRhcnkge1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cbi5jYXJkIC5jYXJkX19oZWFkZXIgLmNhcmRfX2hlYWRlcl9fbG9nbyB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1kZWZhdWx0KTtcbn1cbi5jYXJkIC5jYXJkX19jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDE3cHg7XG59XG4uY2FyZCAuY2FyZF9fY29udGVudCAuY3JlZGl0LXBlcmNlbnQgLmNyZWRpdC1wZXJjZW50X190aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQtU2VtaUJvbGRcIjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uY2FyZCAuY2FyZF9fY29udGVudCAuY3JlZGl0LXBlcmNlbnQgLmNyZWRpdC1wZXJjZW50X190aXRsZSBzcGFuIHtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbn1cbi5jYXJkIC5jYXJkX19jb250ZW50IC5jcmVkaXQtcGVyY2VudCAuY3JlZGl0LXBlcmNlbnRfX3N1YnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdC1TZW1pQm9sZFwiO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cbi5jYXJkIC5jYXJkX19jb250ZW50IC5jcmVkaXQtY291bnQgLmNyZWRpdC1jb3VudF9fdGl0bGUge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0LVNlbWlCb2xkXCI7XG59XG4uY2FyZCAuY2FyZF9fY29udGVudCAuY3JlZGl0LWNvdW50IC5jcmVkaXQtY291bnRfX3RpdGxlIHNwYW4sIC5jYXJkIC5jYXJkX19jb250ZW50IC5jcmVkaXQtY291bnQgLmNyZWRpdC1jb3VudF9fdGl0bGUgYiwgLmNhcmQgLmNhcmRfX2NvbnRlbnQgLmNyZWRpdC1jb3VudCAuY3JlZGl0LWNvdW50X190aXRsZSBwIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdC1TZW1pQm9sZFwiO1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmNhcmQgLmNhcmRfX2NvbnRlbnQgLmNyZWRpdC1jb3VudCAuY3JlZGl0LWNvdW50X19zdWJ0aXRsZSB7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cbi5jYXJkIC5jYXJkX19jb250ZW50IC5jcmVkaXQtY291bnQgLmNyZWRpdC1jb3VudF9fc3VidGl0bGUgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5jYXJkIC5jYXJkX19mb290ZXIge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xufVxuLmNhcmQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDEuNTYyNXJlbSAxLjI1cmVtIHJnYmEoOTQsIDk0LCA5NCwgMC4xNSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC42MjVyZW0pO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/landing-page/best-offers/best-debit-card-offers/debit-card-offer-card/debit-card-offer-card.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/home/landing-page/best-offers/best-debit-card-offers/debit-card-offer-card/debit-card-offer-card.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: DebitCardOfferCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebitCardOfferCardComponent", function() { return DebitCardOfferCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");



let DebitCardOfferCardComponent = class DebitCardOfferCardComponent {
    constructor(translateService) {
        this.translateService = translateService;
        this.lang = this.translateService.getDefaultLang();
        this.translateService.onDefaultLangChange.subscribe(res => this.lang = res);
    }
    ngOnInit() {
    }
};
DebitCardOfferCardComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DebitCardOfferCardComponent.prototype, "offer", void 0);
DebitCardOfferCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'debit-card-offer-card',
        template: __webpack_require__(/*! raw-loader!./debit-card-offer-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/landing-page/best-offers/best-debit-card-offers/debit-card-offer-card/debit-card-offer-card.component.html"),
        styles: [__webpack_require__(/*! ./debit-card-offer-card.component.scss */ "./src/app/home/landing-page/best-offers/best-debit-card-offers/debit-card-offer-card/debit-card-offer-card.component.scss")]
    })
], DebitCardOfferCardComponent);



/***/ }),

/***/ "./src/app/home/landing-page/best-offers/best-deposit-offers/best-deposit-offer/best-deposit-offer.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/home/landing-page/best-offers/best-deposit-offers/best-deposit-offer/best-deposit-offer.component.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  height: 234px;\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  background: #ffffff;\n  width: 100%;\n  height: 100%;\n  box-shadow: none;\n  padding: 20px;\n  border: solid 2px #eaf1fe;\n  margin-right: 0.625rem;\n  position: relative;\n  transition-property: transform, box-shadow;\n  transition-duration: 300ms;\n  transition-timing-function: ease-in-out;\n  cursor: pointer;\n}\n\n.card .card__header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  width: 100%;\n  padding-bottom: 17px;\n  background: #ffffff;\n  border-bottom: 1px solid #dddede;\n}\n\n.card .card__header .card__header__title {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  font-size: 16px;\n}\n\n.card .card__header .card__header__title .card__header__title__logo {\n  width: 145px;\n  max-height: 30px;\n}\n\n.card .card__header .card__header__title .card__header__title__secondary {\n  font-size: 13px;\n  margin-top: 4px;\n}\n\n.card .card__header .card__header__logo {\n  font-size: 26px;\n  color: var(--secondary-default);\n}\n\n.card .card__content {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 17px;\n}\n\n.card .card__content .credit-percent .credit-percent__title {\n  font-family: \"Montserrat-SemiBold\";\n  font-size: 1.5rem;\n  white-space: nowrap;\n}\n\n.card .card__content .credit-percent .credit-percent__title span {\n  font-size: 1.125rem;\n}\n\n.card .card__content .credit-percent .credit-percent__subtitle {\n  font-family: \"Montserrat-SemiBold\";\n  font-size: 12px;\n  margin-top: 2px;\n}\n\n.card .card__content .credit-count .credit-count__title {\n  font-family: \"Montserrat-SemiBold\";\n}\n\n.card .card__content .credit-count .credit-count__title span, .card .card__content .credit-count .credit-count__title b, .card .card__content .credit-count .credit-count__title p {\n  font-family: \"Montserrat-SemiBold\";\n  font-size: 1.125rem;\n  white-space: nowrap;\n}\n\n.card .card__content .credit-count .credit-count__subtitle {\n  margin-top: 2px;\n}\n\n.card .card__content .credit-count .credit-count__subtitle span {\n  font-size: 12px;\n}\n\n.card .card__footer {\n  margin-top: auto;\n}\n\n.card:hover {\n  box-shadow: 0 1.5625rem 1.25rem rgba(94, 94, 94, 0.15);\n  transform: translateY(-0.625rem);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9sYW5kaW5nLXBhZ2UvYmVzdC1vZmZlcnMvYmVzdC1kZXBvc2l0LW9mZmVycy9iZXN0LWRlcG9zaXQtb2ZmZXIvRDpcXHNvdXJjZSBjb2Rlc1xccGx1cy1taW51cy9zcmNcXGFwcFxcaG9tZVxcbGFuZGluZy1wYWdlXFxiZXN0LW9mZmVyc1xcYmVzdC1kZXBvc2l0LW9mZmVyc1xcYmVzdC1kZXBvc2l0LW9mZmVyXFxiZXN0LWRlcG9zaXQtb2ZmZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvbGFuZGluZy1wYWdlL2Jlc3Qtb2ZmZXJzL2Jlc3QtZGVwb3NpdC1vZmZlcnMvYmVzdC1kZXBvc2l0LW9mZmVyL2Jlc3QtZGVwb3NpdC1vZmZlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFFQSxhQUFBO0FDQUo7O0FERUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsdUNBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQUk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUNFUjs7QUREUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDR1o7O0FERlk7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUNJaEI7O0FERlk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQ0loQjs7QURBUTtFQUNJLGVBQUE7RUFDQSwrQkFBQTtBQ0VaOztBREVJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNBUjs7QURFWTtFQUNFLGtDQUFBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQ0FoQjs7QURDZ0I7RUFDSSxtQkFBQTtBQ0NwQjs7QURFWTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNBaEI7O0FESVk7RUFDSSxrQ0FBQTtBQ0ZoQjs7QURHZ0I7RUFDSSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNEcEI7O0FESVk7RUFDSSxlQUFBO0FDRmhCOztBREdjO0VBQ0UsZUFBQTtBQ0RoQjs7QURNSTtFQUNJLGdCQUFBO0FDSlI7O0FET0E7RUFDSSxzREFBQTtFQUNBLGdDQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9ob21lL2xhbmRpbmctcGFnZS9iZXN0LW9mZmVycy9iZXN0LWRlcG9zaXQtb2ZmZXJzL2Jlc3QtZGVwb3NpdC1vZmZlci9iZXN0LWRlcG9zaXQtb2ZmZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgLy8gd2lkdGg6IDIwLjkzNzVyZW07XHJcbiAgICBoZWlnaHQ6IDIzNHB4O1xyXG59XHJcbi5jYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlcjogc29saWQgMnB4ICNlYWYxZmU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNjI1cmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBib3gtc2hhZG93O1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XHJcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAuY2FyZF9faGVhZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTdweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZWRlO1xyXG4gICAgICAgIC5jYXJkX19oZWFkZXJfX3RpdGxlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgLmNhcmRfX2hlYWRlcl9fdGl0bGVfX2xvZ28ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE0NXB4O1xyXG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNhcmRfX2hlYWRlcl9fdGl0bGVfX3NlY29uZGFyeSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgICAgLy8gICAgIGNvbG9yOiAgdmFyKC0tc2Vjb25kYXJ5LWRlZmF1bHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJkX19oZWFkZXJfX2xvZ28ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZGVmYXVsdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIC5jYXJkX19jb250ZW50IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxN3B4O1xyXG4gICAgICAgIC5jcmVkaXQtcGVyY2VudCB7XHJcbiAgICAgICAgICAgIC5jcmVkaXQtcGVyY2VudF9fdGl0bGUge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdC1TZW1pQm9sZCc7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jcmVkaXQtcGVyY2VudF9fc3VidGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkJztcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY3JlZGl0LWNvdW50IHtcclxuICAgICAgICAgICAgLmNyZWRpdC1jb3VudF9fdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkJztcclxuICAgICAgICAgICAgICAgIHNwYW4sIGIsIHAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdC1TZW1pQm9sZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjEuMTI1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNyZWRpdC1jb3VudF9fc3VidGl0bGUge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXJkX19mb290ZXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICB9XHJcblxyXG4mOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMS41NjI1cmVtIDEuMjVyZW0gcmdiYSg5NCwgOTQsIDk0LCAwLjE1KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC42MjVyZW0pO1xyXG59XHJcblxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuXHJcbn0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDIzNHB4O1xufVxuXG4uY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3gtc2hhZG93OiBub25lO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXI6IHNvbGlkIDJweCAjZWFmMWZlO1xuICBtYXJnaW4tcmlnaHQ6IDAuNjI1cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgYm94LXNoYWRvdztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNhcmQgLmNhcmRfX2hlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWJvdHRvbTogMTdweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRlZGU7XG59XG4uY2FyZCAuY2FyZF9faGVhZGVyIC5jYXJkX19oZWFkZXJfX3RpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5jYXJkIC5jYXJkX19oZWFkZXIgLmNhcmRfX2hlYWRlcl9fdGl0bGUgLmNhcmRfX2hlYWRlcl9fdGl0bGVfX2xvZ28ge1xuICB3aWR0aDogMTQ1cHg7XG4gIG1heC1oZWlnaHQ6IDMwcHg7XG59XG4uY2FyZCAuY2FyZF9faGVhZGVyIC5jYXJkX19oZWFkZXJfX3RpdGxlIC5jYXJkX19oZWFkZXJfX3RpdGxlX19zZWNvbmRhcnkge1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cbi5jYXJkIC5jYXJkX19oZWFkZXIgLmNhcmRfX2hlYWRlcl9fbG9nbyB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1kZWZhdWx0KTtcbn1cbi5jYXJkIC5jYXJkX19jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDE3cHg7XG59XG4uY2FyZCAuY2FyZF9fY29udGVudCAuY3JlZGl0LXBlcmNlbnQgLmNyZWRpdC1wZXJjZW50X190aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQtU2VtaUJvbGRcIjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uY2FyZCAuY2FyZF9fY29udGVudCAuY3JlZGl0LXBlcmNlbnQgLmNyZWRpdC1wZXJjZW50X190aXRsZSBzcGFuIHtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbn1cbi5jYXJkIC5jYXJkX19jb250ZW50IC5jcmVkaXQtcGVyY2VudCAuY3JlZGl0LXBlcmNlbnRfX3N1YnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdC1TZW1pQm9sZFwiO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cbi5jYXJkIC5jYXJkX19jb250ZW50IC5jcmVkaXQtY291bnQgLmNyZWRpdC1jb3VudF9fdGl0bGUge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0LVNlbWlCb2xkXCI7XG59XG4uY2FyZCAuY2FyZF9fY29udGVudCAuY3JlZGl0LWNvdW50IC5jcmVkaXQtY291bnRfX3RpdGxlIHNwYW4sIC5jYXJkIC5jYXJkX19jb250ZW50IC5jcmVkaXQtY291bnQgLmNyZWRpdC1jb3VudF9fdGl0bGUgYiwgLmNhcmQgLmNhcmRfX2NvbnRlbnQgLmNyZWRpdC1jb3VudCAuY3JlZGl0LWNvdW50X190aXRsZSBwIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdC1TZW1pQm9sZFwiO1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmNhcmQgLmNhcmRfX2NvbnRlbnQgLmNyZWRpdC1jb3VudCAuY3JlZGl0LWNvdW50X19zdWJ0aXRsZSB7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cbi5jYXJkIC5jYXJkX19jb250ZW50IC5jcmVkaXQtY291bnQgLmNyZWRpdC1jb3VudF9fc3VidGl0bGUgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5jYXJkIC5jYXJkX19mb290ZXIge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xufVxuLmNhcmQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDEuNTYyNXJlbSAxLjI1cmVtIHJnYmEoOTQsIDk0LCA5NCwgMC4xNSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC42MjVyZW0pO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/landing-page/best-offers/best-deposit-offers/best-deposit-offer/best-deposit-offer.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/home/landing-page/best-offers/best-deposit-offers/best-deposit-offer/best-deposit-offer.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: BestDepositOfferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestDepositOfferComponent", function() { return BestDepositOfferComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");



let BestDepositOfferComponent = class BestDepositOfferComponent {
    constructor(translateService) {
        this.translateService = translateService;
        this.lang = this.translateService.getDefaultLang();
        this.translateService.onDefaultLangChange.subscribe(res => this.lang = res);
    }
};
BestDepositOfferComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BestDepositOfferComponent.prototype, "offer", void 0);
BestDepositOfferComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'best-deposit-offer',
        template: __webpack_require__(/*! raw-loader!./best-deposit-offer.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/landing-page/best-offers/best-deposit-offers/best-deposit-offer/best-deposit-offer.component.html"),
        styles: [__webpack_require__(/*! ./best-deposit-offer.component.scss */ "./src/app/home/landing-page/best-offers/best-deposit-offers/best-deposit-offer/best-deposit-offer.component.scss")]
    })
], BestDepositOfferComponent);



/***/ }),

/***/ "./src/app/home/landing-page/best-offers/best-deposit-offers/best-deposit-offers.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/home/landing-page/best-offers/best-deposit-offers/best-deposit-offers.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  min-height: 13.125rem;\n  margin: 1.875rem 0;\n  width: 100%;\n  min-height: 280px;\n  overflow: hidden;\n}\n\n.swiper-slide {\n  width: 290px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9sYW5kaW5nLXBhZ2UvYmVzdC1vZmZlcnMvYmVzdC1kZXBvc2l0LW9mZmVycy9EOlxcc291cmNlIGNvZGVzXFxwbHVzLW1pbnVzL3NyY1xcYXBwXFxob21lXFxsYW5kaW5nLXBhZ2VcXGJlc3Qtb2ZmZXJzXFxiZXN0LWRlcG9zaXQtb2ZmZXJzXFxiZXN0LWRlcG9zaXQtb2ZmZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2xhbmRpbmctcGFnZS9iZXN0LW9mZmVycy9iZXN0LWRlcG9zaXQtb2ZmZXJzL2Jlc3QtZGVwb3NpdC1vZmZlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDRyxZQUFBO0FDRUgiLCJmaWxlIjoic3JjL2FwcC9ob21lL2xhbmRpbmctcGFnZS9iZXN0LW9mZmVycy9iZXN0LWRlcG9zaXQtb2ZmZXJzL2Jlc3QtZGVwb3NpdC1vZmZlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWluLWhlaWdodDogMTMuMTI1cmVtO1xyXG4gICAgbWFyZ2luOiAxLjg3NXJlbSAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAyODBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLnN3aXBlci1zbGlkZSB7XHJcbiAgIHdpZHRoOiAyOTBweDtcclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi1oZWlnaHQ6IDEzLjEyNXJlbTtcbiAgbWFyZ2luOiAxLjg3NXJlbSAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMjgwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICB3aWR0aDogMjkwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/landing-page/best-offers/best-deposit-offers/best-deposit-offers.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/home/landing-page/best-offers/best-deposit-offers/best-deposit-offers.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: BestDepositOffersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestDepositOffersComponent", function() { return BestDepositOffersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _best_offer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../best-offer.service */ "./src/app/home/landing-page/best-offers/best-offer.service.ts");



let BestDepositOffersComponent = class BestDepositOffersComponent {
    constructor(bestOfferService) {
        this.bestOfferService = bestOfferService;
        this.config = {
            a11y: true,
            direction: 'horizontal',
            slidesPerView: 'auto',
            keyboard: true,
            mousewheel: false,
            scrollbar: false,
            navigation: false,
            pagination: { el: '.swiper-pagination', clickable: true }
        };
    }
    ngOnInit() {
        this.offers$ = this.bestOfferService.getBestOffers('DEPOSIT');
    }
    ngOnDestroy() {
    }
};
BestDepositOffersComponent.ctorParameters = () => [
    { type: _best_offer_service__WEBPACK_IMPORTED_MODULE_2__["BestOfferService"] }
];
BestDepositOffersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'best-deposit-offers',
        template: __webpack_require__(/*! raw-loader!./best-deposit-offers.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/landing-page/best-offers/best-deposit-offers/best-deposit-offers.component.html"),
        styles: [__webpack_require__(/*! ./best-deposit-offers.component.scss */ "./src/app/home/landing-page/best-offers/best-deposit-offers/best-deposit-offers.component.scss")]
    })
], BestDepositOffersComponent);



/***/ }),

/***/ "./src/app/home/landing-page/best-offers/best-offer.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/home/landing-page/best-offers/best-offer.service.ts ***!
  \*********************************************************************/
/*! exports provided: BestOfferService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestOfferService", function() { return BestOfferService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let BestOfferService = class BestOfferService {
    constructor(authService, http) {
        this.authService = authService;
        this.http = http;
    }
    getBestOffers(offerType) {
        return this.http.post('mybank/bestOffers', {
            token: this.authService.getToken(),
            offerType: offerType
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res && res.data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(er => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null)));
    }
};
BestOfferService.ctorParameters = () => [
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
BestOfferService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BestOfferService);



/***/ }),

/***/ "./src/app/home/landing-page/best-offers/best-offers.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/home/landing-page/best-offers/best-offers.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  padding: 3.25rem 0;\n  background: var(--background-secondary);\n}\n\n.section .section__title {\n  font-size: 1.5625rem;\n  font-family: \"Montserrat-SemiBold\";\n  letter-spacing: -0.0563rem;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9sYW5kaW5nLXBhZ2UvYmVzdC1vZmZlcnMvRDpcXHNvdXJjZSBjb2Rlc1xccGx1cy1taW51cy9zcmNcXGFwcFxcaG9tZVxcbGFuZGluZy1wYWdlXFxiZXN0LW9mZmVyc1xcYmVzdC1vZmZlcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvbGFuZGluZy1wYWdlL2Jlc3Qtb2ZmZXJzL2Jlc3Qtb2ZmZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUNBQUE7QUNDSjs7QURFSTtFQUNJLG9CQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FDQ1IiLCJmaWxlIjoic3JjL2FwcC9ob21lL2xhbmRpbmctcGFnZS9iZXN0LW9mZmVycy9iZXN0LW9mZmVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMy4yNXJlbSAwO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xyXG59XHJcbi5zZWN0aW9uIHtcclxuICAgIC5zZWN0aW9uX190aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjU2MjVyZW07XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkJztcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDU2M3JlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG4gICAgLnNlY3Rpb25fX2NvbnRlbnQge31cclxufSIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDMuMjVyZW0gMDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xufVxuXG4uc2VjdGlvbiAuc2VjdGlvbl9fdGl0bGUge1xuICBmb250LXNpemU6IDEuNTYyNXJlbTtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdC1TZW1pQm9sZFwiO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDU2M3JlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/landing-page/best-offers/best-offers.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/home/landing-page/best-offers/best-offers.component.ts ***!
  \************************************************************************/
/*! exports provided: BestOffersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestOffersComponent", function() { return BestOffersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let BestOffersComponent = class BestOffersComponent {
    constructor() {
        this.tabsCount = 5;
        this.selectedTabIndex = 0;
        this._onDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ngOnInit() {
        //   this.startSlide();
    }
    startSlide() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(6000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._onDestroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(res => {
            if (this.selectedTabIndex + 1 < this.tabsCount) {
                this.selectedTabIndex += 1;
            }
            else {
                this.selectedTabIndex = 0;
            }
        })).subscribe();
    }
    onDestroy() {
        this._onDestroy$.next();
    }
};
BestOffersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'best-offers',
        template: __webpack_require__(/*! raw-loader!./best-offers.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/landing-page/best-offers/best-offers.component.html"),
        styles: [__webpack_require__(/*! ./best-offers.component.scss */ "./src/app/home/landing-page/best-offers/best-offers.component.scss")]
    })
], BestOffersComponent);



/***/ }),

/***/ "./src/app/home/landing-page/favorable-rates-preview/favorable-rates-preview.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/home/landing-page/favorable-rates-preview/favorable-rates-preview.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  padding: 3.25rem 0;\n  min-height: 12.5rem;\n  background: var(--background-light);\n}\n\n.section .section__title {\n  font-size: 1.5625rem;\n  font-family: \"Montserrat-SemiBold\";\n  letter-spacing: -0.0563rem;\n  font-weight: 400;\n}\n\n.section .section__content {\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 1.6875rem;\n}\n\n.section .section__footer {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.section .section__footer .section__footer__date {\n  color: #999b99;\n  font-family: \"Montserrat-Medium\";\n  font-size: 12px;\n  font-weight: 400;\n  letter-spacing: -0.0075rem;\n}\n\n.section .section__footer .section__footer__action a {\n  color: #2980b9;\n  font-family: \"Montserrat-Semi Bold\";\n  font-size: 12px;\n  font-weight: 400;\n  cursor: pointer;\n}\n\n@media (max-width: 768px) {\n  .section .section__content {\n    flex-direction: column;\n  }\n\n  .second ::ng-deep .favorable-rates-table thead {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9sYW5kaW5nLXBhZ2UvZmF2b3JhYmxlLXJhdGVzLXByZXZpZXcvRDpcXHNvdXJjZSBjb2Rlc1xccGx1cy1taW51cy9zcmNcXGFwcFxcaG9tZVxcbGFuZGluZy1wYWdlXFxmYXZvcmFibGUtcmF0ZXMtcHJldmlld1xcZmF2b3JhYmxlLXJhdGVzLXByZXZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvbGFuZGluZy1wYWdlL2Zhdm9yYWJsZS1yYXRlcy1wcmV2aWV3L2Zhdm9yYWJsZS1yYXRlcy1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtBQ0NKOztBREVJO0VBQ0ksb0JBQUE7RUFDQSxrQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUNDUjs7QURDSTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNDUjs7QURDSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7QUNDUjs7QURBUTtFQUNJLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FDRVo7O0FEQ1k7RUFDSSxjQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQ2hCOztBRE1BO0VBRVE7SUFDSSxzQkFBQTtFQ0pWOztFRFNVO0lBQ0ksYUFBQTtFQ05kO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2xhbmRpbmctcGFnZS9mYXZvcmFibGUtcmF0ZXMtcHJldmlldy9mYXZvcmFibGUtcmF0ZXMtcHJldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMy4yNXJlbSAwO1xyXG4gICAgbWluLWhlaWdodDogMTIuNXJlbTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xyXG59XHJcbi5zZWN0aW9uIHtcclxuICAgIC5zZWN0aW9uX190aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjU2MjVyZW07XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkJztcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDU2M3JlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG4gICAgLnNlY3Rpb25fX2NvbnRlbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEuNjg3NXJlbTtcclxuICAgIH1cclxuICAgIC5zZWN0aW9uX19mb290ZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC5zZWN0aW9uX19mb290ZXJfX2RhdGUge1xyXG4gICAgICAgICAgICBjb2xvcjogIzk5OWI5OTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0LU1lZGl1bSc7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAwNzVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zZWN0aW9uX19mb290ZXJfX2FjdGlvbiB7XHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMyOTgwYjk7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0LVNlbWkgQm9sZFwiO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnNlY3Rpb24ge1xyXG4gICAgICAgIC5zZWN0aW9uX19jb250ZW50IHtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2Vjb25kIHtcclxuICAgICAgICA6Om5nLWRlZXAgLmZhdm9yYWJsZS1yYXRlcy10YWJsZSB7XHJcbiAgICAgICAgICAgIHRoZWFkIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMy4yNXJlbSAwO1xuICBtaW4taGVpZ2h0OiAxMi41cmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcbn1cblxuLnNlY3Rpb24gLnNlY3Rpb25fX3RpdGxlIHtcbiAgZm9udC1zaXplOiAxLjU2MjVyZW07XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQtU2VtaUJvbGRcIjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjA1NjNyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uc2VjdGlvbiAuc2VjdGlvbl9fY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLXRvcDogMS42ODc1cmVtO1xufVxuLnNlY3Rpb24gLnNlY3Rpb25fX2Zvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc2VjdGlvbiAuc2VjdGlvbl9fZm9vdGVyIC5zZWN0aW9uX19mb290ZXJfX2RhdGUge1xuICBjb2xvcjogIzk5OWI5OTtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdC1NZWRpdW1cIjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDA3NXJlbTtcbn1cbi5zZWN0aW9uIC5zZWN0aW9uX19mb290ZXIgLnNlY3Rpb25fX2Zvb3Rlcl9fYWN0aW9uIGEge1xuICBjb2xvcjogIzI5ODBiOTtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdC1TZW1pIEJvbGRcIjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuc2VjdGlvbiAuc2VjdGlvbl9fY29udGVudCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5zZWNvbmQgOjpuZy1kZWVwIC5mYXZvcmFibGUtcmF0ZXMtdGFibGUgdGhlYWQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/landing-page/favorable-rates-preview/favorable-rates-preview.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/home/landing-page/favorable-rates-preview/favorable-rates-preview.component.ts ***!
  \************************************************************************************************/
/*! exports provided: FavorableRatesPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavorableRatesPreviewComponent", function() { return FavorableRatesPreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../home.service */ "./src/app/home/home.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let FavorableRatesPreviewComponent = class FavorableRatesPreviewComponent {
    constructor(homeService) {
        this.homeService = homeService;
        this.homeService.getcurrBestRateList().subscribe(res => {
            this.rates = res;
        });
    }
    ngOnInit() {
    }
};
FavorableRatesPreviewComponent.ctorParameters = () => [
    { type: _home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"] }
];
FavorableRatesPreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'favorable-rates-preview',
        template: __webpack_require__(/*! raw-loader!./favorable-rates-preview.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/landing-page/favorable-rates-preview/favorable-rates-preview.component.html"),
        styles: [__webpack_require__(/*! ./favorable-rates-preview.component.scss */ "./src/app/home/landing-page/favorable-rates-preview/favorable-rates-preview.component.scss")]
    })
], FavorableRatesPreviewComponent);



/***/ }),

/***/ "./src/app/home/landing-page/landing-page.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/home/landing-page/landing-page.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  flex: 1 0 0;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9sYW5kaW5nLXBhZ2UvRDpcXHNvdXJjZSBjb2Rlc1xccGx1cy1taW51cy9zcmNcXGFwcFxcaG9tZVxcbGFuZGluZy1wYWdlXFxsYW5kaW5nLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZmxleDogMSAwIDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbGV4OiAxIDAgMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/landing-page/landing-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/landing-page/landing-page.component.ts ***!
  \*************************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");




let LandingPageComponent = class LandingPageComponent {
    constructor(titleService, tanslateService) {
        this.titleService = titleService;
        this.tanslateService = tanslateService;
        this.titleService.setTitle('Plus Minus');
    }
};
LandingPageComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }
];
LandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'landing-page',
        template: __webpack_require__(/*! raw-loader!./landing-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/landing-page/landing-page.component.html"),
        styles: [__webpack_require__(/*! ./landing-page.component.scss */ "./src/app/home/landing-page/landing-page.component.scss")]
    })
], LandingPageComponent);



/***/ }),

/***/ "./src/app/home/landing-page/landing-page.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/home/landing-page/landing-page.module.ts ***!
  \**********************************************************/
/*! exports provided: LandingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageModule", function() { return LandingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _landing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing-page.component */ "./src/app/home/landing-page/landing-page.component.ts");
/* harmony import */ var src_app_shared_shared_translate_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared-translate.module */ "./src/app/shared/shared-translate.module.ts");
/* harmony import */ var _main_banner_main_banner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-banner/main-banner.component */ "./src/app/home/landing-page/main-banner/main-banner.component.ts");
/* harmony import */ var _landing_page_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing-page.routing */ "./src/app/home/landing-page/landing-page.routing.ts");
/* harmony import */ var _our_services_our_services_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./our-services/our-services.component */ "./src/app/home/landing-page/our-services/our-services.component.ts");
/* harmony import */ var _our_services_service_card_service_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./our-services/service-card/service-card.component */ "./src/app/home/landing-page/our-services/service-card/service-card.component.ts");
/* harmony import */ var _best_offers_best_offers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./best-offers/best-offers.component */ "./src/app/home/landing-page/best-offers/best-offers.component.ts");
/* harmony import */ var _best_offers_best_deposit_offers_best_deposit_offers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./best-offers/best-deposit-offers/best-deposit-offers.component */ "./src/app/home/landing-page/best-offers/best-deposit-offers/best-deposit-offers.component.ts");
/* harmony import */ var _best_offers_best_deposit_offers_best_deposit_offer_best_deposit_offer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./best-offers/best-deposit-offers/best-deposit-offer/best-deposit-offer.component */ "./src/app/home/landing-page/best-offers/best-deposit-offers/best-deposit-offer/best-deposit-offer.component.ts");
/* harmony import */ var _best_offers_best_credit_offers_best_credit_offers_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./best-offers/best-credit-offers/best-credit-offers.component */ "./src/app/home/landing-page/best-offers/best-credit-offers/best-credit-offers.component.ts");
/* harmony import */ var _best_offers_best_credit_offers_credit_offer_card_credit_offer_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./best-offers/best-credit-offers/credit-offer-card/credit-offer-card.component */ "./src/app/home/landing-page/best-offers/best-credit-offers/credit-offer-card/credit-offer-card.component.ts");
/* harmony import */ var _our_partners_our_partners_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./our-partners/our-partners.component */ "./src/app/home/landing-page/our-partners/our-partners.component.ts");
/* harmony import */ var _our_partners_bank_partners_bank_partners_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./our-partners/bank-partners/bank-partners.component */ "./src/app/home/landing-page/our-partners/bank-partners/bank-partners.component.ts");
/* harmony import */ var _our_partners_bank_partners_bank_partner_card_bank_partner_card_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./our-partners/bank-partners/bank-partner-card/bank-partner-card.component */ "./src/app/home/landing-page/our-partners/bank-partners/bank-partner-card/bank-partner-card.component.ts");
/* harmony import */ var _favorable_rates_preview_favorable_rates_preview_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./favorable-rates-preview/favorable-rates-preview.component */ "./src/app/home/landing-page/favorable-rates-preview/favorable-rates-preview.component.ts");
/* harmony import */ var _loans_loan_request_dialog_loan_request_dialog_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../loans/loan-request-dialog/loan-request-dialog.module */ "./src/app/home/loans/loan-request-dialog/loan-request-dialog.module.ts");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
/* harmony import */ var _favorable_rates_preview_favorable_rates_preview_table_favorable_rates_preview_table_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./favorable-rates-preview/favorable-rates-preview-table/favorable-rates-preview-table.module */ "./src/app/home/landing-page/favorable-rates-preview/favorable-rates-preview-table/favorable-rates-preview-table.module.ts");
/* harmony import */ var _best_offers_best_credit_card_offers_best_credit_card_offers_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./best-offers/best-credit-card-offers/best-credit-card-offers.component */ "./src/app/home/landing-page/best-offers/best-credit-card-offers/best-credit-card-offers.component.ts");
/* harmony import */ var _best_offers_best_credit_card_offers_credit_card_offer_card_credit_card_offer_card_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./best-offers/best-credit-card-offers/credit-card-offer-card/credit-card-offer-card.component */ "./src/app/home/landing-page/best-offers/best-credit-card-offers/credit-card-offer-card/credit-card-offer-card.component.ts");
/* harmony import */ var _best_offers_best_debit_card_offers_best_debit_card_offers_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./best-offers/best-debit-card-offers/best-debit-card-offers.component */ "./src/app/home/landing-page/best-offers/best-debit-card-offers/best-debit-card-offers.component.ts");
/* harmony import */ var _best_offers_best_debit_card_offers_debit_card_offer_card_debit_card_offer_card_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./best-offers/best-debit-card-offers/debit-card-offer-card/debit-card-offer-card.component */ "./src/app/home/landing-page/best-offers/best-debit-card-offers/debit-card-offer-card/debit-card-offer-card.component.ts");
/* harmony import */ var _main_banner_loan_slide_loan_slide_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./main-banner/loan-slide/loan-slide.component */ "./src/app/home/landing-page/main-banner/loan-slide/loan-slide.component.ts");
/* harmony import */ var _main_banner_mortgage_slide_mortgage_slide_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./main-banner/mortgage-slide/mortgage-slide.component */ "./src/app/home/landing-page/main-banner/mortgage-slide/mortgage-slide.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");





























const DEFAULT_SWIPER_CONFIG = {
    direction: 'horizontal',
    slidesPerView: 'auto'
};
let LandingPageModule = class LandingPageModule {
};
LandingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _landing_page_component__WEBPACK_IMPORTED_MODULE_3__["LandingPageComponent"],
            _main_banner_main_banner_component__WEBPACK_IMPORTED_MODULE_5__["MainBannerComponent"],
            _our_services_our_services_component__WEBPACK_IMPORTED_MODULE_7__["OurServicesComponent"],
            _our_services_service_card_service_card_component__WEBPACK_IMPORTED_MODULE_8__["ServiceCardComponent"],
            _best_offers_best_offers_component__WEBPACK_IMPORTED_MODULE_9__["BestOffersComponent"],
            _best_offers_best_deposit_offers_best_deposit_offers_component__WEBPACK_IMPORTED_MODULE_10__["BestDepositOffersComponent"],
            _best_offers_best_deposit_offers_best_deposit_offer_best_deposit_offer_component__WEBPACK_IMPORTED_MODULE_11__["BestDepositOfferComponent"],
            _best_offers_best_credit_offers_best_credit_offers_component__WEBPACK_IMPORTED_MODULE_12__["BestCreditOffersComponent"],
            _best_offers_best_credit_offers_credit_offer_card_credit_offer_card_component__WEBPACK_IMPORTED_MODULE_13__["CreditOfferCardComponent"],
            _our_partners_our_partners_component__WEBPACK_IMPORTED_MODULE_14__["OurPartnersComponent"],
            _our_partners_bank_partners_bank_partners_component__WEBPACK_IMPORTED_MODULE_15__["BankPartnersComponent"],
            _our_partners_bank_partners_bank_partner_card_bank_partner_card_component__WEBPACK_IMPORTED_MODULE_16__["BankPartnerCardComponent"],
            _favorable_rates_preview_favorable_rates_preview_component__WEBPACK_IMPORTED_MODULE_17__["FavorableRatesPreviewComponent"],
            _best_offers_best_credit_card_offers_best_credit_card_offers_component__WEBPACK_IMPORTED_MODULE_21__["BestCreditCardOffersComponent"],
            _best_offers_best_credit_card_offers_credit_card_offer_card_credit_card_offer_card_component__WEBPACK_IMPORTED_MODULE_22__["CreditCardOfferCardComponent"],
            _best_offers_best_debit_card_offers_best_debit_card_offers_component__WEBPACK_IMPORTED_MODULE_23__["BestDebitCardOffersComponent"],
            _best_offers_best_debit_card_offers_debit_card_offer_card_debit_card_offer_card_component__WEBPACK_IMPORTED_MODULE_24__["DebitCardOfferCardComponent"],
            _main_banner_loan_slide_loan_slide_component__WEBPACK_IMPORTED_MODULE_25__["LoanSlideComponent"],
            _main_banner_mortgage_slide_mortgage_slide_component__WEBPACK_IMPORTED_MODULE_26__["MortgageSlideComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_translate_module__WEBPACK_IMPORTED_MODULE_4__["SharedTranslateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatTabsModule"],
            _landing_page_routing__WEBPACK_IMPORTED_MODULE_6__["LandingPageRoutingModule"],
            _loans_loan_request_dialog_loan_request_dialog_module__WEBPACK_IMPORTED_MODULE_18__["LoanRequestDialogModule"],
            ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_19__["SwiperModule"],
            _favorable_rates_preview_favorable_rates_preview_table_favorable_rates_preview_table_module__WEBPACK_IMPORTED_MODULE_20__["FavorableRatesPreviewTableModule"]
        ],
        providers: [
            {
                provide: ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_19__["SWIPER_CONFIG"],
                useValue: DEFAULT_SWIPER_CONFIG
            }
        ]
    })
], LandingPageModule);



/***/ }),

/***/ "./src/app/home/landing-page/landing-page.routing.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/landing-page/landing-page.routing.ts ***!
  \***********************************************************/
/*! exports provided: LandingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageRoutingModule", function() { return LandingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _landing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing-page.component */ "./src/app/home/landing-page/landing-page.component.ts");




const routes = [
    { path: '', component: _landing_page_component__WEBPACK_IMPORTED_MODULE_3__["LandingPageComponent"], pathMatch: 'full' }
];
let LandingPageRoutingModule = class LandingPageRoutingModule {
};
LandingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LandingPageRoutingModule);



/***/ }),

/***/ "./src/app/home/landing-page/main-banner/loan-slide/loan-slide.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/home/landing-page/main-banner/loan-slide/loan-slide.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  width: 100vw;\n  height: 100%;\n  position: relative;\n}\n\n.slide__cover {\n  width: 100vw;\n  height: 300px;\n  position: absolute;\n  left: 0;\n  background-image: url('PLUSMINUS_HOMEPAGE_BANNER.webp');\n  background-color: var(--primary-default);\n  background-repeat: no-repeat;\n  background-position-x: center;\n}\n\n@media (max-width: 576px) {\n  .slide__cover {\n    background-position-x: -1011px;\n    background-position-y: -24px;\n  }\n}\n\n.slide {\n  position: relative;\n  height: 300px;\n}\n\n.slide .slide__content {\n  padding-top: 80px;\n}\n\n.slide .slide__content .slide__content__title {\n  position: relative;\n  z-index: 1;\n  color: #ffffff;\n  font-family: \"Montserrat-SemiBold\";\n  font-size: 2.25rem;\n  font-weight: 400;\n  letter-spacing: -0.0675rem;\n}\n\n.slide .slide__content .slide__content__shortInfo {\n  position: relative;\n  z-index: 1;\n  color: #ffffff;\n  font-family: \"Montserrat-Medium\";\n  font-size: 16px;\n  font-weight: 400;\n  max-width: 19.375rem;\n  letter-spacing: -0.0088rem;\n  height: 72px;\n}\n\n.slide .slide__content .slide__detailed {\n  margin-top: 42px;\n  margin-left: 10.625rem;\n  position: relative;\n  z-index: 1;\n}\n\n.slide .slide__content .slide__detailed button {\n  min-width: 170px;\n  border: 1px solid #fff2c2;\n}\n\n@media (max-width: 576px) {\n  .slide .slide__content .slide__detailed {\n    margin-top: 30px;\n    margin-left: 7.625rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9sYW5kaW5nLXBhZ2UvbWFpbi1iYW5uZXIvbG9hbi1zbGlkZS9EOlxcc291cmNlIGNvZGVzXFxwbHVzLW1pbnVzL3NyY1xcYXBwXFxob21lXFxsYW5kaW5nLXBhZ2VcXG1haW4tYmFubmVyXFxsb2FuLXNsaWRlXFxsb2FuLXNsaWRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2xhbmRpbmctcGFnZS9tYWluLWJhbm5lci9sb2FuLXNsaWRlL2xvYW4tc2xpZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSx1REFBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQ0NKOztBREFJO0VBVEY7SUFZSSw4QkFBQTtJQUNBLDRCQUFBO0VDQ0o7QUFDRjs7QURFRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQ0NKOztBRENJO0VBQ0UsaUJBQUE7QUNDTjs7QURBTTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQ0VSOztBREFNO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7QUNFUjs7QURBTTtFQUNFLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNFUjs7QUREUTtFQUNFLGdCQUFBO0VBQ0YseUJBQUE7QUNHUjs7QURHRTtFQUdNO0lBQ0UsZ0JBQUE7SUFDQSxxQkFBQTtFQ0ZSO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2xhbmRpbmctcGFnZS9tYWluLWJhbm5lci9sb2FuLXNsaWRlL2xvYW4tc2xpZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIC5zbGlkZV9fY292ZXIge1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL1BMVVNNSU5VU19IT01FUEFHRV9CQU5ORVIud2VicFwiKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktZGVmYXVsdCk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXI7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgIC8vICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgIC8vIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktZGVmYXVsdCk7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogLTEwMTFweDtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAtMjRweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zbGlkZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG5cclxuICAgIC5zbGlkZV9fY29udGVudCB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA4MHB4O1xyXG4gICAgICAuc2xpZGVfX2NvbnRlbnRfX3RpdGxlIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGQnO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi4yNXJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wNjc1cmVtO1xyXG4gICAgICB9XHJcbiAgICAgIC5zbGlkZV9fY29udGVudF9fc2hvcnRJbmZvIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQtTWVkaXVtJztcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBtYXgtd2lkdGg6IDE5LjM3NXJlbTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDA4OHJlbTtcclxuICAgICAgICBoZWlnaHQ6IDcycHg7XHJcbiAgICAgIH1cclxuICAgICAgLnNsaWRlX19kZXRhaWxlZCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNDJweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTAuNjI1cmVtO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDE3MHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmYyYzI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgIC5zbGlkZSB7XHJcbiAgICAgIC5zbGlkZV9fY29udGVudCB7XHJcbiAgICAgICAgLnNsaWRlX19kZXRhaWxlZCB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDcuNjI1cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2xpZGVfX2NvdmVyIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDMwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvUExVU01JTlVTX0hPTUVQQUdFX0JBTk5FUi53ZWJwXCIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWRlZmF1bHQpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuc2xpZGVfX2NvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IC0xMDExcHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAtMjRweDtcbiAgfVxufVxuXG4uc2xpZGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMzAwcHg7XG59XG4uc2xpZGUgLnNsaWRlX19jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDgwcHg7XG59XG4uc2xpZGUgLnNsaWRlX19jb250ZW50IC5zbGlkZV9fY29udGVudF9fdGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0LVNlbWlCb2xkXCI7XG4gIGZvbnQtc2l6ZTogMi4yNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjA2NzVyZW07XG59XG4uc2xpZGUgLnNsaWRlX19jb250ZW50IC5zbGlkZV9fY29udGVudF9fc2hvcnRJbmZvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdC1NZWRpdW1cIjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXgtd2lkdGg6IDE5LjM3NXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAwODhyZW07XG4gIGhlaWdodDogNzJweDtcbn1cbi5zbGlkZSAuc2xpZGVfX2NvbnRlbnQgLnNsaWRlX19kZXRhaWxlZCB7XG4gIG1hcmdpbi10b3A6IDQycHg7XG4gIG1hcmdpbi1sZWZ0OiAxMC42MjVyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cbi5zbGlkZSAuc2xpZGVfX2NvbnRlbnQgLnNsaWRlX19kZXRhaWxlZCBidXR0b24ge1xuICBtaW4td2lkdGg6IDE3MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmMmMyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnNsaWRlIC5zbGlkZV9fY29udGVudCAuc2xpZGVfX2RldGFpbGVkIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA3LjYyNXJlbTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/landing-page/main-banner/loan-slide/loan-slide.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/home/landing-page/main-banner/loan-slide/loan-slide.component.ts ***!
  \**********************************************************************************/
/*! exports provided: LoanSlideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanSlideComponent", function() { return LoanSlideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var src_app_home_loans_loan_request_dialog_loan_request_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/home/loans/loan-request-dialog/loan-request-dialog.component */ "./src/app/home/loans/loan-request-dialog/loan-request-dialog.component.ts");
/* harmony import */ var src_app_app_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.utils */ "./src/app/app.utils.ts");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! typed.js */ "./node_modules/typed.js/lib/typed.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");







let LoanSlideComponent = class LoanSlideComponent {
    constructor(dialog, translateService) {
        this.dialog = dialog;
        this.translateService = translateService;
    }
    ngOnInit() { }
    onRequestLoansFromAllBanks() {
        const ref = this.dialog.open(src_app_home_loans_loan_request_dialog_loan_request_dialog_component__WEBPACK_IMPORTED_MODULE_3__["LoanRequestDialogComponent"], {
            panelClass: 'loanRequestDialog',
            autoFocus: false,
            maxWidth: '99vw',
            disableClose: true,
            position: Object(src_app_app_utils__WEBPACK_IMPORTED_MODULE_4__["isMobileSize"])() && { top: '10px' }
            //  backdropClass: 'loanRequestDialogBackdrop'
        });
    }
    ngAfterViewInit() {
        // this.startTypedJs();
    }
    startTypedJs() {
        const options = {
            strings: [
                this.translateService.instant('~selectCreditsShortInfo'),
                this.translateService.instant('~selectCreditsShortInfoSecond')
            ],
            typeSpeed: 40,
            starDelay: 200,
            backSpeed: 10,
            loop: true,
            loopCount: 2,
            showCursor: false,
            smartBackspace: true
        };
        this.typed = new typed_js__WEBPACK_IMPORTED_MODULE_5___default.a("#slideLoanShortInfo", options);
    }
    ngOnDestroy() {
        //   this.typed.destroy();
    }
};
LoanSlideComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('shortInfo', { static: false })
], LoanSlideComponent.prototype, "shortInfo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LoanSlideComponent.prototype, "slide", void 0);
LoanSlideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'loan-slide',
        template: __webpack_require__(/*! raw-loader!./loan-slide.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/landing-page/main-banner/loan-slide/loan-slide.component.html"),
        styles: [__webpack_require__(/*! ./loan-slide.component.scss */ "./src/app/home/landing-page/main-banner/loan-slide/loan-slide.component.scss")]
    })
], LoanSlideComponent);



/***/ }),

/***/ "./src/app/home/landing-page/main-banner/main-banner.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/home/landing-page/main-banner/main-banner.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  width: 100vw;\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9sYW5kaW5nLXBhZ2UvbWFpbi1iYW5uZXIvRDpcXHNvdXJjZSBjb2Rlc1xccGx1cy1taW51cy9zcmNcXGFwcFxcaG9tZVxcbGFuZGluZy1wYWdlXFxtYWluLWJhbm5lclxcbWFpbi1iYW5uZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvbGFuZGluZy1wYWdlL21haW4tYmFubmVyL21haW4tYmFubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2xhbmRpbmctcGFnZS9tYWluLWJhbm5lci9tYWluLWJhbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMzAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/landing-page/main-banner/main-banner.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/home/landing-page/main-banner/main-banner.component.ts ***!
  \************************************************************************/
/*! exports provided: MainBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainBannerComponent", function() { return MainBannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _mock_slides__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock-slides */ "./src/app/home/landing-page/main-banner/mock-slides.ts");



let MainBannerComponent = class MainBannerComponent {
    constructor() {
        this.slides = _mock_slides__WEBPACK_IMPORTED_MODULE_2__["MockSlides"];
        this.slideIndex = 0;
        this.slideCount = 2;
        this.config = {
            a11y: true,
            direction: 'horizontal',
            slidesPerView: 1,
            keyboard: true,
            mousewheel: false,
            scrollbar: false,
            navigation: true,
            pagination: { el: '.swiper-pagination', clickable: true }
        };
    }
    ngOnInit() { }
};
MainBannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'main-banner',
        template: __webpack_require__(/*! raw-loader!./main-banner.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/landing-page/main-banner/main-banner.component.html"),
        styles: [__webpack_require__(/*! ./main-banner.component.scss */ "./src/app/home/landing-page/main-banner/main-banner.component.scss")]
    })
], MainBannerComponent);



/***/ }),

/***/ "./src/app/home/landing-page/main-banner/mock-slides.ts":
/*!**************************************************************!*\
  !*** ./src/app/home/landing-page/main-banner/mock-slides.ts ***!
  \**************************************************************/
/*! exports provided: MockSlides */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockSlides", function() { return MockSlides; });
const MockSlides = [
    {
        title: '~selectCredits',
        shortInfo: '~selectCreditsShortInfo',
        link: '',
        coverPhoto: './assets/images/select-credits.png'
    },
];


/***/ }),

/***/ "./src/app/home/landing-page/main-banner/mortgage-slide/mortgage-slide.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/home/landing-page/main-banner/mortgage-slide/mortgage-slide.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  width: 100vw;\n  height: 100%;\n  position: relative;\n}\n\n.slide__cover {\n  width: 100vw;\n  height: 300px;\n  position: absolute;\n  left: 0;\n  background-image: url('mortgage-banner-cover.webp');\n  background-color: #F5C300;\n  background-repeat: no-repeat;\n  background-position-x: center;\n}\n\n@media (max-width: 576px) {\n  .slide__cover {\n    background-position-x: -388px;\n    background-position-y: 0;\n  }\n}\n\n.slide {\n  position: relative;\n  height: 300px;\n}\n\n.slide .slide__content {\n  padding-top: 80px;\n}\n\n.slide .slide__content .slide__content__title {\n  position: relative;\n  z-index: 1;\n  color: #ffffff;\n  font-family: \"Montserrat-SemiBold\";\n  font-size: 2.25rem;\n  font-weight: 400;\n  letter-spacing: -0.0675rem;\n}\n\n.slide .slide__content .slide__content__shortInfo {\n  position: relative;\n  z-index: 1;\n  color: #ffffff;\n  font-family: \"Montserrat-Medium\";\n  font-size: 16px;\n  font-weight: 400;\n  max-width: 19.375rem;\n  letter-spacing: -0.0088rem;\n  height: 72px;\n}\n\n.slide .slide__content .slide__detailed {\n  margin-top: 42px;\n  margin-left: 10.625rem;\n  position: relative;\n  z-index: 1;\n}\n\n.slide .slide__content .slide__detailed a {\n  min-width: 170px;\n}\n\n@media (max-width: 576px) {\n  .slide .slide__content .slide__detailed {\n    margin-top: 30px;\n    margin-left: 7.625rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9sYW5kaW5nLXBhZ2UvbWFpbi1iYW5uZXIvbW9ydGdhZ2Utc2xpZGUvRDpcXHNvdXJjZSBjb2Rlc1xccGx1cy1taW51cy9zcmNcXGFwcFxcaG9tZVxcbGFuZGluZy1wYWdlXFxtYWluLWJhbm5lclxcbW9ydGdhZ2Utc2xpZGVcXG1vcnRnYWdlLXNsaWRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2xhbmRpbmctcGFnZS9tYWluLWJhbm5lci9tb3J0Z2FnZS1zbGlkZS9tb3J0Z2FnZS1zbGlkZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLG1EQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FDQ0o7O0FEQUk7RUFURjtJQVlHLDZCQUFBO0lBQ0Esd0JBQUE7RUNDSDtBQUNGOztBREVFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FDQ0o7O0FEQ0k7RUFDRSxpQkFBQTtBQ0NOOztBREFNO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FDRVI7O0FEQU07RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtBQ0VSOztBREFNO0VBQ0UsZ0JBQUE7RUFFQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0NSOztBREFPO0VBQ0csZ0JBQUE7QUNFVjs7QURLRTtFQUdNO0lBQ0UsZ0JBQUE7SUFDQSxxQkFBQTtFQ0pSO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2xhbmRpbmctcGFnZS9tYWluLWJhbm5lci9tb3J0Z2FnZS1zbGlkZS9tb3J0Z2FnZS1zbGlkZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgLnNsaWRlX19jb3ZlciB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbW9ydGdhZ2UtYmFubmVyLWNvdmVyLndlYnBcIik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVDMzAwO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogY2VudGVyO1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAvLyAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgICAvLyBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWRlZmF1bHQpO1xyXG4gICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogLTM4OHB4O1xyXG4gICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zbGlkZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG5cclxuICAgIC5zbGlkZV9fY29udGVudCB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA4MHB4O1xyXG4gICAgICAuc2xpZGVfX2NvbnRlbnRfX3RpdGxlIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGQnO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi4yNXJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wNjc1cmVtO1xyXG4gICAgICB9XHJcbiAgICAgIC5zbGlkZV9fY29udGVudF9fc2hvcnRJbmZvIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQtTWVkaXVtJztcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBtYXgtd2lkdGg6IDE5LjM3NXJlbTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDA4OHJlbTtcclxuICAgICAgICBoZWlnaHQ6IDcycHg7XHJcbiAgICAgIH1cclxuICAgICAgLnNsaWRlX19kZXRhaWxlZCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNDJweDtcclxuICAgICAgLy8gIG1hcmdpbi10b3A6IDQycHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwLjYyNXJlbTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgIGEge1xyXG4gICAgICAgICAgbWluLXdpZHRoOiAxNzBweDtcclxuICAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgI2ZmZjJjMjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgLnNsaWRlIHtcclxuICAgICAgLnNsaWRlX19jb250ZW50IHtcclxuICAgICAgICAuc2xpZGVfX2RldGFpbGVkIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNy42MjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zbGlkZV9fY292ZXIge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMzAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9tb3J0Z2FnZS1iYW5uZXItY292ZXIud2VicFwiKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1QzMwMDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnNsaWRlX19jb3ZlciB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAtMzg4cHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAwO1xuICB9XG59XG5cbi5zbGlkZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAzMDBweDtcbn1cbi5zbGlkZSAuc2xpZGVfX2NvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogODBweDtcbn1cbi5zbGlkZSAuc2xpZGVfX2NvbnRlbnQgLnNsaWRlX19jb250ZW50X190aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQtU2VtaUJvbGRcIjtcbiAgZm9udC1zaXplOiAyLjI1cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDY3NXJlbTtcbn1cbi5zbGlkZSAuc2xpZGVfX2NvbnRlbnQgLnNsaWRlX19jb250ZW50X19zaG9ydEluZm8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0LU1lZGl1bVwiO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1heC13aWR0aDogMTkuMzc1cmVtO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDA4OHJlbTtcbiAgaGVpZ2h0OiA3MnB4O1xufVxuLnNsaWRlIC5zbGlkZV9fY29udGVudCAuc2xpZGVfX2RldGFpbGVkIHtcbiAgbWFyZ2luLXRvcDogNDJweDtcbiAgbWFyZ2luLWxlZnQ6IDEwLjYyNXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuLnNsaWRlIC5zbGlkZV9fY29udGVudCAuc2xpZGVfX2RldGFpbGVkIGEge1xuICBtaW4td2lkdGg6IDE3MHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnNsaWRlIC5zbGlkZV9fY29udGVudCAuc2xpZGVfX2RldGFpbGVkIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA3LjYyNXJlbTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/landing-page/main-banner/mortgage-slide/mortgage-slide.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/home/landing-page/main-banner/mortgage-slide/mortgage-slide.component.ts ***!
  \******************************************************************************************/
/*! exports provided: MortgageSlideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MortgageSlideComponent", function() { return MortgageSlideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MortgageSlideComponent = class MortgageSlideComponent {
    constructor() { }
    ngOnInit() {
    }
};
MortgageSlideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mortgage-slide',
        template: __webpack_require__(/*! raw-loader!./mortgage-slide.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/landing-page/main-banner/mortgage-slide/mortgage-slide.component.html"),
        styles: [__webpack_require__(/*! ./mortgage-slide.component.scss */ "./src/app/home/landing-page/main-banner/mortgage-slide/mortgage-slide.component.scss")]
    })
], MortgageSlideComponent);



/***/ }),

/***/ "./src/app/home/landing-page/our-partners/bank-partners/bank-partner-card/bank-partner-card.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/home/landing-page/our-partners/bank-partners/bank-partner-card/bank-partner-card.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n}\n\n.partner {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 4.25rem;\n  height: 75px;\n  padding: 0.9375rem;\n  margin-bottom: 0.625rem;\n  margin-right: 0.9375rem;\n  background: #ffffff;\n  text-align: center;\n  cursor: pointer;\n  transition-property: transform, box-shadow;\n  transition-duration: 300ms;\n  transition-timing-function: ease-in-out;\n  box-shadow: 0 0.125rem 0.3125rem -0.0625rem rgba(0, 0, 0, 0.2);\n}\n\n.partner:hover {\n  box-shadow: 0 1.5625rem 1.25rem rgba(94, 94, 94, 0.15);\n  transform: translateY(-0.3125rem);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9sYW5kaW5nLXBhZ2Uvb3VyLXBhcnRuZXJzL2JhbmstcGFydG5lcnMvYmFuay1wYXJ0bmVyLWNhcmQvRDpcXHNvdXJjZSBjb2Rlc1xccGx1cy1taW51cy9zcmNcXGFwcFxcaG9tZVxcbGFuZGluZy1wYWdlXFxvdXItcGFydG5lcnNcXGJhbmstcGFydG5lcnNcXGJhbmstcGFydG5lci1jYXJkXFxiYW5rLXBhcnRuZXItY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9sYW5kaW5nLXBhZ2Uvb3VyLXBhcnRuZXJzL2JhbmstcGFydG5lcnMvYmFuay1wYXJ0bmVyLWNhcmQvYmFuay1wYXJ0bmVyLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsMENBQUE7RUFDQSwwQkFBQTtFQUNBLHVDQUFBO0VBQ0EsOERBQUE7QUNFSjs7QURESTtFQUNJLHNEQUFBO0VBQ0EsaUNBQUE7QUNHUiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbGFuZGluZy1wYWdlL291ci1wYXJ0bmVycy9iYW5rLXBhcnRuZXJzL2JhbmstcGFydG5lci1jYXJkL2JhbmstcGFydG5lci1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLnBhcnRuZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1pbi1oZWlnaHQ6IDQuMjVyZW07XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICBwYWRkaW5nOiAwLjkzNzVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjYyNXJlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMC45Mzc1cmVtO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgYm94LXNoYWRvdztcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xyXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG4gICAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAwLjMxMjVyZW0gLTAuMDYyNXJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDEuNTYyNXJlbSAxLjI1cmVtIHJnYmEoOTQsIDk0LCA5NCwgMC4xNSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjMxMjVyZW0pO1xyXG4gICAgfVxyXG59IiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnBhcnRuZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogNC4yNXJlbTtcbiAgaGVpZ2h0OiA3NXB4O1xuICBwYWRkaW5nOiAwLjkzNzVyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNjI1cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuOTM3NXJlbTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgYm94LXNoYWRvdztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAwLjMxMjVyZW0gLTAuMDYyNXJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4ucGFydG5lcjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMS41NjI1cmVtIDEuMjVyZW0gcmdiYSg5NCwgOTQsIDk0LCAwLjE1KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjMxMjVyZW0pO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/landing-page/our-partners/bank-partners/bank-partner-card/bank-partner-card.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/home/landing-page/our-partners/bank-partners/bank-partner-card/bank-partner-card.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: BankPartnerCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankPartnerCardComponent", function() { return BankPartnerCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BankPartnerCardComponent = class BankPartnerCardComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BankPartnerCardComponent.prototype, "partner", void 0);
BankPartnerCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'bank-partner-card',
        template: __webpack_require__(/*! raw-loader!./bank-partner-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/landing-page/our-partners/bank-partners/bank-partner-card/bank-partner-card.component.html"),
        styles: [__webpack_require__(/*! ./bank-partner-card.component.scss */ "./src/app/home/landing-page/our-partners/bank-partners/bank-partner-card/bank-partner-card.component.scss")]
    })
], BankPartnerCardComponent);



/***/ }),

/***/ "./src/app/home/landing-page/our-partners/bank-partners/bank-partners.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/home/landing-page/our-partners/bank-partners/bank-partners.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin-top: 1.875rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9sYW5kaW5nLXBhZ2Uvb3VyLXBhcnRuZXJzL2JhbmstcGFydG5lcnMvRDpcXHNvdXJjZSBjb2Rlc1xccGx1cy1taW51cy9zcmNcXGFwcFxcaG9tZVxcbGFuZGluZy1wYWdlXFxvdXItcGFydG5lcnNcXGJhbmstcGFydG5lcnNcXGJhbmstcGFydG5lcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvbGFuZGluZy1wYWdlL291ci1wYXJ0bmVycy9iYW5rLXBhcnRuZXJzL2JhbmstcGFydG5lcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0Esb0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbGFuZGluZy1wYWdlL291ci1wYXJ0bmVycy9iYW5rLXBhcnRuZXJzL2JhbmstcGFydG5lcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDEuODc1cmVtO1xyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDEuODc1cmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/landing-page/our-partners/bank-partners/bank-partners.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/home/landing-page/our-partners/bank-partners/bank-partners.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: BankPartnersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankPartnersComponent", function() { return BankPartnersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../home.service */ "./src/app/home/home.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let BankPartnersComponent = class BankPartnersComponent {
    constructor(homeService) {
        this.homeService = homeService;
        this.mockPartner = {
            bankID: 1,
            bankWebSite: 'http://www.azerturkbank.az'
        };
        this.partners$ = this.homeService.getBankList(true)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((banks) => banks && banks.filter(bank => bank.bankID === 1 ||
            bank.bankID === 12 ||
            bank.bankID === 16 ||
            bank.bankID === 8)));
    }
    ngOnInit() {
    }
};
BankPartnersComponent.ctorParameters = () => [
    { type: _home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"] }
];
BankPartnersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'bank-partners',
        template: __webpack_require__(/*! raw-loader!./bank-partners.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/landing-page/our-partners/bank-partners/bank-partners.component.html"),
        styles: [__webpack_require__(/*! ./bank-partners.component.scss */ "./src/app/home/landing-page/our-partners/bank-partners/bank-partners.component.scss")]
    })
], BankPartnersComponent);



/***/ }),

/***/ "./src/app/home/landing-page/our-partners/our-partners.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/home/landing-page/our-partners/our-partners.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  padding: 3.25rem 0;\n  min-height: 12.5rem;\n  background: var(--background-secondary);\n}\n\n.section .section__title {\n  font-size: 1.5625rem;\n  font-family: \"Montserrat-SemiBold\";\n  letter-spacing: -0.0563rem;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9sYW5kaW5nLXBhZ2Uvb3VyLXBhcnRuZXJzL0Q6XFxzb3VyY2UgY29kZXNcXHBsdXMtbWludXMvc3JjXFxhcHBcXGhvbWVcXGxhbmRpbmctcGFnZVxcb3VyLXBhcnRuZXJzXFxvdXItcGFydG5lcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvbGFuZGluZy1wYWdlL291ci1wYXJ0bmVycy9vdXItcGFydG5lcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVDQUFBO0FDQ0o7O0FERUk7RUFDSSxvQkFBQTtFQUNBLGtDQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQ0NSIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9sYW5kaW5nLXBhZ2Uvb3VyLXBhcnRuZXJzL291ci1wYXJ0bmVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMy4yNXJlbSAwO1xyXG4gICAgbWluLWhlaWdodDogMTIuNXJlbTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcclxufVxyXG4uc2VjdGlvbiB7XHJcbiAgICAuc2VjdGlvbl9fdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41NjI1cmVtO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdC1TZW1pQm9sZCc7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjA1NjNyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxuICAgIC5zZWN0aW9uX19jb250ZW50IHt9XHJcbn0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAzLjI1cmVtIDA7XG4gIG1pbi1oZWlnaHQ6IDEyLjVyZW07XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcbn1cblxuLnNlY3Rpb24gLnNlY3Rpb25fX3RpdGxlIHtcbiAgZm9udC1zaXplOiAxLjU2MjVyZW07XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQtU2VtaUJvbGRcIjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjA1NjNyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/landing-page/our-partners/our-partners.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/home/landing-page/our-partners/our-partners.component.ts ***!
  \**************************************************************************/
/*! exports provided: OurPartnersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurPartnersComponent", function() { return OurPartnersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let OurPartnersComponent = class OurPartnersComponent {
    constructor() {
        this.tabsCount = 5;
        this.selectedTabIndex = 0;
        this._onDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ngOnInit() {
    }
};
OurPartnersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'our-partners',
        template: __webpack_require__(/*! raw-loader!./our-partners.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/landing-page/our-partners/our-partners.component.html"),
        styles: [__webpack_require__(/*! ./our-partners.component.scss */ "./src/app/home/landing-page/our-partners/our-partners.component.scss")]
    })
], OurPartnersComponent);



/***/ }),

/***/ "./src/app/home/landing-page/our-services/mock-services.ts":
/*!*****************************************************************!*\
  !*** ./src/app/home/landing-page/our-services/mock-services.ts ***!
  \*****************************************************************/
/*! exports provided: MockServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockServices", function() { return MockServices; });
const MockServices = [
    {
        name: '~deposits',
        iconPath: './assets/images/deposits.png',
        url: 'deposits',
        disabled: false
    },
    {
        name: '~credits',
        iconPath: './assets/images/credits.png',
        url: 'loans'
    },
    {
        name: '~credit-cards',
        iconPath: './assets/images/credit-cards.png',
        url: 'credit-cards',
        disabled: true
    },
    {
        name: '~debit-cards',
        iconPath: './assets/images/debit-cards.png',
        url: 'debit-cards',
        disabled: false
    },
    {
        name: '~mortgage',
        iconPath: './assets/images/mobile-tariffs.png',
        url: 'mortgage',
    },
    {
        name: '~exchange-rates',
        iconPath: './assets/images/exchange-rates.png',
        url: 'exchange-rates'
    }
];


/***/ }),

/***/ "./src/app/home/landing-page/our-services/our-services.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/home/landing-page/our-services/our-services.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  width: 100vw;\n  padding: 4.125rem 0;\n  background-image: url('our-services-cover.webp');\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9sYW5kaW5nLXBhZ2Uvb3VyLXNlcnZpY2VzL0Q6XFxzb3VyY2UgY29kZXNcXHBsdXMtbWludXMvc3JjXFxhcHBcXGhvbWVcXGxhbmRpbmctcGFnZVxcb3VyLXNlcnZpY2VzXFxvdXItc2VydmljZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvbGFuZGluZy1wYWdlL291ci1zZXJ2aWNlcy9vdXItc2VydmljZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0RBQUE7RUFDQSxzQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9sYW5kaW5nLXBhZ2Uvb3VyLXNlcnZpY2VzL291ci1zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgcGFkZGluZzogNC4xMjVyZW0gMDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOnVybChcIi4uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL291ci1zZXJ2aWNlcy1jb3Zlci53ZWJwXCIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMHZ3O1xuICBwYWRkaW5nOiA0LjEyNXJlbSAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9vdXItc2VydmljZXMtY292ZXIud2VicFwiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/landing-page/our-services/our-services.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/home/landing-page/our-services/our-services.component.ts ***!
  \**************************************************************************/
/*! exports provided: OurServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurServicesComponent", function() { return OurServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _mock_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock-services */ "./src/app/home/landing-page/our-services/mock-services.ts");



let OurServicesComponent = class OurServicesComponent {
    constructor() {
        this.services = _mock_services__WEBPACK_IMPORTED_MODULE_2__["MockServices"];
    }
    ngOnInit() { }
};
OurServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'our-services',
        template: __webpack_require__(/*! raw-loader!./our-services.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/landing-page/our-services/our-services.component.html"),
        styles: [__webpack_require__(/*! ./our-services.component.scss */ "./src/app/home/landing-page/our-services/our-services.component.scss")]
    })
], OurServicesComponent);



/***/ }),

/***/ "./src/app/home/landing-page/our-services/service-card/service-card.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/home/landing-page/our-services/service-card/service-card.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n}\n\n.service-card {\n  display: flex;\n  align-items: center;\n  background: #fff6d1;\n  padding-left: 0.9375rem;\n  padding-right: 0.9375rem;\n  padding-top: 0.9375rem;\n  padding-bottom: 0.9375rem;\n  margin-bottom: 0.4375rem;\n  margin-right: 0.4375rem;\n  cursor: pointer;\n  outline: 0;\n  transition: box-shadow 300ms ease-in-out;\n}\n\n.service-card.disabled {\n  background: rgba(0, 0, 0, 0.12);\n  box-shadow: none !important;\n  pointer-events: none;\n}\n\n.service-card:hover {\n  box-shadow: 0 0.75rem 1.125rem 0.125rem rgba(0, 0, 0, 0.1);\n}\n\n.service-card .service-card__icon {\n  width: 41px;\n  height: 35px;\n  margin-right: 1rem;\n}\n\n.service-card .service-card__icon img {\n  width: 100%;\n  height: 100%;\n}\n\n.service-card .service-card__name {\n  color: #000000;\n  font-family: \"Montserrat-Medium\";\n  font-size: 13px;\n  font-weight: 400;\n  line-height: 1.125rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9sYW5kaW5nLXBhZ2Uvb3VyLXNlcnZpY2VzL3NlcnZpY2UtY2FyZC9EOlxcc291cmNlIGNvZGVzXFxwbHVzLW1pbnVzL3NyY1xcYXBwXFxob21lXFxsYW5kaW5nLXBhZ2VcXG91ci1zZXJ2aWNlc1xcc2VydmljZS1jYXJkXFxzZXJ2aWNlLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvbGFuZGluZy1wYWdlL291ci1zZXJ2aWNlcy9zZXJ2aWNlLWNhcmQvc2VydmljZS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGOztBRENBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLHdDQUFBO0FDRUY7O0FEREU7RUFDRSwrQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7QUNHSjs7QURERTtFQUNFLDBEQUFBO0FDR0o7O0FEREU7RUFHRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0VOOztBRENFO0VBQ0UsY0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbGFuZGluZy1wYWdlL291ci1zZXJ2aWNlcy9zZXJ2aWNlLWNhcmQvc2VydmljZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5zZXJ2aWNlLWNhcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjZmZmNmQxO1xyXG4gIHBhZGRpbmctbGVmdDogMC45Mzc1cmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDAuOTM3NXJlbTtcclxuICBwYWRkaW5nLXRvcDogMC45Mzc1cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjkzNzVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMC40Mzc1cmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMC40Mzc1cmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdXRsaW5lOiAwO1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMzAwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgJi5kaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB9XHJcbiAgJjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAuNzVyZW0gMS4xMjVyZW0gMC4xMjVyZW0gcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIH1cclxuICAuc2VydmljZS1jYXJkX19pY29uIHtcclxuICAgIC8vIGhlaWdodDogMi4xODc1cmVtO1xyXG4gICAgLy8gd2lkdGg6IDIuNTZyZW07XHJcbiAgICB3aWR0aDogNDFweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zZXJ2aWNlLWNhcmRfX25hbWUge1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQtTWVkaXVtJztcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS4xMjVyZW07XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zZXJ2aWNlLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZmZmNmQxO1xuICBwYWRkaW5nLWxlZnQ6IDAuOTM3NXJlbTtcbiAgcGFkZGluZy1yaWdodDogMC45Mzc1cmVtO1xuICBwYWRkaW5nLXRvcDogMC45Mzc1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC45Mzc1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjQzNzVyZW07XG4gIG1hcmdpbi1yaWdodDogMC40Mzc1cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IDA7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMzAwbXMgZWFzZS1pbi1vdXQ7XG59XG4uc2VydmljZS1jYXJkLmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5zZXJ2aWNlLWNhcmQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAuNzVyZW0gMS4xMjVyZW0gMC4xMjVyZW0gcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLnNlcnZpY2UtY2FyZCAuc2VydmljZS1jYXJkX19pY29uIHtcbiAgd2lkdGg6IDQxcHg7XG4gIGhlaWdodDogMzVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuLnNlcnZpY2UtY2FyZCAuc2VydmljZS1jYXJkX19pY29uIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uc2VydmljZS1jYXJkIC5zZXJ2aWNlLWNhcmRfX25hbWUge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdC1NZWRpdW1cIjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS4xMjVyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/home/landing-page/our-services/service-card/service-card.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/home/landing-page/our-services/service-card/service-card.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ServiceCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceCardComponent", function() { return ServiceCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ServiceCardComponent = class ServiceCardComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ServiceCardComponent.prototype, "service", void 0);
ServiceCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'service-card',
        template: __webpack_require__(/*! raw-loader!./service-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/landing-page/our-services/service-card/service-card.component.html"),
        styles: [__webpack_require__(/*! ./service-card.component.scss */ "./src/app/home/landing-page/our-services/service-card/service-card.component.scss")]
    })
], ServiceCardComponent);



/***/ })

}]);
//# sourceMappingURL=home-landing-page-landing-page-module-es2015.js.map