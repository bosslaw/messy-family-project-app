(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-account-edit-account-edit-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account-edit/account-edit.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account-edit/account-edit.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"secondary\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>UPDATE ACCOUNT</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form>\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"stacked\">First Name</ion-label>\n        <ion-input autocomplete=\"off\" name=\"first_name\" type=\"text\" [(ngModel)]=\"userData.first_name\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Last Name</ion-label>\n        <ion-input autocomplete=\"off\" name=\"last_name\" type=\"text\" [(ngModel)]=\"userData.last_name\"></ion-input>\n      </ion-item>\n      <ion-item>\n      <ion-label position=\"stacked\">Email</ion-label>\n      <ion-input disabled autocomplete=\"off\" name=\"email\" type=\"text\" [(ngModel)]=\"userData.email\"></ion-input>\n      </ion-item>\n      \n      <ion-item>\n      <ion-label position=\"stacked\">Password</ion-label>\n      <ion-input autocomplete=\"off\" name=\"password\" type=\"password\" [(ngModel)]=\"userData.password\"></ion-input>\n      </ion-item>\n    </ion-list>\n    <ion-button expand=\"block\" share=\"round\" (click)=\"editAccountAction()\" color=\"success\">Update</ion-button>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/account-edit/account-edit-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/account-edit/account-edit-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: AccountEditPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountEditPageRoutingModule", function() { return AccountEditPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _account_edit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account-edit.page */ "./src/app/pages/account-edit/account-edit.page.ts");




const routes = [
    {
        path: '',
        component: _account_edit_page__WEBPACK_IMPORTED_MODULE_3__["AccountEditPage"]
    }
];
let AccountEditPageRoutingModule = class AccountEditPageRoutingModule {
};
AccountEditPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AccountEditPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/account-edit/account-edit.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/account-edit/account-edit.module.ts ***!
  \***********************************************************/
/*! exports provided: AccountEditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountEditPageModule", function() { return AccountEditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _account_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-edit-routing.module */ "./src/app/pages/account-edit/account-edit-routing.module.ts");
/* harmony import */ var _account_edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account-edit.page */ "./src/app/pages/account-edit/account-edit.page.ts");







let AccountEditPageModule = class AccountEditPageModule {
};
AccountEditPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _account_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountEditPageRoutingModule"]
        ],
        declarations: [_account_edit_page__WEBPACK_IMPORTED_MODULE_6__["AccountEditPage"]]
    })
], AccountEditPageModule);



/***/ }),

/***/ "./src/app/pages/account-edit/account-edit.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/account-edit/account-edit.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY291bnQtZWRpdC9hY2NvdW50LWVkaXQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/account-edit/account-edit.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/account-edit/account-edit.page.ts ***!
  \*********************************************************/
/*! exports provided: AccountEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountEditPage", function() { return AccountEditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_config_auth_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config/auth-constants */ "./src/app/config/auth-constants.ts");
/* harmony import */ var src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/storage/storage.service */ "./src/app/services/storage/storage.service.ts");
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/toast/toast.service */ "./src/app/services/toast/toast.service.ts");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user/user.service */ "./src/app/services/user/user.service.ts");






let AccountEditPage = class AccountEditPage {
    constructor(storageService, userService, toastService) {
        this.storageService = storageService;
        this.userService = userService;
        this.toastService = toastService;
        this.userData = {
            id: '',
            email: '',
            password: '',
            first_name: '',
            last_name: ''
        };
    }
    ngOnInit() {
        this.getUserData();
    }
    getUserData() {
        this.storageService.get(src_app_config_auth_constants__WEBPACK_IMPORTED_MODULE_2__["AuthConstants"].AUTH).then((res) => {
            this.userData.id = res.Id;
            this.userData.email = res.Email;
            this.userData.first_name = res.FirstName;
            this.userData.last_name = res.LastName;
        });
    }
    editAccountAction() {
        if (!this.userData.password) {
            delete this.userData.password;
        }
        this.userService.updateUser(this.userData).subscribe((res) => {
            if (res.userData) {
                this.toastService.presentToast('Information successfully updated');
            }
            else {
                this.toastService.presentToast('Error adding information');
            }
        }, (error) => {
            this.toastService.presentToast('Network Connection Error');
        });
    }
};
AccountEditPage.ctorParameters = () => [
    { type: src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] },
    { type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] }
];
AccountEditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./account-edit.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account-edit/account-edit.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./account-edit.page.scss */ "./src/app/pages/account-edit/account-edit.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"], src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]])
], AccountEditPage);



/***/ }),

/***/ "./src/app/services/user/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http/http.service */ "./src/app/services/http/http.service.ts");



let UserService = class UserService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    updateUser(postData) {
        return this.httpService.post('updateUser', postData);
    }
};
UserService.ctorParameters = () => [
    { type: _http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
];
UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
], UserService);



/***/ })

}]);
//# sourceMappingURL=pages-account-edit-account-edit-module-es2015.js.map