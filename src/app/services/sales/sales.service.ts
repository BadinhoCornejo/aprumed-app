import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SalesService {
  user: any;

  constructor(private httpClient: HttpClient) {}

  addItemCarrito(ejemplarID: number) {
    this.user = JSON.parse(localStorage.getItem("user"));

    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.httpClient.get(
      `http://localhost:8080/sales/agregarCarrito/${this.user.usuarioID}/${ejemplarID}`,
      {
        headers: headers
      }
    );
  }

  myCart(userID: number){

    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.httpClient.get(
      `http://localhost:8080/sales/${userID}/myCart`,
      {
        headers: headers
      }
    );
  }
}
