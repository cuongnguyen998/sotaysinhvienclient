import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thong-tin-doan-hoi',
  templateUrl: './thong-tin-doan-hoi.component.html',
})
export class ThongTinDoanHoiComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onNavigate(link) {
    window.open(link, '_blank');
  }
}
