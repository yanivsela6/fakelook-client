import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import IPost from 'src/app/models/IPost';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-window-post',
  templateUrl: './window-post.component.html',
  styleUrls: ['./window-post.component.css']
})
export class WindowPostComponent implements OnInit {

  constructor(private postService: PostService) {}
  @Output() showWindowPost = new EventEmitter<boolean>();

  postForm = new FormGroup({
    Description: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
  });

  ngOnInit(): void {
  }

  submitPost(): void {
    const post: IPost = this.postForm.value;
    //this.postService.EditPost(post);
    this.showWindowPost.emit(false);

  }

}
