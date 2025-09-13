import { Component, Input } from '@angular/core';
import { ITodoItem } from './todo-item.model';

@Component({
  selector: '[appTodoItem]',
  standalone: false,
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  @Input({ required: true }) task!: ITodoItem;
}
