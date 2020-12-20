import {Component} from '@angular/core';

@Component({
    selector: 'task2',
    templateUrl: './task2.component.html'
})
export class Task2Component {
    public maxOccup: number = 5;
    public curOccup: number = 0;
    public warnColor: string = "";

    public rmPerson(): void {
	if (this.curOccup > 0) {
	    this.curOccup -= 1;
	}
    }

    public addPerson(): void {
	if (this.curOccup === this.maxOccup) {
	    alert("Max occupancy has been reached. No more space left");
	} else {
	    this.curOccup += 1;
	}
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

