import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CarouselComponent } from "./carousel/carousel.component";
import { OwlModule } from "ngx-owl-carousel";

@NgModule({
  declarations: [CarouselComponent],
  imports: [CommonModule, OwlModule],
  exports: [CarouselComponent]
})
export class ShareModule {}
