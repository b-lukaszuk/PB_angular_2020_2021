import { Pipe, PipeTransform } from '@angular/core';

import { IHighScore } from '../interfaces/highScore';

@Pipe({
    name: 'filterByPlayerName',
})
export class FilterByPlayerNamePipe implements PipeTransform {
    transform(
        highScores: IHighScore[],
        playerName: string,
        active: boolean
    ): IHighScore[] {
        console.log('filtering by name', playerName);
        if (!active) {
            return highScores;
        } else {
            let result = highScores.filter((score) => {
                console.log('testing name', score.name);
                return score.name === playerName;
            });
            return result;
        }
    }
}
