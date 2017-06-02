import {Component, Input, OnInit} from '@angular/core';
import {environment} from "../../environments/environment";
import {ProductService} from "../../services/product/product.service";
import {NavBarSearchService} from "../../services/nav-bar-search/nav-bar-search.service";

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.css']
})
export class ProductCardsComponent implements OnInit {

  @Input() sellerId: any;

  productsList: any;
  filterPattern: any;

  serverUrl = environment.serverUrl;
  userPicturePlaceholder = 'https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg';

  constructor(private productService: ProductService, private searchService: NavBarSearchService) { }

  ngOnInit() {
    if (!this.sellerId) {
      this.productService.getList()
      .subscribe(products => this.productsList = products);
    } else {
      this.productService.getBySeller(this.sellerId)
        .subscribe(products => this.productsList = products);
    }

    this.searchService.getPatternChangedEmitter()
      .subscribe(pattern => {
        console.log("Llega > " + pattern);
        this.filterPattern = pattern;
      });
  }

  setUserPicture(productObj) {
    if (!productObj.seller || !productObj.seller.picture)
      return this.userPicturePlaceholder;
    else
      return this.serverUrl + productObj.seller.picture;
  }
}
