import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CurrencyService } from '../services/currency/currency.service';
import { CustomerService } from '../services/customer/customer.service';
import { ProductService } from '../services/product/product.service';
import { SalesService } from '../services/sales/sales.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  sales:any=[];
  products:any=[];
  customers:any=[];
  currencies:any=[];
  selectedProduct:any;
  selectedCustomer:any;
  selectedCurrency:any;
  selectupdatedProduct:any;
  selectupdatedCustomer:any;
  selectupdatedCurrency:any;
  @ViewChild('closebutton') closebutton: any;
  @ViewChild('closedeletebutton') closedeletebutton: any;

  constructor(private salesService: SalesService, private productService: ProductService, private customerService: CustomerService, private currencyService: CurrencyService, private fb: FormBuilder) { }

  registrationForm = this.fb.group({
    id: [],
    salesChannel: [''],
    orderNumber: [''],
    product: [''],
    customer: [''],
    currency: [''],
    netAmount: [],
    tax: [],
    shippingCost: [],
    grossAmount: []
  })

  changeProduct(c: any) {
    this.registrationForm.get('product')?.setValue(c.target.value);
  }

  changeCustomer(c: any) {
    return this.registrationForm.get('customer')?.setValue(c.target.value);
  }

  changeCurrency(c: any) {
    this.registrationForm.get('currency')?.setValue(c.target.value);
  }

  ngOnInit(): void {
    this.getSales();
    this.getProducts();
    this.getCustomers();
    this.getCurrencies();
  }

  getSales() {
    this.salesService.getSales().subscribe((data: any) => {
      this.sales = data;
    })
  }

  getProducts() {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data;
    })
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe((data: any) => {
      this.customers = data;
    })
  }

  getCurrencies() {
    this.currencyService.getCurrencies().subscribe((data: any) => {
      this.currencies = data;
    })
  }

  addSales() {
    this.closebutton.nativeElement.click();
    if (!this.registrationForm.valid) {
      console.log("error")
    } else {
      this.selectedProduct = this.products.filter((item: any) => item.id == this.registrationForm.get('product')?.value)
      this.selectedCustomer = this.customers.filter((item: any) => item.id == this.registrationForm.get('customer')?.value)
      this.selectedCurrency = this.currencies.filter((item: any) => item.id == this.registrationForm.get('currency')?.value)
      this.registrationForm.get('product')?.setValue(this.selectedProduct[0]);
      this.registrationForm.get('customer')?.setValue(this.selectedCustomer[0]);
      this.registrationForm.get('currency')?.setValue(this.selectedCurrency[0]);
      
      this.salesService.addSales(this.registrationForm.value).subscribe((data: any) => {
        this.sales.push(data);
      })
    }
    this.registrationForm.reset();
  }

  updateSales() {
    this.closedeletebutton.nativeElement.click();
    if (!this.registrationForm.valid) {
      console.log("error")
    } else {
      this.selectupdatedProduct = this.products.filter((item: any) => item.id == this.registrationForm.get('product')?.value)
      this.selectupdatedCustomer = this.customers.filter((item: any) => item.id == this.registrationForm.get('customer')?.value)
      this.selectupdatedCurrency = this.currencies.filter((item: any) => item.id == this.registrationForm.get('currency')?.value)
      
      this.registrationForm.get('product')?.setValue(this.selectupdatedProduct[0]);
      this.registrationForm.get('customer')?.setValue(this.selectupdatedCustomer[0]);
      this.registrationForm.get('currency')?.setValue(this.selectupdatedCurrency[0]);
      this.salesService.updateSales(this.registrationForm.value).subscribe((data: any) => {
        this.sales = this.sales.filter((item: any) => item.id != data.id);
        this.sales.push(data);
      })
    }
    this.registrationForm.reset();
  }

  deleteSales(id: any) {
    this.salesService.deleteSales(id).subscribe((data) => {
      this.sales = this.sales.filter((item: any) => item.id != id);
    })
  }

  updateForm(sales: any) {
    this.registrationForm.get("id")?.setValue(sales.id);
    this.registrationForm.get("salesChannel")?.setValue(sales.salesChannel);
    this.registrationForm.get("orderNumber")?.setValue(sales.orderNumber);
    this.registrationForm.get("product")?.setValue(sales.product.id);
    this.registrationForm.get("customer")?.setValue(sales.customer.id);
    this.registrationForm.get("currency")?.setValue(sales.currency.id);
    this.registrationForm.get("netAmount")?.setValue(sales.netAmount);
    this.registrationForm.get("tax")?.setValue(sales.tax);
    this.registrationForm.get("shippingCost")?.setValue(sales.shippingCost);
    this.registrationForm.get("grossAmount")?.setValue(sales.grossAmount);
  }

}
