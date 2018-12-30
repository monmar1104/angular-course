import { Component, OnInit } from '@angular/core';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  empl1 = new Employee('Marcin', 'Pastwa', 42);
  empl2 = new Employee('Monika', 'Pastwa', 40);
  empl3 = new Employee('Marta', 'Pastwa', 16);
  empl4 = new Employee('Maciej', 'Pastwa', 12);

  employees = [this.empl1, this.empl2, this.empl3, this.empl4];

  employeesArray = new Array<Employee>();

  isVisible = true;

  show() {
    this.isVisible = true;
  }

  hide() {
    this.isVisible = false;
  }

  constructor() {
    this.employeesArray.push(this.empl1, this.empl2, this.empl3, this.empl4);
  }
}

class Employee {
  constructor(public name: string, public surename: string, public age: number, public gender?: string) {
  }
}
