System.register(['angular2/core', 'angular2/router', './user.component', './device.component', './factory.component'], function(exports_1, context_1) {
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
    var core_1, router_1, user_component_1, device_component_1, factory_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_component_1_1) {
                user_component_1 = user_component_1_1;
            },
            function (device_component_1_1) {
                device_component_1 = device_component_1_1;
            },
            function (factory_component_1_1) {
                factory_component_1 = factory_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        styleUrls: ['app/css/app.css'],
                        template: "\n    <nav>\n    \t<div class=\"header\">&nbsp;</div>\n      <a [routerLink]=\"['Factories']\"><div class=\"icon factories-icon\"></div><span>Factories</span></a>\n    \t<a [routerLink]=\"['Devices']\"><div class=\"icon devices-icon\"></div><span>Devices</span></a>\n    \t<a [routerLink]=\"['Users']\"><div class=\"icon users-icon\"></div><span>Users</span></a>\n    </nav>\n    <section class=\"main-content\"><router-outlet></router-outlet></section>\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            router_1.ROUTER_PROVIDERS
                        ]
                    }),
                    router_1.RouteConfig([
                        { path: '/factories', name: 'Factories', component: factory_component_1.FactoryComponent },
                        { path: '/devices', name: 'Devices', component: device_component_1.DeviceComponent },
                        { path: '/users', name: 'Users', component: user_component_1.UserComponent, useAsDefault: true }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map