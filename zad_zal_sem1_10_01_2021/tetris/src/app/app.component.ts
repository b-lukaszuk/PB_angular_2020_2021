import { Component } from '@angular/core';

import { DisplayOption } from './enums/DisplayOptions'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'tetris';

    public displayLandPage: DisplayOption = DisplayOption.Yes;
    public playerName: string = "";
    public playerEmail: string = "";

    public gotoGame() {
        this.displayLandPage = DisplayOption.No;
    }

}
