import { Component, OnInit } from '@angular/core';
import { IHighScore } from '../highScore';
import { HighScoresService } from 'src/app/high-scores.service';

@Component({
    selector: 'high-scores',
    templateUrl: './high-scores.component.html',
    styleUrls: ['./high-scores.component.css']
})
export class HighScoresComponent implements OnInit {

    constructor(private _highScoresServide: HighScoresService) { }

    public highScores: IHighScore[] = [];

    ngOnInit(): void {
        this._highScoresServide.getHighScores()
            .subscribe((data) => { this.highScores = data });
    }

}
