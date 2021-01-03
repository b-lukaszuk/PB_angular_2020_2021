import { Component } from '@angular/core';
import { Person } from './klasy/person'

@Component({
    selector: 'task4',
    templateUrl: './task4.component.html',
    styleUrls: ['./task4.component.css']
})

export class Task4Component {

    public maxOccup: number = 5;
    public warnColor: string = "black";
    public nameWarnMessage: string = (
	"please enter a name of a person" +
	    " in the correct form, i.e.\n" +
	    " latin letters, no digits, no special chars"
    );

    // ludzie i ich zainteresowania
    public people: Array<Person>= [];

    // dane aktualnie dodawanej/edytowanej osoby (default-y)
    public persNameToAdd: string = "";
    public choosenInterest: string = "angular";

    // lista zainteresowan mozliwych do wyboru
    public interests: Array<string> = ["angular", "vue.js", "react.js"];

    // baner do edycji danych jakiejs osoby (jego widocznosc)
    // 2 stany "none"|"block"
    // "none" - brak edycji, "block" - edycja w trakcie
    public persEdBanDispl: string = "none";

    // aktualnie edytowana osoba (inicjalizacja pusta osoba)
    public editedPerson: Person = new Person("", "");

    public enableDataEdition(id: number): void {
	this.persEdBanDispl = "block";
	this.editedPerson = this.people[id];
	// pola edycji domyslnie wypelnione aktualnymi wartosciami dla tej osoby
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

    private isNameOk(name: string): Boolean {
	// prosty test na wejsciu (wymagane zapobieganie empty rows)
	// imie osoby musi zawierac znaki a-z lub A-Z
	// i nie moze zawierac cyfr, i jeszcze paru znakow latwych
	// latwych do wpisania przy touch typing
	// nie chce mi sie rozszerzac tego na pozostale znaki
	return /[a-zA-Z]/.test(this.persNameToAdd) &&
	    !/[0-9,./;']/.test(this.persNameToAdd);
    }

    public changePersonData(person: Person) {
	if (!this.isNameOk(this.persNameToAdd)) {
	    alert(this.nameWarnMessage);
	} else {
	    person.setName(this.persNameToAdd);
	    person.setInterests(this.choosenInterest);
	}
	// zerujemy/default-ujemy stosowne pola
	this.persNameToAdd = "";
	this.choosenInterest = "angular";
	this.persEdBanDispl = "none";
    }

    public addPerson(): void {
	if (this.people.length === this.maxOccup) {
	    alert("Max occupancy has been reached. No more space left");
	} else if (!this.isNameOk(this.persNameToAdd)) {
	    alert(this.nameWarnMessage);
	} else {
	    this.people.push(
		new Person(this.persNameToAdd, this.choosenInterest)
	    );
	}
	// zerujemy/default-ujemy stosowne pola
	this.persNameToAdd = "";
	this.choosenInterest = "angular";
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

