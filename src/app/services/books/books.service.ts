import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { headers } from "../../../headers.js";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class BooksService {
  constructor(private httpClient: HttpClient) {}

  listarEjemplares(i: number) {
    return this.httpClient.get(
      `http://localhost:8080/books/mainEjemplares/${i}`,
      {
        headers: headers
      }
    );
  }

  searchLibros(parameter: String) {
    return this.httpClient.get(
      `http://localhost:8080/books/searchEjemplar/${parameter}`,
      {
        headers: headers
      }
    );
  }

  verLibro(libroID: number) {
    return this.httpClient.get(
      `http://localhost:8080/books/verLibro/${libroID}`,
      {
        headers: headers
      }
    );
  }

  listarLibros() {
    return this.httpClient.get("http://localhost:8080/books/", {
      headers: headers
    });
  }

  agregarEjemplares(_ejemplares: any) {
    let ejemplares = JSON.stringify(_ejemplares);

    return this.httpClient.post(
      "http://localhost:8080/books/addEjemplares",
      ejemplares,
      {
        headers: headers
      }
    );
  }

  addLibro(libro: any) {
    return this.httpClient.post("http://localhost:8080/books/new", libro, {
      headers: headers
    });
  }

  editLibro(libro: any) {
    return this.httpClient.put("http://localhost:8080/books/edit", libro, {
      headers: headers
    });
  }

  getLibroEjemplares(libroID: number) {
    return this.httpClient.get(
      `http://localhost:8080/books/ejemplaresLibro/${libroID}`,
      {
        headers: headers
      }
    );
  }

  deleteEjemplar(ejemplares: any) {
    return this.httpClient.put(
      `http://localhost:8080/books/deleteEjemplar`,
      ejemplares,
      {
        headers: headers
      }
    );
  }

  findPortadaByName(portada: any) {
    return this.httpClient.post(
      "http://localhost:8080/books/buscarPortada",
      portada,
      {
        headers: headers
      }
    );
  }

  addPortada(portada: any) {
    return this.httpClient.post(
      "http://localhost:8080/books/addPortada",
      portada,
      {
        headers: headers
      }
    );
  }
}
