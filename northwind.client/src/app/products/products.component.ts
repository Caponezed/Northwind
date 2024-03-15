import { Component, Input, OnInit, Output, SimpleChanges } from '@angular/core';
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

  @Input() products?: Product[];

  selectedCategory: string = 'All';

  categories?: Category[];
  visibleProducts?: Product[];

  ngOnInit() {
    this.getAllCategories();
  }

  ngOnChanges() {
    this.filterProducts(this.selectedCategory);
  }

  getAllCategories() {
    this.fetchingService
      .getAllItems<Category[]>('categories')
      .subscribe((categories) => {
        this.categories = categories;
      });
  }

  filterProducts(selectedCategory: string = this.selectedCategory): void {
    const exCategory = this.selectedCategory;
    const newCategory = selectedCategory;

    this.selectedCategory = newCategory;

    if (this.selectedCategory === 'All' || exCategory === newCategory) {
      this.selectedCategory = 'All';
      this.visibleProducts = this.products;
      return;
    }

    this.visibleProducts = this.products?.filter((product) => {
      return product.productCategory === selectedCategory;
    });
  }
}
