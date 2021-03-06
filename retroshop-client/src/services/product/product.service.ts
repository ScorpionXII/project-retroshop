import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import {Observable} from "rxjs/Observable";

@Injectable()
export class ProductService {

  private serverUrl = environment.serverUrl;

  constructor(private http: Http) {}

  getList() {
    return this.http.get(`${this.serverUrl}/api/products`, { withCredentials: true })
      .map((res) => res.json())
      .catch(this.handleError);
  }

  get(id) {
    return this.http.get(`${this.serverUrl}/api/products/${id}`, { withCredentials:true })
      .map((res) => res.json())
      .catch(this.handleError);

  }

  create(product) {
    return this.http.post(`${this.serverUrl}/api/products`, product, { withCredentials:true })
      .map((res) => res.json())
      .catch(this.handleError);
  }

  edit(product) {
    return this.http.put(`${this.serverUrl}/api/products/${product._id}`, product, { withCredentials: true })
      .map((res) => res.json())
      .catch(this.handleError);
  }

  remove(id) {
    return this.http.delete(`${this.serverUrl}/api/products/${id}`)
      .map((res) => res.json())
      .catch(this.handleError);
  }

  getBySeller(id) {
    return this.http.get(`${this.serverUrl}/api/products/seller/${id}`)
      .map((res) => res.json())
      .catch(this.handleError);
  }

  handleError(e) {
    return Observable.throw(e.json().message);
  }
}
