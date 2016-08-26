import { Component, OnInit} from '@angular/core';
import { UsersComponent } from './users.component';
import { MessagesComponent } from './messages.component';
import { UserService } from '../services/user.service';
import { MessageService } from '../services/messages.service';
import { Message } from './message.model';
import { User } from './user.model';

@Component({
    selector: 'as-chat',
    templateUrl: 'app/chat/chat.html',
    directives: [UsersComponent, MessagesComponent]
})
export class ChatComponent implements OnInit {
    currentUser: User;
    isNewUser: boolean;

    constructor(public userService: UserService,
                public messageService: MessageService) {
        this.userService.getUsers();
    }

    ngOnInit(): void {
        this.userService.currentUser.subscribe((user: User) => {
                this.currentUser = user;
            this.isNewUser = true;

        });
    }

    submitMessage(text: HTMLInputElement): void {
        let message = new Message({
            author: this.currentUser,
            text: text.value
        });

        if (text.value.length > 0) {
            this.messageService.create(message);
        }

        this.endTyping(text);
    }

    beginTyping(text: HTMLInputElement): void {
        if (text.value.length > 0) {
            this.messageService.setPersonTyping(true);
            this.isNewUser = false;
        }

        if (text.value.length === 0 ) {
            this.endTyping(text);
        }
    }

    endTyping(text: HTMLInputElement): void {
        text.value = '';
        this.messageService.removePersonTyping();
    }
}
