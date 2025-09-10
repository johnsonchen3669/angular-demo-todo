import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: false,
})
export class App {
  todoList = [];
  get todoListCount() {
    return this.todoList.length;
  }
}
