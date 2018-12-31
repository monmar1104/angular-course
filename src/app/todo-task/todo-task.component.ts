import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

  @Input()
  tasks = [];

  @Output()
  emitDone = new EventEmitter<string>();

  @Output()
  emitRemove = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  markAsDone(task: string) {
    this.emitDone.emit(task);
  }

  remove(task: string) {
    this.emitRemove.emit(task);
  }

  getColor(): string {
    return this.tasks.length > 5 ? 'red' : 'green';
  }

}
