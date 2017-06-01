import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product/product.service";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productsList = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getList()
      .subscribe(products => { this.productsList = products; });
  }
}
