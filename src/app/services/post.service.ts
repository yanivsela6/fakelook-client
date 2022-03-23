import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Console } from 'console';
import { map, observable, Observable, Subject, Subscription } from 'rxjs';
import IPost from '../models/IPost';
import IQuery from '../models/IQuery';
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
    post.userId = this.authService.getUserId();
    this.http.post<IPost>(currentUrl, post, { headers }).subscribe((res) => {
      this.AllPosts();
      });
  }

  EditPostById(post:IPost ):void {
    const currentUrl = `${this.url}Posts/`+post.id;
    console.log(currentUrl)
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.authService.getToken(),
    });
    this.http.post<IPost>(currentUrl, post, { headers }).subscribe((res) => {
        this.router.navigateByUrl('/Home');
      });
  }
  
  AllPostsFirst(): Observable<IPost[]>{
    const currentUrl = `${this.url}Posts`;
    this.subs.push(
      this.http
        .get<IPost[]>(currentUrl)
        .subscribe((res) => this.postsSubject.next(res))
    );
    return this.postsSubject.asObservable()
  }


  AllPosts(){
    const currentUrl = `${this.url}Posts`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.authService.getToken(),
    });
    this.subs.push(
      this.http
        .get<IPost[]>(currentUrl, { headers })
        .subscribe((res) => this.postsSubject.next(res))
    );
  }

  PostsFilter(query?:IQuery){
    const currentUrl = `${this.url}Posts/filter`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.authService.getToken(),
    });
    this.subs.push(this.http.post<IPost[]>(currentUrl, query, { headers }).subscribe(res=>{
      this.postsSubject.next(res);    
    }))
  }


}
