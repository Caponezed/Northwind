import { Component, Input, OnInit } from '@angular/core';
import Product from '../Models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  constructor() {}
  @Input() product?: Product;

  cssClasses = {
    'product-card': true,
  };
}
