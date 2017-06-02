import { Component, OnInit, ViewChild } from '@angular/core';
import {SessionService} from "../../services/session/session.service";
import {ActivatedRoute, Router} from "@angular/router";
import {environment} from "../../environments/environment";
import {ModalComponent} from "../modal/modal.component";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  serverUrl = environment.serverUrl;

  user: any;
  userPicturePlaceholder = 'https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg';
  isOwner = false;

  zoom = 15;
  location = {
    lat: 0,
    lng: 0
  }
  iconUrl = 'assets/images/markerIcon2.png';

  constructor(
    private sessionService: SessionService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.sessionService.isLoggedIn()
        .subscribe(user => {
            if (!params['id'] || user._id == params['id']) {
              this.isOwner = true;
              this.user = user;
              this.location = user.location;
            } else {
              this.sessionService.getUser(params['id'])
                .subscribe(user => {
                  this.isOwner = false;
                  this.user = user;
                  this.location = user.location;
                });
            }
          },
          () => {
            this.sessionService.getUser(params['id'])
              .subscribe(user => {
                this.isOwner = false;
                this.user = user;
                this.location = user.location;
              });
          }
        );
    });
  }

  setUserPicture(user) {
    if (!user || !user.picture)
      return this.userPicturePlaceholder;
    else
      return this.serverUrl + user.picture;
  }
}
