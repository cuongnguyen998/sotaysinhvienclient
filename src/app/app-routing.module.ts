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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
