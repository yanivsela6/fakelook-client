import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AcNotification } from 'angular-cesium';
import { Observable } from 'rxjs';
import IMapObj from 'src/app/models/IMapObj';
import IPost from 'src/app/models/IPost';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit,OnChanges {

  @Input() posts$?: IPost[]  ;

  constructor() { }
  ngOnChanges(): void {
   // this.posts$?.forEach(p=>this.posts.push(p.entity as IMapObj));
  }

  ngOnInit(): void {
    
  }
  

}
