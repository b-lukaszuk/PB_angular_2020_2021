import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHighScore } from './highScore';
import { IAuthToken } from './authToken'

@Injectable({
    providedIn: 'root'
})
export class HighScoresService {

    private _scoresUrl: string = "http://tetris.chrum.it/scores";
    private _checkTokenUrl: string = "http://tetris.chrum.it/check-token";
    private _headersForScores: HttpHeaders = new HttpHeaders({
        "accept": "application/json"
    });

    constructor(private _http: HttpClient) { }

    public getHighScores(): Observable<IHighScore[]> {
        return this._http.get<IHighScore[]>(this._scoresUrl,
            {
                headers: this._headersForScores
            });
    }

    public pushToHighScores(newScore: IHighScore): void {
        this._http.post(this._scoresUrl, newScore,
            { headers: this._headersForScores });
    }

    // prawidlowy token to 4 dowolne cyfry, np. "1234"
    // do skonczenia, cos nie dziala tak jak trzeba
    public isTokenCorrect(token: string): Observable<IAuthToken> {
        console.log("checking token", token);
        return this._http.post<IAuthToken>(this._checkTokenUrl,
            { "auth-token": token });
    }

}
