import { Component, OnInit } from '@angular/core';
import {SessionService} from "../../services/session/session.service";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  serverUrl = environment.serverUrl;

  user:any;

  zoom = 15;
  location = {
    lat: 0,
    lng: 0
  }
  iconUrl = 'assets/images/markerIcon2.png';

  constructor(private sessionService: SessionService, private router: Router) {}

  ngOnInit() {
    this.sessionService.isLoggedIn()
      .subscribe(
        (user) => {
          this.user = user;
          this.location = user.location;
        },
        () => { this.router.navigate(['login']) }
      );
  }

}
