import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PlayerDataService } from 'src/app/player-data.service';

@Component({
    selector: 'player-form',
    templateUrl: './player-form.component.html',
    styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {

    constructor(private _playerDataService: PlayerDataService) { }

    @Output() public mayGoToGamePageEvent = new EventEmitter();

    // dane uzytkownika
    public playerName: string = '';
    public playerEmail: string = '';

    public setPlayerName(name: string) {
        this.playerName = name;
        this.fireEventMayGoToGamePage();
    }

    public setPlayerEmail(email: string) {
        this.playerEmail = email;
        this.fireEventMayGoToGamePage();
    }

    public isNameOk() {
        return this.playerName.trim().match(/^[a-zA-Z ,.'-]+$/);
    }

    public isEmailOk() {
        return this.playerEmail.trim().match(/^[^@]+@[^@]+\.[^@]+$/);
    }

    public mayGoToGamePage(): boolean {
        if (this.isNameOk() && this.isEmailOk()) {
            return true;
        }
        return false;
    }

    public fireEventMayGoToGamePage() {
        let goToPage: boolean = this.mayGoToGamePage();
        this._playerDataService.setPlayerData(this.playerName,
            this.playerEmail);
        this.mayGoToGamePageEvent.emit(goToPage);
    }

    ngOnInit() {
    }

}
