import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import IPost from 'src/app/models/IPost';
import ITag from 'src/app/models/ITag';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-window-post',
  templateUrl: './window-post.component.html',
  styleUrls: ['./window-post.component.css']
})
export class WindowPostComponent implements OnInit {

  constructor(private postService: PostService) { }
  @Output() showWindowPost = new EventEmitter<boolean>();
  @Input() imageSrc: string = '';

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
    const tags:ITag[] = this.createTags(this.postForm.value.Tags);
    let post: IPost = {
      id: 0,
      description: this.postForm.value.Description,
      imageSorce: this.imageSrc,
      x_Position: 0,
      y_Position: 0,
      z_Position: 0,
      date: new Date(),
      userId: Number(sessionStorage.getItem('userId')),
      tags:tags
    };

    navigator.geolocation.getCurrentPosition((postion)=> {
      post.x_Position = postion.coords.longitude;
      post.y_Position = postion.coords.latitude;
      post.z_Position = 3620170.526302757;
      this.postService.EditPost(post);
      this.showWindowPost.emit(false);
      alert("You added new post")
  
    });

  }
  createTags(tags:string):ITag[]{
    let allTagStrings = tags.split(",");
    const finalTags:ITag[]= []
    allTagStrings.forEach(t => {
      finalTags.push({id:0,content:t});
    });
    return finalTags;
  }

  imgSrcInput(src: string) {
    this.imageSrc = src;
  }

  

}
