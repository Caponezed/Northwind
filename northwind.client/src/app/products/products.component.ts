import { Component, OnInit } from '@angular/core';
import Product from '../Models/Product';
import { FetchingService } from '../services/fetching.service';
import Category from '../Models/Category';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(private fetchingService: FetchingService) {}

  title: string = 'Our products';
  products?: Product[];
  categories?: Category[];

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories();
  }

  getAllProducts(): void {
    this.fetchingService
      .getAllItems<Product[]>('products')
      .subscribe((products) => {
        this.products = products;
      });
  }

  getAllCategories(): void {
    this.fetchingService
      .getAllItems<Category[]>('categories')
      .subscribe((categories) => {
        this.categories = categories;
      });
  }
}
