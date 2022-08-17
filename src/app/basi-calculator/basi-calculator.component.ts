import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basi-calculator',
  templateUrl: './basi-calculator.component.html',
  styleUrls: ['./basi-calculator.component.css'],
})
export class BasiCalculatorComponent implements OnInit {
  input1!: any;
  input2!: any;
  result!: any;

  add() {
    this.result = this.input1 + this.input2;
  }

  substract() {
    this.result = this.input1 - this.input2;
  }
  multiply() {
    this.result = this.input1 * this.input2;
  }
  divide() {
    this.result = this.input1 / this.input2;
  }
  constructor() {}

  ngOnInit(): void {}
}
