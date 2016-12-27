import {Component, Input} from "@angular/core";
@Component({
  selector: 'clock',
  template: `<h3>{{time | date:'EEEE, MMMM d, y, h:m:s a'}}</h3>`
})
export class Clock{
  @Input() time;
}
