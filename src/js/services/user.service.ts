import {Injectable} from 'angular2/core';

@Injectable()
export class UserService {
	usersRef: Firebase;

	constructor() {
        this.usersRef = new Firebase("https://antalot.firebaseio.com/users");
    }

	getUsers(cb) {
		this.usersRef.once("value", cb);
		return;
	}
}