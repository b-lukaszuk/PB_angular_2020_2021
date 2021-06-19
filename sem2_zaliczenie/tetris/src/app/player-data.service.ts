import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PlayerDataService {

    constructor() { }
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
}
