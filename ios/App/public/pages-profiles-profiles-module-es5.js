function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profiles-profiles-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profiles/profiles.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profiles/profiles.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProfilesProfilesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"profile-header\">\n  <!-- <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"secondary\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>PROFILES</ion-title>\n  </ion-toolbar> -->\n  <ion-toolbar color=\"primary\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"2\">\n          <ion-avatar>\n            <img src=\"https://via.placeholder.com/500\">\n          </ion-avatar>\n        </ion-col>\n        <ion-col class=\"ion-text-left profile-name\">\n          <ion-label>\n            <h1>Alicia <ion-icon name=\"caret-down-outline\" color=\"light\"></ion-icon></h1>\n            <p>Spouse</p>\n          </ion-label>\n          \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"profile\">\n  <ion-list-header>\n    <ion-label color=\"medium\"> <ion-icon name=\"person-outline\"></ion-icon> <span>PROFILE</span></ion-label>\n  </ion-list-header> \n\n  <ion-list>\n\n    <ion-item >\n      <ion-label>Name</ion-label>\n      <ion-note slot=\"end\" color=\"primary\">Alicia Hernon</ion-note>\n    </ion-item>\n\n    <ion-item >\n      <ion-label>Birthday</ion-label>\n      <ion-note slot=\"end\" color=\"primary\">Jan. 19, 1972</ion-note>\n    </ion-item>\n\n    <ion-item >\n      <ion-label>Special Dates</ion-label>\n      <ion-note slot=\"end\" color=\"primary\">MM.DD.YY</ion-note>\n    </ion-item>\n\n    <ion-item >\n      <ion-label>Personality Type</ion-label>\n      <ion-note slot=\"end\" color=\"primary\">xxx</ion-note>\n    </ion-item>\n\n    <ion-item > \n      <ion-label>\n        Favorites\n        <p>\n          Read Wine - Bella\n        </p>\n      </ion-label>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/profiles/profiles-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/profiles/profiles-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: ProfilesPageRoutingModule */

  /***/
  function srcAppPagesProfilesProfilesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilesPageRoutingModule", function () {
      return ProfilesPageRoutingModule;
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


    var _profiles_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profiles.page */
    "./src/app/pages/profiles/profiles.page.ts");

    var routes = [{
      path: '',
      component: _profiles_page__WEBPACK_IMPORTED_MODULE_3__["ProfilesPage"]
    }];

    var ProfilesPageRoutingModule = function ProfilesPageRoutingModule() {
      _classCallCheck(this, ProfilesPageRoutingModule);
    };

    ProfilesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProfilesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/profiles/profiles.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/profiles/profiles.module.ts ***!
    \***************************************************/

  /*! exports provided: ProfilesPageModule */

  /***/
  function srcAppPagesProfilesProfilesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilesPageModule", function () {
      return ProfilesPageModule;
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


    var _profiles_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profiles-routing.module */
    "./src/app/pages/profiles/profiles-routing.module.ts");
    /* harmony import */


    var _profiles_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profiles.page */
    "./src/app/pages/profiles/profiles.page.ts");

    var ProfilesPageModule = function ProfilesPageModule() {
      _classCallCheck(this, ProfilesPageModule);
    };

    ProfilesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profiles_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilesPageRoutingModule"]],
      declarations: [_profiles_page__WEBPACK_IMPORTED_MODULE_6__["ProfilesPage"]]
    })], ProfilesPageModule);
    /***/
  },

  /***/
  "./src/app/pages/profiles/profiles.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/profiles/profiles.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProfilesProfilesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".profile-header .profile-name h1 {\n  color: var(--ion-color-secondary);\n}\n.profile-header .profile-name ion-icon {\n  position: absolute;\n  top: 12px;\n  left: 60px;\n}\n.profile ion-list-header ion-label {\n  display: flex;\n  align-items: center;\n}\n.profile ion-list-header ion-label span {\n  font-size: 18px;\n  margin-left: 20px;\n}\n.profile ion-list {\n  margin-top: 10px;\n}\n.profile ion-list ion-item {\n  --background: #F0F8FD !important;\n  --border-color: #E6ECEF !important;\n  --min-height: 70px !important;\n}\n.profile ion-list ion-item ion-label p {\n  color: var(--ion-color-primary);\n  font-size: 16px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdGFuZ3Bvcy9BcHBzL21lc3N5ZmFtaWx5cHJvamVjdC9tZXNzeWZhbWlseXByb2plY3Qvc3JjL2FwcC9wYWdlcy9wcm9maWxlcy9wcm9maWxlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGVzL3Byb2ZpbGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTtFQUNJLGlDQUFBO0FDRFo7QURHUTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNEWjtBRE9RO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDSlo7QURLWTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0hoQjtBRFFJO0VBQ0ksZ0JBQUE7QUNOUjtBRE9RO0VBQ0ksZ0NBQUE7RUFDQSxrQ0FBQTtFQUdBLDZCQUFBO0FDUFo7QURVZ0I7RUFDSSwrQkFBQTtFQUNBLDBCQUFBO0FDUnBCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZmlsZXMvcHJvZmlsZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtaGVhZGVyIHtcbiAgICAucHJvZmlsZS1uYW1lIHtcbiAgICAgICAgaDEge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICB9XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMTJweDtcbiAgICAgICAgICAgIGxlZnQ6IDYwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4ucHJvZmlsZSB7XG4gICAgaW9uLWxpc3QtaGVhZGVye1xuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpb24tbGlzdCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogI0YwRjhGRCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLS1ib3JkZXItY29sb3I6ICNFNkVDRUYgIWltcG9ydGFudDtcbiAgICAgICAgICAgIC8vIC0tcGFkZGluZy1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIC8vIC0tcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIC0tbWluLWhlaWdodDogNzBweCAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLnByb2ZpbGUtaGVhZGVyIC5wcm9maWxlLW5hbWUgaDEge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG4ucHJvZmlsZS1oZWFkZXIgLnByb2ZpbGUtbmFtZSBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMnB4O1xuICBsZWZ0OiA2MHB4O1xufVxuXG4ucHJvZmlsZSBpb24tbGlzdC1oZWFkZXIgaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wcm9maWxlIGlvbi1saXN0LWhlYWRlciBpb24tbGFiZWwgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4ucHJvZmlsZSBpb24tbGlzdCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ucHJvZmlsZSBpb24tbGlzdCBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogI0YwRjhGRCAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1jb2xvcjogI0U2RUNFRiAhaW1wb3J0YW50O1xuICAtLW1pbi1oZWlnaHQ6IDcwcHggIWltcG9ydGFudDtcbn1cbi5wcm9maWxlIGlvbi1saXN0IGlvbi1pdGVtIGlvbi1sYWJlbCBwIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/profiles/profiles.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/profiles/profiles.page.ts ***!
    \*************************************************/

  /*! exports provided: ProfilesPage */

  /***/
  function srcAppPagesProfilesProfilesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilesPage", function () {
      return ProfilesPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProfilesPage = /*#__PURE__*/function () {
      function ProfilesPage() {
        _classCallCheck(this, ProfilesPage);
      }

      _createClass(ProfilesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProfilesPage;
    }();

    ProfilesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profiles',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profiles.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profiles/profiles.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profiles.page.scss */
      "./src/app/pages/profiles/profiles.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ProfilesPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-profiles-profiles-module-es5.js.map