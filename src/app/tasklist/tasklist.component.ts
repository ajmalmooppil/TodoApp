import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../todo.service';

import { FormsModule } from '@angular/forms';
import { HeadderComponent } from "../headder/headder.component";

@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [CommonModule, FormsModule, HeadderComponent],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.css',
})
export class TasklistComponent implements OnInit {
  enableEditMode(task: any) {
    task.isEditing = true;
  }
  newTask = {
    title: '',
    dueDate: '', // Default to today's date
  };
  tasks: any[] = [];
  constructor(private todoService: TodoService) {
    this.getTask();
  }

  saveTask(task: any) {
    const updatedTask = {
      title: task.title,
      dueDate: task.dueDate,
      lastUpdatedDate: new Date().toISOString(),
    };

    this.todoService.completeTask(task.id, updatedTask).subscribe((res) => {
      task.isEditing = false;
      Object.assign(task, res); // Update the task with the server's response
    });
  }

  getTask(): void {
    this.todoService.getTodos().subscribe((data) => {
      this.tasks = data;
    });
  }

  addTask() {
    const task: Todo = {
      title: this.newTask.title,
      dueDate: this.newTask.dueDate,
      creationDate: new Date(), // Set the creation date
      lastUpdatedDate: new Date(), // Set the last updated date
      status: 'Pending', // Default status for a new task
    };

    // Send the new task object to the service
    this.todoService.addTodo(task).subscribe((data) => {
      this.tasks.push(data);
      this.getTask(); // Refresh the task list after adding a new task
    });
    this.newTask.title = '';
    this.newTask.dueDate = '';
    // Clear input fields
  }

  ngOnInit() {
    this.getTask();
  }
  removeTask(task: any) {
    this.todoService.deleteTodo(task.id).subscribe(() => {
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
    });
  }

  updateTask(task: any) {
    task.lastUpdatedDate = new Date();
    this.todoService.updateTodo(task).subscribe();
  }

  completeTask(task: any) {
    const updatedFields = {
      status: 'Completed',
      lastUpdatedDate: new Date().toISOString(),
    };
    this.todoService
      .completeTask(task.id, updatedFields)
      .subscribe((updatedTask) => {
        // Update task in the local tasks array
        const index = this.tasks.findIndex((t) => t.id === task.id);
        this.tasks[index] = { ...this.tasks[index], ...updatedTask };
      });
  }

  cancelEditMode(task: any) {
    task.isEditing = false;
    
  }
}
