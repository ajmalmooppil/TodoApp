import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Todo, TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  // newTodo: string = '';
  // editMode: boolean = false;
  // editIndex: number = -1;
  // filter: string = 'all';
  // filteredTodos: Todo[] = [];
  // dueDate: string = '';
  // date = Date.now();
  // // JSON server URL
  // constructor(private todoService: TodoService) {}
  // ngOnInit() {
  //   this.getTodos();
  // }
  // addTodo() {
  //   if (this.newTodo.trim()) {
  //     const currentDate = new Date().toISOString();
  //     const newTask: Partial<Todo> = {
  //       text: this.newTodo,
  //       completed: false,
  //       creationDate: currentDate,
  //       dueDate: this.dueDate,
  //       lastUpdatedDate: currentDate,
  //     };
  //     this.todoService.addTodo(newTask).subscribe((response) => {
  //       this.todos.push(response);
  //       this.newTodo = '';
  //       this.dueDate = ''; // Reset form
  //       this.filterTasks(this.filter);
  //       this.getTodos();
  //     });
  //   }
  // }
  // toggleComplete(index: number) {
  //   const todo = this.todos[index];
  //   const updatedTodo = { ...todo, completed: !todo.completed };
  //   this.todoService.updateTodo(updatedTodo).subscribe(() => {
  //     this.todos[index] = updatedTodo;
  //     this.filterTasks(this.filter);
  //   });
  // }
  // editTodo(index: number) {
  //   const todo = this.filteredTodos[index];
  //   this.newTodo = todo.text;
  //   this.dueDate = this.todos[index].dueDate;
  //   this.editMode = true;
  //   this.editIndex = index;
  // }
  // updateTodo() {
  //   if (this.newTodo.trim() && this.editMode) {
  //     const updatedDate = new Date().toISOString();
  //     const updatedTodo = {
  //       ...this.todos[this.editIndex],
  //       text: this.newTodo,
  //       dueDate: this.dueDate,
  //       lastUpdatedDate: updatedDate,
  //     };
  //     this.todoService.updateTodo(updatedTodo).subscribe(() => {
  //       this.todos[this.editIndex] = updatedTodo;
  //       this.newTodo = '';
  //       this.dueDate = '';
  //       this.editMode = false;
  //       this.filterTasks(this.filter);
  //     });
  //   }
  // }
  // clearCompleted() {
  //   this.todos
  //     .filter((todo) => todo.completed)
  //     .forEach((todo) => {
  //       this.todoService.deleteTodo(todo.id).subscribe(() => {
  //         this.todos = this.todos.filter((t) => !t.completed);
  //         this.filterTasks(this.filter);
  //       });
  //     });
  // }
  // filterTasks(criteria: string) {
  //   this.filter = criteria;
  //   if (criteria === 'all') {
  //     this.filteredTodos = this.todos;
  //   } else if (criteria === 'active') {
  //     this.filteredTodos = this.todos.filter((todo) => !todo.completed);
  //   } else if (criteria === 'completed') {
  //     this.filteredTodos = this.todos.filter((todo) => todo.completed);
  //   }
  // }
  // completeTask(index: number): void {
  //   if (this.filteredTodos[index]) {
  //     this.filteredTodos[index].completed = true;
  //     this.filteredTodos[index].lastUpdatedDate = new Date().toISOString();
  //     this.todoService.updateTodo(this.filteredTodos[index]).subscribe();
  //   }
  // }
}
