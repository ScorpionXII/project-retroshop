import {Component, ContentChild, OnInit, ViewChild} from '@angular/core';
import {SessionService} from "../../services/session/session.service";
import {ProductService} from "../../services/product/product.service";
import {Router} from "@angular/router";
import {ModalComponent} from "../modal/modal.component";
import 'rxjs/Rx';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @ViewChild('modalElement')
  modalElement: ModalComponent;

  productsList = [];

  currentProduct = {};

  constructor(private sessionService: SessionService, private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.sessionService.isLoggedIn()
      .flatMap(user => this.productService.getBySeller(user._id))
      .catch(error => this.router.navigate(['']))
      .subscribe(products => this.productsList = products);

    // this.sessionService.isLoggedIn()
    //   .subscribe(user => {
    //     this.productService.getBySeller(user._id)
    //       .subscribe(products => { this.productsList = products });
    //   },
    //     () => { this.router.navigate(['']) }
    //   );
  }

  showEditForm(productIndex) {
    this.currentProduct = this.productsList[productIndex];
    this.modalElement.show();
  }

}
