import { Component, OnInit } from '@angular/core';
import { ROUTE, RouteInfo } from 'src/app/web.config';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  ListNavbar: RouteInfo[];

  constructor() {}

  collapseNavbar() {
    if (innerWidth < 900) {
      $('.navbar-toggler').click();
    }
  }

  ngOnInit() {
    this.ListNavbar = ROUTE;
  }
}
