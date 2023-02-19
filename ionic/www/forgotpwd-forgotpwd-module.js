(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgotpwd-forgotpwd-module"],{

/***/ "./src/app/forgotpwd/forgotpwd.module.ts":
/*!***********************************************!*\
  !*** ./src/app/forgotpwd/forgotpwd.module.ts ***!
  \***********************************************/
/*! exports provided: ForgotpwdPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpwdPageModule", function() { return ForgotpwdPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgotpwd_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgotpwd.page */ "./src/app/forgotpwd/forgotpwd.page.ts");



// import { FormsModule } from '@angular/forms';




var routes = [
    {
        path: '',
        component: _forgotpwd_page__WEBPACK_IMPORTED_MODULE_6__["ForgotpwdPage"]
    }
];
var ForgotpwdPageModule = /** @class */ (function () {
    function ForgotpwdPageModule() {
    }
    ForgotpwdPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_forgotpwd_page__WEBPACK_IMPORTED_MODULE_6__["ForgotpwdPage"]]
        })
    ], ForgotpwdPageModule);
    return ForgotpwdPageModule;
}());



/***/ }),

/***/ "./src/app/forgotpwd/forgotpwd.page.html":
/*!***********************************************!*\
  !*** ./src/app/forgotpwd/forgotpwd.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<ion-toolbar color=\"danger\">\n\t\t<ion-buttons slot=\"start\" routerLink=\"/login\">\n\t\t\t<ion-icon name=\"arrow-round-back\" size=\"large\"></ion-icon>\n\t\t</ion-buttons>\n\t\t<ion-title>Forgot Password</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\t<ng-template #temp>\n\n<form [formGroup]=\"formdata\" (ngSubmit)=\"continue(formdata.value)\">\n\t\t<ion-item >\n\t\t\t<ion-label position=\"stacked\">Email:</ion-label>\n\t\t\t<ion-input formControlName=\"email\"></ion-input>\n\t\t</ion-item>\n\n<div>\n  <ng-container *ngFor=\"let validation of validation_messages.email\" >\n    <div class=\"error-message\" *ngIf=\"\n    formdata.get('email').hasError(validation.type) && (\n    formdata.get('email').dirty || \n    formdata.get('email').touched)\">\n    <p>{{validation.message}}</p>\n  </div>\n</ng-container>\n</div>\n\n\n\n<ion-item>\n  <ion-label position=\"stacked\">Security Question:</ion-label>\n  <ion-select formControlName=\"ques\">\n    <ion-select-option value=\"city\">In what city were you born?</ion-select-option>\n    <ion-select-option value=\"school\">What is the name of your first school?</ion-select-option>\n    <ion-select-option value=\"movie\">What is your favorite movie?</ion-select-option>\n    <ion-select-option value=\"color\">What is your favorite color?</ion-select-option>\n  </ion-select>\n</ion-item>\n<div>\n  <ng-container *ngFor=\"let validation of validation_messages.ques\" >\n    <div class=\"error-message\" *ngIf=\"formdata.get('ques').hasError(validation.type)\n    && (formdata.get('ques').dirty || formdata.get('ques').touched)\">\n    <p>{{validation.message}}</p>\n  </div>\n</ng-container>\n</div>\n\n\n<ion-item>\n    <ion-label position=\"stacked\">Answer:</ion-label>\n<ion-input formControlName=\"ans\" id=\"security\" type=\"text\"></ion-input>\n</ion-item>\n\n<div>\n  <ng-container *ngFor=\"let validation of validation_messages.ans\" >\n    <div class=\"error-message\" *ngIf=\"formdata.get('ans').hasError(validation.type)\n    && (formdata.get('ans').dirty || formdata.get('ans').touched)\">\n    <p>{{validation.message}}</p>\n  </div>\n</ng-container>\n</div>\n\n\t\t <ion-button type=\"submit\" style=\"width:50%;\" color=\"danger\" [disabled]=\"!formdata.valid\">Continue</ion-button>\n</form>\n\n\t</ng-template>\n\n\n\t<ion-list *ngIf=\"data else temp\">\n\t\t<b>Please enter a New Password</b>\n\n<form [formGroup]=\"formdata1\" (ngSubmit)=\"submit(formdata1.value)\">\n\n<div formGroupName=\"matching_passwords\">\n\n    <ion-item>\n      <ion-label position=\"stacked\">New Password:</ion-label>\n      <ion-input  id=\"pwd\" type=\"Password\" formControlName=\"pwd\"></ion-input>\n    </ion-item>\n\n      <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validation_messages.pwd\">\n          <div class=\"error-message\" *ngIf=\"formdata1.get('matching_passwords').get('pwd').hasError(validation.type) && (formdata1.get('matching_passwords').get('pwd').dirty || formdata1.get('matching_passwords').get('pwd').touched)\">\n           {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n    <ion-item>\n      <ion-label position=\"stacked\">Confirm Password:</ion-label>\n      <ion-input  id=\"confirm\" type=\"Password\" formControlName=\"confirm\"></ion-input>\n    </ion-item>\n\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validation_messages.confirm\">\n          <div class=\"error-message\" *ngIf=\"formdata1.get('matching_passwords').get('confirm').hasError(validation.type) && (formdata1.get('matching_passwords').get('confirm').dirty || formdata1.get('matching_passwords').get('confirm').touched)\">\n         {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n    </div>\n    <!-- These validations are for the form group -->\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.matching_passwords\">\n        <div class=\"error-message\" *ngIf=\"\n        formdata1.get('matching_passwords').hasError(validation.type) && (formdata1.get('matching_passwords').get('confirm').dirty || formdata1.get('matching_passwords').get('confirm').touched)\">\n        {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\t\t<ion-button type=\"submit\" style=\"width:50%;\" color=\"danger\" [disabled]=\"!formdata1.valid\">Change Password</ion-button>\n</form>\n\n\t</ion-list>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/forgotpwd/forgotpwd.page.scss":
/*!***********************************************!*\
  !*** ./src/app/forgotpwd/forgotpwd.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-message {\n  color: red;\n  font-size: 14px;\n  margin-left: 10px;\n  margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ290cHdkL0Q6XFxjZGFjXFxuZXdzIGFwcFxcaW9uaWNcXG5ld3NhcHAvc3JjXFxhcHBcXGZvcmdvdHB3ZFxcZm9yZ290cHdkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLFVBQVU7RUFDVixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZm9yZ290cHdkL2ZvcmdvdHB3ZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3ItbWVzc2FnZVxyXG57XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/forgotpwd/forgotpwd.page.ts":
/*!*********************************************!*\
  !*** ./src/app/forgotpwd/forgotpwd.page.ts ***!
  \*********************************************/
/*! exports provided: ForgotpwdPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpwdPage", function() { return ForgotpwdPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _s1_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../s1.service */ "./src/app/s1.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var ForgotpwdPage = /** @class */ (function () {
    function ForgotpwdPage(s1, toastctr, router) {
        var _this = this;
        this.s1 = s1;
        this.toastctr = toastctr;
        this.router = router;
        this.matching_passwords_group = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            pwd: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
            ])),
            confirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required)
        }, function (formGroup) {
            return _this.areEqual(formGroup);
        });
        this.formdata = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            ques: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            ans: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required)
        });
        this.formdata1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            matching_passwords: this.matching_passwords_group
        });
        this.validation_messages = {
            'email': [
                { type: 'required', message: 'Email is required.' }
            ],
            'ques': [
                { type: 'required', message: 'Select a Security Question.' }
            ],
            'ans': [
                { type: 'required', message: 'Answer is required.' }
            ],
            'pwd': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password must be at least 4 characters long.' },
            ],
            'confirm': [
                { type: 'required', message: 'Confirm Password is required.' }
            ],
            'matching_passwords': [
                { type: 'areEqual', message: 'Password mismatch.' }
            ]
        };
        this.data = null;
    }
    ForgotpwdPage.prototype.areEqual = function (formGroup) {
        var pass = formGroup.get('pwd').value;
        var confirmPass = formGroup.get('confirm').value;
        return pass == confirmPass ? null : { areEqual: true };
    };
    ForgotpwdPage.prototype.continue = function (data) {
        var _this = this;
        this.email = data.email;
        this.s1.forgotpwd(data.email, data.ques, data.ans).subscribe(function (res) {
            // this.saved=res;
            console.log(res);
            if (res.length == 0) {
                _this.toastControl(0);
                console.log("details does not match");
            }
            else
                _this.data = 1;
            _this.formdata.reset();
        });
    };
    ForgotpwdPage.prototype.submit = function (data) {
        var _this = this;
        this.s1.changeForgtpwd(data.matching_passwords.pwd, this.email).subscribe(function (res) {
            //this.saved=res;
            _this.toastControl(1);
            console.log(res);
            _this.formdata.reset();
            _this.router.navigate(['/login']);
        });
    };
    ForgotpwdPage.prototype.toastControl = function (x) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast, toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!x) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.toastctr.create({
                                message: 'Password changed successfully!',
                                duration: 2000
                            })];
                    case 1:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 3: return [4 /*yield*/, this.toastctr.create({
                            message: 'Details does not match!',
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
    ForgotpwdPage.prototype.ionViewWillEnter = function () {
        this.data = null;
    };
    ForgotpwdPage.prototype.ngOnInit = function () {
    };
    ForgotpwdPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgotpwd',
            template: __webpack_require__(/*! ./forgotpwd.page.html */ "./src/app/forgotpwd/forgotpwd.page.html"),
            styles: [__webpack_require__(/*! ./forgotpwd.page.scss */ "./src/app/forgotpwd/forgotpwd.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_s1_service__WEBPACK_IMPORTED_MODULE_2__["S1Service"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ForgotpwdPage);
    return ForgotpwdPage;
}());



/***/ })

}]);
//# sourceMappingURL=forgotpwd-forgotpwd-module.js.map