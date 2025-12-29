import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  isEdit = false;
  todoForm = {
    id: 0,
    name: '',
    email: '',
    message: '',
    completed: false
  };

  todos = [
    { id: 1, name: 'Learn Angular', email: 'abc@gmail.com', message: 'World', completed: false },
    { id: 2, name: 'Learn React', email: 'kjb@gmail.com', message: 'Welcome', completed: false },
  ];


  isFormValid(): boolean {
    const { name, email, message } = this.todoForm;
    return !!(name?.trim() && email?.trim() && message?.trim());
  }

  resetForm() {
    this.todoForm = { id: 0, name: '', email: '', message: '',  completed: false };
  }

  addTodo() {
    console.log("todoForm----", this.todoForm)
    if (this.isFormValid()) {
      this.todos.push({
        id: Math.round(Math.random()),
        name: this.todoForm.name.trim(),
        email: this.todoForm.email.trim(),
        message: this.todoForm.message.trim(),
        completed: false
      });     
      this.resetForm();
    }
  }

  toggleTodo(todo: any) {
    todo.completed = !todo.completed;
  }

  editTodo (index:number) {
    this.isEdit = true;
    let selected = this.todos[index];
    console.log("selected----", selected);
    this.todoForm = {
      id: selected.id,
      name: selected.name,
      email: selected.email,
      message: selected.message,
      completed: selected.completed
    };
  }

  deleteTodo(index: number) {
    // deleteTodo.todos = this.todos.filter(todo => todo.id !== id);
    this.todos.splice(index, 1);
  }
}