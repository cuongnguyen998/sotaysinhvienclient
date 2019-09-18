import { NgModule } from "@angular/core";
import {
  CommonModule,
  LocationStrategy,
  PathLocationStrategy
} from "@angular/common";
import { ThongTinLienHeCacDonViComponent } from "./thong-tin-lien-he-cac-don-vi.component";
import { ThongTinLienHeCacDonViRoutingModule } from "./thong-tin-lien-he-cac-don-vi-routing.modules";

@NgModule({
  declarations: [ThongTinLienHeCacDonViComponent],
  imports: [CommonModule, ThongTinLienHeCacDonViRoutingModule],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }]
})
export class ThongTinLienHeCacDonViModule {}
