import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, observable, Observable, Subject, Subscription } from 'rxjs';
import IPost from '../models/IPost';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://localhost:44349/api/';
  private subs: Subscription[] = [];
  private postsSubject: Subject<IPost[]> = new Subject();
  constructor(private http: HttpClient,private authService: AuthService,private router: Router) { }
  
  EditPost(post: IPost): void {
    const currentUrl = `${this.url}Posts`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.authService.getToken(),
    });
    post.UserId = this.authService.getUserId();
    this.http.post<IPost>(currentUrl, post, { headers }).subscribe((res) => {
        this.router.navigateByUrl('/Home');
      });
  }

  AllPosts(): Observable<IPost[]>{
    const currentUrl = `${this.url}Posts`;
    let a:Observable<IPost[]> = this.http.get<IPost[]>(currentUrl)
    console.log(a)
    return a
  }

}
