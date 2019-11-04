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

  getUsers() {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    return this.httpClient.get("http://localhost:8080/users/", {
      headers: headers
    });
  }

  getTiposUsuario() {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    return this.httpClient.get("http://localhost:8080/users/tiposUsuario", {
      headers: headers
    });
  }

  addUser(usuario: any) {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.httpClient.post("http://localhost:8080/users/new", usuario, {
      headers: headers
    });
  }

  editUser(usuario: any) {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.httpClient.put("http://localhost:8080/users/edit", usuario, {
      headers: headers
    });
  }

  findAvatarByName(avatar: any) {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.httpClient.post(
      "http://localhost:8080/users/buscarAvatar",
      avatar,
      {
        headers: headers
      }
    );
  }

  addAvatar(avatar: any) {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.httpClient.post(
      "http://localhost:8080/users/addAvatar",
      avatar,
      {
        headers: headers
      }
    );
  }
}
