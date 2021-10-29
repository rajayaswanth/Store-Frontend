import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CountriesService } from '../services/countries/countries.service';
import { RegionService } from '../services/region/region.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countries: any = [];
  regions: any = [];
  selectedValue = null;

  @ViewChild('closebutton') closebutton: any;
  @ViewChild('closedeletebutton') closedeletebutton: any;

  constructor(private countryService: CountriesService, private regionService: RegionService, public fb: FormBuilder) { }

  registrationForm = this.fb.group({
    countryId: [''],
    name: [''],
    region: ['', [Validators.required]]
  })

  changeRegion(c: any) {
    this.region?.setValue(c.target.value, {
      onlySelf: true
    })
  }

  get region() {
    return this.registrationForm.get('region');
  }

  ngOnInit(): void {
    this.getCountries();
    this.getRegions();
  }

  getRegions() {
    this.regionService.getRegions().subscribe((data: any) => {
      this.regions = data;
    })
  }

  getCountries() {
    this.countryService.getCountries().subscribe((data: any) => {
      this.countries = data;
    })
  }

  addCountry() {
    this.closebutton.nativeElement.click();
    if (!this.registrationForm.valid) {
      console.log("error")
    } else {
      this.countryService.addCountry(this.registrationForm.value).subscribe((data: any) => {
        this.countries.push(data);
      })
    }
    this.registrationForm.reset();
  }

  updateCountry() {
    this.closedeletebutton.nativeElement.click();
    if (!this.registrationForm.valid) {
      console.log("error")
    } else {
      this.countryService.updateCountry(this.registrationForm.value).subscribe((data: any) => {
        this.countries = this.countries.filter((item: any) => item.countryId != data.countryId);
        this.countries.push(data);
      })
    }
    this.registrationForm.reset();
  }

  deleteCountry(id: any) {
    this.countryService.deleteCountry(id).subscribe((data) => {
      this.countries = this.countries.filter((item: any) => item.countryId != id);
    })
  }

  updateForm(country: any) {
    this.registrationForm.get("countryId")?.setValue(country.countryId);
    this.registrationForm.get("name")?.setValue(country.name);
    this.registrationForm.get("region")?.setValue(country.region.id);
  }

}
