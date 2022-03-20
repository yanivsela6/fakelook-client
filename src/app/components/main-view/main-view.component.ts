import { Component, OnInit } from '@angular/core';
import IPost from 'src/app/models/IPost';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  posts:IPost[] = []
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.posts = this.postService.AllPosts();
  }

}
