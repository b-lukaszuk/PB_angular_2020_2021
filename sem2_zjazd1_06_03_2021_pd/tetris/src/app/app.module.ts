import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // do dzialania (ngForms, ngModel)
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { TetrisCoreModule } from 'ngx-tetris';
import { AuthorsInfoComponent } from './authors-info/authors-info.component';
import { PlayerInfoComponent } from './game-page/player-info/player-info.component';
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
