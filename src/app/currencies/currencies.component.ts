import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CountriesService } from '../services/countries/countries.service';
import { CurrencyService } from '../services/currency/currency.service';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {

  currencies:any=[];

  @ViewChild('closebutton') closebutton: any;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.getCurrencies();
  }

  getCurrencies() {
    this.currencyService.getCurrencies().subscribe((data: any) => {
      this.currencies = data;
    })
  }

  addCurrency(form: NgForm) {
    this.closebutton.nativeElement.click();
    this.currencyService.addCurrency(form.value).subscribe((data: any) => {
      this.currencies.push(data);
      form.reset();
    })
  }

  deleteCurrency(id:any) {
    this.currencyService.deleteRegion(id).subscribe((data) => {
      this.currencies = this.currencies.filter((item:any) => item.id != id);
    })
  }

}
