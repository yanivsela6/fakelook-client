import { Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';
import {
  AcMapComponent,
  AcNotification,
  ViewerConfiguration,
  ActionType,
  CameraService,
} from 'angular-cesium';
import { map, mergeMap, Observable, of } from 'rxjs';
import IMapObj from 'src/app/models/IMapObj';
import IPost from 'src/app/models/IPost';
const randomLocation = require('random-location');

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [ViewerConfiguration],
})
export class MapComponent implements OnInit {


  constructor(
    private viewerConf: ViewerConfiguration,
  ) {
    viewerConf.viewerOptions = {
      selectionIndicator: false,
      timeline: false,
      infoBox: false,
      fullscreenButton: false,
      baseLayerPicker: false,
      animation: false,
      homeButton: false,
      geocoder: false,
      navigationHelpButton: false,
      navigationInstructionsInitiallyVisible: false,
      useDefaultRenderLoop: true,
    };
  }
  @Input() posts$?:Observable<AcNotification>; ;
  selectedPost!: IMapObj;
  showDialog = false;
  Cesium = Cesium;
  ngOnInit(): void {
    
  }
  closeDialog(): void {
    this.showDialog = false;
  }
  showFullPost(post:IMapObj) {
    console.log("here!");
    this.selectedPost=post;
    this.showDialog=true;
  }
}
