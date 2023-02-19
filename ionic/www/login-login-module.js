(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");



// import { FormsModule } from '@angular/forms';




var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar  color=\"danger\">\n    <ion-title>Login to Newz Adda</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"text-align:center\" class=\"ion-padding\" >\n  <br>\n  <br>\n  <ion-button shape=\"round\" color=\"primary\" (click)=\"ss()\">\n    <ion-icon slot=\"start\" name=\"logo-google\"></ion-icon>\n  Sign in with Google</ion-button><br><br>\n  Or Login\n\n<form [formGroup]=\"formdata\" (ngSubmit)=\"login(formdata.value)\">\n  <ion-item>\n    <ion-label position=\"floating\">Email:</ion-label>\n    <ion-input required type=\"text\" formControlName=\"email\"></ion-input>\n  </ion-item>\n  <br>\n  <ion-item>\n    <ion-label position=\"floating\">Password:</ion-label>\n    <ion-input required type=\"password\" formControlName=\"pwd\"></ion-input>\n  </ion-item><br><br>\n  By signing in, you agree to Terms & Conditions\n\n  <br><br>\n  <!-- <ion-button  style=\"width:50%;\" color=\"danger\"  routerLink=\"/home\">Login</ion-button> -->\n\n  <ion-button type=\"submit\" style=\"width:50%;\" color=\"danger\" [disabled]=\"!formdata.valid\">Login</ion-button>\n\n</form>\n\n  <ion-row class=\"ion-align-items-end\" style=\"height:100px; padding:10px;\">\n\n    <ion-col>New User? <ion-text  color=\"danger\" [routerDirection]=\"'root'\" [routerLink]=\"'/signup'\"> SIGNUP </ion-text>\n    </ion-col>\n    <ion-col>\n      <ion-text  color=\"danger\" [routerDirection]=\"'root'\" [routerLink]=\"'/forgotpwd'\"> FORGOT PASSWORD </ion-text>\n    </ion-col>\n  </ion-row>\n\n \n\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _s1_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../s1.service */ "./src/app/s1.service.ts");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var LoginPage = /** @class */ (function () {
    function LoginPage(s1, fcm, router, toastctr) {
        this.s1 = s1;
        this.fcm = fcm;
        this.router = router;
        this.toastctr = toastctr;
        this.formdata = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            pwd: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required)
        });
        localStorage.clear();
    }
    LoginPage.prototype.login = function (data) {
        var _this = this;
        this.fcm.getToken()
            .then(function (token) {
            _this.s1.login(data.email, data.pwd, token).subscribe(function (res) {
                console.log(res);
                localStorage.setItem("username", data.email);
                localStorage.setItem("token", token);
                console.log("stored in local storage");
                _this.toastControl(1);
                _this.router.navigate(['/home']);
            }, function (error) {
                _this.toastControl(0);
            });
            console.log(token);
        });
    };
    LoginPage.prototype.toastControl = function (x) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast, toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!x) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.toastctr.create({
                                message: 'Login Successfully !!!',
                                duration: 2000
                            })];
                    case 1:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 3: return [4 /*yield*/, this.toastctr.create({
                            message: 'Please enter valid email and password',
                            duration: 2000
                        })];
                    case 4:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.ss = function () {
        localStorage.clear();
    };
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_s1_service__WEBPACK_IMPORTED_MODULE_2__["S1Service"], _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_3__["FCM"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map