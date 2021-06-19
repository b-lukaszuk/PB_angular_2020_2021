import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAuthToken } from './authToken'

@Injectable({
    providedIn: 'root'
})
export class PlayerDataService {

    constructor(private _http: HttpClient) { }

    private _checkTokenUrl: string = "http://tetris.chrum.it/check-token";
    private _headersForTokenAuth: HttpHeaders = new HttpHeaders({
        "Accept": "application/json",
        'Content-Type': 'application/json',
    });
    private _name: string = "a";
    private _playerId: string = "123";

    public getPlayerData() {
        return {
            'playerName': this._name,
            'playerId': this._playerId
        };
    }

    public setPlayerData(name: string, id: string) {
        this._name = name;
        this._playerId = id;
    }

    // prawidlowy token to 4 dowolne cyfry, np. "1234"
    // do skonczenia, cos nie dziala tak jak trzeba
    public isTokenCorrect(token): Promise<void | boolean> {
        console.log("checking token", token);
        const request: Object = { "auth-token": token };
        return this._http.post<IAuthToken>(this._checkTokenUrl,
            request,
            { headers: this._headersForTokenAuth })
            .toPromise()
            .then((data) => {
                console.log("service", data["success"]);
                return data["success"];
            })
            .catch((err) => {
                console.log(err);
            })
    }
}
