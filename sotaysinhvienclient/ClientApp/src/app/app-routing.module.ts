import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'tong-quan-ueh',
    loadChildren: () => import('./pages/tong-quan-ueh/tong-quan-ueh.module').then((m) => m.TongQuanUehModule),
  },
  {
    path: 'thong-tin-lien-he',
    loadChildren: () =>
      import('./pages/thong-tin-lien-he-cac-don-vi/thong-tin-lien-he-cac-don-vi.module').then(
        (m) => m.ThongTinLienHeCacDonViModule
      ),
  },
  {
    path: 'san-choi-tai-ueh',
    loadChildren: () => import('./pages/san-choi-tai-ueh/san-choi-tai-ueh.module').then((m) => m.SanChoiTaiUehModule),
  },
  {
    path: 'goc-tien-ich',
    loadChildren: () => import('./pages/goc-tien-ich/goc-tien-ich.module').then((m) => m.GocTienIchModule),
  },
  {
    path: 'hoc-tap-ueh',
    loadChildren: () => import('./pages/hoc-tap-ueh/hoc-tap-ueh.module').then((m) => m.HocTapUehModule),
  },
  {
    path: 'dong-hanh-ueh',
    loadChildren: () => import('./pages/dong-hanh-ueh/dong-hanh-ueh.module').then((m) => m.DongHanhUehModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
