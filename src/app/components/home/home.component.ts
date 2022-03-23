import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 showWindow:boolean = false;
 

  constructor() { }

  ngOnInit(): void {
  }

  ShowWindow(show: boolean){
    this.showWindow = show;
  }


}
