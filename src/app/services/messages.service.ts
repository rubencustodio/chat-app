import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/Rx';
import {Message} from '../chat/message.model';

@Injectable()
export class MessageService {
    userTyping = false;

    private _messages$: Subject<Message[]>;
    private dataStore: {
        messages: Message[]
    };

    constructor() {
        this._messages$ = new BehaviorSubject<Message[]>(null);
        this.dataStore = {
            messages: []
        };
    };

    create(message: Message): void {
        this.dataStore.messages.push(message);
        this._messages$.next(this.dataStore.messages);
    }

    setPersonTyping(isTyping: boolean) {
        this.userTyping = isTyping;
    }

    get messages$() {
        return this._messages$.asObservable();
    }
}
