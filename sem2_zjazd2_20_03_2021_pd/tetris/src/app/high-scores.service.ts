import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHighScore } from './highScore';

@Injectable({
    providedIn: 'root'
})
export class HighScoresService {

    private _scoresUrl: string = "http://tetris.chrum.it/scores";
    private _headersForGetScores: HttpHeaders = new HttpHeaders({
        "accept": "application/json"
    });

    constructor(private _http: HttpClient) { }

    public getHighScores(): Observable<IHighScore[]> {
        return this._http.get<IHighScore[]>(this._scoresUrl,
            {
                headers: this._headersForGetScores
            });
    }

}
