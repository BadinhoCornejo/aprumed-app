import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExtNavbarComponent } from './components/layout/ext-navbar/ext-navbar.component';
import { IntNavbarComponent } from './components/layout/int-navbar/int-navbar.component';
import { IntSidebarComponent } from './components/layout/int-sidebar/int-sidebar.component';
import { ExtAppLayoutComponent } from './components/layout/ext-app-layout/ext-app-layout.component';
import { IntAppLayoutComponent } from './components/layout/int-app-layout/int-app-layout.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ExtHeaderComponent } from './components/layout/ext-header/ext-header.component';
import { ExtMainSliderComponent } from './components/layout/ext-main-slider/ext-main-slider.component';
import { BooksComponent } from './components/books/books.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { UsersComponent } from './components/users/users.component';
import { BooksItemsComponent } from './components/books-items/books-items.component';
import { CartComponent } from './components/cart/cart.component';
import { SaleDetailComponent } from './components/sale-detail/sale-detail.component';
import { StoreLocationComponent } from './components/store-location/store-location.component';
import { SalesComponent } from './components/sales/sales.component';

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
    BooksItemsComponent,
    CartComponent,
    SaleDetailComponent,
    StoreLocationComponent,
    SalesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
