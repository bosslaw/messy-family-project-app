function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-check-in-check-in-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/check-in/check-in.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/check-in/check-in.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCheckInCheckInPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"secondary\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>CHECK IN</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/check-in/check-in-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/check-in/check-in-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: CheckInPageRoutingModule */

  /***/
  function srcAppPagesCheckInCheckInRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckInPageRoutingModule", function () {
      return CheckInPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _check_in_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./check-in.page */
    "./src/app/pages/check-in/check-in.page.ts");

    var routes = [{
      path: '',
      component: _check_in_page__WEBPACK_IMPORTED_MODULE_3__["CheckInPage"]
    }];

    var CheckInPageRoutingModule = function CheckInPageRoutingModule() {
      _classCallCheck(this, CheckInPageRoutingModule);
    };

    CheckInPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CheckInPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/check-in/check-in.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/check-in/check-in.module.ts ***!
    \***************************************************/

  /*! exports provided: CheckInPageModule */

  /***/
  function srcAppPagesCheckInCheckInModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckInPageModule", function () {
      return CheckInPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _check_in_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./check-in-routing.module */
    "./src/app/pages/check-in/check-in-routing.module.ts");
    /* harmony import */


    var _check_in_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./check-in.page */
    "./src/app/pages/check-in/check-in.page.ts");

    var CheckInPageModule = function CheckInPageModule() {
      _classCallCheck(this, CheckInPageModule);
    };

    CheckInPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _check_in_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckInPageRoutingModule"]],
      declarations: [_check_in_page__WEBPACK_IMPORTED_MODULE_6__["CheckInPage"]]
    })], CheckInPageModule);
    /***/
  },

  /***/
  "./src/app/pages/check-in/check-in.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/check-in/check-in.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCheckInCheckInPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoZWNrLWluL2NoZWNrLWluLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/check-in/check-in.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/check-in/check-in.page.ts ***!
    \*************************************************/

  /*! exports provided: CheckInPage */

  /***/
  function srcAppPagesCheckInCheckInPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckInPage", function () {
      return CheckInPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CheckInPage = /*#__PURE__*/function () {
      function CheckInPage() {
        _classCallCheck(this, CheckInPage);
      }

      _createClass(CheckInPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CheckInPage;
    }();

    CheckInPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-check-in',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./check-in.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/check-in/check-in.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./check-in.page.scss */
      "./src/app/pages/check-in/check-in.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], CheckInPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-check-in-check-in-module-es5.js.map