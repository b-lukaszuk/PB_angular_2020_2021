import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { DisplayOption } from '../enums/DisplayOptions';

@Component({
    selector: 'game-page',
    templateUrl: './game-page.component.html',
    styleUrls: ['./game-page.component.css'],
})
export class GamePageComponent implements OnInit {
    constructor() { }
    @Input() playerName: string;
    @Input() playerEmail: string;
    // czy wyswietlic dany komponent
    @Input() displayMe: DisplayOption;

    @Output() clicked = new EventEmitter<Object>();

    public exitGameButton(agreed: boolean) {
        this.clicked.emit({
            agreed: !agreed, // funkcj w app.ts oczekuje false-a
            playerName: '',
            playerEmail: '',
        });
    }

    ngOnInit(): void { }
}
