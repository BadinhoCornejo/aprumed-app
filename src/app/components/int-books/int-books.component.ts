import { Component, OnInit, ViewChild, Inject } from "@angular/core";
import { BooksService } from "src/app/services/books/books.service";
import {
  MatTableDataSource,
  MatPaginator,
  MatSort,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
  MatSnackBar
} from "@angular/material";
import {
  FormGroup,
  FormArray,
  FormBuilder,
  Validators,
  Form
} from "@angular/forms";

@Component({
  selector: "app-int-books",
  templateUrl: "./int-books.component.html",
  styleUrls: ["./int-books.component.sass"]
})
export class IntBooksComponent implements OnInit {
  displayedColumns: string[] = [
    "position",
    "titulo",
    "autor",
    "fechapub",
    "isbn",
    "stock",
    "categoria",
    "precio",
    "estado",
    "opciones"
  ];
  books: any = [];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private bookService: BooksService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.getBooks();
  }

  ngOnInit() {}

  getBooks() {
    this.bookService.listarLibros().subscribe(
      result => {
        this.books = result;
        this.dataSource = new MatTableDataSource<any>(this.books);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => {
        console.error(JSON.stringify(error));
      }
    );
  }

  aplicarFiltro(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  openAddEjemplarDialog(_id: number, _titulo: string) {
    let action = "máquina";
    const dialogRef = this.dialog.open(DialogAddEjemplarDialog, {
      width: "550px",
      data: { libroID: _id, titulo: _titulo }
    });
    dialogRef.afterClosed().subscribe(result => {
      result === 1
        ? this.snackBar.open("Agregaste " + result + " ejemplar!", action, {
            duration: 2000
          })
        : this.snackBar.open("Agregaste " + result + " ejemplares!", action, {
            duration: 2000
          });
      this.getBooks();
    });
  }
  openEjemplaresDialog(_id: number, _titulo: string) {
    const dialogRef = this.dialog.open(DialogEjemplaresDialog, {
      width: "550px",
      data: { libroID: _id, titulo: _titulo }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.getBooks();
    });
  }
}

//Modal para agregar ejemplar
@Component({
  selector: "dialog-add-ejemplar-dialog",
  templateUrl: "dialog-add-ejemplar-dialog.html"
})
export class DialogAddEjemplarDialog implements OnInit {
  dynamicForm: FormGroup;
  submitted = false;
  items: FormArray;
  libro: any;

  constructor(
    private formBuilder: FormBuilder,
    private booksService: BooksService,
    public dialogRef: MatDialogRef<DialogAddEjemplarDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.libro = data;
  }

  ngOnInit() {
    this.dynamicForm = this.formBuilder.group({
      nEjemplares: ["", Validators.required],
      items: new FormArray([])
    });
  }

  get f() {
    return this.dynamicForm.controls;
  }
  get e() {
    return this.f.items as FormArray;
  }

  createForm(e: any) {
    const nEjemplares = e.target.value || 0;
    if (this.e.length < nEjemplares) {
      for (let i = this.e.length; i < nEjemplares; i++) {
        this.e.push(
          this.formBuilder.group({
            sku: ["", [Validators.required, Validators.minLength(12)]]
          })
        );
      }
    } else {
      for (let i = this.e.length; i >= nEjemplares; i--) {
        this.e.removeAt(i);
      }
    }
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.dynamicForm.invalid) {
      return;
    }

    let result = this.dynamicForm.value;

    let ejemplares = result.items;

    ejemplares.map(ejemplar => {
      ejemplar["libro"] = this.libro;
    });

    this.booksService.agregarEjemplares(ejemplares).subscribe(
      result => {
        console.log("success");
      },
      error => {
        console.error(JSON.stringify(error));
      }
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
//Modal para ver los ejemplares de un libro
@Component({
  selector: "dialog-ejemplares-dialog",
  templateUrl: "dialog-ejemplares-dialog.html"
})
export class DialogEjemplaresDialog implements OnInit {
  displayedColumns: string[] = ["position", "sku", "estado", "opciones"];
  libro: any;
  ejemplares: any = [];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private booksService: BooksService,
    public dialogRef: MatDialogRef<DialogEjemplaresDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.libro = data;
  }

  ngOnInit() {
    this.getEjemplares();
  }

  getEjemplares() {
    this.booksService.getLibroEjemplares(this.libro.libroID).subscribe(
      result => {
        this.ejemplares = result;
        this.dataSource = new MatTableDataSource<any>(this.ejemplares);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => {
        console.error(JSON.stringify(error));
      }
    );
  }

  aplicarFiltro(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
