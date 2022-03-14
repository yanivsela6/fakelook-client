import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
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
        this.setToken(res.token);
        this.router.navigateByUrl('/Home');
      })
    );
  }

  private setToken(token: string): void {
    sessionStorage.setItem('token', token);
  }



  login(user: IUser): void {
    const currentUrl = `${this.url}Auth/Login`;
    this.subs.push(
      this.http.post<any>(currentUrl, user).subscribe((res) => {
        this.setToken(res.token);
        this.router.navigateByUrl('/Home');
      })
    );
  }

  // secret(): Observable<any> {
  //   const currentUrl = `${this.url}Secret/`;
  //   const headers = new HttpHeaders({
  //     Authorization: 'Bearer ' + this.getToken(),
  //   });
  //   const all$ = this.http.get<any>(currentUrl + 'All');
  //   const auth$ = this.http
  //     .get<any>(currentUrl + 'Authenticated', { headers })
  //     .pipe(catchError((err) => of({ msg: 'you are not authenticated' })));
  //   const admin$ = this.http
  //     .get<any>(currentUrl + 'Admin', { headers })
  //     .pipe(catchError((err) => of({ msg: 'you are not admin' })));
  //   return combineLatest(all$, auth$, admin$).pipe(map((res) => ({ ...res })));
  // }

  // private getToken(): string | null {
  //   return sessionStorage.getItem('token');
  // }


}
