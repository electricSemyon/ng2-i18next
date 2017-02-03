"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var i18n_service_1 = require('./i18n-service');
var I18nDirective = (function () {
    function I18nDirective(i18n, el, renderer) {
        this.i18n = i18n;
        this.el = el;
        this.renderer = renderer;
    }
    /*
       If the i18next module is initialized, the promise is resolved with the text to display.
  
       If the i18next module is not yet initialized, the promise is rejected: we subscribe
       to the i18nextService observable which will alert us when the module is initialized
    */
    I18nDirective.prototype.ngOnChanges = function () {
        var _this = this;
        this.loadAndRender(this.content, function (s) {
            _this.el.nativeElement.textContent = s;
        });
        this.loadAndRender(this.phContent, function (s) {
            _this.renderer.setElementAttribute(_this.el.nativeElement, 'placeholder', s);
        });
    };
    I18nDirective.prototype.loadAndRender = function (content, doRenderCallback) {
        var _this = this;
        if (!content) {
            return;
        }
        var code;
        var options = {};
        try {
            var json = JSON.parse(content);
            code = Object.keys(json)[0];
            options = json[code];
        }
        catch (e) {
            code = content;
        }
        this.i18n.tPromise(code, options)
            .then(function (val) {
            doRenderCallback(val);
        })
            .catch(function (val) {
            doRenderCallback(' ');
            var obs = _this.i18n.whenReady$.subscribe(function (b) {
                doRenderCallback(_this.i18n.t(code, options));
                setTimeout(function () { obs.unsubscribe(); }, 0);
            });
        });
    };
    __decorate([
        core_1.Input('i18n'), 
        __metadata('design:type', String)
    ], I18nDirective.prototype, "content", void 0);
    __decorate([
        core_1.Input('i18n-placeholder'), 
        __metadata('design:type', String)
    ], I18nDirective.prototype, "phContent", void 0);
    I18nDirective = __decorate([
        core_1.Directive({
            selector: '[i18n],[i18n-placeholder]',
            providers: [],
            host: {}
        }), 
        __metadata('design:paramtypes', [i18n_service_1.I18nService, (typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.Renderer !== 'undefined' && core_1.Renderer) === 'function' && _b) || Object])
    ], I18nDirective);
    return I18nDirective;
    var _a, _b;
}());
exports.I18nDirective = I18nDirective;
//# sourceMappingURL=i18n-directive.js.map