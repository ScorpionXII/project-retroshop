import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';


@Injectable()
export class SessionService {

  private API_URL = "http://localhost:3000";

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
      .map(res => res.json())
      .catch(this.handleError);
  }

  logout() {
    return this.http.post(`${this.API_URL}/logout`, {})
      .map(res => res.json())
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
}

