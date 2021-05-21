import { Component, OnInit, Input } from '@angular/core';
import { PlayerDataService } from 'src/app/player-data.service';

@Component({
    selector: 'player-info',
    templateUrl: './player-info.component.html',
    styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
    public playerName: string;
    public playerEmail: string;

    constructor(private _playerDataService: PlayerDataService) { }

    ngOnInit() {
        let playerData = this._playerDataService.getPlayerData();
        this.playerName = playerData.playerName;
        this.playerEmail = playerData.playerEmail;
    }

}
