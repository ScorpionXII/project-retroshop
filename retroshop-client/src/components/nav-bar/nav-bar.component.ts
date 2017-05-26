import { Component, OnInit } from '@angular/core';
import {SessionService} from "../../services/session/session.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  user: any;
  error: string;

  constructor(private session: SessionService) { }

  ngOnInit() {
    this.session.getUserChangedEmitter()
      .subscribe(user => this.user = user);
  }

  logout() {
    this.session.logout()
      .subscribe();
  }
}
