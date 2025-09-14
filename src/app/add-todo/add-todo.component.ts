import { Component, EventEmitter, Output } from '@angular/core';
import { ITodoItem } from '../todo-list/todo-item/todo-item.model';

@Component({
  selector: 'app-add-todo',
  standalone: false,
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css',
})
export class AddTodoComponent {
  @Output() addTodo = new EventEmitter<ITodoItem>();

  onAddTodo() {
    const newTodo: ITodoItem = {
      id: Date.now(),
      text: '待辦清單',
      completed: false,
    };
    this.addTodo.emit(newTodo);
  }
}
