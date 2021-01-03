class Person {
    private name: string;
    private interests: string;

    public constructor(name: string, interests: string) {
	this.name = name;
	this.interests = interests;
    }

    public getName(): string {
	return this.name;
    }

    public setName(name: string): void {
	this.name = name;
    }

    public getInterests(): string {
	return this.interests;
    }

    public setInterests(interests: string): void {
	this.interests = interests;
    }
}

export { Person }
