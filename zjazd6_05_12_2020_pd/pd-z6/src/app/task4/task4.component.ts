import { Component } from '@angular/core';
import { Person } from './klasy/person'

@Component({
    selector: 'task4',
    templateUrl: './task4.component.html'
})
export class Task4Component {

    public maxOccup: number = 5;
    public warnColor: string = "black";

    // ludzie i ich zainteresowania
    public people: Array<Person>= [];

    // dane aktualnie dodawanej osoby
    public persNameToAdd: string = "";
    public choosenInterest: string = "angular";

    // lista zainteresowan mozliwych do wyboru
    public interests: Array<string> = ["angular", "vue.js", "react.js"];

    // czy aktualnie jest edytowana jakas osoba 
    public persEdBanDispl: string = "none";

    // edytowana osoba
    public editedPerson: Person = new Person("", "");
    public editedPersonId: number = 0;

    public enableDataEdition(id: number): void {
	this.persEdBanDispl = "block";
	this.editedPerson = this.people[id];
	this.editedPersonId = id;
	this.persNameToAdd = this.editedPerson.getName();
	this.choosenInterest = this.editedPerson.getInterests();
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

    public changePersonData(id: number) {
	if (
	    // prosty test na wejsciu (wymagane zapobieganie empty rows)
	    // imie osoby musi zawierac znaki a-z lub A-Z
	    // i nie moze zawierac cyfr,
	    // nie chce mi sie rozszerzac tego na pozostale znaki
	    !/[a-zA-Z]/.test(this.persNameToAdd) ||
		/[0-9]/.test(this.persNameToAdd)
	) {
	    alert("please enter a name of a person" +
		"in the correct form, i.e.\n" +
		"latin letters, no digits"
		 );
	} else {
	    this.people[id].setName(this.persNameToAdd);
	    this.people[id].setInterests(this.choosenInterest);
	}
	this.persNameToAdd = "";
	this.persEdBanDispl = "none";
    }

    public addPerson(): void {
	if (this.people.length === this.maxOccup) {
	    alert("Max occupancy has been reached. No more space left");
	} else if (
	    // prosty test na wejsciu (wymagane zapobieganie empty rows)
	    // imie osoby musi zawierac znaki a-z lub A-Z
	    // i nie moze zawierac cyfr,
	    // nie chce mi sie rozszerzac tego na pozostale znaki
	    !/[a-zA-Z]/.test(this.persNameToAdd) ||
		/[0-9]/.test(this.persNameToAdd)
	) {
	    alert("please enter a name of a person" +
		"in the correct form, i.e.\n" +
		"latin letters, no digits"
		 );
	} else {
	    this.people.push(
		new Person(this.persNameToAdd, this.choosenInterest)
	    );
	}
	this.persNameToAdd = "";
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

}

