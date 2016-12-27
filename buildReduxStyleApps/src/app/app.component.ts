import { Component } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Store} from '@ngrx/store';
import {SECOND, HOUR} from './../reducers'


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
      this.click$.mapTo({type: HOUR, payload:3}),
      Observable.interval(1000).mapTo({type: SECOND, payload: 1})
    )
      .subscribe((action)=>{
        store.dispatch(action)
      })
  }
}
