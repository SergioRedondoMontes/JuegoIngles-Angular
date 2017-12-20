webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<body>\n  <app-micanvas></app-micanvas >\n</body>\n\n\n<!--The content below is only a placeholder and can be replaced.\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{title}}!\n  </h1>\n  <img width=\"300\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>\n-->\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app2';
        console.log("iggttuffturrtyrty");
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__micanvas_micanvas_component__ = __webpack_require__("../../../../../src/app/micanvas/micanvas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__milib_milib_component__ = __webpack_require__("../../../../../src/app/milib/milib.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__micanvas_micanvas_component__["a" /* MicanvasComponent */],
            __WEBPACK_IMPORTED_MODULE_4__milib_milib_component__["a" /* MilibComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/micanvas/actividad1.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Actividad1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__milib_views_panels_panel__ = __webpack_require__("../../../../../src/app/milib/views/panels/panel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__milib_dataholder_dataholder__ = __webpack_require__("../../../../../src/app/milib/dataholder/dataholder.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__milib_views_imgs_imagen__ = __webpack_require__("../../../../../src/app/milib/views/imgs/imagen.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__milib_views_buttons_button__ = __webpack_require__("../../../../../src/app/milib/views/buttons/button.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__milib_views_windows_window__ = __webpack_require__("../../../../../src/app/milib/views/windows/window.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__juegoAnimales__ = __webpack_require__("../../../../../src/app/micanvas/juegoAnimales.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__juegoColores__ = __webpack_require__("../../../../../src/app/micanvas/juegoColores.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__juegoEscuela__ = __webpack_require__("../../../../../src/app/micanvas/juegoEscuela.ts");








var Actividad1 = (function () {
    function Actividad1(vMotor) {
        this.motor = vMotor;
        this.imagenFondo = new __WEBPACK_IMPORTED_MODULE_2__milib_views_imgs_imagen__["a" /* Imagen */](this.motor, 0, 0, __WEBPACK_IMPORTED_MODULE_1__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth, __WEBPACK_IMPORTED_MODULE_1__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight);
        this.imagenFondo.setImg('./assets/fondoMenu.jpg');
        this.motor.setRaiz(this.imagenFondo);
        this.crearEscenarioMenu();
        this.crearEscenarioMenuJuego();
        this.audioMenu = new Audio('./assets/sounds/menu.mp3');
        this.audioMenu.play();
    }
    /**
     * OJO!! AUNQUE EN ESTE EJEMPLO SE USE EL PANEL, ES OBLIGATORIO CREAR UN OBJETO WINDOW EN EL MILIB, Y AGREGARLE EL BOTON
     * DE SALIR EN LA ESQUINA COMO SALE EN EL LA PAGINA WEB. HABRA QUE QUITAR EL PANEL Y USAR WINDOW
     */
    Actividad1.prototype.crearEscenarioMenu = function () {
        var pmw = __WEBPACK_IMPORTED_MODULE_1__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.6;
        var pmh = __WEBPACK_IMPORTED_MODULE_1__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight * 0.6;
        var pmx = __WEBPACK_IMPORTED_MODULE_1__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth2 - (pmw >> 1);
        var pmy = __WEBPACK_IMPORTED_MODULE_1__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight2 - (pmh >> 1);
        this.panelMenu = new __WEBPACK_IMPORTED_MODULE_0__milib_views_panels_panel__["a" /* Panel */](this.motor, pmx, pmy, pmw, pmh);
        // this.panelMenu.setImagePath('./assets/backgroundPanel.png');
        this.motor.addViewToParentView(this.imagenFondo, this.panelMenu);
        this.btnPlay = new __WEBPACK_IMPORTED_MODULE_3__milib_views_buttons_button__["a" /* Button */](this.motor, this.panelMenu.w / 2 - (this.panelMenu.w / 3) / 2, this.panelMenu.h / 6, this.panelMenu.w / 3, this.panelMenu.h / 4);
        this.btnPlay.setImagePath('./assets/BTNPlay.png');
        this.motor.addViewToParentView(this.panelMenu, this.btnPlay);
        this.btnPlay.setListener(this);
        this.btnExit = new __WEBPACK_IMPORTED_MODULE_3__milib_views_buttons_button__["a" /* Button */](this.motor, this.panelMenu.w / 2 - (this.panelMenu.w / 3) / 2, this.panelMenu.h / 1.8, this.panelMenu.w / 3, this.panelMenu.h / 4);
        this.btnExit.setImagePath('./assets/btnExit.png');
        this.motor.addViewToParentView(this.panelMenu, this.btnExit);
        this.btnExit.setListener(this);
    };
    Actividad1.prototype.crearEscenarioMenuJuego = function () {
        this.windowSelector = new __WEBPACK_IMPORTED_MODULE_4__milib_views_windows_window__["a" /* Window */](this.motor, 0, 0, __WEBPACK_IMPORTED_MODULE_1__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth, __WEBPACK_IMPORTED_MODULE_1__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight);
        this.motor.addViewToParentView(this.imagenFondo, this.windowSelector);
        this.btnColores = new __WEBPACK_IMPORTED_MODULE_3__milib_views_buttons_button__["a" /* Button */](this.motor, this.windowSelector.w * 0.1, this.windowSelector.h * 0.35, this.windowSelector.w * 0.20, this.windowSelector.h * 0.25);
        this.btnColores.setImagePath('./assets/btnColores.jpg');
        this.motor.addViewToParentView(this.windowSelector, this.btnColores);
        this.btnColores.setListener(this);
        this.btnAnimales = new __WEBPACK_IMPORTED_MODULE_3__milib_views_buttons_button__["a" /* Button */](this.motor, this.windowSelector.w * 0.4, this.windowSelector.h * 0.35, this.windowSelector.w * 0.20, this.windowSelector.h * 0.25);
        this.btnAnimales.setImagePath('./assets/btnAnimales.jpg');
        this.motor.addViewToParentView(this.windowSelector, this.btnAnimales);
        this.btnAnimales.setListener(this);
        this.btnEscuela = new __WEBPACK_IMPORTED_MODULE_3__milib_views_buttons_button__["a" /* Button */](this.motor, this.windowSelector.w * 0.7, this.windowSelector.h * 0.35, this.windowSelector.w * 0.20, this.windowSelector.h * 0.25);
        this.btnEscuela.setImagePath('./assets/btnEscuela.jpeg');
        this.motor.addViewToParentView(this.windowSelector, this.btnEscuela);
        this.btnEscuela.setListener(this);
        this.motor.setViewVisibility(this.windowSelector.uid, false);
    };
    Actividad1.prototype.buttonListenerOnClick = function (btn) {
        console.log("dentro");
        if (this.btnPlay == btn) {
            this.audioButtons = new Audio('./assets/sounds/button.mp3');
            this.audioButtons.play();
            console.log("play");
            this.motor.setViewVisibility(this.panelMenu.uid, false);
            this.motor.setViewVisibility(this.windowSelector.uid, true);
        }
        else if (this.btnExit == btn) {
            this.audioButtons = new Audio('./assets/sounds/button.mp3');
            this.audioButtons.play();
            this.motor.setViewVisibility(this.panelMenu.uid, false);
        }
        else if (this.btnAnimales == btn) {
            this.audioMenu.pause();
            this.audioSelectorGame = new Audio('./assets/sounds/button.mp3');
            this.audioSelectorGame.play();
            this.audioSelectorGame = new Audio('./assets/sounds/startBattle.mp3');
            this.audioSelectorGame.play();
            this.motor.setViewVisibility(this.windowSelector.uid, false);
            this.JuegoAnimales = new __WEBPACK_IMPORTED_MODULE_5__juegoAnimales__["a" /* JuegoAnimales */](this.motor, this);
        }
        else if (this.btnColores == btn) {
            this.audioMenu.pause();
            this.audioSelectorGame = new Audio('./assets/sounds/button.mp3');
            this.audioSelectorGame.play();
            this.motor.setViewVisibility(this.windowSelector.uid, false);
            this.JuegoColores = new __WEBPACK_IMPORTED_MODULE_6__juegoColores__["a" /* JuegoColores */](this.motor, this);
        }
        else if (this.btnEscuela == btn) {
            this.audioMenu.pause();
            this.audioSelectorGame = new Audio('./assets/sounds/button.mp3');
            this.audioSelectorGame.play();
            console.log("ahhh");
            this.motor.setViewVisibility(this.windowSelector.uid, false);
            this.audioButtons.pause();
            this.JuegoEscuela = new __WEBPACK_IMPORTED_MODULE_7__juegoEscuela__["a" /* JuegoEscuela */](this.motor, this);
        }
    };
    Actividad1.prototype.screenSizeChanged = function (vWidth, vHeight) {
        //console.log("SE HA ACTUALIZADO EL TEMAÑO DE LA PANTALLA");
    };
    Actividad1.prototype.buttonExitClicked = function (win) {
        console.log("PRESIONO SALIR");
    };
    Actividad1.prototype.buttonMoveClicked = function (win) {
        console.log("PRESIONO MOVER");
    };
    return Actividad1;
}());

//# sourceMappingURL=actividad1.js.map

/***/ }),

/***/ "../../../../../src/app/micanvas/juegoAnimales.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoAnimales; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__milib_views_panels_panel__ = __webpack_require__("../../../../../src/app/milib/views/panels/panel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__milib_events_eventsadmin__ = __webpack_require__("../../../../../src/app/milib/events/eventsadmin.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__ = __webpack_require__("../../../../../src/app/milib/dataholder/dataholder.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__milib_views_imgs_imagen__ = __webpack_require__("../../../../../src/app/milib/views/imgs/imagen.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__milib_views_windows_window__ = __webpack_require__("../../../../../src/app/milib/views/windows/window.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__milib_views_stickers_sticker__ = __webpack_require__("../../../../../src/app/milib/views/stickers/sticker.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__milib_views_labels_label__ = __webpack_require__("../../../../../src/app/milib/views/labels/label.ts");







var JuegoAnimales = (function () {
    function JuegoAnimales(vMotor, vActividad) {
        this.motor = vMotor;
        this.actividad = vActividad;
        this.audio = new Audio('./assets/sounds/welcome.mp3');
        var aux = this;
        setTimeout(function () {
            aux.audio.play();
        }, 2000);
        this.crearEscenarioJuego();
    }
    JuegoAnimales.prototype.crearEscenarioJuego = function () {
        var pmw = __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.6;
        var pmh = __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight * 0.6;
        var pmx = __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth2 - (pmw >> 1);
        var pmy = __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight2 - (pmh >> 1);
        this.imgFondoSiluetas = new __WEBPACK_IMPORTED_MODULE_3__milib_views_imgs_imagen__["a" /* Imagen */](this.motor, 0, 0, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.7, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight);
        this.imgFondoSiluetas.setImg('./assets/imagenesJuego/animales/animales2.jpg');
        this.motor.addViewToParentView(this.actividad.imagenFondo, this.imgFondoSiluetas);
        this.panelTrans = new __WEBPACK_IMPORTED_MODULE_0__milib_views_panels_panel__["a" /* Panel */](this.motor, 0, 0, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight);
        this.motor.addViewToParentView(this.imgFondoSiluetas, this.panelTrans);
        ///////////////////////////////////////////////////////////////////
        /*PANELS BLACK STICKERS*/
        this.panelBlackConejo = new __WEBPACK_IMPORTED_MODULE_0__milib_views_panels_panel__["a" /* Panel */](this.motor, 0, 0, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.15, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight * 0.38);
        this.panelBlackConejo.setColor("black");
        this.motor.addViewToParentView(this.panelTrans, this.panelBlackConejo);
        this.lblConejo = new __WEBPACK_IMPORTED_MODULE_6__milib_views_labels_label__["a" /* Label */](this.motor, 0, this.panelBlackConejo.h * 0.55, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.15, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight * 0.38);
        this.lblConejo.setTexto("Rabbit");
        this.lblConejo.setFontStyle("30px Comic Sans MS");
        this.motor.addViewToParentView(this.imgFondoSiluetas, this.lblConejo);
        this.motor.setViewVisibility(this.lblConejo.uid, false);
        this.panelBlackPez = new __WEBPACK_IMPORTED_MODULE_0__milib_views_panels_panel__["a" /* Panel */](this.motor, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.17, 0, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.175, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight * 0.38);
        this.panelBlackPez.setColor("black");
        this.motor.addViewToParentView(this.panelTrans, this.panelBlackPez);
        this.lblPez = new __WEBPACK_IMPORTED_MODULE_6__milib_views_labels_label__["a" /* Label */](this.motor, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.17, this.panelBlackPez.h * 0.45, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.175, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight * 0.38);
        this.lblPez.setTexto("Fish");
        this.lblPez.setFontStyle("30px Comic Sans MS");
        this.motor.addViewToParentView(this.imgFondoSiluetas, this.lblPez);
        this.motor.setViewVisibility(this.lblPez.uid, false);
        this.panelBlackLoro = new __WEBPACK_IMPORTED_MODULE_0__milib_views_panels_panel__["a" /* Panel */](this.motor, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.354, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight * 0.07, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.15, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight * 0.4);
        this.panelBlackLoro.setColor("black");
        this.motor.addViewToParentView(this.panelTrans, this.panelBlackLoro);
        this.lblLoro = new __WEBPACK_IMPORTED_MODULE_6__milib_views_labels_label__["a" /* Label */](this.motor, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.354, this.panelBlackLoro.h * (-0.40), __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.15, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight * 0.4);
        this.lblLoro.setTexto("Parrot");
        this.lblLoro.setFontStyle("30px Comic Sans MS");
        this.motor.addViewToParentView(this.imgFondoSiluetas, this.lblLoro);
        this.motor.setViewVisibility(this.lblLoro.uid, false);
        this.panelBlackPerro = new __WEBPACK_IMPORTED_MODULE_0__milib_views_panels_panel__["a" /* Panel */](this.motor, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.49, 0, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.19, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight * 0.457);
        this.panelBlackPerro.setColor("black");
        this.motor.addViewToParentView(this.panelTrans, this.panelBlackPerro);
        this.lblPerro = new __WEBPACK_IMPORTED_MODULE_6__milib_views_labels_label__["a" /* Label */](this.motor, this.panelBlackPerro.x + this.panelBlackPerro.x * 0.1, 0, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.19, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight * 0.457);
        this.lblPerro.setTexto("Dog");
        this.lblPerro.setFontStyle("30px Comic Sans MS");
        this.motor.addViewToParentView(this.imgFondoSiluetas, this.lblPerro);
        this.motor.setViewVisibility(this.lblPerro.uid, false);
        this.panelBlackGato = new __WEBPACK_IMPORTED_MODULE_0__milib_views_panels_panel__["a" /* Panel */](this.motor, 0, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight * 0.41, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.18, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight * 0.38);
        this.panelBlackGato.setColor("black");
        this.motor.addViewToParentView(this.panelTrans, this.panelBlackGato);
        this.lblGato = new __WEBPACK_IMPORTED_MODULE_6__milib_views_labels_label__["a" /* Label */](this.motor, 0, this.panelBlackGato.y * 1.6, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.18, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight * 0.38);
        this.lblGato.setTexto("Cat");
        this.lblGato.setFontStyle("30px Comic Sans MS");
        this.motor.addViewToParentView(this.imgFondoSiluetas, this.lblGato);
        this.motor.setViewVisibility(this.lblGato.uid, false);
        this.panelBlackTortuga = new __WEBPACK_IMPORTED_MODULE_0__milib_views_panels_panel__["a" /* Panel */](this.motor, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.22, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight * 0.53, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.175, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight * 0.42);
        this.panelBlackTortuga.setColor("black");
        this.motor.addViewToParentView(this.panelTrans, this.panelBlackTortuga);
        this.lblTortuga = new __WEBPACK_IMPORTED_MODULE_6__milib_views_labels_label__["a" /* Label */](this.motor, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.22, this.panelBlackTortuga.y * 1.2, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.175, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight * 0.42);
        this.lblTortuga.setTexto("Turtle");
        this.lblTortuga.setFontStyle("30px Comic Sans MS");
        this.motor.addViewToParentView(this.imgFondoSiluetas, this.lblTortuga);
        this.motor.setViewVisibility(this.lblTortuga.uid, false);
        this.panelBlackPajaro = new __WEBPACK_IMPORTED_MODULE_0__milib_views_panels_panel__["a" /* Panel */](this.motor, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.4, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight * 0.50, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.22, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight * 0.365);
        this.panelBlackPajaro.setColor("black");
        this.motor.addViewToParentView(this.panelTrans, this.panelBlackPajaro);
        this.lblPajaro = new __WEBPACK_IMPORTED_MODULE_6__milib_views_labels_label__["a" /* Label */](this.motor, this.panelBlackPajaro.x * 1.2, this.panelBlackPajaro.y * 0.75, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.22, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight * 0.365);
        this.lblPajaro.setTexto("Bird");
        this.lblPajaro.setFontStyle("30px Comic Sans MS");
        this.motor.addViewToParentView(this.imgFondoSiluetas, this.lblPajaro);
        this.motor.setViewVisibility(this.lblPajaro.uid, false);
        ///////////////////////////////////////////////////////////////////
        this.panelStickers = new __WEBPACK_IMPORTED_MODULE_0__milib_views_panels_panel__["a" /* Panel */](this.motor, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.7, 0, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.3, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight);
        this.panelStickers.setColor("white");
        this.motor.addViewToParentView(this.panelTrans, this.panelStickers);
        this.windowJuego = new __WEBPACK_IMPORTED_MODULE_4__milib_views_windows_window__["a" /* Window */](this.motor, 0, 0, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.7, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight);
        this.windowJuego.setImagePath('./assets/imagenesJuego/animales/fAnimales1.png');
        this.motor.addViewToParentView(this.panelTrans, this.windowJuego);
        this.conejo = new __WEBPACK_IMPORTED_MODULE_5__milib_views_stickers_sticker__["a" /* Sticker */](this.motor, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.6, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight * 0.01, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.12, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight * 0.32);
        this.conejo.setImg('./assets/imagenesJuego/animales/conejo.png');
        this.conejo.setName("conejo");
        this.motor.addViewToParentView(this.windowJuego, this.conejo);
        this.conejo.setListener(this);
        __WEBPACK_IMPORTED_MODULE_1__milib_events_eventsadmin__["a" /* EventsAdmin */].instance.addMouseDragToView(this.conejo);
        this.gato = new __WEBPACK_IMPORTED_MODULE_5__milib_views_stickers_sticker__["a" /* Sticker */](this.motor, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.65, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight * 0.38, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.15, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight * 0.35);
        this.gato.setImg('./assets/imagenesJuego/animales/gato.png');
        this.gato.setName("gato");
        this.motor.addViewToParentView(this.windowJuego, this.gato);
        this.gato.setListener(this);
        __WEBPACK_IMPORTED_MODULE_1__milib_events_eventsadmin__["a" /* EventsAdmin */].instance.addMouseDragToView(this.gato);
        this.pez = new __WEBPACK_IMPORTED_MODULE_5__milib_views_stickers_sticker__["a" /* Sticker */](this.motor, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.67, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight * 0.7, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.18, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight * 0.28);
        this.pez.setImg('./assets/imagenesJuego/animales/pez.png');
        this.pez.setName("pez");
        this.motor.addViewToParentView(this.windowJuego, this.pez);
        this.pez.setListener(this);
        __WEBPACK_IMPORTED_MODULE_1__milib_events_eventsadmin__["a" /* EventsAdmin */].instance.addMouseDragToView(this.pez);
        this.loro = new __WEBPACK_IMPORTED_MODULE_5__milib_views_stickers_sticker__["a" /* Sticker */](this.motor, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.72, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight * 0.05, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.15, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight * 0.35);
        this.loro.setImg('./assets/imagenesJuego/animales/loro.png');
        this.loro.setName("loro");
        this.motor.addViewToParentView(this.windowJuego, this.loro);
        this.loro.setListener(this);
        __WEBPACK_IMPORTED_MODULE_1__milib_events_eventsadmin__["a" /* EventsAdmin */].instance.addMouseDragToView(this.loro);
        this.perro = new __WEBPACK_IMPORTED_MODULE_5__milib_views_stickers_sticker__["a" /* Sticker */](this.motor, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.84, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight * 0.015, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.19, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight * 0.4);
        this.perro.setImg('./assets/imagenesJuego/animales/perro.png');
        this.perro.setName("perro");
        this.motor.addViewToParentView(this.windowJuego, this.perro);
        this.perro.setListener(this);
        __WEBPACK_IMPORTED_MODULE_1__milib_events_eventsadmin__["a" /* EventsAdmin */].instance.addMouseDragToView(this.perro);
        this.tortuga = new __WEBPACK_IMPORTED_MODULE_5__milib_views_stickers_sticker__["a" /* Sticker */](this.motor, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.8, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight * 0.4, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.19, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight * 0.29);
        this.tortuga.setImg('./assets/imagenesJuego/animales/tortuga.png');
        this.tortuga.setName("tortuga");
        this.motor.addViewToParentView(this.windowJuego, this.tortuga);
        this.tortuga.setListener(this);
        __WEBPACK_IMPORTED_MODULE_1__milib_events_eventsadmin__["a" /* EventsAdmin */].instance.addMouseDragToView(this.tortuga);
        this.pajaro = new __WEBPACK_IMPORTED_MODULE_5__milib_views_stickers_sticker__["a" /* Sticker */](this.motor, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.84, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight * 0.67, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.18, __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight * 0.35);
        this.pajaro.setImg('./assets/imagenesJuego/animales/pajaro.png');
        this.pajaro.setName("pajaro");
        this.motor.addViewToParentView(this.windowJuego, this.pajaro);
        this.pajaro.setListener(this);
        __WEBPACK_IMPORTED_MODULE_1__milib_events_eventsadmin__["a" /* EventsAdmin */].instance.addMouseDragToView(this.pajaro);
        this.imgVictoria = new __WEBPACK_IMPORTED_MODULE_3__milib_views_imgs_imagen__["a" /* Imagen */](this.motor, pmx, pmy, pmw, pmh);
        this.imgVictoria.setImg("./assets/great.jpg");
        this.motor.addViewToParentView(this.imgFondoSiluetas, this.imgVictoria);
        this.motor.setViewVisibility(this.imgVictoria.uid, false);
        // PRUEBA         this.motor.setViewVisibility(this.windowJuego.uid,false);
        /*
        this.imgPrueba = new Imagen(this.motor,0,0,this.windowJuego.w*0.2,this.windowJuego.h*0.38);
        this.imgPrueba.setImg('./assets/btnColores.jpg');
        this.motor.addViewToParentView(this.windowJuego,this.imgPrueba);
        */
    };
    JuegoAnimales.prototype.buttonListenerOnClick = function (btn) {
    };
    JuegoAnimales.prototype.buttonListenerOnUp = function (sticker) {
        console.log("holaaaaaaaaaa");
        console.log("Nombre: " + sticker.getName());
        if (sticker.getName() == 'conejo' && (sticker.x > 0 && sticker.x < __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.15) && (sticker.y > 0 && sticker.y < __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight * 0.35)) {
            this.motor.setViewVisibility(sticker.uid, false);
            this.motor.setViewVisibility(this.panelBlackConejo.uid, false);
            this.audio = new Audio('./assets/sounds/rabbit.mp3');
            this.audio.play();
            this.motor.setViewVisibility(this.lblConejo.uid, true);
        }
        else if (sticker.getName() == 'gato' && (sticker.x > 0 && sticker.x < __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.18) && (sticker.y > __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight * 0.41 && sticker.y < __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight * 0.76)) {
            this.motor.setViewVisibility(sticker.uid, false);
            this.motor.setViewVisibility(this.panelBlackGato.uid, false);
            this.audio = new Audio('./assets/sounds/cat.mp3');
            this.audio.play();
            this.motor.setViewVisibility(this.lblGato.uid, true);
        }
        else if (sticker.getName() == 'pez' && (sticker.x > __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.17 && sticker.x < __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.345) && (sticker.y > 0 && sticker.y < __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight * 0.38)) {
            this.motor.setViewVisibility(sticker.uid, false);
            this.motor.setViewVisibility(this.panelBlackPez.uid, false);
            this.audio = new Audio('./assets/sounds/fish.mp3');
            this.audio.play();
            this.motor.setViewVisibility(this.lblPez.uid, true);
        }
        else if (sticker.getName() == 'loro' && (sticker.x > __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.354 && sticker.x < __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.484) && (sticker.y > 0 && sticker.y < __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight * 0.452)) {
            this.motor.setViewVisibility(sticker.uid, false);
            this.motor.setViewVisibility(this.panelBlackLoro.uid, false);
            this.audio = new Audio('./assets/sounds/parrot.mp3');
            this.audio.play();
            this.motor.setViewVisibility(this.lblLoro.uid, true);
        }
        else if (sticker.getName() == 'perro' && (sticker.x > __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.49 && sticker.x < __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.68) && (sticker.y > 0 && sticker.y < __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight * 0.457)) {
            this.motor.setViewVisibility(sticker.uid, false);
            this.motor.setViewVisibility(this.panelBlackPerro.uid, false);
            this.audio = new Audio('./assets/sounds/dog.mp3');
            this.audio.play();
            this.motor.setViewVisibility(this.lblPerro.uid, true);
        }
        else if (sticker.getName() == 'tortuga' && (sticker.x > __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.22 && sticker.x < __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.75) && (sticker.y > __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight * 0.53 && sticker.y < __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight * 0.95)) {
            this.motor.setViewVisibility(sticker.uid, false);
            this.motor.setViewVisibility(this.panelBlackTortuga.uid, false);
            this.audio = new Audio('./assets/sounds/turtle.mp3');
            this.audio.play();
            this.motor.setViewVisibility(this.lblTortuga.uid, true);
        }
        else if (sticker.getName() == 'pajaro' && (sticker.x > __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.4 && sticker.x < __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth * 0.62) && (sticker.y > __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight * 0.5 && sticker.y < __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight * 0.865)) {
            this.motor.setViewVisibility(sticker.uid, false);
            this.motor.setViewVisibility(this.panelBlackPajaro.uid, false);
            this.audio = new Audio('./assets/sounds/bird.mp3');
            this.audio.play();
            this.motor.setViewVisibility(this.lblPajaro.uid, true);
        }
        this.comprobarVictoria();
    };
    JuegoAnimales.prototype.screenSizeChanged = function (vWidth, vHeight) {
        //console.log("SE HA ACTUALIZADO EL TEMAÑO DE LA PANTALLA");
    };
    JuegoAnimales.prototype.buttonExitClicked = function (win) {
        console.log("PRESIONO SALIR");
    };
    JuegoAnimales.prototype.buttonMoveClicked = function (win) {
        console.log("PRESIONO MOVER");
    };
    JuegoAnimales.prototype.comprobarVictoria = function () {
        if (this.panelBlackConejo.blVisible == false && this.panelBlackGato.blVisible == false && this.panelBlackPez.blVisible == false && this.panelBlackLoro.blVisible == false && this.panelBlackPerro.blVisible == false && this.panelBlackTortuga.blVisible == false && this.panelBlackPajaro.blVisible == false) {
            console.log("GANSTEEEEEE!!!!!!!!!!!!! YUPIIIIIIIIIIII!!!!!!!");
            var aux = this;
            setTimeout(function () {
                aux.motor.setViewVisibility(aux.imgVictoria.uid, true);
                aux.audioGreat2 = new Audio('./assets/sounds/aplausos.mp3');
                aux.audioGreat1 = new Audio('./assets/sounds/congratulations.mp3');
                aux.audioGreat2.play();
                aux.audioGreat1.play();
                setTimeout(function () {
                    location.reload(); // recarga la página para volver al menu
                }, 3000);
            }, 2500);
        }
    };
    return JuegoAnimales;
}());

//# sourceMappingURL=juegoAnimales.js.map

/***/ }),

/***/ "../../../../../src/app/micanvas/juegoColores.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoColores; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__milib_views_panels_panel__ = __webpack_require__("../../../../../src/app/milib/views/panels/panel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__milib_dataholder_dataholder__ = __webpack_require__("../../../../../src/app/milib/dataholder/dataholder.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__milib_views_imgs_imagen__ = __webpack_require__("../../../../../src/app/milib/views/imgs/imagen.ts");



var JuegoColores = (function () {
    function JuegoColores(vMotor, vActividad) {
        this.motor = vMotor;
        this.actividad = vActividad;
        this.crearEscenarioJuego();
        // this.motor=vMotor;
        // this.imagenFondo=new Imagen(this.motor,0,0,DataHolder.instance.nScreenWidth,DataHolder.instance.nScreenHeight);
        // this.imagenFondo.setImg('./assets/fondoMenu.jpg');
        // this.motor.setRaiz(this.imagenFondo);
    }
    JuegoColores.prototype.crearEscenarioJuego = function () {
        this.imgFondoColores = new __WEBPACK_IMPORTED_MODULE_2__milib_views_imgs_imagen__["a" /* Imagen */](this.motor, 0, 0, __WEBPACK_IMPORTED_MODULE_1__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth, __WEBPACK_IMPORTED_MODULE_1__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight);
        this.imgFondoColores.setImg('./assets/comingSoon.jpg');
        this.motor.addViewToParentView(this.actividad.imagenFondo, this.imgFondoColores);
        this.panelImg = new __WEBPACK_IMPORTED_MODULE_0__milib_views_panels_panel__["a" /* Panel */](this.motor, 0, 0, __WEBPACK_IMPORTED_MODULE_1__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth, __WEBPACK_IMPORTED_MODULE_1__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight);
        this.motor.addViewToParentView(this.imgFondoColores, this.panelImg);
    };
    JuegoColores.prototype.buttonListenerOnClick = function (btn) {
    };
    JuegoColores.prototype.screenSizeChanged = function (vWidth, vHeight) {
        //console.log("SE HA ACTUALIZADO EL TEMAÑO DE LA PANTALLA");
    };
    JuegoColores.prototype.buttonExitClicked = function (win) {
        console.log("PRESIONO SALIR");
    };
    JuegoColores.prototype.buttonMoveClicked = function (win) {
        console.log("PRESIONO MOVER");
    };
    return JuegoColores;
}());

//# sourceMappingURL=juegoColores.js.map

/***/ }),

/***/ "../../../../../src/app/micanvas/juegoEscuela.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoEscuela; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__milib_views_panels_panel__ = __webpack_require__("../../../../../src/app/milib/views/panels/panel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__milib_dataholder_dataholder__ = __webpack_require__("../../../../../src/app/milib/dataholder/dataholder.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__milib_views_imgs_imagen__ = __webpack_require__("../../../../../src/app/milib/views/imgs/imagen.ts");



var JuegoEscuela = (function () {
    function JuegoEscuela(vMotor, vActividad) {
        console.log("----------------------->>>>>> ");
        this.motor = vMotor;
        this.actividad = vActividad;
        this.crearEscenarioJuego();
    }
    JuegoEscuela.prototype.crearEscenarioJuego = function () {
        this.imgFondoEscuela = new __WEBPACK_IMPORTED_MODULE_2__milib_views_imgs_imagen__["a" /* Imagen */](this.motor, 0, 0, __WEBPACK_IMPORTED_MODULE_1__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth, __WEBPACK_IMPORTED_MODULE_1__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight);
        this.imgFondoEscuela.setImg('./assets/comingSoon.jpg');
        this.motor.addViewToParentView(this.actividad.imagenFondo, this.imgFondoEscuela);
        this.panelImg = new __WEBPACK_IMPORTED_MODULE_0__milib_views_panels_panel__["a" /* Panel */](this.motor, 0, 0, __WEBPACK_IMPORTED_MODULE_1__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth, __WEBPACK_IMPORTED_MODULE_1__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight);
        this.motor.addViewToParentView(this.imgFondoEscuela, this.panelImg);
        // console.log("----------------------->>>>>> JUEGO ESCUELA");
        // this.windowJuego = new Window(this.motor,0,0,DataHolder.instance.nScreenWidth,DataHolder.instance.nScreenHeight);
        // this.windowJuego.setImagePath('./assets/imagenesJuego/materialEscolar/materialEscolar.png');
        // this.motor.addViewToParentView(this.actividad.imagenFondo, this.windowJuego);
        // this.borrador = new Sticker(this.motor,0,0,DataHolder.instance.nScreenWidth*0.3,DataHolder.instance.nScreenHeight*0.3);
        // this.borrador.setImg('./assets/imagenesJuego/materialEscolar/borrador.png');
        // this.motor.addViewToParentView(this.windowJuego, this.borrador);
    };
    JuegoEscuela.prototype.buttonListenerOnClick = function (btn) {
    };
    JuegoEscuela.prototype.screenSizeChanged = function (vWidth, vHeight) {
        //console.log("SE HA ACTUALIZADO EL TEMAÑO DE LA PANTALLA");
    };
    JuegoEscuela.prototype.buttonExitClicked = function (win) {
        console.log("PRESIONO SALIR");
    };
    JuegoEscuela.prototype.buttonMoveClicked = function (win) {
        console.log("PRESIONO MOVER");
    };
    return JuegoEscuela;
}());

//# sourceMappingURL=juegoEscuela.js.map

/***/ }),

/***/ "../../../../../src/app/micanvas/micanvas.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/micanvas/micanvas.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n<p>\n  micanvas works!\n</p>\n-->\n\n<canvas #mcnv id=\"mcnv\" width=\"1000\" height=\"900\">\n\n</canvas>"

/***/ }),

/***/ "../../../../../src/app/micanvas/micanvas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MicanvasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__milib_engines_motor__ = __webpack_require__("../../../../../src/app/milib/engines/motor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__ = __webpack_require__("../../../../../src/app/milib/dataholder/dataholder.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__milib_events_eventsadmin__ = __webpack_require__("../../../../../src/app/milib/events/eventsadmin.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actividad1__ = __webpack_require__("../../../../../src/app/micanvas/actividad1.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MicanvasComponent = (function () {
    function MicanvasComponent(ngZone) {
        this.ngZone = ngZone;
    }
    MicanvasComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.initScreenSize();
        __WEBPACK_IMPORTED_MODULE_3__milib_events_eventsadmin__["a" /* EventsAdmin */].instance.addListener(this);
        this.mcnv.nativeElement.width = __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth;
        this.mcnv.nativeElement.height = __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight;
        this.contexto = this.mcnv.nativeElement.getContext('2d');
        this.miMotor = new __WEBPACK_IMPORTED_MODULE_1__milib_engines_motor__["a" /* Motor */](this.contexto, this.ngZone);
        this.miMotor.start();
        this.actividad1 = new __WEBPACK_IMPORTED_MODULE_4__actividad1__["a" /* Actividad1 */](this.miMotor);
    };
    MicanvasComponent.prototype.screenSizeChanged = function (vWidth, vHeight) {
        this.mcnv.nativeElement.width = __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth;
        this.mcnv.nativeElement.height = __WEBPACK_IMPORTED_MODULE_2__milib_dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight;
    };
    return MicanvasComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('mcnv'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object)
], MicanvasComponent.prototype, "mcnv", void 0);
MicanvasComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-micanvas',
        template: __webpack_require__("../../../../../src/app/micanvas/micanvas.component.html"),
        styles: [__webpack_require__("../../../../../src/app/micanvas/micanvas.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]) === "function" && _b || Object])
], MicanvasComponent);

var _a, _b;
//# sourceMappingURL=micanvas.component.js.map

/***/ }),

/***/ "../../../../../src/app/milib/dataholder/dataholder.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataHolder; });
var DataHolder = (function () {
    function DataHolder() {
        this.nScreenWidth = 0;
        this.nScreenHeight = 0;
        this.nScreenWidth2 = 0;
        this.nScreenHeight2 = 0;
        this.initScreenSize();
    }
    DataHolder.prototype.initScreenSize = function () {
        var myWidth = 0, myHeight = 0;
        if (typeof (window.innerWidth) == 'number') {
            //Non-IE
            myWidth = window.innerWidth;
            myHeight = window.innerHeight;
        }
        else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
            //IE 6+ in 'standards compliant mode'
            myWidth = document.documentElement.clientWidth;
            myHeight = document.documentElement.clientHeight;
        }
        else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
            //IE 4 compatible
            myWidth = document.body.clientWidth;
            myHeight = document.body.clientHeight;
        }
        this.nScreenWidth = myWidth;
        this.nScreenHeight = myHeight;
        this.nScreenWidth2 = this.nScreenWidth >> 1;
        this.nScreenHeight2 = this.nScreenHeight >> 1;
        //console.log("!!!!!!!!!!!!!----------->>>>>>>>>>>>>>>>>>>>> "+this.nScreenWidth);
    };
    return DataHolder;
}());

DataHolder.instance = new DataHolder();
//# sourceMappingURL=dataholder.js.map

/***/ }),

/***/ "../../../../../src/app/milib/engines/motor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Motor; });
var Motor = (function () {
    /**
     * Constructor del motor.
     * @param vctx Contexto en el cual se pintara usando el motor
     * @param vngZone ngZone que permite llamar al hilo independiente de PAINT
     */
    function Motor(vctx, vngZone) {
        this.blStarted = false;
        this.dictRelViews = new Map();
        this.sRootViewUID = null;
        this.dictViews = new Map();
        this.contexto = vctx;
        this.ngZone = vngZone;
    }
    /**
     * Metodo que permite crear el arbol jerarquico de Views. Se recibe un View Padre y un View hijo, y se asocian en un arbol
     * @param vParent View padre.
     * @param vChild View hijo.
     */
    Motor.prototype.addViewToParentView = function (vParent, vChild) {
        var archilds = this.dictRelViews[vParent.uid];
        if (archilds == undefined) {
            archilds = Array();
        }
        if (archilds.indexOf(vChild.uid) == -1) {
            archilds.push(vChild.uid);
        }
        this.dictRelViews[vParent.uid] = archilds;
        //if(this.sRootViewUID==null)this.sRootViewUID=vParent.uid;
        this.dictViews[vParent.uid] = vParent;
        this.dictViews[vChild.uid] = vChild;
    };
    /**
     * Metodo que setea la raiz del arbol para que podamos cambiar la view que usemos como raiz.
     * @param vRaiz View que queremos usar como Raiz de nuestro arbol.
     */
    Motor.prototype.setRaiz = function (vRaiz) {
        this.sRootViewUID = vRaiz.uid;
    };
    /**
     * Metodo que arranca el motor
     */
    Motor.prototype.start = function () {
        var _this = this;
        this.blStarted = true;
        requestAnimationFrame(function () { return _this.cicle(); });
    };
    /**
     * Metodo que para el motor.
     */
    Motor.prototype.stop = function () {
        this.blStarted = false;
    };
    /**
     * Metodo que se ejecuta en cada ciclo de motor. Llama a Pintar (Paint) y a Actualizar (Update)
     */
    Motor.prototype.cicle = function () {
        var _this = this;
        if (this.sRootViewUID != null) {
            //console.log("AAAAAAAAAAAA");
            this.actualizar(this.sRootViewUID, null);
            this.ngZone.runOutsideAngular(function () { return _this.pintar(_this.sRootViewUID); });
        }
        if (this.blStarted) {
            requestAnimationFrame(function () { return _this.cicle(); });
        }
    };
    /**
     * Metodo recursivo que recore el arbol de views y ejecuta los metodos de pintar de cada view.
     * @param vUid UID del primer view del arbol que vamos a pintar
     */
    Motor.prototype.pintar = function (vUid) {
        var v = this.dictViews[vUid];
        if (v.blVisible) {
            v.paint(this.contexto);
            var arChilds = this.dictRelViews[vUid];
            if (arChilds != undefined) {
                for (var i = 0; i < arChilds.length; i++) {
                    this.pintar(arChilds[i]);
                }
            }
        }
    };
    /**
     * Metodo recursivo que recore el arbol de views y ejecuta los metodos de update de cada view.
     * @param vUid UID del primer view del arbol que vamos a update
     * @param vParent View del padre del view que se esta actualizando (Update).
     */
    Motor.prototype.actualizar = function (vUid, vParent) {
        var v = this.dictViews[vUid];
        v.update(vParent);
        var arChilds = this.dictRelViews[vUid];
        if (arChilds != undefined) {
            for (var i = 0; i < arChilds.length; i++) {
                this.actualizar(arChilds[i], v);
            }
        }
    };
    /**
     * Metodo recursivo que recore el arbol de views y pone visible o invisible todo los hijos del view que queremos
     * que pase a visible o invisible.
     * @param vUid UID del primer view del arbol que vamos a cambiar su visibilidad
     * @param blVisible El estado de visibilidad que queremos setear a al View y sus hijos.
     */
    Motor.prototype.setViewVisibility = function (vUid, blVisible) {
        var v = this.dictViews[vUid];
        v.blVisible = blVisible;
        var arChilds = this.dictRelViews[vUid];
        if (arChilds != undefined) {
            for (var i = 0; i < arChilds.length; i++) {
                this.setViewVisibility(arChilds[i], blVisible);
            }
        }
    };
    return Motor;
}());

//# sourceMappingURL=motor.js.map

/***/ }),

/***/ "../../../../../src/app/milib/events/eventsadmin.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsAdmin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dataholder_dataholder__ = __webpack_require__("../../../../../src/app/milib/dataholder/dataholder.ts");

var EventsAdmin = (function () {
    function EventsAdmin() {
        this.arListeners = [];
        this.blIsMouseClickRegistered = false;
        this.arViewsForMouseClick = [];
        this.sKeyDownEvent = "keydown";
        this.sKeyUpEvent = "keyup";
        this.blIsKeysRegistered = false;
        this.arViewsForKeys = [];
        this.blIsMouseMoveRegistered = false;
        this.arViewsForMouseMove = [];
        this.blIsMouseDownRegistered = false;
        this.arViewsForMouseDown = [];
        this.blIsMouseUpRegistered = false;
        this.arViewsForMouseUp = [];
        window.addEventListener("resize", this.screenSizeResized);
    }
    /**
     * Metodo que agrega (o subsribe) a cualquier clase que implemente el EventsAdminListener en el array de subsriptores
     * para que luego pueda recibir notificaciones del EventsAdmin.
     * @param listener La clase que implementa el EventsAdminListener
     */
    EventsAdmin.prototype.addListener = function (listener) {
        if (this.arListeners.indexOf(listener) == -1)
            this.arListeners.push(listener);
    };
    EventsAdmin.prototype.addMouseDragToView = function (view) {
        this.addMouseDownToView(view);
        this.addMouseMoveToView(view);
        this.addMouseUpToView(view);
    };
    /**
     * Agrega un elemento visual View a la lista de views que detectan si les han pinchado con el Raton encima.
     * @param view View que queremos subscribir a las notificaciones de MouseClick
     */
    EventsAdmin.prototype.addMouseClickToView = function (view) {
        if (this.blIsMouseClickRegistered == false) {
            this.blIsMouseClickRegistered = true;
            window.addEventListener("click", this.mouseClick);
        }
        if (this.arViewsForMouseClick.indexOf(view) == -1)
            this.arViewsForMouseClick.push(view);
    };
    /**
     * Agrega un elemento visual View a la lista de views que detectan si les han presionado con el Raton encima.
     * @param view View que queremos subscribir a las notificaciones de MouseDown
     */
    EventsAdmin.prototype.addMouseDownToView = function (view) {
        if (this.blIsMouseDownRegistered == false) {
            this.blIsMouseDownRegistered = true;
            window.addEventListener("mousedown", this.mouseDown);
        }
        if (this.arViewsForMouseDown.indexOf(view) == -1)
            this.arViewsForMouseDown.push(view);
    };
    /**
     * Agrega un elemento visual View a la lista de views que detectan si les han soltado con el Raton encima.
     * @param view View que queremos subscribir a las notificaciones de MouseUp
     */
    EventsAdmin.prototype.addMouseUpToView = function (view) {
        if (this.blIsMouseUpRegistered == false) {
            this.blIsMouseUpRegistered = true;
            window.addEventListener("mouseup", this.mouseUp);
        }
        if (this.arViewsForMouseUp.indexOf(view) == -1)
            this.arViewsForMouseUp.push(view);
    };
    /**
     * Agrega un elemento visual View a la lista de views que detectan si les han movido con el Raton encima.
     * @param view View que queremos subscribir a las notificaciones de MouseMove
     */
    EventsAdmin.prototype.addMouseMoveToView = function (view) {
        if (this.blIsMouseMoveRegistered == false) {
            this.blIsMouseMoveRegistered = true;
            window.addEventListener("mousemove", this.mouseMove);
        }
        if (this.arViewsForMouseMove.indexOf(view) == -1)
            this.arViewsForMouseMove.push(view);
    };
    /**
     * Metodo de tipo evento Javascript que se ejecutara cuando el Window detecto un MouseClick
     * @param e evento de tipo MouseEvent que recibe la informacion sobre la posicion donde el raton ha pinchado.
     */
    EventsAdmin.prototype.mouseClick = function (e) {
        var vfin = null;
        for (var i = 0; i < EventsAdmin.instance.arViewsForMouseClick.length; i++) {
            var vtemp = EventsAdmin.instance.arViewsForMouseClick[i];
            if (vtemp.checkPointInView(e.pageX, e.pageY) && vtemp.blVisible) {
                vfin = vtemp;
            }
            //EventsAdmin.instance.arListeners[i].screenSizeChanged(
            //DataHolder.instance.nScreenWidth,DataHolder.instance.nScreenHeight);
        }
        if (vfin != null)
            vfin.mouseClicked(e);
    };
    /**
     * Metodo de tipo evento Javascript que se ejecutara cuando el Window detecto un MouseUp
     * @param e evento de tipo MouseEvent que recibe la informacion sobre la posicion donde el raton ha pinchado.
     */
    EventsAdmin.prototype.mouseDown = function (e) {
        var vfin = null;
        for (var i = 0; i < EventsAdmin.instance.arViewsForMouseDown.length; i++) {
            var vtemp = EventsAdmin.instance.arViewsForMouseDown[i];
            if (vtemp.checkPointInView(e.pageX, e.pageY)) {
                vfin = vtemp;
            }
            //EventsAdmin.instance.arListeners[i].screenSizeChanged(
            //DataHolder.instance.nScreenWidth,DataHolder.instance.nScreenHeight);
        }
        if (vfin != null)
            vfin.mouseDown(e);
    };
    /**
     * Metodo de tipo evento Javascript que se ejecutara cuando el Window detecto un MouseDown
     * @param e evento de tipo MouseEvent que recibe la informacion sobre la posicion donde el raton ha pinchado.
     */
    EventsAdmin.prototype.mouseUp = function (e) {
        var vfin = null;
        for (var i = 0; i < EventsAdmin.instance.arViewsForMouseUp.length; i++) {
            var vtemp = EventsAdmin.instance.arViewsForMouseUp[i];
            if (vtemp.checkPointInView(e.pageX, e.pageY)) {
                vfin = vtemp;
            }
            //EventsAdmin.instance.arListeners[i].screenSizeChanged(
            //DataHolder.instance.nScreenWidth,DataHolder.instance.nScreenHeight);
        }
        if (vfin != null)
            vfin.mouseUp(e);
    };
    /**
     * Metodo de tipo evento Javascript que se ejecutara cuando el Window detecto un MouseMove
     * @param e evento de tipo MouseEvent que recibe la informacion sobre la posicion donde el raton ha pinchado.
     */
    EventsAdmin.prototype.mouseMove = function (e) {
        var vfin = null;
        for (var i = 0; i < EventsAdmin.instance.arViewsForMouseMove.length; i++) {
            var vtemp = EventsAdmin.instance.arViewsForMouseMove[i];
            if (vtemp.checkPointInView(e.pageX, e.pageY)) {
                vfin = vtemp;
            }
            //EventsAdmin.instance.arListeners[i].screenSizeChanged(
            //DataHolder.instance.nScreenWidth,DataHolder.instance.nScreenHeight);
        }
        if (vfin != null)
            vfin.mouseMove(e);
    };
    /**
     * Metodo de tipo evento Javascript que se ejecutara cuando el Window detecto un cambio del tamaño de pantalla.
     */
    EventsAdmin.prototype.screenSizeResized = function () {
        __WEBPACK_IMPORTED_MODULE_0__dataholder_dataholder__["a" /* DataHolder */].instance.initScreenSize();
        for (var i = 0; i < EventsAdmin.instance.arListeners.length; i++) {
            EventsAdmin.instance.arListeners[i].screenSizeChanged(__WEBPACK_IMPORTED_MODULE_0__dataholder_dataholder__["a" /* DataHolder */].instance.nScreenWidth, __WEBPACK_IMPORTED_MODULE_0__dataholder_dataholder__["a" /* DataHolder */].instance.nScreenHeight);
        }
    };
    /**
      * Agrega un elemento visual View a la lista de views que detectan si les han presionado el teclado.
      * @param view View que queremos subscribir a las notificaciones de KeyEvent
      */
    EventsAdmin.prototype.addKeysToView = function (view) {
        if (this.blIsKeysRegistered == false) {
            this.blIsKeysRegistered = true;
            window.addEventListener(this.sKeyDownEvent, this.executedKeyDownEvent);
            window.addEventListener(this.sKeyUpEvent, this.executedKeyUpEvent);
        }
        if (this.arViewsForKeys.indexOf(view) == -1)
            this.arViewsForKeys.push(view);
    };
    EventsAdmin.prototype.executedKeyDownEvent = function (event) {
        //console.log("*************   "+self.dictEventsViews);
        if (EventsAdmin.instance.arViewsForKeys != undefined) {
            for (var i = 0; i < EventsAdmin.instance.arViewsForKeys.length; i++) {
                EventsAdmin.instance.arViewsForKeys[i].executedKeyboardEvent(EventsAdmin.instance.sKeyDownEvent, event);
            }
        }
    };
    EventsAdmin.prototype.executedKeyUpEvent = function (event) {
        if (EventsAdmin.instance.arViewsForKeys != undefined) {
            for (var i = 0; i < EventsAdmin.instance.arViewsForKeys.length; i++) {
                EventsAdmin.instance.arViewsForKeys[i].executedKeyboardEvent(EventsAdmin.instance.sKeyUpEvent, event);
            }
        }
    };
    return EventsAdmin;
}());

EventsAdmin.instance = new EventsAdmin();
//# sourceMappingURL=eventsadmin.js.map

/***/ }),

/***/ "../../../../../src/app/milib/milib.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/milib/milib.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  milib works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/milib/milib.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MilibComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MilibComponent = (function () {
    function MilibComponent() {
    }
    MilibComponent.prototype.ngOnInit = function () {
    };
    return MilibComponent;
}());
MilibComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-milib',
        template: __webpack_require__("../../../../../src/app/milib/milib.component.html"),
        styles: [__webpack_require__("../../../../../src/app/milib/milib.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MilibComponent);

//# sourceMappingURL=milib.component.js.map

/***/ }),

/***/ "../../../../../src/app/milib/utils/guid.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Guid; });
var Guid = (function () {
    function Guid() {
    }
    Guid.newGuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    return Guid;
}());

//# sourceMappingURL=guid.js.map

/***/ }),

/***/ "../../../../../src/app/milib/views/buttons/button.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__("../../../../../src/app/milib/views/view.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__labels_label__ = __webpack_require__("../../../../../src/app/milib/views/labels/label.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_eventsadmin__ = __webpack_require__("../../../../../src/app/milib/events/eventsadmin.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__imgs_imagen__ = __webpack_require__("../../../../../src/app/milib/views/imgs/imagen.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




/**
 * Clase que hereda de View y se encarga de pintar un elemento visual compuesto Boton por un Label y una Imagen.
 */
var Button = (function (_super) {
    __extends(Button, _super);
    function Button(vmotor, vX, vY, vW, vH) {
        var _this = _super.call(this, vmotor, vX, vY, vW, vH) || this;
        _this.sColor = null;
        _this.lblTexto = null;
        _this.imgBack = null;
        _this.sTEMP = null;
        _this.imgBack = new __WEBPACK_IMPORTED_MODULE_3__imgs_imagen__["a" /* Imagen */](_this.motor, 0, 0, _this.w, _this.h);
        _this.motor.addViewToParentView(_this, _this.imgBack);
        _this.lblTexto = new __WEBPACK_IMPORTED_MODULE_1__labels_label__["a" /* Label */](_this.motor, 0, 0, _this.w, _this.h);
        _this.lblTexto.setTexto(null);
        _this.motor.addViewToParentView(_this, _this.lblTexto);
        __WEBPACK_IMPORTED_MODULE_2__events_eventsadmin__["a" /* EventsAdmin */].instance.addMouseClickToView(_this);
        _this.sClassName = "Button";
        return _this;
    }
    /**
     * Metodo de setter para el listener que escuche los eventos del boton.
     */
    Button.prototype.setListener = function (listener) {
        this.listener = listener;
    };
    /**
     * Metodo que fija la imagen de fondo para el boton, que llama al metodo setImg de la clase Imagen
     * @param vsPath String que contendra la ruta a la imagen en los ASSETS. Ej: './assets/btnsback/back1.png'
     */
    Button.prototype.setImagePath = function (vsPath) {
        //this.sTEMP=vsPath;
        this.imgBack.setImg(vsPath);
    };
    /**
     * Metodo que setea el color de fondo del boton.
     */
    Button.prototype.setColor = function (vsColor) {
        this.sColor = vsColor;
    };
    /**
     * Metodo paint del boton (ademas de pintar los hijos, label e imagen, aqui iria el codigo que queramos dar al boton (padre)
     * para pintarse)
     * @param vctx Contexto donde se va a pintar
     */
    Button.prototype.paint = function (vctx) {
        //console.log(this.xa+"========== "+this.ya);
    };
    /**
     * Metodo para setear el texto del boton.
     * @param vtexto String: Texto del boton.
     */
    Button.prototype.setTexto = function (vtexto) {
        this.sTEMP = vtexto;
        this.lblTexto.setTexto(vtexto);
    };
    /**
     * Metodo heredado del padre View que se ejecutara cuando detecte que en el View se ha pinchado con el raton.
     * @param e Evento de MouseEvent con los detalles del evento.
     */
    Button.prototype.mouseClicked = function (e) {
        //console.log("ENTRE!!!!!     "+this.sTEMP);
        if (this.listener != null && this.listener.buttonListenerOnClick != undefined)
            this.listener.buttonListenerOnClick(this);
    };
    Button.prototype.setSize = function (vWidth, vHeight) {
        _super.prototype.setSize.call(this, vWidth, vHeight);
        this.imgBack.setSize(vWidth, vHeight);
        this.lblTexto.setSize(vWidth, vHeight);
    };
    return Button;
}(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]));

//# sourceMappingURL=button.js.map

/***/ }),

/***/ "../../../../../src/app/milib/views/imgs/imagen.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Imagen; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__("../../../../../src/app/milib/views/view.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Imagen = (function (_super) {
    __extends(Imagen, _super);
    function Imagen(vmotor, vX, vY, vW, vH) {
        var _this = _super.call(this, vmotor, vX, vY, vW, vH) || this;
        _this.blImgLoaded = false;
        _this.imgBack = new Image();
        _this.imgBack.onload = (function () { return _this.imageReady(_this); }); //Unica forma de no perder el hilo central es enviar al que ejecuta la accion como parametro.
        return _this;
    }
    /**
     * Metodo que devuelve true en caso que la imagen se haya descargado correctamente
     */
    Imagen.prototype.isImgLoaded = function () {
        return this.blImgLoaded;
    };
    /**
     * Setea la URL (RUTA) de la imagen para la imagen. EJEMPLO: './assets/btnsback/back1.png'
     * @param urlImg String con la ruta de la imagen.
     */
    Imagen.prototype.setImg = function (urlImg) {
        this.imgBack.src = urlImg;
    };
    /**
     * Metodo que se ejecuta como un evento que notifica cuando la imagen se descarga correctamente
     */
    Imagen.prototype.imageReady = function (img_self) {
        this.blImgLoaded = true;
    };
    /**
     * Paint de la clase Imagen.
     * @param vctx Contexto para poder pintar la imagen.
     */
    Imagen.prototype.paint = function (vctx) {
        if (this.blImgLoaded) {
            vctx.drawImage(this.imgBack, this.xa, this.ya, this.w, this.h);
        }
    };
    return Imagen;
}(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]));

//# sourceMappingURL=imagen.js.map

/***/ }),

/***/ "../../../../../src/app/milib/views/labels/label.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Label; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__("../../../../../src/app/milib/views/view.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Label = (function (_super) {
    __extends(Label, _super);
    function Label(vmotor, vX, vY, vW, vH) {
        var _this = _super.call(this, vmotor, vX, vY, vW, vH) || this;
        _this.sColor = null;
        _this.sTexto = null;
        _this.sFontColor = 'black';
        _this.sAlign = "center";
        _this.sBaseLine = "top";
        _this.nXText = 0;
        _this.nYText = 0;
        _this.setTextAttrs("center", "middle");
        return _this;
    }
    /**
     * Setea el color de fondo de label
     * @param vsColor
     */
    Label.prototype.setColor = function (vsColor) {
        this.sColor = vsColor;
    };
    /**
     * Setea los atributos del label (alineado en el centro horizontal y centro vertical)
     * @param vsAlign Alineado en horizontal (left, center, right)
     * @param vsBaseLine Alineado en el vertical (top, middle, bottom)
     */
    Label.prototype.setTextAttrs = function (vsAlign, vsBaseLine) {
        this.sAlign = vsAlign;
        this.sBaseLine = vsBaseLine;
        if (this.sAlign == "center") {
            this.nXText = (this.w >> 1);
        }
        else if (this.sAlign == "right") {
            this.nXText = (this.w);
        }
        if (this.sBaseLine == "top") {
            this.nYText = 0;
        }
        else if (this.sBaseLine == "middle") {
            this.nYText = (this.h >> 1);
        }
        else if (this.sBaseLine == "bottom") {
            this.nYText = (this.h);
        }
    };
    /**
     * Setea el tipo de fuente de nuestra label.
     * @param vsFontStyle string con el valor de la fuente que vamos a usar. Ej: "30px Comic Sans MS"
     */
    Label.prototype.setFontStyle = function (vsFontStyle) {
        this.sFontStyle = vsFontStyle;
    };
    /**
     * Setea el color de la fuente
     * @param vsFontColor El color de la fuente en formato string. Ej: #FF0000
     */
    Label.prototype.setFontColor = function (vsFontColor) {
        this.sFontColor = vsFontColor;
    };
    /**
     * Paint del label. Primero revisa si hay un color asignado de fondo y lo pinta, luego si tiene texto asignado.
     * Luego setea el tipo de fuente en el contexto, el color de la fuente en el contexto, la alineacion de la fuente en el contexto
     * y la linea de base en el contexto. Por ultimo pinta el texto en el contexto.
     * @param vctx
     */
    Label.prototype.paint = function (vctx) {
        if (this.sColor != null) {
            vctx.fillStyle = this.sColor;
            vctx.fillRect(this.xa, this.ya, this.w, this.h);
        }
        if (this.sTexto != null) {
            //vctx.font = "30px Comic Sans MS";
            //vctx.fillStyle ='#FF0000';
            //vctx.textBaseline='top';
            if (this.sFontStyle != null)
                vctx.font = this.sFontStyle;
            vctx.fillStyle = this.sFontColor;
            vctx.textAlign = this.sAlign;
            vctx.textBaseline = this.sBaseLine;
            vctx.fillText(this.sTexto, this.xa + this.nXText, this.ya + this.nYText);
        }
    };
    /**
     * Setea el texto en el label.
     * @param vtexto El valor del string para asociar.
     */
    Label.prototype.setTexto = function (vtexto) {
        this.sTexto = vtexto;
    };
    return Label;
}(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]));

//# sourceMappingURL=label.js.map

/***/ }),

/***/ "../../../../../src/app/milib/views/panels/panel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Panel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__("../../../../../src/app/milib/views/view.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__imgs_imagen__ = __webpack_require__("../../../../../src/app/milib/views/imgs/imagen.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Panel = (function (_super) {
    __extends(Panel, _super);
    function Panel(vmotor, vX, vY, vW, vH) {
        var _this = _super.call(this, vmotor, vX, vY, vW, vH) || this;
        _this.sColor = 'rgba(138,221,45,0)';
        //private sColor:string=null;
        _this.imgBack = null;
        _this.imgBack = new __WEBPACK_IMPORTED_MODULE_1__imgs_imagen__["a" /* Imagen */](_this.motor, 0, 0, _this.w, _this.h);
        _this.motor.addViewToParentView(_this, _this.imgBack);
        return _this;
    }
    Panel.prototype.setColor = function (vsColor) {
        this.sColor = vsColor;
    };
    Panel.prototype.setImagePath = function (vsPath) {
        this.imgBack.setImg(vsPath);
    };
    Panel.prototype.paint = function (vctx) {
        vctx.fillStyle = this.sColor;
        vctx.fillRect(this.x, this.y, this.w, this.h);
    };
    Panel.prototype.executedKeyboardEvent = function (sEventName, event) {
        console.log("PRESIONADO!!!!");
    };
    return Panel;
}(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]));

//# sourceMappingURL=panel.js.map

/***/ }),

/***/ "../../../../../src/app/milib/views/stickers/sticker.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sticker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__imgs_imagen__ = __webpack_require__("../../../../../src/app/milib/views/imgs/imagen.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * Clase que hereda de View y se encarga de pintar un elemento visual compuesto Boton por un Label y una Imagen.
 */
var Sticker = (function (_super) {
    __extends(Sticker, _super);
    function Sticker(vmotor, vX, vY, vW, vH) {
        var _this = _super.call(this, vmotor, vX, vY, vW, vH) || this;
        _this.blImgLoaded1 = false;
        _this.imgBack1 = new Image();
        _this.imgBack1.onload = (function () { return _this.imageReady1(_this); }); //Unica forma de no perder el hilo central es enviar al que ejecuta la accion como parametro.
        return _this;
    }
    /**
     * Metodo que devuelve true en caso que la imagen se haya descargado correctamente
     */
    Sticker.prototype.isImgLoaded = function () {
        return this.blImgLoaded1;
    };
    /**
     * Setea la URL (RUTA) de la imagen para la imagen. EJEMPLO: './assets/btnsback/back1.png'
     * @param urlImg String con la ruta de la imagen.
     */
    Sticker.prototype.setImg = function (urlImg) {
        this.imgBack1.src = urlImg;
    };
    Sticker.prototype.setName = function (name) {
        this.name = name;
    };
    Sticker.prototype.getName = function () {
        return this.name;
    };
    /**
     * Metodo que se ejecuta como un evento que notifica cuando la imagen se descarga correctamente
     */
    Sticker.prototype.imageReady1 = function (img_self) {
        this.blImgLoaded1 = true;
    };
    Sticker.prototype.setListener = function (listener) {
        this.listener = listener;
    };
    /**
     * Paint de la clase Imagen.
     * @param vctx Contexto para poder pintar la imagen.
     */
    Sticker.prototype.paint = function (vctx) {
        if (this.blImgLoaded1) {
            vctx.drawImage(this.imgBack1, this.xa, this.ya, this.w, this.h);
        }
    };
    Sticker.prototype.mouseUp = function (e) {
        _super.prototype.mouseUp.call(this, e);
        console.log("dentro del mouseUp");
        if (this.listener != null && this.listener.buttonListenerOnUp != undefined)
            this.listener.buttonListenerOnUp(this);
    };
    return Sticker;
}(__WEBPACK_IMPORTED_MODULE_0__imgs_imagen__["a" /* Imagen */]));

//# sourceMappingURL=sticker.js.map

/***/ }),

/***/ "../../../../../src/app/milib/views/view.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return View; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_guid__ = __webpack_require__("../../../../../src/app/milib/utils/guid.ts");

var View = (function () {
    /**
     * Constructor del motor.
     * @param vmotor Referencia al motor para poder usarlo en los hijos.
     * @param vX Posicion X RELATIVA
     * @param vY Posicion Y RELATIVA
     * @param vW Ancho del view
     * @param vH Alto del view
     */
    function View(vmotor, vX, vY, vW, vH) {
        this.xa = 0;
        this.ya = 0;
        this.blVisible = true;
        this.blMouseDown = false;
        this.tempMoveX = 0;
        this.tempMoveY = 0;
        this.sClassName = "View";
        this.x = vX;
        this.y = vY;
        this.w = vW;
        this.h = vH;
        this.motor = vmotor;
        this.uid = __WEBPACK_IMPORTED_MODULE_0__utils_guid__["a" /* Guid */].newGuid();
    }
    /**
     * Metodo que se heredara por los hijos y sobreescribira para poder facilitar a los hijos agregar su propia configuracion
     * despues del contructor.
     */
    /*public initFinish():void{
    
    }*/
    /**
     * Metodo de pintado que se podra heredar por los hijos.
     * @param vctx
     */
    View.prototype.paint = function (vctx) {
    };
    /**
     * Metodo que se ejecuta en cada ciclo del motor para actualizar el view.
     * @param vParent Recibe como parametro la referencia el View Padre de este View.
     */
    View.prototype.update = function (vParent) {
        if (vParent != null) {
            this.xa = this.x + vParent.xa;
            this.ya = this.y + vParent.ya;
        }
    };
    /**
     * Metodo que fija el tamaño del View. (Ancho y Alto)
     * @param vWidth Ancho nuevo del view.
     * @param vHeight Alto nuevo del view.
     */
    View.prototype.setSize = function (vWidth, vHeight) {
        this.w = vWidth;
        this.h = vHeight;
    };
    /**
     * Metodo que fija el tamaño del View. (Ancho y Alto)
     * @param vWidth Ancho nuevo del view.
     * @param vHeight Alto nuevo del view.
     */
    View.prototype.setPosition = function (vX, vY) {
        this.x = vX;
        this.y = vY;
    };
    /**
     * Metodo que revisa si el pixel en la posicion X e Y (px y py) se encuentran dentro del view. Metodo usado para detectar
     * si se pincho con el raton encima del View.
     * @param px Coordenada X
     * @param py Coordenada Y
     */
    View.prototype.checkPointInView = function (px, py) {
        var blret = false;
        if ((this.xa < px) && (px < this.xa + this.w) && (this.ya < py) && (py < this.ya + this.h) && this.blVisible) {
            blret = true;
        }
        return blret;
    };
    /**
     * Metodo que se llamara DESDE el EventsAdmin y que el hijo del view sobreescribira. Este metodo se llamara cuando el
     * EventsAdmin quiera notificar al View que hubo un mouseClicked en el View.
     * @param e
     */
    View.prototype.mouseClicked = function (e) {
    };
    View.prototype.mouseDown = function (e) {
        this.blMouseDown = true;
        this.tempMoveX = e.pageX;
        this.tempMoveY = e.pageY;
    };
    View.prototype.mouseMove = function (e) {
        if (this.blMouseDown) {
            //console.log("MOVING!!!");
            this.x += (e.pageX - this.tempMoveX);
            this.y += (e.pageY - this.tempMoveY);
            this.tempMoveX = e.pageX;
            this.tempMoveY = e.pageY;
        }
    };
    View.prototype.mouseUp = function (e) {
        this.blMouseDown = false;
    };
    View.prototype.executedKeyboardEvent = function (sEventName, event) {
    };
    return View;
}());

//# sourceMappingURL=view.js.map

/***/ }),

/***/ "../../../../../src/app/milib/views/windows/window.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Window; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__("../../../../../src/app/milib/views/view.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__imgs_imagen__ = __webpack_require__("../../../../../src/app/milib/views/imgs/imagen.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 * Clase que hereda de View y se encarga de pintar un elemento visual compuesto Boton por un Label y una Imagen.
 */
var Window = (function (_super) {
    __extends(Window, _super);
    /**
     * Metodo de inicializacion de los elementos visuales en el Boton. Se ejecuta ak finalizar el constructor del padre (View)
     */
    /*public initFinish():void{
    
        this.imgBack=new Imagen(this.motor,0,0,this.w,this.h);
        this.motor.addViewToParentView(this,this.imgBack);

        this.lblTexto=new Label(this.motor,0,0,this.w,this.h);
        this.lblTexto.setTexto("Boton");
        this.motor.addViewToParentView(this,this.lblTexto);

        EventsAdmin.instance.addMouseClickToView(this);

    }*/
    function Window(vmotor, vX, vY, vW, vH) {
        var _this = _super.call(this, vmotor, vX, vY, vW, vH) || this;
        _this.sColor = null;
        _this.imgBack = null;
        //this.sColor='white';
        _this.imgBack = new __WEBPACK_IMPORTED_MODULE_1__imgs_imagen__["a" /* Imagen */](_this.motor, 0, 0, _this.w, _this.h);
        _this.motor.addViewToParentView(_this, _this.imgBack);
        return _this;
    }
    /**
     * Metodo de setter para el listener que escuche los eventos del boton.
    
    /**

     * Metodo que fija la imagen de fondo para el boton, que llama al metodo setImg de la clase Imagen
     * @param vsPath String que contendra la ruta a la imagen en los ASSETS. Ej: './assets/btnsback/back1.png'
     */
    Window.prototype.setImagePath = function (vsPath) {
        this.imgBack.setImg(vsPath);
    };
    /**
     * Metodo que setea el color de fondo del boton.
     */
    Window.prototype.setColor = function (vsColor) {
        this.sColor = vsColor;
    };
    /**
     * Metodo paint del boton (ademas de pintar los hijos, label e imagen, aqui iria el codigo que queramos dar al boton (padre)
     * para pintarse)
     * @param vctx Contexto donde se va a pintar
     */
    Window.prototype.paint = function (vctx) {
        //console.log(this.xa+"========== "+this.ya);
    };
    /**
     * Metodo para setear el texto del boton.
     * @param vtexto String: Texto del boton.
     */
    /**
     * Metodo heredado del padre View que se ejecutara cuando detecte que en el View se ha pinchado con el raton.
     * @param e Evento de MouseEvent con los detalles del evento.
     */
    Window.prototype.buttonListenerOnClick = function (btn) {
    };
    return Window;
}(__WEBPACK_IMPORTED_MODULE_0__view__["a" /* View */]));

/**
 * Interface que representara el listener del Boton.
 */
/**
 * Metodo de notificacion del boton para avisar de que se ha presionado en el boton.
 */
//# sourceMappingURL=window.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map