import {Component} from "@angular/core";
import {SimpleService} from "../services/services.module";
@Component({
  selector: 'home',
  template: `
    <widget-two>
      <div content>Some content</div>
      <h2 class="header">Title</h2>
      <h3 footer>Footer</h3>
      <!--<widget-one [message]="simpleService.message"></widget-one>-->
    </widget-two>
  `
})
export class HomeComponent{
  constructor(private simpleService:SimpleService){}
}
