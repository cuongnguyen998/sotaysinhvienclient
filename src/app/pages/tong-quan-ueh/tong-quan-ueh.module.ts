import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TongQuanUehComponent } from './tong-quan-ueh/tong-quan-ueh.component';
import { VanHoaUehComponent } from './van-hoa-ueh/van-hoa-ueh.component';
import { CoSoComponent } from './co-so/co-so.component';



@NgModule({
  declarations: [TongQuanUehComponent, VanHoaUehComponent, CoSoComponent],
  imports: [
    CommonModule
  ]
})
export class TongQuanUehModule { }
