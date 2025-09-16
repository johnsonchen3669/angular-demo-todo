import { Component, input, output } from '@angular/core';
import { ITodoItem } from './todo-item.model';

@Component({
  selector: '[appTodoItem]',
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  task = input.required<ITodoItem>();
  deleteItem = output<number>();
  toggleComplete(id: number) {
    this.deleteItem.emit(id);
  }
}
