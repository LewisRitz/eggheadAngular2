import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import {clock} from "./../reducers";
import { Clock } from './clock.component';

@NgModule({
  declarations: [
    AppComponent, Clock
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({clock})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
