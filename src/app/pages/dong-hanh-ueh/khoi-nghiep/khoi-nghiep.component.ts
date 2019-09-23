import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-khoi-nghiep",
  templateUrl: "./khoi-nghiep.component.html",
  styleUrls: ["./khoi-nghiep.component.scss"]
})
export class KhoiNghiepComponent implements OnInit {
  images = [
    {
      text: "",
      image: "../../../../assets/img/DongHanhUeh/KhoiNghiep/1.png"
    },
    {
      text: "",
      image: "../../../../assets/img/DongHanhUeh/KhoiNghiep/2.png"
    },
    {
      text: "",
      image: "../../../../assets/img/DongHanhUeh/KhoiNghiep/3.png"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
