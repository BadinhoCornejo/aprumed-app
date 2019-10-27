import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-ext-app-layout",
  templateUrl: "./ext-app-layout.component.html",
  styleUrls: ["./ext-app-layout.component.sass"]
})
export class ExtAppLayoutComponent implements OnInit {
  constructor(private toastr: ToastrService) {
    //Verify with session with localstorage
    this.toastr.info("Inicia sesión para poder comprar", "¡Bienvenido!");
  }

  ngOnInit() {}
}
