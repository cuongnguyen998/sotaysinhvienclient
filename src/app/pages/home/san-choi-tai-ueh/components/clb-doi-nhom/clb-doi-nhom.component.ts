import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { OwlCarouselSettings } from 'src/app/web.config';
declare var $: any;
@Component({
  selector: 'app-clb-doi-nhom',
  templateUrl: './clb-doi-nhom.component.html'
})
export class ClbDoiNhomComponent implements OnInit, AfterViewChecked {
  constructor() {}

  ngOnInit() {}

  ngAfterViewChecked(): void {
    $('.owl-carousel').owlCarousel(OwlCarouselSettings);
  }
}
