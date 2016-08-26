import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/Rx';
import {Message} from '../chat/message.model';
import {UserService} from './user.service';

@Injectable()
export class MessageService {
    private _messages$: Subject<Message[]>;
    private _userTyping$: Subject<boolean>;
    private dataStore: {
        messages: Message[]
        userTyping: boolean;
    };

    constructor(public _userService: UserService ) {
        this._messages$ = new BehaviorSubject<Message[]>(null);
        this._userTyping$ = new BehaviorSubject<boolean>(null);
        this.dataStore = {
            messages: [],
            userTyping: false
        };
    };

    create(message: Message): void {
        this.dataStore.messages.push(message);
        this._messages$.next(this.dataStore.messages);
    }

    setPersonTyping(isTyping: boolean): void {
        this._userTyping$.next(isTyping);
    }

    removePersonTyping(): void {
        this._userTyping$.next(false);
    }

    get messages$() {
        return this._messages$.asObservable();
    }

    get userTyping$() {
        return this._userTyping$.asObservable();
    }
}
