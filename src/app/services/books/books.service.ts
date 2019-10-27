import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private httpClient: HttpClient) { }

  listarLibros(){
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    });

    return this.httpClient.get("http://localhost:8080/books/", { headers: headers });
  }
}
