import {Component} from '@angular/core';

@Component({
    selector: 'task3',
    templateUrl: './task3.component.html'
})
export class Task3Component {
    public maxOccup: number = 5;
    public curOccup: number = 0;
    public warnColor: string = "";
    public people: Array<[number, string]>= [];
    public persToAdd: string = "";

    private updteOccupancy(): void {
	this.curOccup = this.people.length;
    }

    public addPerson(): void {
	if (this.curOccup === this.maxOccup) {
	    alert("Max occupancy has been reached. No more space left");
	} else if (!/[a-zA-Z]/.test(this.persToAdd)) {
	    alert("please enter the name of a person");
	} else {
	    this.people.push(
		[this.people.length,
		 this.persToAdd]
	    );
	}
	this.persToAdd = "";
	this.updteOccupancy();
    };

    public remPerson(id: number): void {
	this.people = this.people.filter((p) => p[0] !== id);
	this.updteOccupancy();
    };

    public remAllPeople(): void {
	this.people = [];
	this.updteOccupancy();
    }

    public getColor(): string {
	if (this.curOccup === this.maxOccup) {
	    this.warnColor = "red";
	} else if (this.curOccup >= (this.maxOccup - 3)) {
	    this.warnColor = "orange";
	} else {
	    this.warnColor = "black";
	}
	return this.warnColor;
    }
}

