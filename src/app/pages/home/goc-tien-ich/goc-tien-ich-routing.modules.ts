import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GocTienIchComponent } from './container/goc-tien-ich.component';
import { CacBieuMauComponent } from './components/cac-bieu-mau/cac-bieu-mau.component';
import { PhanMemHoTroComponent } from './components/phan-mem-ho-tro/phan-mem-ho-tro.component';
import { XeBuytComponent } from './components/xe-buyt/xe-buyt.component';

const routes: Routes = [
  {
    path: '',
    component: GocTienIchComponent,
    children: [
      {
        path: '',
        redirectTo: 'bieu-mau',
      },
      {
        path: 'bieu-mau',
        component: CacBieuMauComponent,
      },
      {
        path: 'phan-mem-ho-tro',
        component: PhanMemHoTroComponent,
      },
      {
        path: 'xe-buyt',
        component: XeBuytComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GocTienIchRoutingModule {}
