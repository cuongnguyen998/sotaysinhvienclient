import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "tong-quan-ueh",
    loadChildren: "./pages/tong-quan-ueh/tong-quan-ueh.module#TongQuanUehModule"
  },
  {
    path: "thong-tin-lien-he",
    loadChildren:
      "./pages/thong-tin-lien-he-cac-don-vi/thong-tin-lien-he-cac-don-vi.module#ThongTinLienHeCacDonViModule"
  },
  {
    path: "san-choi-tai-ueh",
    loadChildren:
      "./pages/san-choi-tai-ueh/san-choi-tai-ueh.module#SanChoiTaiUehModule"
  },
  {
    path: "goc-tien-ich",
    loadChildren: "./pages/goc-tien-ich/goc-tien-ich.module#GocTienIchModule"
  },
  {
    path: "hoc-tap-ueh",
    loadChildren: "./pages/hoc-tap-ueh/hoc-tap-ueh.module#HocTapUehModule"
  },
  {
    path: "dong-hanh-ueh",
    loadChildren: "./pages/dong-hanh-ueh/dong-hanh-ueh.module#DongHanhUehModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
