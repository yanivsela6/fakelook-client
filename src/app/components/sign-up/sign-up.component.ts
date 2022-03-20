import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import IUser from 'src/app/models/IUser';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private authService: AuthService) {}
  signUpForm = new FormGroup({
    Name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    Password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    Address: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
  });

  ngOnInit(): void {}
  submitPost(): void {
     const user: IUser = this.signUpForm.value;
     this.authService.signUp(user);
  }

}
