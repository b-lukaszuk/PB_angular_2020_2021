import {Item} from "./z1_obj_item";
import {Lista} from "./z1_obj_lista_zakup";

const item1: Item = new Item("milk", 1);
const item2: Item = new Item("bread", 2);

const list: Lista = new Lista(item1, item2)

console.log("----------Shopping list----------");
list.printList();
