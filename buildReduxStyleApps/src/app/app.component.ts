import { Component } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Store} from '@ngrx/store';


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

  constructor(store:Store<any>){
    this.clock = store.select('clock');

    Observable.merge(
      this.click$.mapTo('hour'),
      Observable.interval(1000).mapTo('second')
    )
      .subscribe((type)=>{
        store.dispatch({type})
      })
  }
}
