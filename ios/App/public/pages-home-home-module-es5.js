function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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


    __webpack_exports__["default"] = "<ion-card class=\"blog-thumbnail\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"4\" *ngIf=\"post.media_url\">\n        <ion-img class=\"ion-shadow\" [src]=\"post.media_url\"></ion-img>\n      </ion-col>\n      <ion-col [size]=\"post.media_url ? 8 : ''\">\n        <ion-item lines=\"none\">\n          <ion-label color=\"primary\">\n            <h1 (click)=\"viewPost(post)\" [innerHTML]=\"post.title.rendered\"></h1>\n            <p class=\"color-medium italic\">\n              <ion-icon name=\"time-outline\"></ion-icon> {{ post.date_gmt | date }}\n              <ion-badge color=\"medium\" *ngFor=\"let category of post.categories\">{{category}}</ion-badge>\n            </p>\n            <ion-buttons >\n              <ion-button fill=\"solid\" size=\"small\" color=\"secondary\" (click)=\"viewPost(post)\">\n                READ MORE\n              </ion-button>\n              <ion-button fill=\"solid\" size=\"small\" color=\"secondary\">\n                LISTEN NOW\n              </ion-button>\n            </ion-buttons>\n          </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-card>\n\n<!-- <ion-card *ngFor=\"let post of posts\">\n    <ion-card-header>\n      <ion-card-title [innerHTML]=\"post.title.rendered\"></ion-card-title>\n      <ion-card-subtitle>{{ post.date_gmt | date }}</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <img [src]=\"post.media_url\">\n      <div [innerHTML]=\"post.excerpt.rendered\"></div>\n      <ion-button expand=\"full\" fill=\"clear\" [routerLink]=\"['/home/', 'blog', post.id]\" text-right>Read More...</ion-button>\n    </ion-card-content>\n  </ion-card> -->";
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


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"secondary\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>HOME</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"home ion-padding-horizontal\">\n\n  <ion-list-header>\n    <ion-label color=\"medium\"> <ion-icon  name=\"notifications-outline\"></ion-icon> <span>REMINDERS</span></ion-label>\n    <ion-button icon-only color=\"secondary\" size=\"large\" ><ion-icon size=\"large\" name=\"add-circle\"></ion-icon></ion-button>\n  </ion-list-header> \n\n  <!-- <ion-card class=\"reminder\">\n    <ion-item lines=\"none\">\n      <ion-label color=\"primary\">\n        <h1>Special Time with Abby</h1>\n        <p class=\"color-dark italic\">Wednesday, Aug 21, 2019</p>\n      </ion-label>\n      <ion-button icon-only fill=\"clear\" size=\"large\" slot=\"end\"><ion-icon color=\"secondary\" name=\"chevron-forward-outline\"></ion-icon></ion-button>\n    </ion-item>\n  </ion-card> -->\n  <div *ngIf=\"latestEvents\">\n    <ion-card class=\"reminder\" *ngFor=\"let event of latestEvents\">\n      <ion-item lines=\"none\" >\n        <ion-label color=\"primary\">\n          <h1>{{event.title}}</h1>\n          <p class=\"color-dark italic\">{{event.start_date | date}}</p>\n        </ion-label>\n        <ion-button icon-only fill=\"clear\" size=\"large\" slot=\"end\" (click)=\"showEvent(event)\"><ion-icon color=\"secondary\" name=\"chevron-forward-outline\"></ion-icon></ion-button>\n      </ion-item>\n    </ion-card>\n  </div>\n  \n  \n\n  <ion-list-header>\n    <ion-label> <ion-icon  name=\"star-outline\"></ion-icon> <span>TOP INTERESTS</span></ion-label>\n  </ion-list-header> \n\n  <ion-grid class=\"interests\">\n    <ion-row>\n      <ion-col>\n        <ion-card routerLink=\"/home/interest\">\n          <ion-img src=\"https://via.placeholder.com/300x250\"></ion-img>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card routerLink=\"/home/interest\">\n          <ion-img src=\"https://via.placeholder.com/300x250\"></ion-img>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card routerLink=\"/home/interest\">\n          <ion-img src=\"https://via.placeholder.com/300x250\"></ion-img>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card routerLink=\"/home/interest\">\n          <ion-img src=\"https://via.placeholder.com/300x250\"></ion-img>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-list-header>\n    <ion-label color=\"medium\"> <ion-icon  name=\"pulse-outline\"></ion-icon> <span>NEW CONTENT</span></ion-label>\n  </ion-list-header>\n\n  <!-- <ion-card *ngFor=\"let post of posts\">\n    <ion-card-header>\n      <ion-card-title [innerHTML]=\"post.title.rendered\"></ion-card-title>\n      <ion-card-subtitle>{{ post.date_gmt | date }}</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <img [src]=\"post.media_url\">\n      <div [innerHTML]=\"post.excerpt.rendered\"></div>\n      <ion-button expand=\"full\" fill=\"clear\" [routerLink]=\"['/home/', 'blog', post.id]\" text-right>Read More...</ion-button>\n    </ion-card-content>\n  </ion-card> -->\n  <app-blog-thumbnails *ngFor=\"let post of posts\" [post]=\"post\" (postClicked)=\"viewPost($event)\"></app-blog-thumbnails>\n  <!-- <app-blog-thumbnails></app-blog-thumbnails>\n  <app-blog-thumbnails></app-blog-thumbnails>\n  <app-blog-thumbnails></app-blog-thumbnails> -->\n</ion-content>\n";
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


    var _event_details_event_details_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../event-details/event-details.module */
    "./src/app/pages/event-details/event-details.module.ts");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/pages/home/home-routing.module.ts");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/pages/home/home.page.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_7__["HomePageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"], _event_details_event_details_module__WEBPACK_IMPORTED_MODULE_6__["EventDetailsPageModule"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_8__["HomePage"]]
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


    __webpack_exports__["default"] = ".home ion-list-header ion-label {\n  color: #4F4F4F;\n  display: flex;\n  align-items: center;\n}\n.home ion-list-header ion-label span {\n  font-size: 18px;\n  margin-left: 20px;\n}\n.home .reminder {\n  margin: 5px !important;\n  padding: 13px 0;\n}\n.home .reminder h1 {\n  font-size: 20px;\n  font-weight: 200;\n  padding-bottom: 5px;\n}\n.home .interests ion-card {\n  margin: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdGFuZ3Bvcy9BcHBzL21lc3N5ZmFtaWx5cHJvamVjdC9tZXNzeWZhbWlseXByb2plY3Qvc3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVRO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0RaO0FERVk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNBaEI7QURLSTtFQUNJLHNCQUFBO0VBQ0EsZUFBQTtBQ0hSO0FESVE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0ZaO0FET1E7RUFDSSxzQkFBQTtBQ0xaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lIHtcbiAgICBpb24tbGlzdC1oZWFkZXJ7XG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBjb2xvcjogIzRGNEY0RjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnJlbWluZGVyIHsgXG4gICAgICAgIG1hcmdpbjogNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmc6IDEzcHggMDtcbiAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuaW50ZXJlc3RzIHtcbiAgICAgICAgaW9uLWNhcmQge1xuICAgICAgICAgICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cblxuIiwiLmhvbWUgaW9uLWxpc3QtaGVhZGVyIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiAjNEY0RjRGO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhvbWUgaW9uLWxpc3QtaGVhZGVyIGlvbi1sYWJlbCBzcGFuIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5ob21lIC5yZW1pbmRlciB7XG4gIG1hcmdpbjogNXB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEzcHggMDtcbn1cbi5ob21lIC5yZW1pbmRlciBoMSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbi5ob21lIC5pbnRlcmVzdHMgaW9uLWNhcmQge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufSJdfQ== */";
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");
    /* harmony import */


    var src_app_services_events_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/events/events.service */
    "./src/app/services/events/events.service.ts");
    /* harmony import */


    var src_app_services_wordpress_wordpress_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/wordpress/wordpress.service */
    "./src/app/services/wordpress/wordpress.service.ts");
    /* harmony import */


    var _event_details_event_details_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../event-details/event-details.page */
    "./src/app/pages/event-details/event-details.page.ts");

    var HomePage = /*#__PURE__*/function () {
      function HomePage(authService, wp, eventService, router, modalCtrl) {
        _classCallCheck(this, HomePage);

        this.authService = authService;
        this.wp = wp;
        this.eventService = eventService;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.posts = [];
        this.page = 1;
        this.count = null;
        this.latestEvents = [];
      }

      _createClass(HomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // this.authService.userData$.subscribe((res: any) => {
          //   this.displayUserData = res;
          // })
          this.loadPosts();
          this.loadLatestEvents();
        }
      }, {
        key: "loadLatestEvents",
        value: function loadLatestEvents() {
          var _this = this;

          this.eventService.getLatestEvents().subscribe(function (res) {
            _this.latestEvents = res; // console.log(res);
          });
        }
      }, {
        key: "showEvent",
        value: function showEvent(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log('coolness');
                    _context.next = 3;
                    return this.modalCtrl.create({
                      component: _event_details_event_details_page__WEBPACK_IMPORTED_MODULE_7__["EventDetailsPage"],
                      componentProps: {
                        event: event
                      }
                    });

                  case 3:
                    modal = _context.sent;
                    _context.next = 6;
                    return modal.present();

                  case 6:
                    return _context.abrupt("return", _context.sent);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
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

          this.wp.getPosts().subscribe(function (res) {
            _this2.count = _this2.wp.totalPosts;
            _this2.posts = res;
          });
        }
      }, {
        key: "loadMore",
        value: function loadMore(event) {
          var _this3 = this;

          this.page++;
          this.wp.getPosts(this.page).subscribe(function (res) {
            _this3.posts = [].concat(_toConsumableArray(_this3.posts), _toConsumableArray(res));
            event.target.complete(); // Disable infinite loading when maximum reached

            if (_this3.page == _this3.wp.pages) {
              event.target.disabled = true;
            }
          });
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: src_app_services_wordpress_wordpress_service__WEBPACK_IMPORTED_MODULE_6__["WordpressService"]
      }, {
        type: src_app_services_events_events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
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
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], src_app_services_wordpress_wordpress_service__WEBPACK_IMPORTED_MODULE_6__["WordpressService"], src_app_services_events_events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-home-home-module-es5.js.map