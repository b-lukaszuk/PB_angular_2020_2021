import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PlayerDataService } from 'src/app/player-data.service';
import { HighScoresService } from 'src/app/high-scores.service';

@Component({
    selector: 'player-form',
    templateUrl: './player-form.component.html',
    styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {

    constructor(private _playerDataService: PlayerDataService,
        private _highScoresService: HighScoresService) { }

    // dane uzytkownika
    public playerName: string = '';
    public playerId: string = '';

    public goToGamePageAllowed: boolean = false;

    public setPlayerName(name: string) {
        this.playerName = name;
        this.checkIfMayGoToGamePage();
    }

    public setPlayerId(id: string) {
        this.playerId = id;
        this.checkIfMayGoToGamePage();
    }

    public isNameOk() {
        return this.playerName.trim().match(/^[a-zA-Z ,.'-]+$/);
    }

    public isIdOk() {
        console.log(this._highScoresService.isTokenCorrect(this.playerId));
        return this.playerId.trim() !== "";
    }

    public checkIfMayGoToGamePage(): void {
        if (this.isNameOk() && this.isIdOk()) {
            this.goToGamePageAllowed = true;
        } else {
            this.goToGamePageAllowed = false;
        }
    }

    ngOnInit() {
    }

}
