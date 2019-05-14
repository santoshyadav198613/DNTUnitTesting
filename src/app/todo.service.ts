import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  tasks: Array<string> = [];

  constructor() { }

  addTask(task: string) {
    this.tasks.push(task);
  }

  getTask(): Array<string> {
    return this.tasks;
  }
}
