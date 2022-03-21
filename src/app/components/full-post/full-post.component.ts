import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import IMapObj from 'src/app/models/IMapObj';
import IPost from 'src/app/models/IPost';

@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrls: ['./full-post.component.css']
})
export class FullPostComponent implements OnInit {
  @Input() post!: IMapObj;
  @Output() closeWindowEmitter = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log(this.post)
    console.log(this.post.imageSrc)
    console.log(this.post.description)
  }
  
  close(): void {
      this.closeWindowEmitter.emit();
    }

}
