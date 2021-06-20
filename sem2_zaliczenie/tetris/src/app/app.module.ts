import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // do dzialania (ngForms, ngModel)
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { TetrisCoreModule } from 'ngx-tetris';
import { AuthorsInfoComponent } from './authors-info/authors-info.component';
import { PlayerInfoComponent } from './game-page/player-info/player-info.component';
import { HistoryFilterPipe } from './game-page/history-filter.pipe';
import { SortHistoryItemsPipe } from './game-page/sort-history-items.pipe';
import { IntroTextComponent } from './intro-page/intro-text/intro-text.component';
import { PlayerFormComponent } from './intro-page/player-form/player-form.component';
import { HighScoresComponent } from './high-scores/high-scores.component';

import { PlayerDataService } from './player-data.service';
import { HighScoresService } from './high-scores.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HighScoresSortPipe } from './high-scores/high-scores-sort.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FilterByPlayerNamePipe } from './high-scores/filter-by-player-name.pipe';

@NgModule({
    declarations: [
        AppComponent,
        routingComponents,
        AuthorsInfoComponent,
        PlayerInfoComponent,
        HistoryFilterPipe,
        SortHistoryItemsPipe,
        IntroTextComponent,
        PlayerFormComponent,
        HighScoresComponent,
        HighScoresSortPipe,
        PageNotFoundComponent,
        FilterByPlayerNamePipe,
    ],
    imports: [
        BrowserModule,
        TetrisCoreModule,
        FormsModule, // wymagane do dzialania (ngForms, ngModel)
        AppRoutingModule,
        HttpClientModule,
        NgbModule,
    ],
    providers: [
        PlayerDataService,
        HighScoresService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
