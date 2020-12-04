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
    Lista.prototype.printList = function () {
        var totalAmt = 0;
        for (var _i = 0, _a = this.produkty; _i < _a.length; _i++) {
            var item = _a[_i];
            console.log(item.getName() + " x " + item.getAmount());
            totalAmt += item.getAmount();
        }
        console.log("Things to buy: " + totalAmt);
    };
    return Lista;
}());
exports.Lista = Lista;
