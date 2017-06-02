import {Component, OnInit} from '@angular/core';
import {SessionService} from "../../services/session/session.service";
import {Router} from "@angular/router";
import {NavBarSearchService} from "../../services/nav-bar-search/nav-bar-search.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  user: any;
  error: string;

  constructor(
    private sessionService: SessionService,
    private searchService: NavBarSearchService,
    private router: Router
  ) { }

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

  updatePattern(event) {
    console.log(event.target.value);
    this.searchService.setPattern(event.target.value);
  }

  islogged() {
    this.sessionService.isLoggedIn().subscribe(user => console.log(user));
  }
}
