import {Component} from '@angular/core';

@Component({
    selector: 'task3',
    templateUrl: './task3.component.html',
    styleUrls: ['./task3.component.css']
})
export class Task3Component {
    public maxOccup: number = 5;
    public warnColor: string = "black";
    public people: Array<string>= [];
    public persToAdd: string = "";

    public addPerson(): void {
	if (this.people.length === this.maxOccup) {
	    alert("Max occupancy has been reached. No more space left");
	} else if (
	    // prosty test na wejsciu (wymagane zapobieganie empty rows)
	    // imie osoby musi zawierac znaki a-z lub A-Z
	    // i nie moze zawierac cyfr,
	    // nie chce mi sie rozszerzac tego na pozostale znaki
	    !/[a-zA-Z]/.test(this.persToAdd) ||
	    /[0-9]/.test(this.persToAdd)
		  ) {
	    alert("please enter a name of a person" +
		"in the correct form, i.e.\n" +
		"latin letters, no digits"
		);
	} else {
	    this.people.push(this.persToAdd);
	}
	this.persToAdd = "";
	this.updateWarnColor();
    };

    public remPerson(id: number): void {
	this.people.splice(id, 1); // array.splice() - zmiana inplace
	this.updateWarnColor();
    };

    public remAllPeople(): void {
	this.people = [];
	this.updateWarnColor();
    }

    private updateWarnColor(): void {
	if (this.people.length === this.maxOccup) {
	    this.warnColor = "red";
	} else if (this.people.length >= (this.maxOccup - 3)) {
	    this.warnColor = "orange";
	} else {
	    this.warnColor = "black";
	}
    }
}

