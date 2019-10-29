import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  private isAdminLog: Boolean = false;
  user: any;
  constructor(private httpClient: HttpClient) {
    this.user = JSON.parse(localStorage.getItem("user"));
    console.log(this.user);
    if (this.user === null) {
      this.isAdminLog = false;
    } else if (this.user.tipoUsuario.tipoUsuarioID === 2) {
      this.isAdminLog = true;
    }
  }

  setIsAdminLog(value: Boolean) {
    this.isAdminLog = value;
  }

  get isAdmin() {
    return this.isAdminLog;
  }

  verificarAcceso(_usuario: any) {
    let usuario = JSON.stringify(_usuario);
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.httpClient.post("http://localhost:8080/users/login", usuario, {
      headers: headers
    });
  }
}
