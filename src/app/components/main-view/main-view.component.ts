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
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.posts$ = this.postService.AllPosts().pipe(
      map((posts) => {
        return posts.map((post) => ({
          id: post.Id,
          actionType: ActionType.ADD_UPDATE,
          entity: this.convert(post),
        }));
      }),
      mergeMap((entity) => entity)
    );
  }
  convert(post:IPost) {
    return {
      id: post.Id,
      description: post.Description,
      imageSrc: post.ImageSorce,
      location: { x: Number(post.X_Position), y: Number(post.Y_Position), z: Number(post.Z_Position) },
      isShow: true
    }
  }

}

let x=()=>(7);

let y =function (){
  let xjj
  return 7;
}
y