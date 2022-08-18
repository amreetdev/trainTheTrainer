import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  data = 10;
  updateData() {
    this.data = Math.floor(Math.random() * 10);
  }
  constructor() {}

  ngOnInit(): void {}
}
