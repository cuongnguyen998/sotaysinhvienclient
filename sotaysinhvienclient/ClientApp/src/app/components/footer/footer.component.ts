import { Component, OnInit, DoCheck } from '@angular/core';
import { RouteInfo, ROUTE } from 'src/app/web.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit, DoCheck {
  ListNavbar: RouteInfo[];
  constructor(private router: Router) {}

  Author: string;
  Quote: string;

  ngDoCheck(): void {
    this.ListNavbar = ROUTE;

    for (let i = 0; i < this.ListNavbar.length; i++) {
      const item = this.ListNavbar[i].childrenPath;

      for (let j = 0; j < item.length; j++) {
        const comparePath = this.ListNavbar[i].path + item[j].path;

        if (this.router.url === '/') {
          this.Author = 'Walter Bagehot';
          this.Quote = 'Niềm vui lớn nhất trên đời là làm những việc mà mọi người nói bạn không thể làm được';
        }

        if (this.router.url === '/thong-tin-lien-he') {
          this.Author = 'Caton Censeur';
          this.Quote = 'Đừng mua thứ hữu ích mà hãy mua thứ cần thiết';
        }

        if (comparePath === this.router.url) {
          this.Author = item[j].author;
          this.Quote = item[j].quote;
          break;
        }
      }
    }
  }
  ngOnInit() {
    this.ListNavbar = ROUTE;

    for (let i = 0; i < this.ListNavbar.length; i++) {
      const item = this.ListNavbar[i].childrenPath;

      for (let j = 0; j < item.length; j++) {
        const comparePath = this.ListNavbar[i].path + item[j].path;

        if (this.router.url === '/') {
          this.Author = 'Walter Bagehot';
          this.Quote = 'Niềm vui lớn nhất trên đời là làm những việc mà mọi người nói bạn không thể làm được';
        }

        if (this.router.url === '/thong-tin-lien-he') {
          this.Author = 'Caton Censeur';
          this.Quote = 'Đừng mua thứ hữu ích mà hãy mua thứ cần thiết';
        }

        if (comparePath === this.router.url) {
          this.Author = item[j].author;
          this.Quote = item[j].quote;
          break;
        }
      }
    }
  }
}
