(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "./src/app/settings/settings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "./src/app/settings/settings.page.ts");







var routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]
    }
];
var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());



/***/ }),

/***/ "./src/app/settings/settings.page.html":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar  color=\"danger\">\n  \t<ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Settings</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<!--  <ion-card class=\"login-card\" color=\"danger\" style=\"height:35%;\">\n      <ion-card-header style=\"margin:10%;\">\n        <ion-card-title >You are not Signed in</ion-card-title>\n        <ion-card-subtitle><ion-button routerLink=\"/login\" color=\"light\">Login or register</ion-button></ion-card-subtitle>\n      </ion-card-header>\n    </ion-card> -->\n    <!-- <div style=\"text-align: center;\"> -->\n\n<ng-template #temp>      \n    <ion-item><h2>Edit Profile</h2></ion-item>\n    <ion-item>\n  <ion-label  position=\"stacked\" ><b>Name:</b></ion-label>\n  <ion-input  [(ngModel)]=\"name\"></ion-input>\n</ion-item>\n<ion-item>\n  <ion-label position=\"stacked\"><b>Email: </b></ion-label>\n  <ion-input readonly [(ngModel)]=\"email\"></ion-input>\n</ion-item>\n<ion-item>\n  <ion-label position=\"stacked\"><b>Gender: </b></ion-label>\n  <ion-input  [(ngModel)]=\"gender\"></ion-input>\n</ion-item>\n  <ion-button  style=\"width:40%;\" color=\"danger\" (click)=\"Save()\">Save Details</ion-button>\n\n<br>\n<ion-button size=\"small\" style=\"width:40%;\" fill=\"outline\" (click)=\"changebtn()\">Change Password</ion-button>\n<!-- </div> -->\n    <!-- <ion-item>Personalise</ion-item>\n\n<ion-item>\n\t<ion-icon name=\"download\" size=\"large\" slot=\"start\"></ion-icon>\n  <ion-label>\n    <b>Offline Reading</b><br>\n    Download Full Story in Background\n  </ion-label>\n   <ion-toggle [(ngModel)]=\"offline\"></ion-toggle>\n</ion-item>\n\n<ion-item>\n\t<ion-icon name=\"funnel\" slot=\"start\" size =\"large\"></ion-icon>\n  <ion-label>\n    <b>Text Size</b><br>\n  </ion-label>\n  <ion-select value=\"small\" interface=\"popover\">\n      <ion-select-option value=\"small\">Small</ion-select-option>\n      <ion-select-option value=\"large\">Large</ion-select-option>\n     \n    </ion-select>\n</ion-item> -->\n\n\n\n</ng-template>\n<form [formGroup]=\"formdata\" (ngSubmit)=\"submit(formdata.value)\">\n<ion-list *ngIf=\"data else temp\">\n    <b>Change Password</b><br>\n\n    <ion-item>\n      <ion-label position=\"stacked\">Old Password:</ion-label>\n      <ion-input  id=\"oldpwd\" type=\"Password\" formControlName=\"oldpwd\"></ion-input>\n    </ion-item>\n\n<div formGroupName=\"matching_passwords\">\n\n    <ion-item>\n      <ion-label position=\"stacked\">New Password:</ion-label>\n      <ion-input  id=\"newpwd\" type=\"Password\" formControlName=\"newpwd\"></ion-input>\n    </ion-item>\n\n      <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validation_messages.newpwd\">\n          <div class=\"error-message\" *ngIf=\"formdata.get('matching_passwords').get('newpwd').hasError(validation.type) && (formdata.get('matching_passwords').get('newpwd').dirty || formdata.get('matching_passwords').get('newpwd').touched)\">\n           {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n    <ion-item>\n      <ion-label position=\"stacked\">Confirm Password:</ion-label>\n      <ion-input  id=\"confirm\" type=\"Password\" formControlName=\"confirm\"></ion-input>\n    </ion-item>\n\n    <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validation_messages.confirm\">\n          <div class=\"error-message\" *ngIf=\"formdata.get('matching_passwords').get('confirm').hasError(validation.type) && (formdata.get('matching_passwords').get('confirm').dirty || formdata.get('matching_passwords').get('confirm').touched)\">\n         {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n    </div>\n    <!-- These validations are for the form group -->\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.matching_passwords\">\n        <div class=\"error-message\" *ngIf=\"\n        formdata.get('matching_passwords').hasError(validation.type) && (formdata.get('matching_passwords').get('confirm').dirty || formdata.get('matching_passwords').get('confirm').touched)\">\n        {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n\n\n    <ion-button type=\"submit\" style=\"width:50%;\" color=\"danger\" [disabled]=\"!formdata.valid\">Change Password</ion-button>\n\n</ion-list>\n</form>\n\n<!-- <ion-button style=\"width:45%;\"></ion-button> -->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/settings/settings.page.scss":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.login-card {\r\n  max-height: 50vh;\r\n  overflow: hidden;\r\n}\r\n*/\n.error-message {\n  color: red;\n  font-size: 14px;\n  margin-left: 10px;\n  margin-top: 10px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvRDpcXGNkYWNcXG5ld3MgYXBwXFxpb25pY1xcbmV3c2FwcC9zcmNcXGFwcFxcc2V0dGluZ3NcXHNldHRpbmdzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0NDSUM7QURHRDtFQUVFLFVBQVU7RUFDVixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoubG9naW4tY2FyZCB7XHJcbiAgbWF4LWhlaWdodDogNTB2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbiovXHJcblxyXG5cclxuLmVycm9yLW1lc3NhZ2Vcclxue1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn0iLCIvKi5sb2dpbi1jYXJkIHtcclxuICBtYXgtaGVpZ2h0OiA1MHZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuKi9cbi5lcnJvci1tZXNzYWdlIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/settings/settings.page.ts":
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _s1_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../s1.service */ "./src/app/s1.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var SettingsPage = /** @class */ (function () {
    function SettingsPage(router, s1, toastctr) {
        var _this = this;
        this.router = router;
        this.s1 = s1;
        this.toastctr = toastctr;
        this.matching_passwords_group = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            newpwd: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
            ])),
            confirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required)
        }, function (formGroup) {
            return _this.areEqual(formGroup);
        });
        this.formdata = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            oldpwd: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            matching_passwords: this.matching_passwords_group
        });
        this.validation_messages = {
            'newpwd': [
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
        var token = localStorage.getItem("token");
        if (token == null) {
            this.router.navigate(['/login']);
        }
        this.oldemail = localStorage.getItem("username");
        this.s1.profileDetails(this.oldemail).subscribe(function (res) {
            _this.name = res[0].name;
            _this.email = res[0].email;
            _this.gender = res[0].gender;
        });
    }
    SettingsPage.prototype.Save = function () {
        var _this = this;
        this.oldemail = localStorage.getItem("username");
        this.s1.editPro(this.name, this.email, this.gender, this.oldemail).subscribe(function (res) {
            //this.saved=res;
            localStorage.setItem("username", _this.email);
            _this.toastControl(1);
            console.log(res);
        });
    };
    SettingsPage.prototype.changebtn = function () {
        this.data = 1;
    };
    SettingsPage.prototype.areEqual = function (formGroup) {
        var pass = formGroup.get('newpwd').value;
        var confirmPass = formGroup.get('confirm').value;
        return pass == confirmPass ? null : { areEqual: true };
    };
    SettingsPage.prototype.submit = function (data) {
        var _this = this;
        console.log(data);
        console.log(data.matching_passwords.newpwd);
        this.s1.changepwd(data.oldpwd, data.matching_passwords.newpwd, this.email).subscribe(function (res) {
            _this.toastControl(0);
            console.log(res);
            _this.data = 0;
            _this.formdata.reset();
        }, function (error) {
            _this.toastControl(2);
            _this.formdata.reset();
            // data.pwd=null;
        });
    };
    SettingsPage.prototype.toastControl = function (x) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast, toast, toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(x == 1)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.toastctr.create({
                                message: 'Details Updated!!',
                                duration: 2000
                            })];
                    case 1:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 9];
                    case 3:
                        if (!(x == 0)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.toastctr.create({
                                message: 'Password changed successfully!!',
                                duration: 2000
                            })];
                    case 4:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 9];
                    case 6: return [4 /*yield*/, this.toastctr.create({
                            message: 'Old password is incorrect!!',
                            duration: 2000
                        })];
                    case 7:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 8:
                        _a.sent();
                        _a.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage.prototype.ngOnInit = function () {
    };
    SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.page.html */ "./src/app/settings/settings.page.html"),
            styles: [__webpack_require__(/*! ./settings.page.scss */ "./src/app/settings/settings.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _s1_service__WEBPACK_IMPORTED_MODULE_3__["S1Service"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], SettingsPage);
    return SettingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=settings-settings-module.js.map