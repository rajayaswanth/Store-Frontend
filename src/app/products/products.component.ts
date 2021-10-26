import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:any=[];

  @ViewChild('closebutton') closebutton: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((data: any) => {
      console.log(data);
      this.products = data;
    })
  }

  addProduct(form: NgForm) {
    this.closebutton.nativeElement.click();
    this.productService.addProduct(form.value).subscribe((data: any) => {
      this.products.push(data);
      form.reset();
    })
  }

  deleteProduct(id:any) {
    this.productService.deleteProduct(id).subscribe((data) => {
      this.products = this.products.filter((item:any) => item.id != id);
    })
  }

}
