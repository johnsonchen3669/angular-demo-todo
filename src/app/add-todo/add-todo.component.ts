import { Component, inject, output, signal } from '@angular/core';
import { ITodoItem } from '../todo-list/todo-item/todo-item.model';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-todo',
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css',
})
export class AddTodoComponent {
  todoService = inject(TodoService);
  newTodoText = signal<string>('');
  onAddTodo() {
    if (!this.newTodoText().trim()) return;
    this.todoService.addTodo({
      id: Date.now(),
      text: this.newTodoText(),
      completed: false,
    });
    this.newTodoText.set('');
  }
}
