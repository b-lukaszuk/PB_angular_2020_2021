import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'player-form',
    templateUrl: './player-form.component.html',
    styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent {

    constructor() { }

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
        this.mayGoToGamePageEvent.emit(goToPage);
    }

}
