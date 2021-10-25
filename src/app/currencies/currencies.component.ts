import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../services/countries/countries.service';
import { CurrencyService } from '../services/currency/currency.service';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {

  currencies:any=[];

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.getCurrencies();
  }

  getCurrencies() {
    this.currencyService.getCurrencies().subscribe((data: any) => {
      console.log(data);
      this.currencies = data;
    })
  }

}
