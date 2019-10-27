import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

//ROUTING
import { RouterModule } from "@angular/router";

//Html Client
import { HttpClientModule } from "@angular/common/http";

//STYLES

//Toast
import { ToastrModule } from "ngx-toastr";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatBadgeModule } from "@angular/material/badge";
//Forms
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatListModule } from "@angular/material/list";
import { MatInputModule } from "@angular/material/input";
//Angular Material
import { MatMenuModule } from "@angular/material/menu";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatNativeDateModule } from "@angular/material";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatChipsModule } from "@angular/material/chips";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

//COMPONENTS
import { AppComponent } from "./app.component";
import { ExtNavbarComponent } from "./components/layout/ext-navbar/ext-navbar.component";
import { IntNavbarComponent } from "./components/layout/int-navbar/int-navbar.component";
import { IntSidebarComponent } from "./components/layout/int-sidebar/int-sidebar.component";
import { ExtAppLayoutComponent } from "./components/layout/ext-app-layout/ext-app-layout.component";
import { IntAppLayoutComponent } from "./components/layout/int-app-layout/int-app-layout.component";
import { FooterComponent } from "./components/layout/footer/footer.component";
import { ExtHeaderComponent } from "./components/layout/ext-header/ext-header.component";
import { ExtMainSliderComponent } from "./components/layout/ext-main-slider/ext-main-slider.component";
import { BooksComponent } from "./components/books/books.component";
import { CategoriesComponent } from "./components/categories/categories.component";
import { UsersComponent } from "./components/users/users.component";
import { CartComponent } from "./components/cart/cart.component";
import { SaleDetailComponent } from "./components/sale-detail/sale-detail.component";
import { StoreLocationComponent } from "./components/store-location/store-location.component";
import { SalesComponent } from "./components/sales/sales.component";

//SERVICES
import { BooksService } from "./services/books/books.service";
import { CategoriesService } from "./services/categories/categories.service";
import { SalesService } from "./services/sales/sales.service";
import { UsersService } from "./services/users/users.service";
import { ExtAppToolbarComponent } from "./components/layout/ext-app-toolbar/ext-app-toolbar.component";
import { BookCardComponent } from "./components/book-card/book-card.component";
import { LoginComponent } from "./components/layout/login/login.component";
import { SignupComponent } from "./components/layout/signup/signup.component";

@NgModule({
  declarations: [
    AppComponent,
    ExtNavbarComponent,
    IntNavbarComponent,
    IntSidebarComponent,
    ExtAppLayoutComponent,
    IntAppLayoutComponent,
    FooterComponent,
    ExtHeaderComponent,
    ExtMainSliderComponent,
    BooksComponent,
    CategoriesComponent,
    UsersComponent,
    CartComponent,
    SaleDetailComponent,
    StoreLocationComponent,
    SalesComponent,
    ExtAppToolbarComponent,
    BookCardComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: "",
        component: ExtAppLayoutComponent
      },
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "signup",
        component: SignupComponent
      },
      {
        path: "admin",
        component: IntAppLayoutComponent
      }
    ]),
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: "toast-top-right",
      preventDuplicates: true
    }),
    FlexLayoutModule,
    MatMenuModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatGridListModule,
    MatChipsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule
  ],
  providers: [BooksService, UsersService, CategoriesService, SalesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
