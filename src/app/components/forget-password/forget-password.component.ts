import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import IUser from 'src/app/models/IUser';
import { AuthService } from 'src/app/services/auth.service';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private authService: AuthService) {}
  changePassForm = new FormGroup({
    Name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    Password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  ngOnInit(): void {}
  submitPost(): void {
    const user: IUser = this.changePassForm.value;
    this.authService.changePass(user);
    alert("The Password changed");
  }
}
