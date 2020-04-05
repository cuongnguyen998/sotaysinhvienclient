import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-van-hoa-ueh',
  templateUrl: './van-hoa-ueh.component.html',
})
export class VanHoaUehComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onNavigate(link) {
    window.open(link, '_blank');
  }
}
