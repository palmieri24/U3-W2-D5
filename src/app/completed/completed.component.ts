import { Component, OnInit, DoCheck } from '@angular/core';
import { TodosService } from '../todos.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss'],
})
export class CompletedComponent implements OnInit, DoCheck {
  todos: Todo[] = [];
  waiting: boolean = false;
  newTask: string = '';

  constructor(private todoSrv: TodosService) {}

  async ngOnInit() {
    this.waiting = true;
    await this.todoSrv.delay();
    this.waiting = false;
  }

  ngDoCheck(): void {
    this.todos = this.todoSrv.getTodoList();
  }

  async addNewTask() {
    this.waiting = true;
    await this.todoSrv.delay();
    this.waiting = false;
    this.todoSrv.addTask(this.newTask);
  }

  async changeTask(id: number) {
    await this.todoSrv.delay();
    this.todoSrv.changeTask(id);
  }

  async removeTask(id: number) {
    await this.todoSrv.delay();
    this.todoSrv.removeTask(id).then((updateTodo: Todo[]) => {
      this.todos = updateTodo;
    });
  }
}
