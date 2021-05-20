import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // do dzialania (ngForms, ngModel)
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { TetrisCoreModule } from 'ngx-tetris';
import { AuthorsInfoComponent } from './authors-info/authors-info.component';
import { PlayerInfoComponent } from './game-page/player-info/player-info.component';
import { TetrisDisplayComponent } from './game-page/tetris-display/tetris-display.component';
import { GameNavComponent } from './game-page/game-nav/game-nav.component';
import { GameInfoComponent } from './game-page/game-info/game-info.component';
import { HistoryFilterPipe } from './game-page/history-filter.pipe';
import { SortHistoryItemsPipe } from './game-page/sort-history-items.pipe';
import { IntroTextComponent } from './intro-page/intro-text/intro-text.component';
import { PlayerFormComponent } from './intro-page/player-form/player-form.component';

@NgModule({
    declarations: [
        AppComponent,
        routingComponents,
        AuthorsInfoComponent,
        PlayerInfoComponent,
        TetrisDisplayComponent,
        GameNavComponent,
        GameInfoComponent,
        HistoryFilterPipe,
        SortHistoryItemsPipe,
        IntroTextComponent,
        PlayerFormComponent,
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
