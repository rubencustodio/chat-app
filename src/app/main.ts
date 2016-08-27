import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {AppComponent} from './app.component';
import {UserService} from './services/user.service';
import {MessageService} from './services/messages.service';
import {Http, HTTP_PROVIDERS} from '@angular/http';

declare var ENV: string;

if (ENV === 'production') {
    enableProdMode();
}

bootstrap(AppComponent, [
    disableDeprecatedForms(),
    provideForms(),
    UserService,
    MessageService,
    Http,
    HTTP_PROVIDERS
]);

