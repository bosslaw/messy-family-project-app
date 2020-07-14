(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profiles-profiles-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/family-member-add/family-member-add.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/family-member-add/family-member-add.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>New Member</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button  (click)=\"dismiss()\">Close</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <form>\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"stacked\">First Name</ion-label>\n        <ion-input autocomplete=\"off\" name=\"first_name\" type=\"text\" [(ngModel)]=\"memberData.first_name\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Last Name</ion-label>\n        <ion-input autocomplete=\"off\" name=\"last_name\" type=\"text\" [(ngModel)]=\"memberData.last_name\"></ion-input>\n      </ion-item>\n      <ion-item>\n      <ion-label position=\"stacked\">Birthday</ion-label>\n      <ion-datetime [(ngModel)]=\"memberData.birth_date\" name=\"birth_date\" display-timezone=\"utc\"></ion-datetime>\n      <!-- <ion-input disabled autocomplete=\"off\" name=\"email\" type=\"text\" [(ngModel)]=\"memberData.birth_date\"></ion-input> -->\n      </ion-item>\n      \n      <ion-item>\n      <ion-label position=\"stacked\">Relationship</ion-label>\n      <ion-select placeholder=\"\" name=\"rid\" [(ngModel)]=\"memberData.rid\">\n        <ion-select-option  *ngFor=\"let r of relationships\" [value]=\"r.id\">{{r.name}}</ion-select-option>\n      </ion-select>\n      \n      </ion-item>\n    </ion-list>\n    <ion-button expand=\"block\" share=\"round\" (click)=\"saveMember()\" color=\"success\">Save</ion-button>\n  </form>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profiles/profiles.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profiles/profiles.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"profile-header\">\n  <!-- <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"secondary\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>PROFILES</ion-title>\n  </ion-toolbar> -->\n  <ion-toolbar color=\"primary\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"2\">\n          <ion-avatar>\n            <img src=\"https://via.placeholder.com/500\">\n          </ion-avatar>\n        </ion-col>\n        <ion-col class=\"ion-text-left profile-name\">\n          <ion-label (click)=\"showProfileOptions()\">\n            <h1 *ngIf=\"user\">{{user.FirstName}} <ion-icon name=\"caret-down-outline\" color=\"light\"></ion-icon></h1>\n            <p>Spouse</p>\n          </ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"profile\">\n    <ion-list-header>\n      <ion-label color=\"medium\"> <ion-icon name=\"person-outline\"></ion-icon> <span>PROFILE</span></ion-label>\n    </ion-list-header> \n\n    <ion-list *ngIf=\"user\">\n      <ion-item >\n        <ion-label>Name</ion-label>\n        <ion-text slot=\"end\" color=\"primary\">{{user.FirstName}} {{user.LastName}}</ion-text>\n      </ion-item>\n\n      <ion-item >\n        <ion-label>Birthday</ion-label>\n        <ion-text slot=\"end\" color=\"primary\">Jan. 19, 1972</ion-text>\n      </ion-item>\n\n      <ion-item >\n        <ion-label>Special Dates</ion-label>\n        <ion-text slot=\"end\" color=\"primary\">MM.DD.YY</ion-text>\n      </ion-item>\n\n      <ion-item >\n        <ion-label>Personality Type</ion-label>\n        <ion-text slot=\"end\" color=\"primary\">xxx</ion-text>\n      </ion-item>\n\n      <ion-item > \n        <ion-label>\n          Favorites\n          <p>\n            Read Wine - Bella\n          </p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <div class=\"family ion-margin-top\">\n    <ion-item lines=\"none\"> \n      <ion-icon color=\"medium\" slot=\"start\" name=\"people-outline\"></ion-icon>\n      <ion-label color=\"medium\">Family Members</ion-label>\n      <ion-icon color=\"primary\"  (click)=\"addFamilyMember()\" slot=\"end\" name=\"person-add-outline\"></ion-icon>\n    </ion-item>\n    <ion-list *ngIf=\"familyMembers\">\n      <ion-item *ngFor=\"let member of familyMembers\">\n        <ion-label>{{ member.first_name }} {{member.last_name}}</ion-label>\n        <ion-text slot=\"end\">{{member.relationship_name}}</ion-text>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/family-member-add/family-member-add-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/family-member-add/family-member-add-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: FamilyMemberAddPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyMemberAddPageRoutingModule", function() { return FamilyMemberAddPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _family_member_add_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./family-member-add.page */ "./src/app/pages/family-member-add/family-member-add.page.ts");




const routes = [
    {
        path: '',
        component: _family_member_add_page__WEBPACK_IMPORTED_MODULE_3__["FamilyMemberAddPage"]
    }
];
let FamilyMemberAddPageRoutingModule = class FamilyMemberAddPageRoutingModule {
};
FamilyMemberAddPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FamilyMemberAddPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/family-member-add/family-member-add.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/family-member-add/family-member-add.module.ts ***!
  \*********************************************************************/
/*! exports provided: FamilyMemberAddPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyMemberAddPageModule", function() { return FamilyMemberAddPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _family_member_add_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./family-member-add-routing.module */ "./src/app/pages/family-member-add/family-member-add-routing.module.ts");
/* harmony import */ var _family_member_add_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./family-member-add.page */ "./src/app/pages/family-member-add/family-member-add.page.ts");







let FamilyMemberAddPageModule = class FamilyMemberAddPageModule {
};
FamilyMemberAddPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _family_member_add_routing_module__WEBPACK_IMPORTED_MODULE_5__["FamilyMemberAddPageRoutingModule"]
        ],
        declarations: [_family_member_add_page__WEBPACK_IMPORTED_MODULE_6__["FamilyMemberAddPage"]]
    })
], FamilyMemberAddPageModule);



/***/ }),

/***/ "./src/app/pages/family-member-add/family-member-add.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/family-member-add/family-member-add.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZhbWlseS1tZW1iZXItYWRkL2ZhbWlseS1tZW1iZXItYWRkLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/family-member-add/family-member-add.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/family-member-add/family-member-add.page.ts ***!
  \*******************************************************************/
/*! exports provided: FamilyMemberAddPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyMemberAddPage", function() { return FamilyMemberAddPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_family_family_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/family/family.service */ "./src/app/services/family/family.service.ts");
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/toast/toast.service */ "./src/app/services/toast/toast.service.ts");






let FamilyMemberAddPage = class FamilyMemberAddPage {
    constructor(modalCtrl, familyService, toastService) {
        this.modalCtrl = modalCtrl;
        this.familyService = familyService;
        this.toastService = toastService;
        this.memberData = {
            uid: '',
            rid: '',
            first_name: '',
            birth_date: new Date(),
            last_name: ''
        };
        this.relationships = [
            { id: 1, name: 'Mother' },
            { id: 2, name: 'Father' },
            { id: 3, name: 'Son' },
            { id: 4, name: 'Daughter' }
        ];
    }
    ngOnInit() {
        if (this.uid) {
            this.memberData.uid = this.uid;
        }
    }
    dismiss() {
        this.modalCtrl.dismiss();
    }
    saveMember() {
        const formattedMember = this.memberData;
        const birthDate = moment__WEBPACK_IMPORTED_MODULE_3__(formattedMember.birth_date).format('YYYY-MM-DD hh:mm');
        formattedMember.birth_date = birthDate;
        this.familyService.addMember(this.memberData).subscribe((res) => {
            this.toastService.presentToast('Successfully added member');
            this.dismiss();
        }, (error) => {
        });
    }
};
FamilyMemberAddPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_family_family_service__WEBPACK_IMPORTED_MODULE_4__["FamilyService"] },
    { type: src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], FamilyMemberAddPage.prototype, "uid", void 0);
FamilyMemberAddPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-family-member-add',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./family-member-add.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/family-member-add/family-member-add.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./family-member-add.page.scss */ "./src/app/pages/family-member-add/family-member-add.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        src_app_services_family_family_service__WEBPACK_IMPORTED_MODULE_4__["FamilyService"],
        src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]])
], FamilyMemberAddPage);



/***/ }),

/***/ "./src/app/pages/profiles/profiles-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/profiles/profiles-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ProfilesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilesPageRoutingModule", function() { return ProfilesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profiles_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profiles.page */ "./src/app/pages/profiles/profiles.page.ts");




const routes = [
    {
        path: '',
        component: _profiles_page__WEBPACK_IMPORTED_MODULE_3__["ProfilesPage"]
    }
];
let ProfilesPageRoutingModule = class ProfilesPageRoutingModule {
};
ProfilesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/profiles/profiles.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/profiles/profiles.module.ts ***!
  \***************************************************/
/*! exports provided: ProfilesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilesPageModule", function() { return ProfilesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _family_member_add_family_member_add_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../family-member-add/family-member-add.module */ "./src/app/pages/family-member-add/family-member-add.module.ts");
/* harmony import */ var _profiles_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profiles-routing.module */ "./src/app/pages/profiles/profiles-routing.module.ts");
/* harmony import */ var _profiles_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profiles.page */ "./src/app/pages/profiles/profiles.page.ts");








let ProfilesPageModule = class ProfilesPageModule {
};
ProfilesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profiles_routing_module__WEBPACK_IMPORTED_MODULE_6__["ProfilesPageRoutingModule"],
            _family_member_add_family_member_add_module__WEBPACK_IMPORTED_MODULE_5__["FamilyMemberAddPageModule"]
        ],
        declarations: [_profiles_page__WEBPACK_IMPORTED_MODULE_7__["ProfilesPage"]]
    })
], ProfilesPageModule);



/***/ }),

/***/ "./src/app/pages/profiles/profiles.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/profiles/profiles.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile-header .profile-name {\n  margin-left: 20px;\n}\n.profile-header .profile-name h1 {\n  color: var(--ion-color-secondary);\n  font-size: 16px;\n}\n.profile-header .profile-name ion-icon {\n  margin-left: 20px;\n  margin-top: 10px;\n}\nion-list-header {\n  margin-bottom: 5px;\n}\nion-list-header ion-label {\n  display: flex;\n  align-items: center;\n}\nion-list-header ion-label span {\n  font-size: 14px;\n  margin-left: 20px;\n}\n.profile ion-list ion-item {\n  --background: #F0F8FD !important;\n  --border-color: #E6ECEF !important;\n  --min-height: 70px !important;\n}\n.profile ion-list ion-item ion-label {\n  font-size: 14px;\n}\n.profile ion-list ion-item ion-label p {\n  color: var(--ion-color-primary);\n  font-size: 14px !important;\n}\n.profile ion-list ion-item ion-text {\n  font-size: 14px;\n}\n.family ion-list ion-item {\n  --min-height: 50px !important;\n}\n.family ion-list ion-item ion-label {\n  font-size: 12px;\n}\n.family ion-list ion-item ion-label p {\n  color: var(--ion-color-primary);\n  font-size: 12px !important;\n}\n.family ion-list ion-item ion-text {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdGFuZ3Bvcy9BcHBzL21lc3N5ZmFtaWx5cHJvamVjdC9tZXNzeWZhbWlseXByb2plY3Qvc3JjL2FwcC9wYWdlcy9wcm9maWxlcy9wcm9maWxlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGVzL3Byb2ZpbGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGlCQUFBO0FDQVI7QURDUTtFQUNJLGlDQUFBO0VBQ0EsZUFBQTtBQ0NaO0FEQ1E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FDQ1o7QURHQTtFQUNJLGtCQUFBO0FDQUo7QURDSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ0NSO0FEQVE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNFWjtBRElRO0VBQ0ksZ0NBQUE7RUFDQSxrQ0FBQTtFQUdBLDZCQUFBO0FDSFo7QURLWTtFQUNJLGVBQUE7QUNIaEI7QURJZ0I7RUFDSSwrQkFBQTtFQUNBLDBCQUFBO0FDRnBCO0FES1k7RUFDSSxlQUFBO0FDSGhCO0FEV1E7RUFLSSw2QkFBQTtBQ1paO0FEY1k7RUFDSSxlQUFBO0FDWmhCO0FEYWdCO0VBQ0ksK0JBQUE7RUFDQSwwQkFBQTtBQ1hwQjtBRGNZO0VBQ0ksZUFBQTtBQ1poQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGVzL3Byb2ZpbGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWhlYWRlciB7XG4gICAgLnByb2ZpbGUtbmFtZSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICBoMSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuaW9uLWxpc3QtaGVhZGVye1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBpb24tbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuLnByb2ZpbGUge1xuICAgIGlvbi1saXN0IHtcbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjRjBGOEZEICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAtLWJvcmRlci1jb2xvcjogI0U2RUNFRiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLy8gLS1wYWRkaW5nLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLy8gLS1wYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLS1taW4taGVpZ2h0OiA3MHB4ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24tdGV4dHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5mYW1pbHkge1xuICAgIGlvbi1saXN0IHtcbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgLy8gLS1iYWNrZ3JvdW5kOiAjRjBGOEZEICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAvLyAtLWJvcmRlci1jb2xvcjogI0U2RUNFRiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLy8gLS1wYWRkaW5nLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLy8gLS1wYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLS1taW4taGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24tdGV4dHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLnByb2ZpbGUtaGVhZGVyIC5wcm9maWxlLW5hbWUge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5wcm9maWxlLWhlYWRlciAucHJvZmlsZS1uYW1lIGgxIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ucHJvZmlsZS1oZWFkZXIgLnByb2ZpbGUtbmFtZSBpb24taWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5pb24tbGlzdC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5pb24tbGlzdC1oZWFkZXIgaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmlvbi1saXN0LWhlYWRlciBpb24tbGFiZWwgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5wcm9maWxlIGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRjBGOEZEICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLWNvbG9yOiAjRTZFQ0VGICFpbXBvcnRhbnQ7XG4gIC0tbWluLWhlaWdodDogNzBweCAhaW1wb3J0YW50O1xufVxuLnByb2ZpbGUgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnByb2ZpbGUgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVsIHAge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbn1cbi5wcm9maWxlIGlvbi1saXN0IGlvbi1pdGVtIGlvbi10ZXh0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZmFtaWx5IGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgLS1taW4taGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG59XG4uZmFtaWx5IGlvbi1saXN0IGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5mYW1pbHkgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVsIHAge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbn1cbi5mYW1pbHkgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLXRleHQge1xuICBmb250LXNpemU6IDEycHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/profiles/profiles.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profiles/profiles.page.ts ***!
  \*************************************************/
/*! exports provided: ProfilesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilesPage", function() { return ProfilesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var src_app_services_family_family_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/family/family.service */ "./src/app/services/family/family.service.ts");
/* harmony import */ var src_app_services_upload_image_upload_image_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/upload-image/upload-image.service */ "./src/app/services/upload-image/upload-image.service.ts");
/* harmony import */ var _family_member_add_family_member_add_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../family-member-add/family-member-add.page */ "./src/app/pages/family-member-add/family-member-add.page.ts");


// import { Camera } from '@ionic-native/camera/ngx';





let ProfilesPage = class ProfilesPage {
    constructor(authService, modalCtrl, familyService, actionsheetCtrl, uploadImage) {
        this.authService = authService;
        this.modalCtrl = modalCtrl;
        this.familyService = familyService;
        this.actionsheetCtrl = actionsheetCtrl;
        this.uploadImage = uploadImage;
    }
    ngOnInit() {
        this.getUserData();
    }
    getUserData() {
        this.authService.userData$.subscribe((res) => {
            this.user = res;
            if (this.user) {
                this.loadFamilyMembers();
            }
        });
    }
    showProfileOptions() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionsheetCtrl.create({
                buttons: [
                    {
                        text: 'Upload Profile',
                        handler: () => {
                            console.log('Upload clicked');
                        }
                    },
                    {
                        text: 'Logout',
                        handler: () => {
                            this.authService.logout();
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    // async selectImage() {
    //   const actionSheet = await this.actionsheetCtrl.create({
    //     header: 'Select Image source',
    //     buttons: [{
    //       text: 'Load from Library',
    //       handler: () => {
    //         this.uploadImage.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
    //       }
    //    },
    //    {
    //     text: 'Use Camera',
    //     handler: () => {
    //       this.uploadImage.takePicture(this.camera.PictureSourceType.CAMERA);
    //      }
    //    },
    //    {
    //     text: 'Cancel',
    //     role: 'cancel'
    //    }]
    //  });
    //  await actionSheet.present();
    // }
    loadFamilyMembers() {
        this.familyService.getMembers(this.user.Id).subscribe(res => {
            this.familyMembers = res;
        });
    }
    addFamilyMember() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _family_member_add_family_member_add_page__WEBPACK_IMPORTED_MODULE_6__["FamilyMemberAddPage"],
                componentProps: {
                    uid: this.user.Id
                }
            });
            modal.onDidDismiss().then((events) => {
                this.loadFamilyMembers();
            });
            return yield modal.present();
        });
    }
};
ProfilesPage.ctorParameters = () => [
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_family_family_service__WEBPACK_IMPORTED_MODULE_4__["FamilyService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: src_app_services_upload_image_upload_image_service__WEBPACK_IMPORTED_MODULE_5__["UploadImageService"] }
];
ProfilesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profiles',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profiles.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profiles/profiles.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profiles.page.scss */ "./src/app/pages/profiles/profiles.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        src_app_services_family_family_service__WEBPACK_IMPORTED_MODULE_4__["FamilyService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        src_app_services_upload_image_upload_image_service__WEBPACK_IMPORTED_MODULE_5__["UploadImageService"]])
], ProfilesPage);



/***/ }),

/***/ "./src/app/services/family/family.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/family/family.service.ts ***!
  \***************************************************/
/*! exports provided: FamilyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilyService", function() { return FamilyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http/http.service */ "./src/app/services/http/http.service.ts");



let FamilyService = class FamilyService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    addMember(memberData) {
        return this.httpService.post('family-members', memberData);
    }
    getMembers(uid) {
        return this.httpService.get('family-members/' + uid);
    }
};
FamilyService.ctorParameters = () => [
    { type: _http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
];
FamilyService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
], FamilyService);



/***/ })

}]);
//# sourceMappingURL=pages-profiles-profiles-module-es2015.js.map