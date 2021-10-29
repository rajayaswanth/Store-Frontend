import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { CountriesService } from '../services/countries/countries.service';
import { CurrencyService } from '../services/currency/currency.service';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {

  currencies: any = [];

  @ViewChild('closebutton') closebutton: any;
  @ViewChild('closedeletebutton') closedeletebutton: any;

  constructor(private currencyService: CurrencyService, public fb: FormBuilder) { }

  registrationForm = this.fb.group({
    id: [''],
    name: ['']
  })

  ngOnInit(): void {
    this.getCurrencies();
  }

  getCurrencies() {
    this.currencyService.getCurrencies().subscribe((data: any) => {
      this.currencies = data;
    })
  }

  addCurrency() {
    this.closebutton.nativeElement.click();
    this.currencyService.addCurrency(this.registrationForm.value).subscribe((data: any) => {
      this.currencies.push(data);
    })
    this.registrationForm.reset();
  }

  updateCurrency() {
    this.closedeletebutton.nativeElement.click();
    this.currencyService.updateCurrency(this.registrationForm.value).subscribe((data: any) => {
      this.currencies = this.currencies.filter((item: any) => item.id != data.id);
      this.currencies.push(data);
    })
    this.registrationForm.reset();
  }

  deleteCurrency(id: any) {
    this.currencyService.deleteRegion(id).subscribe((data) => {
      this.currencies = this.currencies.filter((item: any) => item.id != id);
    })
  }

  updateForm(region: any) {
    this.registrationForm.get("id")?.setValue(region.id);
    this.registrationForm.get("name")?.setValue(region.name);
  }

}
