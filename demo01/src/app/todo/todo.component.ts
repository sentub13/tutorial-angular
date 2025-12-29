import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos = [
    { id: 1, text: 'Learn Angular', completed: false },
    { id: 2, text: 'Build Todo App', completed: false }
  ];

  newTodo = '';

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push({
        id: Date.now(),
        text: this.newTodo.trim(),
        completed: false
      });
      this.newTodo = '';
    }
  }

  toggleTodo(todo: any) {
    todo.completed = !todo.completed;
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}