class Adres {
    private streetName: string;
    private postCode: number;
    private country: string;

    public constructor(streetName: string,
		       postCode: number,
		       country: string) {
	this.streetName = streetName;
	this.postCode = postCode;
	this.country = country;
    }
    public getAdres(): string {
	// dodano wciecia przy kazdym wylistowanym polu adresu
	return "\t" + [this.streetName, this.postCode,
		       this.country].join("\n\t");
    }
}

export {Adres}
