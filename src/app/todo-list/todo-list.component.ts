import { Component, inject } from '@angular/core';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  imports: [TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  todoService = inject(TodoService);
  tasks = this.todoService.todoList;
}
