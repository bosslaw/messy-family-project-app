function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"], {
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


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"secondary\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>catholic family app</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"home ion-padding-horizontal\">\n\n  <ion-list-header>\n    <ion-label color=\"medium\"> <ion-icon  name=\"notifications-outline\"></ion-icon> <span>REMINDERS</span></ion-label>\n    <ion-button icon-only color=\"secondary\" size=\"large\" (click)=\"addEventModal()\"><ion-icon size=\"large\" name=\"add-circle\"></ion-icon></ion-button>\n  </ion-list-header> \n\n  <!-- <ion-card class=\"reminder\">\n    <ion-item lines=\"none\">\n      <ion-label color=\"primary\">\n        <h1>Special Time with Abby</h1>\n        <p class=\"color-dark italic\">Wednesday, Aug 21, 2019</p>\n      </ion-label>\n      <ion-button icon-only fill=\"clear\" size=\"large\" slot=\"end\"><ion-icon color=\"secondary\" name=\"chevron-forward-outline\"></ion-icon></ion-button>\n    </ion-item>\n  </ion-card> -->\n  <div *ngIf=\"latestEvents\">\n    <ion-card class=\"reminder\" *ngFor=\"let event of latestEvents\">\n      <ion-item lines=\"none\" >\n        <ion-label color=\"primary\">\n          <h1>{{event.title}}</h1>\n          <p class=\"color-dark italic\">{{event.start_date | date}}</p>\n        </ion-label>\n        <ion-button icon-only fill=\"clear\" size=\"large\" slot=\"end\" (click)=\"showEvent(event)\"><ion-icon color=\"secondary\" name=\"chevron-forward-outline\"></ion-icon></ion-button>\n      </ion-item>\n    </ion-card>\n  </div>\n  \n  \n\n  <ion-list-header>\n    <ion-label> <ion-icon  name=\"star-outline\"></ion-icon> <span>TOP INTERESTS</span></ion-label>\n  </ion-list-header> \n\n  <ion-grid class=\"interests\">\n    <ion-row>\n      <ion-col>\n        <ion-card routerLink=\"/home/interest-list/20\">\n          <img  src=\"/assets/images/marriage_toolkit.png\">\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card routerLink=\"/home/interest-list/21\">\n          <img  src=\"/assets/images/parenting_corner.png\">\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card routerLink=\"/home/interest-list/68\">\n          <img  src=\"/assets/images/prayer_devotions.png\">\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card routerLink=\"/home/interest-list/102\">\n          <img  src=\"/assets/images/family_culture.png\">\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-list-header>\n    <ion-label color=\"medium\"> <ion-icon  name=\"pulse-outline\"></ion-icon> <span>NEW CONTENT</span></ion-label>\n  </ion-list-header>\n\n  <!-- <ion-card *ngFor=\"let post of posts\">\n    <ion-card-header>\n      <ion-card-title [innerHTML]=\"post.title.rendered\"></ion-card-title>\n      <ion-card-subtitle>{{ post.date_gmt | date }}</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <img [src]=\"post.media_url\">\n      <div [innerHTML]=\"post.excerpt.rendered\"></div>\n      <ion-button expand=\"full\" fill=\"clear\" [routerLink]=\"['/home/', 'blog', post.id]\" text-right>Read More...</ion-button>\n    </ion-card-content>\n  </ion-card> -->\n  <app-blog-thumbnails *ngFor=\"let post of posts\" [post]=\"post\" (postClicked)=\"viewPost($event)\"></app-blog-thumbnails>\n  <!-- <app-blog-thumbnails></app-blog-thumbnails>\n  <app-blog-thumbnails></app-blog-thumbnails>\n  <app-blog-thumbnails></app-blog-thumbnails> -->\n</ion-content>\n";
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


    var _event_form_event_form_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../event-form/event-form.module */
    "./src/app/pages/event-form/event-form.module.ts");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/pages/home/home-routing.module.ts");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/pages/home/home.page.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_8__["HomePageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"], _event_details_event_details_module__WEBPACK_IMPORTED_MODULE_6__["EventDetailsPageModule"], _event_form_event_form_module__WEBPACK_IMPORTED_MODULE_7__["EventFormPageModule"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_9__["HomePage"]]
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


    __webpack_exports__["default"] = ".home ion-list-header ion-label {\n  color: #4F4F4F;\n  display: flex;\n  align-items: center;\n}\n.home ion-list-header ion-label span {\n  font-size: 14px;\n  margin-left: 20px;\n}\n.home .reminder {\n  margin: 5px !important;\n  padding: 13px 0;\n}\n.home .reminder h1 {\n  font-size: 16px;\n  font-weight: 200;\n  padding-bottom: 5px;\n}\n.home .interests ion-card {\n  margin: 0px !important;\n}\n.home .interests ion-card img {\n  margin-bottom: -5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdGFuZ3Bvcy9BcHBzL21lc3N5ZmFtaWx5cHJvamVjdC9tZXNzeWZhbWlseXByb2plY3Qvc3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVRO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0RaO0FERVk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNBaEI7QURLSTtFQUNJLHNCQUFBO0VBQ0EsZUFBQTtBQ0hSO0FESVE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0ZaO0FET1E7RUFDSSxzQkFBQTtBQ0xaO0FETVk7RUFDSSxtQkFBQTtBQ0poQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZSB7XG4gICAgaW9uLWxpc3QtaGVhZGVye1xuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgY29sb3I6ICM0RjRGNEY7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5yZW1pbmRlciB7IFxuICAgICAgICBtYXJnaW46IDVweCAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nOiAxM3B4IDA7XG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmludGVyZXN0cyB7XG4gICAgICAgIGlvbi1jYXJkIHtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cblxuIiwiLmhvbWUgaW9uLWxpc3QtaGVhZGVyIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiAjNEY0RjRGO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhvbWUgaW9uLWxpc3QtaGVhZGVyIGlvbi1sYWJlbCBzcGFuIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5ob21lIC5yZW1pbmRlciB7XG4gIG1hcmdpbjogNXB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEzcHggMDtcbn1cbi5ob21lIC5yZW1pbmRlciBoMSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbi5ob21lIC5pbnRlcmVzdHMgaW9uLWNhcmQge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuLmhvbWUgLmludGVyZXN0cyBpb24tY2FyZCBpbWcge1xuICBtYXJnaW4tYm90dG9tOiAtNXB4O1xufSJdfQ== */";
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


    var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");
    /* harmony import */


    var src_app_services_events_events_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/events/events.service */
    "./src/app/services/events/events.service.ts");
    /* harmony import */


    var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/storage/storage.service */
    "./src/app/services/storage/storage.service.ts");
    /* harmony import */


    var src_app_services_wordpress_wordpress_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/wordpress/wordpress.service */
    "./src/app/services/wordpress/wordpress.service.ts");
    /* harmony import */


    var _event_details_event_details_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../event-details/event-details.page */
    "./src/app/pages/event-details/event-details.page.ts");
    /* harmony import */


    var _event_form_event_form_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../event-form/event-form.page */
    "./src/app/pages/event-form/event-form.page.ts");

    var HomePage = /*#__PURE__*/function () {
      function HomePage(authService, wp, eventService, router, modalCtrl, storageService) {
        _classCallCheck(this, HomePage);

        this.authService = authService;
        this.wp = wp;
        this.eventService = eventService;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.storageService = storageService;
        this.posts = [];
        this.page = 1;
        this.count = null;
        this.latestEvents = [];
        this.currentDay = new Date();
      }

      _createClass(HomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadPosts();
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          this.authService.userData$.subscribe(function (res) {
            _this.user = res;

            if (_this.user) {
              _this.loadLatestEvents();
            }
          });
        }
      }, {
        key: "loadLatestEvents",
        value: function loadLatestEvents() {
          var _this2 = this;

          this.eventService.getLatestEvents(this.user.Id).subscribe(function (res) {
            _this2.latestEvents = res;
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
                    _context.next = 2;
                    return this.modalCtrl.create({
                      component: _event_details_event_details_page__WEBPACK_IMPORTED_MODULE_9__["EventDetailsPage"],
                      componentProps: {
                        event: event
                      }
                    });

                  case 2:
                    modal = _context.sent;
                    _context.next = 5;
                    return modal.present();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "addEventModal",
        value: function addEventModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalCtrl.create({
                      component: _event_form_event_form_page__WEBPACK_IMPORTED_MODULE_10__["EventFormPage"],
                      componentProps: {
                        preselectedDate: this.currentDay
                      }
                    });

                  case 2:
                    modal = _context2.sent;
                    modal.onDidDismiss().then(function (event) {
                      if (event.data) {
                        _this3.addEvent(event.data);
                      }
                    });
                    _context2.next = 6;
                    return modal.present();

                  case 6:
                    return _context2.abrupt("return", _context2.sent);

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "addEvent",
        value: function addEvent(event) {
          var _this4 = this;

          var formattedEvent = {
            title: event.title,
            start_date: moment__WEBPACK_IMPORTED_MODULE_4__(event.start_date).format('YYYY-MM-DD hh:mm'),
            end_date: moment__WEBPACK_IMPORTED_MODULE_4__(event.end_date).format('YYYY-MM-DD hh:mm'),
            // allDay: event.data.allDay,
            description: event.description,
            location: event.location,
            uid: this.user.Id,
            status: 'Upcoming'
          };
          this.eventService.addEvent(formattedEvent).subscribe(function (res) {
            if (res.success) {
              _this4.loadLatestEvents();
            }
          }, function (error) {});
        }
      }, {
        key: "viewPost",
        value: function viewPost(post) {
          this.router.navigate(['/home/blog', post.id]);
        }
      }, {
        key: "loadPosts",
        value: function loadPosts() {
          var _this5 = this;

          this.wp.getPosts().subscribe(function (res) {
            _this5.count = _this5.wp.totalPosts;
            _this5.posts = res;
          });
        }
      }, {
        key: "loadMore",
        value: function loadMore(event) {
          var _this6 = this;

          this.page++;
          this.wp.getPosts(this.page).subscribe(function (res) {
            _this6.posts = [].concat(_toConsumableArray(_this6.posts), _toConsumableArray(res));
            event.target.complete(); // Disable infinite loading when maximum reached

            if (_this6.page == _this6.wp.pages) {
              event.target.disabled = true;
            }
          });
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: src_app_services_wordpress_wordpress_service__WEBPACK_IMPORTED_MODULE_8__["WordpressService"]
      }, {
        type: src_app_services_events_events_service__WEBPACK_IMPORTED_MODULE_6__["EventsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"]
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
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], src_app_services_wordpress_wordpress_service__WEBPACK_IMPORTED_MODULE_8__["WordpressService"], src_app_services_events_events_service__WEBPACK_IMPORTED_MODULE_6__["EventsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"]])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-home-home-module-es5.js.map