import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms'; // do dzialania task1 (ngForms)

// my components
import {Task1Component} from './task1/task1.component'

@NgModule({
  declarations: [
      AppComponent,
      Task1Component
  ],
  imports: [
      BrowserModule,
      FormsModule, 	// wymagane do dzialania task1 (ngForms)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
