import { Component, OnInit } from '@angular/core';
import {SessionService} from "../../services/session/session.service";
import {Router} from "@angular/router";
import {ProductService} from "../../services/product/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  formInfo = {
    title: '',
    description: '',
    category: '',
    price: '',
    seller: ''
  };

  user: any;
  filename = '';

  constructor(private sessionService: SessionService, private router: Router, private productService: ProductService) { }

  ngOnInit() {
    this.sessionService.isLoggedIn()
      .subscribe(
        (user) => { this.user = user },
        () => { this.router.navigate(['login']) }
      );
  }

  onChange() {
    this.filename = "Picture loaded...";
    console.log(this.filename);
  }

  submit() {
    this.formInfo.seller = this.user._id;
    this.productService.create(this.formInfo)
      .subscribe(
        () => { this.router.navigate(['']) }
      );
  }
}
