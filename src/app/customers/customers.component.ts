import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CountriesService } from '../services/countries/countries.service';
import { CustomerService } from '../services/customer/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers:any=[];
  selectedValue = null;
  countries:any=[];

  @ViewChild('closebutton') closebutton: any;

  constructor(private customerService: CustomerService, private countryService: CountriesService, public fb: FormBuilder) { }

  registrationForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    email: [''],
    phone: [''],
    country: ['', [Validators.required]]
  })

  changeCountry(c:any) {
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
  }

  deleteCustomer(id:any) {
    this.customerService.deleteCustomer(id).subscribe((data) => {
      this.customers = this.customers.filter((item:any) => item.id != id);
    })
  }

}
