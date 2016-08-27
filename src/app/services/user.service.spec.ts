import {
    // async,
    // inject,
    addProviders
    // ComponentFixture
} from '@angular/core/testing';

// import { TestComponentBuilder } from '@angular/compiler/testing';
// import { Component } from '@angular/core';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/Rx';
import {User} from '../chat/user.model';
import {MockBackend} from '@angular/http/testing';
import {
    Http,
    ConnectionBackend,
    BaseRequestOptions,
    Response,
    ResponseOptions
} from '@angular/http';

import { UserService } from './user.service';

describe('UserService', () => {
    beforeEach(() => {
        addProviders([
            UserService,
            Injectable,
            BehaviorSubject,
            User,
            MockBackend,
            { provide: Http, useFactory: (backend: ConnectionBackend,
                                          defaultOptions: BaseRequestOptions) => {
                return new Http(backend, defaultOptions);
            }, deps: [MockBackend, BaseRequestOptions]}
        ]);
    });

    it('should load users', () => {

    });
});
