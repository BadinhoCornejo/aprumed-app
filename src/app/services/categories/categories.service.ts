import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { headers } from "../../../headers.js";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CategoriesService {
  constructor(private httpClient: HttpClient) {}

  listCategories(): Observable<any> {
    return this.httpClient.get("http://localhost:8080/categories/", {
      headers: headers
    });
  }

  editCategorie(categoria: any) {
    return this.httpClient.put(
      "http://localhost:8080/categories/edit",
      categoria,
      {
        headers: headers
      }
    );
  }

  newCategorie(categoria: any) {
    return this.httpClient.post(
      "http://localhost:8080/categories/new",
      categoria,
      {
        headers: headers
      }
    );
  }
}
