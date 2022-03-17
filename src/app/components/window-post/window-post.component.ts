import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import IUser from 'src/app/models/IUser';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-window-post',
  templateUrl: './window-post.component.html',
  styleUrls: ['./window-post.component.css']
})
export class WindowPostComponent implements OnInit {

  constructor(private authService: AuthService) {}
  loginForm = new FormGroup({
    Name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    Password: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
  });

  ngOnInit(): void {}
  submitPost(): void {
    const user: IUser = this.loginForm.value;
    this.authService.login(user);
  }

}
