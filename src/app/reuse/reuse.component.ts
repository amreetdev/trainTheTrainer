import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reuse',
  templateUrl: './reuse.component.html',
  styleUrls: ['./reuse.component.css'],
})
export class ReuseComponent implements OnInit {
  userDetails = [
    { name: 'test', email: 'test1@gmail.com' },
    { name: 'test1', email: 'test12@gmail.com' },
    { name: 'test2', email: 'test123@gmail.com' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
