import {Item} from "./z1_obj_item";

const item1: Item = new Item("milk", 1);
const item2: Item = new Item("bread", 2);

const list: Array<Item> = [item1, item2];

function printList(list: Array<Item>): void {
    let total: number = 0;
    for (const item of list) {
	console.log(item.getName() + " x " + item.getAmount());
	total += item.getAmount();
    }
    console.log("Things to buy: " + total);
}

console.log("----------Shopping list----------");
printList(list);
