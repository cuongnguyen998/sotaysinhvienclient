import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GocTienIchComponent } from "./goc-tien-ich.component";
import { CacBieuMauComponent } from "./cac-bieu-mau/cac-bieu-mau.component";
import { PhanMemHoTroComponent } from "./phan-mem-ho-tro/phan-mem-ho-tro.component";
import { XeBuytComponent } from "./xe-buyt/xe-buyt.component";

const routes: Routes = [
  {
    path: "",
    component: GocTienIchComponent,
    children: [
      {
        path: "",
        component: CacBieuMauComponent
      },
      {
        path: "bieu-mau",
        component: CacBieuMauComponent
      },
      {
        path: "phan-mem-ho-tro",
        component: PhanMemHoTroComponent
      },
      {
        path: "co-so",
        component: XeBuytComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GocTienIchRoutingModule {}
