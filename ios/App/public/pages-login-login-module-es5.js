function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"ion-padding\">\n  <h1 class=\"center\">SIGN IN</h1>\n  <form>\n    <ion-list>\n      <ion-item>\n      <ion-label position=\"stacked\">Email</ion-label>\n      <ion-input autocomplete=\"off\" name=\"email\" type=\"text\" [(ngModel)]=\"postData.email\"></ion-input>\n      </ion-item>\n      \n      <ion-item>\n      <ion-label position=\"stacked\">Password</ion-label>\n      <ion-input autocomplete=\"off\" name=\"password\" type=\"password\" [(ngModel)]=\"postData.password\"></ion-input>\n      </ion-item>\n      \n    </ion-list>\n    <ion-button expand=\"block\" share=\"round\" (click)=\"loginAction()\" color=\"success\">Login</ion-button>\n    </form>\n    <a routerLink=\"/signup\">Create Account</a>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/login/login-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/login/login-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppPagesLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.module.ts ***!
    \*********************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppPagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/pages/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/login/login.page.ts ***!
    \*******************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppPagesLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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


    var src_app_config_auth_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/config/auth-constants */
    "./src/app/config/auth-constants.ts");
    /* harmony import */


    var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");
    /* harmony import */


    var src_app_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/notifications/notifications.service */
    "./src/app/services/notifications/notifications.service.ts");
    /* harmony import */


    var src_app_services_push_notifications_push_notifications_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/push-notifications/push-notifications.service */
    "./src/app/services/push-notifications/push-notifications.service.ts");
    /* harmony import */


    var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/storage/storage.service */
    "./src/app/services/storage/storage.service.ts");
    /* harmony import */


    var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/toast/toast.service */
    "./src/app/services/toast/toast.service.ts");

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(router, authService, storageService, toastService, notifServices, pushNoficationService) {
        _classCallCheck(this, LoginPage);

        this.router = router;
        this.authService = authService;
        this.storageService = storageService;
        this.toastService = toastService;
        this.notifServices = notifServices;
        this.pushNoficationService = pushNoficationService;
        this.postData = {
          email: '',
          password: ''
        };
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.testPushNotification();
          // this.testNotification();
        }
      }, {
        key: "validateInputs",
        value: function validateInputs() {
          var email = this.postData.email.trim();
          var password = this.postData.password.trim();
          return this.postData.email && this.postData.password && email.length > 0 && password.length > 0;
        }
      }, {
        key: "testPushNotification",
        value: function testPushNotification() {
          this.pushNoficationService.notify();
        }
      }, {
        key: "testNotification",
        value: function testNotification() {
          this.notifServices.notify();
        }
      }, {
        key: "loginAction",
        value: function loginAction() {
          var _this = this;

          if (this.validateInputs()) {
            this.authService.login(this.postData).subscribe(function (res) {
              if (res.userData.length) {
                _this.storageService.store(src_app_config_auth_constants__WEBPACK_IMPORTED_MODULE_3__["AuthConstants"].AUTH, res.userData[0]);

                _this.router.navigate(['home']);
              } else {
                _this.toastService.presentToast('Invalid credentials');
              }
            }, function (error) {
              _this.toastService.presentToast('Network Connection Error');
            });
          } else {
            this.toastService.presentToast('Please give some information');
          }
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"]
      }, {
        type: src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"]
      }, {
        type: src_app_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"]
      }, {
        type: src_app_services_push_notifications_push_notifications_service__WEBPACK_IMPORTED_MODULE_6__["PushNotificationsService"]
      }];
    };

    LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/pages/login/login.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"], src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"], src_app_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"], src_app_services_push_notifications_push_notifications_service__WEBPACK_IMPORTED_MODULE_6__["PushNotificationsService"]])], LoginPage);
    /***/
  },

  /***/
  "./src/app/services/notifications/notifications.service.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/services/notifications/notifications.service.ts ***!
    \*****************************************************************/

  /*! exports provided: NotificationsService */

  /***/
  function srcAppServicesNotificationsNotificationsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsService", function () {
      return NotificationsService;
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


    var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/local-notifications/ngx */
    "./node_modules/@ionic-native/local-notifications/__ivy_ngcc__/ngx/index.js");

    var NotificationsService = /*#__PURE__*/function () {
      function NotificationsService(localNotifications) {
        _classCallCheck(this, NotificationsService);

        this.localNotifications = localNotifications;
      }

      _createClass(NotificationsService, [{
        key: "notify",
        value: function notify() {
          this.localNotifications.schedule([{
            id: 1,
            title: 'Messy Family Notification',
            text: 'Upcoming Event',
            icon: ''
          }]);
        }
      }]);

      return NotificationsService;
    }();

    NotificationsService.ctorParameters = function () {
      return [{
        type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_2__["LocalNotifications"]
      }];
    };

    NotificationsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_2__["LocalNotifications"]])], NotificationsService);
    /***/
  },

  /***/
  "./src/app/services/push-notifications/push-notifications.service.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/services/push-notifications/push-notifications.service.ts ***!
    \***************************************************************************/

  /*! exports provided: PushNotificationsService */

  /***/
  function srcAppServicesPushNotificationsPushNotificationsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PushNotificationsService", function () {
      return PushNotificationsService;
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


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");

    var PushNotifications = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].PushNotifications;

    var PushNotificationsService = /*#__PURE__*/function () {
      function PushNotificationsService() {
        _classCallCheck(this, PushNotificationsService);
      }

      _createClass(PushNotificationsService, [{
        key: "notify",
        value: function notify() {
          PushNotifications.requestPermission().then(function (result) {
            if (result.granted) {
              // Register with Apple / Google to receive push via APNS/FCM
              PushNotifications.register();
            } else {// Show some error
            }
          });
          PushNotifications.addListener('registration', function (token) {
            alert('Push registration success, token: ' + token.value);
          });
          PushNotifications.addListener('pushNotificationReceived', function (notification) {
            alert('Push received: ' + JSON.stringify(notification));
          });
          PushNotifications.addListener('pushNotificationActionPerformed', function (notification) {
            alert('Push action performed: ' + JSON.stringify(notification));
          });
        }
      }]);

      return PushNotificationsService;
    }();

    PushNotificationsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], PushNotificationsService);
    /***/
  }
}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map