import {Component} from '@angular/core';

@Component({
    selector: 'task4',
    templateUrl: './task4.component.html'
})
export class Task4Component {
    public maxOccup: number = 5;
    public curOccup: number = 0;
    public warnColor: string = "";
    // id, name, interests, editable
    public people: Array<[number, string, string, false]>= [];
    public persToAdd: string = "";
    public choosenInterest: string = "angular";
    public interests: Array<string> = ["angular", "vue.js", "react.js"];
    public noweImie: any = "";

    private updteOccupancy(): void {
	this.curOccup = this.people.length;
    }

    public editName(id: number): void {
	for (let i = 0; i < this.people.length; i++) {
	    if (this.people[i][0] === id) {
		this.noweImie = window.prompt("Podaj nowe imie: ", "tomek");
		this.people[i][1] = this.noweImie;
	    }
	}
    }

    public addPerson(): void {
	if (this.curOccup === this.maxOccup) {
	    alert("Max occupancy has been reached. No more space left");
	} else if (!/[a-zA-Z]/.test(this.persToAdd)) {
	    alert("please enter the name of a person");
	} else {
	    this.people.push(
		[this.people.length,
		 this.persToAdd,
		 this.choosenInterest,
		false]
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

