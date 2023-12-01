import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos: Todo[] = [];
  count: number = 1;

  constructor() {}

  getTodoList(): any {
    return this.todos;
  }

  delay(): Promise<void> {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }

  addTask(dato: string) {
    this.count++;
    let newTodo: Todo = { id: this.count, title: dato, completed: true };
    this.todos.push(newTodo);
  }

  changeTask(id: number) {
    this.todos = this.todos.map((taskList) =>
      taskList.id === id
        ? { ...taskList, completed: !taskList.completed }
        : taskList
    );
  }
}
