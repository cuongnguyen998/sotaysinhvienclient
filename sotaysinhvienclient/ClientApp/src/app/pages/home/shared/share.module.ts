import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { OwlModule } from 'ngx-owl-carousel';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CarouselComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, OwlModule, RouterModule],
  exports: [CarouselComponent, HeaderComponent, FooterComponent]
})
export class ShareModule {}
