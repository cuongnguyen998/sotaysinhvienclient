import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-clb-doi-nhom",
  templateUrl: "./clb-doi-nhom.component.html",
  styleUrls: ["./clb-doi-nhom.component.scss"]
})
export class ClbDoiNhomComponent implements OnInit {
  images = [
    {
      text: "",
      image: "../../../../assets/img/SanChoiTaiUeh/ClbDoiNhom/clb_slide_1.png"
    },
    {
      text: "",
      image: "../../../../assets/img/SanChoiTaiUeh/ClbDoiNhom/clb_slide_2.png"
    },
    {
      text: "",
      image: "../../../../assets/img/SanChoiTaiUeh/ClbDoiNhom/clb_slide_3.png"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
