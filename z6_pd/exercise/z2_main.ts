import {Produkt} from "./z2_obj_produkt";
import {Lista} from "./z2_obj_lista_zakup";
import {Adres} from "./z2_obj_adres"
import {Zamowienie} from "./z2_obj_zamowienie"

/**
 * Create list of products
 */
const produkt1: Produkt = new Produkt("bread", 1);
const produkt2: Produkt = new Produkt("milk", 12);

const list: Lista = new Lista(produkt1, produkt2);

/**
 * Create address
 */
const adres = new Adres("Saturna", 1222, "Poland");

/**
 * Create order
 */
const order = new Zamowienie(list, adres);

/**
 * Making order
 */
console.log("\n----------------Order summary-------------");
console.log("Shipping address:");
console.log(order.getAdres());

console.log("\nProducts list:");
console.log(order.getProducts());

console.log("\nTotal order price:");
console.log("\t" + order.getTotPrice().toString());
