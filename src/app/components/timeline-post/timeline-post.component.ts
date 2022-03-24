import { Component, Input, OnInit } from '@angular/core';
import IComment from 'src/app/models/IComment';
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
  text: string = "";
  likesLen:number =0;
  

  constructor(private postService: PostService) { }

  ngOnInit(): void {

    this.checkIfLiked()
    this.likesLen = 0;
    this.post.likes.forEach(x=> {if ( x.isActive == true ){this.likesLen++}})

  }
  checkIfLiked() {
    console.log(this.post);
    for (var i = 0; i < this.post.likes.length; i++) {
      if (this.id == this.post.likes[i].userId) {
        this.index = i;
        if (this.post.likes[i].isActive) {
          this.flag1 = false;
          this.flag2 = true;
        }
        else {
          this.flag2 = false;
          this.flag1 = true;
        }
      }
    }
  }

  likeClicked() {
    this.ngOnInit()
    this.flag1 = !this.flag1
    this.flag2 = !this.flag2
    console.log(this.index)
    if (this.index != -1) {
      console.log(this.post.likes[this.index].id);
      this.likesCounter(this.post.likes[this.index].isActive);
      this.post.likes[this.index].isActive = !this.post.likes[this.index].isActive
      this.postService.UpdateLike(this.post.likes[this.index].id);
    }
    else {
      this.likesCounter(true);

      var newLike: ILike = {
        isActive: true,
        userId: this.id,
        postId: Number(this.post.id)
      }
      this.postService.AddLike(newLike);

    }
  }
  likesCounter(x:boolean){
    if(x){
      this.likesLen = this.likesLen -1;
    }
    else{
      this.likesLen = this.likesLen +1;

    }

  }

  CommitClicked() {
    var commit: IComment = {
      id: 0,
      content: this.text,
      userId: this.id,
      postId: Number(this.post.id)
    }

    this.postService.AddComment(commit);
    //this.post.comments.push(commit)

  }





}
