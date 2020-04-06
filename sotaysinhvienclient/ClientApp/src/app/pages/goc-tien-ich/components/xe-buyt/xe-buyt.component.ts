import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xe-buyt',
  templateUrl: './xe-buyt.component.html',
})
export class XeBuytComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onNavigate(link) {
    window.open(link, '_blank');
  }
}
