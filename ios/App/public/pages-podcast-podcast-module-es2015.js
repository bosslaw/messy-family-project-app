(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-podcast-podcast-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/podcast/podcast.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/podcast/podcast.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"secondary\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>PODCAST</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-row>\n    <ion-col size=\"12\" class=\"ion-text-center\">\n      <a target=\"_blank\" href=\"https://podcasts.google.com/feed/aHR0cDovL3d3dy5tZXNzeXBhcmVudGluZy5vcmcvZmVlZC9wb2RjYXN0Lw\">\n        <img  src=\"/assets/images/listen_google.png\">\n      </a>\n    </ion-col>\n    <ion-col size=\"12\"  class=\"ion-text-center\">\n      <a target=\"_blank\" href=\"https://podcasts.apple.com/us/podcast/messy-parenting-catholic-conversations-on-marriage/id957216506?mt=2\">\n        <img src=\"/assets/images/listen_apple.png\">\n      </a>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/podcast/podcast-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/podcast/podcast-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PodcastPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PodcastPageRoutingModule", function() { return PodcastPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _podcast_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./podcast.page */ "./src/app/pages/podcast/podcast.page.ts");




const routes = [
    {
        path: '',
        component: _podcast_page__WEBPACK_IMPORTED_MODULE_3__["PodcastPage"]
    }
];
let PodcastPageRoutingModule = class PodcastPageRoutingModule {
};
PodcastPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PodcastPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/podcast/podcast.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/podcast/podcast.module.ts ***!
  \*************************************************/
/*! exports provided: PodcastPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PodcastPageModule", function() { return PodcastPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _podcast_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./podcast-routing.module */ "./src/app/pages/podcast/podcast-routing.module.ts");
/* harmony import */ var _podcast_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./podcast.page */ "./src/app/pages/podcast/podcast.page.ts");







let PodcastPageModule = class PodcastPageModule {
};
PodcastPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _podcast_routing_module__WEBPACK_IMPORTED_MODULE_5__["PodcastPageRoutingModule"]
        ],
        declarations: [_podcast_page__WEBPACK_IMPORTED_MODULE_6__["PodcastPage"]]
    })
], PodcastPageModule);



/***/ }),

/***/ "./src/app/pages/podcast/podcast.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/podcast/podcast.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BvZGNhc3QvcG9kY2FzdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/podcast/podcast.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/podcast/podcast.page.ts ***!
  \***********************************************/
/*! exports provided: PodcastPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PodcastPage", function() { return PodcastPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PodcastPage = class PodcastPage {
    constructor() { }
    ngOnInit() {
    }
};
PodcastPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-podcast',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./podcast.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/podcast/podcast.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./podcast.page.scss */ "./src/app/pages/podcast/podcast.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], PodcastPage);



/***/ })

}]);
//# sourceMappingURL=pages-podcast-podcast-module-es2015.js.map