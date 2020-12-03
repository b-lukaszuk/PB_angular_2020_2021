class Item {
    private name: string;
    private amount: number;

    public constructor(name: string, amount: number) {
	this.name = name;
	this.amount = amount
    }

    public getName() {
	return this.name;
    }
    public getAmount() {
	return this.amount;
    }
}

export {Item}
