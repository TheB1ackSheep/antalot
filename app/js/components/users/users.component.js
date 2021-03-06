System.register(['angular2/core'], function(exports_1) {
    "use strict";
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
    var UsersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            UsersComponent = (function () {
                function UsersComponent() {
                }
                UsersComponent = __decorate([
                    core_1.Component({
                        selector: 'users',
                        template: "<div class=\"header\">Users</div>\n\t<div class=\"content\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"header\">Users</div>\n\t\t\t<div class=\"content\">\n\t\t\t\t<p>Let's create user to manage permision of their own. Every connected device has to be authenticated before send or receive messages. Each user have a permision of their own and it is not allow to send or receive messages from other user except adding permission manaully.\n\t\t\t\t<div class=\"btn btn-primary\">Create user</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], UsersComponent);
                return UsersComponent;
            })();
            exports_1("UsersComponent", UsersComponent);
        }
    }
});
//# sourceMappingURL=users.component.js.map