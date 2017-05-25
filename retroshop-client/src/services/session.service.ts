import {EventEmitter, Injectable, Output} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';


@Injectable()
export class SessionService {

  userChanged = new EventEmitter<any>();

  private API_URL = "http://localhost:3000";
  private localUser: Object;

  constructor(private http: Http) {
  }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  signup(user) {
    return this.http.post(`${this.API_URL}/signup`, user)
      .map(res => res.json())
      .catch(this.handleError);
  }

  login(user) {
    return this.http.post(`${this.API_URL}/login`, user)
      .map(res => {

        this.localUser = res.json();
        this.userChanged.emit(this.localUser);

        return res.json()
      })
      .catch(this.handleError);
  }

  logout() {
    return this.http.post(`${this.API_URL}/logout`, {})
      .map(res => {

        this.localUser = null;
        this.userChanged.emit(this.localUser);

        return res.json();
      })
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(`${this.API_URL}/loggedin`)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getPrivateData() {
    return this.http.get(`${this.API_URL}/private`)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getUserChangedEmitter() {
    return this.userChanged;
  }
}

