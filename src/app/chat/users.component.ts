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
    currentUser: User;
    isTyping: boolean;

    constructor(public userService: UserService,
                public messageService: MessageService) {

        this.userService.getUsers();
    }

    ngOnInit(): void {
        this.userService.users$.subscribe(users => {
            if (users) {
                this.users = users;
                this.setCurrentUser(this.users[0]);
            }
        });

        this.userService.currentUser.subscribe((user: User) => {
            this.currentUser = user;
        });

        this.messageService.userTyping$.subscribe((isTyping: boolean) => {
            this.isTyping = isTyping;
        });
    }

    setCurrentUser(user: User): void {
        this.userService.setCurrentUser(user);
    }

    isSelected(user: User) {
        return this.currentUser.id === user.id;
    }

}
