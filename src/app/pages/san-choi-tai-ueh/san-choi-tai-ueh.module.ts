import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SanChoiTaiUehComponent } from "./san-choi-tai-ueh.component";
import { ClbDoiNhomComponent } from "./clb-doi-nhom/clb-doi-nhom.component";
import { HoatDongDoanComponent } from "./hoat-dong-doan/hoat-dong-doan.component";
import { HoatDongVanTheMyComponent } from "./hoat-dong-van-the-my/hoat-dong-van-the-my.component";
import { ThongTinDoanHoiComponent } from "./thong-tin-doan-hoi/thong-tin-doan-hoi.component";
import { SanChoiTaiUehRoutingModule } from "./san-choi-tai-ueh-routing.modules";
import { CarouselComponent } from "src/app/components/carousel/carousel.component";

import { OwlModule } from "ngx-owl-carousel";

@NgModule({
  declarations: [
    ThongTinDoanHoiComponent,
    SanChoiTaiUehComponent,
    ClbDoiNhomComponent,
    HoatDongDoanComponent,
    HoatDongVanTheMyComponent,
    CarouselComponent
  ],
  imports: [CommonModule, SanChoiTaiUehRoutingModule, OwlModule]
})
export class SanChoiTaiUehModule {}
