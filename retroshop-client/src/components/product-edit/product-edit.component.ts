import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../../services/product/product.service";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  @Input() product: any;

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  submit(){
    this.productService.edit(this.product).subscribe()
  }
}
