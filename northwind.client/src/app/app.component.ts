import { HttpClient } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';

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
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  appTitle = 'Northwind';
}
