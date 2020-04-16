import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { OwlCarouselSettings } from 'src/app/web.config';
declare var $: any;
@Component({
  selector: 'app-khoi-nghiep',
  templateUrl: './khoi-nghiep.component.html'
})
export class KhoiNghiepComponent implements OnInit, AfterViewChecked {
  constructor() {}

  ngOnInit() {}

  ngAfterViewChecked(): void {
    $('.owl-carousel').owlCarousel(OwlCarouselSettings);
  }
}
