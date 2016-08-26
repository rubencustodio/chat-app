import {Component, Input, OnInit} from '@angular/core';
import {MessageService} from '../services/messages.service';
import {Message} from './message.model';
import {User} from './user.model';

@Component({
    selector: 'as-messages',
    templateUrl: 'app/chat/messages.html'
})

export class MessagesComponent implements OnInit {
    messages: Message[];
    userTyping: boolean;
    @Input() currentUser: User;

    constructor(public messageService: MessageService) {

    }

    ngOnInit() {
        this.messageService.messages$.subscribe((messages) => {
            this.messages = messages;
        });

        this.messageService.userTyping$.subscribe((isTyping) => {
            this.userTyping = isTyping;
        });
    }
}
