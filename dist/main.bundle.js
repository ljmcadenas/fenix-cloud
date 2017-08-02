webpackJsonp([1],{

/***/ "../../../../../src/client async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src/client async recursive";

/***/ }),

/***/ "../../../../../src/client/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome_welcome_component__ = __webpack_require__("../../../../../src/client/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__play_play_component__ = __webpack_require__("../../../../../src/client/app/play/play.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gameover_gameover_component__ = __webpack_require__("../../../../../src/client/app/gameover/gameover.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        children: [
            {
                path: 'welcome',
                component: __WEBPACK_IMPORTED_MODULE_2__welcome_welcome_component__["a" /* WelcomeComponent */]
            },
            {
                path: 'play',
                component: __WEBPACK_IMPORTED_MODULE_3__play_play_component__["a" /* PlayComponent */]
            },
            {
                path: 'gameover',
                component: __WEBPACK_IMPORTED_MODULE_4__gameover_gameover_component__["a" /* GameoverComponent */]
            },
            {
                path: '',
                redirectTo: '/welcome',
                pathMatch: 'full'
            },
            {
                path: '**',
                redirectTo: '/welcome'
            }
        ]
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/client/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: "\n    <div class=\"container\">\n      <h1 class=\"text-center\">::Hangman::</h1>\n      <router-outlet></router-outlet>\n    </div>\n  ",
        styles: ["\n    .container {\n      margin-top: 20px;\n      padding-bottom: 20px;\n      border-radius: 10px;\n      max-width: 600px;\n      background-color: #FED13A\n    }\n  "]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/client/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/client/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/client/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__play_play_component__ = __webpack_require__("../../../../../src/client/app/play/play.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__categories_service__ = __webpack_require__("../../../../../src/client/app/categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__hangman_hangman_component__ = __webpack_require__("../../../../../src/client/app/hangman/hangman.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__welcome_welcome_component__ = __webpack_require__("../../../../../src/client/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__gameover_gameover_component__ = __webpack_require__("../../../../../src/client/app/gameover/gameover.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__play_play_component__["a" /* PlayComponent */],
            __WEBPACK_IMPORTED_MODULE_8__hangman_hangman_component__["a" /* HangmanComponent */],
            __WEBPACK_IMPORTED_MODULE_9__welcome_welcome_component__["a" /* WelcomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__gameover_gameover_component__["a" /* GameoverComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__categories_service__["a" /* CategoriesService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/client/app/categories.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoriesService = (function () {
    function CategoriesService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:3000/api';
    }
    // Devuelve la lista de nombre y id de categorías
    CategoriesService.prototype.getCategories = function () {
        return this.http.get(this.baseUrl + "/categories");
    };
    // Devuelve, haciendo un random, un palabra de una categoría.
    CategoriesService.prototype.getWordFromCategory = function (category) {
        return this.getWords(category)
            .map(function (words) {
            var i = Math.floor(Math.random() * words.length);
            return words[i].toUpperCase();
        });
    };
    CategoriesService.prototype.getWords = function (category) {
        var cacheCategories = JSON.parse(localStorage.getItem('categories')) || [];
        if (cacheCategories.length) {
            // Busco si la categoría está en localStorage
            var cacheCat_1 = cacheCategories.filter(function (cc) { return cc.name === category.name; });
            if (cacheCat_1.length) {
                // Si está, retorno las palabras y salgo.
                return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (obs) {
                    obs.next(cacheCat_1[0].words);
                    obs.complete();
                });
            }
        }
        // Si NO está en localStorage, hago el request.
        return this.http.get(this.baseUrl + "/categories/" + category._id)
            .map(function (cat) {
            // Guardo la categoría en localStorage
            cacheCategories.push(cat);
            localStorage.setItem('categories', JSON.stringify(cacheCategories));
            return cat.words;
        });
    };
    return CategoriesService;
}());
CategoriesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], CategoriesService);

var _a;
//# sourceMappingURL=categories.service.js.map

/***/ }),

/***/ "../../../../../src/client/app/gameover/gameover.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameoverComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameoverComponent = (function () {
    function GameoverComponent(route) {
        this.route = route;
    }
    GameoverComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (data) {
            _this.win = (data.win == 'true');
        });
    };
    return GameoverComponent;
}());
GameoverComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        template: "\n    <div class=\"text-center\">\n      <h2 *ngIf=\"win\">\u00A1Ganaste!</h2>\n      <h2 *ngIf=\"!win\">Perdiste :(</h2>\n    </div>\n    <a class=\"btn btn-danger btn-block\" routerLink=\"/play\" role=\"button\">Volver a jugar</a>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object])
], GameoverComponent);

var _a;
//# sourceMappingURL=gameover.component.js.map

/***/ }),

/***/ "../../../../../src/client/app/hangman/hangman.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".canvas-container {\n    padding: 10px;\n    border-radius: 10px;\n    border-style: dotted;\n    border-color: #764B29;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/hangman/hangman.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"canvas-container\">\n    <canvas #canvas>Tu navegador no soporta HTML5 Canvas.</canvas>\n</div>"

/***/ }),

/***/ "../../../../../src/client/app/hangman/hangman.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HangmanComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HangmanComponent = (function () {
    function HangmanComponent() {
        this.lives = 6;
    }
    HangmanComponent.prototype.ngAfterViewInit = function () {
        this.initCanvas();
    };
    HangmanComponent.prototype.ngOnChanges = function (changes) {
        var lives = changes.remainingLives.currentValue;
        switch (lives) {
            case 5:
                this.head();
                break;
            case 4:
                this.torso();
                break;
            case 3:
                this.leftArm();
                break;
            case 2:
                this.rightArm();
                break;
            case 1:
                this.leftLeg();
                break;
            case 0:
                this.rightLeg();
                break;
        }
    };
    HangmanComponent.prototype.initCanvas = function () {
        this.canvas = this.canvas.nativeElement;
        this.context = this.canvas.getContext('2d');
        this.context.beginPath();
        this.context.strokeStyle = '#764B29';
        this.context.lineWidth = 2;
        this.draw(0, 150, 150, 150);
        this.draw(10, 0, 10, 600);
        this.draw(0, 5, 70, 5);
        this.draw(60, 5, 60, 15);
    };
    HangmanComponent.prototype.head = function () {
        this.context.beginPath();
        this.context.arc(60, 25, 10, 0, Math.PI * 2, true);
        this.context.stroke();
    };
    HangmanComponent.prototype.draw = function (fromX, fromY, toX, toY) {
        this.context.moveTo(fromX, fromY);
        this.context.lineTo(toX, toY);
        this.context.stroke();
    };
    HangmanComponent.prototype.torso = function () {
        this.draw(60, 36, 60, 70);
    };
    ;
    HangmanComponent.prototype.rightArm = function () {
        this.draw(60, 46, 100, 50);
    };
    ;
    HangmanComponent.prototype.leftArm = function () {
        this.draw(60, 46, 20, 50);
    };
    ;
    HangmanComponent.prototype.rightLeg = function () {
        this.draw(60, 70, 100, 100);
    };
    ;
    HangmanComponent.prototype.leftLeg = function () {
        this.draw(60, 70, 20, 100);
    };
    ;
    return HangmanComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('canvas'),
    __metadata("design:type", Object)
], HangmanComponent.prototype, "canvas", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", Number)
], HangmanComponent.prototype, "remainingLives", void 0);
HangmanComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'hangman',
        template: __webpack_require__("../../../../../src/client/app/hangman/hangman.component.html"),
        styles: [__webpack_require__("../../../../../src/client/app/hangman/hangman.component.css")]
    })
], HangmanComponent);

//# sourceMappingURL=hangman.component.js.map

/***/ }),

/***/ "../../../../../src/client/app/play/play.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".letters-ok > div {\n    border-bottom: 1px solid #000;\n    padding: 0;\n    margin: 0 15px;\n    text-align: center;\n}\n\n.letters-error {\n    background-color: #f2dede;\n    border-color: #ebcccc;\n    color: #a94442;\n    margin: 0 5px;\n    padding: 5px;\n}\n\n.row.status {\n    margin-top: 20px; \n}\n\n.row.status > div {\n    margin-bottom: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/client/app/play/play.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col\">\n        <div class=\"form-group\">\n            <label for=\"category\">Categoría</label>\n            <select class=\"form-control\" id=\"category\" [ngModel]=\"selectedCategory\" (ngModelChange)=\"selectCategory($event)\" #select>\n                <option value=\"0\" disabled selected>Seleccione una categoría</option>\n                <option *ngFor=\"let cat of categories\" [ngValue]=\"cat\">{{ cat.name }}</option>\n            </select>\n        </div>\n    </div>\n</div>\n<div class=\"row letters-ok\">\n    <div class=\"col\" *ngFor=\"let l of letters\">\n        <span [ngClass]=\"{'invisible': !l.visible}\" [innerHtml]=\"l.letter\"></span>\n    </div>\n</div>\n<div class=\"row status\" [hidden]=\"!isPlaying\">\n    <div class=\"col-sm-12 col-md-6\">\n        <span class=\"letters-error\" *ngFor=\"let letter of lettersError\" [innerHtml]=\"letter\"></span>\n    </div>\n    <div class=\"col-sm-12 col-md-6\">\n        <hangman [remainingLives]=\"lives\"></hangman>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/client/app/play/play.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categories_service__ = __webpack_require__("../../../../../src/client/app/categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hangman_hangman_component__ = __webpack_require__("../../../../../src/client/app/hangman/hangman.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlayComponent = (function () {
    function PlayComponent(categoriesService, router) {
        this.categoriesService = categoriesService;
        this.router = router;
        this.categories = [];
        this.letters = [];
        this.lettersError = [];
        this.isPlaying = false;
        this.selectedCategory = 0;
    }
    PlayComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Traigo los nombres de las categorías
        this.categoriesService.getCategories().subscribe(function (categories) { return _this.categories = categories; });
        // Traigo las "vidas" que establece <hangman>.
        this.lives = this.hmComponent.lives;
    };
    PlayComponent.prototype.selectCategory = function (category) {
        var _this = this;
        this.selectedCategory = category;
        // Reseteo el juego actual
        this.resetGame();
        // Saco de foco el combo para prevenir que, al presionar las teclas, no cambie el valor.
        this.vcSelect.nativeElement.blur();
        // Pido una palabra al servicio.
        this.categoriesService.getWordFromCategory(category)
            .subscribe(function (word) {
            _this.play(word);
        });
    };
    PlayComponent.prototype.play = function (word) {
        var _this = this;
        // Dejo esto con el fin de que se pueda probar comodamente ;)
        console.info(word);
        var letters = word.replace(' ', '').split('');
        letters.forEach(function (l) {
            _this.letters.push({
                letter: l,
                visible: false
            });
        });
        this.isPlaying = true;
    };
    // TODO escuchar sólo durante el juego
    // Escucha el evento keypress y evalua las letras de a-z.
    PlayComponent.prototype.onkeypress = function (event) {
        var key = event.key.toUpperCase();
        if (key.match(/[A-Z]/)) {
            var keyMatched_1 = false;
            this.letters.forEach(function (l) {
                // Hago visible las letras que coincidan.
                if (l.letter === key) {
                    l.visible = true;
                    keyMatched_1 = true;
                }
            });
            // Si la letra no se encontró, la marco como error.
            if (!keyMatched_1) {
                this.onLetterError(key);
            }
            this.checkGameStatus();
        }
    };
    PlayComponent.prototype.onLetterError = function (key) {
        this.lettersError.push(key);
        this.lives--;
    };
    PlayComponent.prototype.checkGameStatus = function () {
        // Si ya no quedan "vidas", termino el juego con error.
        if (this.lives === 0) {
            return this.gameover(false);
        }
        var lettersInvisibles = this.letters.filter(function (l) { return (!l.visible); });
        // Si NO hay letras invisibles => Ganó!
        if (!lettersInvisibles.length) {
            return this.gameover(true);
        }
        ;
    };
    PlayComponent.prototype.resetGame = function () {
        this.letters = [];
        this.lettersError = [];
    };
    PlayComponent.prototype.gameover = function (success) {
        this.isPlaying = false;
        this.router.navigate(['/gameover', { win: success }], { skipLocationChange: true });
    };
    return PlayComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('select'),
    __metadata("design:type", Object)
], PlayComponent.prototype, "vcSelect", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__hangman_hangman_component__["a" /* HangmanComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__hangman_hangman_component__["a" /* HangmanComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__hangman_hangman_component__["a" /* HangmanComponent */]) === "function" && _a || Object)
], PlayComponent.prototype, "hmComponent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* HostListener */])('document:keypress', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PlayComponent.prototype, "onkeypress", null);
PlayComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'play',
        template: __webpack_require__("../../../../../src/client/app/play/play.component.html"),
        styles: [__webpack_require__("../../../../../src/client/app/play/play.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__categories_service__["a" /* CategoriesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__categories_service__["a" /* CategoriesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
], PlayComponent);

var _a, _b, _c;
//# sourceMappingURL=play.component.js.map

/***/ }),

/***/ "../../../../../src/client/app/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1 class=\"display-3\">¡Bienvenido!</h1>\n  <p class=\"lead\">Este es el clásico juego \"hangman\".</p>\n  <hr class=\"my-4\">\n  <p>Para jugar debes escoger una categoría e interactuar con tu teclado para adivinar las letras.<br>¿Estás listo? A jugar!</p>\n  <p class=\"lead\">\n    <a class=\"btn btn-danger btn-lg\" routerLink=\"/play\" role=\"button\">Jugar</a>\n  </p>\n</div>"

/***/ }),

/***/ "../../../../../src/client/app/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WelcomeComponent = (function () {
    function WelcomeComponent() {
    }
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        template: __webpack_require__("../../../../../src/client/app/welcome/welcome.component.html")
    })
], WelcomeComponent);

//# sourceMappingURL=welcome.component.js.map

/***/ }),

/***/ "../../../../../src/client/environments/environment.ts":
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

/***/ "../../../../../src/client/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/client/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/client/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/client/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map