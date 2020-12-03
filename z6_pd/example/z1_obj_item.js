"use strict";
exports.__esModule = true;
exports.Item = void 0;
var Item = /** @class */ (function () {
    function Item(name, amount) {
        this.name = name;
        this.amount = amount;
    }
    Item.prototype.getName = function () {
        return this.name;
    };
    Item.prototype.getAmount = function () {
        return this.amount;
    };
    return Item;
}());
exports.Item = Item;
