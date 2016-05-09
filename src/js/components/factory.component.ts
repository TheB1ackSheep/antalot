"use strict"
import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'factories',
    template: `
    <div class="header">Factories</div>
    <div class="content">
    	<div *ngIf="factories.length==0" class="card">
    		<div class="header">Factories</div>
    		<div class="content">
    			<p>Factories are automatically add to this section.</p>
    		</div>
    	</div>
		<ul  *ngIf="factories.length>0" class="heroes">
			<table class="p6n-table-full-width p6n-table p6n-checkboxed-table">
				<tr>
					<th class="p6n-col-checkbox">
						<label class="p6n-checkbox">
							<input #selectAllFactory (change)="bulk(selectAllFactory.checked)" type="checkbox" class="ng-pristine ng-untouched ng-valid">
							<span class="p6n-form-label"></span>
						</label>
					</th>
					<th>Name</th>
					<th>Total machines</th>
					<th>Total boards</th>
				</tr>
				
				<tr *ngFor="#factory of factories">
					<td class="p6n-col-checkbox">
						<label class="p6n-checkbox">
							<input type="checkbox" class="ng-pristine ng-untouched ng-valid" [value]='factory.id' [(ngModel)]="factory.selected"/>
							<span class="p6n-form-label"></span>
						</label>
					</td>
					<td>{{factory.name}}</td>
					<td></td><td></td>
				</tr>
			</table>
		</ul>
	</div>
    `
})
export class FactoryComponent implements OnInit { 

	constructor() { 
		this.factoriesRef = new Firebase('https://antalot.firebaseio.com/factories');
	}
	ngOnInit() {
		var factories = this.factories = [];
		var loading = this.loading = true;
		this.factoriesRef.once('value', function(data) {
			var i = 0;
			for(let k in data.val()){
				factories[i++] = data.val()[k];
			}	
		});
	}
	
	bulk(elem){
		
			for(let factory of this.factories)
				factory.selected = elem;
		
	}
	
}