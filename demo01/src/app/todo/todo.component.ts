import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todoForm = {
    id: null,
    name: '',
    email: '',
    message: ''
  };

  todos = [
    { id: 1, name: 'Learn Angular', email: 'abc@gmail.com', message: 'World', completed: false },
    { id: 2, name: 'Learn React', email: 'kjb@gmail.com', message: 'Welcome', completed: false },
  ];

  newTodo = '';

  addTodo() {
    console.log("todoForm----", this.todoForm)
    if (this.newTodo.trim()) {
      // this.todos.push({
      //   id: Date.now(),
      //   text: this.newTodo.trim(),
      //   completed: false
      // });
      // this.newTodo = '';
    }
  }

  toggleTodo(todo: any) {
    todo.completed = !todo.completed;
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}