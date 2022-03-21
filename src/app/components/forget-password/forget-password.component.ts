import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private emailService: EmailService) {}
  signUpForm = new FormGroup({
    Name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    Address: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
  });

  ngOnInit(): void {}
  submitPost(): void {
    //  const user: IUser = this.signUpForm.value;
    //  this.authService.signUp(user);
    alert("We sent to your mail a new password")
  }
}
