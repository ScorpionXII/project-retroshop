import {EventEmitter, Injectable, Output} from '@angular/core';
import {Http, RequestOptions, Headers, Response} from '@angular/http';
import {Observable} from "rxjs/Observable";
import { environment } from '../../environments/environment';
import 'rxjs/Rx';

@Injectable()
export class SessionService {

  userChanged = new EventEmitter<any>();

  private serverUrl = environment.serverUrl;
  private localUser: Object;

  constructor(private http: Http) {
  }

  signup(user) {
    return this.http.post(`${this.serverUrl}/signup`, user)
      .map(res => res.json())
      .catch(this.handleError);
  }

  login(user) {
    return this.http.post(`${this.serverUrl}/login`, user, { withCredentials: true })
      .map(res => {
        this.localUser = res.json();
        this.userChanged.emit(this.localUser);

        return res.json()
      })
      .catch(this.handleError);
  }

  logout() {
    return this.http.post(`${this.serverUrl}/logout`, {})
      .map(res => {

        this.localUser = null;
        this.userChanged.emit(this.localUser);

        return res.json();
      })
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(`${this.serverUrl}/loggedin`)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getPrivateData() {
    return this.http.get(`${this.serverUrl}/private`)
      .map(res => res.json())
      .catch(this.handleError);
  }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  getUserChangedEmitter() {
    return this.userChanged;
  }
}

