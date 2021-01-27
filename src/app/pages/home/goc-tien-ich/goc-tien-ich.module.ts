import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GocTienIchComponent } from './container/goc-tien-ich.component';
import { CacBieuMauComponent } from './components/cac-bieu-mau/cac-bieu-mau.component';
import { PhanMemHoTroComponent } from './components/phan-mem-ho-tro/phan-mem-ho-tro.component';
import { XeBuytComponent } from './components/xe-buyt/xe-buyt.component';
import { GocTienIchRoutingModule } from './goc-tien-ich-routing.modules';

@NgModule({
  declarations: [GocTienIchComponent, CacBieuMauComponent, PhanMemHoTroComponent, XeBuytComponent],
  imports: [CommonModule, GocTienIchRoutingModule]
})
export class GocTienIchModule {}
