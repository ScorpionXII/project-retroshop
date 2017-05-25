import { Component, OnInit } from '@angular/core';
import {SessionService} from "../../services/session.service";
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

  constructor(private session: SessionService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.session.login(this.formInfo)
      .subscribe((user) => {
          this.router.navigate(['home']);
        },
        (err) => this.error = err
      );
  }
}
