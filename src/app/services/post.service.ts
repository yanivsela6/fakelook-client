import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Console } from 'console';
import { BehaviorSubject, map, observable, Observable, Subject, Subscription } from 'rxjs';
import IComment from '../models/IComment';
import ILike from '../models/ILike';
import IPost from '../models/IPost';
import IQuery from '../models/IQuery';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://localhost:44349/api/';
  private subs: Subscription[] = [];
  private postsSubject: BehaviorSubject<IPost[]> = new BehaviorSubject([]as IPost[]);
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

  AddLike(like: ILike): void {
    const currentUrl = `${this.url}Posts/Likes`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.authService.getToken(),
    });
    like.userId = this.authService.getUserId();
    this.http.post<ILike>(currentUrl, like, { headers }).subscribe((res) => {
      this.postsSubject.value.find(p => p.id == like.postId)?.likes.push(like);
      this.postsSubject.next(this.postsSubject.value);
      return res
      });
  }

  UpdateLike(id?: number): void {
    console.log("1111111111111");
    console.log(id);
    const currentUrl = `${this.url}Posts/Likes1/?id=${id}`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.authService.getToken(),
    });
    this.http.post<ILike>(currentUrl, { headers }).subscribe((res) => {
      return res
      });
  }

  AddComment(comment: IComment): void {
    const currentUrl = `${this.url}Posts/Comments`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.authService.getToken(),
    });
    comment.userId = this.authService.getUserId();
    this.http.post<Comment>(currentUrl, comment, { headers }).subscribe((res) => {
      this.postsSubject.value.find(p => p.id == comment.postId)?.comments.push(comment);
      this.postsSubject.next(this.postsSubject.value);
      return res
      });
  }

  


}
