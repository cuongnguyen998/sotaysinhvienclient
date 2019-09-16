import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-hoat-dong-van-the-my",
  templateUrl: "./hoat-dong-van-the-my.component.html",
  styleUrls: ["./hoat-dong-van-the-my.component.scss"]
})
export class HoatDongVanTheMyComponent implements OnInit {
  images = [
    {
      text: "",
      image: "../../../../assets/img/SanChoiTaiUeh/VanTheMy/slide__left.png"
    },
    {
      text: "",
      image: "../../../../assets/img/SanChoiTaiUeh/VanTheMy/slide__center.png"
    },
    {
      text: "",
      image: "../../../../assets/img/SanChoiTaiUeh/VanTheMy/slide__right.png"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
