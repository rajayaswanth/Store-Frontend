import { Component, OnInit } from '@angular/core';
import { SalesService } from '../services/sales/sales.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  sales:any=[];

  constructor(private salesService: SalesService) { }

  ngOnInit(): void {
    this.getSales();
  }

  getSales() {
    this.salesService.getSales().subscribe((data: any) => {
      console.log(data);
      this.sales = data;
    })
  }

}
