import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-parent',
  templateUrl: './child-parent.component.html',
  styleUrls: ['./child-parent.component.css'],
})
export class ChildParentComponent implements OnInit {
  @Output() updateDataEvent = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
}
