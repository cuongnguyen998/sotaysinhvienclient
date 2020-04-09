import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { ShareModule } from './shared/share.module';
import { HomeRoutingModule } from './home-routing.module';
import { TrangChuComponent } from './trang-chu/trang-chu.component';

@NgModule({
  declarations: [HomeComponent, TrangChuComponent],
  imports: [CommonModule, ShareModule, HomeRoutingModule],
  exports: [HomeComponent]
})
export class HomeModule {}
