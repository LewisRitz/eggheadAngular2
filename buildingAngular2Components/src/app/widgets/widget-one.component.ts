import {Component, Input} from "@angular/core";
@Component({
  selector: 'widget-one',
  styles: [`
    :host{
      font-family: "Times New Roman";
      display: block;
      border: 3px dashed black;
    }
  `],
  template: `
    <h2>One's message:</h2>
    <h3>{{message}}</h3>
  `
})
export class WidgetOne{
  @Input() message;
};
