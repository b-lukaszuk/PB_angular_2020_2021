import {Item} from "./z1_obj_item"

// lista zakupowa
class Lista {
    private produkty: Array<Item>;

    public constructor(...lista: Array<Item>) {
	this.produkty = lista;
    }

    public printList(): void {
	let totalAmt = 0;
	for (const item of this.produkty) {
	    console.log(item.getName() + " x " + item.getAmount());
	    totalAmt += item.getAmount();
	}
	console.log("Things to buy: " + totalAmt);
    }
}

export {Lista}
