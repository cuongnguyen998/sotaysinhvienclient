import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThongTinLienHeCacDonViComponent } from './container/thong-tin-lien-he-cac-don-vi.component';
import { ThongTinLienHeCacDonViRoutingModule } from './thong-tin-lien-he-cac-don-vi-routing.modules';

@NgModule({
  declarations: [ThongTinLienHeCacDonViComponent],
  imports: [CommonModule, ThongTinLienHeCacDonViRoutingModule],
})
export class ThongTinLienHeCacDonViModule {}
