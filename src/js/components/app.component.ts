"use strict"
import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { UserComponent } from './user.component';
import { DeviceComponent } from './device.component';

@Component({
    selector: 'my-app',
    styleUrls:  ['app/css/app.css'],
    template: `
    <nav>
    	<div class="header">&nbsp;</div>
    	<a [routerLink]="['Devices']"><div class="icon devices-icon"></div><span>Devices</span></a>
    	<a [routerLink]="['Users']"><div class="icon users-icon"></div><span>Users</span></a>
    </nav>
    <section class="main-content"><router-outlet></router-outlet></section>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS
  ]
})

@RouteConfig([
	{ path: '/devices', name: 'Devices', component: DeviceComponent },
	{ path: '/users', name: 'Users', component: UserComponent, useAsDefault: true }
])


export class AppComponent { }
