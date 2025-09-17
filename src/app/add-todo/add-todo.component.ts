import { Component, output, signal } from '@angular/core';
import { ITodoItem } from '../todo-list/todo-item/todo-item.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css',
})
export class AddTodoComponent {
  addTodo = output<ITodoItem>();
  newTodoText = signal<string>('');
  onAddTodo() {
    if (!this.newTodoText().trim()) return;
    this.addTodo.emit({ id: Date.now(), text: this.newTodoText(), completed: false });
    this.newTodoText.set('');
  }
}
