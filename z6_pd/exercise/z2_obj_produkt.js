"use strict";
exports.__esModule = true;
exports.Produkt = void 0;
var Produkt = /** @class */ (function () {
    function Produkt(name, price) {
        this.name = name;
        this.price = price;
    }
    Produkt.prototype.getName = function () {
        return this.name;
    };
    Produkt.prototype.getPrice = function () {
        return this.price;
    };
    return Produkt;
}());
exports.Produkt = Produkt;
