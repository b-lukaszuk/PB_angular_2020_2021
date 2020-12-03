"use strict";
exports.__esModule = true;
exports.Adres = void 0;
var Adres = /** @class */ (function () {
    function Adres(streetName, postCode, country) {
        this.streetName = streetName;
        this.postCode = postCode;
        this.country = country;
    }
    Adres.prototype.getAdres = function () {
        // dodano wciecia przy kazdym wylistowanym polu adresu
        return "\t" + [this.streetName, this.postCode,
            this.country].join("\n\t");
    };
    return Adres;
}());
exports.Adres = Adres;
