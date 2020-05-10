function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _arch_components_header_component_header_component_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./arch-components/header-component/header-component.component */
    "./src/app/arch-components/header-component/header-component.component.ts");
    /* harmony import */


    var _arch_components_aside_left_aside_left_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./arch-components/aside-left/aside-left.component */
    "./src/app/arch-components/aside-left/aside-left.component.ts");
    /* harmony import */


    var _arch_components_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./arch-components/main-content/main-content.component */
    "./src/app/arch-components/main-content/main-content.component.ts");
    /* harmony import */


    var _arch_components_aside_right_aside_right_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./arch-components/aside-right/aside-right.component */
    "./src/app/arch-components/aside-right/aside-right.component.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight;
        this.isLandscape = this.isLandscapeMode(this.windowWidth, this.windowHeight);
      }

      _createClass(AppComponent, [{
        key: "onResize",
        value: function onResize(event) {
          this.windowWidth = event.target.innerWidth;
          this.windowHeight = window.innerHeight;
          this.isLandscape = this.isLandscapeMode(this.windowWidth, this.windowHeight);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "isLandscapeMode",
        value: function isLandscapeMode(windowWidth, windowHeight) {
          return windowWidth > windowHeight ? true : false;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      hostBindings: function AppComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function AppComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 6,
      vars: 0,
      consts: [[1, "myapp"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header-component");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-aside-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-main-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-aside-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_arch_components_header_component_header_component_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponentComponent"], _arch_components_aside_left_aside_left_component__WEBPACK_IMPORTED_MODULE_2__["AsideLeftComponent"], _arch_components_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_3__["MainContentComponent"], _arch_components_aside_right_aside_right_component__WEBPACK_IMPORTED_MODULE_4__["AsideRightComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [];
      }, {
        onResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:resize', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: HttpLoaderFactory, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
      return HttpLoaderFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _arch_components_header_component_header_component_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./arch-components/header-component/header-component.component */
    "./src/app/arch-components/header-component/header-component.component.ts");
    /* harmony import */


    var _arch_components_aside_left_aside_left_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./arch-components/aside-left/aside-left.component */
    "./src/app/arch-components/aside-left/aside-left.component.ts");
    /* harmony import */


    var _arch_components_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./arch-components/main-content/main-content.component */
    "./src/app/arch-components/main-content/main-content.component.ts");
    /* harmony import */


    var _arch_components_aside_right_aside_right_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./arch-components/aside-right/aside-right.component */
    "./src/app/arch-components/aside-right/aside-right.component.ts");
    /* harmony import */


    var _directives_window_resize_sensitive_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./directives/window-resize-sensitive.directive */
    "./src/app/directives/window-resize-sensitive.directive.ts");
    /* harmony import */


    var _arch_components_footer_component_footer_component_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./arch-components/footer-component/footer-component.component */
    "./src/app/arch-components/footer-component/footer-component.component.ts");
    /* harmony import */


    var _details_components_article_article_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./details-components/article/article.component */
    "./src/app/details-components/article/article.component.ts");
    /* harmony import */


    var _details_components_langage_dropdown_langage_dropdown_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./details-components/langage-dropdown/langage-dropdown.component */
    "./src/app/details-components/langage-dropdown/langage-dropdown.component.ts");
    /* harmony import */


    var _directives_disablerightclick_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./directives/disablerightclick.directive */
    "./src/app/directives/disablerightclick.directive.ts");

    function HttpLoaderFactory(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__["TranslateHttpLoader"](http);
    }
    /*export function createTranslateLoader(http: HttpClient) {
      return new TranslateHttpLoader(http, './assets/i18n/', '.json');
    }*/


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [
        /*services*/
      ],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateLoader"],
          useFactory: HttpLoaderFactory,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]]
        }
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _arch_components_header_component_header_component_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponentComponent"], _arch_components_aside_left_aside_left_component__WEBPACK_IMPORTED_MODULE_8__["AsideLeftComponent"], _arch_components_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_9__["MainContentComponent"], _arch_components_aside_right_aside_right_component__WEBPACK_IMPORTED_MODULE_10__["AsideRightComponent"], _directives_window_resize_sensitive_directive__WEBPACK_IMPORTED_MODULE_11__["WindowResizeSensitiveDirective"], _arch_components_footer_component_footer_component_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponentComponent"], _details_components_article_article_component__WEBPACK_IMPORTED_MODULE_13__["ArticleComponent"], _details_components_langage_dropdown_langage_dropdown_component__WEBPACK_IMPORTED_MODULE_14__["LangageDropdownComponent"], _directives_disablerightclick_directive__WEBPACK_IMPORTED_MODULE_15__["DisablerightclickDirective"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _arch_components_header_component_header_component_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponentComponent"], _arch_components_aside_left_aside_left_component__WEBPACK_IMPORTED_MODULE_8__["AsideLeftComponent"], _arch_components_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_9__["MainContentComponent"], _arch_components_aside_right_aside_right_component__WEBPACK_IMPORTED_MODULE_10__["AsideRightComponent"], _directives_window_resize_sensitive_directive__WEBPACK_IMPORTED_MODULE_11__["WindowResizeSensitiveDirective"], _arch_components_footer_component_footer_component_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponentComponent"], _details_components_article_article_component__WEBPACK_IMPORTED_MODULE_13__["ArticleComponent"], _details_components_langage_dropdown_langage_dropdown_component__WEBPACK_IMPORTED_MODULE_14__["LangageDropdownComponent"], _directives_disablerightclick_directive__WEBPACK_IMPORTED_MODULE_15__["DisablerightclickDirective"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forRoot({
            loader: {
              provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateLoader"],
              useFactory: HttpLoaderFactory,
              deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]]
            }
          })],
          providers: [
            /*services*/
          ],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/arch-components/aside-left/aside-left.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/arch-components/aside-left/aside-left.component.ts ***!
    \********************************************************************/

  /*! exports provided: AsideLeftComponent */

  /***/
  function srcAppArchComponentsAsideLeftAsideLeftComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AsideLeftComponent", function () {
      return AsideLeftComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _directives_disablerightclick_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../directives/disablerightclick.directive */
    "./src/app/directives/disablerightclick.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function AsideLeftComponent_div_3_div_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "article", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "IDE: Visual Studio Code, Eclipse, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "em");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "IntelliJ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Langages: JavaScript, HTML/CSS, Java, SQL, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "em");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "NoSql");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Frameworks: Angular, ExpressJS, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "em");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Spring Boot");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "article", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ul", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](55, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "article", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](62, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "ul", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](67, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](70, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](73, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](76, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 11, "rightside.workingenvironment-title"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 13, "rightside.personalskills-title"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 15, "rightside.personalskills.skill1"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](49, 17, "rightside.personalskills.skill2"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](52, 19, "rightside.personalskills.skill3"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](55, 21, "rightside.personalskills.skill4"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](62, 23, "rightside.interests-title"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](67, 25, "rightside.interests.interest1"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](70, 27, "rightside.interests.interest2"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](73, 29, "rightside.interests.interest3"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](76, 31, "rightside.interests.interest4"));
      }
    }

    function AsideLeftComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, AsideLeftComponent_div_3_div_36_Template, 77, 33, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 8, "header.firstname"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 10, "header.lastname"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 12, "header.job"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 14, "header.phonenumber"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 16, "header.location"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 18, "header.mail"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 20, "header.linkedin"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isLandscape);
      }
    }

    var AsideLeftComponent =
    /*#__PURE__*/
    function () {
      function AsideLeftComponent() {
        _classCallCheck(this, AsideLeftComponent);

        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight; //console.log(this.windowWidth)

        this.isLandscape = this.isLandscapeMode(this.windowWidth, this.windowHeight);
      }

      _createClass(AsideLeftComponent, [{
        key: "onResize",
        value: function onResize(event) {
          this.windowWidth = event.target.innerWidth; //window.innerWidth;

          this.windowHeight = window.innerHeight;
          this.isLandscape = this.isLandscapeMode(this.windowWidth, this.windowHeight); //console.log(this.isLandscape);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {//console.log("Landswape mode");
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {//console.log("Portrait mode");
        }
      }, {
        key: "isLandscapeMode",
        value: function isLandscapeMode(windowWidth, windowHeight) {
          return windowWidth > windowHeight ? true : false;
        }
      }]);

      return AsideLeftComponent;
    }();

    AsideLeftComponent.ɵfac = function AsideLeftComponent_Factory(t) {
      return new (t || AsideLeftComponent)();
    };

    AsideLeftComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AsideLeftComponent,
      selectors: [["app-aside-left"]],
      hostBindings: function AsideLeftComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function AsideLeftComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 4,
      vars: 1,
      consts: [[1, "aside-left-container"], [1, "id-part"], ["appDisablerightclick", "", 1, "ma-photo-container"], ["class", "informations", 4, "ngIf"], [1, "informations"], [1, "names-job-contact"], [1, "names"], [1, "job"], [1, "contact"], [1, "contact-content"], [1, "icon"], [1, "fas", "fa-mobile-alt"], [1, "contact-info"], [1, "fas", "fa-city"], [1, "fas", "fa-at"], [1, "fab", "fa-linkedin-in"], ["class", "about-me", 4, "ngIf"], [1, "about-me"], [1, "working-environment"], [1, "title"], [1, "fas", "fa-laptop"], [1, "title-name"], [1, "working-envirnment-content"], [1, "icons"], ["alt", "VSC", "src", "./assets/icons/Visual_Studio_Code_icon.svg", 1, "icon"], ["alt", "Eclipse", "src", "./assets/icons/Eclipse-SVG.svg", 1, "icon"], ["alt", "IntelliJ", "src", "./assets/icons/icon_IntelliJIDEA.svg", 1, "icon"], ["alt", "JS", "src", "./assets/icons/icons-nodejs.svg", 1, "icon"], ["alt", "HTML", "src", "./assets/icons/html5.svg", 1, "icon"], ["alt", "CSS", "src", "./assets/icons/icon-css3.svg", 1, "icon"], ["alt", "JAVA", "src", "./assets/icons/java_icon.svg", 1, "icon"], ["alt", "sql", "src", "./assets/icons/microsoft-sql-server.svg", 1, "icon-sql"], ["alt", "sql", "src", "./assets/icons/MongoDB-Logo.svg", 1, "icon-nosql"], ["alt", "Angular", "src", "./assets/icons/angular-icon.svg", 1, "icon"], ["alt", "Spring", "src", "./assets/icons/springio-icon.svg", 1, "icon"], [1, "personal-skills"], [1, "fas", "fa-male"], [1, "personal-skills-content"], [1, "skills-list"], [1, "interests"], [1, "fas", "fa-heart"]],
      template: function AsideLeftComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AsideLeftComponent_div_3_Template, 37, 22, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLandscape);
        }
      },
      directives: [_directives_disablerightclick_directive__WEBPACK_IMPORTED_MODULE_1__["DisablerightclickDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]],
      styles: ["body[_ngcontent-%COMP%] {\n  margin: 0px;\n  background-color: #FFF;\n}\n@media (orientation: landscape) {\n  .myapp[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 20% auto 25%;\n    grid-template-rows: 130px auto 50px;\n    width: 100vw;\n    height: 100vh;\n    -webkit-column-gap: 5px;\n       -moz-column-gap: 5px;\n            column-gap: 5px;\n  }\n\n  app-header-component[_ngcontent-%COMP%] {\n    grid-column-start: 1;\n    grid-column-end: 4;\n    grid-row-start: 1;\n    grid-row-end: 2;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n\n  app-aside-left[_ngcontent-%COMP%] {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 2;\n    grid-row-end: 4;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n\n  app-main-content[_ngcontent-%COMP%] {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 2;\n    grid-row-end: 4;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n\n  app-aside-right[_ngcontent-%COMP%] {\n    grid-column-start: 3;\n    grid-column-end: 4;\n    grid-row-start: 2;\n    grid-row-end: 4;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n}\n@media (orientation: portrait) {\n  .myapp[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 30% auto 25%;\n    grid-template-rows: 15% auto 5%;\n    width: 100vw;\n    height: 100vh;\n    grid-gap: 3px;\n  }\n\n  app-header-component[_ngcontent-%COMP%] {\n    opacity: 0;\n    grid-column-start: 1;\n    grid-column-end: 4;\n    grid-row-start: 1;\n    grid-row-end: 2;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n    z-index: -1;\n  }\n\n  app-aside-left[_ngcontent-%COMP%] {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 1;\n    grid-row-end: 4;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n\n  app-main-content[_ngcontent-%COMP%] {\n    grid-column-start: 2;\n    grid-column-end: 4;\n    grid-row-start: 1;\n    grid-row-end: 4;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n\n  app-aside-right[_ngcontent-%COMP%] {\n    opacity: 0;\n    grid-column-start: 3;\n    grid-column-end: 4;\n    grid-row-start: 2;\n    grid-row-end: 4;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n}\n\n\n.aside-left-container[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 100%;\n  height: 100%;\n  background-color: white;\n  font-family: \"Roboto\", sans-serif;\n  border-right: 1px solid #BDBDBD;\n}\n@media (orientation: landscape) {\n  .id-part[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n  }\n\n  .ma-photo-container[_ngcontent-%COMP%] {\n    width: 100%;\n    height: inherit;\n    background: url('maphoto2-resized.png');\n    background-size: cover;\n    background-position: center;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n}\n@media (orientation: landscape) and (max-width: 1388px) {\n  .id-part[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n  }\n\n  .ma-photo-container[_ngcontent-%COMP%] {\n    width: 100%;\n    height: inherit;\n    background: url('maphoto2-resized.png');\n    background-size: cover;\n    background-position: center;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n}\n@media (orientation: landscape) and (max-width: 1000px) {\n  .id-part[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n  }\n\n  .ma-photo-container[_ngcontent-%COMP%] {\n    width: 100%;\n    height: inherit;\n    background: url('maphoto2-resized.png');\n    background-size: cover;\n    background-position: center;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n}\n\n\nbody[_ngcontent-%COMP%] {\n  margin: 0px;\n  background-color: #FFF;\n}\n@media (orientation: landscape) {\n  .myapp[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 20% auto 25%;\n    grid-template-rows: 130px auto 50px;\n    width: 100vw;\n    height: 100vh;\n    -webkit-column-gap: 5px;\n       -moz-column-gap: 5px;\n            column-gap: 5px;\n  }\n\n  app-header-component[_ngcontent-%COMP%] {\n    grid-column-start: 1;\n    grid-column-end: 4;\n    grid-row-start: 1;\n    grid-row-end: 2;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n\n  app-aside-left[_ngcontent-%COMP%] {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 2;\n    grid-row-end: 4;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n\n  app-main-content[_ngcontent-%COMP%] {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 2;\n    grid-row-end: 4;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n\n  app-aside-right[_ngcontent-%COMP%] {\n    grid-column-start: 3;\n    grid-column-end: 4;\n    grid-row-start: 2;\n    grid-row-end: 4;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n}\n@media (orientation: portrait) {\n  .myapp[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 30% auto 25%;\n    grid-template-rows: 15% auto 5%;\n    width: 100vw;\n    height: 100vh;\n    grid-gap: 3px;\n  }\n\n  app-header-component[_ngcontent-%COMP%] {\n    opacity: 0;\n    grid-column-start: 1;\n    grid-column-end: 4;\n    grid-row-start: 1;\n    grid-row-end: 2;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n    z-index: -1;\n  }\n\n  app-aside-left[_ngcontent-%COMP%] {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 1;\n    grid-row-end: 4;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n\n  app-main-content[_ngcontent-%COMP%] {\n    grid-column-start: 2;\n    grid-column-end: 4;\n    grid-row-start: 1;\n    grid-row-end: 4;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n\n  app-aside-right[_ngcontent-%COMP%] {\n    opacity: 0;\n    grid-column-start: 3;\n    grid-column-end: 4;\n    grid-row-start: 2;\n    grid-row-end: 4;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n}\n\n\n@media (orientation: portrait) {\n  .id-part[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    width: 100%;\n    padding-top: 15px;\n    padding-bottom: 15px;\n    border-bottom: 1px solid #BDBDBD;\n    background-color: #1976D2;\n  }\n\n  .ma-photo-container[_ngcontent-%COMP%] {\n    background: url('maphoto2-resized.png');\n    background-size: cover;\n    border-radius: 50%;\n    width: 150px;\n    height: 150px;\n    border: 5px solid #eee;\n    box-shadow: 0 3px 2px rgba(0, 0, 0, 0.3);\n  }\n\n  .informations[_ngcontent-%COMP%] {\n    opacity: 1;\n    width: 100%;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n  .informations[_ngcontent-%COMP%]   .names-job-contact[_ngcontent-%COMP%] {\n    background-color: #1976D2;\n    padding-left: 5px;\n    padding-top: 5px;\n    padding-right: 5px;\n    box-shadow: 0px 3px 2px 2px rgba(166, 166, 171, 0.2);\n    color: #FFF;\n  }\n  .informations[_ngcontent-%COMP%]   .names-job-contact[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  .informations[_ngcontent-%COMP%]   .names-job-contact[_ngcontent-%COMP%]   .names[_ngcontent-%COMP%] {\n    padding-bottom: 3px;\n  }\n  .informations[_ngcontent-%COMP%]   .names-job-contact[_ngcontent-%COMP%]   .job[_ngcontent-%COMP%] {\n    padding-top: 3px;\n  }\n  .informations[_ngcontent-%COMP%]   .names-job-contact[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%] {\n    padding: 10px 0px 5px 0px;\n    width: 100%;\n  }\n  .informations[_ngcontent-%COMP%]   .names-job-contact[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .contact-content[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    margin: 10px 0px 10px 0px;\n  }\n  .informations[_ngcontent-%COMP%]   .names-job-contact[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .contact-content[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n  }\n  .informations[_ngcontent-%COMP%]   .names-job-contact[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .contact-content[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  .informations[_ngcontent-%COMP%]   .about-me[_ngcontent-%COMP%] {\n    padding-left: 5px;\n    padding-top: 5px;\n    padding-right: 5px;\n  }\n  .informations[_ngcontent-%COMP%]   .about-me[_ngcontent-%COMP%]   .working-environment[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    padding-bottom: 10px;\n  }\n  .informations[_ngcontent-%COMP%]   .about-me[_ngcontent-%COMP%]   .working-environment[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    color: #212121;\n  }\n  .informations[_ngcontent-%COMP%]   .about-me[_ngcontent-%COMP%]   .working-environment[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n  }\n  .informations[_ngcontent-%COMP%]   .about-me[_ngcontent-%COMP%]   .working-environment[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .title-name[_ngcontent-%COMP%] {\n    padding-left: 5px;\n  }\n  .informations[_ngcontent-%COMP%]   .about-me[_ngcontent-%COMP%]   .working-environment[_ngcontent-%COMP%]   .working-envirnment-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 5px 0px 5px 0px;\n    font-size: 14px;\n    color: #757575;\n  }\n  .informations[_ngcontent-%COMP%]   .about-me[_ngcontent-%COMP%]   .working-environment[_ngcontent-%COMP%]   .working-envirnment-content[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    flex-wrap: wrap;\n    padding: 5px 0px 5px 0px;\n  }\n  .informations[_ngcontent-%COMP%]   .about-me[_ngcontent-%COMP%]   .working-environment[_ngcontent-%COMP%]   .working-envirnment-content[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    padding: 0px 5px 0px 5px;\n    height: 16px;\n    width: 16px;\n  }\n  .informations[_ngcontent-%COMP%]   .about-me[_ngcontent-%COMP%]   .working-environment[_ngcontent-%COMP%]   .working-envirnment-content[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .icon-sql[_ngcontent-%COMP%] {\n    padding: 0px 5px 0px 5px;\n    height: 16px;\n    width: 19px;\n  }\n  .informations[_ngcontent-%COMP%]   .about-me[_ngcontent-%COMP%]   .working-environment[_ngcontent-%COMP%]   .working-envirnment-content[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .icon-nosql[_ngcontent-%COMP%] {\n    padding: 0px 5px 0px 5px;\n    height: 16px;\n    width: 58px;\n  }\n  .informations[_ngcontent-%COMP%]   .about-me[_ngcontent-%COMP%]   .personal-skills[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    padding-bottom: 10px;\n  }\n  .informations[_ngcontent-%COMP%]   .about-me[_ngcontent-%COMP%]   .personal-skills[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    color: #212121;\n  }\n  .informations[_ngcontent-%COMP%]   .about-me[_ngcontent-%COMP%]   .personal-skills[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n  }\n  .informations[_ngcontent-%COMP%]   .about-me[_ngcontent-%COMP%]   .personal-skills[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .title-name[_ngcontent-%COMP%] {\n    padding-left: 5px;\n  }\n  .informations[_ngcontent-%COMP%]   .about-me[_ngcontent-%COMP%]   .personal-skills[_ngcontent-%COMP%]   .personal-skills-content[_ngcontent-%COMP%] {\n    color: #757575;\n  }\n  .informations[_ngcontent-%COMP%]   .about-me[_ngcontent-%COMP%]   .personal-skills[_ngcontent-%COMP%]   .personal-skills-content[_ngcontent-%COMP%]   .skills-list[_ngcontent-%COMP%] {\n    list-style: none;\n    padding-left: 10px;\n    font-size: 0.9em;\n    margin: 5px 0px 5px 0px;\n  }\n  .informations[_ngcontent-%COMP%]   .about-me[_ngcontent-%COMP%]   .personal-skills[_ngcontent-%COMP%]   .personal-skills-content[_ngcontent-%COMP%]   .skills-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 3px 0px 3px 0px;\n  }\n  .informations[_ngcontent-%COMP%]   .about-me[_ngcontent-%COMP%]   .interests[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    padding-bottom: 10px;\n  }\n  .informations[_ngcontent-%COMP%]   .about-me[_ngcontent-%COMP%]   .interests[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    color: #212121;\n  }\n  .informations[_ngcontent-%COMP%]   .about-me[_ngcontent-%COMP%]   .interests[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n  }\n  .informations[_ngcontent-%COMP%]   .about-me[_ngcontent-%COMP%]   .interests[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .title-name[_ngcontent-%COMP%] {\n    padding-left: 5px;\n  }\n  .informations[_ngcontent-%COMP%]   .about-me[_ngcontent-%COMP%]   .interests[_ngcontent-%COMP%]   .personal-skills-content[_ngcontent-%COMP%] {\n    color: #757575;\n  }\n  .informations[_ngcontent-%COMP%]   .about-me[_ngcontent-%COMP%]   .interests[_ngcontent-%COMP%]   .personal-skills-content[_ngcontent-%COMP%]   .skills-list[_ngcontent-%COMP%] {\n    list-style: none;\n    padding-left: 10px;\n    font-size: 0.9em;\n    margin: 5px 0px 5px 0px;\n  }\n  .informations[_ngcontent-%COMP%]   .about-me[_ngcontent-%COMP%]   .interests[_ngcontent-%COMP%]   .personal-skills-content[_ngcontent-%COMP%]   .skills-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 3px 0px 3px 0px;\n  }\n}\n@media (orientation: portrait) and (max-width: 460px) {\n  .id-part[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    width: 100%;\n    padding-top: 15px;\n    padding-bottom: 15px;\n  }\n\n  .ma-photo-container[_ngcontent-%COMP%] {\n    background: url('maphoto2-resized.png');\n    background-size: cover;\n    border-radius: 50%;\n    width: 100px;\n    height: 100px;\n    border: 5px solid #eee;\n    box-shadow: 0 3px 2px rgba(0, 0, 0, 0.3);\n  }\n\n  .informations[_ngcontent-%COMP%]:before {\n    opacity: 0;\n  }\n\n  .informations[_ngcontent-%COMP%] {\n    opacity: 1;\n    -webkit-transition: 4s;\n    transition: 4s;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJjaC1jb21wb25lbnRzL2FzaWRlLWxlZnQvQzpcXE15RmlsZXNcXGRldlxcTm9kZUpTXFxPbmxpbmVDVlxcZnJvbnRlbmQvc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvYXJjaC1jb21wb25lbnRzL2FzaWRlLWxlZnQvYXNpZGUtbGVmdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXJjaC1jb21wb25lbnRzL2FzaWRlLWxlZnQvQzpcXE15RmlsZXNcXGRldlxcTm9kZUpTXFxPbmxpbmVDVlxcZnJvbnRlbmQvc3JjXFxhcHBcXGFyY2gtY29tcG9uZW50c1xcYXNpZGUtbGVmdFxcYXNpZGUtbGVmdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXJjaC1jb21wb25lbnRzL2FzaWRlLWxlZnQvQzpcXE15RmlsZXNcXGRldlxcTm9kZUpTXFxPbmxpbmVDVlxcZnJvbnRlbmQvc3JjXFxhcHBcXGFyY2gtY29tcG9uZW50c1xcYXNpZGUtbGVmdFxcYXNpZGUtbGVmdC1sYW5kc2NhcGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FyY2gtY29tcG9uZW50cy9hc2lkZS1sZWZ0L0M6XFxNeUZpbGVzXFxkZXZcXE5vZGVKU1xcT25saW5lQ1ZcXGZyb250ZW5kL3NyY1xcYXBwXFxhcmNoLWNvbXBvbmVudHNcXGFzaWRlLWxlZnRcXGFzaWRlLWxlZnQtcG9ydHJhaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUE2QkE7RUFDSSxXQUFBO0VBQ0Esc0JBUlE7QUNuQlo7QURnQ0E7RUFDSTtJQUNJLGFBQUE7SUFDQSxtQ0FBQTtJQUNBLG1DQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFHQSx1QkFBQTtPQUFBLG9CQUFBO1lBQUEsZUFBQTtFQy9CTjs7RURtQ0U7SUFHSSxvQkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0lBQ0Esd0JBQUE7SUFBQSxnQkFBQTtFQ2xDTjs7RURxQ0U7SUFJSSxvQkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0lBQ0Esd0JBQUE7SUFBQSxnQkFBQTtFQ3JDTjs7RUR3Q0U7SUFFSSxvQkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0lBQ0Esd0JBQUE7SUFBQSxnQkFBQTtFQ3RDTjs7RUR5Q0U7SUFFSSxvQkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0lBQ0Esd0JBQUE7SUFBQSxnQkFBQTtFQ3ZDTjtBQUNGO0FEMENBO0VBQ0k7SUFDSSxhQUFBO0lBQ0EsbUNBQUE7SUFDQSwrQkFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBRUEsYUFBQTtFQ3pDTjs7RUQ0Q0U7SUFFSSxVQUFBO0lBQ0Esb0JBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLHdCQUFBO0lBQUEsZ0JBQUE7SUFDQSxXQUFBO0VDMUNOOztFRDZDRTtJQUVJLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSx3QkFBQTtJQUFBLGdCQUFBO0VDM0NOOztFRDhDRTtJQUVJLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSx3QkFBQTtJQUFBLGdCQUFBO0VDNUNOOztFRCtDRTtJQUNJLFVBQUE7SUFFQSxvQkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0lBQ0Esd0JBQUE7SUFBQSxnQkFBQTtFQzdDTjtBQUNGO0FEa0RBOzs7Ozs7OztDQUFBO0FBVUE7Ozs7Ozs7Ozs7Q0FBQTtBRXRKQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQ0ZOYTtFRU9iLCtCQUFBO0FEZ0hKO0FFekhBO0VBQ0k7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFRjRISjs7RUV6SEU7SUFDRSxXQUFBO0lBQ0EsZUFBQTtJQUNBLHVDQUFBO0lBQ0Esc0JBQUE7SUFFQSwyQkFBQTtJQUNBLHdCQUFBO0lBQUEsZ0JBQUE7RUYySEo7QUFDRjtBRXZIRTtFQUNFO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUZ5SEo7O0VFdEhFO0lBQ0UsV0FBQTtJQUNBLGVBQUE7SUFDQSx1Q0FBQTtJQUNBLHNCQUFBO0lBRUEsMkJBQUE7SUFFQSx3QkFBQTtJQUFBLGdCQUFBO0VGdUhKO0FBQ0Y7QUVuSEU7RUFDRTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VGcUhKOztFRWxIRTtJQUNFLFdBQUE7SUFDQSxlQUFBO0lBQ0EsdUNBQUE7SUFDQSxzQkFBQTtJQUVBLDJCQUFBO0lBQ0Esd0JBQUE7SUFBQSxnQkFBQTtFRm9ISjtBQUNGO0FDM0prRCw0QkFBQTtBRlpsRCw4RUFBQTtBQTZCQTtFQUNJLFdBQUE7RUFDQSxzQkFSUTtBQ3NKWjtBRHpJQTtFQUNJO0lBQ0ksYUFBQTtJQUNBLG1DQUFBO0lBQ0EsbUNBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUdBLHVCQUFBO09BQUEsb0JBQUE7WUFBQSxlQUFBO0VDMElOOztFRHRJRTtJQUdJLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSx3QkFBQTtJQUFBLGdCQUFBO0VDdUlOOztFRHBJRTtJQUlJLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSx3QkFBQTtJQUFBLGdCQUFBO0VDb0lOOztFRGpJRTtJQUVJLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSx3QkFBQTtJQUFBLGdCQUFBO0VDbUlOOztFRGhJRTtJQUVJLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSx3QkFBQTtJQUFBLGdCQUFBO0VDa0lOO0FBQ0Y7QUQvSEE7RUFDSTtJQUNJLGFBQUE7SUFDQSxtQ0FBQTtJQUNBLCtCQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFFQSxhQUFBO0VDZ0lOOztFRDdIRTtJQUVJLFVBQUE7SUFDQSxvQkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0lBQ0Esd0JBQUE7SUFBQSxnQkFBQTtJQUNBLFdBQUE7RUMrSE47O0VENUhFO0lBRUksb0JBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLHdCQUFBO0lBQUEsZ0JBQUE7RUM4SE47O0VEM0hFO0lBRUksb0JBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLHdCQUFBO0lBQUEsZ0JBQUE7RUM2SE47O0VEMUhFO0lBQ0ksVUFBQTtJQUVBLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSx3QkFBQTtJQUFBLGdCQUFBO0VDNEhOO0FBQ0Y7QUR2SEE7Ozs7Ozs7O0NBQUE7QUFVQTs7Ozs7Ozs7OztDQUFBO0FJdEpBO0VBQ0k7SUFDRSxvQkFBQTtJQUFBLGFBQUE7SUFDQSx3QkFBQTtZQUFBLHVCQUFBO0lBQ0EseUJBQUE7WUFBQSxtQkFBQTtJQUNBLFdBQUE7SUFDQSxpQkFBQTtJQUNBLG9CQUFBO0lBQ0EsZ0NBQUE7SUFDQSx5QkpTYztFQ2dSbEI7O0VHclJFO0lBQ0UsdUNBQUE7SUFDQSxzQkFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFFQSxzQkFBQTtJQUNBLHdDQUFBO0VIdVJKOztFR3BSRTtJQUNFLFVBQUE7SUFDQSxXQUFBO0lBQ0Esd0JBQUE7SUFBQSxnQkFBQTtFSHVSSjtFR3JSSTtJQUNFLHlCSlpZO0lJYVosaUJBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0Esb0RBQUE7SUFDQSxXSmRJO0VDcVNWO0VHclJNO0lBQ0UsU0FBQTtFSHVSUjtFR3BSTTtJQUNFLG1CQUFBO0VIc1JSO0VHblJNO0lBQ0UsZ0JBQUE7RUhxUlI7RUdsUk07SUFDRSx5QkFBQTtJQUNBLFdBQUE7RUhvUlI7RUdsUlE7SUFDRSxvQkFBQTtJQUFBLGFBQUE7SUFDQSw4QkFBQTtJQUFBLDZCQUFBO1lBQUEsbUJBQUE7SUFDQSx5QkFBQTtZQUFBLDhCQUFBO0lBQ0EseUJBQUE7RUhvUlY7RUdsUlU7SUFDRSxvQkFBQTtJQUFBLGFBQUE7SUFDQSx3QkFBQTtZQUFBLHVCQUFBO0lBQ0EseUJBQUE7WUFBQSxtQkFBQTtFSG9SWjtFR2pSVTtJQUNFLFNBQUE7RUhtUlo7RUc3UUk7SUFFRSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7RUg4UU47RUc1UU07SUFDRSxvQkFBQTtJQUFBLGFBQUE7SUFDQSw0QkFBQTtJQUFBLDZCQUFBO1lBQUEsc0JBQUE7SUFDQSxvQkFBQTtFSDhRUjtFRzVRUTtJQUNFLG9CQUFBO0lBQUEsYUFBQTtJQUNBLDhCQUFBO0lBQUEsNkJBQUE7WUFBQSxtQkFBQTtJQUNBLGNKL0RFO0VDNlVaO0VHNVFVO0lBQ0Usb0JBQUE7SUFBQSxhQUFBO0lBQ0Esd0JBQUE7WUFBQSx1QkFBQTtJQUNBLHlCQUFBO1lBQUEsbUJBQUE7RUg4UVo7RUczUVU7SUFDRSxpQkFBQTtFSDZRWjtFR3ZRVTtJQUNFLFNBQUE7SUFDQSx3QkFBQTtJQUNBLGVBQUE7SUFDQSxjSmpGRTtFQzBWZDtFR3RRVTtJQUNFLG9CQUFBO0lBQUEsYUFBQTtJQUNBLDhCQUFBO0lBQUEsNkJBQUE7WUFBQSxtQkFBQTtJQUNBLGVBQUE7SUFDQSx3QkFBQTtFSHdRWjtFR3RRWTtJQUNFLHdCQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7RUh3UWQ7RUdyUVk7SUFDRSx3QkFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0VIdVFkO0VHcFFZO0lBQ0Usd0JBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtFSHNRZDtFR2hRTTtJQUNFLG9CQUFBO0lBQUEsYUFBQTtJQUNBLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtJQUNBLG9CQUFBO0VIa1FSO0VHaFFRO0lBQ0Usb0JBQUE7SUFBQSxhQUFBO0lBQ0EsOEJBQUE7SUFBQSw2QkFBQTtZQUFBLG1CQUFBO0lBQ0EsY0p4SEU7RUMwWFo7RUdoUVU7SUFDRSxvQkFBQTtJQUFBLGFBQUE7SUFDQSx3QkFBQTtZQUFBLHVCQUFBO0lBQ0EseUJBQUE7WUFBQSxtQkFBQTtFSGtRWjtFRy9QVTtJQUNFLGlCQUFBO0VIaVFaO0VHNVBRO0lBQ0UsY0p0SUk7RUNvWWQ7RUc1UFU7SUFDRSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSx1QkFBQTtFSDhQWjtFRzVQWTtJQUNFLHdCQUFBO0VIOFBkO0VHeFBNO0lBQ0Usb0JBQUE7SUFBQSxhQUFBO0lBQ0EsNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0lBQ0Esb0JBQUE7RUgwUFI7RUd4UFE7SUFDRSxvQkFBQTtJQUFBLGFBQUE7SUFDQSw4QkFBQTtJQUFBLDZCQUFBO1lBQUEsbUJBQUE7SUFDQSxjSjlKRTtFQ3daWjtFR3hQVTtJQUNFLG9CQUFBO0lBQUEsYUFBQTtJQUNBLHdCQUFBO1lBQUEsdUJBQUE7SUFDQSx5QkFBQTtZQUFBLG1CQUFBO0VIMFBaO0VHdlBVO0lBQ0UsaUJBQUE7RUh5UFo7RUdyUFE7SUFDRSxjSjNLSTtFQ2thZDtFR3JQVTtJQUNFLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtJQUNBLHVCQUFBO0VIdVBaO0VHclBZO0lBQ0Usd0JBQUE7RUh1UGQ7QUFDRjtBRy9PRTtFQUNFO0lBQ0Usb0JBQUE7SUFBQSxhQUFBO0lBQ0Esd0JBQUE7WUFBQSx1QkFBQTtJQUNBLHlCQUFBO1lBQUEsbUJBQUE7SUFDQSxXQUFBO0lBQ0EsaUJBQUE7SUFDQSxvQkFBQTtFSGlQSjs7RUc5T0U7SUFDRSx1Q0FBQTtJQUNBLHNCQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUVBLHNCQUFBO0lBQ0Esd0NBQUE7RUhnUEo7O0VHN09FO0lBQ0UsVUFBQTtFSGdQSjs7RUc3T0U7SUFDRSxVQUFBO0lBQ0Esc0JBQUE7SUFBQSxjQUFBO0VIZ1BKO0FBQ0Y7QUN0ZGdELDJCQUFBIiwiZmlsZSI6InNyYy9hcHAvYXJjaC1jb21wb25lbnRzL2FzaWRlLWxlZnQvYXNpZGUtbGVmdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuJGFwcC1mb250LWZhbWlseTonUm9ib3RvJywgc2Fucy1zZXJpZjtcblxuLy9wcmltYXJ5IGNvbG9yOiBHcmVlblxuJGdyZWVuLWJhY2tncm91bmQ6Izc2QzY3NjtcbiRncmVlbjE6IzAwRTIwMDtcbiRncmVlbjI6IzEyQzAxMjtcbiRncmVlbjM6IzI5ODIyOTtcbiRncmVlbjQ6IzI2NEMyNjtcbiRncmVlbjU6IzE5MjQxOTtcblxuLy9Db21wbGVtZW50IGNvbG9yOiBSZWRcbiRyZWQxOiNGRjAwMDA7XG4kcmVkMjojRjAxNjE2O1xuJHJlZDM6I0EyMzMzMztcbiRyZWQ0OiM1RTJGMkY7XG4kcmVkNTojMkQxRjFGO1xuXG4vL3RydWUgdGhlbWUgY29sb3JcbiRkYXJrLXByaW1hcnktY29sb3I6IzE5NzZEMjtcbiRsaWdodC1wcmltYXJ5LWNvbG9yOiNCQkRFRkI7XG4kcHJpbWFyeS1jb2xvcjojMjE5NkYzO1xuJHRleHQtaWNvbnM6I0ZGRjtcbiRhY2NlbnQtY29sb3I6IzhCQzM0QTtcbiRwcmltYXJ5LXRleHQ6IzIxMjEyMTtcbiRzZWNvbmRhcnktdGV4dDojNzU3NTc1O1xuJGRpdmlkZXItY29sb3I6I0JEQkRCRDtcblxuYm9keXtcbiAgICBtYXJnaW46MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6JHRleHQtaWNvbnM7XG4gICAgLy9vdmVyZmxvdy15OmhpZGRlbjtcbiAgICAvL292ZXJmbG93LXg6aGlkZGVuO1xufVxuXG5AbWVkaWEob3JpZW50YXRpb246IGxhbmRzY2FwZSl7XG4gICAgLm15YXBwe1xuICAgICAgICBkaXNwbGF5OmdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIGF1dG8gMjUlO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEzMHB4IGF1dG8gNTBweDtcbiAgICAgICAgd2lkdGg6MTAwdnc7XG4gICAgICAgIGhlaWdodDoxMDB2aDtcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XG4gICAgICAgIC8vZ3JpZC1nYXA6M3B4O1xuICAgICAgICBjb2x1bW4tZ2FwOiA1cHg7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGFwcC1oZWFkZXItY29tcG9uZW50e1xuICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gICAgICAgIC8vaGVpZ2h0OiAxNXZoO1xuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xuICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiAyO1xuICAgICAgICB0cmFuc2l0aW9uOjAuNXM7XG4gICAgfVxuICAgIFxuICAgIGFwcC1hc2lkZS1sZWZ0e1xuICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJDOi9NeUZpbGVzL2Rldi9Ob2RlSlMvY3VycmljdWx1bXZpdGFlL2Zyb250ZW5kL3NyYy9hc3NldHMvaW1nL21hcGhvdG8ucG5nXCIpO1xuICAgICAgICAvL2JhY2tncm91bmQtcG9zaXRpb246IC0zMDBweCAwcHg7XG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xuICAgICAgICBncmlkLXJvdy1lbmQ6IDQ7XG4gICAgICAgIHRyYW5zaXRpb246MC41cztcbiAgICB9XG4gICAgXG4gICAgYXBwLW1haW4tY29udGVudHtcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gICAgICAgIGdyaWQtY29sdW1uLWVuZDogMztcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XG4gICAgICAgIGdyaWQtcm93LWVuZDogNDtcbiAgICAgICAgdHJhbnNpdGlvbjowLjVzO1xuICAgIH1cbiAgICBcbiAgICBhcHAtYXNpZGUtcmlnaHR7XG4gICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xuICAgICAgICBncmlkLXJvdy1lbmQ6IDQ7XG4gICAgICAgIHRyYW5zaXRpb246MC41cztcbiAgICB9XG59XG5cbkBtZWRpYShvcmllbnRhdGlvbjogcG9ydHJhaXQpe1xuICAgIC5teWFwcHtcbiAgICAgICAgZGlzcGxheTpncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwJSBhdXRvIDI1JTtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNSUgYXV0byA1JTtcbiAgICAgICAgd2lkdGg6MTAwdnc7XG4gICAgICAgIGhlaWdodDoxMDB2aDtcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XG4gICAgICAgIGdyaWQtZ2FwOjNweDtcbiAgICB9XG5cbiAgICBhcHAtaGVhZGVyLWNvbXBvbmVudHtcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICAgICAgICBvcGFjaXR5OjA7XG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xuICAgICAgICBncmlkLXJvdy1lbmQ6IDI7XG4gICAgICAgIHRyYW5zaXRpb246MC41cztcbiAgICAgICAgei1pbmRleDotMTtcbiAgICB9XG4gICAgXG4gICAgYXBwLWFzaWRlLWxlZnR7XG4gICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xuICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiA0O1xuICAgICAgICB0cmFuc2l0aW9uOjAuNXM7XG4gICAgfVxuICAgIFxuICAgIGFwcC1tYWluLWNvbnRlbnR7XG4gICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xuICAgICAgICBncmlkLXJvdy1lbmQ6IDQ7XG4gICAgICAgIHRyYW5zaXRpb246MC41cztcbiAgICB9XG4gICAgXG4gICAgYXBwLWFzaWRlLXJpZ2h0e1xuICAgICAgICBvcGFjaXR5OjA7XG4gICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogcGluaztcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XG4gICAgICAgIGdyaWQtY29sdW1uLWVuZDogNDtcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XG4gICAgICAgIGdyaWQtcm93LWVuZDogNDtcbiAgICAgICAgdHJhbnNpdGlvbjowLjVzO1xuICAgIH1cbn1cblxuLy9SZXNwb25zaXZlIHN0dWZmXG5cbi8qXG5AbWVkaWEob3JpZW50YXRpb246IGxhbmRzY2FwZSl7XG5cbn1cblxuQG1lZGlhKG9yaWVudGF0aW9uOiBwb3J0cmFpdCl7XG5cbn1cbiovXG5cbi8qXG4vLyBNZWRpdW0gc2NyZWVuIChtZClcbkBtZWRpYShtaW4td2lkdGg6NzY4cHgpIGFuZCAobWF4LXdpZHRoOjEzODhweCl7IFxuICAgIFxufVxuXG4vLyBTbWFsbCBzY3JlZW4gKHNzKVxuQG1lZGlhKG1heC13aWR0aDo3NjdweCl7ICAgIFxuICAgIFxufVxuKi9cbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmJvZHkge1xuICBtYXJnaW46IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbn1cblxuQG1lZGlhIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIC5teWFwcCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSBhdXRvIDI1JTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEzMHB4IGF1dG8gNTBweDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBjb2x1bW4tZ2FwOiA1cHg7XG4gIH1cblxuICBhcHAtaGVhZGVyLWNvbXBvbmVudCB7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xuICAgIGdyaWQtcm93LWVuZDogMjtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICB9XG5cbiAgYXBwLWFzaWRlLWxlZnQge1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcbiAgICBncmlkLXJvdy1zdGFydDogMjtcbiAgICBncmlkLXJvdy1lbmQ6IDQ7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgfVxuXG4gIGFwcC1tYWluLWNvbnRlbnQge1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICAgIGdyaWQtY29sdW1uLWVuZDogMztcbiAgICBncmlkLXJvdy1zdGFydDogMjtcbiAgICBncmlkLXJvdy1lbmQ6IDQ7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgfVxuXG4gIGFwcC1hc2lkZS1yaWdodCB7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xuICAgIGdyaWQtcm93LWVuZDogNDtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICB9XG59XG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAubXlhcHAge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgYXV0byAyNSU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNSUgYXV0byA1JTtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBncmlkLWdhcDogM3B4O1xuICB9XG5cbiAgYXBwLWhlYWRlci1jb21wb25lbnQge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xuICAgIGdyaWQtcm93LWVuZDogMjtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgIHotaW5kZXg6IC0xO1xuICB9XG5cbiAgYXBwLWFzaWRlLWxlZnQge1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcbiAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICBncmlkLXJvdy1lbmQ6IDQ7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgfVxuXG4gIGFwcC1tYWluLWNvbnRlbnQge1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICAgIGdyaWQtY29sdW1uLWVuZDogNDtcbiAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICBncmlkLXJvdy1lbmQ6IDQ7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgfVxuXG4gIGFwcC1hc2lkZS1yaWdodCB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMztcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XG4gICAgZ3JpZC1yb3ctZW5kOiA0O1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gIH1cbn1cbi8qXG5AbWVkaWEob3JpZW50YXRpb246IGxhbmRzY2FwZSl7XG5cbn1cblxuQG1lZGlhKG9yaWVudGF0aW9uOiBwb3J0cmFpdCl7XG5cbn1cbiovXG4vKlxuLy8gTWVkaXVtIHNjcmVlbiAobWQpXG5AbWVkaWEobWluLXdpZHRoOjc2OHB4KSBhbmQgKG1heC13aWR0aDoxMzg4cHgpeyBcblxufVxuXG4vLyBTbWFsbCBzY3JlZW4gKHNzKVxuQG1lZGlhKG1heC13aWR0aDo3NjdweCl7ICAgIFxuXG59XG4qL1xuLmFzaWRlLWxlZnQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjQkRCREJEO1xufVxuXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgLmlkLXBhcnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5tYS1waG90by1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL21hcGhvdG8yLXJlc2l6ZWQucG5nXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gIH1cbn1cbkBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6IDEzODhweCkge1xuICAuaWQtcGFydCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLm1hLXBob3RvLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvbWFwaG90bzItcmVzaXplZC5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgfVxufVxuQG1lZGlhIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5pZC1wYXJ0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAubWEtcGhvdG8tY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9tYXBob3RvMi1yZXNpemVkLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICB9XG59XG4vKlJlc3BvbnNpdmUgbGFuZHNjYXBlIG1vZGUqL1xuLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuYm9keSB7XG4gIG1hcmdpbjogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xufVxuXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgLm15YXBwIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIGF1dG8gMjUlO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTMwcHggYXV0byA1MHB4O1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGNvbHVtbi1nYXA6IDVweDtcbiAgfVxuXG4gIGFwcC1oZWFkZXItY29tcG9uZW50IHtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gICAgZ3JpZC1yb3ctZW5kOiAyO1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gIH1cblxuICBhcHAtYXNpZGUtbGVmdCB7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xuICAgIGdyaWQtcm93LWVuZDogNDtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICB9XG5cbiAgYXBwLW1haW4tY29udGVudCB7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xuICAgIGdyaWQtcm93LWVuZDogNDtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICB9XG5cbiAgYXBwLWFzaWRlLXJpZ2h0IHtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMztcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XG4gICAgZ3JpZC1yb3ctZW5kOiA0O1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gIH1cbn1cbkBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gIC5teWFwcCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwJSBhdXRvIDI1JTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1JSBhdXRvIDUlO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGdyaWQtZ2FwOiAzcHg7XG4gIH1cblxuICBhcHAtaGVhZGVyLWNvbXBvbmVudCB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gICAgZ3JpZC1yb3ctZW5kOiAyO1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgei1pbmRleDogLTE7XG4gIH1cblxuICBhcHAtYXNpZGUtbGVmdCB7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xuICAgIGdyaWQtcm93LWVuZDogNDtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICB9XG5cbiAgYXBwLW1haW4tY29udGVudCB7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xuICAgIGdyaWQtcm93LWVuZDogNDtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICB9XG5cbiAgYXBwLWFzaWRlLXJpZ2h0IHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xuICAgIGdyaWQtY29sdW1uLWVuZDogNDtcbiAgICBncmlkLXJvdy1zdGFydDogMjtcbiAgICBncmlkLXJvdy1lbmQ6IDQ7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgfVxufVxuLypcbkBtZWRpYShvcmllbnRhdGlvbjogbGFuZHNjYXBlKXtcblxufVxuXG5AbWVkaWEob3JpZW50YXRpb246IHBvcnRyYWl0KXtcblxufVxuKi9cbi8qXG4vLyBNZWRpdW0gc2NyZWVuIChtZClcbkBtZWRpYShtaW4td2lkdGg6NzY4cHgpIGFuZCAobWF4LXdpZHRoOjEzODhweCl7IFxuXG59XG5cbi8vIFNtYWxsIHNjcmVlbiAoc3MpXG5AbWVkaWEobWF4LXdpZHRoOjc2N3B4KXsgICAgXG5cbn1cbiovXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAuaWQtcGFydCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQkRCREJEO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTc2RDI7XG4gIH1cblxuICAubWEtcGhvdG8tY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL21hcGhvdG8yLXJlc2l6ZWQucG5nXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGJvcmRlcjogNXB4IHNvbGlkICNlZWU7XG4gICAgYm94LXNoYWRvdzogMCAzcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgfVxuXG4gIC5pbmZvcm1hdGlvbnMge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgfVxuICAuaW5mb3JtYXRpb25zIC5uYW1lcy1qb2ItY29udGFjdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZEMjtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDJweCAycHggcmdiYSgxNjYsIDE2NiwgMTcxLCAwLjIpO1xuICAgIGNvbG9yOiAjRkZGO1xuICB9XG4gIC5pbmZvcm1hdGlvbnMgLm5hbWVzLWpvYi1jb250YWN0IHAge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAuaW5mb3JtYXRpb25zIC5uYW1lcy1qb2ItY29udGFjdCAubmFtZXMge1xuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gIH1cbiAgLmluZm9ybWF0aW9ucyAubmFtZXMtam9iLWNvbnRhY3QgLmpvYiB7XG4gICAgcGFkZGluZy10b3A6IDNweDtcbiAgfVxuICAuaW5mb3JtYXRpb25zIC5uYW1lcy1qb2ItY29udGFjdCAuY29udGFjdCB7XG4gICAgcGFkZGluZzogMTBweCAwcHggNXB4IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuaW5mb3JtYXRpb25zIC5uYW1lcy1qb2ItY29udGFjdCAuY29udGFjdCAuY29udGFjdC1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbjogMTBweCAwcHggMTBweCAwcHg7XG4gIH1cbiAgLmluZm9ybWF0aW9ucyAubmFtZXMtam9iLWNvbnRhY3QgLmNvbnRhY3QgLmNvbnRhY3QtY29udGVudCAuaWNvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5pbmZvcm1hdGlvbnMgLm5hbWVzLWpvYi1jb250YWN0IC5jb250YWN0IC5jb250YWN0LWNvbnRlbnQgLmNvbnRhY3QtaW5mbyB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIC5pbmZvcm1hdGlvbnMgLmFib3V0LW1lIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgfVxuICAuaW5mb3JtYXRpb25zIC5hYm91dC1tZSAud29ya2luZy1lbnZpcm9ubWVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB9XG4gIC5pbmZvcm1hdGlvbnMgLmFib3V0LW1lIC53b3JraW5nLWVudmlyb25tZW50IC50aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGNvbG9yOiAjMjEyMTIxO1xuICB9XG4gIC5pbmZvcm1hdGlvbnMgLmFib3V0LW1lIC53b3JraW5nLWVudmlyb25tZW50IC50aXRsZSAuaWNvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5pbmZvcm1hdGlvbnMgLmFib3V0LW1lIC53b3JraW5nLWVudmlyb25tZW50IC50aXRsZSAudGl0bGUtbmFtZSB7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIH1cbiAgLmluZm9ybWF0aW9ucyAuYWJvdXQtbWUgLndvcmtpbmctZW52aXJvbm1lbnQgLndvcmtpbmctZW52aXJubWVudC1jb250ZW50IHAge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiA1cHggMHB4IDVweCAwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjNzU3NTc1O1xuICB9XG4gIC5pbmZvcm1hdGlvbnMgLmFib3V0LW1lIC53b3JraW5nLWVudmlyb25tZW50IC53b3JraW5nLWVudmlybm1lbnQtY29udGVudCAuaWNvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgcGFkZGluZzogNXB4IDBweCA1cHggMHB4O1xuICB9XG4gIC5pbmZvcm1hdGlvbnMgLmFib3V0LW1lIC53b3JraW5nLWVudmlyb25tZW50IC53b3JraW5nLWVudmlybm1lbnQtY29udGVudCAuaWNvbnMgLmljb24ge1xuICAgIHBhZGRpbmc6IDBweCA1cHggMHB4IDVweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgd2lkdGg6IDE2cHg7XG4gIH1cbiAgLmluZm9ybWF0aW9ucyAuYWJvdXQtbWUgLndvcmtpbmctZW52aXJvbm1lbnQgLndvcmtpbmctZW52aXJubWVudC1jb250ZW50IC5pY29ucyAuaWNvbi1zcWwge1xuICAgIHBhZGRpbmc6IDBweCA1cHggMHB4IDVweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgd2lkdGg6IDE5cHg7XG4gIH1cbiAgLmluZm9ybWF0aW9ucyAuYWJvdXQtbWUgLndvcmtpbmctZW52aXJvbm1lbnQgLndvcmtpbmctZW52aXJubWVudC1jb250ZW50IC5pY29ucyAuaWNvbi1ub3NxbCB7XG4gICAgcGFkZGluZzogMHB4IDVweCAwcHggNXB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICB3aWR0aDogNThweDtcbiAgfVxuICAuaW5mb3JtYXRpb25zIC5hYm91dC1tZSAucGVyc29uYWwtc2tpbGxzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIH1cbiAgLmluZm9ybWF0aW9ucyAuYWJvdXQtbWUgLnBlcnNvbmFsLXNraWxscyAudGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBjb2xvcjogIzIxMjEyMTtcbiAgfVxuICAuaW5mb3JtYXRpb25zIC5hYm91dC1tZSAucGVyc29uYWwtc2tpbGxzIC50aXRsZSAuaWNvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5pbmZvcm1hdGlvbnMgLmFib3V0LW1lIC5wZXJzb25hbC1za2lsbHMgLnRpdGxlIC50aXRsZS1uYW1lIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgfVxuICAuaW5mb3JtYXRpb25zIC5hYm91dC1tZSAucGVyc29uYWwtc2tpbGxzIC5wZXJzb25hbC1za2lsbHMtY29udGVudCB7XG4gICAgY29sb3I6ICM3NTc1NzU7XG4gIH1cbiAgLmluZm9ybWF0aW9ucyAuYWJvdXQtbWUgLnBlcnNvbmFsLXNraWxscyAucGVyc29uYWwtc2tpbGxzLWNvbnRlbnQgLnNraWxscy1saXN0IHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICAgIG1hcmdpbjogNXB4IDBweCA1cHggMHB4O1xuICB9XG4gIC5pbmZvcm1hdGlvbnMgLmFib3V0LW1lIC5wZXJzb25hbC1za2lsbHMgLnBlcnNvbmFsLXNraWxscy1jb250ZW50IC5za2lsbHMtbGlzdCBsaSB7XG4gICAgcGFkZGluZzogM3B4IDBweCAzcHggMHB4O1xuICB9XG4gIC5pbmZvcm1hdGlvbnMgLmFib3V0LW1lIC5pbnRlcmVzdHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxuICAuaW5mb3JtYXRpb25zIC5hYm91dC1tZSAuaW50ZXJlc3RzIC50aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGNvbG9yOiAjMjEyMTIxO1xuICB9XG4gIC5pbmZvcm1hdGlvbnMgLmFib3V0LW1lIC5pbnRlcmVzdHMgLnRpdGxlIC5pY29uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmluZm9ybWF0aW9ucyAuYWJvdXQtbWUgLmludGVyZXN0cyAudGl0bGUgLnRpdGxlLW5hbWUge1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICB9XG4gIC5pbmZvcm1hdGlvbnMgLmFib3V0LW1lIC5pbnRlcmVzdHMgLnBlcnNvbmFsLXNraWxscy1jb250ZW50IHtcbiAgICBjb2xvcjogIzc1NzU3NTtcbiAgfVxuICAuaW5mb3JtYXRpb25zIC5hYm91dC1tZSAuaW50ZXJlc3RzIC5wZXJzb25hbC1za2lsbHMtY29udGVudCAuc2tpbGxzLWxpc3Qge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgbWFyZ2luOiA1cHggMHB4IDVweCAwcHg7XG4gIH1cbiAgLmluZm9ybWF0aW9ucyAuYWJvdXQtbWUgLmludGVyZXN0cyAucGVyc29uYWwtc2tpbGxzLWNvbnRlbnQgLnNraWxscy1saXN0IGxpIHtcbiAgICBwYWRkaW5nOiAzcHggMHB4IDNweCAwcHg7XG4gIH1cbn1cbkBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogNDYwcHgpIHtcbiAgLmlkLXBhcnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgfVxuXG4gIC5tYS1waG90by1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvbWFwaG90bzItcmVzaXplZC5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYm9yZGVyOiA1cHggc29saWQgI2VlZTtcbiAgICBib3gtc2hhZG93OiAwIDNweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB9XG5cbiAgLmluZm9ybWF0aW9uczpiZWZvcmUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICAuaW5mb3JtYXRpb25zIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IDRzO1xuICB9XG59XG4vKlJlc3BvbnNpdmUgcG9ydHJhaXQgbW9kZSovIiwiQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzLnNjc3MnO1xyXG5cclxuLmFzaWRlLWxlZnQtY29udGFpbmVye1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiRhcHAtZm9udC1mYW1pbHk7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkZGl2aWRlci1jb2xvcjtcclxufVxyXG5cclxuQGltcG9ydCAnLi9hc2lkZS1sZWZ0LWxhbmRzY2FwZS5jb21wb25lbnQuc2Nzcyc7ICAvKlJlc3BvbnNpdmUgbGFuZHNjYXBlIG1vZGUqL1xyXG5AaW1wb3J0ICcuL2FzaWRlLWxlZnQtcG9ydHJhaXQuY29tcG9uZW50LnNjc3MnOyAvKlJlc3BvbnNpdmUgcG9ydHJhaXQgbW9kZSovXHJcbiIsIkBtZWRpYShvcmllbnRhdGlvbjogbGFuZHNjYXBlKXtcclxuICAgIC5pZC1wYXJ0e1xyXG4gICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICBoZWlnaHQ6MTAwJTtcclxuICAgIH1cclxuICBcclxuICAgIC5tYS1waG90by1jb250YWluZXJ7XHJcbiAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgIGhlaWdodDppbmhlcml0O1xyXG4gICAgICBiYWNrZ3JvdW5kOnVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvbWFwaG90bzItcmVzaXplZC5wbmdcIik7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICAgICAgLy9iYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6Zml4ZWQ7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO1xyXG4gICAgICB0cmFuc2l0aW9uOjAuNXM7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuICBcclxuICBAbWVkaWEob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6MTM4OHB4KXtcclxuICAgIC5pZC1wYXJ0e1xyXG4gICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICBoZWlnaHQ6MTAwJTtcclxuICAgIH1cclxuICBcclxuICAgIC5tYS1waG90by1jb250YWluZXJ7XHJcbiAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgIGhlaWdodDppbmhlcml0O1xyXG4gICAgICBiYWNrZ3JvdW5kOnVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvbWFwaG90bzItcmVzaXplZC5wbmdcIik7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICAgICAgLy9iYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6Zml4ZWQ7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO1xyXG4gICAgICAvL2JhY2tncm91bmQtcG9zaXRpb24teDogLTE5MHB4O1xyXG4gICAgICB0cmFuc2l0aW9uOjAuNXM7XHJcbiAgICB9XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYShvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDoxMDAwcHgpe1xyXG4gICAgLmlkLXBhcnR7XHJcbiAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm1hLXBob3RvLWNvbnRhaW5lcntcclxuICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgaGVpZ2h0OmluaGVyaXQ7XHJcbiAgICAgIGJhY2tncm91bmQ6dXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9tYXBob3RvMi1yZXNpemVkLnBuZ1wiKTtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4gICAgICAvL2JhY2tncm91bmQtYXR0YWNobWVudDpmaXhlZDtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7XHJcbiAgICAgIHRyYW5zaXRpb246MC41cztcclxuICAgIH1cclxuICBcclxuICB9IiwiQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzLnNjc3MnO1xyXG5cclxuQG1lZGlhKG9yaWVudGF0aW9uOiBwb3J0cmFpdCl7XHJcbiAgICAuaWQtcGFydHtcclxuICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICBwYWRkaW5nLXRvcDoxNXB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbToxNXB4O1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGRpdmlkZXItY29sb3I7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6JGRhcmstcHJpbWFyeS1jb2xvcjtcclxuICAgICAgLy9ib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAkZGFyay1wcmltYXJ5LWNvbG9yO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm1hLXBob3RvLWNvbnRhaW5lcntcclxuICAgICAgYmFja2dyb3VuZDp1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL21hcGhvdG8yLXJlc2l6ZWQucG5nXCIpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICAgICB3aWR0aDoxNTBweDtcclxuICAgICAgaGVpZ2h0OjE1MHB4O1xyXG4gICAgICAvL3RyYW5zaXRpb246MC41cztcclxuICAgICAgYm9yZGVyOiA1cHggc29saWQgI2VlZTtcclxuICAgICAgYm94LXNoYWRvdzogMCAzcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIH1cclxuXHJcbiAgICAuaW5mb3JtYXRpb25ze1xyXG4gICAgICBvcGFjaXR5OjE7XHJcbiAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcblxyXG4gICAgICAubmFtZXMtam9iLWNvbnRhY3R7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjokZGFyay1wcmltYXJ5LWNvbG9yO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDo1cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6NXB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6NXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggMnB4IDJweCByZ2JhKDE2NiwgMTY2LCAxNzEsIDAuMik7XHJcbiAgICAgICAgY29sb3I6JHRleHQtaWNvbnM7XHJcbiAgXHJcbiAgICAgICAgcHtcclxuICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAubmFtZXN7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTozcHg7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5qb2J7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDozcHg7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5jb250YWN0e1xyXG4gICAgICAgICAgcGFkZGluZzoxMHB4IDBweCA1cHggMHB4O1xyXG4gICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgXHJcbiAgICAgICAgICAuY29udGFjdC1jb250ZW50e1xyXG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4IDEwcHggMHB4O1xyXG4gIFxyXG4gICAgICAgICAgICAuaWNvbntcclxuICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgICAuY29udGFjdC1pbmZve1xyXG4gICAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWJvdXQtbWV7XHJcbiAgICAgICAgLy93aWR0aDoxMDAlO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDo1cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6NXB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6NXB4O1xyXG5cclxuICAgICAgICAud29ya2luZy1lbnZpcm9ubWVudHtcclxuICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOjEwcHg7XHJcblxyXG4gICAgICAgICAgLnRpdGxle1xyXG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOnJvdztcclxuICAgICAgICAgICAgY29sb3I6JHByaW1hcnktdGV4dDtcclxuXHJcbiAgICAgICAgICAgIC5pY29ue1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGl0bGUtbmFtZXtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6NXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLndvcmtpbmctZW52aXJubWVudC1jb250ZW50e1xyXG5cclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOjVweCAwcHggNXB4IDBweDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgICAgICAgICAgICBjb2xvcjokc2Vjb25kYXJ5LXRleHQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5pY29uc3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246cm93O1xyXG4gICAgICAgICAgICAgIGZsZXgtd3JhcDp3cmFwO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6NXB4IDBweCA1cHggMHB4O1xyXG5cclxuICAgICAgICAgICAgICAuaWNvbntcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6MHB4IDVweCAwcHggNXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjE2cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDoxNnB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgICAuaWNvbi1zcWx7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjBweCA1cHggMHB4IDVweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDoxNnB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6MTlweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgICAgLmljb24tbm9zcWx7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjBweCA1cHggMHB4IDVweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDoxNnB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6NThweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wZXJzb25hbC1za2lsbHN7XHJcbiAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbToxMHB4O1xyXG5cclxuICAgICAgICAgIC50aXRsZXtcclxuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XHJcbiAgICAgICAgICAgIGNvbG9yOiRwcmltYXJ5LXRleHQ7XHJcblxyXG4gICAgICAgICAgICAuaWNvbntcclxuICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRpdGxlLW5hbWV7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjVweDtcclxuICAgICAgICAgICAgICAvL3RleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnBlcnNvbmFsLXNraWxscy1jb250ZW50e1xyXG4gICAgICAgICAgICBjb2xvcjokc2Vjb25kYXJ5LXRleHQ7XHJcblxyXG4gICAgICAgICAgICAuc2tpbGxzLWxpc3R7XHJcbiAgICAgICAgICAgICAgbGlzdC1zdHlsZTpub25lO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDoxMHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTowLjllbTtcclxuICAgICAgICAgICAgICBtYXJnaW46NXB4IDBweCA1cHggMHB4O1xyXG5cclxuICAgICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6M3B4IDBweCAzcHggMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmludGVyZXN0c3tcclxuICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOjEwcHg7XHJcblxyXG4gICAgICAgICAgLnRpdGxle1xyXG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOnJvdztcclxuICAgICAgICAgICAgY29sb3I6JHByaW1hcnktdGV4dDtcclxuXHJcbiAgICAgICAgICAgIC5pY29ue1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGl0bGUtbmFtZXtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6NXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnBlcnNvbmFsLXNraWxscy1jb250ZW50e1xyXG4gICAgICAgICAgICBjb2xvcjokc2Vjb25kYXJ5LXRleHQ7XHJcblxyXG4gICAgICAgICAgICAuc2tpbGxzLWxpc3R7XHJcbiAgICAgICAgICAgICAgbGlzdC1zdHlsZTpub25lO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDoxMHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTowLjllbTtcclxuICAgICAgICAgICAgICBtYXJnaW46NXB4IDBweCA1cHggMHB4O1xyXG5cclxuICAgICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6M3B4IDBweCAzcHggMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDo0NjBweCl7XHJcbiAgICAuaWQtcGFydHtcclxuICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICBwYWRkaW5nLXRvcDoxNXB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbToxNXB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm1hLXBob3RvLWNvbnRhaW5lcntcclxuICAgICAgYmFja2dyb3VuZDp1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL21hcGhvdG8yLXJlc2l6ZWQucG5nXCIpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICAgICB3aWR0aDoxMDBweDtcclxuICAgICAgaGVpZ2h0OjEwMHB4O1xyXG4gICAgICAvL3RyYW5zaXRpb246MC41cztcclxuICAgICAgYm9yZGVyOiA1cHggc29saWQgI2VlZTtcclxuICAgICAgYm94LXNoYWRvdzogMCAzcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIH1cclxuICBcclxuICAgIC5pbmZvcm1hdGlvbnM6YmVmb3Jle1xyXG4gICAgICBvcGFjaXR5OjA7XHJcbiAgICB9XHJcblxyXG4gICAgLmluZm9ybWF0aW9uc3tcclxuICAgICAgb3BhY2l0eToxO1xyXG4gICAgICB0cmFuc2l0aW9uOiA0cztcclxuICAgIH1cclxuICB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsideLeftComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-aside-left',
          templateUrl: './aside-left.component.html',
          styleUrls: ['./aside-left.component.scss']
        }]
      }], function () {
        return [];
      }, {
        onResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:resize', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/arch-components/aside-right/aside-right.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/arch-components/aside-right/aside-right.component.ts ***!
    \**********************************************************************/

  /*! exports provided: AsideRightComponent */

  /***/
  function srcAppArchComponentsAsideRightAsideRightComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AsideRightComponent", function () {
      return AsideRightComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var AsideRightComponent =
    /*#__PURE__*/
    function () {
      function AsideRightComponent() {
        _classCallCheck(this, AsideRightComponent);

        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight; //console.log(this.windowWidth)

        this.isLandscape = this.isLandscapeMode(this.windowWidth, this.windowHeight);
      }

      _createClass(AsideRightComponent, [{
        key: "onResize",
        value: function onResize(event) {
          this.windowWidth = event.target.innerWidth; //window.innerWidth;

          this.windowHeight = window.innerHeight;
          this.isLandscape = this.isLandscapeMode(this.windowWidth, this.windowHeight); //console.log(this.windowWidth);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {//console.log("Landswape mode");
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {//console.log("Portrait mode");
        }
      }, {
        key: "isLandscapeMode",
        value: function isLandscapeMode(windowWidth, windowHeight) {
          return windowWidth > windowHeight ? true : false;
        }
      }]);

      return AsideRightComponent;
    }();

    AsideRightComponent.ɵfac = function AsideRightComponent_Factory(t) {
      return new (t || AsideRightComponent)();
    };

    AsideRightComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AsideRightComponent,
      selectors: [["app-aside-right"]],
      hostBindings: function AsideRightComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function AsideRightComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 73,
      vars: 33,
      consts: [[1, "aside-right-container"], [1, "working-environment"], [1, "title"], [1, "fas", "fa-laptop"], [1, "title-name"], [1, "working-envirnment-content"], [1, "ide-icons"], ["alt", "VSC", "src", "./assets/icons/Visual_Studio_Code_icon.svg", 1, "icon"], ["alt", "Eclipse", "src", "./assets/icons/Eclipse-SVG.svg", 1, "icon"], ["alt", "IntelliJ", "src", "./assets/icons/icon_IntelliJIDEA.svg", 1, "icon"], [1, "langage-icons"], ["alt", "JS", "src", "./assets/icons/icons-nodejs.svg", 1, "icon"], ["alt", "HTML", "src", "./assets/icons/html5.svg", 1, "icon"], ["alt", "CSS", "src", "./assets/icons/icon-css3.svg", 1, "icon"], ["alt", "JAVA", "src", "./assets/icons/java_icon.svg", 1, "icon"], ["alt", "sql", "src", "./assets/icons/microsoft-sql-server.svg", 1, "icon-sql"], ["alt", "sql", "src", "./assets/icons/MongoDB-Logo.svg", 1, "icon-nosql"], [1, "framework-icons"], ["alt", "Angular", "src", "./assets/icons/angular-icon.svg", 1, "icon"], ["alt", "Spring", "src", "./assets/icons/springio-icon.svg", 1, "icon"], [1, "personal-skills"], [1, "fas", "fa-male"], [1, "personal-skills-content"], [1, "interests"], [1, "fas", "fa-heart"], [1, "interests-content"], [1, "interest"]],
      template: function AsideRightComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "article", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "IDE: Visual Studio Code, Eclipse, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "IntelliJ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Langages: JavaScript, HTML/CSS, Java, SQL, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "NoSql");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Frameworks: Angular, ExpressJS, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Spring Boot");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "article", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](50, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "article", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](59, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](63, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](66, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](69, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](72, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 11, "rightside.workingenvironment-title"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 13, "rightside.personalskills-title"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 15, "rightside.personalskills.skill1"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](47, 17, "rightside.personalskills.skill2"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](50, 19, "rightside.personalskills.skill3"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 21, "rightside.personalskills.skill4"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](59, 23, "rightside.interests-title"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](63, 25, "rightside.interests.interest1"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](66, 27, "rightside.interests.interest2"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](69, 29, "rightside.interests.interest3"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](72, 31, "rightside.interests.interest4"));
        }
      },
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]],
      styles: ["body[_ngcontent-%COMP%] {\n  margin: 0px;\n  background-color: #FFF;\n}\n@media (orientation: landscape) {\n  .myapp[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 20% auto 25%;\n    grid-template-rows: 130px auto 50px;\n    width: 100vw;\n    height: 100vh;\n    -webkit-column-gap: 5px;\n       -moz-column-gap: 5px;\n            column-gap: 5px;\n  }\n\n  app-header-component[_ngcontent-%COMP%] {\n    grid-column-start: 1;\n    grid-column-end: 4;\n    grid-row-start: 1;\n    grid-row-end: 2;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n\n  app-aside-left[_ngcontent-%COMP%] {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 2;\n    grid-row-end: 4;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n\n  app-main-content[_ngcontent-%COMP%] {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 2;\n    grid-row-end: 4;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n\n  app-aside-right[_ngcontent-%COMP%] {\n    grid-column-start: 3;\n    grid-column-end: 4;\n    grid-row-start: 2;\n    grid-row-end: 4;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n}\n@media (orientation: portrait) {\n  .myapp[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 30% auto 25%;\n    grid-template-rows: 15% auto 5%;\n    width: 100vw;\n    height: 100vh;\n    grid-gap: 3px;\n  }\n\n  app-header-component[_ngcontent-%COMP%] {\n    opacity: 0;\n    grid-column-start: 1;\n    grid-column-end: 4;\n    grid-row-start: 1;\n    grid-row-end: 2;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n    z-index: -1;\n  }\n\n  app-aside-left[_ngcontent-%COMP%] {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 1;\n    grid-row-end: 4;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n\n  app-main-content[_ngcontent-%COMP%] {\n    grid-column-start: 2;\n    grid-column-end: 4;\n    grid-row-start: 1;\n    grid-row-end: 4;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n\n  app-aside-right[_ngcontent-%COMP%] {\n    opacity: 0;\n    grid-column-start: 3;\n    grid-column-end: 4;\n    grid-row-start: 2;\n    grid-row-end: 4;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n}\n\n\n.aside-right-container[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 100%;\n  height: 100%;\n  background-color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n}\n.aside-right-container[_ngcontent-%COMP%]   .working-environment[_ngcontent-%COMP%] {\n  padding-top: 30px;\n  padding-bottom: 20px;\n  color: #212121;\n  width: 100%;\n}\n.aside-right-container[_ngcontent-%COMP%]   .working-environment[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n}\n.aside-right-container[_ngcontent-%COMP%]   .working-environment[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .title-name[_ngcontent-%COMP%] {\n  display: inline;\n  margin-left: 10px;\n}\n.aside-right-container[_ngcontent-%COMP%]   .working-environment[_ngcontent-%COMP%]   .working-envirnment-content[_ngcontent-%COMP%] {\n  font-size: 1em;\n  color: #757575;\n  padding-left: 40px;\n}\n.aside-right-container[_ngcontent-%COMP%]   .working-environment[_ngcontent-%COMP%]   .working-envirnment-content[_ngcontent-%COMP%]   .ide-icons[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n.aside-right-container[_ngcontent-%COMP%]   .working-environment[_ngcontent-%COMP%]   .working-envirnment-content[_ngcontent-%COMP%]   .ide-icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  padding: 0px 10px 0px 10px;\n}\n.aside-right-container[_ngcontent-%COMP%]   .working-environment[_ngcontent-%COMP%]   .working-envirnment-content[_ngcontent-%COMP%]   .langage-icons[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: wrap;\n}\n.aside-right-container[_ngcontent-%COMP%]   .working-environment[_ngcontent-%COMP%]   .working-envirnment-content[_ngcontent-%COMP%]   .langage-icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  padding: 0px 10px 0px 10px;\n}\n.aside-right-container[_ngcontent-%COMP%]   .working-environment[_ngcontent-%COMP%]   .working-envirnment-content[_ngcontent-%COMP%]   .langage-icons[_ngcontent-%COMP%]   .icon-sql[_ngcontent-%COMP%] {\n  width: 39px;\n  height: 32px;\n  padding: 0px 10px 0px 10px;\n}\n.aside-right-container[_ngcontent-%COMP%]   .working-environment[_ngcontent-%COMP%]   .working-envirnment-content[_ngcontent-%COMP%]   .langage-icons[_ngcontent-%COMP%]   .icon-nosql[_ngcontent-%COMP%] {\n  width: 117px;\n  height: 32px;\n  padding: 0px 10px 0px 10px;\n}\n.aside-right-container[_ngcontent-%COMP%]   .working-environment[_ngcontent-%COMP%]   .working-envirnment-content[_ngcontent-%COMP%]   .framework-icons[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n.aside-right-container[_ngcontent-%COMP%]   .working-environment[_ngcontent-%COMP%]   .working-envirnment-content[_ngcontent-%COMP%]   .framework-icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  padding: 0px 10px 0px 10px;\n}\n.aside-right-container[_ngcontent-%COMP%]   .personal-skills[_ngcontent-%COMP%] {\n  color: #212121;\n  width: 100%;\n}\n.aside-right-container[_ngcontent-%COMP%]   .personal-skills[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n}\n.aside-right-container[_ngcontent-%COMP%]   .personal-skills[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .title-name[_ngcontent-%COMP%] {\n  display: inline;\n  margin-left: 10px;\n}\n.aside-right-container[_ngcontent-%COMP%]   .personal-skills[_ngcontent-%COMP%]   .personal-skills-content[_ngcontent-%COMP%] {\n  font-size: 1em;\n  color: #757575;\n  padding-left: 20px;\n}\n.aside-right-container[_ngcontent-%COMP%]   .personal-skills[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 3px 0px 3px 0px;\n}\n.aside-right-container[_ngcontent-%COMP%]   .interests[_ngcontent-%COMP%] {\n  color: #212121;\n  width: 100%;\n}\n.aside-right-container[_ngcontent-%COMP%]   .interests[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n}\n.aside-right-container[_ngcontent-%COMP%]   .interests[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .title-name[_ngcontent-%COMP%] {\n  display: inline;\n  margin-left: 10px;\n}\n.aside-right-container[_ngcontent-%COMP%]   .interests[_ngcontent-%COMP%]   .interests-content[_ngcontent-%COMP%] {\n  font-size: 1em;\n  color: #757575;\n  padding-left: 40px;\n}\n.aside-right-container[_ngcontent-%COMP%]   .interests[_ngcontent-%COMP%]   .interests-content[_ngcontent-%COMP%]   .interest[_ngcontent-%COMP%] {\n  margin-top: 0.5em;\n}\n.aside-right-container[_ngcontent-%COMP%]   .interests[_ngcontent-%COMP%]   .interests-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 0.3em;\n  margin-bottom: 0.3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJjaC1jb21wb25lbnRzL2FzaWRlLXJpZ2h0L0M6XFxNeUZpbGVzXFxkZXZcXE5vZGVKU1xcT25saW5lQ1ZcXGZyb250ZW5kL3NyY1xcc3R5bGVzLnNjc3MiLCJzcmMvYXBwL2FyY2gtY29tcG9uZW50cy9hc2lkZS1yaWdodC9hc2lkZS1yaWdodC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXJjaC1jb21wb25lbnRzL2FzaWRlLXJpZ2h0L0M6XFxNeUZpbGVzXFxkZXZcXE5vZGVKU1xcT25saW5lQ1ZcXGZyb250ZW5kL3NyY1xcYXBwXFxhcmNoLWNvbXBvbmVudHNcXGFzaWRlLXJpZ2h0XFxhc2lkZS1yaWdodC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQTZCQTtFQUNJLFdBQUE7RUFDQSxzQkFSUTtBQ25CWjtBRGdDQTtFQUNJO0lBQ0ksYUFBQTtJQUNBLG1DQUFBO0lBQ0EsbUNBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUdBLHVCQUFBO09BQUEsb0JBQUE7WUFBQSxlQUFBO0VDL0JOOztFRG1DRTtJQUdJLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSx3QkFBQTtJQUFBLGdCQUFBO0VDbENOOztFRHFDRTtJQUlJLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSx3QkFBQTtJQUFBLGdCQUFBO0VDckNOOztFRHdDRTtJQUVJLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSx3QkFBQTtJQUFBLGdCQUFBO0VDdENOOztFRHlDRTtJQUVJLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSx3QkFBQTtJQUFBLGdCQUFBO0VDdkNOO0FBQ0Y7QUQwQ0E7RUFDSTtJQUNJLGFBQUE7SUFDQSxtQ0FBQTtJQUNBLCtCQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFFQSxhQUFBO0VDekNOOztFRDRDRTtJQUVJLFVBQUE7SUFDQSxvQkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0lBQ0Esd0JBQUE7SUFBQSxnQkFBQTtJQUNBLFdBQUE7RUMxQ047O0VENkNFO0lBRUksb0JBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLHdCQUFBO0lBQUEsZ0JBQUE7RUMzQ047O0VEOENFO0lBRUksb0JBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLHdCQUFBO0lBQUEsZ0JBQUE7RUM1Q047O0VEK0NFO0lBQ0ksVUFBQTtJQUVBLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSx3QkFBQTtJQUFBLGdCQUFBO0VDN0NOO0FBQ0Y7QURrREE7Ozs7Ozs7O0NBQUE7QUFVQTs7Ozs7Ozs7OztDQUFBO0FFdEpBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkZnQlE7RUVmUixpQ0ZOYTtBQ3NIakI7QUM5R0k7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0ZZTTtFRVhOLFdBQUE7QURnSFI7QUM5R1E7RUFDSSxnQkFBQTtBRGdIWjtBQzlHWTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBRGdIaEI7QUM1R1E7RUFDSSxjQUFBO0VBQ0EsY0ZESTtFRUVKLGtCQUFBO0FEOEdaO0FDNUdZO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0FEOEdoQjtBQzVHZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FEOEdwQjtBQzFHWTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLGVBQUE7QUQ0R2hCO0FDMUdnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUQ0R3BCO0FDekdnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUQyR3BCO0FDeEdnQjtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUQwR3BCO0FDdEdZO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0FEd0doQjtBQ3RHZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FEd0dwQjtBQ2xHSTtFQUNJLGNGdERNO0VFdUROLFdBQUE7QURvR1I7QUNsR1E7RUFDSSxnQkFBQTtBRG9HWjtBQ2xHWTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBRG9HaEI7QUNoR1E7RUFDSSxjQUFBO0VBQ0EsY0ZuRUk7RUVvRUosa0JBQUE7QURrR1o7QUMvRlE7RUFDSSx3QkFBQTtBRGlHWjtBQzdGSTtFQUNJLGNGOUVNO0VFK0VOLFdBQUE7QUQrRlI7QUM3RlE7RUFDSSxnQkFBQTtBRCtGWjtBQzdGWTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBRCtGaEI7QUMzRlE7RUFDSSxjQUFBO0VBQ0EsY0YzRkk7RUU0Rkosa0JBQUE7QUQ2Rlo7QUMzRlk7RUFDSSxpQkFBQTtBRDZGaEI7QUMxRlk7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0FENEZoQiIsImZpbGUiOiJzcmMvYXBwL2FyY2gtY29tcG9uZW50cy9hc2lkZS1yaWdodC9hc2lkZS1yaWdodC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuJGFwcC1mb250LWZhbWlseTonUm9ib3RvJywgc2Fucy1zZXJpZjtcblxuLy9wcmltYXJ5IGNvbG9yOiBHcmVlblxuJGdyZWVuLWJhY2tncm91bmQ6Izc2QzY3NjtcbiRncmVlbjE6IzAwRTIwMDtcbiRncmVlbjI6IzEyQzAxMjtcbiRncmVlbjM6IzI5ODIyOTtcbiRncmVlbjQ6IzI2NEMyNjtcbiRncmVlbjU6IzE5MjQxOTtcblxuLy9Db21wbGVtZW50IGNvbG9yOiBSZWRcbiRyZWQxOiNGRjAwMDA7XG4kcmVkMjojRjAxNjE2O1xuJHJlZDM6I0EyMzMzMztcbiRyZWQ0OiM1RTJGMkY7XG4kcmVkNTojMkQxRjFGO1xuXG4vL3RydWUgdGhlbWUgY29sb3JcbiRkYXJrLXByaW1hcnktY29sb3I6IzE5NzZEMjtcbiRsaWdodC1wcmltYXJ5LWNvbG9yOiNCQkRFRkI7XG4kcHJpbWFyeS1jb2xvcjojMjE5NkYzO1xuJHRleHQtaWNvbnM6I0ZGRjtcbiRhY2NlbnQtY29sb3I6IzhCQzM0QTtcbiRwcmltYXJ5LXRleHQ6IzIxMjEyMTtcbiRzZWNvbmRhcnktdGV4dDojNzU3NTc1O1xuJGRpdmlkZXItY29sb3I6I0JEQkRCRDtcblxuYm9keXtcbiAgICBtYXJnaW46MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6JHRleHQtaWNvbnM7XG4gICAgLy9vdmVyZmxvdy15OmhpZGRlbjtcbiAgICAvL292ZXJmbG93LXg6aGlkZGVuO1xufVxuXG5AbWVkaWEob3JpZW50YXRpb246IGxhbmRzY2FwZSl7XG4gICAgLm15YXBwe1xuICAgICAgICBkaXNwbGF5OmdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIGF1dG8gMjUlO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEzMHB4IGF1dG8gNTBweDtcbiAgICAgICAgd2lkdGg6MTAwdnc7XG4gICAgICAgIGhlaWdodDoxMDB2aDtcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XG4gICAgICAgIC8vZ3JpZC1nYXA6M3B4O1xuICAgICAgICBjb2x1bW4tZ2FwOiA1cHg7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGFwcC1oZWFkZXItY29tcG9uZW50e1xuICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gICAgICAgIC8vaGVpZ2h0OiAxNXZoO1xuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xuICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiAyO1xuICAgICAgICB0cmFuc2l0aW9uOjAuNXM7XG4gICAgfVxuICAgIFxuICAgIGFwcC1hc2lkZS1sZWZ0e1xuICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJDOi9NeUZpbGVzL2Rldi9Ob2RlSlMvY3VycmljdWx1bXZpdGFlL2Zyb250ZW5kL3NyYy9hc3NldHMvaW1nL21hcGhvdG8ucG5nXCIpO1xuICAgICAgICAvL2JhY2tncm91bmQtcG9zaXRpb246IC0zMDBweCAwcHg7XG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xuICAgICAgICBncmlkLXJvdy1lbmQ6IDQ7XG4gICAgICAgIHRyYW5zaXRpb246MC41cztcbiAgICB9XG4gICAgXG4gICAgYXBwLW1haW4tY29udGVudHtcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gICAgICAgIGdyaWQtY29sdW1uLWVuZDogMztcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XG4gICAgICAgIGdyaWQtcm93LWVuZDogNDtcbiAgICAgICAgdHJhbnNpdGlvbjowLjVzO1xuICAgIH1cbiAgICBcbiAgICBhcHAtYXNpZGUtcmlnaHR7XG4gICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xuICAgICAgICBncmlkLXJvdy1lbmQ6IDQ7XG4gICAgICAgIHRyYW5zaXRpb246MC41cztcbiAgICB9XG59XG5cbkBtZWRpYShvcmllbnRhdGlvbjogcG9ydHJhaXQpe1xuICAgIC5teWFwcHtcbiAgICAgICAgZGlzcGxheTpncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwJSBhdXRvIDI1JTtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNSUgYXV0byA1JTtcbiAgICAgICAgd2lkdGg6MTAwdnc7XG4gICAgICAgIGhlaWdodDoxMDB2aDtcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XG4gICAgICAgIGdyaWQtZ2FwOjNweDtcbiAgICB9XG5cbiAgICBhcHAtaGVhZGVyLWNvbXBvbmVudHtcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICAgICAgICBvcGFjaXR5OjA7XG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xuICAgICAgICBncmlkLXJvdy1lbmQ6IDI7XG4gICAgICAgIHRyYW5zaXRpb246MC41cztcbiAgICAgICAgei1pbmRleDotMTtcbiAgICB9XG4gICAgXG4gICAgYXBwLWFzaWRlLWxlZnR7XG4gICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xuICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiA0O1xuICAgICAgICB0cmFuc2l0aW9uOjAuNXM7XG4gICAgfVxuICAgIFxuICAgIGFwcC1tYWluLWNvbnRlbnR7XG4gICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xuICAgICAgICBncmlkLXJvdy1lbmQ6IDQ7XG4gICAgICAgIHRyYW5zaXRpb246MC41cztcbiAgICB9XG4gICAgXG4gICAgYXBwLWFzaWRlLXJpZ2h0e1xuICAgICAgICBvcGFjaXR5OjA7XG4gICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogcGluaztcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XG4gICAgICAgIGdyaWQtY29sdW1uLWVuZDogNDtcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XG4gICAgICAgIGdyaWQtcm93LWVuZDogNDtcbiAgICAgICAgdHJhbnNpdGlvbjowLjVzO1xuICAgIH1cbn1cblxuLy9SZXNwb25zaXZlIHN0dWZmXG5cbi8qXG5AbWVkaWEob3JpZW50YXRpb246IGxhbmRzY2FwZSl7XG5cbn1cblxuQG1lZGlhKG9yaWVudGF0aW9uOiBwb3J0cmFpdCl7XG5cbn1cbiovXG5cbi8qXG4vLyBNZWRpdW0gc2NyZWVuIChtZClcbkBtZWRpYShtaW4td2lkdGg6NzY4cHgpIGFuZCAobWF4LXdpZHRoOjEzODhweCl7IFxuICAgIFxufVxuXG4vLyBTbWFsbCBzY3JlZW4gKHNzKVxuQG1lZGlhKG1heC13aWR0aDo3NjdweCl7ICAgIFxuICAgIFxufVxuKi9cbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmJvZHkge1xuICBtYXJnaW46IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbn1cblxuQG1lZGlhIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIC5teWFwcCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSBhdXRvIDI1JTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEzMHB4IGF1dG8gNTBweDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBjb2x1bW4tZ2FwOiA1cHg7XG4gIH1cblxuICBhcHAtaGVhZGVyLWNvbXBvbmVudCB7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xuICAgIGdyaWQtcm93LWVuZDogMjtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICB9XG5cbiAgYXBwLWFzaWRlLWxlZnQge1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcbiAgICBncmlkLXJvdy1zdGFydDogMjtcbiAgICBncmlkLXJvdy1lbmQ6IDQ7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgfVxuXG4gIGFwcC1tYWluLWNvbnRlbnQge1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICAgIGdyaWQtY29sdW1uLWVuZDogMztcbiAgICBncmlkLXJvdy1zdGFydDogMjtcbiAgICBncmlkLXJvdy1lbmQ6IDQ7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgfVxuXG4gIGFwcC1hc2lkZS1yaWdodCB7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xuICAgIGdyaWQtcm93LWVuZDogNDtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICB9XG59XG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAubXlhcHAge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgYXV0byAyNSU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNSUgYXV0byA1JTtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBncmlkLWdhcDogM3B4O1xuICB9XG5cbiAgYXBwLWhlYWRlci1jb21wb25lbnQge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xuICAgIGdyaWQtcm93LWVuZDogMjtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgIHotaW5kZXg6IC0xO1xuICB9XG5cbiAgYXBwLWFzaWRlLWxlZnQge1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcbiAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICBncmlkLXJvdy1lbmQ6IDQ7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgfVxuXG4gIGFwcC1tYWluLWNvbnRlbnQge1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICAgIGdyaWQtY29sdW1uLWVuZDogNDtcbiAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICBncmlkLXJvdy1lbmQ6IDQ7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgfVxuXG4gIGFwcC1hc2lkZS1yaWdodCB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMztcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XG4gICAgZ3JpZC1yb3ctZW5kOiA0O1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gIH1cbn1cbi8qXG5AbWVkaWEob3JpZW50YXRpb246IGxhbmRzY2FwZSl7XG5cbn1cblxuQG1lZGlhKG9yaWVudGF0aW9uOiBwb3J0cmFpdCl7XG5cbn1cbiovXG4vKlxuLy8gTWVkaXVtIHNjcmVlbiAobWQpXG5AbWVkaWEobWluLXdpZHRoOjc2OHB4KSBhbmQgKG1heC13aWR0aDoxMzg4cHgpeyBcblxufVxuXG4vLyBTbWFsbCBzY3JlZW4gKHNzKVxuQG1lZGlhKG1heC13aWR0aDo3NjdweCl7ICAgIFxuXG59XG4qL1xuLmFzaWRlLXJpZ2h0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuLmFzaWRlLXJpZ2h0LWNvbnRhaW5lciAud29ya2luZy1lbnZpcm9ubWVudCB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgY29sb3I6ICMyMTIxMjE7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmFzaWRlLXJpZ2h0LWNvbnRhaW5lciAud29ya2luZy1lbnZpcm9ubWVudCAudGl0bGUge1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuLmFzaWRlLXJpZ2h0LWNvbnRhaW5lciAud29ya2luZy1lbnZpcm9ubWVudCAudGl0bGUgLnRpdGxlLW5hbWUge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmFzaWRlLXJpZ2h0LWNvbnRhaW5lciAud29ya2luZy1lbnZpcm9ubWVudCAud29ya2luZy1lbnZpcm5tZW50LWNvbnRlbnQge1xuICBmb250LXNpemU6IDFlbTtcbiAgY29sb3I6ICM3NTc1NzU7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbn1cbi5hc2lkZS1yaWdodC1jb250YWluZXIgLndvcmtpbmctZW52aXJvbm1lbnQgLndvcmtpbmctZW52aXJubWVudC1jb250ZW50IC5pZGUtaWNvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLmFzaWRlLXJpZ2h0LWNvbnRhaW5lciAud29ya2luZy1lbnZpcm9ubWVudCAud29ya2luZy1lbnZpcm5tZW50LWNvbnRlbnQgLmlkZS1pY29ucyAuaWNvbiB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIHBhZGRpbmc6IDBweCAxMHB4IDBweCAxMHB4O1xufVxuLmFzaWRlLXJpZ2h0LWNvbnRhaW5lciAud29ya2luZy1lbnZpcm9ubWVudCAud29ya2luZy1lbnZpcm5tZW50LWNvbnRlbnQgLmxhbmdhZ2UtaWNvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uYXNpZGUtcmlnaHQtY29udGFpbmVyIC53b3JraW5nLWVudmlyb25tZW50IC53b3JraW5nLWVudmlybm1lbnQtY29udGVudCAubGFuZ2FnZS1pY29ucyAuaWNvbiB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIHBhZGRpbmc6IDBweCAxMHB4IDBweCAxMHB4O1xufVxuLmFzaWRlLXJpZ2h0LWNvbnRhaW5lciAud29ya2luZy1lbnZpcm9ubWVudCAud29ya2luZy1lbnZpcm5tZW50LWNvbnRlbnQgLmxhbmdhZ2UtaWNvbnMgLmljb24tc3FsIHtcbiAgd2lkdGg6IDM5cHg7XG4gIGhlaWdodDogMzJweDtcbiAgcGFkZGluZzogMHB4IDEwcHggMHB4IDEwcHg7XG59XG4uYXNpZGUtcmlnaHQtY29udGFpbmVyIC53b3JraW5nLWVudmlyb25tZW50IC53b3JraW5nLWVudmlybm1lbnQtY29udGVudCAubGFuZ2FnZS1pY29ucyAuaWNvbi1ub3NxbCB7XG4gIHdpZHRoOiAxMTdweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBwYWRkaW5nOiAwcHggMTBweCAwcHggMTBweDtcbn1cbi5hc2lkZS1yaWdodC1jb250YWluZXIgLndvcmtpbmctZW52aXJvbm1lbnQgLndvcmtpbmctZW52aXJubWVudC1jb250ZW50IC5mcmFtZXdvcmstaWNvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLmFzaWRlLXJpZ2h0LWNvbnRhaW5lciAud29ya2luZy1lbnZpcm9ubWVudCAud29ya2luZy1lbnZpcm5tZW50LWNvbnRlbnQgLmZyYW1ld29yay1pY29ucyAuaWNvbiB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIHBhZGRpbmc6IDBweCAxMHB4IDBweCAxMHB4O1xufVxuLmFzaWRlLXJpZ2h0LWNvbnRhaW5lciAucGVyc29uYWwtc2tpbGxzIHtcbiAgY29sb3I6ICMyMTIxMjE7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmFzaWRlLXJpZ2h0LWNvbnRhaW5lciAucGVyc29uYWwtc2tpbGxzIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG4uYXNpZGUtcmlnaHQtY29udGFpbmVyIC5wZXJzb25hbC1za2lsbHMgLnRpdGxlIC50aXRsZS1uYW1lIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5hc2lkZS1yaWdodC1jb250YWluZXIgLnBlcnNvbmFsLXNraWxscyAucGVyc29uYWwtc2tpbGxzLWNvbnRlbnQge1xuICBmb250LXNpemU6IDFlbTtcbiAgY29sb3I6ICM3NTc1NzU7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbi5hc2lkZS1yaWdodC1jb250YWluZXIgLnBlcnNvbmFsLXNraWxscyBsaSB7XG4gIHBhZGRpbmc6IDNweCAwcHggM3B4IDBweDtcbn1cbi5hc2lkZS1yaWdodC1jb250YWluZXIgLmludGVyZXN0cyB7XG4gIGNvbG9yOiAjMjEyMTIxO1xuICB3aWR0aDogMTAwJTtcbn1cbi5hc2lkZS1yaWdodC1jb250YWluZXIgLmludGVyZXN0cyAudGl0bGUge1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuLmFzaWRlLXJpZ2h0LWNvbnRhaW5lciAuaW50ZXJlc3RzIC50aXRsZSAudGl0bGUtbmFtZSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uYXNpZGUtcmlnaHQtY29udGFpbmVyIC5pbnRlcmVzdHMgLmludGVyZXN0cy1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGNvbG9yOiAjNzU3NTc1O1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG59XG4uYXNpZGUtcmlnaHQtY29udGFpbmVyIC5pbnRlcmVzdHMgLmludGVyZXN0cy1jb250ZW50IC5pbnRlcmVzdCB7XG4gIG1hcmdpbi10b3A6IDAuNWVtO1xufVxuLmFzaWRlLXJpZ2h0LWNvbnRhaW5lciAuaW50ZXJlc3RzIC5pbnRlcmVzdHMtY29udGVudCBwIHtcbiAgbWFyZ2luLXRvcDogMC4zZW07XG4gIG1hcmdpbi1ib3R0b206IDAuM2VtO1xufSIsIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy5zY3NzJztcclxuXHJcbi5hc2lkZS1yaWdodC1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiR0ZXh0LWljb25zO1xyXG4gICAgZm9udC1mYW1pbHk6JGFwcC1mb250LWZhbWlseTtcclxuXHJcbiAgICAud29ya2luZy1lbnZpcm9ubWVudHtcclxuICAgICAgICBwYWRkaW5nLXRvcDozMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOjIwcHg7XHJcbiAgICAgICAgY29sb3I6JHByaW1hcnktdGV4dDtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG5cclxuICAgICAgICAudGl0bGV7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxLjVlbTtcclxuXHJcbiAgICAgICAgICAgIC50aXRsZS1uYW1le1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDoxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAud29ya2luZy1lbnZpcm5tZW50LWNvbnRlbnR7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiRzZWNvbmRhcnktdGV4dDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjQwcHg7XHJcblxyXG4gICAgICAgICAgICAuaWRlLWljb25ze1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246cm93O1xyXG5cclxuICAgICAgICAgICAgICAgIC5pY29ue1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjMycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjMycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzowcHggMTBweCAwcHggMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmxhbmdhZ2UtaWNvbnN7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XHJcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6d3JhcDtcclxuXHJcbiAgICAgICAgICAgICAgICAuaWNvbntcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDozMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDozMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MHB4IDEwcHggMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmljb24tc3Fse1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjM5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjMycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzowcHggMTBweCAwcHggMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaWNvbi1ub3NxbHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMTdweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MzJweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjBweCAxMHB4IDBweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZnJhbWV3b3JrLWljb25ze1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246cm93O1xyXG5cclxuICAgICAgICAgICAgICAgIC5pY29ue1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjMycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjMycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzowcHggMTBweCAwcHggMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucGVyc29uYWwtc2tpbGxze1xyXG4gICAgICAgIGNvbG9yOiRwcmltYXJ5LXRleHQ7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuXHJcbiAgICAgICAgLnRpdGxle1xyXG4gICAgICAgICAgICBmb250LXNpemU6MS41ZW07XHJcblxyXG4gICAgICAgICAgICAudGl0bGUtbmFtZXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBlcnNvbmFsLXNraWxscy1jb250ZW50e1xyXG4gICAgICAgICAgICBmb250LXNpemU6MWVtO1xyXG4gICAgICAgICAgICBjb2xvcjokc2Vjb25kYXJ5LXRleHQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDoyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzcHggMHB4IDNweCAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5pbnRlcmVzdHN7XHJcbiAgICAgICAgY29sb3I6JHByaW1hcnktdGV4dDtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG5cclxuICAgICAgICAudGl0bGV7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxLjVlbTtcclxuXHJcbiAgICAgICAgICAgIC50aXRsZS1uYW1le1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDoxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW50ZXJlc3RzLWNvbnRlbnR7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiRzZWNvbmRhcnktdGV4dDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjQwcHg7XHJcblxyXG4gICAgICAgICAgICAuaW50ZXJlc3R7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjAuNWVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDowLjNlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MC4zZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsideRightComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-aside-right',
          templateUrl: './aside-right.component.html',
          styleUrls: ['./aside-right.component.scss']
        }]
      }], function () {
        return [];
      }, {
        onResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:resize', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/arch-components/footer-component/footer-component.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/arch-components/footer-component/footer-component.component.ts ***!
    \********************************************************************************/

  /*! exports provided: FooterComponentComponent */

  /***/
  function srcAppArchComponentsFooterComponentFooterComponentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponentComponent", function () {
      return FooterComponentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponentComponent =
    /*#__PURE__*/
    function () {
      function FooterComponentComponent() {
        _classCallCheck(this, FooterComponentComponent);
      }

      _createClass(FooterComponentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponentComponent;
    }();

    FooterComponentComponent.ɵfac = function FooterComponentComponent_Factory(t) {
      return new (t || FooterComponentComponent)();
    };

    FooterComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponentComponent,
      selectors: [["app-footer-component"]],
      decls: 2,
      vars: 0,
      consts: [[1, "footer-container"]],
      template: function FooterComponentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer-component works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FyY2gtY29tcG9uZW50cy9mb290ZXItY29tcG9uZW50L2Zvb3Rlci1jb21wb25lbnQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer-component',
          templateUrl: './footer-component.component.html',
          styleUrls: ['./footer-component.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/arch-components/header-component/header-component.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/arch-components/header-component/header-component.component.ts ***!
    \********************************************************************************/

  /*! exports provided: HeaderComponentComponent */

  /***/
  function srcAppArchComponentsHeaderComponentHeaderComponentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponentComponent", function () {
      return HeaderComponentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var HeaderComponentComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponentComponent() {
        _classCallCheck(this, HeaderComponentComponent);

        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight; //console.log(this.windowWidth)

        this.isLandscape = this.isLandscapeMode(this.windowWidth, this.windowHeight);
      }

      _createClass(HeaderComponentComponent, [{
        key: "onResize",
        value: function onResize(event) {
          this.windowWidth = event.target.innerWidth; //window.innerWidth;

          this.windowHeight = window.innerHeight;
          this.isLandscape = this.isLandscapeMode(this.windowWidth, this.windowHeight); //console.log(this.isLandscape);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {//console.log("Landswape mode");
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {//console.log("Portrait mode");
        }
      }, {
        key: "isLandscapeMode",
        value: function isLandscapeMode(windowWidth, windowHeight) {
          return windowWidth > windowHeight ? true : false;
        }
      }]);

      return HeaderComponentComponent;
    }();

    HeaderComponentComponent.ɵfac = function HeaderComponentComponent_Factory(t) {
      return new (t || HeaderComponentComponent)();
    };

    HeaderComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponentComponent,
      selectors: [["app-header-component"]],
      hostBindings: function HeaderComponentComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function HeaderComponentComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 35,
      vars: 21,
      consts: [[1, "topbar"], [1, "names-job"], [1, "first-name"], [1, "last-name"], [1, "job"], [1, "vertical-line"], [1, "contact"], [1, "contact-tel"], [1, "fas", "fa-mobile-alt"], [1, "tel"], [1, "contact-linkedin"], [1, "fas", "fa-city"], [1, "linkedin"], [1, "contact-mail"], [1, "fas", "fa-at"], [1, "mail"], [1, "fab", "fa-linkedin-in"]],
      template: function HeaderComponentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 7, "header.firstname"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 9, "header.lastname"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 11, "header.job"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 13, "header.phonenumber"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 15, "header.location"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 17, "header.mail"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 19, "header.linkedin"));
        }
      },
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]],
      styles: ["body[_ngcontent-%COMP%] {\n  margin: 0px;\n  background-color: #FFF;\n}\n@media (orientation: landscape) {\n  .myapp[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 20% auto 25%;\n    grid-template-rows: 130px auto 50px;\n    width: 100vw;\n    height: 100vh;\n    -webkit-column-gap: 5px;\n       -moz-column-gap: 5px;\n            column-gap: 5px;\n  }\n\n  app-header-component[_ngcontent-%COMP%] {\n    grid-column-start: 1;\n    grid-column-end: 4;\n    grid-row-start: 1;\n    grid-row-end: 2;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n\n  app-aside-left[_ngcontent-%COMP%] {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 2;\n    grid-row-end: 4;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n\n  app-main-content[_ngcontent-%COMP%] {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 2;\n    grid-row-end: 4;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n\n  app-aside-right[_ngcontent-%COMP%] {\n    grid-column-start: 3;\n    grid-column-end: 4;\n    grid-row-start: 2;\n    grid-row-end: 4;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n}\n@media (orientation: portrait) {\n  .myapp[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 30% auto 25%;\n    grid-template-rows: 15% auto 5%;\n    width: 100vw;\n    height: 100vh;\n    grid-gap: 3px;\n  }\n\n  app-header-component[_ngcontent-%COMP%] {\n    opacity: 0;\n    grid-column-start: 1;\n    grid-column-end: 4;\n    grid-row-start: 1;\n    grid-row-end: 2;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n    z-index: -1;\n  }\n\n  app-aside-left[_ngcontent-%COMP%] {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 1;\n    grid-row-end: 4;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n\n  app-main-content[_ngcontent-%COMP%] {\n    grid-column-start: 2;\n    grid-column-end: 4;\n    grid-row-start: 1;\n    grid-row-end: 4;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n\n  app-aside-right[_ngcontent-%COMP%] {\n    opacity: 0;\n    grid-column-start: 3;\n    grid-column-end: 4;\n    grid-row-start: 2;\n    grid-row-end: 4;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n}\n\n\n.topbar[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  background-color: #1976D2;\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n.names-job[_ngcontent-%COMP%] {\n  padding: 10px 20px 10px 20px;\n  text-align: center;\n  letter-spacing: 0.2em;\n}\n.names-job[_ngcontent-%COMP%]   .first-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 2em;\n}\n.names-job[_ngcontent-%COMP%]   .last-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.6em;\n}\n.names-job[_ngcontent-%COMP%]   .job[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  font-size: 1.3em;\n}\n.vertical-line[_ngcontent-%COMP%] {\n  margin: 10px;\n  border-left: 2px solid darkgrey;\n}\n.contact[_ngcontent-%COMP%] {\n  padding: 10px 20px 10px 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  justify-content: space-around;\n}\n.contact[_ngcontent-%COMP%]   .contact-mail[_ngcontent-%COMP%] {\n  margin-left: 7px;\n}\n.contact[_ngcontent-%COMP%]   .contact-mail[_ngcontent-%COMP%]   .mail[_ngcontent-%COMP%] {\n  margin: 0;\n  display: inline;\n  margin-left: 7px;\n}\n.contact[_ngcontent-%COMP%]   .contact-tel[_ngcontent-%COMP%] {\n  margin-left: 7px;\n}\n.contact[_ngcontent-%COMP%]   .contact-tel[_ngcontent-%COMP%]   .tel[_ngcontent-%COMP%] {\n  margin: 0;\n  display: inline;\n  margin-left: 7px;\n}\n.contact[_ngcontent-%COMP%]   .contact-linkedin[_ngcontent-%COMP%] {\n  margin-left: 7px;\n}\n.contact[_ngcontent-%COMP%]   .contact-linkedin[_ngcontent-%COMP%]   .linkedin[_ngcontent-%COMP%] {\n  margin: 0;\n  display: inline;\n  margin-left: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJjaC1jb21wb25lbnRzL2hlYWRlci1jb21wb25lbnQvQzpcXE15RmlsZXNcXGRldlxcTm9kZUpTXFxPbmxpbmVDVlxcZnJvbnRlbmQvc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvYXJjaC1jb21wb25lbnRzL2hlYWRlci1jb21wb25lbnQvaGVhZGVyLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXJjaC1jb21wb25lbnRzL2hlYWRlci1jb21wb25lbnQvQzpcXE15RmlsZXNcXGRldlxcTm9kZUpTXFxPbmxpbmVDVlxcZnJvbnRlbmQvc3JjXFxhcHBcXGFyY2gtY29tcG9uZW50c1xcaGVhZGVyLWNvbXBvbmVudFxcaGVhZGVyLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQTZCQTtFQUNJLFdBQUE7RUFDQSxzQkFSUTtBQ25CWjtBRGdDQTtFQUNJO0lBQ0ksYUFBQTtJQUNBLG1DQUFBO0lBQ0EsbUNBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUdBLHVCQUFBO09BQUEsb0JBQUE7WUFBQSxlQUFBO0VDL0JOOztFRG1DRTtJQUdJLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSx3QkFBQTtJQUFBLGdCQUFBO0VDbENOOztFRHFDRTtJQUlJLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSx3QkFBQTtJQUFBLGdCQUFBO0VDckNOOztFRHdDRTtJQUVJLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSx3QkFBQTtJQUFBLGdCQUFBO0VDdENOOztFRHlDRTtJQUVJLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSx3QkFBQTtJQUFBLGdCQUFBO0VDdkNOO0FBQ0Y7QUQwQ0E7RUFDSTtJQUNJLGFBQUE7SUFDQSxtQ0FBQTtJQUNBLCtCQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFFQSxhQUFBO0VDekNOOztFRDRDRTtJQUVJLFVBQUE7SUFDQSxvQkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0lBQ0Esd0JBQUE7SUFBQSxnQkFBQTtJQUNBLFdBQUE7RUMxQ047O0VENkNFO0lBRUksb0JBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLHdCQUFBO0lBQUEsZ0JBQUE7RUMzQ047O0VEOENFO0lBRUksb0JBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLHdCQUFBO0lBQUEsZ0JBQUE7RUM1Q047O0VEK0NFO0lBQ0ksVUFBQTtJQUVBLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSx3QkFBQTtJQUFBLGdCQUFBO0VDN0NOO0FBQ0Y7QURrREE7Ozs7Ozs7O0NBQUE7QUFVQTs7Ozs7Ozs7OztDQUFBO0FFdEpBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkZlZ0I7RUVkaEIsV0ZpQlE7RUVoQlIsaUNGTGE7RUVNYixvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7QURnSEo7QUM1R0E7RUFDSSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUQrR0o7QUM3R0k7RUFDRSxTQUFBO0VBQ0EsY0FBQTtBRCtHTjtBQzVHTTtFQUNJLFNBQUE7RUFDQSxnQkFBQTtBRDhHVjtBQzNHTTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUQ2R1Y7QUN2R0E7RUFDSSxZQUFBO0VBQ0EsK0JBQUE7QUQwR0o7QUN2R0E7RUFDSSw0QkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLDZCQUFBO0FEMEdKO0FDeEdJO0VBQ0UsZ0JBQUE7QUQwR047QUN4R007RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEMEdSO0FDdEdJO0VBQ0UsZ0JBQUE7QUR3R047QUN0R1E7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEd0dWO0FDcEdJO0VBQ0UsZ0JBQUE7QURzR047QUNwR007RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEc0dSIiwiZmlsZSI6InNyYy9hcHAvYXJjaC1jb21wb25lbnRzL2hlYWRlci1jb21wb25lbnQvaGVhZGVyLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuJGFwcC1mb250LWZhbWlseTonUm9ib3RvJywgc2Fucy1zZXJpZjtcblxuLy9wcmltYXJ5IGNvbG9yOiBHcmVlblxuJGdyZWVuLWJhY2tncm91bmQ6Izc2QzY3NjtcbiRncmVlbjE6IzAwRTIwMDtcbiRncmVlbjI6IzEyQzAxMjtcbiRncmVlbjM6IzI5ODIyOTtcbiRncmVlbjQ6IzI2NEMyNjtcbiRncmVlbjU6IzE5MjQxOTtcblxuLy9Db21wbGVtZW50IGNvbG9yOiBSZWRcbiRyZWQxOiNGRjAwMDA7XG4kcmVkMjojRjAxNjE2O1xuJHJlZDM6I0EyMzMzMztcbiRyZWQ0OiM1RTJGMkY7XG4kcmVkNTojMkQxRjFGO1xuXG4vL3RydWUgdGhlbWUgY29sb3JcbiRkYXJrLXByaW1hcnktY29sb3I6IzE5NzZEMjtcbiRsaWdodC1wcmltYXJ5LWNvbG9yOiNCQkRFRkI7XG4kcHJpbWFyeS1jb2xvcjojMjE5NkYzO1xuJHRleHQtaWNvbnM6I0ZGRjtcbiRhY2NlbnQtY29sb3I6IzhCQzM0QTtcbiRwcmltYXJ5LXRleHQ6IzIxMjEyMTtcbiRzZWNvbmRhcnktdGV4dDojNzU3NTc1O1xuJGRpdmlkZXItY29sb3I6I0JEQkRCRDtcblxuYm9keXtcbiAgICBtYXJnaW46MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6JHRleHQtaWNvbnM7XG4gICAgLy9vdmVyZmxvdy15OmhpZGRlbjtcbiAgICAvL292ZXJmbG93LXg6aGlkZGVuO1xufVxuXG5AbWVkaWEob3JpZW50YXRpb246IGxhbmRzY2FwZSl7XG4gICAgLm15YXBwe1xuICAgICAgICBkaXNwbGF5OmdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIGF1dG8gMjUlO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEzMHB4IGF1dG8gNTBweDtcbiAgICAgICAgd2lkdGg6MTAwdnc7XG4gICAgICAgIGhlaWdodDoxMDB2aDtcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XG4gICAgICAgIC8vZ3JpZC1nYXA6M3B4O1xuICAgICAgICBjb2x1bW4tZ2FwOiA1cHg7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGFwcC1oZWFkZXItY29tcG9uZW50e1xuICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gICAgICAgIC8vaGVpZ2h0OiAxNXZoO1xuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xuICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiAyO1xuICAgICAgICB0cmFuc2l0aW9uOjAuNXM7XG4gICAgfVxuICAgIFxuICAgIGFwcC1hc2lkZS1sZWZ0e1xuICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJDOi9NeUZpbGVzL2Rldi9Ob2RlSlMvY3VycmljdWx1bXZpdGFlL2Zyb250ZW5kL3NyYy9hc3NldHMvaW1nL21hcGhvdG8ucG5nXCIpO1xuICAgICAgICAvL2JhY2tncm91bmQtcG9zaXRpb246IC0zMDBweCAwcHg7XG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xuICAgICAgICBncmlkLXJvdy1lbmQ6IDQ7XG4gICAgICAgIHRyYW5zaXRpb246MC41cztcbiAgICB9XG4gICAgXG4gICAgYXBwLW1haW4tY29udGVudHtcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gICAgICAgIGdyaWQtY29sdW1uLWVuZDogMztcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XG4gICAgICAgIGdyaWQtcm93LWVuZDogNDtcbiAgICAgICAgdHJhbnNpdGlvbjowLjVzO1xuICAgIH1cbiAgICBcbiAgICBhcHAtYXNpZGUtcmlnaHR7XG4gICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xuICAgICAgICBncmlkLXJvdy1lbmQ6IDQ7XG4gICAgICAgIHRyYW5zaXRpb246MC41cztcbiAgICB9XG59XG5cbkBtZWRpYShvcmllbnRhdGlvbjogcG9ydHJhaXQpe1xuICAgIC5teWFwcHtcbiAgICAgICAgZGlzcGxheTpncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwJSBhdXRvIDI1JTtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNSUgYXV0byA1JTtcbiAgICAgICAgd2lkdGg6MTAwdnc7XG4gICAgICAgIGhlaWdodDoxMDB2aDtcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XG4gICAgICAgIGdyaWQtZ2FwOjNweDtcbiAgICB9XG5cbiAgICBhcHAtaGVhZGVyLWNvbXBvbmVudHtcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICAgICAgICBvcGFjaXR5OjA7XG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xuICAgICAgICBncmlkLXJvdy1lbmQ6IDI7XG4gICAgICAgIHRyYW5zaXRpb246MC41cztcbiAgICAgICAgei1pbmRleDotMTtcbiAgICB9XG4gICAgXG4gICAgYXBwLWFzaWRlLWxlZnR7XG4gICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xuICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiA0O1xuICAgICAgICB0cmFuc2l0aW9uOjAuNXM7XG4gICAgfVxuICAgIFxuICAgIGFwcC1tYWluLWNvbnRlbnR7XG4gICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xuICAgICAgICBncmlkLXJvdy1lbmQ6IDQ7XG4gICAgICAgIHRyYW5zaXRpb246MC41cztcbiAgICB9XG4gICAgXG4gICAgYXBwLWFzaWRlLXJpZ2h0e1xuICAgICAgICBvcGFjaXR5OjA7XG4gICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogcGluaztcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XG4gICAgICAgIGdyaWQtY29sdW1uLWVuZDogNDtcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XG4gICAgICAgIGdyaWQtcm93LWVuZDogNDtcbiAgICAgICAgdHJhbnNpdGlvbjowLjVzO1xuICAgIH1cbn1cblxuLy9SZXNwb25zaXZlIHN0dWZmXG5cbi8qXG5AbWVkaWEob3JpZW50YXRpb246IGxhbmRzY2FwZSl7XG5cbn1cblxuQG1lZGlhKG9yaWVudGF0aW9uOiBwb3J0cmFpdCl7XG5cbn1cbiovXG5cbi8qXG4vLyBNZWRpdW0gc2NyZWVuIChtZClcbkBtZWRpYShtaW4td2lkdGg6NzY4cHgpIGFuZCAobWF4LXdpZHRoOjEzODhweCl7IFxuICAgIFxufVxuXG4vLyBTbWFsbCBzY3JlZW4gKHNzKVxuQG1lZGlhKG1heC13aWR0aDo3NjdweCl7ICAgIFxuICAgIFxufVxuKi9cbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmJvZHkge1xuICBtYXJnaW46IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbn1cblxuQG1lZGlhIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIC5teWFwcCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSBhdXRvIDI1JTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEzMHB4IGF1dG8gNTBweDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBjb2x1bW4tZ2FwOiA1cHg7XG4gIH1cblxuICBhcHAtaGVhZGVyLWNvbXBvbmVudCB7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xuICAgIGdyaWQtcm93LWVuZDogMjtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICB9XG5cbiAgYXBwLWFzaWRlLWxlZnQge1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcbiAgICBncmlkLXJvdy1zdGFydDogMjtcbiAgICBncmlkLXJvdy1lbmQ6IDQ7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgfVxuXG4gIGFwcC1tYWluLWNvbnRlbnQge1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICAgIGdyaWQtY29sdW1uLWVuZDogMztcbiAgICBncmlkLXJvdy1zdGFydDogMjtcbiAgICBncmlkLXJvdy1lbmQ6IDQ7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgfVxuXG4gIGFwcC1hc2lkZS1yaWdodCB7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xuICAgIGdyaWQtcm93LWVuZDogNDtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICB9XG59XG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAubXlhcHAge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgYXV0byAyNSU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNSUgYXV0byA1JTtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBncmlkLWdhcDogM3B4O1xuICB9XG5cbiAgYXBwLWhlYWRlci1jb21wb25lbnQge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xuICAgIGdyaWQtcm93LWVuZDogMjtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgIHotaW5kZXg6IC0xO1xuICB9XG5cbiAgYXBwLWFzaWRlLWxlZnQge1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcbiAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICBncmlkLXJvdy1lbmQ6IDQ7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgfVxuXG4gIGFwcC1tYWluLWNvbnRlbnQge1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICAgIGdyaWQtY29sdW1uLWVuZDogNDtcbiAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICBncmlkLXJvdy1lbmQ6IDQ7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgfVxuXG4gIGFwcC1hc2lkZS1yaWdodCB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMztcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XG4gICAgZ3JpZC1yb3ctZW5kOiA0O1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gIH1cbn1cbi8qXG5AbWVkaWEob3JpZW50YXRpb246IGxhbmRzY2FwZSl7XG5cbn1cblxuQG1lZGlhKG9yaWVudGF0aW9uOiBwb3J0cmFpdCl7XG5cbn1cbiovXG4vKlxuLy8gTWVkaXVtIHNjcmVlbiAobWQpXG5AbWVkaWEobWluLXdpZHRoOjc2OHB4KSBhbmQgKG1heC13aWR0aDoxMzg4cHgpeyBcblxufVxuXG4vLyBTbWFsbCBzY3JlZW4gKHNzKVxuQG1lZGlhKG1heC13aWR0aDo3NjdweCl7ICAgIFxuXG59XG4qL1xuLnRvcGJhciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTc2RDI7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLm5hbWVzLWpvYiB7XG4gIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMmVtO1xufVxuLm5hbWVzLWpvYiAuZmlyc3QtbmFtZSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAyZW07XG59XG4ubmFtZXMtam9iIC5sYXN0LW5hbWUge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMS42ZW07XG59XG4ubmFtZXMtam9iIC5qb2Ige1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxLjNlbTtcbn1cblxuLnZlcnRpY2FsLWxpbmUge1xuICBtYXJnaW46IDEwcHg7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgZGFya2dyZXk7XG59XG5cbi5jb250YWN0IHtcbiAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uY29udGFjdCAuY29udGFjdC1tYWlsIHtcbiAgbWFyZ2luLWxlZnQ6IDdweDtcbn1cbi5jb250YWN0IC5jb250YWN0LW1haWwgLm1haWwge1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgbWFyZ2luLWxlZnQ6IDdweDtcbn1cbi5jb250YWN0IC5jb250YWN0LXRlbCB7XG4gIG1hcmdpbi1sZWZ0OiA3cHg7XG59XG4uY29udGFjdCAuY29udGFjdC10ZWwgLnRlbCB7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogaW5saW5lO1xuICBtYXJnaW4tbGVmdDogN3B4O1xufVxuLmNvbnRhY3QgLmNvbnRhY3QtbGlua2VkaW4ge1xuICBtYXJnaW4tbGVmdDogN3B4O1xufVxuLmNvbnRhY3QgLmNvbnRhY3QtbGlua2VkaW4gLmxpbmtlZGluIHtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIG1hcmdpbi1sZWZ0OiA3cHg7XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzLnNjc3MnO1xyXG5cclxuLnRvcGJhcntcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6JGRhcmstcHJpbWFyeS1jb2xvcjtcclxuICAgIGNvbG9yOiR0ZXh0LWljb25zO1xyXG4gICAgZm9udC1mYW1pbHk6JGFwcC1mb250LWZhbWlseTtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOnJvdztcclxuICAgIC8vYm94LXNoYWRvdzogMHB4IDExcHggMnB4IDJweCByZ2JhKDE2NiwgMTY2LCAxNzEsIDAuMik7XHJcbn1cclxuXHJcbi5uYW1lcy1qb2J7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzowLjJlbTtcclxuXHJcbiAgICAuZmlyc3QtbmFtZXtcclxuICAgICAgbWFyZ2luOjA7XHJcbiAgICAgIGZvbnQtc2l6ZToyZW07XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5sYXN0LW5hbWV7XHJcbiAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgIGZvbnQtc2l6ZToxLjZlbTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmpvYntcclxuICAgICAgICAgIHBhZGRpbmctdG9wOjEwcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6MS4zZW07XHJcbiAgICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4udmVydGljYWwtbGluZXtcclxuICAgIG1hcmdpbjoxMHB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBkYXJrZ3JleTtcclxufVxyXG5cclxuLmNvbnRhY3R7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAyMHB4O1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtcclxuXHJcbiAgICAuY29udGFjdC1tYWlse1xyXG4gICAgICBtYXJnaW4tbGVmdDo3cHg7XHJcbiAgICBcclxuICAgICAgLm1haWx7XHJcbiAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgZGlzcGxheTppbmxpbmU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6N3B4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb250YWN0LXRlbHtcclxuICAgICAgbWFyZ2luLWxlZnQ6N3B4O1xyXG4gICAgXHJcbiAgICAgICAgLnRlbHtcclxuICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgZGlzcGxheTppbmxpbmU7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDo3cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxuXHJcbiAgICAuY29udGFjdC1saW5rZWRpbntcclxuICAgICAgbWFyZ2luLWxlZnQ6N3B4O1xyXG5cclxuICAgICAgLmxpbmtlZGlue1xyXG4gICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgIGRpc3BsYXk6aW5saW5lO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjdweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header-component',
          templateUrl: './header-component.component.html',
          styleUrls: ['./header-component.component.scss']
        }]
      }], function () {
        return [];
      }, {
        onResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:resize', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/arch-components/main-content/main-content.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/arch-components/main-content/main-content.component.ts ***!
    \************************************************************************/

  /*! exports provided: MainContentComponent */

  /***/
  function srcAppArchComponentsMainContentMainContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainContentComponent", function () {
      return MainContentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MainContentComponent_option_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var lang_r4 = ctx.$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", lang_r4)("selected", lang_r4 === ctx_r3.translate.currentLang);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, lang_r4));
      }
    }

    var MainContentComponent =
    /*#__PURE__*/
    function () {
      function MainContentComponent(translate) {
        _classCallCheck(this, MainContentComponent);

        this.translate = translate;
        translate.addLangs(['en', 'fr']);
        translate.setDefaultLang('en');
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
      }

      _createClass(MainContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainContentComponent;
    }();

    MainContentComponent.ɵfac = function MainContentComponent_Factory(t) {
      return new (t || MainContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]));
    };

    MainContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainContentComponent,
      selectors: [["app-main-content"]],
      decls: 77,
      vars: 49,
      consts: [[1, "main-content-container"], [1, "objective"], [1, "title"], [1, "icon"], [1, "fas", "fa-crosshairs"], [1, "title-name"], [3, "change"], ["langSelect", ""], [3, "value", "selected", 4, "ngFor", "ngForOf"], [1, "objective-content"], [1, "experiences"], [1, "fas", "fa-book-open"], [1, "experiences-content"], [1, "experience"], [1, "companie"], [1, "date"], [1, "job-name"], [1, "job-description"], [1, "education"], [1, "fas", "fa-graduation-cap"], [1, "education-content"], [3, "value", "selected"]],
      template: function MainContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "article", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MainContentComponent_Template_select_change_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

            return ctx.translate.use(_r2.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MainContentComponent_option_10_Template, 3, 5, "option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "article", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](50, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "article", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](60, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](66, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](69, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](73, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](76, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 17, "content.aboutme.title"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.translate.getLangs());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 19, "content.aboutme.content"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 21, "content.experiences.title"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 23, "content.experiences.experience1.companiename"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 25, "content.experiences.experience1.dates"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 27, "content.experiences.experience1.job"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 29, "content.experiences.experience1.description"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 31, "content.experiences.experience2.companiename"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 33, "content.experiences.experience2.dates"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](50, 35, "content.experiences.experience2.job"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 37, "content.experiences.experience2.description"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](60, 39, "content.educations.title"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](66, 41, "content.educations.education1.educationname"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](69, 43, "content.educations.education1.dates"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](73, 45, "content.educations.education1.studies"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](76, 47, "content.educations.education1.description"));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"]],
      styles: ["body[_ngcontent-%COMP%] {\n  margin: 0px;\n  background-color: #FFF;\n}\n@media (orientation: landscape) {\n  .myapp[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 20% auto 25%;\n    grid-template-rows: 130px auto 50px;\n    width: 100vw;\n    height: 100vh;\n    -webkit-column-gap: 5px;\n       -moz-column-gap: 5px;\n            column-gap: 5px;\n  }\n\n  app-header-component[_ngcontent-%COMP%] {\n    grid-column-start: 1;\n    grid-column-end: 4;\n    grid-row-start: 1;\n    grid-row-end: 2;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n\n  app-aside-left[_ngcontent-%COMP%] {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 2;\n    grid-row-end: 4;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n\n  app-main-content[_ngcontent-%COMP%] {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 2;\n    grid-row-end: 4;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n\n  app-aside-right[_ngcontent-%COMP%] {\n    grid-column-start: 3;\n    grid-column-end: 4;\n    grid-row-start: 2;\n    grid-row-end: 4;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n}\n@media (orientation: portrait) {\n  .myapp[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 30% auto 25%;\n    grid-template-rows: 15% auto 5%;\n    width: 100vw;\n    height: 100vh;\n    grid-gap: 3px;\n  }\n\n  app-header-component[_ngcontent-%COMP%] {\n    opacity: 0;\n    grid-column-start: 1;\n    grid-column-end: 4;\n    grid-row-start: 1;\n    grid-row-end: 2;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n    z-index: -1;\n  }\n\n  app-aside-left[_ngcontent-%COMP%] {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 1;\n    grid-row-end: 4;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n\n  app-main-content[_ngcontent-%COMP%] {\n    grid-column-start: 2;\n    grid-column-end: 4;\n    grid-row-start: 1;\n    grid-row-end: 4;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n\n  app-aside-right[_ngcontent-%COMP%] {\n    opacity: 0;\n    grid-column-start: 3;\n    grid-column-end: 4;\n    grid-row-start: 2;\n    grid-row-end: 4;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n}\n\n\n@media (orientation: landscape) {\n  .main-content-container[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    background-color: #FFF;\n    width: 100%;\n    height: 100%;\n    font-family: \"Roboto\", sans-serif;\n  }\n  .main-content-container[_ngcontent-%COMP%]   .objective[_ngcontent-%COMP%] {\n    padding-top: 30px;\n  }\n  .main-content-container[_ngcontent-%COMP%]   .objective[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n    color: #212121;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n  }\n  .main-content-container[_ngcontent-%COMP%]   .objective[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .title-name[_ngcontent-%COMP%] {\n    margin-left: 10px;\n  }\n  .main-content-container[_ngcontent-%COMP%]   .objective[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    margin-left: 20px;\n    cursor: pointer;\n    border: none;\n    border-bottom: 1px solid #BDBDBD;\n    \n    font-family: \"Roboto\", sans-serif;\n    color: #757575;\n    width: 50px;\n    padding: 5px;\n    box-shadow: 1px 1px 1px 0.5px rgba(160, 160, 160, 0.5);\n    position: absolute;\n    right: 28%;\n    top: 160px;\n  }\n  .main-content-container[_ngcontent-%COMP%]   .objective[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:hover {\n    box-shadow: 1px 1px 1px 0.7px rgba(160, 160, 160, 0.7);\n  }\n  .main-content-container[_ngcontent-%COMP%]   .objective[_ngcontent-%COMP%]   .objective-content[_ngcontent-%COMP%] {\n    font-size: 1em;\n    color: #757575;\n    padding-left: 40px;\n  }\n  .main-content-container[_ngcontent-%COMP%]   .objective[_ngcontent-%COMP%]   .objective-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-height: 1.5em;\n  }\n  .main-content-container[_ngcontent-%COMP%]   .experiences[_ngcontent-%COMP%] {\n    padding-top: 30px;\n  }\n  .main-content-container[_ngcontent-%COMP%]   .experiences[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n    color: #212121;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n  }\n  .main-content-container[_ngcontent-%COMP%]   .experiences[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .title-name[_ngcontent-%COMP%] {\n    margin-left: 10px;\n  }\n  .main-content-container[_ngcontent-%COMP%]   .experiences[_ngcontent-%COMP%]   .experiences-content[_ngcontent-%COMP%] {\n    font-size: 1em;\n    color: #757575;\n    padding-left: 40px;\n  }\n  .main-content-container[_ngcontent-%COMP%]   .experiences[_ngcontent-%COMP%]   .experiences-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-height: 1.5em;\n  }\n  .main-content-container[_ngcontent-%COMP%]   .experiences[_ngcontent-%COMP%]   .experiences-content[_ngcontent-%COMP%]   .companie[_ngcontent-%COMP%] {\n    display: inline-block;\n    padding-right: 10px;\n    border-right: 2px solid #BDBDBD;\n    margin-bottom: 4px;\n    color: #8BC34A;\n  }\n  .main-content-container[_ngcontent-%COMP%]   .experiences[_ngcontent-%COMP%]   .experiences-content[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n    display: inline-block;\n    padding-left: 10px;\n    margin-bottom: 4px;\n  }\n  .main-content-container[_ngcontent-%COMP%]   .experiences[_ngcontent-%COMP%]   .experiences-content[_ngcontent-%COMP%]   .job-name[_ngcontent-%COMP%] {\n    margin: 0px 0px 4px 0px;\n    color: #2196F3;\n  }\n  .main-content-container[_ngcontent-%COMP%]   .experiences[_ngcontent-%COMP%]   .experiences-content[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%] {\n    margin: 0px 0px 16px 0px;\n    color: #757575;\n  }\n  .main-content-container[_ngcontent-%COMP%]   .education[_ngcontent-%COMP%] {\n    padding-top: 30px;\n  }\n  .main-content-container[_ngcontent-%COMP%]   .education[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n    color: #212121;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n  }\n  .main-content-container[_ngcontent-%COMP%]   .education[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .title-name[_ngcontent-%COMP%] {\n    margin-left: 10px;\n  }\n  .main-content-container[_ngcontent-%COMP%]   .education[_ngcontent-%COMP%]   .education-content[_ngcontent-%COMP%] {\n    font-size: 1em;\n    color: #757575;\n    padding-left: 40px;\n  }\n  .main-content-container[_ngcontent-%COMP%]   .education[_ngcontent-%COMP%]   .education-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-height: 1.5em;\n  }\n  .main-content-container[_ngcontent-%COMP%]   .education[_ngcontent-%COMP%]   .education-content[_ngcontent-%COMP%]   .companie[_ngcontent-%COMP%] {\n    display: inline-block;\n    padding-right: 10px;\n    border-right: 2px solid #BDBDBD;\n    margin-bottom: 4px;\n    color: #8BC34A;\n  }\n  .main-content-container[_ngcontent-%COMP%]   .education[_ngcontent-%COMP%]   .education-content[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n    display: inline-block;\n    padding-left: 10px;\n    margin-bottom: 4px;\n  }\n  .main-content-container[_ngcontent-%COMP%]   .education[_ngcontent-%COMP%]   .education-content[_ngcontent-%COMP%]   .job-name[_ngcontent-%COMP%] {\n    margin: 0px 0px 4px 0px;\n    color: #2196F3;\n  }\n  .main-content-container[_ngcontent-%COMP%]   .education[_ngcontent-%COMP%]   .education-content[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%] {\n    margin: 0px 0px 16px 0px;\n    color: #757575;\n  }\n}\n@media (orientation: portrait) {\n  .main-content-container[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    background-color: #FFF;\n    width: 100%;\n    height: 100%;\n    font-family: \"Roboto\", sans-serif;\n  }\n  .main-content-container[_ngcontent-%COMP%]   .objective[_ngcontent-%COMP%] {\n    padding-top: 30px;\n  }\n  .main-content-container[_ngcontent-%COMP%]   .objective[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n    color: #212121;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n  }\n  .main-content-container[_ngcontent-%COMP%]   .objective[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .title-name[_ngcontent-%COMP%] {\n    display: inline;\n    margin-left: 10px;\n  }\n  .main-content-container[_ngcontent-%COMP%]   .objective[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    margin-left: 20px;\n    cursor: pointer;\n    border: none;\n    border-bottom: 1px solid #BDBDBD;\n    \n    font-family: \"Roboto\", sans-serif;\n    color: #757575;\n    width: 50px;\n    padding: 5px;\n    box-shadow: 1px 1px 1px 0.5px rgba(160, 160, 160, 0.5);\n    z-index: 3;\n    position: absolute;\n    right: 5%;\n    top: 3%;\n  }\n  .main-content-container[_ngcontent-%COMP%]   .objective[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:hover {\n    box-shadow: 1px 1px 1px 0.7px rgba(160, 160, 160, 0.7);\n  }\n  .main-content-container[_ngcontent-%COMP%]   .objective[_ngcontent-%COMP%]   .objective-content[_ngcontent-%COMP%] {\n    font-size: 1em;\n    color: #757575;\n  }\n  .main-content-container[_ngcontent-%COMP%]   .objective[_ngcontent-%COMP%]   .objective-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-height: 1.5em;\n  }\n  .main-content-container[_ngcontent-%COMP%]   .experiences[_ngcontent-%COMP%] {\n    padding-top: 30px;\n  }\n  .main-content-container[_ngcontent-%COMP%]   .experiences[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n    color: #212121;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n  }\n  .main-content-container[_ngcontent-%COMP%]   .experiences[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .title-name[_ngcontent-%COMP%] {\n    display: inline;\n    margin-left: 10px;\n  }\n  .main-content-container[_ngcontent-%COMP%]   .experiences[_ngcontent-%COMP%]   .experiences-content[_ngcontent-%COMP%] {\n    font-size: 1em;\n    color: #757575;\n  }\n  .main-content-container[_ngcontent-%COMP%]   .experiences[_ngcontent-%COMP%]   .experiences-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-height: 1.5em;\n  }\n  .main-content-container[_ngcontent-%COMP%]   .experiences[_ngcontent-%COMP%]   .experiences-content[_ngcontent-%COMP%]   .companie[_ngcontent-%COMP%] {\n    display: inline-block;\n    padding-right: 10px;\n    border-right: 2px solid #BDBDBD;\n    margin-bottom: 4px;\n    color: #8BC34A;\n  }\n  .main-content-container[_ngcontent-%COMP%]   .experiences[_ngcontent-%COMP%]   .experiences-content[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n    display: inline-block;\n    padding-left: 10px;\n    margin-bottom: 4px;\n  }\n  .main-content-container[_ngcontent-%COMP%]   .experiences[_ngcontent-%COMP%]   .experiences-content[_ngcontent-%COMP%]   .job-name[_ngcontent-%COMP%] {\n    margin: 0px 0px 4px 0px;\n    color: #2196F3;\n  }\n  .main-content-container[_ngcontent-%COMP%]   .experiences[_ngcontent-%COMP%]   .experiences-content[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%] {\n    margin: 0px 0px 16px 0px;\n    color: #757575;\n  }\n  .main-content-container[_ngcontent-%COMP%]   .education[_ngcontent-%COMP%] {\n    padding-top: 30px;\n  }\n  .main-content-container[_ngcontent-%COMP%]   .education[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n    color: #212121;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n  }\n  .main-content-container[_ngcontent-%COMP%]   .education[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .title-name[_ngcontent-%COMP%] {\n    display: inline;\n    margin-left: 10px;\n  }\n  .main-content-container[_ngcontent-%COMP%]   .education[_ngcontent-%COMP%]   .education-content[_ngcontent-%COMP%] {\n    font-size: 1em;\n    color: #757575;\n  }\n  .main-content-container[_ngcontent-%COMP%]   .education[_ngcontent-%COMP%]   .education-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-height: 1.5em;\n  }\n  .main-content-container[_ngcontent-%COMP%]   .education[_ngcontent-%COMP%]   .education-content[_ngcontent-%COMP%]   .companie[_ngcontent-%COMP%] {\n    display: inline-block;\n    padding-right: 10px;\n    border-right: 2px solid #BDBDBD;\n    margin-bottom: 4px;\n    color: #8BC34A;\n  }\n  .main-content-container[_ngcontent-%COMP%]   .education[_ngcontent-%COMP%]   .education-content[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n    display: inline-block;\n    padding-left: 10px;\n    margin-bottom: 4px;\n  }\n  .main-content-container[_ngcontent-%COMP%]   .education[_ngcontent-%COMP%]   .education-content[_ngcontent-%COMP%]   .job-name[_ngcontent-%COMP%] {\n    margin: 0px 0px 4px 0px;\n    color: #2196F3;\n  }\n  .main-content-container[_ngcontent-%COMP%]   .education[_ngcontent-%COMP%]   .education-content[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%] {\n    margin: 0px 0px 16px 0px;\n    color: #757575;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJjaC1jb21wb25lbnRzL21haW4tY29udGVudC9DOlxcTXlGaWxlc1xcZGV2XFxOb2RlSlNcXE9ubGluZUNWXFxmcm9udGVuZC9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9hcmNoLWNvbXBvbmVudHMvbWFpbi1jb250ZW50L21haW4tY29udGVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXJjaC1jb21wb25lbnRzL21haW4tY29udGVudC9DOlxcTXlGaWxlc1xcZGV2XFxOb2RlSlNcXE9ubGluZUNWXFxmcm9udGVuZC9zcmNcXGFwcFxcYXJjaC1jb21wb25lbnRzXFxtYWluLWNvbnRlbnRcXG1haW4tY29udGVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQTZCQTtFQUNJLFdBQUE7RUFDQSxzQkFSUTtBQ25CWjtBRGdDQTtFQUNJO0lBQ0ksYUFBQTtJQUNBLG1DQUFBO0lBQ0EsbUNBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUdBLHVCQUFBO09BQUEsb0JBQUE7WUFBQSxlQUFBO0VDL0JOOztFRG1DRTtJQUdJLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSx3QkFBQTtJQUFBLGdCQUFBO0VDbENOOztFRHFDRTtJQUlJLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSx3QkFBQTtJQUFBLGdCQUFBO0VDckNOOztFRHdDRTtJQUVJLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSx3QkFBQTtJQUFBLGdCQUFBO0VDdENOOztFRHlDRTtJQUVJLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSx3QkFBQTtJQUFBLGdCQUFBO0VDdkNOO0FBQ0Y7QUQwQ0E7RUFDSTtJQUNJLGFBQUE7SUFDQSxtQ0FBQTtJQUNBLCtCQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFFQSxhQUFBO0VDekNOOztFRDRDRTtJQUVJLFVBQUE7SUFDQSxvQkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0lBQ0Esd0JBQUE7SUFBQSxnQkFBQTtJQUNBLFdBQUE7RUMxQ047O0VENkNFO0lBRUksb0JBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLHdCQUFBO0lBQUEsZ0JBQUE7RUMzQ047O0VEOENFO0lBRUksb0JBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLHdCQUFBO0lBQUEsZ0JBQUE7RUM1Q047O0VEK0NFO0lBQ0ksVUFBQTtJQUVBLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSx3QkFBQTtJQUFBLGdCQUFBO0VDN0NOO0FBQ0Y7QURrREE7Ozs7Ozs7O0NBQUE7QUFVQTs7Ozs7Ozs7OztDQUFBO0FFdEpBO0VBQ0k7SUFDSSxvQkFBQTtJQUFBLGFBQUE7SUFDQSw0QkFBQTtJQUFBLDZCQUFBO1lBQUEsc0JBQUE7SUFDQSxzQkZpQkk7SUVoQkosV0FBQTtJQUNBLFlBQUE7SUFDQSxpQ0ZQUztFQ3VIZjtFQzlHTTtJQUNJLGlCQUFBO0VEZ0hWO0VDOUdVO0lBQ0ksZ0JBQUE7SUFDQSxjRlNGO0lFUkUsb0JBQUE7SUFBQSxhQUFBO0lBQ0EsOEJBQUE7SUFBQSw2QkFBQTtZQUFBLG1CQUFBO0VEZ0hkO0VDMUdjO0lBQ0ksaUJBQUE7RUQ0R2xCO0VDekdjO0lBQ0ksaUJBQUE7SUFDQSxlQUFBO0lBRUEsWUFBQTtJQUNBLGdDQUFBO0lBQ0E7OzsrQkFBQTtJQUlBLGlDRnBDSDtJRXFDRyxjRmJKO0lFY0ksV0FBQTtJQUNBLFlBQUE7SUFDQSxzREFBQTtJQUNBLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLFVBQUE7RUQwR2xCO0VDdkdjO0lBQ0ksc0RBQUE7RUR5R2xCO0VDcEdVO0lBQ0ksY0FBQTtJQUNBLGNGOUJBO0lFK0JBLGtCQUFBO0VEc0dkO0VDcEdjO0lBQ0ksa0JBQUE7RURzR2xCO0VDakdNO0lBQ0ksaUJBQUE7RURtR1Y7RUNqR1U7SUFDSSxnQkFBQTtJQUNBLGNGN0NGO0lFOENFLG9CQUFBO0lBQUEsYUFBQTtJQUNBLDhCQUFBO0lBQUEsNkJBQUE7WUFBQSxtQkFBQTtFRG1HZDtFQzdGYztJQUNJLGlCQUFBO0VEK0ZsQjtFQzNGVTtJQUNJLGNBQUE7SUFDQSxjRjNEQTtJRTREQSxrQkFBQTtFRDZGZDtFQzNGYztJQUNJLGtCQUFBO0VENkZsQjtFQzFGYztJQUNJLHFCQUFBO0lBQ0EsbUJBQUE7SUFDQSwrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsY0Z6RU47RUNxS1o7RUN6RmM7SUFDSSxxQkFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7RUQyRmxCO0VDeEZjO0lBQ0ksdUJBQUE7SUFDQSxjRnRGTDtFQ2dMYjtFQ3ZGYztJQUNJLHdCQUFBO0lBQ0EsY0Z2Rko7RUNnTGQ7RUNwRk07SUFDSSxpQkFBQTtFRHNGVjtFQ3BGVTtJQUNJLGdCQUFBO0lBQ0EsY0ZsR0Y7SUVtR0Usb0JBQUE7SUFBQSxhQUFBO0lBQ0EsOEJBQUE7SUFBQSw2QkFBQTtZQUFBLG1CQUFBO0VEc0ZkO0VDaEZjO0lBQ0ksaUJBQUE7RURrRmxCO0VDOUVVO0lBQ0ksY0FBQTtJQUNBLGNGaEhBO0lFaUhBLGtCQUFBO0VEZ0ZkO0VDOUVjO0lBQ0ksa0JBQUE7RURnRmxCO0VDN0VjO0lBQ0kscUJBQUE7SUFDQSxtQkFBQTtJQUNBLCtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxjRjlITjtFQzZNWjtFQzVFYztJQUNJLHFCQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtFRDhFbEI7RUMzRWM7SUFDSSx1QkFBQTtJQUNBLGNGM0lMO0VDd05iO0VDMUVjO0lBQ0ksd0JBQUE7SUFDQSxjRjVJSjtFQ3dOZDtBQUNGO0FDdEVBO0VBQ0k7SUFDSSxvQkFBQTtJQUFBLGFBQUE7SUFDQSw0QkFBQTtJQUFBLDZCQUFBO1lBQUEsc0JBQUE7SUFDQSxzQkYxSkk7SUUySkosV0FBQTtJQUNBLFlBQUE7SUFDQSxpQ0ZsTFM7RUMwUGY7RUN0RU07SUFDSSxpQkFBQTtFRHdFVjtFQ3RFVTtJQUNJLGdCQUFBO0lBQ0EsY0ZsS0Y7SUVtS0Usb0JBQUE7SUFBQSxhQUFBO0lBQ0EsOEJBQUE7SUFBQSw2QkFBQTtZQUFBLG1CQUFBO0VEd0VkO0VDbEVjO0lBQ0ksZUFBQTtJQUNBLGlCQUFBO0VEb0VsQjtFQ2pFYztJQUNJLGlCQUFBO0lBQ0EsZUFBQTtJQUVBLFlBQUE7SUFDQSxnQ0FBQTtJQUNBOzs7K0JBQUE7SUFJQSxpQ0ZoTkg7SUVpTkcsY0Z6TEo7SUUwTEksV0FBQTtJQUNBLFlBQUE7SUFDQSxzREFBQTtJQUNBLFVBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxPQUFBO0VEa0VsQjtFQy9EYztJQUNJLHNEQUFBO0VEaUVsQjtFQzdEVTtJQUNJLGNBQUE7SUFDQSxjRjFNQTtFQ3lRZDtFQzVEYztJQUNJLGtCQUFBO0VEOERsQjtFQ3pETTtJQUNJLGlCQUFBO0VEMkRWO0VDekRVO0lBQ0ksZ0JBQUE7SUFDQSxjRnpORjtJRTBORSxvQkFBQTtJQUFBLGFBQUE7SUFDQSw4QkFBQTtJQUFBLDZCQUFBO1lBQUEsbUJBQUE7RUQyRGQ7RUNyRGM7SUFDSSxlQUFBO0lBQ0EsaUJBQUE7RUR1RGxCO0VDbkRVO0lBQ0ksY0FBQTtJQUNBLGNGeE9BO0VDNlJkO0VDbERjO0lBQ0ksa0JBQUE7RURvRGxCO0VDakRjO0lBQ0kscUJBQUE7SUFDQSxtQkFBQTtJQUNBLCtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxjRnRQTjtFQ3lTWjtFQ2hEYztJQUNJLHFCQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtFRGtEbEI7RUMvQ2M7SUFDSSx1QkFBQTtJQUNBLGNGblFMO0VDb1RiO0VDOUNjO0lBQ0ksd0JBQUE7SUFDQSxjRnBRSjtFQ29UZDtFQzNDTTtJQUNJLGlCQUFBO0VENkNWO0VDM0NVO0lBQ0ksZ0JBQUE7SUFDQSxjRi9RRjtJRWdSRSxvQkFBQTtJQUFBLGFBQUE7SUFDQSw4QkFBQTtJQUFBLDZCQUFBO1lBQUEsbUJBQUE7RUQ2Q2Q7RUN2Q2M7SUFDSSxlQUFBO0lBQ0EsaUJBQUE7RUR5Q2xCO0VDckNVO0lBQ0ksY0FBQTtJQUNBLGNGOVJBO0VDcVVkO0VDcENjO0lBQ0ksa0JBQUE7RURzQ2xCO0VDbkNjO0lBQ0kscUJBQUE7SUFDQSxtQkFBQTtJQUNBLCtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxjRjVTTjtFQ2lWWjtFQ2xDYztJQUNJLHFCQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtFRG9DbEI7RUNqQ2M7SUFDSSx1QkFBQTtJQUNBLGNGelRMO0VDNFZiO0VDaENjO0lBQ0ksd0JBQUE7SUFDQSxjRjFUSjtFQzRWZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXJjaC1jb21wb25lbnRzL21haW4tY29udGVudC9tYWluLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5cbiRhcHAtZm9udC1mYW1pbHk6J1JvYm90bycsIHNhbnMtc2VyaWY7XG5cbi8vcHJpbWFyeSBjb2xvcjogR3JlZW5cbiRncmVlbi1iYWNrZ3JvdW5kOiM3NkM2NzY7XG4kZ3JlZW4xOiMwMEUyMDA7XG4kZ3JlZW4yOiMxMkMwMTI7XG4kZ3JlZW4zOiMyOTgyMjk7XG4kZ3JlZW40OiMyNjRDMjY7XG4kZ3JlZW41OiMxOTI0MTk7XG5cbi8vQ29tcGxlbWVudCBjb2xvcjogUmVkXG4kcmVkMTojRkYwMDAwO1xuJHJlZDI6I0YwMTYxNjtcbiRyZWQzOiNBMjMzMzM7XG4kcmVkNDojNUUyRjJGO1xuJHJlZDU6IzJEMUYxRjtcblxuLy90cnVlIHRoZW1lIGNvbG9yXG4kZGFyay1wcmltYXJ5LWNvbG9yOiMxOTc2RDI7XG4kbGlnaHQtcHJpbWFyeS1jb2xvcjojQkJERUZCO1xuJHByaW1hcnktY29sb3I6IzIxOTZGMztcbiR0ZXh0LWljb25zOiNGRkY7XG4kYWNjZW50LWNvbG9yOiM4QkMzNEE7XG4kcHJpbWFyeS10ZXh0OiMyMTIxMjE7XG4kc2Vjb25kYXJ5LXRleHQ6Izc1NzU3NTtcbiRkaXZpZGVyLWNvbG9yOiNCREJEQkQ7XG5cbmJvZHl7XG4gICAgbWFyZ2luOjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiR0ZXh0LWljb25zO1xuICAgIC8vb3ZlcmZsb3cteTpoaWRkZW47XG4gICAgLy9vdmVyZmxvdy14OmhpZGRlbjtcbn1cblxuQG1lZGlhKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpe1xuICAgIC5teWFwcHtcbiAgICAgICAgZGlzcGxheTpncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSBhdXRvIDI1JTtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMzBweCBhdXRvIDUwcHg7XG4gICAgICAgIHdpZHRoOjEwMHZ3O1xuICAgICAgICBoZWlnaHQ6MTAwdmg7XG4gICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xuICAgICAgICAvL2dyaWQtZ2FwOjNweDtcbiAgICAgICAgY29sdW1uLWdhcDogNXB4O1xuICAgICAgICBcbiAgICB9XG5cbiAgICBhcHAtaGVhZGVyLWNvbXBvbmVudHtcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICAgICAgICAvL2hlaWdodDogMTV2aDtcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgICAgIGdyaWQtY29sdW1uLWVuZDogNDtcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gICAgICAgIGdyaWQtcm93LWVuZDogMjtcbiAgICAgICAgdHJhbnNpdGlvbjowLjVzO1xuICAgIH1cbiAgICBcbiAgICBhcHAtYXNpZGUtbGVmdHtcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICAgIC8vYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiQzovTXlGaWxlcy9kZXYvTm9kZUpTL2N1cnJpY3VsdW12aXRhZS9mcm9udGVuZC9zcmMvYXNzZXRzL2ltZy9tYXBob3RvLnBuZ1wiKTtcbiAgICAgICAgLy9iYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzAwcHggMHB4O1xuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xuICAgICAgICBncmlkLXJvdy1zdGFydDogMjtcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiA0O1xuICAgICAgICB0cmFuc2l0aW9uOjAuNXM7XG4gICAgfVxuICAgIFxuICAgIGFwcC1tYWluLWNvbnRlbnR7XG4gICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xuICAgICAgICBncmlkLXJvdy1lbmQ6IDQ7XG4gICAgICAgIHRyYW5zaXRpb246MC41cztcbiAgICB9XG4gICAgXG4gICAgYXBwLWFzaWRlLXJpZ2h0e1xuICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMztcbiAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xuICAgICAgICBncmlkLXJvdy1zdGFydDogMjtcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiA0O1xuICAgICAgICB0cmFuc2l0aW9uOjAuNXM7XG4gICAgfVxufVxuXG5AbWVkaWEob3JpZW50YXRpb246IHBvcnRyYWl0KXtcbiAgICAubXlhcHB7XG4gICAgICAgIGRpc3BsYXk6Z3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgYXV0byAyNSU7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTUlIGF1dG8gNSU7XG4gICAgICAgIHdpZHRoOjEwMHZ3O1xuICAgICAgICBoZWlnaHQ6MTAwdmg7XG4gICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xuICAgICAgICBncmlkLWdhcDozcHg7XG4gICAgfVxuXG4gICAgYXBwLWhlYWRlci1jb21wb25lbnR7XG4gICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgICAgICAgb3BhY2l0eTowO1xuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xuICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiAyO1xuICAgICAgICB0cmFuc2l0aW9uOjAuNXM7XG4gICAgICAgIHotaW5kZXg6LTE7XG4gICAgfVxuICAgIFxuICAgIGFwcC1hc2lkZS1sZWZ0e1xuICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgICAgIGdyaWQtY29sdW1uLWVuZDogMjtcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gICAgICAgIGdyaWQtcm93LWVuZDogNDtcbiAgICAgICAgdHJhbnNpdGlvbjowLjVzO1xuICAgIH1cbiAgICBcbiAgICBhcHAtbWFpbi1jb250ZW50e1xuICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcbiAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xuICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiA0O1xuICAgICAgICB0cmFuc2l0aW9uOjAuNXM7XG4gICAgfVxuICAgIFxuICAgIGFwcC1hc2lkZS1yaWdodHtcbiAgICAgICAgb3BhY2l0eTowO1xuICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6IHBpbms7XG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xuICAgICAgICBncmlkLXJvdy1lbmQ6IDQ7XG4gICAgICAgIHRyYW5zaXRpb246MC41cztcbiAgICB9XG59XG5cbi8vUmVzcG9uc2l2ZSBzdHVmZlxuXG4vKlxuQG1lZGlhKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpe1xuXG59XG5cbkBtZWRpYShvcmllbnRhdGlvbjogcG9ydHJhaXQpe1xuXG59XG4qL1xuXG4vKlxuLy8gTWVkaXVtIHNjcmVlbiAobWQpXG5AbWVkaWEobWluLXdpZHRoOjc2OHB4KSBhbmQgKG1heC13aWR0aDoxMzg4cHgpeyBcbiAgICBcbn1cblxuLy8gU21hbGwgc2NyZWVuIChzcylcbkBtZWRpYShtYXgtd2lkdGg6NzY3cHgpeyAgICBcbiAgICBcbn1cbiovXG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5ib2R5IHtcbiAgbWFyZ2luOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG59XG5cbkBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAubXlhcHAge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMCUgYXV0byAyNSU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMzBweCBhdXRvIDUwcHg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgY29sdW1uLWdhcDogNXB4O1xuICB9XG5cbiAgYXBwLWhlYWRlci1jb21wb25lbnQge1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgIGdyaWQtY29sdW1uLWVuZDogNDtcbiAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICBncmlkLXJvdy1lbmQ6IDI7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgfVxuXG4gIGFwcC1hc2lkZS1sZWZ0IHtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XG4gICAgZ3JpZC1yb3ctZW5kOiA0O1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gIH1cblxuICBhcHAtbWFpbi1jb250ZW50IHtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XG4gICAgZ3JpZC1yb3ctZW5kOiA0O1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gIH1cblxuICBhcHAtYXNpZGUtcmlnaHQge1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xuICAgIGdyaWQtY29sdW1uLWVuZDogNDtcbiAgICBncmlkLXJvdy1zdGFydDogMjtcbiAgICBncmlkLXJvdy1lbmQ6IDQ7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgfVxufVxuQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgLm15YXBwIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAlIGF1dG8gMjUlO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTUlIGF1dG8gNSU7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZ3JpZC1nYXA6IDNweDtcbiAgfVxuXG4gIGFwcC1oZWFkZXItY29tcG9uZW50IHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgIGdyaWQtY29sdW1uLWVuZDogNDtcbiAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICBncmlkLXJvdy1lbmQ6IDI7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgICB6LWluZGV4OiAtMTtcbiAgfVxuXG4gIGFwcC1hc2lkZS1sZWZ0IHtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gICAgZ3JpZC1yb3ctZW5kOiA0O1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gIH1cblxuICBhcHAtbWFpbi1jb250ZW50IHtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gICAgZ3JpZC1yb3ctZW5kOiA0O1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gIH1cblxuICBhcHAtYXNpZGUtcmlnaHQge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xuICAgIGdyaWQtcm93LWVuZDogNDtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICB9XG59XG4vKlxuQG1lZGlhKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpe1xuXG59XG5cbkBtZWRpYShvcmllbnRhdGlvbjogcG9ydHJhaXQpe1xuXG59XG4qL1xuLypcbi8vIE1lZGl1bSBzY3JlZW4gKG1kKVxuQG1lZGlhKG1pbi13aWR0aDo3NjhweCkgYW5kIChtYXgtd2lkdGg6MTM4OHB4KXsgXG5cbn1cblxuLy8gU21hbGwgc2NyZWVuIChzcylcbkBtZWRpYShtYXgtd2lkdGg6NzY3cHgpeyAgICBcblxufVxuKi9cbkBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAubWFpbi1jb250ZW50LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICB9XG4gIC5tYWluLWNvbnRlbnQtY29udGFpbmVyIC5vYmplY3RpdmUge1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICB9XG4gIC5tYWluLWNvbnRlbnQtY29udGFpbmVyIC5vYmplY3RpdmUgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIGNvbG9yOiAjMjEyMTIxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICAubWFpbi1jb250ZW50LWNvbnRhaW5lciAub2JqZWN0aXZlIC50aXRsZSAudGl0bGUtbmFtZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbiAgLm1haW4tY29udGVudC1jb250YWluZXIgLm9iamVjdGl2ZSAudGl0bGUgc2VsZWN0IHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQkRCREJEO1xuICAgIC8qYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaWNvbnMvZG93bi1hcnJvdy5zdmcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEycHggMTJweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246cmlnaHQ7Ki9cbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogIzc1NzU3NTtcbiAgICB3aWR0aDogNTBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggMC41cHggcmdiYSgxNjAsIDE2MCwgMTYwLCAwLjUpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMjglO1xuICAgIHRvcDogMTYwcHg7XG4gIH1cbiAgLm1haW4tY29udGVudC1jb250YWluZXIgLm9iamVjdGl2ZSAudGl0bGUgc2VsZWN0OmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAwLjdweCByZ2JhKDE2MCwgMTYwLCAxNjAsIDAuNyk7XG4gIH1cbiAgLm1haW4tY29udGVudC1jb250YWluZXIgLm9iamVjdGl2ZSAub2JqZWN0aXZlLWNvbnRlbnQge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGNvbG9yOiAjNzU3NTc1O1xuICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgfVxuICAubWFpbi1jb250ZW50LWNvbnRhaW5lciAub2JqZWN0aXZlIC5vYmplY3RpdmUtY29udGVudCBwIHtcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gIH1cbiAgLm1haW4tY29udGVudC1jb250YWluZXIgLmV4cGVyaWVuY2VzIHtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgfVxuICAubWFpbi1jb250ZW50LWNvbnRhaW5lciAuZXhwZXJpZW5jZXMgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIGNvbG9yOiAjMjEyMTIxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICAubWFpbi1jb250ZW50LWNvbnRhaW5lciAuZXhwZXJpZW5jZXMgLnRpdGxlIC50aXRsZS1uYW1lIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuICAubWFpbi1jb250ZW50LWNvbnRhaW5lciAuZXhwZXJpZW5jZXMgLmV4cGVyaWVuY2VzLWNvbnRlbnQge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGNvbG9yOiAjNzU3NTc1O1xuICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgfVxuICAubWFpbi1jb250ZW50LWNvbnRhaW5lciAuZXhwZXJpZW5jZXMgLmV4cGVyaWVuY2VzLWNvbnRlbnQgcCB7XG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICB9XG4gIC5tYWluLWNvbnRlbnQtY29udGFpbmVyIC5leHBlcmllbmNlcyAuZXhwZXJpZW5jZXMtY29udGVudCAuY29tcGFuaWUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNCREJEQkQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIGNvbG9yOiAjOEJDMzRBO1xuICB9XG4gIC5tYWluLWNvbnRlbnQtY29udGFpbmVyIC5leHBlcmllbmNlcyAuZXhwZXJpZW5jZXMtY29udGVudCAuZGF0ZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIH1cbiAgLm1haW4tY29udGVudC1jb250YWluZXIgLmV4cGVyaWVuY2VzIC5leHBlcmllbmNlcy1jb250ZW50IC5qb2ItbmFtZSB7XG4gICAgbWFyZ2luOiAwcHggMHB4IDRweCAwcHg7XG4gICAgY29sb3I6ICMyMTk2RjM7XG4gIH1cbiAgLm1haW4tY29udGVudC1jb250YWluZXIgLmV4cGVyaWVuY2VzIC5leHBlcmllbmNlcy1jb250ZW50IC5qb2ItZGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbjogMHB4IDBweCAxNnB4IDBweDtcbiAgICBjb2xvcjogIzc1NzU3NTtcbiAgfVxuICAubWFpbi1jb250ZW50LWNvbnRhaW5lciAuZWR1Y2F0aW9uIHtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgfVxuICAubWFpbi1jb250ZW50LWNvbnRhaW5lciAuZWR1Y2F0aW9uIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBjb2xvcjogIzIxMjEyMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbiAgLm1haW4tY29udGVudC1jb250YWluZXIgLmVkdWNhdGlvbiAudGl0bGUgLnRpdGxlLW5hbWUge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG4gIC5tYWluLWNvbnRlbnQtY29udGFpbmVyIC5lZHVjYXRpb24gLmVkdWNhdGlvbi1jb250ZW50IHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBjb2xvcjogIzc1NzU3NTtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIH1cbiAgLm1haW4tY29udGVudC1jb250YWluZXIgLmVkdWNhdGlvbiAuZWR1Y2F0aW9uLWNvbnRlbnQgcCB7XG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICB9XG4gIC5tYWluLWNvbnRlbnQtY29udGFpbmVyIC5lZHVjYXRpb24gLmVkdWNhdGlvbi1jb250ZW50IC5jb21wYW5pZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI0JEQkRCRDtcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgY29sb3I6ICM4QkMzNEE7XG4gIH1cbiAgLm1haW4tY29udGVudC1jb250YWluZXIgLmVkdWNhdGlvbiAuZWR1Y2F0aW9uLWNvbnRlbnQgLmRhdGUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICB9XG4gIC5tYWluLWNvbnRlbnQtY29udGFpbmVyIC5lZHVjYXRpb24gLmVkdWNhdGlvbi1jb250ZW50IC5qb2ItbmFtZSB7XG4gICAgbWFyZ2luOiAwcHggMHB4IDRweCAwcHg7XG4gICAgY29sb3I6ICMyMTk2RjM7XG4gIH1cbiAgLm1haW4tY29udGVudC1jb250YWluZXIgLmVkdWNhdGlvbiAuZWR1Y2F0aW9uLWNvbnRlbnQgLmpvYi1kZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luOiAwcHggMHB4IDE2cHggMHB4O1xuICAgIGNvbG9yOiAjNzU3NTc1O1xuICB9XG59XG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAubWFpbi1jb250ZW50LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICB9XG4gIC5tYWluLWNvbnRlbnQtY29udGFpbmVyIC5vYmplY3RpdmUge1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICB9XG4gIC5tYWluLWNvbnRlbnQtY29udGFpbmVyIC5vYmplY3RpdmUgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIGNvbG9yOiAjMjEyMTIxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICAubWFpbi1jb250ZW50LWNvbnRhaW5lciAub2JqZWN0aXZlIC50aXRsZSAudGl0bGUtbmFtZSB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG4gIC5tYWluLWNvbnRlbnQtY29udGFpbmVyIC5vYmplY3RpdmUgLnRpdGxlIHNlbGVjdCB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0JEQkRCRDtcbiAgICAvKmJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ljb25zL2Rvd24tYXJyb3cuc3ZnJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMnB4IDEycHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOnJpZ2h0OyovXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6ICM3NTc1NzU7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDAuNXB4IHJnYmEoMTYwLCAxNjAsIDE2MCwgMC41KTtcbiAgICB6LWluZGV4OiAzO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNSU7XG4gICAgdG9wOiAzJTtcbiAgfVxuICAubWFpbi1jb250ZW50LWNvbnRhaW5lciAub2JqZWN0aXZlIC50aXRsZSBzZWxlY3Q6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDAuN3B4IHJnYmEoMTYwLCAxNjAsIDE2MCwgMC43KTtcbiAgfVxuICAubWFpbi1jb250ZW50LWNvbnRhaW5lciAub2JqZWN0aXZlIC5vYmplY3RpdmUtY29udGVudCB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgY29sb3I6ICM3NTc1NzU7XG4gIH1cbiAgLm1haW4tY29udGVudC1jb250YWluZXIgLm9iamVjdGl2ZSAub2JqZWN0aXZlLWNvbnRlbnQgcCB7XG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICB9XG4gIC5tYWluLWNvbnRlbnQtY29udGFpbmVyIC5leHBlcmllbmNlcyB7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gIH1cbiAgLm1haW4tY29udGVudC1jb250YWluZXIgLmV4cGVyaWVuY2VzIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBjb2xvcjogIzIxMjEyMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbiAgLm1haW4tY29udGVudC1jb250YWluZXIgLmV4cGVyaWVuY2VzIC50aXRsZSAudGl0bGUtbmFtZSB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG4gIC5tYWluLWNvbnRlbnQtY29udGFpbmVyIC5leHBlcmllbmNlcyAuZXhwZXJpZW5jZXMtY29udGVudCB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgY29sb3I6ICM3NTc1NzU7XG4gIH1cbiAgLm1haW4tY29udGVudC1jb250YWluZXIgLmV4cGVyaWVuY2VzIC5leHBlcmllbmNlcy1jb250ZW50IHAge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgfVxuICAubWFpbi1jb250ZW50LWNvbnRhaW5lciAuZXhwZXJpZW5jZXMgLmV4cGVyaWVuY2VzLWNvbnRlbnQgLmNvbXBhbmllIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjQkRCREJEO1xuICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICBjb2xvcjogIzhCQzM0QTtcbiAgfVxuICAubWFpbi1jb250ZW50LWNvbnRhaW5lciAuZXhwZXJpZW5jZXMgLmV4cGVyaWVuY2VzLWNvbnRlbnQgLmRhdGUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICB9XG4gIC5tYWluLWNvbnRlbnQtY29udGFpbmVyIC5leHBlcmllbmNlcyAuZXhwZXJpZW5jZXMtY29udGVudCAuam9iLW5hbWUge1xuICAgIG1hcmdpbjogMHB4IDBweCA0cHggMHB4O1xuICAgIGNvbG9yOiAjMjE5NkYzO1xuICB9XG4gIC5tYWluLWNvbnRlbnQtY29udGFpbmVyIC5leHBlcmllbmNlcyAuZXhwZXJpZW5jZXMtY29udGVudCAuam9iLWRlc2NyaXB0aW9uIHtcbiAgICBtYXJnaW46IDBweCAwcHggMTZweCAwcHg7XG4gICAgY29sb3I6ICM3NTc1NzU7XG4gIH1cbiAgLm1haW4tY29udGVudC1jb250YWluZXIgLmVkdWNhdGlvbiB7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gIH1cbiAgLm1haW4tY29udGVudC1jb250YWluZXIgLmVkdWNhdGlvbiAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgY29sb3I6ICMyMTIxMjE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG4gIC5tYWluLWNvbnRlbnQtY29udGFpbmVyIC5lZHVjYXRpb24gLnRpdGxlIC50aXRsZS1uYW1lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbiAgLm1haW4tY29udGVudC1jb250YWluZXIgLmVkdWNhdGlvbiAuZWR1Y2F0aW9uLWNvbnRlbnQge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGNvbG9yOiAjNzU3NTc1O1xuICB9XG4gIC5tYWluLWNvbnRlbnQtY29udGFpbmVyIC5lZHVjYXRpb24gLmVkdWNhdGlvbi1jb250ZW50IHAge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgfVxuICAubWFpbi1jb250ZW50LWNvbnRhaW5lciAuZWR1Y2F0aW9uIC5lZHVjYXRpb24tY29udGVudCAuY29tcGFuaWUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNCREJEQkQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIGNvbG9yOiAjOEJDMzRBO1xuICB9XG4gIC5tYWluLWNvbnRlbnQtY29udGFpbmVyIC5lZHVjYXRpb24gLmVkdWNhdGlvbi1jb250ZW50IC5kYXRlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgfVxuICAubWFpbi1jb250ZW50LWNvbnRhaW5lciAuZWR1Y2F0aW9uIC5lZHVjYXRpb24tY29udGVudCAuam9iLW5hbWUge1xuICAgIG1hcmdpbjogMHB4IDBweCA0cHggMHB4O1xuICAgIGNvbG9yOiAjMjE5NkYzO1xuICB9XG4gIC5tYWluLWNvbnRlbnQtY29udGFpbmVyIC5lZHVjYXRpb24gLmVkdWNhdGlvbi1jb250ZW50IC5qb2ItZGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbjogMHB4IDBweCAxNnB4IDBweDtcbiAgICBjb2xvcjogIzc1NzU3NTtcbiAgfVxufSIsIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy5zY3NzJztcclxuXHJcbkBtZWRpYShvcmllbnRhdGlvbjogbGFuZHNjYXBlKXtcclxuICAgIC5tYWluLWNvbnRlbnQtY29udGFpbmVye1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjokdGV4dC1pY29ucztcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiRhcHAtZm9udC1mYW1pbHk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLm9iamVjdGl2ZXtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6MzBweDtcclxuICAgIFxyXG4gICAgICAgICAgICAudGl0bGV7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MS41ZW07XHJcbiAgICAgICAgICAgICAgICBjb2xvcjokcHJpbWFyeS10ZXh0O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246cm93O1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAuaWNvbntcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbG9yOiRzZWNvbmRhcnktdGV4dDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAudGl0bGUtbmFtZXtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDoxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHNlbGVjdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MjBweDtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAvL2FwcGVhcmFuY2U6IGJ1dHRvbjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6bm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGRpdmlkZXItY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgLypiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9kb3duLWFycm93LnN2ZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTJweCAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjpyaWdodDsqL1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiRhcHAtZm9udC1mYW1pbHk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6JHNlY29uZGFyeS10ZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzo1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggMC41cHggcmdiYSgxNjAsIDE2MCwgMTYwLCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OjI4JTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6MTYwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc2VsZWN0OmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDAuN3B4IHJnYmEoMTYwLCAxNjAsIDE2MCwgMC43KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgLm9iamVjdGl2ZS1jb250ZW50e1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjFlbTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiRzZWNvbmRhcnktdGV4dDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDo0MHB4O1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC5leHBlcmllbmNlc3tcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICBcclxuICAgICAgICAgICAgLnRpdGxle1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjEuNWVtO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6JHByaW1hcnktdGV4dDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOnJvdztcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLmljb257XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb2xvcjokc2Vjb25kYXJ5LXRleHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnRpdGxlLW5hbWV7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIC5leHBlcmllbmNlcy1jb250ZW50e1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjFlbTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiRzZWNvbmRhcnktdGV4dDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDo0MHB4O1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLmNvbXBhbmlle1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgJGRpdmlkZXItY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTo0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6JGFjY2VudC1jb2xvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLmRhdGV7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDoxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206NHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAuam9iLW5hbWV7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMHB4IDRweCAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6JHByaW1hcnktY29sb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIC5qb2ItZGVzY3JpcHRpb257XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMHB4IDE2cHggMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiRzZWNvbmRhcnktdGV4dDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC5lZHVjYXRpb257XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgXHJcbiAgICAgICAgICAgIC50aXRsZXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxLjVlbTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiRwcmltYXJ5LXRleHQ7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIC5pY29ue1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29sb3I6JHNlY29uZGFyeS10ZXh0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC50aXRsZS1uYW1le1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAuZWR1Y2F0aW9uLWNvbnRlbnR7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MWVtO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6JHNlY29uZGFyeS10ZXh0O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjQwcHg7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAuY29tcGFuaWV7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6MTBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAkZGl2aWRlci1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjRweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjokYWNjZW50LWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAuZGF0ZXtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTo0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIC5qb2ItbmFtZXtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweCAwcHggNHB4IDBweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjokcHJpbWFyeS1jb2xvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLmpvYi1kZXNjcmlwdGlvbntcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweCAwcHggMTZweCAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6JHNlY29uZGFyeS10ZXh0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEob3JpZW50YXRpb246IHBvcnRyYWl0KXtcclxuICAgIC5tYWluLWNvbnRlbnQtY29udGFpbmVye1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjokdGV4dC1pY29ucztcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiRhcHAtZm9udC1mYW1pbHk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLm9iamVjdGl2ZXtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6MzBweDtcclxuICAgIFxyXG4gICAgICAgICAgICAudGl0bGV7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MS41ZW07XHJcbiAgICAgICAgICAgICAgICBjb2xvcjokcHJpbWFyeS10ZXh0O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246cm93O1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAuaWNvbntcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbG9yOiRzZWNvbmRhcnktdGV4dDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLnRpdGxlLW5hbWV7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9hcHBlYXJhbmNlOiBidXR0b247XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRkaXZpZGVyLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaWNvbnMvZG93bi1hcnJvdy5zdmcnKTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEycHggMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246cmlnaHQ7Ki9cclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTokYXBwLWZvbnQtZmFtaWx5O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiRzZWNvbmRhcnktdGV4dDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDo1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDAuNXB4IHJnYmEoMTYwLCAxNjAsIDE2MCwgMC41KTtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OjM7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOjMlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHNlbGVjdDpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAwLjdweCByZ2JhKDE2MCwgMTYwLCAxNjAsIDAuNyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAub2JqZWN0aXZlLWNvbnRlbnR7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MWVtO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6JHNlY29uZGFyeS10ZXh0O1xyXG4gICAgICAgICAgICAgICAgLy9wYWRkaW5nLWxlZnQ6NDBweDtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAuZXhwZXJpZW5jZXN7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgXHJcbiAgICAgICAgICAgIC50aXRsZXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxLjVlbTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiRwcmltYXJ5LXRleHQ7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIC5pY29ue1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29sb3I6JHNlY29uZGFyeS10ZXh0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAudGl0bGUtbmFtZXtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDoxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgLmV4cGVyaWVuY2VzLWNvbnRlbnR7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MWVtO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6JHNlY29uZGFyeS10ZXh0O1xyXG4gICAgICAgICAgICAgICAgLy9wYWRkaW5nLWxlZnQ6NDBweDtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIC5jb21wYW5pZXtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDoxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICRkaXZpZGVyLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206NHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiRhY2NlbnQtY29sb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIC5kYXRle1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MTBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjRweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLmpvYi1uYW1le1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IDBweCA0cHggMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAuam9iLWRlc2NyaXB0aW9ue1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IDBweCAxNnB4IDBweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjokc2Vjb25kYXJ5LXRleHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAuZWR1Y2F0aW9ue1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIFxyXG4gICAgICAgICAgICAudGl0bGV7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MS41ZW07XHJcbiAgICAgICAgICAgICAgICBjb2xvcjokcHJpbWFyeS10ZXh0O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246cm93O1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAuaWNvbntcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbG9yOiRzZWNvbmRhcnktdGV4dDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLnRpdGxlLW5hbWV7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIC5lZHVjYXRpb24tY29udGVudHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxZW07XHJcbiAgICAgICAgICAgICAgICBjb2xvcjokc2Vjb25kYXJ5LXRleHQ7XHJcbiAgICAgICAgICAgICAgICAvL3BhZGRpbmctbGVmdDo0MHB4O1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLmNvbXBhbmlle1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgJGRpdmlkZXItY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTo0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6JGFjY2VudC1jb2xvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLmRhdGV7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDoxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206NHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAuam9iLW5hbWV7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMHB4IDRweCAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6JHByaW1hcnktY29sb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIC5qb2ItZGVzY3JpcHRpb257XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMHB4IDE2cHggMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiRzZWNvbmRhcnktdGV4dDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main-content',
          templateUrl: './main-content.component.html',
          styleUrls: ['./main-content.component.scss']
        }]
      }], function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/details-components/article/article.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/details-components/article/article.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ArticleComponent */

  /***/
  function srcAppDetailsComponentsArticleArticleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleComponent", function () {
      return ArticleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ArticleComponent =
    /*#__PURE__*/
    function () {
      function ArticleComponent() {
        _classCallCheck(this, ArticleComponent);
      }

      _createClass(ArticleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ArticleComponent;
    }();

    ArticleComponent.ɵfac = function ArticleComponent_Factory(t) {
      return new (t || ArticleComponent)();
    };

    ArticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ArticleComponent,
      selectors: [["app-article"]],
      inputs: {
        name: "name",
        date: "date",
        jobname: "jobname",
        activitylist: "activitylist"
      },
      decls: 12,
      vars: 4,
      consts: [[1, "education-content"], [1, "experience"], [1, "companie"], [1, "date"], [1, "job-name"], [1, "job-description"]],
      template: function ArticleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.date);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.jobname);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.activitylist);
        }
      },
      styles: ["body[_ngcontent-%COMP%] {\n  margin: 0px;\n  background-color: #FFF;\n}\n@media (orientation: landscape) {\n  .myapp[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 20% auto 25%;\n    grid-template-rows: 130px auto 50px;\n    width: 100vw;\n    height: 100vh;\n    -webkit-column-gap: 5px;\n       -moz-column-gap: 5px;\n            column-gap: 5px;\n  }\n\n  app-header-component[_ngcontent-%COMP%] {\n    grid-column-start: 1;\n    grid-column-end: 4;\n    grid-row-start: 1;\n    grid-row-end: 2;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n\n  app-aside-left[_ngcontent-%COMP%] {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 2;\n    grid-row-end: 4;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n\n  app-main-content[_ngcontent-%COMP%] {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 2;\n    grid-row-end: 4;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n\n  app-aside-right[_ngcontent-%COMP%] {\n    grid-column-start: 3;\n    grid-column-end: 4;\n    grid-row-start: 2;\n    grid-row-end: 4;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n}\n@media (orientation: portrait) {\n  .myapp[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 30% auto 25%;\n    grid-template-rows: 15% auto 5%;\n    width: 100vw;\n    height: 100vh;\n    grid-gap: 3px;\n  }\n\n  app-header-component[_ngcontent-%COMP%] {\n    opacity: 0;\n    grid-column-start: 1;\n    grid-column-end: 4;\n    grid-row-start: 1;\n    grid-row-end: 2;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n    z-index: -1;\n  }\n\n  app-aside-left[_ngcontent-%COMP%] {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 1;\n    grid-row-end: 4;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n\n  app-main-content[_ngcontent-%COMP%] {\n    grid-column-start: 2;\n    grid-column-end: 4;\n    grid-row-start: 1;\n    grid-row-end: 4;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n\n  app-aside-right[_ngcontent-%COMP%] {\n    opacity: 0;\n    grid-column-start: 3;\n    grid-column-end: 4;\n    grid-row-start: 2;\n    grid-row-end: 4;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n}\n\n\n.education-content[_ngcontent-%COMP%] {\n  font-size: 1em;\n  color: #264C26;\n  padding-left: 40px;\n}\n.education-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 1.5em;\n}\n.education-content[_ngcontent-%COMP%]   .companie[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-right: 10px;\n  border-right: 2px solid #264C26;\n  margin-bottom: 4px;\n  color: #298229;\n}\n.education-content[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-left: 10px;\n  margin-bottom: 4px;\n}\n.education-content[_ngcontent-%COMP%]   .job-name[_ngcontent-%COMP%] {\n  margin: 0px 0px 4px 0px;\n  color: #A23333;\n}\n.education-content[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%] {\n  margin: 0px 0px 8px 0px;\n  color: #264C26;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscy1jb21wb25lbnRzL2FydGljbGUvQzpcXE15RmlsZXNcXGRldlxcTm9kZUpTXFxPbmxpbmVDVlxcZnJvbnRlbmQvc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvZGV0YWlscy1jb21wb25lbnRzL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGV0YWlscy1jb21wb25lbnRzL2FydGljbGUvQzpcXE15RmlsZXNcXGRldlxcTm9kZUpTXFxPbmxpbmVDVlxcZnJvbnRlbmQvc3JjXFxhcHBcXGRldGFpbHMtY29tcG9uZW50c1xcYXJ0aWNsZVxcYXJ0aWNsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQTZCQTtFQUNJLFdBQUE7RUFDQSxzQkFSUTtBQ25CWjtBRGdDQTtFQUNJO0lBQ0ksYUFBQTtJQUNBLG1DQUFBO0lBQ0EsbUNBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUdBLHVCQUFBO09BQUEsb0JBQUE7WUFBQSxlQUFBO0VDL0JOOztFRG1DRTtJQUdJLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSx3QkFBQTtJQUFBLGdCQUFBO0VDbENOOztFRHFDRTtJQUlJLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSx3QkFBQTtJQUFBLGdCQUFBO0VDckNOOztFRHdDRTtJQUVJLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSx3QkFBQTtJQUFBLGdCQUFBO0VDdENOOztFRHlDRTtJQUVJLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSx3QkFBQTtJQUFBLGdCQUFBO0VDdkNOO0FBQ0Y7QUQwQ0E7RUFDSTtJQUNJLGFBQUE7SUFDQSxtQ0FBQTtJQUNBLCtCQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFFQSxhQUFBO0VDekNOOztFRDRDRTtJQUVJLFVBQUE7SUFDQSxvQkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0lBQ0Esd0JBQUE7SUFBQSxnQkFBQTtJQUNBLFdBQUE7RUMxQ047O0VENkNFO0lBRUksb0JBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLHdCQUFBO0lBQUEsZ0JBQUE7RUMzQ047O0VEOENFO0lBRUksb0JBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLHdCQUFBO0lBQUEsZ0JBQUE7RUM1Q047O0VEK0NFO0lBQ0ksVUFBQTtJQUVBLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSx3QkFBQTtJQUFBLGdCQUFBO0VDN0NOO0FBQ0Y7QURrREE7Ozs7Ozs7O0NBQUE7QUFVQTs7Ozs7Ozs7OztDQUFBO0FFdEpBO0VBQ0ksY0FBQTtFQUNBLGNGS0k7RUVKSixrQkFBQTtBRGdISjtBQzlHSTtFQUNJLGtCQUFBO0FEZ0hSO0FDN0dJO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjRlJBO0FDdUhSO0FDNUdJO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FEOEdSO0FDM0dJO0VBQ0ksdUJBQUE7RUFDQSxjRlpGO0FDeUhOO0FDMUdJO0VBQ0ksdUJBQUE7RUFDQSxjRnZCQTtBQ21JUiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMtY29tcG9uZW50cy9hcnRpY2xlL2FydGljbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5cbiRhcHAtZm9udC1mYW1pbHk6J1JvYm90bycsIHNhbnMtc2VyaWY7XG5cbi8vcHJpbWFyeSBjb2xvcjogR3JlZW5cbiRncmVlbi1iYWNrZ3JvdW5kOiM3NkM2NzY7XG4kZ3JlZW4xOiMwMEUyMDA7XG4kZ3JlZW4yOiMxMkMwMTI7XG4kZ3JlZW4zOiMyOTgyMjk7XG4kZ3JlZW40OiMyNjRDMjY7XG4kZ3JlZW41OiMxOTI0MTk7XG5cbi8vQ29tcGxlbWVudCBjb2xvcjogUmVkXG4kcmVkMTojRkYwMDAwO1xuJHJlZDI6I0YwMTYxNjtcbiRyZWQzOiNBMjMzMzM7XG4kcmVkNDojNUUyRjJGO1xuJHJlZDU6IzJEMUYxRjtcblxuLy90cnVlIHRoZW1lIGNvbG9yXG4kZGFyay1wcmltYXJ5LWNvbG9yOiMxOTc2RDI7XG4kbGlnaHQtcHJpbWFyeS1jb2xvcjojQkJERUZCO1xuJHByaW1hcnktY29sb3I6IzIxOTZGMztcbiR0ZXh0LWljb25zOiNGRkY7XG4kYWNjZW50LWNvbG9yOiM4QkMzNEE7XG4kcHJpbWFyeS10ZXh0OiMyMTIxMjE7XG4kc2Vjb25kYXJ5LXRleHQ6Izc1NzU3NTtcbiRkaXZpZGVyLWNvbG9yOiNCREJEQkQ7XG5cbmJvZHl7XG4gICAgbWFyZ2luOjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiR0ZXh0LWljb25zO1xuICAgIC8vb3ZlcmZsb3cteTpoaWRkZW47XG4gICAgLy9vdmVyZmxvdy14OmhpZGRlbjtcbn1cblxuQG1lZGlhKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpe1xuICAgIC5teWFwcHtcbiAgICAgICAgZGlzcGxheTpncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSBhdXRvIDI1JTtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMzBweCBhdXRvIDUwcHg7XG4gICAgICAgIHdpZHRoOjEwMHZ3O1xuICAgICAgICBoZWlnaHQ6MTAwdmg7XG4gICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xuICAgICAgICAvL2dyaWQtZ2FwOjNweDtcbiAgICAgICAgY29sdW1uLWdhcDogNXB4O1xuICAgICAgICBcbiAgICB9XG5cbiAgICBhcHAtaGVhZGVyLWNvbXBvbmVudHtcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICAgICAgICAvL2hlaWdodDogMTV2aDtcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgICAgIGdyaWQtY29sdW1uLWVuZDogNDtcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gICAgICAgIGdyaWQtcm93LWVuZDogMjtcbiAgICAgICAgdHJhbnNpdGlvbjowLjVzO1xuICAgIH1cbiAgICBcbiAgICBhcHAtYXNpZGUtbGVmdHtcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICAgIC8vYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiQzovTXlGaWxlcy9kZXYvTm9kZUpTL2N1cnJpY3VsdW12aXRhZS9mcm9udGVuZC9zcmMvYXNzZXRzL2ltZy9tYXBob3RvLnBuZ1wiKTtcbiAgICAgICAgLy9iYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzAwcHggMHB4O1xuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xuICAgICAgICBncmlkLXJvdy1zdGFydDogMjtcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiA0O1xuICAgICAgICB0cmFuc2l0aW9uOjAuNXM7XG4gICAgfVxuICAgIFxuICAgIGFwcC1tYWluLWNvbnRlbnR7XG4gICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xuICAgICAgICBncmlkLXJvdy1lbmQ6IDQ7XG4gICAgICAgIHRyYW5zaXRpb246MC41cztcbiAgICB9XG4gICAgXG4gICAgYXBwLWFzaWRlLXJpZ2h0e1xuICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMztcbiAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xuICAgICAgICBncmlkLXJvdy1zdGFydDogMjtcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiA0O1xuICAgICAgICB0cmFuc2l0aW9uOjAuNXM7XG4gICAgfVxufVxuXG5AbWVkaWEob3JpZW50YXRpb246IHBvcnRyYWl0KXtcbiAgICAubXlhcHB7XG4gICAgICAgIGRpc3BsYXk6Z3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgYXV0byAyNSU7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTUlIGF1dG8gNSU7XG4gICAgICAgIHdpZHRoOjEwMHZ3O1xuICAgICAgICBoZWlnaHQ6MTAwdmg7XG4gICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xuICAgICAgICBncmlkLWdhcDozcHg7XG4gICAgfVxuXG4gICAgYXBwLWhlYWRlci1jb21wb25lbnR7XG4gICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgICAgICAgb3BhY2l0eTowO1xuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xuICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiAyO1xuICAgICAgICB0cmFuc2l0aW9uOjAuNXM7XG4gICAgICAgIHotaW5kZXg6LTE7XG4gICAgfVxuICAgIFxuICAgIGFwcC1hc2lkZS1sZWZ0e1xuICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgICAgIGdyaWQtY29sdW1uLWVuZDogMjtcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gICAgICAgIGdyaWQtcm93LWVuZDogNDtcbiAgICAgICAgdHJhbnNpdGlvbjowLjVzO1xuICAgIH1cbiAgICBcbiAgICBhcHAtbWFpbi1jb250ZW50e1xuICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcbiAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xuICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiA0O1xuICAgICAgICB0cmFuc2l0aW9uOjAuNXM7XG4gICAgfVxuICAgIFxuICAgIGFwcC1hc2lkZS1yaWdodHtcbiAgICAgICAgb3BhY2l0eTowO1xuICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6IHBpbms7XG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xuICAgICAgICBncmlkLXJvdy1lbmQ6IDQ7XG4gICAgICAgIHRyYW5zaXRpb246MC41cztcbiAgICB9XG59XG5cbi8vUmVzcG9uc2l2ZSBzdHVmZlxuXG4vKlxuQG1lZGlhKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpe1xuXG59XG5cbkBtZWRpYShvcmllbnRhdGlvbjogcG9ydHJhaXQpe1xuXG59XG4qL1xuXG4vKlxuLy8gTWVkaXVtIHNjcmVlbiAobWQpXG5AbWVkaWEobWluLXdpZHRoOjc2OHB4KSBhbmQgKG1heC13aWR0aDoxMzg4cHgpeyBcbiAgICBcbn1cblxuLy8gU21hbGwgc2NyZWVuIChzcylcbkBtZWRpYShtYXgtd2lkdGg6NzY3cHgpeyAgICBcbiAgICBcbn1cbiovXG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5ib2R5IHtcbiAgbWFyZ2luOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG59XG5cbkBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAubXlhcHAge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMCUgYXV0byAyNSU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMzBweCBhdXRvIDUwcHg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgY29sdW1uLWdhcDogNXB4O1xuICB9XG5cbiAgYXBwLWhlYWRlci1jb21wb25lbnQge1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgIGdyaWQtY29sdW1uLWVuZDogNDtcbiAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICBncmlkLXJvdy1lbmQ6IDI7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgfVxuXG4gIGFwcC1hc2lkZS1sZWZ0IHtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XG4gICAgZ3JpZC1yb3ctZW5kOiA0O1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gIH1cblxuICBhcHAtbWFpbi1jb250ZW50IHtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XG4gICAgZ3JpZC1yb3ctZW5kOiA0O1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gIH1cblxuICBhcHAtYXNpZGUtcmlnaHQge1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xuICAgIGdyaWQtY29sdW1uLWVuZDogNDtcbiAgICBncmlkLXJvdy1zdGFydDogMjtcbiAgICBncmlkLXJvdy1lbmQ6IDQ7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgfVxufVxuQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgLm15YXBwIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAlIGF1dG8gMjUlO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTUlIGF1dG8gNSU7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZ3JpZC1nYXA6IDNweDtcbiAgfVxuXG4gIGFwcC1oZWFkZXItY29tcG9uZW50IHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgIGdyaWQtY29sdW1uLWVuZDogNDtcbiAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICBncmlkLXJvdy1lbmQ6IDI7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgICB6LWluZGV4OiAtMTtcbiAgfVxuXG4gIGFwcC1hc2lkZS1sZWZ0IHtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gICAgZ3JpZC1yb3ctZW5kOiA0O1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gIH1cblxuICBhcHAtbWFpbi1jb250ZW50IHtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gICAgZ3JpZC1yb3ctZW5kOiA0O1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gIH1cblxuICBhcHAtYXNpZGUtcmlnaHQge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xuICAgIGdyaWQtcm93LWVuZDogNDtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICB9XG59XG4vKlxuQG1lZGlhKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpe1xuXG59XG5cbkBtZWRpYShvcmllbnRhdGlvbjogcG9ydHJhaXQpe1xuXG59XG4qL1xuLypcbi8vIE1lZGl1bSBzY3JlZW4gKG1kKVxuQG1lZGlhKG1pbi13aWR0aDo3NjhweCkgYW5kIChtYXgtd2lkdGg6MTM4OHB4KXsgXG5cbn1cblxuLy8gU21hbGwgc2NyZWVuIChzcylcbkBtZWRpYShtYXgtd2lkdGg6NzY3cHgpeyAgICBcblxufVxuKi9cbi5lZHVjYXRpb24tY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBjb2xvcjogIzI2NEMyNjtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xufVxuLmVkdWNhdGlvbi1jb250ZW50IHAge1xuICBsaW5lLWhlaWdodDogMS41ZW07XG59XG4uZWR1Y2F0aW9uLWNvbnRlbnQgLmNvbXBhbmllIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMjY0QzI2O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIGNvbG9yOiAjMjk4MjI5O1xufVxuLmVkdWNhdGlvbi1jb250ZW50IC5kYXRlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cbi5lZHVjYXRpb24tY29udGVudCAuam9iLW5hbWUge1xuICBtYXJnaW46IDBweCAwcHggNHB4IDBweDtcbiAgY29sb3I6ICNBMjMzMzM7XG59XG4uZWR1Y2F0aW9uLWNvbnRlbnQgLmpvYi1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbjogMHB4IDBweCA4cHggMHB4O1xuICBjb2xvcjogIzI2NEMyNjtcbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMuc2Nzcyc7XHJcblxyXG4uZWR1Y2F0aW9uLWNvbnRlbnR7XHJcbiAgICBmb250LXNpemU6MWVtO1xyXG4gICAgY29sb3I6JGdyZWVuNDtcclxuICAgIHBhZGRpbmctbGVmdDo0MHB4O1xyXG5cclxuICAgIHB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb21wYW5pZXtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDoxMHB4O1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICRncmVlbjQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTo0cHg7XHJcbiAgICAgICAgY29sb3I6JGdyZWVuMztcclxuICAgIH1cclxuXHJcbiAgICAuZGF0ZXtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OjEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTo0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmpvYi1uYW1le1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDBweCA0cHggMHB4O1xyXG4gICAgICAgIGNvbG9yOiRyZWQzO1xyXG4gICAgfVxyXG5cclxuICAgIC5qb2ItZGVzY3JpcHRpb257XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4IDhweCAwcHg7XHJcbiAgICAgICAgY29sb3I6JGdyZWVuNDtcclxuICAgIH1cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-article',
          templateUrl: './article.component.html',
          styleUrls: ['./article.component.scss']
        }]
      }], function () {
        return [];
      }, {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        date: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        jobname: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        activitylist: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/details-components/langage-dropdown/langage-dropdown.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/details-components/langage-dropdown/langage-dropdown.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: LangageDropdownComponent */

  /***/
  function srcAppDetailsComponentsLangageDropdownLangageDropdownComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LangageDropdownComponent", function () {
      return LangageDropdownComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LangageDropdownComponent =
    /*#__PURE__*/
    function () {
      function LangageDropdownComponent() {
        _classCallCheck(this, LangageDropdownComponent);
      }

      _createClass(LangageDropdownComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LangageDropdownComponent;
    }();

    LangageDropdownComponent.ɵfac = function LangageDropdownComponent_Factory(t) {
      return new (t || LangageDropdownComponent)();
    };

    LangageDropdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LangageDropdownComponent,
      selectors: [["app-langage-dropdown"]],
      decls: 1,
      vars: 0,
      consts: [[1, "dropdown-buttons"]],
      template: function LangageDropdownComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMtY29tcG9uZW50cy9sYW5nYWdlLWRyb3Bkb3duL2xhbmdhZ2UtZHJvcGRvd24uY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LangageDropdownComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-langage-dropdown',
          templateUrl: './langage-dropdown.component.html',
          styleUrls: ['./langage-dropdown.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/directives/disablerightclick.directive.ts":
  /*!***********************************************************!*\
    !*** ./src/app/directives/disablerightclick.directive.ts ***!
    \***********************************************************/

  /*! exports provided: DisablerightclickDirective */

  /***/
  function srcAppDirectivesDisablerightclickDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DisablerightclickDirective", function () {
      return DisablerightclickDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DisablerightclickDirective =
    /*#__PURE__*/
    function () {
      function DisablerightclickDirective() {
        _classCallCheck(this, DisablerightclickDirective);
      }

      _createClass(DisablerightclickDirective, [{
        key: "OnRightClick",
        value: function OnRightClick(event) {
          //console.log(event.target);
          var xCoordonate = event.clientX; //  display x coordonate

          var yCoordonate = event.clientY; //  display y coordonate

          var element = event.target;
          var content = element.innerHTML;
          content = '<div stlye="position:absolute;top:50%;left:50%;background-color:red;">" + "</div>';
          element.append(content);
          event.preventDefault();
        }
      }]);

      return DisablerightclickDirective;
    }();

    DisablerightclickDirective.ɵfac = function DisablerightclickDirective_Factory(t) {
      return new (t || DisablerightclickDirective)();
    };

    DisablerightclickDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: DisablerightclickDirective,
      selectors: [["", "appDisablerightclick", ""]],
      hostBindings: function DisablerightclickDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function DisablerightclickDirective_contextmenu_HostBindingHandler($event) {
            return ctx.OnRightClick($event);
          });
        }
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DisablerightclickDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appDisablerightclick]'
        }]
      }], function () {
        return [];
      }, {
        OnRightClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['contextmenu', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/directives/window-resize-sensitive.directive.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/directives/window-resize-sensitive.directive.ts ***!
    \*****************************************************************/

  /*! exports provided: WindowResizeSensitiveDirective */

  /***/
  function srcAppDirectivesWindowResizeSensitiveDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WindowResizeSensitiveDirective", function () {
      return WindowResizeSensitiveDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var WindowResizeSensitiveDirective =
    /*#__PURE__*/
    function () {
      function WindowResizeSensitiveDirective() {
        _classCallCheck(this, WindowResizeSensitiveDirective);

        this.windowWidth = window.innerWidth; //console.log(this.windowWidth)
      }

      _createClass(WindowResizeSensitiveDirective, [{
        key: "onResize",
        value: function onResize(event) {
          this.windowWidth = event.target.innerWidth; //window.innerWidth;
          //console.log(this.windowWidth);
        }
      }]);

      return WindowResizeSensitiveDirective;
    }();

    WindowResizeSensitiveDirective.ɵfac = function WindowResizeSensitiveDirective_Factory(t) {
      return new (t || WindowResizeSensitiveDirective)();
    };

    WindowResizeSensitiveDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: WindowResizeSensitiveDirective,
      selectors: [["", "appWindowResizeSensitive", ""]],
      hostBindings: function WindowResizeSensitiveDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function WindowResizeSensitiveDirective_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WindowResizeSensitiveDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appWindowResizeSensitive]'
        }]
      }], function () {
        return [];
      }, {
        onResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:resize', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\MyFiles\dev\NodeJS\OnlineCV\frontend\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map