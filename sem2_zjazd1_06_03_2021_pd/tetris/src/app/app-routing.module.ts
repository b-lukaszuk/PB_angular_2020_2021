import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamePageComponent } from './game-page/game-page.component';
import { IntroPageComponent } from './intro-page/intro-page.component';

const routes: Routes = [
    { path: 'introPage', component: IntroPageComponent },
    { path: 'gamePage', component: GamePageComponent },
    { path: '**', redirectTo: 'introPage' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [IntroPageComponent, GamePageComponent]
