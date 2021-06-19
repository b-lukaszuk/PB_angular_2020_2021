import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PlayerDataService } from 'src/app/player-data.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: 'player-form',
    templateUrl: './player-form.component.html',
    styleUrls: ['./player-form.component.css'],
})
export class PlayerFormComponent implements OnInit {
    constructor(private _playerDataService: PlayerDataService,
        private _router: Router, private _activatedRoute: ActivatedRoute) { }

    public colorPalettes = ["normal", "high-contrast"];
    public colorPalette = "";
    public colorOnSelect() {
        this._router.navigate(["/introPage", this.colorPalette]);
    }

    // dane uzytkownika
    public playerName: string = '';
    public playerId: string = '';

    public goToGamePageBtnActive: boolean = false;

    public setPlayerName(name: string): void {
        this.playerName = name;
        this.checkIfMayGoToGamePage();
    }

    public setPlayerId(id: string): void {
        this.playerId = id;
        this.checkIfMayGoToGamePage();
    }

    public isNameOk(): boolean {
        return this.playerName.trim() !== '';
    }

    public isIdOk(): boolean {
        return this.playerId.trim() !== '';
    }

    public login() {
        this._playerDataService.setPlayerData(this.playerName, this.playerId);
        this._playerDataService.isTokenCorrect(this.playerId)
            .then((res) => {
                if (res) {
                    // alert("login successful");
                    console.log("login successful");
                } else {
                    // alert("login failed");
                    console.log("login failed");
                }
            })
    }

    public checkIfMayGoToGamePage(): void {
        if (this.isNameOk() && this.isIdOk()) {
            this.goToGamePageBtnActive = true;
        } else {
            this.goToGamePageBtnActive = false;
        }
    }

    ngOnInit() {
        this.colorPalette = this._activatedRoute.snapshot.paramMap.get("color");
        this._playerDataService.setPlayerData("", "");
    }

    ngOnDestroy() {
        this._playerDataService.setPlayerData(this.playerName, this.playerId);
    }
}
