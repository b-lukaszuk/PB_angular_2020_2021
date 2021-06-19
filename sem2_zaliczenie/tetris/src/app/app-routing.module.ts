import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamePageComponent } from './game-page/game-page.component';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { HighScoresComponent } from './high-scores/high-scores.component';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
    { path: 'introPage', component: IntroPageComponent },
    { path: 'gamePage', component: GamePageComponent },
    { path: 'highScores', component: HighScoresComponent },
    { path: '', component: IntroPageComponent },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
export const routingComponents = [
    IntroPageComponent,
    GamePageComponent,
    HighScoresComponent,
];
