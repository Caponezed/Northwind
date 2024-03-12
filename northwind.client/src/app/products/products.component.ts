import { Component, OnInit } from '@angular/core';
import Product from '../Models/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(private productService: ProductService) {}

  title: string = 'Our products';

  products?: Product[];

  ngOnInit(): void {
    this.productService
      .getAllProducts()
      .subscribe((products: Product[]) => (this.products = products));
  }
}
