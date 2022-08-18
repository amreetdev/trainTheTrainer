import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() value = 0;

  @Input() data: { name: string; email: string } = { name: '', email: '' };

  constructor() {}

  ngOnInit(): void {}
}
