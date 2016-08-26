import {uuid} from '../util/uuid';
import {User} from './user.model';

export class Message {

    id: string;
    author: User;
    text: string;

    constructor(obj?: any) {
        this.id = obj && obj.id || uuid();
        this.author = obj && obj.author || null;
        this.text = obj && obj.text || null;
    }
}
