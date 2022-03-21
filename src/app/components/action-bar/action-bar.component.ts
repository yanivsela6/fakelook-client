import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent implements OnInit {

  filter:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  Selection(){
    if(this.filter){
    this.filter = !this.filter;
    }
  }
  Selection1(){
    if(!this.filter){
    this.filter = !this.filter;
    }
  }

}
