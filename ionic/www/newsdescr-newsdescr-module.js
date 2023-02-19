(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["newsdescr-newsdescr-module"],{

/***/ "./src/app/newsdescr/newsdescr.module.ts":
/*!***********************************************!*\
  !*** ./src/app/newsdescr/newsdescr.module.ts ***!
  \***********************************************/
/*! exports provided: NewsdescrPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsdescrPageModule", function() { return NewsdescrPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _newsdescr_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newsdescr.page */ "./src/app/newsdescr/newsdescr.page.ts");







var routes = [
    {
        path: '',
        component: _newsdescr_page__WEBPACK_IMPORTED_MODULE_6__["NewsdescrPage"]
    }
];
var NewsdescrPageModule = /** @class */ (function () {
    function NewsdescrPageModule() {
    }
    NewsdescrPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_newsdescr_page__WEBPACK_IMPORTED_MODULE_6__["NewsdescrPage"]]
        })
    ], NewsdescrPageModule);
    return NewsdescrPageModule;
}());



/***/ }),

/***/ "./src/app/newsdescr/newsdescr.page.html":
/*!***********************************************!*\
  !*** ./src/app/newsdescr/newsdescr.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<ion-toolbar color=\"danger\">\n\t\t<!-- <ion-buttons slot=\"start\" routerLink=\"/home\">\n\t\t\t<ion-icon name=\"arrow-round-back\" size=\"large\"></ion-icon>\n\t\t</ion-buttons> -->\n    <ion-buttons slot=\"start\">\n      <ion-back-button style=\"color: white\" icon=\"arrow-round-back\"></ion-back-button>\n    </ion-buttons>\n\n\t\t<ion-title>News Description</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n<!-- {{news[0].Title}} -->\n\n<ion-card *ngIf=\"news\">\n        <ion-card-header>\n          <ion-card-title><h2>{{news[0].Title}}</h2></ion-card-title>\n        </ion-card-header>\n        <ion-img src=\"{{news[0].Image}}\" style=\"width:100%;height: 100%\"></ion-img>\n        <ion-card-content style=\"font-size: 20px;  text-align: justify;\n  text-justify: inter-word;\">\n          {{news[0].Description}}\n        </ion-card-content>\n      </ion-card>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/newsdescr/newsdescr.page.scss":
/*!***********************************************!*\
  !*** ./src/app/newsdescr/newsdescr.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld3NkZXNjci9uZXdzZGVzY3IucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/newsdescr/newsdescr.page.ts":
/*!*********************************************!*\
  !*** ./src/app/newsdescr/newsdescr.page.ts ***!
  \*********************************************/
/*! exports provided: NewsdescrPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsdescrPage", function() { return NewsdescrPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _s1_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../s1.service */ "./src/app/s1.service.ts");




var NewsdescrPage = /** @class */ (function () {
    function NewsdescrPage(s1, router) {
        this.s1 = s1;
        this.router = router;
    }
    NewsdescrPage.prototype.newsFn = function () {
        var _this = this;
        this.s1.newsDesc(this.router.snapshot.params.id).subscribe(function (res) {
            // this.headline=type+" News";
            _this.news = res;
            console.log(res);
        });
    };
    NewsdescrPage.prototype.ionViewDidEnter = function () {
        this.newsFn();
    };
    NewsdescrPage.prototype.ngOnInit = function () {
    };
    NewsdescrPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newsdescr',
            template: __webpack_require__(/*! ./newsdescr.page.html */ "./src/app/newsdescr/newsdescr.page.html"),
            styles: [__webpack_require__(/*! ./newsdescr.page.scss */ "./src/app/newsdescr/newsdescr.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_s1_service__WEBPACK_IMPORTED_MODULE_3__["S1Service"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], NewsdescrPage);
    return NewsdescrPage;
}());



/***/ })

}]);
//# sourceMappingURL=newsdescr-newsdescr-module.js.map