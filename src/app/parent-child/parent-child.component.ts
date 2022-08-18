import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css'],
})
export class ParentChildComponent implements OnInit {
  data = 'This value will change after updating Data!';

  updateData(item: string) {
    console.warn(item);
    this.data = item;
  }
  constructor() {}

  ngOnInit(): void {}
}
