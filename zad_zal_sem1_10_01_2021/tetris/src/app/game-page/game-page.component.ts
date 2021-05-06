import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    ViewChild,
} from '@angular/core';
import { TetrisCoreComponent } from 'ngx-tetris';

import { HistoryItem } from './historyItem/historyItem';
import { HistoryFilterPipe } from './history-filter.pipe';

@Component({
    selector: 'game-page',
    templateUrl: './game-page.component.html',
    styleUrls: ['./game-page.component.css'],
})
export class GamePageComponent implements OnInit {
    constructor() { }
    //////////////
    // Inputy
    //////////////
    @Input() playerName: string;
    @Input() playerEmail: string;

    //////////////
    // Outputy
    //////////////
    @Output() clicked = new EventEmitter<Object>();

    //////////////
    // Podgladanie dziecka
    //////////////
    @ViewChild(TetrisCoreComponent)
    private _tetris: TetrisCoreComponent;

    //////////////
    // Pola w klasie (do zast ktore public, ktore private)
    //////////////
    public previousGameStatus: string = '';
    public gameStatusDesc: string = 'ready';
    public points: number = 0;
    // wybrany filter z historii
    public hItemSelect = 'all';
    // do wyswietlenia w selekcie filtru historii
    public allowedHistoryEntries: Array<string> = [
        'all',
        'started',
        'paused',
        'line cleared',
    ];
    // time in seconds
    public seconds: number = 0;
    public time: string = this.secsToMins(this.seconds);
    // id timera, aby go zatrzymywac i uruchamiac
    public timeoutId;
    // tablica obiektow {timestamp: xxx, actionName: xxx}
    public history: Array<Object> = [];
    public sortAZ: boolean = false;

    //////////////
    // Metody w kalsie (do zast ktore public, ktore private)
    //////////////
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
        this.points = 0;
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

    public onGameOver() {
        this.stopTimer();
        alert('Game over. Press OK to start again');
        this.resetGame();
    }

    // timery za:
    // https://www.tutorialrepublic.com/javascript-tutorial/javascript-timers.php
    public secsToMins(seconds: number): string {
        let mins: number = Math.floor(seconds / 60);
        let secs: number = seconds % 60;
        return (
            mins.toString().padStart(2, '0') + ':' + secs.toString().padStart(2, '0')
        );
    }

    public startTimer() {
        this.timeoutId = setInterval(() => {
            this.seconds += 1;
            this.time = this.secsToMins(this.seconds);
        }, 1000);
    }

    public stopTimer() {
        clearTimeout(this.timeoutId);
    }

    public sortByTimestamp() {
        if (this.gameStatusDesc === 'started') {
            this.stopGame();
            alert('Game Paused. Sort performed');
        } else if (this.sortAZ) {
            this.history = this.history.sort(
                (item1: HistoryItem, item2: HistoryItem) => {
                    return item1.getSecs() - item2.getSecs();
                }
            );
            this.sortAZ = !this.sortAZ;
        } else {
            this.history = this.history.sort(
                (item1: HistoryItem, item2: HistoryItem) => {
                    return item2.getSecs() - item1.getSecs();
                }
            );
            this.sortAZ = !this.sortAZ;
        }
    }

    public addItemToHistory(item: HistoryItem) {
        if (this.gameStatusDesc !== this.previousGameStatus) {
            // na przycisku jest Z-A (czyli po tym dopiero bedziemy sortowac)
            // to dajemy aktyalny sort A-Z
            if (!this.sortAZ) {
                this.history = [...this.history, item];
            } else {
                this.history = [item, ...this.history];
            }
        }
    }

    ngOnInit(): void {
        this.seconds = 0;
        this.time = this.secsToMins(this.seconds);
        this.history = [];
    }
}
