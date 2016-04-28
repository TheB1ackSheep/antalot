System.register(['angular2/core', '../services/user.service'], function(exports_1, context_1) {
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
    var core_1, user_service_1;
    var UserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            UserComponent = (function () {
                function UserComponent() {
                    this.usersRef = new Firebase('https://antalot.firebaseio.com/users');
                }
                UserComponent.prototype.ngOnInit = function () {
                    var users = this.users = [];
                    var loading = this.loading = true;
                    this.usersRef.once('value', function (data) {
                        var i = 0;
                        for (var k in data.val()) {
                            users[i++] = data.val()[k];
                        }
                    });
                };
                UserComponent.prototype.bulk = function (elem) {
                    for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
                        var user = _a[_i];
                        user.selected = elem;
                    }
                };
                UserComponent = __decorate([
                    core_1.Component({
                        selector: 'users',
                        template: "<div class=\"header\">\n\t\t<div class=\"title\">Users</div>\n\t\t<a class=\"btn btn-link\" disabled>DELETE</a>\n\t\t<a class=\"btn btn-link\" disabled>ENABLE</a>\n\t\t<a class=\"btn btn-link\" disabled>DISABLE</a>\n\t\t<a class=\"btn btn-link\">CREATE USER</a>\n    </div>\n\t<div class=\"content\">\n\t\t<div *ngIf=\"users.length==0\" class=\"card\">\n\t\t\t\t\t<div class=\"header\">Users</div>\n\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\t<p>Let's create user to manage permision of their own. Every connected device has to be authenticated before send or receive messages. Each user have a permision of their own and it is not allow to send or receive messages from other user except adding permission manaully.\n\t\t\t\t\t\t<div class=\"btn btn-primary\">Create user</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<ul  *ngIf=\"users.length>0\" class=\"heroes\">\n\t\t\t        <table>\n\t\t\t\t\t\t<tr><th><input #selectAllUser type=\"checkbox\" value=\"all\"  (change)=\"bulk(selectAllUser.checked)\"/></th><th>Name</th><th>Permissions</th></tr>\n\t\t\t\t\t\t<tr *ngFor=\"#user of users\"><td><input type=\"checkbox\" [value]='user.id' [(ngModel)]=\"user.selected\"/></td><td>{{user.name}}</td><td>{{user.permissions[0]}}</td></tr>\n\t\t\t        </table>\n\t\t\t    </ul>\n\t</div>\n    ",
                        providers: [user_service_1.UserService]
                    }), 
                    __metadata('design:paramtypes', [])
                ], UserComponent);
                return UserComponent;
            }());
            exports_1("UserComponent", UserComponent);
        }
    }
});
//# sourceMappingURL=user.component.js.map