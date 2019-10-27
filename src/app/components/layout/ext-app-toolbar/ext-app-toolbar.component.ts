import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ext-app-toolbar",
  templateUrl: "./ext-app-toolbar.component.html",
  styleUrls: ["./ext-app-toolbar.component.sass"]
})
export class ExtAppToolbarComponent implements OnInit {
  user: any = JSON.parse(localStorage.getItem("user"));

  constructor() {}

  ngOnInit() {}

  signUp() {
    localStorage.removeItem("user");
    window.location.reload();
  }
}
