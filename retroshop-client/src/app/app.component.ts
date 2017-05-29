import { Component } from '@angular/core';
import {SessionService} from "../services/session/session.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'RetroShop Development!';

  constructor(private session: SessionService) {
    this.session.isLoggedIn().subscribe();
  }

}
