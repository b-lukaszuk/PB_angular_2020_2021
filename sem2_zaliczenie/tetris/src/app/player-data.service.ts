import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAuthToken } from './authToken'
import {
    pushDictToLocalStorage,
    getFromLocalStorage
} from "./utils/localStorage";

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
    private _name: string = getFromLocalStorage("playerName", "");
    private _playerId: string = getFromLocalStorage("playerId", "");

    public getPlayerData() {
        return {
            'playerName': this._name,
            'playerId': this._playerId
        };
    }

    public setPlayerData(name: string, id: string) {
        pushDictToLocalStorage({ "playerName": name, "playerId": id });
        this._name = name;
        this._playerId = id;
    }

    public isPlayerOk(): boolean {
        let result = this._name.trim() !== "" && this._playerId.trim() !== "";
        console.log("is player OK", result);
        return result;
    }

    public authentication(): Promise<void | boolean> {
        if (!this.isPlayerOk()) {
            return new Promise((resolve, reject) => { resolve(false) });
        } else {
            return this.isTokenCorrect(this._playerId);
        }
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
