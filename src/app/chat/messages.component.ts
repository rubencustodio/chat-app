import {Component } from '@angular/core';
import {MessageService} from '../services/messages.service';
import {Message} from './message.model';
import {Observable} from 'rxjs/Observable';
import {UserService} from '../services/user.service';

@Component({
    selector: 'as-messages',
    templateUrl: 'app/chat/messages.html'
})

export class MessagesComponent {
    messages$: Observable<Message[]>;

    constructor(private _messageService: MessageService,
                public userService: UserService) {
        this.messages$ = this._messageService.messages$;
    }

    isTyping() {
        return this._messageService.userTyping;
    }

    currentUser() {
        return this.userService.currentUser;
    }
}
