import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-co-so',
  templateUrl: './co-so.component.html',
})
export class CoSoComponent implements OnInit {
  constructor() {}

  images = [
    {
      text: '',
      image: 'assets/img/TongQuanUeh/CacCoSo/CN7A2521.png',
    },
    {
      text: '',
      image: 'assets/img/TongQuanUeh/CacCoSo/DHKT-Panorama.png',
    },
    {
      text: '',
      image: 'assets/img/TongQuanUeh/CacCoSo/DSCF2762.png',
    },
    {
      text: '',
      image: 'assets/img/TongQuanUeh/CacCoSo/PC-1.jpg',
    },
    {
      text: '',
      image: 'assets/img/TongQuanUeh/CacCoSo/UEH---CSA.jpg',
    },
  ];
  ngOnInit() {}
}
