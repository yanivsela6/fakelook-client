import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  showWindow:Boolean = false;
  @Output() showWindowEvent = new EventEmitter<Boolean>();

  text:string= 'Add Post'
  constructor() { }

  ngOnInit(): void {
  }

  OpenWindow(){
    this.text = this.showWindow ? 'Add Post': 'Close';
    this.showWindow = !this.showWindow;
    this.showWindowEvent.emit(this.showWindow);
  }


}
