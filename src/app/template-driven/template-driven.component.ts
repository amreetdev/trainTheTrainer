import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css'],
})
export class TemplateDrivenComponent implements OnInit {
  ngForm: any;
  constructor() {}

  ngOnInit(): void {}

  // submitInfo() {
  //   if (this.ngForm.valid) {
  //     console.log('Form Submitted!');
  //     this.ngForm.reset();
  //   }
  // }
  submitInfo(item: any) {
    console.log(item);
  }
}
