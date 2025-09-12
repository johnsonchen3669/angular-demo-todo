import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: false,
})
export class App {
  todoList = [
    { id: 1, text: '學習 Angular', completed: false },
    { id: 2, text: '建立待辦清單應用程式', completed: true },
    { id: 3, text: '測試應用程式', completed: false },
  ];
  get todoListCount() {
    return this.todoList.length;
  }
}
