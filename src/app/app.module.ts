import { NgModule } from '@angular/core';
import { App } from './app';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [App, HeaderComponent],
  imports: [BrowserModule, RouterOutlet],
  bootstrap: [App],
})
export class AppModule {}
