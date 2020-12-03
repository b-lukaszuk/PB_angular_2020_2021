"use strict";
exports.__esModule = true;
exports.Zamowienie = void 0;
// lista zakupowa
var Zamowienie = /** @class */ (function () {
    function Zamowienie(lista, adres) {
        this.shippingPrice = 10;
        this.produkty = lista;
        this.adres = adres;
    }
    Zamowienie.prototype.getTotPrice = function () {
        return this.produkty.getTotPrice() + this.shippingPrice;
    };
    Zamowienie.prototype.getAdres = function () {
        return this.adres.getAdres();
    };
    Zamowienie.prototype.getProducts = function () {
        return this.produkty.getProducts();
    };
    return Zamowienie;
}());
exports.Zamowienie = Zamowienie;
