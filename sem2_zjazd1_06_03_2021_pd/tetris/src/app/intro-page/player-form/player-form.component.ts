import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'player-form',
    templateUrl: './player-form.component.html',
    styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {

    constructor() { }

    // dane uzytkownika
    public playerName: string = '';
    public playerEmail: string = '';

    private isNameOk(name: string) {
        return name.trim().match(/^[a-zA-Z ,.'-]+$/);
    }

    private isEmailOk(email: string) {
        return email.trim().match(/^[^@]+@[^@]+\.[^@]+$/);
    }

    public mayGoToGamePage(): boolean {
        if (this.isNameOk(this.playerName) && this.isEmailOk(this.playerEmail)) {
            return true;
        }
        return false;
    }

    ngOnInit(): void {

    }

}
