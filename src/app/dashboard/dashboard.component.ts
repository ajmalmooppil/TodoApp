import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { HeadderComponent } from "../headder/headder.component";
export interface Task {
  id: number;
  title: string;
  creationDate: string;
  dueDate: string;
  status: string;
  lastUpdatedDate: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HeadderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  tasks: Task[] = [];
  totalTasks: number = 0;
  completedTasks: number = 0;
  pendingTasks: number = 0;
  latestTasks: Task[] = [];

  constructor(private taskService: TodoService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTodos().subscribe((tasks: Task[]) => {
      this.tasks = tasks;
      this.calculateSummary();
      this.latestTasks = tasks.slice(-5).reverse(); // Show the latest 5 tasks
    });
  }

  calculateSummary(): void {
    this.totalTasks = this.tasks.length;
    this.completedTasks = this.tasks.filter(
      (task) => task.status === 'Completed'
    ).length;
    this.pendingTasks = this.totalTasks - this.completedTasks;
  }
}
