import { Component, OnInit } from "@angular/core";
import { SalesService } from "src/app/services/sales/sales.service";

@Component({
  selector: "app-ext-app-toolbar",
  templateUrl: "./ext-app-toolbar.component.html",
  styleUrls: ["./ext-app-toolbar.component.sass"]
})
export class ExtAppToolbarComponent implements OnInit {
  user: any = JSON.parse(localStorage.getItem("user"));
  items: number;
  ejemplares: any = [];

  constructor(private salesService: SalesService) {
    this.myCart();
  }

  ngOnInit() {}

  signOut() {
    localStorage.removeItem("user");
    window.location.reload();
  }

  myCart() {
    if (this.user !== null) {
      this.salesService.myCart(this.user.usuarioID).subscribe(
        result => {
          this.ejemplares = result;
          this.items = this.ejemplares.length;
        },
        error => {
          console.error(JSON.stringify(error));
        }
      );
    }
  }
}
