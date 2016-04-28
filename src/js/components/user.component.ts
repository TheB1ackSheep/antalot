"use strict"
import {Component, OnInit} from 'angular2/core';
import {User} from '../modules/user.module';
import {UserService} from '../services/user.service';

@Component({
    selector: 'users',
    template: `<div class="header">
		<div class="title">Users</div>
		<a class="btn btn-link" disabled>DELETE</a>
		<a class="btn btn-link" disabled>ENABLE</a>
		<a class="btn btn-link" disabled>DISABLE</a>
		<a class="btn btn-link">CREATE USER</a>
    </div>
	<div class="content">
		<div *ngIf="users.length==0" class="card">
					<div class="header">Users</div>
					<div class="content">
						<p>Let's create user to manage permision of their own. Every connected device has to be authenticated before send or receive messages. Each user have a permision of their own and it is not allow to send or receive messages from other user except adding permission manaully.
						<div class="btn btn-primary">Create user</div>
					</div>
				</div>
				<ul  *ngIf="users.length>0" class="heroes">
			        <table>
						<tr><th><input #selectAllUser type="checkbox" value="all"  (change)="bulk(selectAllUser.checked)"/></th><th>Name</th><th>Permissions</th></tr>
						<tr *ngFor="#user of users"><td><input type="checkbox" [value]='user.id' [(ngModel)]="user.selected"/></td><td>{{user.name}}</td><td>{{user.permissions[0]}}</td></tr>
			        </table>
			    </ul>
	</div>
    `,
    providers: [UserService]
})
export class UserComponent implements OnInit { 

	constructor() { 
		this.usersRef = new Firebase('https://antalot.firebaseio.com/users');
	}
	ngOnInit() {
		var users = this.users = [];
		var loading = this.loading = true;
		this.usersRef.once('value', function(data) {
			var i = 0;
			for(let k in data.val()){
				users[i++] = data.val()[k];
			}	
		});
	}
	bulk(elem){
		
			for(let user of this.users)
				user.selected = elem;
		
	}
}