class Item {
    private name: string;
    private amount: number;

    public constructor(name: string, amount: number) {
	this.name = name;
	this.amount = amount
    }

    public getName(): string {
	return this.name;
    }
    public getAmount(): number {
	return this.amount;
    }
}

export {Item}
