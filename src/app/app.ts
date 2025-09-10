import { Component, computed, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddTodoComponent } from "./add-todo/add-todo.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, TodoListComponent, AddTodoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  todoList = signal([]);
  todoListCount = computed(() => this.todoList().length);
}
