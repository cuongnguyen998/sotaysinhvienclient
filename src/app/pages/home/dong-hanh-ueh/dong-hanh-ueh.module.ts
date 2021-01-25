import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoVanHocTapComponent } from './components/co-van-hoc-tap/co-van-hoc-tap.component';
import { KyTucXaComponent } from './components/ky-tuc-xa/ky-tuc-xa.component';
import { MienGiamHocPhiComponent } from './components/mien-giam-hoc-phi/mien-giam-hoc-phi.component';
import { HocBongSinhVienComponent } from './components/hoc-bong-sinh-vien/hoc-bong-sinh-vien.component';
import { TinDungHocTapComponent } from './components/tin-dung-hoc-tap/tin-dung-hoc-tap.component';
import { ViecLamComponent } from './components/viec-lam/viec-lam.component';
import { KhoiNghiepComponent } from './components/khoi-nghiep/khoi-nghiep.component';
import { DongHanhUehComponent } from './container/dong-hanh-ueh.component';
import { DongHanhUehRoutingModule } from './dong-hanh-ueh-routing.modules';
import { ShareModule } from 'src/app/pages/home/shared/share.module';

@NgModule({
  declarations: [
    DongHanhUehComponent,
    CoVanHocTapComponent,
    KyTucXaComponent,
    MienGiamHocPhiComponent,
    HocBongSinhVienComponent,
    TinDungHocTapComponent,
    ViecLamComponent,
    KhoiNghiepComponent
  ],
  imports: [CommonModule, ShareModule, DongHanhUehRoutingModule]
})
export class DongHanhUehModule {}
