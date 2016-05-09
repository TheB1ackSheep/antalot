"use strict"
import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { UserComponent } from './user.component';
import { DeviceComponent } from './device.component';
import { FactoryComponent } from './factory.component';

@Component({
    selector: 'my-app',
    styleUrls:  ['app/css/app.css'],
    template: `
    <nav>
    	<div class="header">&nbsp;</div>
      <a [routerLink]="['Factories']"><div class="icon factories-icon"></div><span>Factories</span></a>
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
  { path: '/factories', name: 'Factories', component: FactoryComponent },
	{ path: '/devices', name: 'Devices', component: DeviceComponent },
	{ path: '/users', name: 'Users', component: UserComponent, useAsDefault: true }
])


export class AppComponent { }
