import {Component} from '@angular/core';
import {NavbarComponent} from './navbar/navbar.component';
import {ChatComponent} from './chat/chat.component';
import {CONSTANTS} from './shared';

@Component({
    selector: 'as-main-app',
    templateUrl: 'app/app.html',
    directives: [NavbarComponent, ChatComponent]
})
export class AppComponent {
    public appBrand: string;

    constructor() {
        this.appBrand = CONSTANTS.MAIN.APP.BRAND;
    }
}
