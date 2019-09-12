import { Component, OnInit } from "@angular/core";
import { ROUTE, RouteInfo } from "src/app/web.config";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  ListNavbar: RouteInfo[];

  constructor() {}

  ngOnInit() {
    this.ListNavbar = ROUTE;
  }
}
