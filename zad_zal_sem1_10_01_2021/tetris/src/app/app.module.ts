import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
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
        TetrisCoreModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
