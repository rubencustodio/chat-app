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
var messages_service_1 = require('../services/messages.service');
var user_model_1 = require('./user.model');
var MessagesComponent = (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageService.messages$.subscribe(function (messages) {
            _this.messages = messages;
        });
        this.messageService.userTyping$.subscribe(function (isTyping) {
            _this.userTyping = isTyping;
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', user_model_1.User)
    ], MessagesComponent.prototype, "currentUser", void 0);
    MessagesComponent = __decorate([
        core_1.Component({
            selector: 'as-messages',
            templateUrl: 'app/chat/messages.html'
        }), 
        __metadata('design:paramtypes', [messages_service_1.MessageService])
    ], MessagesComponent);
    return MessagesComponent;
}());
exports.MessagesComponent = MessagesComponent;
//# sourceMappingURL=messages.component.js.map