function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/blog-thumbnails/blog-thumbnails.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/blog-thumbnails/blog-thumbnails.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsBlogThumbnailsBlogThumbnailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-card class=\"blog-thumbnail\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"4\">\n        <ion-img class=\"ion-shadow\" src=\"https://via.placeholder.com/200\"></ion-img>\n      </ion-col>\n      <ion-col size=\"8\">\n        <ion-item lines=\"none\">\n          <ion-label color=\"primary\">\n            <h1>Special Time with Abby</h1>\n            <p class=\"color-medium italic\">\n              <ion-icon name=\"time-outline\"></ion-icon> Aug 21, 2019\n              <ion-badge color=\"medium\">faith</ion-badge>\n            </p>\n            <ion-buttons >\n              <ion-button fill=\"solid\" size=\"small\" color=\"secondary\">\n                READ MORE\n              </ion-button>\n              <ion-button fill=\"solid\" size=\"small\" color=\"secondary\">\n                LISTEN NOW\n              </ion-button>\n            </ion-buttons>\n          </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"secondary\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>HOME</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"home ion-padding-horizontal\">\n\n  <ion-list-header>\n    <ion-label color=\"medium\"> <ion-icon  name=\"notifications-outline\"></ion-icon> <span>REMINDERS</span></ion-label>\n    <ion-button icon-only color=\"secondary\" size=\"large\" ><ion-icon size=\"large\" name=\"add-circle\"></ion-icon></ion-button>\n  </ion-list-header> \n\n  <ion-card class=\"reminder\">\n    <ion-item lines=\"none\">\n      <ion-label color=\"primary\">\n        <h1>Special Time with Abby</h1>\n        <p class=\"color-dark italic\">Wednesday, Aug 21, 2019</p>\n      </ion-label>\n      <ion-button icon-only fill=\"clear\" size=\"large\" slot=\"end\"><ion-icon color=\"secondary\" name=\"chevron-forward-outline\"></ion-icon></ion-button>\n    </ion-item>\n  </ion-card>\n\n  <ion-list-header>\n    <ion-label color=\"medium\"> <ion-icon  name=\"star-outline\"></ion-icon> <span>TOP INTERESTS</span></ion-label>\n  </ion-list-header> \n\n  <ion-grid class=\"interests\">\n    <ion-row>\n      <ion-col>\n        <ion-card routerLink=\"/home/interest\">\n          <ion-img src=\"https://via.placeholder.com/300x250\"></ion-img>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card routerLink=\"/home/interest\">\n          <ion-img src=\"https://via.placeholder.com/300x250\"></ion-img>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card routerLink=\"/home/interest\">\n          <ion-img src=\"https://via.placeholder.com/300x250\"></ion-img>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card routerLink=\"/home/interest\">\n          <ion-img src=\"https://via.placeholder.com/300x250\"></ion-img>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-list-header>\n    <ion-label color=\"medium\"> <ion-icon  name=\"pulse-outline\"></ion-icon> <span>NEW CONTENT</span></ion-label>\n  </ion-list-header>\n\n  \n  <app-blog-thumbnails></app-blog-thumbnails>\n  <app-blog-thumbnails></app-blog-thumbnails>\n  <app-blog-thumbnails></app-blog-thumbnails>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/components/blog-thumbnails/blog-thumbnails.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/components/blog-thumbnails/blog-thumbnails.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsBlogThumbnailsBlogThumbnailsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".blog-thumbnail {\n  margin: 10px 5px !important;\n}\n.blog-thumbnail ion-img img {\n  border-radius: 3px !important;\n}\n.blog-thumbnail ion-item {\n  --padding-start: 5px !important;\n}\n.blog-thumbnail ion-item ion-label {\n  white-space: pre-wrap;\n}\n.blog-thumbnail ion-item ion-label h1 {\n  font-size: 18px;\n  font-weight: bold;\n  padding-bottom: 10px;\n}\n.blog-thumbnail ion-item ion-label p {\n  display: flex;\n  align-items: center;\n}\n.blog-thumbnail ion-item ion-label p ion-badge {\n  font-style: normal !important;\n  font-weight: normal;\n}\n.blog-thumbnail ion-item ion-label ion-buttons {\n  margin-top: 10px;\n}\n.blog-thumbnail ion-item ion-label ion-buttons ion-button {\n  font-size: 14px;\n  padding: 2px 5px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdGFuZ3Bvcy9BcHBzL21lc3N5ZmFtaWx5cHJvamVjdC9tZXNzeWZhbWlseXByb2plY3Qvc3JjL2FwcC9jb21wb25lbnRzL2Jsb2ctdGh1bWJuYWlscy9ibG9nLXRodW1ibmFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYmxvZy10aHVtYm5haWxzL2Jsb2ctdGh1bWJuYWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0FDQ0o7QURDUTtFQUNJLDZCQUFBO0FDQ1o7QURFSTtFQUNJLCtCQUFBO0FDQVI7QURDUTtFQUNJLHFCQUFBO0FDQ1o7QURBWTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDRWhCO0FEQVk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNFaEI7QUREZ0I7RUFDSSw2QkFBQTtFQUNBLG1CQUFBO0FDR3BCO0FEQVk7RUFDSSxnQkFBQTtBQ0VoQjtBRERnQjtFQUNJLGVBQUE7RUFDQSwyQkFBQTtBQ0dwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvZy10aHVtYm5haWxzL2Jsb2ctdGh1bWJuYWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibG9nLXRodW1ibmFpbCB7XG4gICAgbWFyZ2luOiAxMHB4IDVweCAhaW1wb3J0YW50O1xuICAgIGlvbi1pbWcge1xuICAgICAgICBpbWcge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBpb24tYmFkZ2Uge1xuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24tYnV0dG9ucyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHggNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG59IiwiLmJsb2ctdGh1bWJuYWlsIHtcbiAgbWFyZ2luOiAxMHB4IDVweCAhaW1wb3J0YW50O1xufVxuLmJsb2ctdGh1bWJuYWlsIGlvbi1pbWcgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XG59XG4uYmxvZy10aHVtYm5haWwgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xufVxuLmJsb2ctdGh1bWJuYWlsIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cbi5ibG9nLXRodW1ibmFpbCBpb24taXRlbSBpb24tbGFiZWwgaDEge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5ibG9nLXRodW1ibmFpbCBpb24taXRlbSBpb24tbGFiZWwgcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYmxvZy10aHVtYm5haWwgaW9uLWl0ZW0gaW9uLWxhYmVsIHAgaW9uLWJhZGdlIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4uYmxvZy10aHVtYm5haWwgaW9uLWl0ZW0gaW9uLWxhYmVsIGlvbi1idXR0b25zIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5ibG9nLXRodW1ibmFpbCBpb24taXRlbSBpb24tbGFiZWwgaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMnB4IDVweCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/blog-thumbnails/blog-thumbnails.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/blog-thumbnails/blog-thumbnails.component.ts ***!
    \*************************************************************************/

  /*! exports provided: BlogThumbnailsComponent */

  /***/
  function srcAppComponentsBlogThumbnailsBlogThumbnailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogThumbnailsComponent", function () {
      return BlogThumbnailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BlogThumbnailsComponent = /*#__PURE__*/function () {
      function BlogThumbnailsComponent() {
        _classCallCheck(this, BlogThumbnailsComponent);
      }

      _createClass(BlogThumbnailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BlogThumbnailsComponent;
    }();

    BlogThumbnailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-blog-thumbnails',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./blog-thumbnails.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/blog-thumbnails/blog-thumbnails.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./blog-thumbnails.component.scss */
      "./src/app/components/blog-thumbnails/blog-thumbnails.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], BlogThumbnailsComponent);
    /***/
  },

  /***/
  "./src/app/components/components.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/components.module.ts ***!
    \*************************************************/

  /*! exports provided: ComponentsModule */

  /***/
  function srcAppComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
      return ComponentsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _blog_thumbnails_blog_thumbnails_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./blog-thumbnails/blog-thumbnails.component */
    "./src/app/components/blog-thumbnails/blog-thumbnails.component.ts");

    var ComponentsModule = function ComponentsModule() {
      _classCallCheck(this, ComponentsModule);
    };

    ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_blog_thumbnails_blog_thumbnails_component__WEBPACK_IMPORTED_MODULE_5__["BlogThumbnailsComponent"]],
      exports: [_blog_thumbnails_blog_thumbnails_component__WEBPACK_IMPORTED_MODULE_5__["BlogThumbnailsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]]
    })], ComponentsModule);
    /***/
  },

  /***/
  "./src/app/pages/home/home-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/home/home-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: HomePageRoutingModule */

  /***/
  function srcAppPagesHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
      return HomePageRoutingModule;
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


    var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/pages/home/home.page.ts");

    var routes = [{
      path: '',
      component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }];

    var HomePageRoutingModule = function HomePageRoutingModule() {
      _classCallCheck(this, HomePageRoutingModule);
    };

    HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/home/home.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/home/home.module.ts ***!
    \*******************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppPagesHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/pages/home/home-routing.module.ts");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/pages/home/home.page.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/pages/home/home.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/home/home.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".home ion-list-header ion-label {\n  display: flex;\n  align-items: center;\n}\n.home ion-list-header ion-label span {\n  font-size: 18px;\n  margin-left: 20px;\n}\n.home .reminder {\n  margin: 5px !important;\n  padding: 13px 0;\n}\n.home .reminder h1 {\n  font-size: 20px;\n  font-weight: 200;\n  padding-bottom: 5px;\n}\n.home .interests ion-card {\n  margin: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdGFuZ3Bvcy9BcHBzL21lc3N5ZmFtaWx5cHJvamVjdC9tZXNzeWZhbWlseXByb2plY3Qvc3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDRFo7QURFWTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0FoQjtBREtJO0VBQ0ksc0JBQUE7RUFDQSxlQUFBO0FDSFI7QURJUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDRlo7QURPUTtFQUNJLHNCQUFBO0FDTFoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUge1xuICAgIGlvbi1saXN0LWhlYWRlcntcbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnJlbWluZGVyIHsgXG4gICAgICAgIG1hcmdpbjogNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmc6IDEzcHggMDtcbiAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuaW50ZXJlc3RzIHtcbiAgICAgICAgaW9uLWNhcmQge1xuICAgICAgICAgICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cblxuIiwiLmhvbWUgaW9uLWxpc3QtaGVhZGVyIGlvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaG9tZSBpb24tbGlzdC1oZWFkZXIgaW9uLWxhYmVsIHNwYW4ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLmhvbWUgLnJlbWluZGVyIHtcbiAgbWFyZ2luOiA1cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTNweCAwO1xufVxuLmhvbWUgLnJlbWluZGVyIGgxIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogMjAwO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuLmhvbWUgLmludGVyZXN0cyBpb24tY2FyZCB7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/home/home.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/home/home.page.ts ***!
    \*****************************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppPagesHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");

    var HomePage = /*#__PURE__*/function () {
      function HomePage(authService) {
        _classCallCheck(this, HomePage);

        this.authService = authService;
      }

      _createClass(HomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.authService.userData$.subscribe(function (res) {
            _this.displayUserData = res;
          });
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/pages/home/home.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-home-home-module-es5.js.map