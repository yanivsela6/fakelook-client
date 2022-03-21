import { Component, OnInit } from '@angular/core';
import { AcNotification, ActionType } from 'angular-cesium';
import { map, mergeMap, Observable } from 'rxjs';
import IPost from 'src/app/models/IPost';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  posts$!:Observable<AcNotification>
  showMap:boolean = true;
  text:string = 'TimeLine';
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.posts$ = this.postService.AllPosts().pipe(
      map((posts) => {
        return posts.map((post) => ({
          id: post.id,
          actionType: ActionType.ADD_UPDATE,
          entity: this.convert(post),
        }));
      }),
      mergeMap((post) => post)
    );
  }
  convert(post:IPost) {
     let  x={
      id: post.id,
      description: post.description,
      imageSrc: post.imageSorce,
      location: Cesium.Cartesian3.fromDegrees(post.x_Position,  post.y_Position),
      isShow: true
    }
    return x
  }
  ShowMap(){
    this.text = this.showMap ?  'Map':'TimeLine';
    this.showMap = !this.showMap;
  }
}

let x=()=>(7);

let y =function (){
  let xjj
  return 7;
}
y