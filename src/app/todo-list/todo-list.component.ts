import { Component, input, output } from '@angular/core';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { ITodoItem } from './todo-item/todo-item.model';

@Component({
  selector: 'app-todo-list',
  imports: [TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  tasks = input<ITodoItem[]>();
  deleteTodo = output<number>();
  
  onDeleteTodo(id: number) {
    this.deleteTodo.emit(id);
  }
}
