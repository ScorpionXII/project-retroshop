import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import {Observable} from "rxjs/Observable";

@Injectable()
export class ProducService {

  serverUrl = environment.serverUrl;

  constructor(private http: Http) {}

  getList() {
    return this.http.get(`${this.serverUrl}/api/products`)
      .map((res) => res.json())
      .catch(this.handleError);
  }

  get(id) {
    return this.http.get(`${this.serverUrl}/api/products/${id}`)
      .map((res) => res.json())
      .catch(this.handleError);

  }

  edit(phone) {
    return this.http.put(`${this.serverUrl}/api/products/${phone.id}`, phone)
      .map((res) => res.json())
      .catch(this.handleError);
  }

  remove(id) {
    return this.http.delete(`${this.serverUrl}/api/products/${id}`)
      .map((res) => res.json())
      .catch(this.handleError);
  }

  handleError(e) {
    return Observable.throw(e.json().message);
  }
}
