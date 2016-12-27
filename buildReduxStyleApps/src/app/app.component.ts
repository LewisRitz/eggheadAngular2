import { Component } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Store} from '@ngrx/store';
import {SECOND, HOUR} from './../reducers'


@Component({
  selector: 'app-root',
  template: `
    <input #inputNum type="number" value="0">
    <button (click)="click$.next(inputNum.value)">Update</button>
    <clock [time]="time | async"></clock>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  click$ = new Subject().map((value) => {
    return ({type: HOUR, payload: parseInt(value.toString())});
  });
  seconds$ = Observable.interval(1000).mapTo({type: SECOND, payload: 1});

  time;

  constructor(store:Store<any>){
    this.time = store.select('clock');

    Observable.merge(
      this.click$,
      this.seconds$
    )
      .subscribe(store.dispatch.bind(store))
  }
}
