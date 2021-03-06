import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-int-app-layout",
  templateUrl: "./int-app-layout.component.html",
  styleUrls: ["./int-app-layout.component.sass"]
})
export class IntAppLayoutComponent implements OnInit {
  private user: any;
  nombres: String;
  welcomeName: String;

  //For sidebar
  opened = true;
  over = "side";
  expandHeight = "42px";
  collapseHeight = "42px";
  displayMode = "flat";
  constructor(private toastr: ToastrService) {
    this.user = JSON.parse(sessionStorage.getItem("user"));
    this.nombres =
      this.user.nombre.split(" ", 1) + " " + this.user.apellido.split(" ", 1);

    this.welcomeName = this.user.nombre.split(" ", 1);
    this.toastr.info(
      "¡Bienvenido de nuevo! " + this.welcomeName + "."
    );
  }

  setUser(_user: any) {
    this.user = _user;
  }

  get getUser() {
    return this.user;
  }
  ngOnInit() {}

  signOut() {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("basicauth");
    window.location.reload();
  }
}
