import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../services/countries/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countries:any=[];

  constructor(private countryService: CountriesService) { }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this.countryService.getCountries().subscribe((data: any) => {
      console.log(data);
      this.countries = data;
    })
  }

}
