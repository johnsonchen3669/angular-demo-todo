import { Component, signal } from '@angular/core';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { ITodoItem } from './todo-item/todo-item.model';

@Component({
  selector: 'app-todo-list',
  imports: [TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  tasks = signal<ITodoItem[]>([
    { id: 1, text: 'Task 1', completed: false },
    { id: 2, text: 'Task 2', completed: false },
    { id: 3, text: 'Task 3', completed: false },
  ]);
}
