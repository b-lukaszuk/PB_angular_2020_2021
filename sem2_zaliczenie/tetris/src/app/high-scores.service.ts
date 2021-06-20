import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHighScore } from './highScore';

@Injectable({
    providedIn: 'root'
})
export class HighScoresService {

    private _scoresUrl: string = "http://tetris.chrum.it/scores";
    private _headersForScores: HttpHeaders = new HttpHeaders({
        "Accept": "application/json",
        'Content-Type': 'application/json',

    });

    constructor(private _http: HttpClient) { }

    public getHighScores(): Observable<IHighScore[]> {
        return this._http.get<IHighScore[]>(this._scoresUrl,
            {
                headers: this._headersForScores
            });
    }

    public pushToHighScores(newScore: IHighScore): Observable<IHighScore[]> {
        console.log("high-score service pushing to server", newScore);
        return this._http.post<IHighScore[]>(this._scoresUrl, newScore,
            { headers: this._headersForScores });
    }
}
