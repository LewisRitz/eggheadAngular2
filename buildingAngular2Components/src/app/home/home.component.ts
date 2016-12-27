import {Component} from "@angular/core";
import {SimpleService} from "../services/services.module";
@Component({
  selector: 'home',
  template: `
    <!--<div>I'm a Home component</div>-->
    <!--<div>{{simpleService.message}}</div>-->
    <widget-two>
      <widget-one [message]="simpleService.message"></widget-one>
    </widget-two>
    <widget-two>
      Some other content
    </widget-two>
    <!--<widget-one [message]="simpleService.message"></widget-one>-->
  `
})
export class HomeComponent{
  constructor(private simpleService:SimpleService){}
}
