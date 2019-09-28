import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-hoat-dong-doan",
  templateUrl: "./hoat-dong-doan.component.html",
  styleUrls: ["./hoat-dong-doan.component.scss"]
})
export class HoatDongDoanComponent implements OnInit {
  imagesHocThuat = [
    {
      text: "",
      image:
        "../../../../assets/img/SanChoiTaiUeh/HoatDongDoanHoi/50829580_2430407420307460_2441977967664955392_o.jpg"
    },
    {
      text: "",
      image:
        "../../../../assets/img/SanChoiTaiUeh/HoatDongDoanHoi/57485027_2172572822822786_5818018679765336064_o.jpg"
    },
    {
      text: "",
      image:
        "../../../../assets/img/SanChoiTaiUeh/HoatDongDoanHoi/69149715_2400778803309525_9030165729067925504_o.jpg"
    }
  ];

  imagesVanHoaVanNghe = [
    {
      text: "",
      image:
        "../../../../assets/img/SanChoiTaiUeh/HoatDongDoanHoi/55826869_2149887235131940_1929805604403019776_o.jpg"
    },
    {
      text: "",
      image:
        "../../../../assets/img/SanChoiTaiUeh/HoatDongDoanHoi/59519055_2209039595883370_3899693535829426176_o.jpg"
    },
    {
      text: "",
      image:
        "../../../../assets/img/SanChoiTaiUeh/HoatDongDoanHoi/69590770_2385498188237509_8481554901921431552_o.jpg"
    }
  ];

  imagesTinhNguyen = [
    {
      text: "",
      image:
        "../../../../assets/img/SanChoiTaiUeh/HoatDongDoanHoi/66266769_2455763181143125_2632610035263340544_o.jpg"
    },
    {
      text: "",
      image:
        "../../../../assets/img/SanChoiTaiUeh/HoatDongDoanHoi/67317913_2469922673060509_7993863504354344960_o.jpg"
    },
    {
      text: "",
      image:
        "../../../../assets/img/SanChoiTaiUeh/HoatDongDoanHoi/67614300_2501439613242148_4804098019257483264_o.jpg"
    }
  ];

  imagesTuHao = [
    {
      text: "",
      image:
        "../../../../assets/img/SanChoiTaiUeh/HoatDongDoanHoi/50009502_2093562690701083_4079306293599272960_o.jpg"
    },
    {
      text: "",
      image:
        "../../../../assets/img/SanChoiTaiUeh/HoatDongDoanHoi/54799627_2360745363970735_3347159724209471488_o-2.jpg"
    },
    {
      text: "",
      image:
        "../../../../assets/img/SanChoiTaiUeh/HoatDongDoanHoi/54799627_2360745363970735_3347159724209471488_o-2.jpg"
    },
    {
      text: "",
      image: "../../../../assets/img/SanChoiTaiUeh/HoatDongDoanHoi/KNDV2.png"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
