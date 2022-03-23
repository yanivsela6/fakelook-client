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
    this.checkIfLiked()
  }

  checkIfLiked() {
    for (var i = 0; i < this.post.likes.length; i++) {
      if (this.id == this.post.likes[i].userId) {
        this.index = i;
        console.log(this.id)
        console.log(this.post.likes[i].isActive + " boo")
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
      this.post.likes[this.index].isActive = !this.post.likes[this.index].isActive
      this.changed = true;
      console.log(this.post.likes[this.index].isActive)
    }
    else {
      var l: ILike = { id: this.post.likes.length + 1, isActive: true, user: null, userId: this.id, postId: Number(this.post.id) }
      this.post.likes.push(l)
      console.log("after push")
      console.log(this.post.likes)
      this.index = this.post.likes.length - 1
      console.log(this.index)
    }


    this.postService.EditPostById(this.post)
  }




}
