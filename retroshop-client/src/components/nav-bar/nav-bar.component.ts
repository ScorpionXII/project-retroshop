import { Component, OnInit } from '@angular/core';
import {SessionService} from "../../services/session/session.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  user: any;
  error: string;

  constructor(private session: SessionService, private router: Router) { }

  ngOnInit() {
    this.session.getUserChangedEmitter()
      .subscribe(user => {
        this.user = user;
        //this.session.isLoggedIn().subscribe(user => console.log(user));
      });
  }

  logout() {
    this.session.logout()
      .subscribe(() => {
        this.router.navigate([''])
      });
  }

  islogged() {
    this.session.isLoggedIn().subscribe(user => console.log(user));
  }
}
