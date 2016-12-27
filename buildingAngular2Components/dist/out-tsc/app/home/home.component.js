var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from "@angular/core";
import { WidgetThree } from "../widgets/widget-three.component";
export var HomeComponent = (function () {
    function HomeComponent(resolver) {
        this.resolver = resolver;
    }
    HomeComponent.prototype.ngAfterContentInit = function () {
        var widgetFactory = this.resolver.resolveComponentFactory(WidgetThree);
        this.container.createComponent(widgetFactory);
        this.container.createComponent(widgetFactory);
        this.container.createComponent(widgetFactory);
        this.container.createComponent(widgetFactory);
        this.container.createComponent(widgetFactory);
        this.container.createComponent(widgetFactory);
        this.widgetRef = this.container.createComponent(widgetFactory, 2);
        this.widgetRef.instance.message = "I'm third";
    };
    HomeComponent.prototype.onClick = function () {
        this.container.createEmbeddedView(this.template, {
            description: 'sweet'
        });
    };
    __decorate([
        ViewChild('container', { read: ViewContainerRef }), 
        __metadata('design:type', Object)
    ], HomeComponent.prototype, "container", void 0);
    __decorate([
        ViewChild('template'), 
        __metadata('design:type', Object)
    ], HomeComponent.prototype, "template", void 0);
    HomeComponent = __decorate([
        Component({
            selector: 'home',
            template: "\n    <button (click)=\"onClick()\">Create Template</button>\n    <div #container></div>\n    \n    <template #template let-description=\"description\">\n      <h2>My {{description}} Template</h2>\n      <button>My {{description}} button</button>\n    </template>\n  "
        }), 
        __metadata('design:paramtypes', [ComponentFactoryResolver])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/Users/lewisritz/git/eggheadLearning/angular2/buildingAngular2Components/src/app/home/home.component.js.map