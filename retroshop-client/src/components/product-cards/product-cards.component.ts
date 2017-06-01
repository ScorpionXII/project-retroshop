import {Component, Input, OnInit} from '@angular/core';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.css']
})
export class ProductCardsComponent implements OnInit {

  @Input() productsList: any;

  serverUrl = environment.serverUrl;
  userPicturePlaceholder = 'https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg';

  constructor() { }

  ngOnInit() {

  }

  setUserPicture(productObj) {
    if (!productObj.seller || !productObj.seller.picture)
      return this.userPicturePlaceholder;
    else
      return this.serverUrl + productObj.seller.picture;
  }
}
