import { Component, OnInit, Input } from '@angular/core';

import { DisplayOption } from '../enums/DisplayOptions'

@Component({
    selector: 'landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
    // czy wyswietlic dany komponent
    @Input() displayMe: DisplayOption;
    @Input() playerName: string;
    @Input() playerEmail: string;

    constructor() { }


    ngOnInit(): void {
    }

}
