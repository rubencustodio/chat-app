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
var users_component_1 = require('./users.component');
var messages_component_1 = require('./messages.component');
var user_service_1 = require('../services/user.service');
var messages_service_1 = require('../services/messages.service');
var message_model_1 = require('./message.model');
var ChatComponent = (function () {
    function ChatComponent(userService, messageService) {
        this.userService = userService;
        this.messageService = messageService;
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.currentUser.subscribe(function (user) {
            _this.currentUser = user;
            _this.isNewUser = true;
        });
    };
    ChatComponent.prototype.submitMessage = function (text) {
        var message = new message_model_1.Message({
            author: this.currentUser,
            text: text.value
        });
        if (text.value.length > 0) {
            this.messageService.create(message);
        }
        this.endTyping(text);
    };
    ChatComponent.prototype.beginTyping = function (text) {
        if (text.value.length > 0) {
            this.messageService.setPersonTyping(true);
            this.isNewUser = false;
        }
        if (text.value.length === 0) {
            this.endTyping(text);
        }
    };
    ChatComponent.prototype.endTyping = function (text) {
        text.value = '';
        this.messageService.removePersonTyping();
    };
    ChatComponent = __decorate([
        core_1.Component({
            selector: 'as-chat',
            templateUrl: 'app/chat/chat.html',
            directives: [users_component_1.UsersComponent, messages_component_1.MessagesComponent]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, messages_service_1.MessageService])
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=chat.component.js.map