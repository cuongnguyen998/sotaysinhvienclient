import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-co-so",
  templateUrl: "./co-so.component.html",
  styleUrls: ["./co-so.component.scss"]
})
export class CoSoComponent implements OnInit {
  constructor() {}

  images = [
    {
      text: "",
      image:
        "../../../../assets/img/SanChoiTaiUeh/HoatDongDoanHoi/slide__center.png"
    },
    {
      text: "",
      image:
        "../../../../assets/img/SanChoiTaiUeh/HoatDongDoanHoi/slide__left.png"
    },
    {
      text: "",
      image:
        "../../../../assets/img/SanChoiTaiUeh/HoatDongDoanHoi/slide__right.png"
    }
  ];
  ngOnInit() {}
}
