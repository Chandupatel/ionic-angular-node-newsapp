(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup/signup.page.ts");



// import { FormsModule } from '@angular/forms';




var routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]
    }
];
var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());



/***/ }),

/***/ "./src/app/signup/signup.page.html":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n  \t<ion-buttons slot=\"start\" routerLink=\"/login\">\n      <ion-icon name=\"arrow-round-back\"></ion-icon>\n    </ion-buttons>\n    <ion-title>Signup Page</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"text-align:center\" class=\"ion-padding\" >\n\n\n  <form [formGroup]=\"formdata\" (ngSubmit)=\"submit(formdata.value)\">\n    <ion-item class=\"ion-padding-top\">\n      <ion-label position=\"stacked\">Name:</ion-label>\n      <ion-input formControlName=\"name\"></ion-input>\n    </ion-item>\n\n\n\n<div>\n  <ng-container *ngFor=\"let validation of validation_messages.name\" >\n    <div class=\"error-message\" *ngIf=\"formdata.get('name').hasError(validation.type)\n    && (formdata.get('name').dirty || formdata.get('name').touched)\">\n    <p>{{validation.message}}</p>\n  </div>\n</ng-container>\n</div>\n\n\n\n<ion-item>\n  <ion-label position=\"stacked\">Gender:</ion-label>\n  <!-- <ion-input  id=\"gender\" [(ngModel)]=\"gender\"></ion-input> -->\n  <ion-select formControlName=\"gender\">\n    <ion-select-option value=\"Female\">Female</ion-select-option>\n    <ion-select-option value=\"Male\">Male</ion-select-option>\n  </ion-select>\n</ion-item>\n\n\n<div>\n  <ng-container *ngFor=\"let validation of validation_messages.gender\" >\n    <div class=\"error-message\" *ngIf=\"formdata.get('gender').hasError(validation.type)\n    && (formdata.get('gender').dirty || formdata.get('gender').touched)\">\n    <p>{{validation.message}}</p>\n  </div>\n</ng-container>\n</div>\n\n\n<ion-item>\n  <ion-label position=\"stacked\">Email:</ion-label>\n  <ion-input id=\"email\" formControlName=\"email\"></ion-input>\n</ion-item>\n\n\n<div>\n  <ng-container *ngFor=\"let validation of validation_messages.email\" >\n    <div class=\"error-message\" *ngIf=\"\n    formdata.get('email').hasError(validation.type) && (\n    formdata.get('email').dirty || \n    formdata.get('email').touched)\">\n    <p>{{validation.message}}</p>\n  </div>\n</ng-container>\n</div>\n\n\n\n<div formGroupName=\"matching_passwords\">\n      <ion-item>\n        <ion-label position=\"stacked\">Password</ion-label>\n        <ion-input type=\"password\" formControlName=\"pwd\"></ion-input>\n      </ion-item>\n      <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validation_messages.pwd\">\n          <div class=\"error-message\" *ngIf=\"formdata.get('matching_passwords').get('pwd').hasError(validation.type) && (formdata.get('matching_passwords').get('pwd').dirty || formdata.get('matching_passwords').get('pwd').touched)\">\n           {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Confirm Password</ion-label>\n        <ion-input type=\"password\" formControlName=\"confirm\"></ion-input>\n      </ion-item>\n      <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validation_messages.confirm\">\n          <div class=\"error-message\" *ngIf=\"formdata.get('matching_passwords').get('confirm').hasError(validation.type) && (formdata.get('matching_passwords').get('confirm').dirty || formdata.get('matching_passwords').get('confirm').touched)\">\n         {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n    </div>\n    <!-- These validations are for the form group -->\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.matching_passwords\">\n        <div class=\"error-message\" *ngIf=\"\n        formdata.get('matching_passwords').hasError(validation.type) && (formdata.get('matching_passwords').get('confirm').dirty || formdata.get('matching_passwords').get('confirm').touched)\">\n        {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n\n\n\n<ion-item>\n  <ion-label position=\"stacked\">Security Question:</ion-label>\n  <ion-select formControlName=\"ques\">\n    <ion-select-option value=\"city\">In what city were you born?</ion-select-option>\n    <ion-select-option value=\"school\">What is the name of your first school?</ion-select-option>\n    <ion-select-option value=\"movie\">What is your favorite movie?</ion-select-option>\n    <ion-select-option value=\"color\">What is your favorite color?</ion-select-option>\n  </ion-select>\n</ion-item>\n<div>\n  <ng-container *ngFor=\"let validation of validation_messages.ques\" >\n    <div class=\"error-message\" *ngIf=\"formdata.get('ques').hasError(validation.type)\n    && (formdata.get('ques').dirty || formdata.get('ques').touched)\">\n    <p>{{validation.message}}</p>\n  </div>\n</ng-container>\n</div>\n\n\n<ion-item>\n    <ion-label position=\"stacked\">Answer:</ion-label>\n<ion-input formControlName=\"ans\" id=\"security\" type=\"text\"></ion-input>\n</ion-item>\n\n<div>\n  <ng-container *ngFor=\"let validation of validation_messages.ans\" >\n    <div class=\"error-message\" *ngIf=\"formdata.get('ans').hasError(validation.type)\n    && (formdata.get('ans').dirty || formdata.get('ans').touched)\">\n    <p>{{validation.message}}</p>\n  </div>\n</ng-container>\n</div>\n\n\n<br><br>\n\n\n\n<ion-row class=\"ion-align-items-end\" style=\" padding:10px;\">\n\t<ion-col  class=\"ion-text-center\"  >\n  By signing in, you agree to Terms & Condition </ion-col>\n</ion-row>\n\n<!-- <ion-button style=\"width:50%;\" color=\"danger\" routerLink=\"/login\">Continue</ion-button> -->\n<ion-button type=\"submit\" style=\"width:50%;\" color=\"danger\" [disabled]=\"!formdata.valid\">Continue</ion-button>\n\n</form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/signup/signup.page.scss":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-icon {\n  font-size: 30px; }\n\n.error-message {\n  color: red;\n  font-size: 14px;\n  margin-left: 10px;\n  margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL0Q6XFxjZGFjXFxuZXdzIGFwcFxcaW9uaWNcXG5ld3NhcHAvc3JjXFxhcHBcXHNpZ251cFxcc2lnbnVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVBLGVBQ0EsRUFBQTs7QUFFQTtFQUVFLFVBQVU7RUFDVixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvblxyXG57XHJcbmZvbnQtc2l6ZTogMzBweFxyXG59XHJcblxyXG4uZXJyb3ItbWVzc2FnZVxyXG57XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/signup/signup.page.ts":
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _s1_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../s1.service */ "./src/app/s1.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var SignupPage = /** @class */ (function () {
    function SignupPage(s1, router, fcm, toastctr) {
        var _this = this;
        this.s1 = s1;
        this.router = router;
        this.fcm = fcm;
        this.toastctr = toastctr;
        this.matching_passwords_group = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            pwd: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
            ])),
            confirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required)
        }, function (formGroup) {
            return _this.areEqual(formGroup);
        });
        this.formdata = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('[a-zA-Z ]*'),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required
            ])),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                // Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})')
            ])),
            matching_passwords: this.matching_passwords_group,
            ques: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            ans: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required)
        });
        this.validation_messages = {
            'name': [
                { type: 'required', message: 'Name is required.' },
                { type: 'pattern', message: 'Your name must contain only letters.' }
            ],
            'gender': [
                { type: 'required', message: 'Gender is required.' }
            ],
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Please enter a valid email' }
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
            ],
            'ques': [
                { type: 'required', message: 'Select a Security Question.' }
            ],
            'ans': [
                { type: 'required', message: 'Answer is required.' }
            ]
        };
    }
    SignupPage.prototype.areEqual = function (formGroup) {
        var pass = formGroup.get('pwd').value;
        var confirmPass = formGroup.get('confirm').value;
        return pass == confirmPass ? null : { areEqual: true };
    };
    SignupPage.prototype.submit = function (data) {
        var _this = this;
        console.log(data);
        console.log(data.matching_passwords.pwd);
        this.fcm.getToken()
            .then(function (token) {
            _this.s1.signup(data.name, data.gender, data.email, data.matching_passwords.pwd, data.ques, data.ans, token)
                .subscribe(function (res) {
                localStorage.setItem("username", data.email);
                localStorage.setItem("token", token);
                console.log("stored in local storage");
                _this.router.navigate(['/home']);
                _this.toastControl(1);
                console.log(res);
            }, function (error) {
                _this.toastControl(0);
            });
            // console.log(res.name);
        });
    };
    SignupPage.prototype.toastControl = function (x) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast, toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!x) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.toastctr.create({
                                message: 'Signed up Successfully!!!',
                                duration: 2000
                            })];
                    case 1:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 3: return [4 /*yield*/, this.toastctr.create({
                            message: 'Email already exists!!!',
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
    SignupPage.prototype.ngOnInit = function () {
    };
    SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.page.html */ "./src/app/signup/signup.page.html"),
            styles: [__webpack_require__(/*! ./signup.page.scss */ "./src/app/signup/signup.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_s1_service__WEBPACK_IMPORTED_MODULE_2__["S1Service"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_5__["FCM"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], SignupPage);
    return SignupPage;
}());



/***/ })

}]);
//# sourceMappingURL=signup-signup-module.js.map