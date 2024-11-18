import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
export interface Todo {
  id?: number;
  title: string;
  creationDate: Date;
  dueDate: string;
  lastUpdatedDate: Date;
  status: string;
}
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  apiUrl = 'http://localhost:3000/todos';
  constructor(private http: HttpClient, private authService: AuthService) {}
  getTodos() {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Add a new todo
  addTodo(newTask: any) {
    return this.http.post<any>(this.apiUrl, newTask);
  }

  // Delete a todo by ID
  deleteTodo(id: number) {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Update an existing todo
  updateTodo(updatedTask: Todo) {
    return this.http.put<Todo>(`${this.apiUrl}/${updatedTask.id}`, updatedTask);
  }

 

  completeTask(taskId: number, updatedFields: any) {
    return this.http.patch(`${this.apiUrl}/${taskId}`, updatedFields);
  }
}
