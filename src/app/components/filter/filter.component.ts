import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import IQuery from 'src/app/models/IQuery';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {


  constructor(private authService: AuthService) { }
  loginForm = new FormGroup({
    DateFrom: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    DateTo: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    Publishers: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    Tags: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    TagsUsers: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),

  });

  ngOnInit(): void { }
  submitPost(): void {
    const query: IQuery = this.loginForm.value;
    query.DateFrom = new Date(this.loginForm.value.DateFrom);
    query.DateTo = new Date(this.loginForm.value.DateTo);
    query.Publishers = this.loginForm.value.Publishers.split(",");
    query.Tags = this.loginForm.value.Tags.split(",");
    query.TagsUsers = this.loginForm.value.TagsUsers.split(",");
    console.log(query);
    // this.authService.login(user);
  }

}
