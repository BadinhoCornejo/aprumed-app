import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  verificarAcceso(user: any) {
    let usuario = JSON.stringify(user);
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.httpClient.post("http://localhost:8080/users/login", usuario, {
      headers: headers
    });
  }
}
