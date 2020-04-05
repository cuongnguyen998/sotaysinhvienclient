import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tin-dung-hoc-tap',
  templateUrl: './tin-dung-hoc-tap.component.html',
})
export class TinDungHocTapComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onNavigate(link) {
    window.open(link, '_blank');
  }
}
