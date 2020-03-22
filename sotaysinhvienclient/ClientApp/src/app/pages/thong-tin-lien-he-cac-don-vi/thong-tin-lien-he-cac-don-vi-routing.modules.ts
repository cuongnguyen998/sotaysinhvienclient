import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ThongTinLienHeCacDonViComponent } from "./thong-tin-lien-he-cac-don-vi.component";

const routes: Routes = [
  {
    path: "",
    component: ThongTinLienHeCacDonViComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThongTinLienHeCacDonViRoutingModule {}
