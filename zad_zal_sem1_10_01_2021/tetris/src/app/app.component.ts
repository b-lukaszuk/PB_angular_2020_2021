import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'tetris';

    public displayLandPage: boolean = false;
    public displayGamePage = !this.displayLandPage;
    public playerName: string = '';
    public playerEmail: string = '';

    // togluje wysw landPage i gamePage
    // agreed: true, wysw landPage
    // agreed: false, wysw gamePage
    public toggleToLandPage(clicked) {
        if (clicked.agreed) {
            this.displayLandPage = false;
            this.displayGamePage = !this.displayLandPage;
            this.playerName = clicked.playerName;
            this.playerEmail = clicked.playerEmail;
        } else {
            this.displayLandPage = true;
            this.displayGamePage = !this.displayLandPage;
            this.playerName = clicked.playerName;
            this.playerEmail = clicked.playerEmail;
        }
    }
}
