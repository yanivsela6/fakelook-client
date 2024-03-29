import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularCesiumModule, AngularCesiumWidgetsModule } from 'angular-cesium';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { ActionBarComponent } from './components/action-bar/action-bar.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { WindowPostComponent } from './components/window-post/window-post.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { FilterComponent } from './components/filter/filter.component';
import { FriendsComponent } from './components/friends/friends.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { FullPostComponent } from './components/full-post/full-post.component';
import { TimelinePostComponent } from './components/timeline-post/timeline-post.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    ActionBarComponent,
    AddPostComponent,
    WindowPostComponent,
    ImageUploadComponent,
    TimelineComponent,
    MainViewComponent,
    FilterComponent,
    FriendsComponent,
    LogoutComponent,
    ForgetPasswordComponent,
    FullPostComponent,
    TimelinePostComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    AngularCesiumModule.forRoot(),
    AngularCesiumWidgetsModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
