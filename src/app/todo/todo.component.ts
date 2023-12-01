import { Component, OnInit, DoCheck } from '@angular/core';
import { TodosService } from '../todos.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit, DoCheck {
  todos: Todo[] = [];
  waiting: boolean = false;
  newTask: string = '';

  constructor(private todoSrv: TodosService) {}

  async ngOnInit() {
    this.waiting = true;
    await this.todoSrv.delay();
    this.waiting = false;
    this.todos = this.todoSrv.getTodoList();
  }

  ngDoCheck() {
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
}
