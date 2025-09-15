import { NgModule } from '@angular/core';
import { App } from './app';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoListModule } from './todo-list/todo-list.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [App, HeaderComponent, AddTodoComponent],
  imports: [BrowserModule, TodoListModule, FormsModule],
  bootstrap: [App],
})
export class AppModule {}
