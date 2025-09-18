import { computed, Injectable, signal } from '@angular/core';
import { ITodoItem } from './todo-list/todo-item/todo-item.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoList = signal<ITodoItem[]>([]);
  todoListCount = computed(() => this.todoList().length);
  todoListCompletedCount = computed(
    () => this.todoList().filter(task => task.completed).length
  );

  addTodo(task: ITodoItem) {
    this.todoList.update((list: ITodoItem[]) => [...list, task]);
  }
  deleteTodo(id: number) {
    this.todoList.update((list: ITodoItem[]) => list.filter(task => task.id !== id));
  }
  toggleTodo(id: number) {
    this.todoList.update((list: ITodoItem[]) => 
      list.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }
}
