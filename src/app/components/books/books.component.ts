import { Component, OnInit } from "@angular/core";
import { BooksService } from "../../services/books/books.service";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.sass"]
})
export class BooksComponent implements OnInit {
  libros: any = [];

  breakpoint: number;
  rowHeight: string;

  constructor(private booksService: BooksService) {}

  ngOnInit() {
    this.breakpoint = window.innerWidth <= 900 ? 1 : 4;
    this.rowHeight = window.innerWidth <= 900 ? "1:1.2" : "1:1.5";
    this.listBooks();
  }

  listBooks() {
    this.booksService.listarLibros().subscribe(
      result => {
        this.libros = result;
      },
      error => {
        console.error(JSON.stringify(error));
      }
    );
  }

  onResize(event: any) {
    this.breakpoint = event.target.innerWidth <= 900 ? 1 : 4;
    this.rowHeight = event.target.innerWidth <= 900 ? "1:1.2" : "1:1.5";
  }
}
