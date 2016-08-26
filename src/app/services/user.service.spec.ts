import { it,
    describe,
    expect,
    inject,
    fakeAsync,
    afterEach,
    beforeEachProviders,
    tick,
} from '@angular/core/testing';


import {MockBackend} from '@angular/http/testing'; import {provide} from '@angular/core';
import {
    Http,
    ConnectionBackend,
    BaseRequestOptions,
    Response,
    ResponseOptions
} from '@angular/http';

import { UserService } from './user.service';