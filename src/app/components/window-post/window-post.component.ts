import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import IPost from 'src/app/models/IPost';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-window-post',
  templateUrl: './window-post.component.html',
  styleUrls: ['./window-post.component.css']
})
export class WindowPostComponent implements OnInit {

  constructor(private postService: PostService) { }
  @Output() showWindowPost = new EventEmitter<boolean>();
  @Input() imageSrc:string = '';

  postForm = new FormGroup({
    Description: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
    Tags: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
  });

  ngOnInit(): void {
  }

  submitPost(): void {
    let post: IPost = {
      id: "",
      description: "",
      imageSorce: "",
      x_Position: "",
      y_Position: "",
      z_Position: "",
      Date: new Date(),
      UserId: 0
    };
    post.description = this.postForm.value.Description;
    post.imageSorce = this.imageSrc;
    //this.postService.EditPost(post);
    this.showWindowPost.emit(false);
    alert("You added new post")
  }

  imgSrcInput(src:string){
    this.imageSrc = src;
  }

}
