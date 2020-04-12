import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: TrangChuComponent
      },
      {
        path: 'tong-quan-ueh',
        loadChildren: () => import('./tong-quan-ueh/tong-quan-ueh.module').then(m => m.TongQuanUehModule)
      },
      {
        path: 'thong-tin-lien-he',
        loadChildren: () =>
          import('./thong-tin-lien-he-cac-don-vi/thong-tin-lien-he-cac-don-vi.module').then(
            m => m.ThongTinLienHeCacDonViModule
          )
      },
      {
        path: 'san-choi-tai-ueh',
        loadChildren: () => import('./san-choi-tai-ueh/san-choi-tai-ueh.module').then(m => m.SanChoiTaiUehModule)
      },
      {
        path: 'goc-tien-ich',
        loadChildren: () => import('./goc-tien-ich/goc-tien-ich.module').then(m => m.GocTienIchModule)
      },
      {
        path: 'hoc-tap-ueh',
        loadChildren: () => import('./hoc-tap-ueh/hoc-tap-ueh.module').then(m => m.HocTapUehModule)
      },
      {
        path: 'dong-hanh-ueh',
        loadChildren: () => import('./dong-hanh-ueh/dong-hanh-ueh.module').then(m => m.DongHanhUehModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
