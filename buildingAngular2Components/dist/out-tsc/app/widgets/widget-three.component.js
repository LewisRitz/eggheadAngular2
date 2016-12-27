var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, Renderer, Input } from "@angular/core";
export var WidgetThree = (function () {
    function WidgetThree(renderer) {
        this.renderer = renderer;
        this.message = "default value!";
    }
    WidgetThree.prototype.ngAfterViewInit = function () {
        // this.input.nativeElement.focus(); // not the best way to do this
        this.renderer.invokeElementMethod(this.input.nativeElement, 'focus', []);
        console.log(this.input);
    };
    __decorate([
        ViewChild('input'), 
        __metadata('design:type', Object)
    ], WidgetThree.prototype, "input", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], WidgetThree.prototype, "message", void 0);
    WidgetThree = __decorate([
        Component({
            selector: 'widget-three',
            template: "\n    <input #input type=\"text\" [value]=\"message\">\n  "
        }), 
        __metadata('design:paramtypes', [Renderer])
    ], WidgetThree);
    return WidgetThree;
}());
;
//# sourceMappingURL=/Users/lewisritz/git/eggheadLearning/angular2/buildingAngular2Components/src/app/widgets/widget-three.component.js.map