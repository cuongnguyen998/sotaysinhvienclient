import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";

import { LocationStrategy, PathLocationStrategy } from "@angular/common";

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}
