"use strict";
exports.__esModule = true;
exports.Lista = void 0;
// lista zakupowa
var Lista = /** @class */ (function () {
    function Lista() {
        var lista = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            lista[_i] = arguments[_i];
        }
        this.produkty = lista;
    }
    Lista.prototype.getTotPrice = function () {
        var totPrice = this.produkty.reduce(function (acc, produkt) { return acc + produkt.getPrice(); }, 0);
        return totPrice;
    };
    Lista.prototype.getProducts = function () {
        // dodano wciecia przy kazdym wylistowanym produkcie
        return "\t" + this.produkty.
            map(function (produkt) { return produkt.getName(); })
            .join("\n\t");
    };
    return Lista;
}());
exports.Lista = Lista;
