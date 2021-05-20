import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamePageComponent } from './game-page/game-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
    { path: 'introPage', component: LandingPageComponent },
    { path: 'gamePage', component: GamePageComponent },
    { path: '**', redirectTo: 'introPage' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LandingPageComponent, GamePageComponent]
