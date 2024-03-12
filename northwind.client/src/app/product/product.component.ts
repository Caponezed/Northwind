import { Component, Input, OnInit } from '@angular/core';
import Product from '../Models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() product?: Product;

  isInStock?: boolean = this.product?.unitsInStock !== 0;

  cssClasses = {
    'product-card': true,
    'in-stock': this.isInStock,
    'out-of-stock': !this.isInStock,
  };
}
