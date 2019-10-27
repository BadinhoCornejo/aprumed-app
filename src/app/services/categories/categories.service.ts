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
      "Content-Type": "application/json",
    });

    return this.httpClient.get("http://localhost:8080/categories/", { headers: headers });
  }
}
