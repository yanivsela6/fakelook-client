import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit, OnChanges {

  @Input() showWindow:boolean = false;
  @Output() showWindowEvent = new EventEmitter<boolean>();

  text:string= 'Add Post'
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.text = this.showWindow ? 'Close': 'Add Post';
  }

  ngOnInit(): void {
    
  }

  OpenWindow(){
    this.text = this.showWindow ? 'Add Post': 'Close';
    this.showWindow = !this.showWindow;
    this.showWindowEvent.emit(this.showWindow);
  }
  



}
