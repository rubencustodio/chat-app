import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/Rx';
import {User} from '../chat/user.model';
import {Http} from '@angular/http';

@Injectable()
export class UserService {
    currentUser: User;
    dataStore: {
        users: User[];
    };

    private _users$: BehaviorSubject<User[]>;

    constructor(public http: Http) {
        this._users$ = new BehaviorSubject<User[]>(null);
        this.dataStore = {
            users: []
        };
    }

    setCurrentUser(newUser: User): void {
        if (this.currentUser !== newUser) {
            this.currentUser = newUser;
        }
    }

    getUsers() {
        this.http.get('https://api.myjson.com/bins/o5f3')
            .map(res => res.json())
            .subscribe(users => {
                for (let user of users) {

                    let newUser = this.create(user.name);

                    this.dataStore.users.push(newUser);
                }

                this._users$.next(this.dataStore.users);
            });
    }

    create(name: string): User {
        return new User(name);
    }

    get users$() {
        return this._users$.asObservable();
    }
}
