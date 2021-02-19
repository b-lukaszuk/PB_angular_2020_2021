import { Component, OnInit, Input } from '@angular/core';

import { DisplayOption } from '../enums/DisplayOptions'

@Component({
    selector: 'game-page',
    templateUrl: './game-page.component.html',
    styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {

    constructor() { }

    // czy wyswietlic dany komponent
    @Input() displayMe: DisplayOption;

    ngOnInit(): void {
    }

}
