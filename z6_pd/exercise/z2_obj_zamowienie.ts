import {Lista} from "./z2_obj_lista_zakup";
import {Adres} from "./z2_obj_adres";

// lista zakupowa
class Zamowienie {
    private produkty: Lista;
    private adres: Adres;
    private shippingPrice = 10;

    public constructor(lista: Lista, adres: Adres) {
	this.produkty = lista;
	this.adres = adres;
    }

    public getTotPrice(): number {
	return this.produkty.getTotPrice() + this.shippingPrice;
    }

    public getAdres(): string {
        return this.adres.getAdres();
    }
    
    public getProducts(): string {
        return this.produkty.getProducts();
    }
}

export {Zamowienie}
