import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  appTitle: string = 'Northwind';

  activatedLink: boolean = true;

  cssClasses = {
    header: true,
  };
}
