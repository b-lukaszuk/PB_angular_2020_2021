import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { DisplayOption } from '../enums/DisplayOptions';

@Component({
    selector: 'landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
    constructor() { }

    // czy wyswietlic dany komponent
    @Input() displayMe: DisplayOption;

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

    public enterGameButton(agreed: boolean) {
        if (!this.isNameOk(this.playerName) && !this.isEmailOk(this.playerEmail)) {
            alert('please enter correct player data, i.e. name and email');
        } else if (!this.isNameOk(this.playerName)) {
            alert('please enter correct player name');
        } else if (!this.isEmailOk(this.playerEmail)) {
            alert('please enter valid email');
        } else {
            this.clicked.emit({
                agreed: agreed,
                playerName: this.playerName,
                playerEmail: this.playerEmail,
            });
        }
    }

    ngOnInit(): void { }
}
