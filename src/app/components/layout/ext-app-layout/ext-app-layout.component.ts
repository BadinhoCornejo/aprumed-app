import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-ext-app-layout",
  templateUrl: "./ext-app-layout.component.html",
  styleUrls: ["./ext-app-layout.component.sass"]
})
export class ExtAppLayoutComponent implements OnInit {
  user: any;
  welcomeName: String;

  constructor(private toastr: ToastrService) {
    this.user = JSON.parse(localStorage.getItem("user"));

    if (this.user !== null) {
      this.welcomeName = this.user.nombre.split(" ", 1);
      this.toastr.info(
        "¿Buscas algo nuevo para leer?",
        "¡Hola! " + this.welcomeName + "."
      );
    } else {
      this.toastr.info("Inicia sesión para poder comprar", "¡Bienvenido!");
    }
  }

  ngOnInit() {}
}
