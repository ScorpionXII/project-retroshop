import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product/product.service";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private productsList = [];

  serverUrl = environment.serverUrl;
  userPicturePlaceholder = 'https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg';

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getList()
      .subscribe(products => { this.productsList = products; });
  }

  setUserPicture(productObj) {
    if (!productObj.seller || !productObj.seller.picture)
      return this.userPicturePlaceholder;
    else
      return this.serverUrl + productObj.seller.picture;
  }

}
