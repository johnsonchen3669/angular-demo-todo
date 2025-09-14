import { Component, Input } from '@angular/core';
import { ITodoItem } from './todo-item/todo-item.model';

@Component({
  selector: 'app-todo-list',
  standalone: false,
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  @Input() tasks!: ITodoItem[];
  trackByFn(index: number, item: ITodoItem) {
    return item.id;
  }
}
