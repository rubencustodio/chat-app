"use strict";
var testing_1 = require('@angular/core/testing');
// import { TestComponentBuilder } from '@angular/compiler/testing';
// import { Component } from '@angular/core';
var core_1 = require('@angular/core');
var Rx_1 = require('rxjs/Rx');
var user_model_1 = require('../chat/user.model');
var testing_2 = require('@angular/http/testing');
var http_1 = require('@angular/http');
var user_service_1 = require('./user.service');
describe('UserService', function () {
    beforeEach(function () {
        testing_1.addProviders([
            user_service_1.UserService,
            core_1.Injectable,
            Rx_1.BehaviorSubject,
            user_model_1.User,
            testing_2.MockBackend,
            { provide: http_1.Http, useFactory: function (backend, defaultOptions) {
                    return new http_1.Http(backend, defaultOptions);
                }, deps: [testing_2.MockBackend, http_1.BaseRequestOptions] }
        ]);
    });
    it('should load users', function () {
    });
});
//# sourceMappingURL=user.service.spec.js.map