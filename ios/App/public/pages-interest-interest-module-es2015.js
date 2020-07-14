(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-interest-interest-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/interest/interest.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/interest/interest.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"interest\">\n \n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button color=\"secondary\"></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Marriage Toolkit</ion-title>\n    </ion-toolbar>\n\n    <h1 class=\"page-slogan ion-text-center color-light\">\n      If you want to go fast, go<br> alone. But if you want to<br> go the distance,<br> <span class=\"color-secondary\">go together.</span>\n    </h1>\n    \n    <div class=\"ion-padding-horizontal\">\n      \n      <ion-card class=\"reminder\">\n        <ion-item lines=\"none\">\n          \n          <ion-label color=\"primary\">\n            <ion-icon class=\"icon-start\" name=\"notifications-outline\" color=\"primary\" slot=\"start\"></ion-icon>\n            <div>\n              <h1>NEXT DATE NIGHT</h1>\n              <p class=\"color-secondary\">Not Set! Add a reminder now</p>\n            </div>\n          </ion-label>\n          <ion-button icon-only fill=\"clear\" size=\"large\" slot=\"end\"><ion-icon color=\"secondary\" name=\"chevron-forward-outline\"></ion-icon></ion-button>\n        </ion-item>\n      </ion-card>\n  \n      <ion-card class=\"reminder\">\n        <ion-item lines=\"none\">\n          <ion-label color=\"primary\">\n            <ion-icon class=\"icon-start\" name=\"checkmark-circle-outline\" color=\"primary\" slot=\"start\"></ion-icon>\n            <div>\n              <h1>NEXT DATE NIGHT</h1>\n              <p class=\"color-dark italic\">Not Set! Add a reminder now</p>\n            </div>\n          </ion-label>\n          <ion-button icon-only fill=\"clear\" size=\"large\" slot=\"end\"><ion-icon color=\"secondary\" name=\"chevron-forward-outline\"></ion-icon></ion-button>\n        </ion-item>\n      </ion-card>\n\n      <ion-card class=\"reminder\">\n        <ion-item lines=\"none\" routerLink=\"/home/profiles\" detail=\"false\">\n          <ion-label color=\"primary\">\n            <ion-icon class=\"icon-start\" name=\"person-outline\" color=\"primary\" slot=\"start\"></ion-icon>\n            <div>\n              <h1>SPOUSE PROFILE</h1>\n              <p class=\"color-dark italic\">Learn anything new about your spouse recently? Make a note</p>\n            </div>\n          </ion-label>\n          <ion-button icon-only fill=\"clear\" size=\"large\" slot=\"end\"><ion-icon color=\"secondary\" name=\"chevron-forward-outline\"></ion-icon></ion-button>\n        </ion-item>\n      </ion-card>\n\n      <ion-card class=\"reminder\">\n        <ion-item lines=\"none\">\n          <ion-label color=\"primary\">\n            <ion-icon class=\"icon-start\" name=\"wifi-outline\" color=\"primary\" slot=\"start\"></ion-icon>\n            <div>\n              <h1>PODCAST</h1>\n              <p class=\"color-dark italic\">Listen now to find inspiration</p>\n            </div>\n          </ion-label>\n          <ion-button icon-only fill=\"clear\" size=\"large\" slot=\"end\"><ion-icon color=\"secondary\" name=\"chevron-forward-outline\"></ion-icon></ion-button>\n        </ion-item>\n      </ion-card>\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/interest/interest-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/interest/interest-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: InterestPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterestPageRoutingModule", function() { return InterestPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _interest_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interest.page */ "./src/app/pages/interest/interest.page.ts");




const routes = [
    {
        path: '',
        component: _interest_page__WEBPACK_IMPORTED_MODULE_3__["InterestPage"]
    }
];
let InterestPageRoutingModule = class InterestPageRoutingModule {
};
InterestPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InterestPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/interest/interest.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/interest/interest.module.ts ***!
  \***************************************************/
/*! exports provided: InterestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterestPageModule", function() { return InterestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _interest_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interest-routing.module */ "./src/app/pages/interest/interest-routing.module.ts");
/* harmony import */ var _interest_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interest.page */ "./src/app/pages/interest/interest.page.ts");







let InterestPageModule = class InterestPageModule {
};
InterestPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _interest_routing_module__WEBPACK_IMPORTED_MODULE_5__["InterestPageRoutingModule"]
        ],
        declarations: [_interest_page__WEBPACK_IMPORTED_MODULE_6__["InterestPage"]]
    })
], InterestPageModule);



/***/ }),

/***/ "./src/app/pages/interest/interest.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/interest/interest.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".interest {\n  --background: url(\"/assets/images/couple.png\") 0 0/100% 70% no-repeat;\n}\n.interest .page-slogan {\n  font-size: 30px;\n  margin-top: 100px;\n  margin-bottom: 60px;\n  background: rgba(255, 255, 255, 0.61);\n  background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(255, 255, 255, 0.61)), color-stop(47%, rgba(246, 246, 246, 0.51)), color-stop(100%, rgba(21, 96, 150, 0.4)));\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.61) 0%, rgba(246, 246, 246, 0.51) 47%, rgba(21, 96, 150, 0.4) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#ffffff\", endColorstr=\"#156096\", GradientType=0 );\n}\n.interest .reminder {\n  margin: 5px !important;\n  padding: 13px 0;\n  margin-bottom: 20px !important;\n}\n.interest .reminder ion-label {\n  white-space: normal !important;\n  display: flex;\n}\n.interest .reminder ion-label .icon-start {\n  width: 30px;\n  font-size: 23px;\n  margin-right: 10px;\n  margin-top: 5px;\n}\n.interest .reminder h1 {\n  font-size: 20px;\n  font-weight: 200;\n  padding-bottom: 5px;\n}\n.interest .reminder p {\n  font-size: 14px;\n  font-weight: 300;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdGFuZ3Bvcy9BcHBzL21lc3N5ZmFtaWx5cHJvamVjdC9tZXNzeWZhbWlseXByb2plY3Qvc3JjL2FwcC9wYWdlcy9pbnRlcmVzdC9pbnRlcmVzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2ludGVyZXN0L2ludGVyZXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFFQUFBO0FDQ0o7QURDSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBRUEscUNBQUE7RUFFQSxvTEFBQTtFQUlBLGdJQUFBO0VBQ0Esb0hBQUE7QUNBUjtBREdJO0VBQ0ksc0JBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUNEUjtBREdRO0VBQ0ksOEJBQUE7RUFDQSxhQUFBO0FDRFo7QURFWTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQWhCO0FER1E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0RaO0FER1E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNEWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ludGVyZXN0L2ludGVyZXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnRlcmVzdCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2NvdXBsZS5wbmcnKSAwIDAvMTAwJSA3MCUgbm8tcmVwZWF0O1xuICAgIFxuICAgIC5wYWdlLXNsb2dhbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG5cbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjYxKTtcbiAgICAgICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDAuNjEpIDAlLCByZ2JhKDI0NiwyNDYsMjQ2LDAuNTEpIDQ3JSwgcmdiYSgyMSw5NiwxNTAsMC40KSAxMDAlKTtcbiAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCUsIHJnYmEoMjU1LDI1NSwyNTUsMC42MSkpLCBjb2xvci1zdG9wKDQ3JSwgcmdiYSgyNDYsMjQ2LDI0NiwwLjUxKSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiYSgyMSw5NiwxNTAsMC40KSkpO1xuICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LDI1NSwyNTUsMC42MSkgMCUsIHJnYmEoMjQ2LDI0NiwyNDYsMC41MSkgNDclLCByZ2JhKDIxLDk2LDE1MCwwLjQpIDEwMCUpO1xuICAgICAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDAuNjEpIDAlLCByZ2JhKDI0NiwyNDYsMjQ2LDAuNTEpIDQ3JSwgcmdiYSgyMSw5NiwxNTAsMC40KSAxMDAlKTtcbiAgICAgICAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LDI1NSwyNTUsMC42MSkgMCUsIHJnYmEoMjQ2LDI0NiwyNDYsMC41MSkgNDclLCByZ2JhKDIxLDk2LDE1MCwwLjQpIDEwMCUpO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwyNTUsMjU1LDAuNjEpIDAlLCByZ2JhKDI0NiwyNDYsMjQ2LDAuNTEpIDQ3JSwgcmdiYSgyMSw5NiwxNTAsMC40KSAxMDAlKTtcbiAgICAgICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNmZmZmZmYnLCBlbmRDb2xvcnN0cj0nIzE1NjA5NicsIEdyYWRpZW50VHlwZT0wICk7XG4gICAgfVxuICAgIFxuICAgIC5yZW1pbmRlciB7IFxuICAgICAgICBtYXJnaW46IDVweCAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nOiAxM3B4IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHggIWltcG9ydGFudDtcbiAgICAgICAgXG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgLmljb24tc3RhcnQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIuaW50ZXJlc3Qge1xuICAtLWJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2NvdXBsZS5wbmdcIikgMCAwLzEwMCUgNzAlIG5vLXJlcGVhdDtcbn1cbi5pbnRlcmVzdCAucGFnZS1zbG9nYW4ge1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjEpO1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MSkgMCUsIHJnYmEoMjQ2LCAyNDYsIDI0NiwgMC41MSkgNDclLCByZ2JhKDIxLCA5NiwgMTUwLCAwLjQpIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYxKSksIGNvbG9yLXN0b3AoNDclLCByZ2JhKDI0NiwgMjQ2LCAyNDYsIDAuNTEpKSwgY29sb3Itc3RvcCgxMDAlLCByZ2JhKDIxLCA5NiwgMTUwLCAwLjQpKSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYxKSAwJSwgcmdiYSgyNDYsIDI0NiwgMjQ2LCAwLjUxKSA0NyUsIHJnYmEoMjEsIDk2LCAxNTAsIDAuNCkgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MSkgMCUsIHJnYmEoMjQ2LCAyNDYsIDI0NiwgMC41MSkgNDclLCByZ2JhKDIxLCA5NiwgMTUwLCAwLjQpIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYxKSAwJSwgcmdiYSgyNDYsIDI0NiwgMjQ2LCAwLjUxKSA0NyUsIHJnYmEoMjEsIDk2LCAxNTAsIDAuNCkgMTAwJSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MSkgMCUsIHJnYmEoMjQ2LCAyNDYsIDI0NiwgMC41MSkgNDclLCByZ2JhKDIxLCA5NiwgMTUwLCAwLjQpIDEwMCUpO1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj1cIiNmZmZmZmZcIiwgZW5kQ29sb3JzdHI9XCIjMTU2MDk2XCIsIEdyYWRpZW50VHlwZT0wICk7XG59XG4uaW50ZXJlc3QgLnJlbWluZGVyIHtcbiAgbWFyZ2luOiA1cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTNweCAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG4uaW50ZXJlc3QgLnJlbWluZGVyIGlvbi1sYWJlbCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5pbnRlcmVzdCAucmVtaW5kZXIgaW9uLWxhYmVsIC5pY29uLXN0YXJ0IHtcbiAgd2lkdGg6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uaW50ZXJlc3QgLnJlbWluZGVyIGgxIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogMjAwO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuLmludGVyZXN0IC5yZW1pbmRlciBwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/interest/interest.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/interest/interest.page.ts ***!
  \*************************************************/
/*! exports provided: InterestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterestPage", function() { return InterestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let InterestPage = class InterestPage {
    constructor() { }
    ngOnInit() {
    }
};
InterestPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-interest',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./interest.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/interest/interest.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./interest.page.scss */ "./src/app/pages/interest/interest.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], InterestPage);



/***/ })

}]);
//# sourceMappingURL=pages-interest-interest-module-es2015.js.map