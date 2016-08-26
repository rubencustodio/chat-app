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
var Rx_1 = require('rxjs/Rx');
var user_service_1 = require('./user.service');
var MessageService = (function () {
    function MessageService(_userService) {
        this._userService = _userService;
        this._messages$ = new Rx_1.BehaviorSubject(null);
        this._userTyping$ = new Rx_1.BehaviorSubject(null);
        this.dataStore = {
            messages: [],
            userTyping: false
        };
    }
    ;
    MessageService.prototype.create = function (message) {
        this.dataStore.messages.push(message);
        this._messages$.next(this.dataStore.messages);
    };
    MessageService.prototype.setPersonTyping = function (isTyping) {
        this._userTyping$.next(isTyping);
    };
    MessageService.prototype.removePersonTyping = function () {
        this._userTyping$.next(false);
    };
    Object.defineProperty(MessageService.prototype, "messages$", {
        get: function () {
            return this._messages$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MessageService.prototype, "userTyping$", {
        get: function () {
            return this._userTyping$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    MessageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], MessageService);
    return MessageService;
}());
exports.MessageService = MessageService;
//# sourceMappingURL=messages.service.js.map