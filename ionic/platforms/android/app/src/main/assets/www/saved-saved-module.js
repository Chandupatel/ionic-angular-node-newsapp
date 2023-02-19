(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["saved-saved-module"],{

/***/ "./src/app/saved/saved.module.ts":
/*!***************************************!*\
  !*** ./src/app/saved/saved.module.ts ***!
  \***************************************/
/*! exports provided: SavedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedPageModule", function() { return SavedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _saved_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./saved.page */ "./src/app/saved/saved.page.ts");







var routes = [
    {
        path: '',
        component: _saved_page__WEBPACK_IMPORTED_MODULE_6__["SavedPage"]
    }
];
var SavedPageModule = /** @class */ (function () {
    function SavedPageModule() {
    }
    SavedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_saved_page__WEBPACK_IMPORTED_MODULE_6__["SavedPage"]]
        })
    ], SavedPageModule);
    return SavedPageModule;
}());



/***/ }),

/***/ "./src/app/saved/saved.page.html":
/*!***************************************!*\
  !*** ./src/app/saved/saved.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n  \t<ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Saved Story</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n<ion-list *ngFor=\"let i of saved\" >\n\n<ion-item>\n<ion-thumbnail slot=\"start\" (click)=\"desc(i._id)\">\n    <img src={{i.Image}}>\n  </ion-thumbnail>\n\n  <ion-label text-wrap (click)=\"desc(i._id)\">\n    <b>{{i.Title}}</b><br>\n    <!-- {{i.name}} -->\n  </ion-label>\n\n  <ion-icon name=\"more\" slot=\"end\" (click)=\"newsPopover($event,i._id)\"></ion-icon>\n\n</ion-item>\n\n\n  </ion-list>\n<ion-back-button></ion-back-button>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/saved/saved.page.scss":
/*!***************************************!*\
  !*** ./src/app/saved/saved.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhdmVkL3NhdmVkLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/saved/saved.page.ts":
/*!*************************************!*\
  !*** ./src/app/saved/saved.page.ts ***!
  \*************************************/
/*! exports provided: SavedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedPage", function() { return SavedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _s1_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../s1.service */ "./src/app/s1.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_deletesaved_deletesaved_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/deletesaved/deletesaved.component */ "./src/app/components/deletesaved/deletesaved.component.ts");






var SavedPage = /** @class */ (function () {
    function SavedPage(router, s1, popoverController) {
        var _this = this;
        this.router = router;
        this.s1 = s1;
        this.popoverController = popoverController;
        var token = localStorage.getItem("token");
        var email = localStorage.getItem("username");
        console.log(token);
        if (token == null) {
            this.router.navigate(['/login']);
        }
        else {
            this.s1.showsaved(email).subscribe(function (res) {
                _this.saved = res;
                console.log(_this.saved);
            });
        }
    }
    SavedPage.prototype.doRefresh = function (event) {
        var _this = this;
        console.log('Begin async operation');
        var email = localStorage.getItem("username");
        this.s1.showsaved(email).subscribe(function (res) {
            _this.saved = res;
            console.log(_this.saved);
        });
        setTimeout(function () {
            console.log('Async operation has ended');
            event.target.complete();
        }, 500);
    };
    SavedPage.prototype.desc = function (id) {
        this.router.navigate(['newsdescr/' + id]);
    };
    SavedPage.prototype.newsPopover = function (ev, id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _components_deletesaved_deletesaved_component__WEBPACK_IMPORTED_MODULE_5__["DeletesavedComponent"],
                            event: ev,
                            translucent: true
                        })];
                    case 1:
                        popover = _a.sent();
                        this.s1.saveid = id;
                        return [4 /*yield*/, popover.present()];
                    case 2: 
                    // console.log(id);
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SavedPage.prototype.ngOnChanges = function () {
        // this.saved=this.s1.savednews;
    };
    SavedPage.prototype.ngOnInit = function () {
    };
    SavedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-saved',
            template: __webpack_require__(/*! ./saved.page.html */ "./src/app/saved/saved.page.html"),
            styles: [__webpack_require__(/*! ./saved.page.scss */ "./src/app/saved/saved.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _s1_service__WEBPACK_IMPORTED_MODULE_3__["S1Service"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]])
    ], SavedPage);
    return SavedPage;
}());



/***/ })

}]);
//# sourceMappingURL=saved-saved-module.js.map