"use strict";
exports.__esModule = true;
var z2_obj_produkt_1 = require("./z2_obj_produkt");
var z2_obj_lista_zakup_1 = require("./z2_obj_lista_zakup");
var z2_obj_adres_1 = require("./z2_obj_adres");
var z2_obj_zamowienie_1 = require("./z2_obj_zamowienie");
/**
 * Create list of products
 */
var produkt1 = new z2_obj_produkt_1.Produkt("bread", 1);
var produkt2 = new z2_obj_produkt_1.Produkt("milk", 12);
var list = new z2_obj_lista_zakup_1.Lista(produkt1, produkt2);
/**
 * Create address
 */
var adres = new z2_obj_adres_1.Adres("Saturna", 1222, "Poland");
/**
 * Create order
 */
var order = new z2_obj_zamowienie_1.Zamowienie(list, adres);
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
