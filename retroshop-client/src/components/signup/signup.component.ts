import { Component, OnInit } from '@angular/core';
import {SessionService} from "../../services/session/session.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FileUploader} from "ng2-file-upload";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})

export class SignupComponent implements OnInit {

  uploader = new FileUploader({ url: `${environment.serverUrl}/signup`});

  formInfo = {
    username: '',
    password: '',
    fullname: ''
  };

  user: any;
  error: string;
  feedback: string;
  imgPlaceholder = 'https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg';
  imgFileName = '';

  constructor(private session: SessionService, private router: Router) { }

  ngOnInit() {
    this.uploader.onSuccessItem = (item, response) => {
      this.feedback = JSON.parse(response).message;
      this.session.isLoggedIn()
        .subscribe(() => {
          this.router.navigate(['']);
        });
    };

    this.uploader.onErrorItem = (item, response) => {
      this.feedback = JSON.parse(response).message;
      console.log('SIGNUP ERROR!');
    };
  }

  signup() {
    this.session.signup(this.formInfo)
      .subscribe(
        (user) => this.user = user,
        (err) => this.error = err
      );
  }

  submit() {
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('username', this.formInfo.username);
      form.append('password', this.formInfo.password);
      form.append('fullname', this.formInfo.fullname);
    };

    this.uploader.uploadAll();
  }

  onChange(event){
    const file = event.target.files[0];
    const reader = new FileReader();
    const componentScope = this;

    reader.onloadend = function () {
      componentScope.imgPlaceholder = reader.result;
    };

    reader.readAsDataURL(file);
  }
}
