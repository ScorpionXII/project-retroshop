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

  constructor(private sessionService: SessionService, private router: Router) { }

  ngOnInit() {
    this.sessionService.getUserChangedEmitter()
      .subscribe(user => {
        this.user = user;
        //this.sessionService.isLoggedIn().subscribe(user => console.log(user));
      });
  }

  logout() {
    this.sessionService.logout()
      .subscribe(() => {
        this.router.navigate([''])
      });
  }

  islogged() {
    this.sessionService.isLoggedIn().subscribe(user => console.log(user));
  }
}
