import {EventEmitter, Injectable, Output} from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { environment } from '../../environments/environment';
import 'rxjs/Rx';

@Injectable()
export class SessionService {

  userChanged = new EventEmitter<any>();

  private serverUrl = environment.serverUrl;
  private loggedUser = null;

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
        this.loggedUser = res.json();
        this.userChanged.emit(this.loggedUser);

        return res.json()
      })
      .catch(this.handleError);
  }

  logout() {
    return this.http.post(`${this.serverUrl}/logout`, {}, { withCredentials: true })
      .map(res => {

        this.loggedUser = null;
        this.userChanged.emit(this.loggedUser);

        return res.json();
      })
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(`${this.serverUrl}/loggedin`, { withCredentials: true })
      .map(res => {
        if (this.loggedUser == null) {
          this.loggedUser = res.json();
          this.userChanged.emit(this.loggedUser);
        }
        return res.json();
      })
      .catch(this.handleError);
  }

  getUser(id) {
    return this.http.get(`${this.serverUrl}/api/users/${id}`)
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

