import {Component, Input, OnInit} from '@angular/core';
import {environment} from "../../environments/environment";
import {ProductService} from "../../services/product/product.service";

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.css']
})
export class ProductCardsComponent implements OnInit {

  @Input() sellerId: any;

  productsList: any;

  serverUrl = environment.serverUrl;
  userPicturePlaceholder = 'https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg';

  constructor(private productService: ProductService) { }

  ngOnInit() {
    if (!this.sellerId) {
      this.productService.getList()
      .subscribe(products => { this.productsList = products; });
    } else {
      this.productService.getBySeller(this.sellerId)
        .subscribe(products => { this.productsList = products; });
    }
  }

  setUserPicture(productObj) {
    if (!productObj.seller || !productObj.seller.picture)
      return this.userPicturePlaceholder;
    else
      return this.serverUrl + productObj.seller.picture;
  }
}
