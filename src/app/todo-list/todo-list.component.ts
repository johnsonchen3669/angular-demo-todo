import { Component } from '@angular/core';
import { ITodoItem } from './todo-item/todo-item.model';

@Component({
  selector: 'app-todo-list',
  standalone: false,
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  tasks = [
    { id: 1, text: '學習 Angular', completed: false },
    { id: 2, text: '建立待辦清單應用程式', completed: true },
    { id: 3, text: '測試應用程式', completed: false },
  ];
  trackByFn(index: number, item: ITodoItem) {
    return item.id;
  }
}
