import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PlayerDataService } from './player-data.service';

@Injectable({
    providedIn: 'root'
})
export class PlayerDataGuardGuard implements CanActivate {

    constructor(private _playerDataService: PlayerDataService,
        private _router: Router) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        // https://juristr.com/blog/2018/11/better-route-guard-redirects/#blocking-is-not-enough
        if (this._playerDataService.isPlayerOk()) {
            return true;
        } else {
            this._router.navigateByUrl("/introPage");
            alert("Access denied. Please log in");
            return false;
        }
    }

}
