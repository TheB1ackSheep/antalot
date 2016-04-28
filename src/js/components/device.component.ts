"use strict"
import {Component} from 'angular2/core';

@Component({
    selector: 'devices',
    template: `
    <div class="header">Devices</div>
    <div class="content">
    	<div class="card">
    		<div class="header">Devices</div>
    		<div class="content">
    			<p>Devices are automatically add to this section. Just flash the firmware and turn it on.</p>
    		</div>
    	</div>
	  </div>
    `
})
export class DeviceComponent { }
