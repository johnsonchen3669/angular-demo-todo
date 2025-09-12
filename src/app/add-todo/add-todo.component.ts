import { Component } from '@angular/core';
import { ITodoItem } from '../todo-list/todo-item/todo-item.model';

@Component({
  selector: 'app-add-todo',
  standalone: false,
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css',
})
export class AddTodoComponent {
  tempArr: ITodoItem[] = [];

  addTodo() {
    const newTodo: ITodoItem = {
      id: Date.now(),
      text: '待辦清單',
      completed: false,
    };
    this.tempArr.push(newTodo);
    console.log(this.tempArr);
  }
}
