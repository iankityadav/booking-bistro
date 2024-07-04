import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { SignupRequest } from './model/types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'http://localhost:8080/api';
  tokenKey = '';
  userId = '';
  private authStatusSubject = new BehaviorSubject<boolean>(this.isLoggedIn());

  constructor(private http: HttpClient) {}
  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .post<any>(
        `${this.apiUrl}/auth/login`,
        { username, password },
        { headers }
      )
      .pipe(tap((response) => this.setter(response)));
  }

  signup(user: SignupRequest): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .post<any>(`${this.apiUrl}/auth/sign-up`, user, { headers })
      .pipe(tap((response) => console.log(response.token)));
  }

  private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
    this.authStatusSubject.next(true);
  }

  private setUserId(id: string) {
    return localStorage.setItem('userId', id);
  }

  private setter(response: any) {
    this.setToken(response.token);
    this.setUserId(response.userId);
  }

  getUserId() {
    return localStorage.getItem('userId');
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  getAuthStatus(): Observable<boolean> {
    return this.authStatusSubject.asObservable();
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.authStatusSubject.next(false);
  }
}
