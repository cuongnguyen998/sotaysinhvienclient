import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GocTienIchComponent } from "./goc-tien-ich.component";
import { CacBieuMauComponent } from "./cac-bieu-mau/cac-bieu-mau.component";
import { PhanMemHoTroComponent } from "./phan-mem-ho-tro/phan-mem-ho-tro.component";
import { XeBuytComponent } from "./xe-buyt/xe-buyt.component";
import { GocTienIchRoutingModule } from "./goc-tien-ich-routing.modules";

@NgModule({
  declarations: [
    GocTienIchComponent,
    CacBieuMauComponent,
    PhanMemHoTroComponent,
    XeBuytComponent
  ],
  imports: [CommonModule, GocTienIchRoutingModule]
})
export class GocTienIchModule {}
