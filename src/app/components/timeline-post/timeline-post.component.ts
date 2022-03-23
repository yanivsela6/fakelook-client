import { Component, Input, OnInit } from '@angular/core';
import ILike from 'src/app/models/ILike';
import IPost from 'src/app/models/IPost';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-timeline-post',
  templateUrl: './timeline-post.component.html',
  styleUrls: ['./timeline-post.component.css']
})
export class TimelinePostComponent implements OnInit {

  @Input() post!: IPost;

  flag1?: boolean = true
  flag2?: boolean = false
  index: number = -1
  changed: boolean = false
  id = Number(sessionStorage.getItem('userId'));
  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }






}
