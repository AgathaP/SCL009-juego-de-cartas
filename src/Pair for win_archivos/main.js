(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\n  <h1>Pair for win</h1>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/cards/cards.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/cards/cards.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"game\">\n  <img src=\"\" alt=\"\">\n\n  <img src=\"\" alt=\"\">\n\n  <!-- Formato para las cartas -->\n  <div class=\"objeto\">\n    <div class=\"carta\">\n      <div class=\"cara anverso\">\n        <img src=\"../../../assets/img/carta_rev.png\">\n      </div>\n      <div *ngFor=\"let card of cardList\" class=\"cara reverso\">\n        <img src=\"../../../assets/cards/As_rombos.PNG\">\n      </div>\n    </div>\n  </div>\n\n  <div class=\"objeto\">\n    <div class=\"carta\">\n      <div class=\"cara anverso\">\n          <img src=\"../../../assets/img/carta_rev.png\">        \n      </div>\n      <div *ngFor=\"let card of cardList\"  class=\"cara reverso\">\n        <img src=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/75379/carta_anv.png\">\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/play-again/play-again.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/play-again/play-again.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"play-again\">\n  <div class=\"btn-play\">\n    <button routerLink=\"/game\">Volver a jugar</button>\n  </div>\n  <div class=\"bottom-img\">\n    <img src=\"../../assets/img/poker-sin-descarte-madrid-escalera-300x169.png\" alt=\"\">\n  </div>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/start/start.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/start/start.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"start\">\n  <div class=\"btn-play\">\n    <button routerLink=\"/game\">Jugar</button>\n  </div>\n  <div class=\"instructions\">\n    <a routerLink=\"/instructions\">\n      <h6>Cómo jugar</h6>\n    </a>\n  </div>\n  <div class=\"bottom-img\">\n    <img src=\"../../assets/img/poker-sin-descarte-madrid-escalera-300x169.png\" alt=\"\">\n  </div>\n</section>\n"

/***/ }),

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_start_start_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/start/start.component */ "./src/app/components/start/start.component.ts");
/* harmony import */ var _components_cards_cards_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/cards/cards.component */ "./src/app/components/cards/cards.component.ts");
/* harmony import */ var _components_play_again_play_again_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/play-again/play-again.component */ "./src/app/components/play-again/play-again.component.ts");






const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    // {path: '**', component: StartComponent},
    { path: 'home', component: _components_start_start_component__WEBPACK_IMPORTED_MODULE_3__["StartComponent"] },
    { path: 'game', component: _components_cards_cards_component__WEBPACK_IMPORTED_MODULE_4__["CardsComponent"] },
    { path: 'play-again', component: _components_play_again_play_again_component__WEBPACK_IMPORTED_MODULE_5__["PlayAgainComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html{\n    display: grid;\n    grid-gap: .5em;\n    grid-template-columns: repeat(12, 1fr);\n    grid-template-rows: repeat(auto);\n    width: 100%;\n    height: 100%;\n    /* height: 38em; */\n  }\n\n  .title {\n    text-align: center;\n    padding-bottom: 3em;\n    padding-top: 4em;\n    font-size: 1.5em;\n    grid-column: 3/8;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLHNDQUFzQztJQUN0QyxnQ0FBZ0M7SUFDaEMsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1se1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1nYXA6IC41ZW07XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0byk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIC8qIGhlaWdodDogMzhlbTsgKi9cbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAzZW07XG4gICAgcGFkZGluZy10b3A6IDRlbTtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIGdyaWQtY29sdW1uOiAzLzg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


// import { GeneralService } from 'src/app/services/general.service';
let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_start_start_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/start/start.component */ "./src/app/components/start/start.component.ts");
/* harmony import */ var _components_play_again_play_again_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/play-again/play-again.component */ "./src/app/components/play-again/play-again.component.ts");
/* harmony import */ var _components_cards_cards_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/cards/cards.component */ "./src/app/components/cards/cards.component.ts");
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var _pipe_cards_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipe/cards.pipe */ "./src/app/pipe/cards.pipe.ts");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_start_start_component__WEBPACK_IMPORTED_MODULE_5__["StartComponent"],
            _components_play_again_play_again_component__WEBPACK_IMPORTED_MODULE_6__["PlayAgainComponent"],
            _components_cards_cards_component__WEBPACK_IMPORTED_MODULE_7__["CardsComponent"],
            _pipe_cards_pipe__WEBPACK_IMPORTED_MODULE_9__["CardsPipe"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        ],
        providers: [_services_general_service__WEBPACK_IMPORTED_MODULE_8__["GeneralService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/cards/cards.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/cards/cards.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* html { \n    box-sizing  : border-box;\n    font-family : sans-serif;\n    font-size   : 16px;\n    color       : #fff;\n    background  : #333;\n  } */\n /**, *::after, *::before {\n    box-sizing : inherit;\n    margin     : 0;\n    padding    : 0;\n    outline    : 0 none transparent;\n    border     : 0 none transparent;\n    transition : all 1s ease-in-out;  \n  }/* \n  body {\n    min-height       : 100vh;\n    max-width        : 100vw;\n  \n    display          : flex;\n    justify-content  : center;\n    background-image : url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/75379/bg1.png')\n  }\n   */\n .objeto {\n    width       : 20em;\n    height      : 15em;  \n    margin-top  : 2vh;\n    padding     : 4em;\n    cursor      : pointer;\n    perspective : 1000px;\n  }\n .objeto:hover .carta {\n    transform: rotateY(180deg);\n  }\n .carta {\n    position        : relative;\n    transform-style : preserve-3d;\n  }\n .cara {\n    position : absolute;\n    width    : 100%;\n    height   : 100%;\n  }\n .reverso {\n      transform           : rotateY(180deg);\n      -webkit-backface-visibility : hidden;\n              backface-visibility : hidden;\n  }\n img {\n      max-width : 100%;\n      height    : auto;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJkcy9jYXJkcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7S0FNSztDQUNKOzs7Ozs7Ozs7Ozs7Ozs7O0lBZ0JHO0NBRUY7SUFDRSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLG9CQUFvQjtFQUN0QjtDQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0NBQ0E7SUFDRSwwQkFBMEI7SUFDMUIsNkJBQTZCO0VBQy9CO0NBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGVBQWU7RUFDakI7Q0FDQTtNQUNJLHFDQUFxQztNQUNyQyxvQ0FBNEI7Y0FBNUIsNEJBQTRCO0VBQ2hDO0NBQ0E7TUFDSSxnQkFBZ0I7TUFDaEIsZ0JBQWdCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXJkcy9jYXJkcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogaHRtbCB7IFxuICAgIGJveC1zaXppbmcgIDogYm9yZGVyLWJveDtcbiAgICBmb250LWZhbWlseSA6IHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplICAgOiAxNnB4O1xuICAgIGNvbG9yICAgICAgIDogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kICA6ICMzMzM7XG4gIH0gKi9cbiAvKiosICo6OmFmdGVyLCAqOjpiZWZvcmUge1xuICAgIGJveC1zaXppbmcgOiBpbmhlcml0O1xuICAgIG1hcmdpbiAgICAgOiAwO1xuICAgIHBhZGRpbmcgICAgOiAwO1xuICAgIG91dGxpbmUgICAgOiAwIG5vbmUgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyICAgICA6IDAgbm9uZSB0cmFuc3BhcmVudDtcbiAgICB0cmFuc2l0aW9uIDogYWxsIDFzIGVhc2UtaW4tb3V0OyAgXG4gIH0vKiBcbiAgYm9keSB7XG4gICAgbWluLWhlaWdodCAgICAgICA6IDEwMHZoO1xuICAgIG1heC13aWR0aCAgICAgICAgOiAxMDB2dztcbiAgXG4gICAgZGlzcGxheSAgICAgICAgICA6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50ICA6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlIDogdXJsKCdodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby83NTM3OS9iZzEucG5nJylcbiAgfVxuICAgKi9cblxuICAub2JqZXRvIHtcbiAgICB3aWR0aCAgICAgICA6IDIwZW07XG4gICAgaGVpZ2h0ICAgICAgOiAxNWVtOyAgXG4gICAgbWFyZ2luLXRvcCAgOiAydmg7XG4gICAgcGFkZGluZyAgICAgOiA0ZW07XG4gICAgY3Vyc29yICAgICAgOiBwb2ludGVyO1xuICAgIHBlcnNwZWN0aXZlIDogMTAwMHB4O1xuICB9XG4gIC5vYmpldG86aG92ZXIgLmNhcnRhIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgfVxuICAuY2FydGEge1xuICAgIHBvc2l0aW9uICAgICAgICA6IHJlbGF0aXZlO1xuICAgIHRyYW5zZm9ybS1zdHlsZSA6IHByZXNlcnZlLTNkO1xuICB9XG4gIC5jYXJhIHtcbiAgICBwb3NpdGlvbiA6IGFic29sdXRlO1xuICAgIHdpZHRoICAgIDogMTAwJTtcbiAgICBoZWlnaHQgICA6IDEwMCU7XG4gIH1cbiAgLnJldmVyc28ge1xuICAgICAgdHJhbnNmb3JtICAgICAgICAgICA6IHJvdGF0ZVkoMTgwZGVnKTtcbiAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHkgOiBoaWRkZW47XG4gIH1cbiAgaW1nIHtcbiAgICAgIG1heC13aWR0aCA6IDEwMCU7XG4gICAgICBoZWlnaHQgICAgOiBhdXRvO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/components/cards/cards.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/cards/cards.component.ts ***!
  \*****************************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _db_cardlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../db/cardlist */ "./src/app/db/cardlist.ts");



let CardsComponent = class CardsComponent {
    constructor() {
        this.cardList = _db_cardlist__WEBPACK_IMPORTED_MODULE_2__["cardList"];
    }
    ngOnInit() {
    }
};
CardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cards',
        template: __webpack_require__(/*! raw-loader!./cards.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/cards/cards.component.html"),
        styles: [__webpack_require__(/*! ./cards.component.css */ "./src/app/components/cards/cards.component.css")]
    })
], CardsComponent);



/***/ }),

/***/ "./src/app/components/play-again/play-again.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/play-again/play-again.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGxheS1hZ2Fpbi9wbGF5LWFnYWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/play-again/play-again.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/play-again/play-again.component.ts ***!
  \***************************************************************/
/*! exports provided: PlayAgainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayAgainComponent", function() { return PlayAgainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PlayAgainComponent = class PlayAgainComponent {
    constructor() { }
    ngOnInit() {
    }
};
PlayAgainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-play-again',
        template: __webpack_require__(/*! raw-loader!./play-again.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/play-again/play-again.component.html"),
        styles: [__webpack_require__(/*! ./play-again.component.css */ "./src/app/components/play-again/play-again.component.css")]
    })
], PlayAgainComponent);



/***/ }),

/***/ "./src/app/components/start/start.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/start/start.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* para centrar{\ndisplay: flex; \nalign-items: center; \njustify-content: center;\n} */\n\n/* .start {\n  display: grid;\n  grid-gap: .5em;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(auto);\n  width: 100%;\n  height: 100%;\n} */\n\n/* centrar */\n\n/* .btn-play, .instructions, .bottom-img{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n} */\n\n/* Estilo del botón \"jugar\" */\n\n.btn-play {\n  grid-column: 2;\n  grid-row: 1;\n  text-align: center;\n}\n\n/* estilo del enlase a instrucciones */\n\n.instructions {\n  grid-column: 2;\n  grid-row: 2;\n  text-align: center;\n  font-size: 1.5em;\n  margin: .5em;\n}\n\n.instructions a {\n  color: rgb(12, 12, 12);\n}\n\n.instructions a:hover, .instructions a h6:hover {\n  color: rgb(182, 9, 9);\n  transition: 0s;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdGFydC9zdGFydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7O0FBRUg7Ozs7Ozs7R0FPRzs7QUFFSCxZQUFZOztBQUNaOzs7O0dBSUc7O0FBRUgsNkJBQTZCOztBQUM3QjtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBLHNDQUFzQzs7QUFDdEM7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3N0YXJ0L3N0YXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBwYXJhIGNlbnRyYXJ7XG5kaXNwbGF5OiBmbGV4OyBcbmFsaWduLWl0ZW1zOiBjZW50ZXI7IFxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59ICovXG5cbi8qIC5zdGFydCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtZ2FwOiAuNWVtO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0gKi9cblxuLyogY2VudHJhciAqL1xuLyogLmJ0bi1wbGF5LCAuaW5zdHJ1Y3Rpb25zLCAuYm90dG9tLWltZ3tcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59ICovXG5cbi8qIEVzdGlsbyBkZWwgYm90w7NuIFwianVnYXJcIiAqL1xuLmJ0bi1wbGF5IHtcbiAgZ3JpZC1jb2x1bW46IDI7XG4gIGdyaWQtcm93OiAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIGVzdGlsbyBkZWwgZW5sYXNlIGEgaW5zdHJ1Y2Npb25lcyAqL1xuLmluc3RydWN0aW9ucyB7XG4gIGdyaWQtY29sdW1uOiAyO1xuICBncmlkLXJvdzogMjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBtYXJnaW46IC41ZW07XG59XG5cbi5pbnN0cnVjdGlvbnMgYSB7XG4gIGNvbG9yOiByZ2IoMTIsIDEyLCAxMik7XG59XG5cbi5pbnN0cnVjdGlvbnMgYTpob3ZlciwgLmluc3RydWN0aW9ucyBhIGg2OmhvdmVyIHtcbiAgY29sb3I6IHJnYigxODIsIDksIDkpO1xuICB0cmFuc2l0aW9uOiAwcztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/start/start.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/start/start.component.ts ***!
  \*****************************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StartComponent = class StartComponent {
    constructor() { }
    ngOnInit() {
    }
};
StartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-start',
        template: __webpack_require__(/*! raw-loader!./start.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/start/start.component.html"),
        styles: [__webpack_require__(/*! ./start.component.css */ "./src/app/components/start/start.component.css")]
    })
], StartComponent);



/***/ }),

/***/ "./src/app/db/cardlist.ts":
/*!********************************!*\
  !*** ./src/app/db/cardlist.ts ***!
  \********************************/
/*! exports provided: cardList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardList", function() { return cardList; });
// import { from } from 'rxjs';
const cardList = [
    {
        id: 1,
        image: '../../cards/As_rombos.png'
    },
    {
        id: 2,
        image: 'HOLI'
    },
    {
        id: 3,
        image: 'HOLI'
    },
    {
        id: 4,
        image: 'HOLI'
    },
];


/***/ }),

/***/ "./src/app/pipe/cards.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipe/cards.pipe.ts ***!
  \************************************/
/*! exports provided: CardsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsPipe", function() { return CardsPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CardsPipe = class CardsPipe {
    transform(array, page_size, page_number) {
        if (!array.length)
            return [];
        if (page_size === 'all') {
            return array;
        }
        page_size = page_size || 4;
        page_number = page_number || 1;
        --page_number;
        return array.slice(page_number * page_size, (page_number + 1) * page_size);
    }
};
CardsPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'cards'
    })
], CardsPipe);



/***/ }),

/***/ "./src/app/services/general.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/general.service.ts ***!
  \*********************************************/
/*! exports provided: GeneralService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralService", function() { return GeneralService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GeneralService = class GeneralService {
    constructor() { }
};
GeneralService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GeneralService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!**********************************************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0/sockjs-node&sockPath=/sockjs-node ./src/main.ts ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/agatha/Escritorio/SCL009-juego-de-cartas/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node&sockPath=/sockjs-node */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node&sockPath=/sockjs-node");
module.exports = __webpack_require__(/*! /home/agatha/Escritorio/SCL009-juego-de-cartas/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map