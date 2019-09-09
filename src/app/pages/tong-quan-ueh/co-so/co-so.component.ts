import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-co-so",
  templateUrl: "./co-so.component.html",
  styleUrls: ["./co-so.component.scss"]
})
export class CoSoComponent implements OnInit {
  constructor() {}

  title = "owl-carousel";

  mySlideImages = [
    "../assets/images/image1.jpg",
    "../assets/images/image2.jpeg",
    "../assets/images/image3.jpg"
  ];
  myCarouselImages = [
    "../assets/images/image1.jpg",
    "../assets/images/image2.jpeg",
    "../assets/images/image3.jpg"
  ];

  mySlideOptions = { items: 1, dots: true, nav: true };
  myCarouselOptions = { items: 3, dots: true, nav: true };

  ngOnInit() {}
}
