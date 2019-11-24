import { Component, OnInit, Input } from "@angular/core";
import { BooksService } from "../../services/books/books.service";
import { CategoriesService } from "../../services/categories/categories.service";

@Component({
  selector: "app-books-section",
  templateUrl: "./books-section.component.html",
  styleUrls: ["./books-section.component.sass"]
})
export class BooksSectionComponent implements OnInit {
  @Input() categoryId: number;

  ejemplares: any = [];
  sections: any = [];
  sectionsLength: number;
  category: any;

  constructor(
    private booksService: BooksService,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit() {
    this.listEjemplares();
  }

  listEjemplares() {
    this.booksService
      .ejemplaresByCategorie(this.categoryId)
      .subscribe(result => {
        this.ejemplares = result;
        this.createSections();
      });
  }

  getCategory() {
    this.categoriesService.getCategoryById(this.categoryId).subscribe(
      result => {
        this.category = result;
      },
      error => {
        console.error(JSON.stringify(error));
      }
    );
  }

  createSections() {
    this.sectionsLength = this.ejemplares.length;

    this.categoriesService.getCategoryById(this.categoryId).subscribe(
      result => {
        this.category = result;
        let categoryName = this.category.nombreCategoria;

        if (this.sectionsLength <= 5) {
          let section = {
            sectionID: categoryName + "_" + 1,
            prevSection: categoryName + "_" + 0,
            nextSection: categoryName + "_" + 0,
            elements: this.ejemplares
          };
          this.sections.push(section);
        } else {
          let totalSliders =
            this.sectionsLength % 5 !== 0
              ? this.sectionsLength / 5
              : parseInt((this.sectionsLength / 5).toString()) + 1;

          let i = 0;

          while (i < totalSliders) {
            let section = {
              sectionID: categoryName + "_" + i,
              prevSection:
                i === 0
                  ? categoryName + "_" + (totalSliders - 1)
                  : categoryName + "_" + (i - 1),
              nextSection:
                i === totalSliders - 1
                  ? categoryName + "_" + 0
                  : categoryName + "_" + (i + 1),
              elements: this.ejemplares.splice(0, 5)
            };
            this.sections.push(section);
            i++;
          }
          console.log(this.sections);
          
          /**
           * while (i < this.sectionsLength) {
            let section = {
              sectionID: categoryName + "_" + i,
              prevSection:
                i === 0
                  ? categoryName + "_" + (this.sectionsLength - 1)
                  : categoryName + "_" + (i - 1),
              nextSection:
                i === this.sectionsLength - 1
                  ? categoryName + "_" + 0
                  : categoryName + "_" + (i + 1)
            };
            this.sections.push(section);
            i++;
          }
           */
        }
      },
      error => {
        console.error(JSON.stringify(error));
      }
    );
  }
}
