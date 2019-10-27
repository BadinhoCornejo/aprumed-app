import { Component, OnInit } from "@angular/core";
import { CategoriesService } from "../../services/categories/categories.service";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.sass"]
})
export class CategoriesComponent implements OnInit {
  categorias: any = [];
  breakpoint: number;
  constructor(private categoriaService: CategoriesService) {}

  ngOnInit() {
    this.breakpoint = window.innerWidth <= 900 ? 2 : 4;
    this.listCategories();
  }

  listCategories() {
    this.categoriaService.listCategories().subscribe(
      result => {
        this.categorias = result.slice(0, 8);
      },
      error => {
        console.error(JSON.stringify(error));
      }
    );
  }

  onResize(event: any) {
    this.breakpoint = event.target.innerWidth <= 900 ? 2 : 4;
  }
}
