import { Component, OnInit } from '@angular/core';
import {SessionService} from "../../services/session/session.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-gmap-test',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

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
        (user) => { this.location = user.location },
        () => { this.router.navigate(['login']) }
      );
  }

}
