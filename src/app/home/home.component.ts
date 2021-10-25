import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  page="sales";

  constructor() { }

  ngOnInit(): void {
  }

  changePage(gotoPage: string) {
    this.page = gotoPage;
  }

}
