import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { OwlCarouselSettings } from 'src/app/web.config';
declare var $: any;

@Component({
  selector: 'app-co-so',
  templateUrl: './co-so.component.html'
})
export class CoSoComponent implements OnInit, AfterViewChecked {
  constructor() {}

  ngOnInit() {}

  ngAfterViewChecked(): void {
    $('.owl-carousel').owlCarousel(OwlCarouselSettings);
  }
}
