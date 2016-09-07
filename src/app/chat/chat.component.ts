import { Component } from '@angular/core';
import { UsersComponent } from './users.component';
import { MessagesComponent } from './messages.component';
import { UserService } from '../services/user.service';
import { MessageService } from '../services/messages.service';
import { Message } from './message.model';

@Component({
    selector: 'as-chat',
    templateUrl: 'app/chat/chat.html',
    directives: [UsersComponent, MessagesComponent]
})
export class ChatComponent {
    chat = {
        text: ''
    };

    constructor(public userService: UserService,
                public messageService: MessageService) {
        this.userService.getUsers();
    }

    submitMessage(valid) {
        if (valid) {
            let message = new Message({
                author: this.currentUser(),
                text: this.chat.text
            });

            this.messageService.create(message);
            this.endTyping();
        }
    }

    checkTyping() {
        if (this.chat.text.length > 0) {
            this.messageService.setPersonTyping(true);
        }

        if (this.chat.text.length === 0 ) {
            this.endTyping();
        }
    }

    endTyping() {
        this.chat.text = '';
        this.messageService.setPersonTyping(false);
    }

    currentUser() {
        return this.userService.currentUser;
    }
}
