import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import ILike from 'src/app/models/ILike';
import IMapObj from 'src/app/models/IMapObj';
import IPost from 'src/app/models/IPost';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrls: ['./full-post.component.css']
})
export class FullPostComponent implements OnInit {
  @Input() post!: IMapObj;

  @Output() closeWindowEmitter = new EventEmitter();
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
    console.log(this.post);
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
      console.log(this.post.likes[this.index].id);
      this.post.likes[this.index].isActive = !this.post.likes[this.index].isActive
      this.postService.UpdateLike(this.post.likes[this.index].id);
    }
    else {
      var l: ILike = {
        isActive: true,
        userId: this.id,
        postId: Number(this.post.id)
      }
    this.postService.AddLike(l);

    }
  }



  close(): void {
    this.closeWindowEmitter.emit();
  }
}
