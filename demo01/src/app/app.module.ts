import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TodoComponent } from './todo/todo.component';
import { FormComponent } from './form/form.component';



@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'todo', component: TodoComponent },
      { path: 'form', component: FormComponent },
      { path: '', redirectTo: '/todo', pathMatch: 'full' }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    TodoComponent,
    FormComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
