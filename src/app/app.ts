import { Component, inject } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoService } from './todo.service';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, TodoListComponent, AddTodoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  todoService = inject(TodoService);
  todoListCount = this.todoService.todoListCount;
  todoListCompletedCount = this.todoService.todoListCompletedCount;
}
