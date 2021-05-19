import { Pipe, PipeTransform } from '@angular/core';
import { HistoryItem } from "./historyItem/historyItem";

@Pipe({
    name: 'historyFilter'
})
export class HistoryFilterPipe implements PipeTransform {

    transform(historyItems: Array<HistoryItem>,
        searchTerm: string): Array<HistoryItem> {
        if (searchTerm === "all") {
            return historyItems;
        } else {
            return historyItems.filter((hItem) => {
                return hItem.getActionName() === searchTerm;
            })
        }
    }
}
