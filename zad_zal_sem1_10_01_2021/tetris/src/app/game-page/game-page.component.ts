import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { TetrisCoreComponent } from "ngx-tetris";

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

    // podgladanie stanu tetrisag
    @ViewChild(TetrisCoreComponent)
    private _tetris: TetrisCoreComponent;

    public gameStatusDesc: string = "ready";
    public points: number = 0;

    public exitGameButton(agreed: boolean) {
        this._tetris.actionStop();
        this._tetris.actionReset();
        this.clicked.emit({
            agreed: !agreed, // funkcj w app.ts oczekuje false-a
            playerName: '',
            playerEmail: '',
        });
    };


    public zobacz() {
        console.log(this._tetris.state);
    }

    public startGame() {
        this._tetris.actionStart()
        this.gameStatusDesc = "started";
    }

    public stopGame() {
        this._tetris.actionStop()
        this.gameStatusDesc = "paused";
    }

    public resetGame() {
        this._tetris.actionReset()
        this.gameStatusDesc = "ready";
    }

    public drukujStatus() {
        setInterval(() => {
            console.log(this._tetris.state)
        }, 1)
    };

    public onLineCleared() {
        console.log("line cleared");
        this.points += 100;
    }

    ngOnInit(): void {
        // setInterval(this.drukujStatus, 500);
    }
}
