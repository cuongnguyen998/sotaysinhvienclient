import { NgModule } from "@angular/core";
import {
  CommonModule,
  LocationStrategy,
  PathLocationStrategy
} from "@angular/common";
import { CoVanHocTapComponent } from "./co-van-hoc-tap/co-van-hoc-tap.component";
import { KyTucXaComponent } from "./ky-tuc-xa/ky-tuc-xa.component";
import { MienGiamHocPhiComponent } from "./mien-giam-hoc-phi/mien-giam-hoc-phi.component";
import { HocBongSinhVienComponent } from "./hoc-bong-sinh-vien/hoc-bong-sinh-vien.component";
import { TinDungHocTapComponent } from "./tin-dung-hoc-tap/tin-dung-hoc-tap.component";
import { ViecLamComponent } from "./viec-lam/viec-lam.component";
import { KhoiNghiepComponent } from "./khoi-nghiep/khoi-nghiep.component";
import { DongHanhUehComponent } from "./dong-hanh-ueh.component";
import { DongHanhUehRoutingModule } from "./dong-hanh-ueh-routing.modules";

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
  imports: [CommonModule, DongHanhUehRoutingModule],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }]
})
export class DongHanhUehModule {}
