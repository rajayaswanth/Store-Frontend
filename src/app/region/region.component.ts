import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegionService } from '../services/region/region.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  regions:any=[];

  @ViewChild('closebutton') closebutton: any;

  constructor(private regionService: RegionService) { }

  ngOnInit(): void {
    this.getRegions();
  }

  getRegions() {
    this.regionService.getRegions().subscribe((data: any) => {
      this.regions = data;
    })
  }

  addRegion(form: NgForm) {
    this.closebutton.nativeElement.click();
    this.regionService.addRegion(form.value).subscribe((data: any) => {
      this.regions.push(data);
      form.reset();
    })
  }

  deleteRegion(id:any) {
    this.regionService.deleteRegion(id).subscribe((data) => {
      this.regions = this.regions.filter((item:any) => item.id != id);
    })
  }

}
