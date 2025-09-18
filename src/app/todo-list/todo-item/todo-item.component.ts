import { Component, inject, input, output } from '@angular/core';
import { ITodoItem } from './todo-item.model';
import { TodoService } from '../../todo.service';

@Component({
  selector: '[appTodoItem]',
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  todoService = inject(TodoService);
  task = input.required<ITodoItem>();

  toggleComplete(id: number) {
    this.todoService.toggleTodo(id);
  }
  deleteTask(id: number) {
    this.todoService.deleteTodo(id);
  }
}
