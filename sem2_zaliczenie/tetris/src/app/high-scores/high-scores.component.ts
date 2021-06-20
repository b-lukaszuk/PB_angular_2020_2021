import { Component, OnInit } from '@angular/core';
import { IHighScore } from '../highScore';
import { HighScoresService } from 'src/app/high-scores.service';
import { HighScoresSortPipe } from './high-scores-sort.pipe';
import { FilterByPlayerNamePipe } from "./filter-by-player-name.pipe"
import { PlayerDataService } from '../player-data.service';

@Component({
    selector: 'high-scores',
    templateUrl: './high-scores.component.html',
    styleUrls: ['./high-scores.component.css']
})
export class HighScoresComponent implements OnInit {

    constructor(private _highScoresService: HighScoresService,
        private _playerDataService: PlayerDataService) { }

    public highScores: IHighScore[] = [];
    public playerName: string = "";
    public playerScore: number = 0;
    public intervalId: any;

    public sortAsc: boolean = false;
    public applyFilterName = false;

    public toggleSortAsc() {
        this.sortAsc = !this.sortAsc;
    }

    public toggleFilterByName() {
        this.applyFilterName = !this.applyFilterName;
    }

    ngOnInit(): void {
        this.playerName = this._playerDataService.getPlayerName();
        this.playerScore = this._playerDataService.getPlayerScore();

        if (this.playerName.trim() !== "" && this.playerScore !== 0) {
            console.log("high-scores.comp pushing", this.playerName, this.playerScore);
            this._highScoresService
                .pushToHighScores({
                    "name": this.playerName,
                    "score": this.playerScore
                })
                .subscribe((data) => { console.log(data); });

        }
        this.intervalId = setInterval(() => {
            console.log("refreshing high scores list");
            this._highScoresService.getHighScores()
                .subscribe((data) => { this.highScores = data });
        }, 30000);
    }

    ngOnDestroy() {
        clearInterval(this.intervalId);
    }
}
