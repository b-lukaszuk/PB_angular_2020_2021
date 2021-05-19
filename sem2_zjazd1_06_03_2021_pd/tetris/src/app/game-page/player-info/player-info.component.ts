import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'player-info',
    templateUrl: './player-info.component.html',
    styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
    @Input() playerName: string;
    @Input() playerEmail: string;

    constructor() { }

    ngOnInit(): void {
    }

}
