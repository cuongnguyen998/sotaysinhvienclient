import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VanHoaUehComponent } from "./van-hoa-ueh/van-hoa-ueh.component";
import { CoSoComponent } from "./co-so/co-so.component";
import { TongQuanUehRoutingModule } from "./tong-quan-ueh-routing.modules";
import { TongQuanUehComponent } from "./tong-quan-ueh.component";

import { OwlModule } from "ngx-owl-carousel";

@NgModule({
  declarations: [TongQuanUehComponent, VanHoaUehComponent, CoSoComponent],
  imports: [CommonModule, TongQuanUehRoutingModule, OwlModule]
})
export class TongQuanUehModule {}
