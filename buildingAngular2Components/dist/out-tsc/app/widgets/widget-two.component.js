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
export var WidgetTwo = (function () {
    function WidgetTwo() {
    }
    WidgetTwo = __decorate([
        Component({
            selector: 'widget-two',
            styles: ["\n    :host{\n      display: block;\n      border: 3px solid red;\n    }\n  "],
            template: "\n    <h2>Above</h2>\n    <ng-content select=\".header\"></ng-content>\n    <ng-content select=\"[content]\"></ng-content>\n    <ng-content select=\"[footer]\"></ng-content>\n    <h2>Below</h2>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], WidgetTwo);
    return WidgetTwo;
}());
;
//# sourceMappingURL=/Users/lewisritz/git/eggheadLearning/angular2/buildingAngular2Components/src/app/widgets/widget-two.component.js.map