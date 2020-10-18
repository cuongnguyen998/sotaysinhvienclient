import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { OwlCarouselSettings } from 'src/app/web.config';
declare var $: any;

@Component({
  selector: 'app-co-so',
  templateUrl: './co-so.component.html'
})
export class CoSoComponent implements OnInit, AfterViewChecked {
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {}

  getLinkIframeYoutube(youtubeId) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${youtubeId}`);
  }

  ngAfterViewChecked(): void {
    $('.owl-carousel').owlCarousel(OwlCarouselSettings);
  }
}
