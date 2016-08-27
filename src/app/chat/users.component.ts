import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {MessageService} from '../services/messages.service';
import {User} from './user.model';

@Component({
    selector: 'as-users',
    templateUrl: 'app/chat/users.html'
})

export class UsersComponent implements OnInit {
    users: User[];

    constructor(public userService: UserService,
                private _messageService: MessageService) {
    }

    ngOnInit(): void {
        this.userService.users$.subscribe(users => {
            if (users) {
                this.users = users;
                this.setCurrentUser(this.users[0]);
            }
        });
    }

    setCurrentUser(user: User): void {
        this.userService.setCurrentUser(user);
    }

    isSelected(user: User) {
        return this.currentUser().id === user.id;
    }

    isTyping() {
        return this._messageService.userTyping;
    }

    currentUser() {
        return this.userService.currentUser;
    }

}
