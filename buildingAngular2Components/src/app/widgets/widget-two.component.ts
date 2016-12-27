import {Component} from "@angular/core";
@Component({
  selector: 'widget-two',
  styles:[`
    :host{
      display: block;
      border: 3px solid red;
    }
  `],
  template: `
    <h2>Above</h2>
    <ng-content></ng-content>
    <h2>Below</h2>
  `
})
export class WidgetTwo{
};
