import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  user = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.user);
    alert('Form submitted successfully!');
    this.resetForm();
  }

  resetForm() {
    this.user = {
      name: '',
      email: '',
      message: ''
    };
  }
}