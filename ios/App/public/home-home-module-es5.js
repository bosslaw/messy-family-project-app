function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
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


    __webpack_exports__["default"] = "<ion-card class=\"blog-thumbnail\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"4\" *ngIf=\"post.media_url\">\n        <ion-img class=\"ion-shadow\" [src]=\"post.media_url\"></ion-img>\n      </ion-col>\n      <ion-col [size]=\"post.media_url ? 8 : ''\">\n        <ion-item lines=\"none\">\n          <ion-label color=\"primary\">\n            <h1 (click)=\"viewPost(post)\" [innerHTML]=\"post.title.rendered\"></h1>\n            <p class=\"color-medium italic\">\n              <ion-icon name=\"time-outline\"></ion-icon> {{ post.date_gmt | date }}\n              <ion-badge color=\"medium\" *ngFor=\"let category of post.categories\">{{category}}</ion-badge>\n            </p>\n            <ion-buttons >\n              <ion-button fill=\"solid\" size=\"small\" color=\"secondary\" (click)=\"viewPost(post)\">\n                READ MORE\n              </ion-button>\n              <!-- <ion-button fill=\"solid\" size=\"small\" color=\"secondary\">\n                LISTEN NOW\n              </ion-button> -->\n            </ion-buttons>\n          </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-card>\n\n<!-- <ion-card *ngFor=\"let post of posts\">\n    <ion-card-header>\n      <ion-card-title [innerHTML]=\"post.title.rendered\"></ion-card-title>\n      <ion-card-subtitle>{{ post.date_gmt | date }}</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <img [src]=\"post.media_url\">\n      <div [innerHTML]=\"post.excerpt.rendered\"></div>\n      <ion-button expand=\"full\" fill=\"clear\" [routerLink]=\"['/home/', 'blog', post.id]\" text-right>Read More...</ion-button>\n    </ion-card-content>\n  </ion-card> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"home\">\n      <ion-icon name=\"logo-electron\"></ion-icon>\n      <ion-label>Home</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"calendar\">\n      <ion-icon name=\"calendar-outline\"></ion-icon>\n      <ion-label>Calendar</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"profiles\">\n      <ion-icon name=\"people-outline\"></ion-icon>\n      <ion-label>Profiles</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"check-in\">\n      <ion-icon name=\"location-outline\"></ion-icon>\n      <ion-label>Check In</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"podcast\">\n      <ion-icon name=\"wifi-outline\"></ion-icon>\n      <ion-label>Podcast</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/interest-list/interest-list.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/interest-list/interest-list.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesInterestListInterestListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"secondary\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>catholic family app</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <app-blog-thumbnails *ngFor=\"let post of posts\" [post]=\"post\" (postClicked)=\"viewPost($event)\"></app-blog-thumbnails>\n\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadMore($event)\">\n    <ion-infinite-scroll-content loadingText=\"Loading more posts...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n";
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


    __webpack_exports__["default"] = ".blog-thumbnail {\n  margin: 10px 5px !important;\n}\n.blog-thumbnail ion-img img {\n  border-radius: 3px !important;\n}\n.blog-thumbnail ion-item {\n  --padding-start: 5px !important;\n}\n.blog-thumbnail ion-item ion-label {\n  white-space: pre-wrap;\n}\n.blog-thumbnail ion-item ion-label h1 {\n  font-size: 14px;\n  font-weight: bold;\n  padding-bottom: 10px;\n  font-family: Montserrat;\n  white-space: pre-wrap;\n}\n.blog-thumbnail ion-item ion-label p {\n  font-size: 10px;\n  display: flex;\n  align-items: center;\n}\n.blog-thumbnail ion-item ion-label p ion-icon {\n  margin-right: 5px;\n}\n.blog-thumbnail ion-item ion-label p ion-badge {\n  font-style: normal !important;\n  font-weight: normal;\n  margin-left: 10px;\n  font-size: 10px;\n}\n.blog-thumbnail ion-item ion-label ion-buttons {\n  margin-top: 10px;\n}\n.blog-thumbnail ion-item ion-label ion-buttons ion-button {\n  font-size: 12px;\n  padding: 2px 5px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdGFuZ3Bvcy9BcHBzL21lc3N5ZmFtaWx5cHJvamVjdC9tZXNzeWZhbWlseXByb2plY3Qvc3JjL2FwcC9jb21wb25lbnRzL2Jsb2ctdGh1bWJuYWlscy9ibG9nLXRodW1ibmFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYmxvZy10aHVtYm5haWxzL2Jsb2ctdGh1bWJuYWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0FDQ0o7QURDUTtFQUNJLDZCQUFBO0FDQ1o7QURFSTtFQUNJLCtCQUFBO0FDQVI7QURDUTtFQUNJLHFCQUFBO0FDQ1o7QURBWTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQ0VoQjtBREFZO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0VoQjtBRERnQjtFQUNJLGlCQUFBO0FDR3BCO0FERGdCO0VBQ0ksNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0dwQjtBREFZO0VBQ0ksZ0JBQUE7QUNFaEI7QUREZ0I7RUFDSSxlQUFBO0VBQ0EsMkJBQUE7QUNHcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Jsb2ctdGh1bWJuYWlscy9ibG9nLXRodW1ibmFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvZy10aHVtYm5haWwge1xuICAgIG1hcmdpbjogMTBweCA1cHggIWltcG9ydGFudDtcbiAgICBpb24taW1nIHtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpb24tYmFkZ2Uge1xuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24tYnV0dG9ucyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHggNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG59IiwiLmJsb2ctdGh1bWJuYWlsIHtcbiAgbWFyZ2luOiAxMHB4IDVweCAhaW1wb3J0YW50O1xufVxuLmJsb2ctdGh1bWJuYWlsIGlvbi1pbWcgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XG59XG4uYmxvZy10aHVtYm5haWwgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xufVxuLmJsb2ctdGh1bWJuYWlsIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cbi5ibG9nLXRodW1ibmFpbCBpb24taXRlbSBpb24tbGFiZWwgaDEge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cbi5ibG9nLXRodW1ibmFpbCBpb24taXRlbSBpb24tbGFiZWwgcCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5ibG9nLXRodW1ibmFpbCBpb24taXRlbSBpb24tbGFiZWwgcCBpb24taWNvbiB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLmJsb2ctdGh1bWJuYWlsIGlvbi1pdGVtIGlvbi1sYWJlbCBwIGlvbi1iYWRnZSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLmJsb2ctdGh1bWJuYWlsIGlvbi1pdGVtIGlvbi1sYWJlbCBpb24tYnV0dG9ucyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uYmxvZy10aHVtYm5haWwgaW9uLWl0ZW0gaW9uLWxhYmVsIGlvbi1idXR0b25zIGlvbi1idXR0b24ge1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDJweCA1cHggIWltcG9ydGFudDtcbn0iXX0= */";
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

        this.postClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(BlogThumbnailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "viewPost",
        value: function viewPost(post) {
          this.postClicked.emit(post);
        }
      }]);

      return BlogThumbnailsComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], BlogThumbnailsComponent.prototype, "post", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], BlogThumbnailsComponent.prototype, "postClicked", void 0);
    BlogThumbnailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-blog-thumbnails',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./blog-thumbnails.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/blog-thumbnails/blog-thumbnails.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
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
  "./src/app/guards/home.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/guards/home.guard.ts ***!
    \**************************************/

  /*! exports provided: HomeGuard */

  /***/
  function srcAppGuardsHomeGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeGuard", function () {
      return HomeGuard;
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


    var _config_auth_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../config/auth-constants */
    "./src/app/config/auth-constants.ts");
    /* harmony import */


    var _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/storage/storage.service */
    "./src/app/services/storage/storage.service.ts");

    var HomeGuard = /*#__PURE__*/function () {
      function HomeGuard(storageServices, router) {
        _classCallCheck(this, HomeGuard);

        this.storageServices = storageServices;
        this.router = router;
      }

      _createClass(HomeGuard, [{
        key: "canActivate",
        value: function canActivate() {
          var _this = this;

          return new Promise(function (resolve) {
            _this.storageServices.get(_config_auth_constants__WEBPACK_IMPORTED_MODULE_3__["AuthConstants"].AUTH).then(function (res) {
              if (res) {
                resolve(true);
              } else {
                _this.router.navigate(['']);

                resolve(false);
              }
            })["catch"](function (err) {
              resolve(false);
            });
          });
        }
      }]);

      return HomeGuard;
    }();

    HomeGuard.ctorParameters = function () {
      return [{
        type: _services_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    HomeGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], HomeGuard);
    /***/
  },

  /***/
  "./src/app/home/home-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/home-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: HomePageRoutingModule */

  /***/
  function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
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


    var _guards_home_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../guards/home.guard */
    "./src/app/guards/home.guard.ts");
    /* harmony import */


    var _pages_interest_list_interest_list_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../pages/interest-list/interest-list.module */
    "./src/app/pages/interest-list/interest-list.module.ts");
    /* harmony import */


    var _resolvers_userData_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../resolvers/userData.resolver */
    "./src/app/resolvers/userData.resolver.ts");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var routes = [{
      path: 'home',
      component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"],
      canActivate: [_guards_home_guard__WEBPACK_IMPORTED_MODULE_3__["HomeGuard"]],
      resolve: {
        userData: _resolvers_userData_resolver__WEBPACK_IMPORTED_MODULE_5__["UserDataResolver"]
      },
      children: [{
        path: 'home',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-home-home-module */
          [__webpack_require__.e("default~pages-calendar-calendar-module~pages-home-home-module~pages-profiles-profiles-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-home-home-module")]).then(__webpack_require__.bind(null,
          /*! ../pages/home/home.module */
          "./src/app/pages/home/home.module.ts")).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: 'calendar',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-calendar-calendar-module */
          [__webpack_require__.e("default~pages-calendar-calendar-module~pages-home-home-module~pages-profiles-profiles-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-calendar-calendar-module")]).then(__webpack_require__.bind(null,
          /*! ../pages/calendar/calendar.module */
          "./src/app/pages/calendar/calendar.module.ts")).then(function (m) {
            return m.CalendarPageModule;
          });
        }
      }, {
        path: 'profiles',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-profiles-profiles-module */
          [__webpack_require__.e("default~pages-calendar-calendar-module~pages-home-home-module~pages-profiles-profiles-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-profiles-profiles-module")]).then(__webpack_require__.bind(null,
          /*! ../pages/profiles/profiles.module */
          "./src/app/pages/profiles/profiles.module.ts")).then(function (m) {
            return m.ProfilesPageModule;
          });
        }
      }, {
        path: 'check-in',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-check-in-check-in-module */
          "pages-check-in-check-in-module").then(__webpack_require__.bind(null,
          /*! ../pages/check-in/check-in.module */
          "./src/app/pages/check-in/check-in.module.ts")).then(function (m) {
            return m.CheckInPageModule;
          });
        }
      }, {
        path: 'podcast',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-podcast-podcast-module */
          "pages-podcast-podcast-module").then(__webpack_require__.bind(null,
          /*! ../pages/podcast/podcast.module */
          "./src/app/pages/podcast/podcast.module.ts")).then(function (m) {
            return m.PodcastPageModule;
          });
        }
      }, {
        path: 'interest',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-interest-interest-module */
          "pages-interest-interest-module").then(__webpack_require__.bind(null,
          /*! ../pages/interest/interest.module */
          "./src/app/pages/interest/interest.module.ts")).then(function (m) {
            return m.InterestPageModule;
          });
        }
      }, {
        path: 'settings',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-settings-settings-module */
          "pages-settings-settings-module").then(__webpack_require__.bind(null,
          /*! ../pages/settings/settings.module */
          "./src/app/pages/settings/settings.module.ts")).then(function (m) {
            return m.SettingsPageModule;
          });
        }
      }, {
        path: 'account-edit',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-account-edit-account-edit-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-account-edit-account-edit-module")]).then(__webpack_require__.bind(null,
          /*! ../pages/account-edit/account-edit.module */
          "./src/app/pages/account-edit/account-edit.module.ts")).then(function (m) {
            return m.AccountEditPageModule;
          });
        }
      }, {
        path: 'blog/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-blog-view-blog-view-module */
          "pages-blog-view-blog-view-module").then(__webpack_require__.bind(null,
          /*! ../pages/blog-view/blog-view.module */
          "./src/app/pages/blog-view/blog-view.module.ts")).then(function (m) {
            return m.BlogViewPageModule;
          });
        }
      }, {
        path: 'interest-list/:id',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ../pages/interest-list/interest-list.module */
          "./src/app/pages/interest-list/interest-list.module.ts")).then(function (m) {
            return _pages_interest_list_interest_list_module__WEBPACK_IMPORTED_MODULE_4__["InterestListPageModule"];
          });
        }
      }, {
        path: 'event-details',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-event-details-event-details-module */
          "common").then(__webpack_require__.bind(null,
          /*! ../pages/event-details/event-details.module */
          "./src/app/pages/event-details/event-details.module.ts")).then(function (m) {
            return m.EventDetailsPageModule;
          });
        }
      }, {
        path: '',
        redirectTo: '/home/home',
        pathMatch: 'full'
      }]
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
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
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


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/home/home-routing.module.ts");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
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

    var HomePage = /*#__PURE__*/function () {
      function HomePage() {
        _classCallCheck(this, HomePage);
      }

      _createClass(HomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomePage;
    }();

    HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], HomePage);
    /***/
  },

  /***/
  "./src/app/pages/interest-list/interest-list-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/interest-list/interest-list-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: InterestListPageRoutingModule */

  /***/
  function srcAppPagesInterestListInterestListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InterestListPageRoutingModule", function () {
      return InterestListPageRoutingModule;
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


    var _interest_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./interest-list.page */
    "./src/app/pages/interest-list/interest-list.page.ts");

    var routes = [{
      path: '',
      component: _interest_list_page__WEBPACK_IMPORTED_MODULE_3__["InterestListPage"]
    }];

    var InterestListPageRoutingModule = function InterestListPageRoutingModule() {
      _classCallCheck(this, InterestListPageRoutingModule);
    };

    InterestListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], InterestListPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/interest-list/interest-list.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/interest-list/interest-list.module.ts ***!
    \*************************************************************/

  /*! exports provided: InterestListPageModule */

  /***/
  function srcAppPagesInterestListInterestListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InterestListPageModule", function () {
      return InterestListPageModule;
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


    var _interest_list_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./interest-list-routing.module */
    "./src/app/pages/interest-list/interest-list-routing.module.ts");
    /* harmony import */


    var _interest_list_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./interest-list.page */
    "./src/app/pages/interest-list/interest-list.page.ts");

    var InterestListPageModule = function InterestListPageModule() {
      _classCallCheck(this, InterestListPageModule);
    };

    InterestListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _interest_list_routing_module__WEBPACK_IMPORTED_MODULE_6__["InterestListPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]],
      declarations: [_interest_list_page__WEBPACK_IMPORTED_MODULE_7__["InterestListPage"]]
    })], InterestListPageModule);
    /***/
  },

  /***/
  "./src/app/pages/interest-list/interest-list.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/pages/interest-list/interest-list.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesInterestListInterestListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ludGVyZXN0LWxpc3QvaW50ZXJlc3QtbGlzdC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/interest-list/interest-list.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/interest-list/interest-list.page.ts ***!
    \***********************************************************/

  /*! exports provided: InterestListPage */

  /***/
  function srcAppPagesInterestListInterestListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InterestListPage", function () {
      return InterestListPage;
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


    var src_app_services_wordpress_wordpress_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/wordpress/wordpress.service */
    "./src/app/services/wordpress/wordpress.service.ts");

    var InterestListPage = /*#__PURE__*/function () {
      function InterestListPage(wp, route, router) {
        _classCallCheck(this, InterestListPage);

        this.wp = wp;
        this.route = route;
        this.router = router;
        this.posts = [];
        this.page = 1;
      }

      _createClass(InterestListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.tagId = this.route.snapshot.paramMap.get('id');

          if (this.tagId) {
            this.loadPosts();
          }
        }
      }, {
        key: "viewPost",
        value: function viewPost(post) {
          this.router.navigate(['/home/blog', post.id]);
        }
      }, {
        key: "loadPosts",
        value: function loadPosts() {
          var _this2 = this;

          this.wp.getPostsByTag(this.page, this.tagId).subscribe(function (res) {
            _this2.count = _this2.wp.totalPosts;
            _this2.posts = res;
          });
        }
      }, {
        key: "loadMore",
        value: function loadMore(event) {
          var _this3 = this;

          this.page++;
          this.wp.getPostsByTag(this.page, this.tagId).subscribe(function (res) {
            _this3.posts = [].concat(_toConsumableArray(_this3.posts), _toConsumableArray(res));
            event.target.complete(); // Disable infinite loading when maximum reached

            if (_this3.page === _this3.wp.pages) {
              event.target.disabled = true;
            }
          });
        }
      }]);

      return InterestListPage;
    }();

    InterestListPage.ctorParameters = function () {
      return [{
        type: src_app_services_wordpress_wordpress_service__WEBPACK_IMPORTED_MODULE_3__["WordpressService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    InterestListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-interest-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./interest-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/interest-list/interest-list.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./interest-list.page.scss */
      "./src/app/pages/interest-list/interest-list.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_wordpress_wordpress_service__WEBPACK_IMPORTED_MODULE_3__["WordpressService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], InterestListPage);
    /***/
  },

  /***/
  "./src/app/resolvers/userData.resolver.ts":
  /*!************************************************!*\
    !*** ./src/app/resolvers/userData.resolver.ts ***!
    \************************************************/

  /*! exports provided: UserDataResolver */

  /***/
  function srcAppResolversUserDataResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDataResolver", function () {
      return UserDataResolver;
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


    var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");

    var UserDataResolver = /*#__PURE__*/function () {
      function UserDataResolver(authService) {
        _classCallCheck(this, UserDataResolver);

        this.authService = authService;
      }

      _createClass(UserDataResolver, [{
        key: "resolve",
        value: function resolve() {
          return this.authService.getUserData();
        }
      }]);

      return UserDataResolver;
    }();

    UserDataResolver.ctorParameters = function () {
      return [{
        type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    UserDataResolver = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])], UserDataResolver);
    /***/
  },

  /***/
  "./src/app/services/wordpress/wordpress.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/services/wordpress/wordpress.service.ts ***!
    \*********************************************************/

  /*! exports provided: WordpressService */

  /***/
  function srcAppServicesWordpressWordpressServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WordpressService", function () {
      return WordpressService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var WordpressService = /*#__PURE__*/function () {
      function WordpressService(http) {
        _classCallCheck(this, WordpressService);

        this.http = http;
        this.url = "https://www.messyfamilyproject.org/wp-json/wp/v2/";
        this.totalPosts = null;
      }

      _createClass(WordpressService, [{
        key: "getPosts",
        value: function getPosts() {
          var _this4 = this;

          var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          var options = {
            observe: 'response',
            params: {
              per_page: '5',
              page: '' + page
            }
          };
          return this.http.get("".concat(this.url, "posts?_embed"), options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) {
            _this4.pages = resp['headers'].get('x-wp-totalpages');
            _this4.totalPosts = resp['headers'].get('x-wp-total');
            var data = resp['body'];

            var _iterator = _createForOfIteratorHelper(data),
                _step;

            try {
              var _loop = function _loop() {
                var post = _step.value;
                post.categories = [];

                if (post['_embedded']['wp:featuredmedia'] !== undefined) {
                  post.media_url = post['_embedded']['wp:featuredmedia'][0]['media_details'].sizes['thumbnail'].source_url;
                }

                if (post['_embedded']['wp:term'].length) {
                  post['_embedded']['wp:term'].forEach(function (a) {
                    if (a.length) {
                      a.forEach(function (b) {
                        if (b.taxonomy === 'category') {
                          post.categories.push(b.slug);
                        }
                      });
                    }
                  });
                }
              };

              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                _loop();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return data;
          }));
        } //marriage toolkit = 20
        //parenting corner = 21
        //prayer&devotion = 68
        // family culture = 102

      }, {
        key: "getPostsByTag",
        value: function getPostsByTag() {
          var _this5 = this;

          var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          var tagId = arguments.length > 1 ? arguments[1] : undefined;
          var options = {
            observe: 'response',
            params: {
              per_page: '10',
              page: '' + page
            }
          };
          return this.http.get("".concat(this.url, "posts?tags[]=").concat(tagId, "&_embed"), options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) {
            _this5.pages = parseInt(resp['headers'].get('x-wp-totalpages'));
            _this5.totalPosts = resp['headers'].get('x-wp-total');
            var data = resp['body'];

            var _iterator2 = _createForOfIteratorHelper(data),
                _step2;

            try {
              var _loop2 = function _loop2() {
                var post = _step2.value;
                post.categories = [];

                if (post['_embedded']['wp:featuredmedia'] !== undefined && post['_embedded']['wp:featuredmedia'][0]['media_details'] !== undefined) {
                  post.media_url = post['_embedded']['wp:featuredmedia'][0]['media_details'].sizes['thumbnail'].source_url;
                }

                if (post['_embedded']['wp:term'].length) {
                  post['_embedded']['wp:term'].forEach(function (a) {
                    if (a.length) {
                      a.forEach(function (b) {
                        if (b.taxonomy === 'category') {
                          post.categories.push(b.slug);
                        }
                      });
                    }
                  });
                }
              };

              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                _loop2();
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            return data;
          }));
        }
      }, {
        key: "getPostContent",
        value: function getPostContent(id) {
          return this.http.get("".concat(this.url, "posts/").concat(id, "?_embed")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (post) {
            if (post['_embedded']['wp:featuredmedia'] !== undefined) {
              post['media_url'] = post['_embedded']['wp:featuredmedia'][0]['media_details'].sizes.medium.source_url;
            }

            return post;
          }));
        }
      }]);

      return WordpressService;
    }();

    WordpressService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    WordpressService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], WordpressService);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map