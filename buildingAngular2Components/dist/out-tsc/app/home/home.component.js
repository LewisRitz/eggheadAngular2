var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { SimpleService } from "../services/services.module";
export var HomeComponent = (function () {
    function HomeComponent(simpleService) {
        this.simpleService = simpleService;
    }
    HomeComponent = __decorate([
        Component({
            selector: 'home',
            template: "\n    <!--<div>I'm a Home component</div>-->\n    <!--<div>{{simpleService.message}}</div>-->\n    <widget-two>\n      <widget-one [message]=\"simpleService.message\"></widget-one>\n    </widget-two>\n    <widget-two>\n      Some other content\n    </widget-two>\n    <!--<widget-one [message]=\"simpleService.message\"></widget-one>-->\n  "
        }), 
        __metadata('design:paramtypes', [SimpleService])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/Users/lewisritz/git/eggheadLearning/angular2/buildingAngular2Components/src/app/home/home.component.js.map