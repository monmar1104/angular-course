import { Component } from '@angular/core';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent {

  newTask = '';
  tasks: Array<string> = [];
  finishedTasks: Array<string> = [];
  add() {
    this.tasks.push(this.newTask);
    console.log(this.tasks);
    this.newTask = '';
  }

remove(task: string) {
  this.tasks = this.tasks.filter(t => t !== task);
}
markAsDone(task: string) {
  this.finishedTasks.push(task);
  this.remove(task);
  console.log(this.finishedTasks);
}

}
