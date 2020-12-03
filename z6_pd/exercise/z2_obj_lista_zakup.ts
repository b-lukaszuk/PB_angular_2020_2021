import {Produkt} from "./z2_obj_produkt"

// lista zakupowa
class Lista {
    private produkty: Array<Produkt>;

    public constructor(...lista: Array<Produkt>) {
	this.produkty = lista;
    }

    public getTotPrice(): number {
	let totPrice: number = this.produkty.reduce(
	    (acc, produkt) => acc + produkt.getPrice(), 0);
	return totPrice;
    }

    public getProducts(): string {
	// dodano wciecia przy kazdym wylistowanym produkcie
	return "\t" + this.produkty.
	    map(produkt => produkt.getName())
		.join("\n\t");
	
    }
}

export {Lista}
