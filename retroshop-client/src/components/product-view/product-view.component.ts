import { Component, OnInit } from '@angular/core';
import {SessionService} from "../../services/session/session.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../services/product/product.service";

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  constructor(
    private sessionService: SessionService,
    private productService:ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  product: any;

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.productService.get(params['id']).subscribe(product => {
          this.product = product
        });
      });

    // this.sessionService.isLoggedIn()
    //   .subscribe(
    //     () => {
    //       this.route.params
    //         .subscribe(params => {
    //           this.productService.get(params['id']).subscribe(product => {this.product = product});
    //         });
    //     },
    //     () => { this.router.navigate(['login']) }
    //   );
  }

}
