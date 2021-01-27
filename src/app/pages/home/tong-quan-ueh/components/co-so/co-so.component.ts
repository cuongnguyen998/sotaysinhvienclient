import { Component, OnInit, AfterViewChecked, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { OwlCarouselSettings } from 'src/app/web.config';
declare var $: any;

@Component({
  selector: 'app-co-so',
  templateUrl: './co-so.component.html'
})
export class CoSoComponent implements OnInit, AfterViewChecked {

  url:SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.url = this.getLinkIframeYoutube('lbIYwcKAHkc');
  }

  getLinkIframeYoutube(youtubeId) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${youtubeId}`);
  }

  ngAfterViewChecked(): void {
    $('.owl-carousel').owlCarousel(OwlCarouselSettings);
  }
}
