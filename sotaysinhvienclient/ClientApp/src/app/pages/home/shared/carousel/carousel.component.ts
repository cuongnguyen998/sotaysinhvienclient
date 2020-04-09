import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html'
})
export class CarouselComponent implements OnInit {
  @Input() images: [];

  constructor() {}

  title = 'owl-carousel';

  mySlideOptions = {
    items: 1,
    dots: false,
    margin: 15,
    loop: true,
    stagePadding: 300,
    responsiveClass: true,
    responsive: {
      0: {
        nav: true,
        stagePadding: 0
      },
      600: {
        nav: true,
        stagePadding: 0
      },
      1000: {
        nav: true
      },
      1500: {
        nav: true
      }
    }
  };

  ngOnInit() {}
}
