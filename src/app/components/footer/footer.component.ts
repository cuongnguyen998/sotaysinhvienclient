import { Component, OnInit } from "@angular/core";
import { RouteInfo, ROUTE } from "src/app/web.config";
import { Router } from "@angular/router";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  ListNavbar: RouteInfo[];
  constructor(private router: Router) {}

  ngOnInit() {
    this.ListNavbar = ROUTE;
    this.ListNavbar.map((item, index) => {
      item.childrenPath.map((route, i) => {
        var comparePath = item.path + route.path;
        if (this.router.url === comparePath) {
          console.log("cc");
        }
      });
    });
  }
}
