import {Component} from '@angular/core';

@Component({
    selector: 'task1',
    templateUrl: './task1.component.html'
})
export class Task1Component {
    public fname: string = "";
    public lname: string = "";
    public greet() {
	alert("witaj " + this.fname + " " + this.lname);
    }
    public bye() {
	alert("zegnaj " + this.fname + " " + this.lname);
	// additionally 
	this.fname = "";
	this.lname = "";
    }
}

