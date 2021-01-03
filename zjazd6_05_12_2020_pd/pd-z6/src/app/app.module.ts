import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms'; // do dzialania task1 (ngForms)

// my components
import { Task1Component } from './task1/task1.component'
import { Task2Component } from './task2/task2.component'
import { Task3Component } from './task3/task3.component'
import { Task4Component } from './task4/task4.component'

@NgModule({
  declarations: [
      AppComponent,
      Task1Component,
      Task2Component,
      Task3Component,
      Task4Component
  ],
  imports: [
      BrowserModule,
      FormsModule, 	// wymagane do dzialania task1 (ngForms)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
