import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { RegionService } from '../services/region/region.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  regions: any = [];

  @ViewChild('closebutton') closebutton: any;
  @ViewChild('closedeletebutton') closedeletebutton: any;

  constructor(private regionService: RegionService, private fb: FormBuilder) { }

  registrationForm = this.fb.group({
    id: [],
    name: ['']
  })

  ngOnInit(): void {
    this.getRegions();
  }

  getRegions() {
    this.regionService.getRegions().subscribe((data: any) => {
      this.regions = data;
    })
  }

  addRegion() {
    this.closebutton.nativeElement.click();
    this.regionService.addRegion(this.registrationForm.value).subscribe((data: any) => {
      this.regions.push(data);
    })
    this.registrationForm.reset();
  }

  updateRegion() {
    this.closedeletebutton.nativeElement.click();
    this.regionService.updateRegion(this.registrationForm.value).subscribe((data: any) => {
      this.regions = this.regions.filter((item: any) => item.id != data.id);
      this.regions.push(data);
    })
    this.registrationForm.reset();
  }

  deleteRegion(id: any) {
    this.regionService.deleteRegion(id).subscribe((data) => {
      this.regions = this.regions.filter((item: any) => item.id != id);
    })
  }

  updateForm(region: any) {
    this.registrationForm.get("id")?.setValue(region.id);
    this.registrationForm.get("name")?.setValue(region.name);
  }

}
