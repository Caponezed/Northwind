import { HttpClient } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { FetchingService } from './services/fetching.service';
import Product from './Models/Product';

@NgModule({
  imports: [],
})
class AppModule {}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private fetchingService: FetchingService) {}

  products?: Product[];
  ngOnInit() {
    this.getAllProducts();
  }

  appTitle = 'Northwind';

  getAllProducts() {
    this.fetchingService
      .getAllItems<Product[]>('products')
      .subscribe((products) => {
        this.products = products;
      });
  }
}
