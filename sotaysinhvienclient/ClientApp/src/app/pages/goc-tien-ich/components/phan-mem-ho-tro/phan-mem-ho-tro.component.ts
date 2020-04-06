import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phan-mem-ho-tro',
  templateUrl: './phan-mem-ho-tro.component.html',
})
export class PhanMemHoTroComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onNavigate(link) {
    window.open(link, '_blank');
  }
}
