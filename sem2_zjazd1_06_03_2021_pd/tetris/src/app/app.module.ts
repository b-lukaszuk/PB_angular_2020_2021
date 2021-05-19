import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // do dzialania (ngForms, ngModel)
import { AppRoutingModule } from './app-routing.module';

import { TetrisCoreModule } from 'ngx-tetris';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import { AuthorsInfoComponent } from './authors-info/authors-info.component';
import { PlayerInfoComponent } from './game-page/player-info/player-info.component';
import { TetrisDisplayComponent } from './game-page/tetris-display/tetris-display.component';
import { GameNavComponent } from './game-page/game-nav/game-nav.component';
import { GameInfoComponent } from './game-page/game-info/game-info.component';
import { HistoryFilterPipe } from './game-page/history-filter.pipe';
import { SortHistoryItemsPipe } from './game-page/sort-history-items.pipe';

@NgModule({
    declarations: [
        AppComponent,
        LandingPageComponent,
        GamePageComponent,
        AuthorsInfoComponent,
        PlayerInfoComponent,
        TetrisDisplayComponent,
        GameNavComponent,
        GameInfoComponent,
        HistoryFilterPipe,
        SortHistoryItemsPipe,
    ],
    imports: [
        BrowserModule,
        TetrisCoreModule,
        FormsModule, // wymagane do dzialania (ngForms, ngModel)
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
