import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  isEdit = false;
  editedIndex = -1;
  searchString = '';
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
      if (this.isEdit) {
        // Update existing todo
        const index = this.todos.findIndex(todo => todo.id === this.todoForm.id);
        console.log("index---", index)
        if (this.editedIndex !== -1) {
          this.todos[this.editedIndex] = {
            id: this.todoForm.id,
            name: this.todoForm.name.trim(),
            email: this.todoForm.email.trim(),
            message: this.todoForm.message.trim(),
            completed: this.todoForm.completed
          }
        }
        this.isEdit = false;
      } else {
        // Add new todo
        this.todos.push({
          id: Math.round(Math.random() * 10000),
          name: this.todoForm.name.trim(),
          email: this.todoForm.email.trim(),
          message: this.todoForm.message.trim(),
          completed: false
        });
      }
      this.resetForm();
    }
  }

  editTodo (index:number) {
    this.isEdit = true;
    this.editedIndex = index;
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
  
  searchTodo() {
    console.log("searchString----", this.searchString);
    const searchLower = this.searchString.toLowerCase();
    return this.todos.filter(todo => 
      todo.name.toLowerCase().includes(searchLower) || 
      todo.email.toLowerCase().includes(searchLower) || 
      todo.message.toLowerCase().includes(searchLower)
    );
  }

}