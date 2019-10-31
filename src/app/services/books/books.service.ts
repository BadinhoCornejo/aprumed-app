import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class BooksService {
  constructor(private httpClient: HttpClient) {}

  listarLibros() {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });

    return this.httpClient.get("http://localhost:8080/books/", {
      headers: headers
    });
  }

  agregarEjemplares(_ejemplares: any) {
    let ejemplares = JSON.stringify(_ejemplares);

    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.httpClient.post(
      "http://localhost:8080/books/addEjemplares",
      ejemplares,
      {
        headers: headers
      }
    );
  }

  getLibroEjemplares(libroID: number) {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.httpClient.get(
      `http://localhost:8080/books/ejemplaresLibro/${libroID}`,
      {
        headers: headers
      }
    );
  }

  deleteEjemplar(ejemplares: any) {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.httpClient.put(
      `http://localhost:8080/books/deleteEjemplar`,
      ejemplares,
      {
        headers: headers
      }
    );
  }
}
