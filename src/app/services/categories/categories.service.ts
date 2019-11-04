import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CategoriesService {
  constructor(private httpClient: HttpClient) {}

  listCategories(): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });

    return this.httpClient.get("http://localhost:8080/categories/", {
      headers: headers
    });
  }

  editCategorie(categoria: any) {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.httpClient.put(
      "http://localhost:8080/categories/edit",
      categoria,
      {
        headers: headers
      }
    );
  }

  newCategorie(categoria: any) {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.httpClient.post(
      "http://localhost:8080/categories/new",
      categoria,
      {
        headers: headers
      }
    );
  }
}
