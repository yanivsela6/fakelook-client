import { Component, OnInit } from '@angular/core';
import { AcNotification, ActionType } from 'angular-cesium';
import { map, mergeMap, Observable, pairwise } from 'rxjs';
import IPost from 'src/app/models/IPost';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  posts$!: Observable<AcNotification>;
  posts!: Observable<IPost[]>;

  showMap: boolean = true;
  text: string = 'TimeLine';
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.posts = this.postService.AllPostsFirst();

    this.posts$ = this.postService.AllPostsFirst().pipe(
      pairwise(),
      map((posts) => {
        if(posts[0].length < posts[1].length){
          posts[0] = posts[1];
        }
        return posts[0].map((post) => ({
          id: post.id.toString(),
          actionType: posts[1].find(x => x.id == post.id) ? ActionType.ADD_UPDATE : ActionType.DELETE,
          entity: this.convert(post),
        }));
      }),
      mergeMap((post) => post)
    );

  }
  convert(post: IPost) {
    let x = {
      id: post.id,
      description: post.description,
      imageSrc: post.imageSorce,
      location: Cesium.Cartesian3.fromDegrees(post.x_Position,  post.y_Position),
      isShow: true,
      likes:post.likes,
      tags:post.tags,
      date:post.date,
      userId:post.userId
      
    }
    return x
  }


  ShowMap() {
    this.text = this.showMap ? 'Map' : 'TimeLine';
    this.showMap = !this.showMap;
  }
}


