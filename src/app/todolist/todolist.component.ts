import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  list: any[] = [];

  addTask(task: string) {
    this.list.push({ id: this.list.length, name: task });
    console.log(this.list);
  }

  removeTask(id: number) {
    this.list = this.list.filter((task) => task.id !== id);
    console.log(id);
  }
}
