import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { OwlCarouselSettings } from 'src/app/web.config';

declare var $: any;
@Component({
  selector: 'app-hoat-dong-van-the-my',
  templateUrl: './hoat-dong-van-the-my.component.html'
})
export class HoatDongVanTheMyComponent implements OnInit, AfterViewChecked {
  constructor() {}

  ngOnInit() {}

  ngAfterViewChecked(): void {
    $('.owl-carousel').owlCarousel(OwlCarouselSettings);
  }
}
