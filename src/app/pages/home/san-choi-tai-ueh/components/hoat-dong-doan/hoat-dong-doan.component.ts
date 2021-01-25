import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { OwlCarouselSettings } from 'src/app/web.config';
declare var $: any;
@Component({
  selector: 'app-hoat-dong-doan',
  templateUrl: './hoat-dong-doan.component.html'
})
export class HoatDongDoanComponent implements OnInit, AfterViewChecked {
  constructor() {}

  ngOnInit() {}

  ngAfterViewChecked(): void {
    $('.owl-carousel').owlCarousel(OwlCarouselSettings);
  }
}
