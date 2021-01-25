import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SanChoiTaiUehComponent } from './container/san-choi-tai-ueh.component';
import { ThongTinDoanHoiComponent } from './components/thong-tin-doan-hoi/thong-tin-doan-hoi.component';
import { ClbDoiNhomComponent } from './components/clb-doi-nhom/clb-doi-nhom.component';
import { HoatDongDoanComponent } from './components/hoat-dong-doan/hoat-dong-doan.component';
import { HoatDongVanTheMyComponent } from './components/hoat-dong-van-the-my/hoat-dong-van-the-my.component';

const routes: Routes = [
  {
    path: '',
    component: SanChoiTaiUehComponent,
    children: [
      {
        path: '',
        redirectTo: 'thong-tin-doan-hoi',
      },
      {
        path: 'thong-tin-doan-hoi',
        component: ThongTinDoanHoiComponent,
      },
      {
        path: 'clb-doi-nhom',
        component: ClbDoiNhomComponent,
      },
      {
        path: 'hoat-dong-doan',
        component: HoatDongDoanComponent,
      },
      {
        path: 'hoat-dong-van-the-my',
        component: HoatDongVanTheMyComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SanChoiTaiUehRoutingModule {}
