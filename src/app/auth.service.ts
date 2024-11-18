import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';
interface User {
  name: string;
  email: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiurl = 'http://localhost:3000/user';
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  constructor(private http: HttpClient) {
    const currentUser = localStorage.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<any>(
      currentUser ? JSON.parse(currentUser) : null
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  checkUserExists(user: User): Observable<boolean> {
    return this.http.get<User[]>(this.apiurl).pipe(
      map((users: User[]) => {
        const userExists = users.some(
          (u) => u.name === user.name || u.email === user.email
        );
        return userExists;
      }),
      catchError(() => of(false)) // Handle errors by returning false
    );
  }

  register(user: any) {
    return this.http.post<any>(this.apiurl, user);
  }

  login(credentials: any) {
    return this.http.get<any[]>(
      `${this.apiurl}?email=${credentials.email}&password=${credentials.password}`
    );
  }
  setCurrentUser(user: any) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
  }
  getCurrentUser() {
    return this.currentUserSubject.value;
  }
  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
