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
  flag1?:boolean = true
  flag2?:boolean = false
  index:number=-1
  id=Number(sessionStorage.getItem('userId'));
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.checkIfLiked()
  }
  checkIfLiked() {
   for(var i=0;i<this.post.likes.length;i++) {
     if(this.id==this.post.likes[i].userId) {
       this.index=i;
       if(this.post.likes[i].isActive) {
         this.flag1=false;
         this.flag2=true;
       }
       else {
        this.flag2=false;
        this.flag1=true;
       }
     }
   }
  }
  likeClicked() {
     this.ngOnInit()
     this.flag1=!this.flag1
     this.flag2=!this.flag2
     console.log(this.index)
          if(this.index!=-1){
              this.post.likes[this.index-1].isActive=!this.post.likes[this.index-1].isActive
              console.log(this.post.likes[this.index].isActive)
          }
     else {
       var l :ILike ={id:undefined,isActive:true,user:null,userId:this.id,postId:Number(this.post.id)}
       this.post.likes.push(l)
       console.log("after push")
       console.log(this.post.likes)
       this.index=this.post.likes.length -1
       console.log("index is")
       console.log(this.index)
     }

  }
  

  
  close(): void {
    var p:IPost  = {
      id:Number(this.post.id),
      description:this.post.description,
      imageSorce:this.post.imageSrc,
      x_Position:this.post.location.x,
      y_Position:this.post.location.y,
      z_Position:this.post.location.z,
      date:this.post.date,userId:this.post.userId,
      tags:this.post.tags,
      likes:this.post.likes
    }
    console.log("!!!!")
    console.log(p.likes)

  this.postService.EditPostById(p)
       this.closeWindowEmitter.emit();
  }
}
