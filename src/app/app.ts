import { Component } from '@angular/core';
import { ITodoItem } from './todo-list/todo-item/todo-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: false,
})
export class App {
  todoList: ITodoItem[] = [];
  get todoListCount() {
    return this.todoList.length;
  }
  onAddTodo(newTodo: ITodoItem) {
    this.todoList = [...this.todoList, newTodo];
  }
}
