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

    @Output() public mayGoToGamePageEvent = new EventEmitter();

    // dane uzytkownika
    public playerName: string = '';
    public playerId: string = '';

    public setPlayerName(name: string) {
        this.playerName = name;
        this.fireEventMayGoToGamePage();
    }

    public setPlayerId(id: string) {
        this.playerId = id;
        this.fireEventMayGoToGamePage();
    }

    public isNameOk() {
        return this.playerName.trim().match(/^[a-zA-Z ,.'-]+$/);
    }

    public isIdOk() {
        console.log(this._highScoresService.isTokenCorrect(this.playerId));
        return this.playerId.trim() !== "";
    }

    public mayGoToGamePage(): boolean {
        if (this.isNameOk() && this.isIdOk()) {
            return true;
        }
        return false;
    }

    public fireEventMayGoToGamePage() {
        let goToPage: boolean = this.mayGoToGamePage();
        this._playerDataService.setPlayerData(this.playerName,
            this.playerId);
        this.mayGoToGamePageEvent.emit(goToPage);
    }

    ngOnInit() {
    }

}
