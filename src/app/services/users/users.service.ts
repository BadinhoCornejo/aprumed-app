import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { headers } from "../../../headers.js";
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

    return this.httpClient.post("http://localhost:8080/users/login", usuario, {
      headers: headers
    });
  }

  getUsers() {
    return this.httpClient.get("http://localhost:8080/users/", {
      headers: headers
    });
  }

  getTiposUsuario() {
    return this.httpClient.get("http://localhost:8080/users/tiposUsuario", {
      headers: headers
    });
  }

  addUser(usuario: any) {
    return this.httpClient.post("http://localhost:8080/users/new", usuario, {
      headers: headers
    });
  }

  editUser(usuario: any) {
    return this.httpClient.put("http://localhost:8080/users/edit", usuario, {
      headers: headers
    });
  }

  findAvatarByName(avatar: any) {
    return this.httpClient.post(
      "http://localhost:8080/users/buscarAvatar",
      avatar,
      {
        headers: headers
      }
    );
  }

  addAvatar(avatar: any) {
    return this.httpClient.post(
      "http://localhost:8080/users/addAvatar",
      avatar,
      {
        headers: headers
      }
    );
  }

  verifyEmail(email: String) {
    return this.httpClient.post(
      `http://localhost:8080/users/verificarEmail/${email}`,
      {
        headers: headers
      }
    );
  }
}
