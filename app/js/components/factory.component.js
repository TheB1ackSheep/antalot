System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var FactoryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FactoryComponent = (function () {
                function FactoryComponent() {
                    this.factoriesRef = new Firebase('https://antalot.firebaseio.com/factories');
                }
                FactoryComponent.prototype.ngOnInit = function () {
                    var factories = this.factories = [];
                    var loading = this.loading = true;
                    this.factoriesRef.once('value', function (data) {
                        var i = 0;
                        for (var k in data.val()) {
                            factories[i++] = data.val()[k];
                        }
                    });
                };
                FactoryComponent.prototype.bulk = function (elem) {
                    for (var _i = 0, _a = this.factories; _i < _a.length; _i++) {
                        var factory = _a[_i];
                        factory.selected = elem;
                    }
                };
                FactoryComponent = __decorate([
                    core_1.Component({
                        selector: 'factories',
                        template: "\n    <div class=\"header\">Factories</div>\n    <div class=\"content\">\n    \t<div *ngIf=\"factories.length==0\" class=\"card\">\n    \t\t<div class=\"header\">Factories</div>\n    \t\t<div class=\"content\">\n    \t\t\t<p>Factories are automatically add to this section.</p>\n    \t\t</div>\n    \t</div>\n\t\t<ul  *ngIf=\"factories.length>0\" class=\"heroes\">\n\t\t\t<table class=\"p6n-table-full-width p6n-table p6n-checkboxed-table\">\n\t\t\t\t<tr>\n\t\t\t\t\t<th class=\"p6n-col-checkbox\">\n\t\t\t\t\t\t<label class=\"p6n-checkbox\">\n\t\t\t\t\t\t\t<input #selectAllFactory (change)=\"bulk(selectAllFactory.checked)\" type=\"checkbox\" class=\"ng-pristine ng-untouched ng-valid\">\n\t\t\t\t\t\t\t<span class=\"p6n-form-label\"></span>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</th>\n\t\t\t\t\t<th>Name</th>\n\t\t\t\t\t<th>Total machines</th>\n\t\t\t\t\t<th>Total boards</th>\n\t\t\t\t</tr>\n\t\t\t\t\n\t\t\t\t<tr *ngFor=\"#factory of factories\">\n\t\t\t\t\t<td class=\"p6n-col-checkbox\">\n\t\t\t\t\t\t<label class=\"p6n-checkbox\">\n\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"ng-pristine ng-untouched ng-valid\" [value]='factory.id' [(ngModel)]=\"factory.selected\"/>\n\t\t\t\t\t\t\t<span class=\"p6n-form-label\"></span>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>{{factory.name}}</td>\n\t\t\t\t\t<td></td><td></td>\n\t\t\t\t</tr>\n\t\t\t</table>\n\t\t</ul>\n\t</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], FactoryComponent);
                return FactoryComponent;
            }());
            exports_1("FactoryComponent", FactoryComponent);
        }
    }
});
//# sourceMappingURL=factory.component.js.map