import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TongQuanUehComponent } from './container/tong-quan-ueh.component';
import { VanHoaUehComponent } from './components/van-hoa-ueh/van-hoa-ueh.component';
import { CoSoComponent } from './components/co-so/co-so.component';

const routes: Routes = [
  {
    path: '',
    component: TongQuanUehComponent,
    children: [
      {
        path: '',
        component: VanHoaUehComponent,
      },
      {
        path: 'van-hoa',
        component: VanHoaUehComponent,
      },
      {
        path: 'co-so',
        component: CoSoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TongQuanUehRoutingModule {}
