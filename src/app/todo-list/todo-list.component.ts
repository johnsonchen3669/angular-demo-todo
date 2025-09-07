import { Component } from '@angular/core';
import { TodoItemComponent } from "./todo-item/todo-item.component";
import { AddTodoComponent } from "../add-todo/add-todo.component";

@Component({
  selector: 'app-todo-list',
  imports: [TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

}
