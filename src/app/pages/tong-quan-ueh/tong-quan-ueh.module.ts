import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VanHoaUehComponent } from "./van-hoa-ueh/van-hoa-ueh.component";
import { CoSoComponent } from "./co-so/co-so.component";
import { TongQuanUehRoutingModule } from "./tong-quan-ueh-routing.modules";
import { TongQuanUehComponent } from "./tong-quan-ueh.component";

import { OwlModule } from "ngx-owl-carousel";
import { ShareModule } from "src/app/components/share.module";

@NgModule({
  declarations: [TongQuanUehComponent, VanHoaUehComponent, CoSoComponent],
  imports: [CommonModule, TongQuanUehRoutingModule, OwlModule, ShareModule]
})
export class TongQuanUehModule {}
