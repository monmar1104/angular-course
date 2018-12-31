import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {
  tasks: Array<string> = [];
  finishedTasks: Array<string> = [];

  add(task: string) {
    this.tasks.push(task);
    console.log(this.tasks);
  }

remove(task: string) {
  this.tasks = this.tasks.filter(t => t !== task);
}
markAsDone(task: string) {
  this.finishedTasks.push(task);
  this.remove(task);
  console.log(this.finishedTasks);
}

ngOnInit(): void {
  this.tasks = ['1. Zakupy', '2. Śniadanie', '3. Praca', '4. Obiad', '5. Angielski', '6. Parca'];
}

}
