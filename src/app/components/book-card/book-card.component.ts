import { Component, OnInit, Input } from "@angular/core";
import { SalesService } from "src/app/services/sales/sales.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-book-card",
  templateUrl: "./book-card.component.html",
  styleUrls: ["./book-card.component.sass"]
})
export class BookCardComponent implements OnInit {
  @Input() ejemplar: any;
  cart: any = [];
  user: any;

  ejemplares: any = [];

  constructor(
    private salesService: SalesService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {}

  addToCart(ejemplar: any) {
    this.user = JSON.parse(localStorage.getItem("user"));

    this.cart.push(ejemplar);

    if (this.user !== null) {
      //add in cart of db
      this.salesService.addItemCarrito(ejemplar.ejemplarID).subscribe(
        result => {
          this.enviarMensaje(ejemplar);
        },
        error => {
          console.error(JSON.stringify(error));
        }
      );
    }
  }

  enviarMensaje(ejemplar: any) {
    this.toastr.info("Agregado al carrito", ejemplar.libro.titulo);
  }
}
