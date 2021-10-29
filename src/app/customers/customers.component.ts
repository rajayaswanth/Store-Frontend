import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../services/countries/countries.service';
import { CustomerService } from '../services/customer/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: any = [];
  selectedValue = null;
  countries: any = [];

  @ViewChild('closebutton') closebutton: any;
  @ViewChild('closedeletebutton') closedeletebutton: any;

  constructor(private customerService: CustomerService, private countryService: CountriesService, public fb: FormBuilder) { }

  registrationForm = this.fb.group({
    id: [''],
    firstName: [''],
    lastName: [''],
    email: [''],
    phone: [''],
    country: ['']
  })

  changeCountry(c: any) {
    this.country?.setValue(c.target.value, {
      onlySelf: true
    })
  }

  get country() {
    return this.registrationForm.get('country');
  }

  ngOnInit(): void {
    this.getCustomers();
    this.getCountries();
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe((data: any) => {
      this.customers = data;
    })
  }

  getCountries() {
    this.countryService.getCountries().subscribe((data: any) => {
      this.countries = data;
    })
  }

  addCustomer() {
    this.closebutton.nativeElement.click();
    if (!this.registrationForm.valid) {
      console.log("error")
    } else {
      this.customerService.addCustomer(this.registrationForm.value).subscribe((data: any) => {
        this.customers.push(data);
      })
    }
    this.registrationForm.reset();
  }

  updateCustomer() {
    this.closedeletebutton.nativeElement.click();
    if (!this.registrationForm.valid) {
      console.log("error")
    } else {
      this.customerService.updateCustomer(this.registrationForm.value).subscribe((data: any) => {
        this.customers = this.customers.filter((item: any) => item.id != data.id);
        this.customers.push(data);
      })
    }
    this.registrationForm.reset();
  }

  deleteCustomer(id: any) {
    this.customerService.deleteCustomer(id).subscribe((data) => {
      this.customers = this.customers.filter((item: any) => item.id != id);
    })
  }

  updateForm(customer: any) {
    this.registrationForm.get("id")?.setValue(customer.id);
    this.registrationForm.get("firstName")?.setValue(customer.firstName);
    this.registrationForm.get("lastName")?.setValue(customer.lastName);
    this.registrationForm.get("email")?.setValue(customer.email);
    this.registrationForm.get("phone")?.setValue(customer.phone);
    this.registrationForm.get("country")?.setValue(customer.country.countryId);
  }

}
