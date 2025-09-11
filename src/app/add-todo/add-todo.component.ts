import { Component, signal } from '@angular/core';
import { ITodoItem } from '../todo-list/todo-item/todo-item.model';

@Component({
  selector: 'app-add-todo',
  imports: [],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css',
})
export class AddTodoComponent {
  tempArr = signal<ITodoItem[]>([]);
  addTodo() {
    this.tempArr.update((todos) => [
      ...todos,
      { id: Date.now(), text: '待辦清單', completed: false },
    ]);
    console.log(this.tempArr());
  }
}
