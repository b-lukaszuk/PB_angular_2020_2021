import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // do dzialania (ngForms, ngModel)


import { TetrisCoreModule } from 'ngx-tetris';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import { AuthorsInfoComponent } from './authors-info/authors-info.component';

@NgModule({
    declarations: [
        AppComponent,
        LandingPageComponent,
        GamePageComponent,
        AuthorsInfoComponent
    ],
    imports: [
        BrowserModule,
        TetrisCoreModule,
        FormsModule, 	// wymagane do dzialania (ngForms, ngModel)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
