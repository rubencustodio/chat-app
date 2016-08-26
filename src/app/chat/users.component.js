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
var user_service_1 = require('../services/user.service');
var messages_service_1 = require('../services/messages.service');
var UsersComponent = (function () {
    function UsersComponent(userService, messageService) {
        this.userService = userService;
        this.messageService = messageService;
        this.userService.getUsers();
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.users$.subscribe(function (users) {
            if (users) {
                _this.users = users;
                _this.setCurrentUser(_this.users[0]);
            }
        });
        this.userService.currentUser.subscribe(function (user) {
            _this.currentUser = user;
        });
        this.messageService.userTyping$.subscribe(function (isTyping) {
            _this.isTyping = isTyping;
        });
    };
    UsersComponent.prototype.setCurrentUser = function (user) {
        this.userService.setCurrentUser(user);
    };
    UsersComponent.prototype.isSelected = function (user) {
        return this.currentUser.id === user.id;
    };
    UsersComponent = __decorate([
        core_1.Component({
            selector: 'as-users',
            templateUrl: 'app/chat/users.html'
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, messages_service_1.MessageService])
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map