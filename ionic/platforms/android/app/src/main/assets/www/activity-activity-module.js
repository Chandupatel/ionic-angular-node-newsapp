(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activity-activity-module"],{

/***/ "./src/app/activity/activity.module.ts":
/*!*********************************************!*\
  !*** ./src/app/activity/activity.module.ts ***!
  \*********************************************/
/*! exports provided: ActivityPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityPageModule", function() { return ActivityPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _activity_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./activity.page */ "./src/app/activity/activity.page.ts");







var routes = [
    {
        path: '',
        component: _activity_page__WEBPACK_IMPORTED_MODULE_6__["ActivityPage"]
    }
];
var ActivityPageModule = /** @class */ (function () {
    function ActivityPageModule() {
    }
    ActivityPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_activity_page__WEBPACK_IMPORTED_MODULE_6__["ActivityPage"]]
        })
    ], ActivityPageModule);
    return ActivityPageModule;
}());



/***/ }),

/***/ "./src/app/activity/activity.page.html":
/*!*********************************************!*\
  !*** ./src/app/activity/activity.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar  color=\"danger\">\n  \t<ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>My Activity</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-list *ngFor=\"let i of activity\" >\n\n<ion-item>\n<ion-thumbnail slot=\"start\" (click)=\"desc(i._id)\">\n    <img src={{i.Image}}>\n  </ion-thumbnail>\n\n  <ion-label text-wrap (click)=\"desc(i._id)\">\n    <b>{{i.Title}}</b><br>\n    <!-- {{i.name}} -->\n  </ion-label>\n\n  <!-- <ion-icon name=\"more\" slot=\"end\" (click)=\"newsPopover($event,i._id)\"></ion-icon> -->\n\n</ion-item>\n\n\n  </ion-list>\n<ion-back-button></ion-back-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/activity/activity.page.scss":
/*!*********************************************!*\
  !*** ./src/app/activity/activity.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjdGl2aXR5L2FjdGl2aXR5LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/activity/activity.page.ts":
/*!*******************************************!*\
  !*** ./src/app/activity/activity.page.ts ***!
  \*******************************************/
/*! exports provided: ActivityPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityPage", function() { return ActivityPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _s1_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../s1.service */ "./src/app/s1.service.ts");




var ActivityPage = /** @class */ (function () {
    function ActivityPage(router, s1) {
        var _this = this;
        this.router = router;
        this.s1 = s1;
        var token = localStorage.getItem("token");
        var email = localStorage.getItem("username");
        console.log(token);
        if (token == null) {
            this.router.navigate(['/login']);
        }
        else {
            this.s1.showactivity(email).subscribe(function (res) {
                _this.activity = res;
                console.log(_this.activity);
            });
        }
    }
    ActivityPage.prototype.desc = function (id) {
        this.router.navigate(['newsdescr/' + id]);
    };
    ActivityPage.prototype.ngOnInit = function () {
    };
    ActivityPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-activity',
            template: __webpack_require__(/*! ./activity.page.html */ "./src/app/activity/activity.page.html"),
            styles: [__webpack_require__(/*! ./activity.page.scss */ "./src/app/activity/activity.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _s1_service__WEBPACK_IMPORTED_MODULE_3__["S1Service"]])
    ], ActivityPage);
    return ActivityPage;
}());



/***/ })

}]);
//# sourceMappingURL=activity-activity-module.js.map