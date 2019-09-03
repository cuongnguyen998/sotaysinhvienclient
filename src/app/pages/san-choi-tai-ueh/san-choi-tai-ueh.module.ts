import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThongTinDoanHoiComponent } from '../thong-tin-doan-hoi/thong-tin-doan-hoi.component';
import { SanChoiTaiUehComponent } from './san-choi-tai-ueh.component';
import { ClbDoiNhomComponent } from './clb-doi-nhom/clb-doi-nhom.component';
import { HoatDongDoanComponent } from './hoat-dong-doan/hoat-dong-doan.component';
import { HoatDongVanTheMyComponent } from './hoat-dong-van-the-my/hoat-dong-van-the-my.component';



@NgModule({
  declarations: [ThongTinDoanHoiComponent, SanChoiTaiUehComponent, ClbDoiNhomComponent, HoatDongDoanComponent, HoatDongVanTheMyComponent],
  imports: [
    CommonModule
  ]
})
export class SanChoiTaiUehModule { }
