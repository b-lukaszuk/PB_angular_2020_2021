import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'intro-page',
    templateUrl: './intro-page.component.html',
    styleUrls: ['./intro-page.component.css'],
})
export class IntroPageComponent implements OnInit {
    constructor() { }

    @Output() clicked = new EventEmitter<Object>();

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
            this.clicked.emit({
                agreed: true,
                playerName: this.playerName,
                playerEmail: this.playerEmail,
            });
            return true;
        }
        return false;
    }

    ngOnInit(): void { }
}
