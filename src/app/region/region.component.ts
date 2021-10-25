import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegionService } from '../services/region/region.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  regions:any=[];

  constructor(private regionService: RegionService) { }

  ngOnInit(): void {
    this.getRegions();
  }

  getRegions() {
    this.regionService.getRegions().subscribe((data: any) => {
      console.log(data);
      this.regions = data;
    })
  }

  onSubmit(form: NgForm) {
    console.log('Your form data : ', form.value);
    this.regionService.addRegion(form.value).subscribe((data: any) => {
      console.log(data);
      this.regions.push(data);
    })
  }

}
