import { Component } from '@angular/core';

import { DisplayOption } from './enums/DisplayOptions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'tetris';

    public displayLandPage: DisplayOption = DisplayOption.Yes;
    public displayGamePage: DisplayOption = DisplayOption.No;
    // public displayLandPage: DisplayOption = DisplayOption.No;
    // public displayGamePage: DisplayOption = DisplayOption.Yes;
    public playerName: string = '';
    public playerEmail: string = '';

    // togluje wysw landPage i gamePage
    // agreed: true, wysw landPage
    // agreed: false, wysw gamePage
    public toggleToLandPage(clicked) {
        if (clicked.agreed) {
            this.displayLandPage = DisplayOption.No;
            this.displayGamePage = DisplayOption.Yes;
            this.playerName = clicked.playerName;
            this.playerEmail = clicked.playerEmail;
        } else {
            this.displayLandPage = DisplayOption.Yes;
            this.displayGamePage = DisplayOption.No;
            this.playerName = clicked.playerName;
            this.playerEmail = clicked.playerEmail;
        }
    }
}
