import { Component } from '@angular/core';
import {Observable, Subject} from "rxjs";


@Component({
  selector: 'app-root',
  template: `
    <button (click)="click$.next()">Update</button>
    <h1>{{clock | async | date:'EEEE, MMMM d, y, h:m:s a'}}</h1>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  click$ = new Subject();

  clock;

  constructor(){
    this.clock = this.click$.map(() => new Date());
  }
}
