import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SalesComponent } from './sales/sales.component';
import { ProductsComponent } from './products/products.component';
import { CountriesComponent } from './countries/countries.component';
import { CurrenciesComponent } from './currencies/currencies.component';
import { RegionComponent } from './region/region.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomersComponent } from './customers/customers.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SalesComponent,
    ProductsComponent,
    CountriesComponent,
    CurrenciesComponent,
    RegionComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
