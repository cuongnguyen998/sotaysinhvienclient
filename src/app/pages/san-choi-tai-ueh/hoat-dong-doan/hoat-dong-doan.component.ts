import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-hoat-dong-doan",
  templateUrl: "./hoat-dong-doan.component.html",
  styleUrls: ["./hoat-dong-doan.component.scss"]
})
export class HoatDongDoanComponent implements OnInit {
  images = [
    {
      text: "",
      image:
        "../../../../assets/img/SanChoiTaiUeh/HoatDongDoanHoi/slide__center.png"
    },
    {
      text: "",
      image:
        "../../../../assets/img/SanChoiTaiUeh/HoatDongDoanHoi/slide__center.png"
    },
    {
      text: "",
      image:
        "../../../../assets/img/SanChoiTaiUeh/HoatDongDoanHoi/slide__center.png"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
