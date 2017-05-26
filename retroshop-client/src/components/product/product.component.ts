import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  formInfo = {
    title: '',
    description: '',
    category: '',
    price: ''
  };

  filename = '';

  constructor() { }

  ngOnInit() {
  }

  onChange() {
    this.filename = "Picture loaded...";
    console.log(this.filename);
  }
}
