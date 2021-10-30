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
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { StoreComponent } from './store/store.component';
import { AuthGuard } from './services/AuthGuard';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SalesAddComponent } from './sales-add/sales-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SalesComponent,
    ProductsComponent,
    CountriesComponent,
    CurrenciesComponent,
    RegionComponent,
    CustomersComponent,
    AuthenticateComponent,
    StoreComponent,
    SalesAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MultiSelectModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
