"use strict";
exports.__esModule = true;
var z1_obj_item_1 = require("./z1_obj_item");
var item1 = new z1_obj_item_1.Item("milk", 1);
var item2 = new z1_obj_item_1.Item("bread", 2);
var list = [item1, item2];
function printList(list) {
    var total = 0;
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var item = list_1[_i];
        console.log(item.getName() + " x " + item.getAmount());
        total += item.getAmount();
    }
    console.log("Things to buy: " + total);
}
console.log("----------Shopping list----------");
printList(list);
