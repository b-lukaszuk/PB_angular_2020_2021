import { Component, OnInit } from '@angular/core';

enum DisplayOption {
    Yes = "block",
    No = "none"
};

@Component({
    selector: 'game-page',
    templateUrl: './game-page.component.html',
    styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {

    constructor() { }

    public displayMe: DisplayOption = DisplayOption.Yes;

    ngOnInit(): void {
    }

}
