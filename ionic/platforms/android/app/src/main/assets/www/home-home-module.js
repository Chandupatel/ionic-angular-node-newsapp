(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar  color=\"danger\">\n\n    <ng-template #temp>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Newz</ion-title>\n      <!-- <ion-icon name=\"notifications-outline\" slot=\"end\"></ion-icon> -->\n      <ion-icon name=\"more\" slot=\"end\" (click)=\"optionsPopover($event)\"></ion-icon>\n    </ng-template>\n\n\n    <ion-searchbar (ionBlur)=\"searchbar()\" *ngIf=\"data else temp\" placeholder=\"Search News\"></ion-searchbar>\n\n\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-toolbar color=\"danger\" *ngIf=\"tabs\">\n    <ion-segment scrollable value=\"Top\">\n<!--       <ion-segment-button value=\"top\" (click)=\"newsFn('Top')\">\n        <ion-label><b>Top</b></ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"bollywood\" (click)=\"newsFn('Bollywood')\">\n        <ion-label ><b>Bollywood</b></ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"sports\" (click)=\"newsFn('Sports')\">\n        <ion-label><b>Sports</b></ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"business\" (click)=\"newsFn('Business')\">\n        <ion-label><b>Business</b></ion-label>\n      </ion-segment-button> -->\n      <ion-segment-button value=\"Top\" (click)=\"topnewsFn()\">\n        <ion-label><b>Top</b></ion-label>\n      </ion-segment-button>\n\n      <ion-segment-button *ngFor=\"let x of tabs\" (click)=\"newsFn(x.name)\">\n       <ion-label ><b> {{x.name}} </b></ion-label>\n     </ion-segment-button>\n\n   </ion-segment>\n </ion-toolbar>\n\n\n\n <ion-card class=\"welcome-card\" *ngIf=\"news else ntemp\">\n  <ion-img src=\"{{news[0].Image}}\" class=\"image\"></ion-img>\n  <ion-card-header>\n    <ion-card-title>{{headline}}</ion-card-title>\n  </ion-card-header>\n</ion-card>\n\n<ion-list *ngFor=\"let i of news\" >\n\n  <ion-item >\n    <ion-thumbnail slot=\"start\" (click)=\"desc(i._id)\">\n      <img src={{i.Image}}>\n    </ion-thumbnail>\n\n    <ion-label text-wrap (click)=\"desc(i._id)\">\n      <b>{{i.Title}}</b><br>\n      <!-- {{i.name}} -->\n    </ion-label>\n\n    <ion-icon name=\"more\" slot=\"end\" (click)=\"newsPopover($event,i._id)\"></ion-icon>\n\n  </ion-item>\n\n\n</ion-list>\n<ng-template #ntemp>\n<!--   <ion-item>\n    <b>No news to Show...!!</b>\n  </ion-item> -->\n  <ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\n</ng-template>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card {\n  max-height: 30vh;\n  max-width: 100%;\n  /*max-height: 100%;*/\n  overflow: hidden; }\n\n.image {\n  display: block;\n  width: 100%; }\n\nion-icon {\n  font-size: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcY2RhY1xcbmV3cyBhcHBcXGlvbmljXFxuZXdzYXBwL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Isb0JBQUE7RUFDRixnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDQSxjQUFjO0VBQ1osV0FBVyxFQUFBOztBQUViO0VBRUEsZUFDQSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmR7XG4gIG1heC1oZWlnaHQ6IDMwdmg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgICAvKm1heC1oZWlnaHQ6IDEwMCU7Ki9cbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5pbWFnZXtcbmRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1pY29uXG57XG5mb250LXNpemU6IDMwcHhcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _s1_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../s1.service */ "./src/app/s1.service.ts");
/* harmony import */ var _components_options_options_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/options/options.component */ "./src/app/components/options/options.component.ts");
/* harmony import */ var _components_newsoption_newsoption_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/newsoption/newsoption.component */ "./src/app/components/newsoption/newsoption.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var HomePage = /** @class */ (function () {
    function HomePage(popoverController, s1, router) {
        this.popoverController = popoverController;
        this.s1 = s1;
        this.router = router;
        this.data = this.s1.searchCtr;
        this.tabs = null;
        // news:any=null;
        // topnews:any=null;
        this.news = null;
    }
    HomePage.prototype.optionsPopover = function (ev, id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _components_options_options_component__WEBPACK_IMPORTED_MODULE_4__["OptionsComponent"],
                            event: ev,
                            translucent: true
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage.prototype.searchbar = function () {
        this.s1.searchCtr = false;
    };
    ;
    HomePage.prototype.topnewsFn = function () {
        var _this = this;
        this.s1.topnews().subscribe(function (res) {
            if (res.length > 0) {
                _this.headline = "Top News";
                _this.news = res;
                console.log(res);
            }
            else {
                _this.news = null;
            }
        });
    };
    HomePage.prototype.newsFn = function (type) {
        var _this = this;
        this.s1.news(type).subscribe(function (res) {
            if (res.length > 0) {
                _this.headline = type + " News";
                _this.news = res;
                console.log(res);
            }
            else {
                _this.news = null;
            }
        });
    };
    HomePage.prototype.desc = function (id) {
        var date = new Date;
        // var date = d.toISOString().slice(0,10);
        var email = localStorage.getItem("username");
        console.log(date);
        this.s1.activity(email, id, date);
        this.router.navigate(['newsdescr/' + id]);
    };
    HomePage.prototype.ngDoCheck = function () {
        this.data = this.s1.searchCtr;
    };
    HomePage.prototype.newsPopover = function (ev, id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _components_newsoption_newsoption_component__WEBPACK_IMPORTED_MODULE_5__["NewsoptionComponent"],
                            event: ev,
                            translucent: true
                        })];
                    case 1:
                        popover = _a.sent();
                        this.s1.saveid = id;
                        console.log(id);
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var token = localStorage.getItem("token");
        this.tabs = null;
        // console.log(token);
        if (token) {
            this.s1.showtab().subscribe(function (res) {
                _this.tabs = res;
                console.log(res);
                _this.topnewsFn();
            });
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _s1_service__WEBPACK_IMPORTED_MODULE_3__["S1Service"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map