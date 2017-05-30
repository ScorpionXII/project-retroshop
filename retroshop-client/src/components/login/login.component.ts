import { Component, OnInit } from '@angular/core';
import {SessionService} from "../../services/session/session.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formInfo = {
    username: '',
    password: ''
  };

  error: string;

  constructor(private sessionService: SessionService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.sessionService.login(this.formInfo)
      .subscribe((user) => {
          this.router.navigate(['home']);
        },
        (err) => this.error = err
      );
  }
}
