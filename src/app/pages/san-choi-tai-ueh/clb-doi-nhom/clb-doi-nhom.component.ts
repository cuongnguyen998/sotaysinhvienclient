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
      image:
        "../../../../assets/img/SanChoiTaiUeh/ClbDoiNhom/58419122_2172571956156206_6858805318487375872_o.jpg"
    },
    {
      text: "",
      image:
        "../../../../assets/img/SanChoiTaiUeh/ClbDoiNhom/69885980_2555106861207307_7673021316970053632_o.jpg"
    },
    {
      text: "",
      image: "../../../../assets/img/SanChoiTaiUeh/ClbDoiNhom/IMG_9659.png"
    },
    {
      text: "",
      image:
        "../../../../assets/img/SanChoiTaiUeh/ClbDoiNhom/IMG_9681---Copy.png"
    },
    {
      text: "",
      image: "../../../../assets/img/SanChoiTaiUeh/ClbDoiNhom/IMG_9872.png"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
