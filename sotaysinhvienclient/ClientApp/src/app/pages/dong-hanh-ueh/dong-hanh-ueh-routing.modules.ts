import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DongHanhUehComponent } from './container/dong-hanh-ueh.component';
import { CoVanHocTapComponent } from './components/co-van-hoc-tap/co-van-hoc-tap.component';
import { KyTucXaComponent } from './components/ky-tuc-xa/ky-tuc-xa.component';
import { MienGiamHocPhiComponent } from './components/mien-giam-hoc-phi/mien-giam-hoc-phi.component';
import { HocBongSinhVienComponent } from './components/hoc-bong-sinh-vien/hoc-bong-sinh-vien.component';
import { TinDungHocTapComponent } from './components/tin-dung-hoc-tap/tin-dung-hoc-tap.component';
import { ViecLamComponent } from './components/viec-lam/viec-lam.component';
import { KhoiNghiepComponent } from './components/khoi-nghiep/khoi-nghiep.component';

const routes: Routes = [
  {
    path: '',
    component: DongHanhUehComponent,
    children: [
      {
        path: '',
        redirectTo: 'co-van-hoc-tap',
      },
      {
        path: 'co-van-hoc-tap',
        component: CoVanHocTapComponent,
      },
      {
        path: 'ky-tuc-xa',
        component: KyTucXaComponent,
      },
      {
        path: 'mien-giam-hoc-phi',
        component: MienGiamHocPhiComponent,
      },
      {
        path: 'hoc-bong-sinh-vien',
        component: HocBongSinhVienComponent,
      },
      {
        path: 'tin-dung-hoc-tap',
        component: TinDungHocTapComponent,
      },
      {
        path: 'viec-lam',
        component: ViecLamComponent,
      },
      {
        path: 'khoi-nghiep',
        component: KhoiNghiepComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DongHanhUehRoutingModule {}
