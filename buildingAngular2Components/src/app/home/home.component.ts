import {Component, ViewChild, ViewContainerRef, ComponentFactoryResolver} from "@angular/core";
import {SimpleService} from "../services/services.module";
import {WidgetThree} from "../widgets/widget-three.component";
@Component({
  selector: 'home',
  template: `
    <div #container></div>
  `
})
export class HomeComponent{
  @ViewChild('container', {read:ViewContainerRef}) container;

  constructor(private resolver:ComponentFactoryResolver){}

  ngAfterContentInit(){
    const widgetFactory = this.resolver.resolveComponentFactory(WidgetThree);
    this.container.createComponent(widgetFactory);
  }
}
