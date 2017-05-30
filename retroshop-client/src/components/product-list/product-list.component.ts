import { Component, OnInit } from '@angular/core';
import {SessionService} from "../../services/session/session.service";
import {ProductService} from "../../services/product/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  private productsList = [];

  constructor(private sessionService: SessionService, private productService: ProductService) { }

  ngOnInit() {
    this.sessionService.getUserChangedEmitter()
      .subscribe(user => {
        this.productService.getBySeller(user._id)
          .subscribe(products => { this.productsList = products });
      });
  }

}
