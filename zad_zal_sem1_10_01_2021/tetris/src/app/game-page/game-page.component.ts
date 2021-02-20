import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    ViewChild,
} from '@angular/core';
import { TetrisCoreComponent } from 'ngx-tetris';

import { DisplayOption } from '../enums/DisplayOptions';
import { HistoryItem } from './historyItem/historyItem';

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

    public previousGameStatus: string = '';
    public gameStatusDesc: string = 'ready';
    public points: number = 0;

    public exitGameButton(agreed: boolean) {
        this.resetGame();
        this.playerName = '';
        this.playerEmail = '';
        this.clicked.emit({
            agreed: !agreed, // funkcj w app.ts oczekuje false-a
            playerName: '',
            playerEmail: '',
        });
    }

    public startGame() {
        this._tetris.actionStart();
        this.previousGameStatus = this.gameStatusDesc;
        this.gameStatusDesc = 'started';
        this.startTimer();
        this.addItemToHistory(
            new HistoryItem(
                this.seconds,
                this.secsToMins(this.seconds),
                this.gameStatusDesc
            )
        );
    }

    public stopGame() {
        this._tetris.actionStop();
        this.previousGameStatus = this.gameStatusDesc;
        this.gameStatusDesc = 'paused';
        this.stopTimer();
        this.addItemToHistory(
            new HistoryItem(
                this.seconds,
                this.secsToMins(this.seconds),
                this.gameStatusDesc
            )
        );
    }

    public resetGame() {
        this._tetris.actionReset();
        this.stopTimer();
        this.previousGameStatus = this.gameStatusDesc;
        this.gameStatusDesc = 'ready';
        this.seconds = 0;
        this.time = this.secsToMins(this.seconds);
        // lista obiektow {timeSecs: xxx, timestamp: xxx, actionName: xxx}
        this.history = [];
    }

    public onLineCleared() {
        this.points += 100;
        this.addItemToHistory(
            new HistoryItem(
                this.seconds,
                this.secsToMins(this.seconds),
                'line cleared'
            )
        );
    }

    // timery za:
    // https://www.tutorialrepublic.com/javascript-tutorial/javascript-timers.php

    // time in seconds
    public seconds: number = 0;
    public time: string = this.secsToMins(this.seconds);

    public secsToMins(seconds: number): string {
        let mins: number = Math.floor(seconds / 60);
        let secs: number = seconds % 60;
        return (
            mins.toString().padStart(2, '0') + ':' + secs.toString().padStart(2, '0')
        );
    }

    // id timera, aby go zatrzymywac i uruchamiac
    public timeoutId;

    public startTimer() {
        this.timeoutId = setInterval(() => {
            this.seconds += 1;
            this.time = this.secsToMins(this.seconds);
        }, 1000);
    }

    public stopTimer() {
        clearTimeout(this.timeoutId);
    }

    // tablica obiektow {timestamp: xxx, actionName: xxx}
    public history: Array<Object> = [];

    public showHistory() {
        console.log(this.history);
        console.log(this.history.length);
    }

    public sortingOrder: string = 'A-Z';

    public sortByTimestamp() {
        if (this.gameStatusDesc === 'started') {
            this.stopGame();
            alert('Game Paused. Sort performed');
        } else if (this.sortingOrder === 'A-Z') {
            this.history = this.history.sort(
                (item1: HistoryItem, item2: HistoryItem) => {
                    return item1.getSecs() - item2.getSecs();
                }
            );
            this.sortingOrder = 'Z-A';
        } else {
            this.history = this.history.sort(
                (item1: HistoryItem, item2: HistoryItem) => {
                    return item2.getSecs() - item1.getSecs();
                }
            );
            this.sortingOrder = 'A-Z';
        }
    }

    public addItemToHistory(item: HistoryItem) {
        if (this.gameStatusDesc !== this.previousGameStatus) {
            // na przycisku jest Z-A (czyli po tym dopiero bedziemy sortowac)
            // to dajemy aktyalny sort A-Z
            if (this.sortingOrder === 'Z-A') {
                this.history = [...this.history, item];
            } else {
                this.history = [item, ...this.history];
            }
        }
    }

    ngOnInit(): void {
        this.playerName = '';
        this.playerEmail = '';
        this.seconds = 0;
        this.time = this.secsToMins(this.seconds);
        this.history = [];
        console.log(this.history);
    }
}
