import { Component, OnInit } from '@angular/core';
import { IHighScore } from '../highScore';
import { HighScoresService } from 'src/app/high-scores.service';
import { HighScoresSortPipe } from './high-scores-sort.pipe';

@Component({
    selector: 'high-scores',
    templateUrl: './high-scores.component.html',
    styleUrls: ['./high-scores.component.css']
})
export class HighScoresComponent implements OnInit {

    constructor(private _highScoresServide: HighScoresService) { }

    public highScores: IHighScore[] = [];
    public sortAsc: boolean = false;

    public toggleSortAsc() {
        this.sortAsc = !this.sortAsc;
    }

    ngOnInit(): void {
        this._highScoresServide.getHighScores()
            .subscribe((data) => { this.highScores = data });
    }

}
