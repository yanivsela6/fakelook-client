import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, of, Subscription } from 'rxjs';
import IUser from '../models/IUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private url = 'https://localhost:44349/api/';

  subs: Subscription[] = [];


  constructor(private http: HttpClient, private router: Router) { 
    
  }

  signUp(user: IUser): void {
    const currentUrl = `${this.url}Auth/SignUp`;
    this.subs.push(
      this.http.post<any>(currentUrl, user).subscribe((res) => {
        this.setUserId(res.id);
        this.setToken(res.token);
        this.router.navigateByUrl('/Home/filter');
      })
    );
  }
  
  checkAccess(): Observable<boolean> {
    const currentUrl = `${this.url}Auth/TestAll`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.getToken(),
    });

    return this.http.get(currentUrl, { headers }).pipe(
      map((_) => true),
      catchError((_) => of(false))
    );
  }


  login(user: IUser): void {
    const currentUrl = `${this.url}Auth/Login`;
    this.subs.push(
      this.http.post<any>(currentUrl, user).subscribe((res) => {
        this.setUserId(res.id);
        this.setToken(res.token);
        this.router.navigateByUrl('/Home/filter');
      })
    );
  }

  private setToken(token: string): void {
    sessionStorage.setItem('token', token);

  }
  private setUserId(userId: string): void {
    sessionStorage.setItem('userId', userId);

  }
  getToken(): string | null {
    return sessionStorage.getItem('token');
  }
  getUserId(): number {
    return Number(sessionStorage.getItem('userId'));
  }




}
