"use strict";
exports.__esModule = true;
var z1_obj_item_1 = require("./z1_obj_item");
var z1_obj_lista_zakup_1 = require("./z1_obj_lista_zakup");
var item1 = new z1_obj_item_1.Item("milk", 1);
var item2 = new z1_obj_item_1.Item("bread", 2);
var list = new z1_obj_lista_zakup_1.Lista(item1, item2);
console.log("----------Shopping list----------");
list.printList();
