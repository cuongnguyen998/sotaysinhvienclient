import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanChoiTaiUehComponent } from './container/san-choi-tai-ueh.component';
import { ClbDoiNhomComponent } from './components/clb-doi-nhom/clb-doi-nhom.component';
import { HoatDongDoanComponent } from './components/hoat-dong-doan/hoat-dong-doan.component';
import { HoatDongVanTheMyComponent } from './components/hoat-dong-van-the-my/hoat-dong-van-the-my.component';
import { ThongTinDoanHoiComponent } from './components/thong-tin-doan-hoi/thong-tin-doan-hoi.component';
import { SanChoiTaiUehRoutingModule } from './san-choi-tai-ueh-routing.modules';

import { OwlModule } from 'ngx-owl-carousel';
import { ShareModule } from 'src/app/pages/home/shared/share.module';

@NgModule({
  declarations: [
    ThongTinDoanHoiComponent,
    SanChoiTaiUehComponent,
    ClbDoiNhomComponent,
    HoatDongDoanComponent,
    HoatDongVanTheMyComponent
  ],
  imports: [CommonModule, ShareModule, SanChoiTaiUehRoutingModule, OwlModule],
  exports: [ShareModule]
})
export class SanChoiTaiUehModule {}
