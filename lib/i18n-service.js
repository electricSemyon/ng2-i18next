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
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/share');
var I18nServiceConfig = (function () {
    function I18nServiceConfig() {
    }
    return I18nServiceConfig;
}());
exports.I18nServiceConfig = I18nServiceConfig;
/* see I18nDirective for more information */
var I18nService = (function () {
    function I18nService(config) {
        var _this = this;
        this.config = config;
        this.init = false;
        this.i18n = i18next;
        this.whenReady$ = new Observable_1.Observable(function (observer) {
            _this.whenReadyObserver = observer;
            var i18nextUse = config.use;
            if (config.use) {
                for (var i = 0; i < i18nextUse.length; i++) {
                    _this.i18n.use(i18nextUse[i]);
                }
            }
            _this.i18n.init(config.config, function (err, t) {
                _this.init = true;
                _this.whenReadyObserver.next(true);
            });
        }).share();
    }
    I18nService.prototype.t = function (s, opts) {
        if (opts === void 0) { opts = undefined; }
        return this.i18n.t(s, opts);
    };
    I18nService.prototype.tPromise = function (s, opts) {
        var _this = this;
        if (opts === void 0) { opts = undefined; }
        return new Promise(function (resolve, reject) {
            if (_this.init) {
                resolve(_this.i18n.t(s, opts));
            }
            else {
                reject(s);
            }
        });
    };
    I18nService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [I18nServiceConfig])
    ], I18nService);
    return I18nService;
}());
exports.I18nService = I18nService;
//# sourceMappingURL=i18n-service.js.map