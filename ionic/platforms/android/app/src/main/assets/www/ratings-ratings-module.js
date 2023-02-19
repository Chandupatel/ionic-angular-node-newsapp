(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ratings-ratings-module"],{

/***/ "./src/app/ratings/ratings.module.ts":
/*!*******************************************!*\
  !*** ./src/app/ratings/ratings.module.ts ***!
  \*******************************************/
/*! exports provided: RatingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingsPageModule", function() { return RatingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ratings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ratings.page */ "./src/app/ratings/ratings.page.ts");







var routes = [
    {
        path: '',
        component: _ratings_page__WEBPACK_IMPORTED_MODULE_6__["RatingsPage"]
    }
];
var RatingsPageModule = /** @class */ (function () {
    function RatingsPageModule() {
    }
    RatingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_ratings_page__WEBPACK_IMPORTED_MODULE_6__["RatingsPage"]]
        })
    ], RatingsPageModule);
    return RatingsPageModule;
}());



/***/ }),

/***/ "./src/app/ratings/ratings.page.html":
/*!*******************************************!*\
  !*** ./src/app/ratings/ratings.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n  \t<ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Rate Us</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<!--   <div class=\"rate\">\n    <input type=\"radio\" id=\"star5\" name=\"rating\" [(ngModel)]=\"rating\" value=\"5\" />\n    <label for=\"star5\" title=\"text\">5 stars</label>\n    <input type=\"radio\" id=\"star4\" name=\"rating\" [(ngModel)]=\"rating\" value=\"4\" />\n    <label for=\"star4\" title=\"text\">4 stars</label>\n    <input type=\"radio\" id=\"star3\" name=\"rating\" [(ngModel)]=\"rating\" value=\"3\" />\n    <label for=\"star3\" title=\"text\">3 stars</label>\n    <input type=\"radio\" id=\"star2\" name=\"rating\" [(ngModel)]=\"rating\" value=\"2\" />\n    <label for=\"star2\" title=\"text\">2 stars</label>\n    <input type=\"radio\" id=\"star1\" name=\"rating\" [(ngModel)]=\"rating\" value=\"1\" />\n    <label for=\"star1\" title=\"text\">1 star</label>\n  </div> -->\n\n\n<fieldset class=\"rating\">\n    <legend>Please rate:</legend>\n    <input type=\"radio\" id=\"star5\" name=\"rating\" [(ngModel)]=\"rating\" value=\"5\" /><label for=\"star5\" title=\"Rocks!\">5 stars</label>\n    <input type=\"radio\" id=\"star4\" name=\"rating\" [(ngModel)]=\"rating\" value=\"4\" /><label for=\"star4\" title=\"Pretty good\">4 stars</label>\n    <input type=\"radio\" id=\"star3\" name=\"rating\" [(ngModel)]=\"rating\" value=\"3\" /><label for=\"star3\" title=\"Meh\">3 stars</label>\n    <input type=\"radio\" id=\"star2\" name=\"rating\" [(ngModel)]=\"rating\" value=\"2\" /><label for=\"star2\" title=\"Kinda bad\">2 stars</label>\n    <input type=\"radio\" id=\"star1\" name=\"rating\" [(ngModel)]=\"rating\" value=\"1\" /><label for=\"star1\" title=\"Sucks big time\">1 star</label>\n</fieldset>\n  \n\n\n\n  <ion-button  style=\"width:50%;\" color=\"danger\" (click)=\"rate()\">Submit</ion-button>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/ratings/ratings.page.scss":
/*!*******************************************!*\
  !*** ./src/app/ratings/ratings.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n.rate {\r\n    float: left;\r\n    height: 46px;\r\n    padding: 0 10px;\r\n}\r\n.rate:not(:checked) > input {\r\n    position:absolute;\r\n    top:-9999px;\r\n}\r\n.rate:not(:checked) > label {\r\n    float:right;\r\n    width:1em;\r\n    overflow:hidden;\r\n    white-space:nowrap;\r\n    cursor:pointer;\r\n    font-size:30px;\r\n    color:#ccc;\r\n}\r\n.rate:not(:checked) > label:before {\r\n    content: '★ ';\r\n}\r\n.rate > input:checked ~ label {\r\n    color: #ffc700;    \r\n}\r\n.rate:not(:checked) > label:hover,\r\n.rate:not(:checked) > label:hover ~ label {\r\n    color: #deb217;  \r\n}\r\n.rate > input:checked + label:hover,\r\n.rate > input:checked + label:hover ~ label,\r\n.rate > input:checked ~ label:hover,\r\n.rate > input:checked ~ label:hover ~ label,\r\n.rate > label:hover ~ input:checked ~ label {\r\n    color: #c59b08;\r\n}*/\n/* Modified from: https://github.com/mukulkant/Star-rating-using-pure-css */\n.rating {\n  float: left; }\n/* :not(:checked) is a filter, so that browsers that don’t support :checked don’t \r\n   follow these rules. Every browser that supports :checked also supports :not(), so\r\n   it doesn’t make the test unnecessarily selective */\n.rating:not(:checked) > input {\n  position: absolute;\n  top: -9999px;\n  clip: rect(0, 0, 0, 0); }\n.rating:not(:checked) > label {\n  float: right;\n  width: 1em;\n  padding: 0 .1em;\n  overflow: hidden;\n  white-space: nowrap;\n  cursor: pointer;\n  font-size: 200%;\n  line-height: 1.2;\n  color: #ddd;\n  text-shadow: 1px 1px #bbb, 2px 2px #666, 0.1em 0.1em 0.2em rgba(0, 0, 0, 0.5); }\n.rating:not(:checked) > label:before {\n  content: '★ '; }\n.rating > input:checked ~ label {\n  color: #f70;\n  text-shadow: 1px 1px #c60, 2px 2px #940, 0.1em 0.1em 0.2em rgba(0, 0, 0, 0.5); }\n.rating:not(:checked) > label:hover,\n.rating:not(:checked) > label:hover ~ label {\n  color: gold;\n  text-shadow: 1px 1px goldenrod, 2px 2px #B57340, 0.1em 0.1em 0.2em rgba(0, 0, 0, 0.5); }\n.rating > input:checked + label:hover,\n.rating > input:checked + label:hover ~ label,\n.rating > input:checked ~ label:hover,\n.rating > input:checked ~ label:hover ~ label,\n.rating > label:hover ~ input:checked ~ label {\n  color: #ea0;\n  text-shadow: 1px 1px goldenrod, 2px 2px #B57340, 0.1em 0.1em 0.2em rgba(0, 0, 0, 0.5); }\n.rating > label:active {\n  position: relative;\n  top: 2px;\n  left: 2px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmF0aW5ncy9yYXRpbmdzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmF0aW5ncy9EOlxcY2RhY1xcbmV3cyBhcHBcXGlvbmljXFxuZXdzYXBwL3NyY1xcYXBwXFxyYXRpbmdzXFxyYXRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VEdUNFO0FDQ0YsMkVBQUE7QUFHQTtFQUNJLFdBQVUsRUFBQTtBQUdkOztxREREcUQ7QUNJckQ7RUFDSSxrQkFBaUI7RUFDakIsWUFBVztFQUNYLHNCQUFrQixFQUFBO0FBR3RCO0VBQ0ksWUFBVztFQUNYLFVBQVM7RUFDVCxlQUFjO0VBQ2QsZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsZUFBYztFQUNkLGVBQWM7RUFDZCxnQkFBZTtFQUNmLFdBQVU7RUFDViw2RUFBcUUsRUFBQTtBQUd6RTtFQUNJLGFBQVMsRUFBSztBQUdsQjtFQUNJLFdBQVc7RUFDWCw2RUFBcUUsRUFBQTtBQUd6RTs7RUFFSSxXQUFXO0VBQ1gscUZBQTZFLEVBQUE7QUFHakY7Ozs7O0VBS0ksV0FBVztFQUNYLHFGQUE2RSxFQUFBO0FBR2pGO0VBQ0ksa0JBQWlCO0VBQ2pCLFFBQU87RUFDUCxTQUFRLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yYXRpbmdzL3JhdGluZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqe1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4ucmF0ZSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGhlaWdodDogNDZweDtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxufVxyXG4ucmF0ZTpub3QoOmNoZWNrZWQpID4gaW5wdXQge1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB0b3A6LTk5OTlweDtcclxufVxyXG4ucmF0ZTpub3QoOmNoZWNrZWQpID4gbGFiZWwge1xyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICB3aWR0aDoxZW07XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICB3aGl0ZS1zcGFjZTpub3dyYXA7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTozMHB4O1xyXG4gICAgY29sb3I6I2NjYztcclxufVxyXG4ucmF0ZTpub3QoOmNoZWNrZWQpID4gbGFiZWw6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICfimIUgJztcclxufVxyXG4ucmF0ZSA+IGlucHV0OmNoZWNrZWQgfiBsYWJlbCB7XHJcbiAgICBjb2xvcjogI2ZmYzcwMDsgICAgXHJcbn1cclxuLnJhdGU6bm90KDpjaGVja2VkKSA+IGxhYmVsOmhvdmVyLFxyXG4ucmF0ZTpub3QoOmNoZWNrZWQpID4gbGFiZWw6aG92ZXIgfiBsYWJlbCB7XHJcbiAgICBjb2xvcjogI2RlYjIxNzsgIFxyXG59XHJcbi5yYXRlID4gaW5wdXQ6Y2hlY2tlZCArIGxhYmVsOmhvdmVyLFxyXG4ucmF0ZSA+IGlucHV0OmNoZWNrZWQgKyBsYWJlbDpob3ZlciB+IGxhYmVsLFxyXG4ucmF0ZSA+IGlucHV0OmNoZWNrZWQgfiBsYWJlbDpob3ZlcixcclxuLnJhdGUgPiBpbnB1dDpjaGVja2VkIH4gbGFiZWw6aG92ZXIgfiBsYWJlbCxcclxuLnJhdGUgPiBsYWJlbDpob3ZlciB+IGlucHV0OmNoZWNrZWQgfiBsYWJlbCB7XHJcbiAgICBjb2xvcjogI2M1OWIwODtcclxufSovXG4vKiBNb2RpZmllZCBmcm9tOiBodHRwczovL2dpdGh1Yi5jb20vbXVrdWxrYW50L1N0YXItcmF0aW5nLXVzaW5nLXB1cmUtY3NzICovXG4ucmF0aW5nIHtcbiAgZmxvYXQ6IGxlZnQ7IH1cblxuLyogOm5vdCg6Y2hlY2tlZCkgaXMgYSBmaWx0ZXIsIHNvIHRoYXQgYnJvd3NlcnMgdGhhdCBkb27igJl0IHN1cHBvcnQgOmNoZWNrZWQgZG9u4oCZdCBcclxuICAgZm9sbG93IHRoZXNlIHJ1bGVzLiBFdmVyeSBicm93c2VyIHRoYXQgc3VwcG9ydHMgOmNoZWNrZWQgYWxzbyBzdXBwb3J0cyA6bm90KCksIHNvXHJcbiAgIGl0IGRvZXNu4oCZdCBtYWtlIHRoZSB0ZXN0IHVubmVjZXNzYXJpbHkgc2VsZWN0aXZlICovXG4ucmF0aW5nOm5vdCg6Y2hlY2tlZCkgPiBpbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtOTk5OXB4O1xuICBjbGlwOiByZWN0KDAsIDAsIDAsIDApOyB9XG5cbi5yYXRpbmc6bm90KDpjaGVja2VkKSA+IGxhYmVsIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogMWVtO1xuICBwYWRkaW5nOiAwIC4xZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAyMDAlO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBjb2xvcjogI2RkZDtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggI2JiYiwgMnB4IDJweCAjNjY2LCAwLjFlbSAwLjFlbSAwLjJlbSByZ2JhKDAsIDAsIDAsIDAuNSk7IH1cblxuLnJhdGluZzpub3QoOmNoZWNrZWQpID4gbGFiZWw6YmVmb3JlIHtcbiAgY29udGVudDogJ+KYhSAnOyB9XG5cbi5yYXRpbmcgPiBpbnB1dDpjaGVja2VkIH4gbGFiZWwge1xuICBjb2xvcjogI2Y3MDtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggI2M2MCwgMnB4IDJweCAjOTQwLCAwLjFlbSAwLjFlbSAwLjJlbSByZ2JhKDAsIDAsIDAsIDAuNSk7IH1cblxuLnJhdGluZzpub3QoOmNoZWNrZWQpID4gbGFiZWw6aG92ZXIsXG4ucmF0aW5nOm5vdCg6Y2hlY2tlZCkgPiBsYWJlbDpob3ZlciB+IGxhYmVsIHtcbiAgY29sb3I6IGdvbGQ7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IGdvbGRlbnJvZCwgMnB4IDJweCAjQjU3MzQwLCAwLjFlbSAwLjFlbSAwLjJlbSByZ2JhKDAsIDAsIDAsIDAuNSk7IH1cblxuLnJhdGluZyA+IGlucHV0OmNoZWNrZWQgKyBsYWJlbDpob3Zlcixcbi5yYXRpbmcgPiBpbnB1dDpjaGVja2VkICsgbGFiZWw6aG92ZXIgfiBsYWJlbCxcbi5yYXRpbmcgPiBpbnB1dDpjaGVja2VkIH4gbGFiZWw6aG92ZXIsXG4ucmF0aW5nID4gaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOmhvdmVyIH4gbGFiZWwsXG4ucmF0aW5nID4gbGFiZWw6aG92ZXIgfiBpbnB1dDpjaGVja2VkIH4gbGFiZWwge1xuICBjb2xvcjogI2VhMDtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggZ29sZGVucm9kLCAycHggMnB4ICNCNTczNDAsIDAuMWVtIDAuMWVtIDAuMmVtIHJnYmEoMCwgMCwgMCwgMC41KTsgfVxuXG4ucmF0aW5nID4gbGFiZWw6YWN0aXZlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDJweDtcbiAgbGVmdDogMnB4OyB9XG4iLCIvKip7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbi5yYXRlIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgaGVpZ2h0OiA0NnB4O1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG59XHJcbi5yYXRlOm5vdCg6Y2hlY2tlZCkgPiBpbnB1dCB7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDotOTk5OXB4O1xyXG59XHJcbi5yYXRlOm5vdCg6Y2hlY2tlZCkgPiBsYWJlbCB7XHJcbiAgICBmbG9hdDpyaWdodDtcclxuICAgIHdpZHRoOjFlbTtcclxuICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgIHdoaXRlLXNwYWNlOm5vd3JhcDtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOjMwcHg7XHJcbiAgICBjb2xvcjojY2NjO1xyXG59XHJcbi5yYXRlOm5vdCg6Y2hlY2tlZCkgPiBsYWJlbDpiZWZvcmUge1xyXG4gICAgY29udGVudDogJ+KYhSAnO1xyXG59XHJcbi5yYXRlID4gaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsIHtcclxuICAgIGNvbG9yOiAjZmZjNzAwOyAgICBcclxufVxyXG4ucmF0ZTpub3QoOmNoZWNrZWQpID4gbGFiZWw6aG92ZXIsXHJcbi5yYXRlOm5vdCg6Y2hlY2tlZCkgPiBsYWJlbDpob3ZlciB+IGxhYmVsIHtcclxuICAgIGNvbG9yOiAjZGViMjE3OyAgXHJcbn1cclxuLnJhdGUgPiBpbnB1dDpjaGVja2VkICsgbGFiZWw6aG92ZXIsXHJcbi5yYXRlID4gaW5wdXQ6Y2hlY2tlZCArIGxhYmVsOmhvdmVyIH4gbGFiZWwsXHJcbi5yYXRlID4gaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOmhvdmVyLFxyXG4ucmF0ZSA+IGlucHV0OmNoZWNrZWQgfiBsYWJlbDpob3ZlciB+IGxhYmVsLFxyXG4ucmF0ZSA+IGxhYmVsOmhvdmVyIH4gaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsIHtcclxuICAgIGNvbG9yOiAjYzU5YjA4O1xyXG59Ki9cclxuXHJcbi8qIE1vZGlmaWVkIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9tdWt1bGthbnQvU3Rhci1yYXRpbmctdXNpbmctcHVyZS1jc3MgKi9cclxuXHJcblxyXG4ucmF0aW5nIHtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbn1cclxuXHJcbi8qIDpub3QoOmNoZWNrZWQpIGlzIGEgZmlsdGVyLCBzbyB0aGF0IGJyb3dzZXJzIHRoYXQgZG9u4oCZdCBzdXBwb3J0IDpjaGVja2VkIGRvbuKAmXQgXHJcbiAgIGZvbGxvdyB0aGVzZSBydWxlcy4gRXZlcnkgYnJvd3NlciB0aGF0IHN1cHBvcnRzIDpjaGVja2VkIGFsc28gc3VwcG9ydHMgOm5vdCgpLCBzb1xyXG4gICBpdCBkb2VzbuKAmXQgbWFrZSB0aGUgdGVzdCB1bm5lY2Vzc2FyaWx5IHNlbGVjdGl2ZSAqL1xyXG4ucmF0aW5nOm5vdCg6Y2hlY2tlZCkgPiBpbnB1dCB7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDotOTk5OXB4O1xyXG4gICAgY2xpcDpyZWN0KDAsMCwwLDApO1xyXG59XHJcblxyXG4ucmF0aW5nOm5vdCg6Y2hlY2tlZCkgPiBsYWJlbCB7XHJcbiAgICBmbG9hdDpyaWdodDtcclxuICAgIHdpZHRoOjFlbTtcclxuICAgIHBhZGRpbmc6MCAuMWVtO1xyXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgd2hpdGUtc3BhY2U6bm93cmFwO1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6MjAwJTtcclxuICAgIGxpbmUtaGVpZ2h0OjEuMjtcclxuICAgIGNvbG9yOiNkZGQ7XHJcbiAgICB0ZXh0LXNoYWRvdzoxcHggMXB4ICNiYmIsIDJweCAycHggIzY2NiwgLjFlbSAuMWVtIC4yZW0gcmdiYSgwLDAsMCwuNSk7XHJcbn1cclxuXHJcbi5yYXRpbmc6bm90KDpjaGVja2VkKSA+IGxhYmVsOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAn4piFICc7XHJcbn1cclxuXHJcbi5yYXRpbmcgPiBpbnB1dDpjaGVja2VkIH4gbGFiZWwge1xyXG4gICAgY29sb3I6ICNmNzA7XHJcbiAgICB0ZXh0LXNoYWRvdzoxcHggMXB4ICNjNjAsIDJweCAycHggIzk0MCwgLjFlbSAuMWVtIC4yZW0gcmdiYSgwLDAsMCwuNSk7XHJcbn1cclxuXHJcbi5yYXRpbmc6bm90KDpjaGVja2VkKSA+IGxhYmVsOmhvdmVyLFxyXG4ucmF0aW5nOm5vdCg6Y2hlY2tlZCkgPiBsYWJlbDpob3ZlciB+IGxhYmVsIHtcclxuICAgIGNvbG9yOiBnb2xkO1xyXG4gICAgdGV4dC1zaGFkb3c6MXB4IDFweCBnb2xkZW5yb2QsIDJweCAycHggI0I1NzM0MCwgLjFlbSAuMWVtIC4yZW0gcmdiYSgwLDAsMCwuNSk7XHJcbn1cclxuXHJcbi5yYXRpbmcgPiBpbnB1dDpjaGVja2VkICsgbGFiZWw6aG92ZXIsXHJcbi5yYXRpbmcgPiBpbnB1dDpjaGVja2VkICsgbGFiZWw6aG92ZXIgfiBsYWJlbCxcclxuLnJhdGluZyA+IGlucHV0OmNoZWNrZWQgfiBsYWJlbDpob3ZlcixcclxuLnJhdGluZyA+IGlucHV0OmNoZWNrZWQgfiBsYWJlbDpob3ZlciB+IGxhYmVsLFxyXG4ucmF0aW5nID4gbGFiZWw6aG92ZXIgfiBpbnB1dDpjaGVja2VkIH4gbGFiZWwge1xyXG4gICAgY29sb3I6ICNlYTA7XHJcbiAgICB0ZXh0LXNoYWRvdzoxcHggMXB4IGdvbGRlbnJvZCwgMnB4IDJweCAjQjU3MzQwLCAuMWVtIC4xZW0gLjJlbSByZ2JhKDAsMCwwLC41KTtcclxufVxyXG5cclxuLnJhdGluZyA+IGxhYmVsOmFjdGl2ZSB7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHRvcDoycHg7XHJcbiAgICBsZWZ0OjJweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/ratings/ratings.page.ts":
/*!*****************************************!*\
  !*** ./src/app/ratings/ratings.page.ts ***!
  \*****************************************/
/*! exports provided: RatingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingsPage", function() { return RatingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _s1_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../s1.service */ "./src/app/s1.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var RatingsPage = /** @class */ (function () {
    function RatingsPage(router, s1, alertctr) {
        this.router = router;
        this.s1 = s1;
        this.alertctr = alertctr;
        var token = localStorage.getItem("token");
        // console.log(token);
        if (token == null) {
            this.router.navigate(['/login']);
        }
        var email = localStorage.getItem("username");
        this.s1.profileDetails(email).subscribe(function (res) {
            // this.rates=res[0].ratings;
            console.log("ratings" + res[0].ratings);
        });
    }
    RatingsPage.prototype.rate = function () {
        var _this = this;
        console.log("stars: " + this.rating);
        var email = localStorage.getItem("username");
        this.s1.ratings(this.rating, email).subscribe(function (res) {
            _this.alertControl();
            console.log(res);
        });
        // this.dis=true;
    };
    RatingsPage.prototype.alertControl = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertctr.create({
                            header: 'Ratings',
                            subHeader: 'Submitted Successfully!!',
                            message: this.rating + " Stars",
                            buttons: [
                                {
                                    text: 'OK',
                                    handler: function () {
                                        console.log('clicked Yes');
                                        _this.router.navigate(['/home']);
                                        _this.rating = null;
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    RatingsPage.prototype.ngOnInit = function () {
    };
    RatingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ratings',
            template: __webpack_require__(/*! ./ratings.page.html */ "./src/app/ratings/ratings.page.html"),
            styles: [__webpack_require__(/*! ./ratings.page.scss */ "./src/app/ratings/ratings.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _s1_service__WEBPACK_IMPORTED_MODULE_3__["S1Service"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], RatingsPage);
    return RatingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=ratings-ratings-module.js.map