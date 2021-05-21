import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PlayerDataService {

    constructor() { }
    private _name: string = "a";
    private _email: string = "a@k.z";

    public getPlayerData() {
        return {
            'playerName': this._name,
            'playerEmail': this._email
        };
    }

    public setPlayerData(name: string, email: string) {
        this._name = name;
        this._email = email;
    }
}
