import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any = [];

  @ViewChild('closebutton') closebutton: any;
  @ViewChild('closedeletebutton') closedeletebutton: any;

  constructor(private productService: ProductService, private fb: FormBuilder) { }

  registrationForm = this.fb.group({
    id: [''],
    name: [''],
    shortDescription: [''],
    fullDescription: [''],
    size: [''],
    colour: ['']
  })

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data;
    })
  }

  addProduct() {
    this.closebutton.nativeElement.click();
    this.productService.addProduct(this.registrationForm.value).subscribe((data: any) => {
      this.products.push(data);
    })
    this.registrationForm.reset();
  }

  updateProduct() {
    this.closedeletebutton.nativeElement.click();
    this.productService.updateProduct(this.registrationForm.value).subscribe((data: any) => {
      this.products = this.products.filter((item: any) => item.id != data.id);
      this.products.push(data);
    })
    this.registrationForm.reset();
  }

  deleteProduct(id: any) {
    this.productService.deleteProduct(id).subscribe((data) => {
      this.products = this.products.filter((item: any) => item.id != id);
    })
  }

  updateForm(product: any) {
    this.registrationForm.get("id")?.setValue(product.id);
    this.registrationForm.get("name")?.setValue(product.name);
    this.registrationForm.get("shortDescription")?.setValue(product.shortDescription);
    this.registrationForm.get("fullDescription")?.setValue(product.fullDescription);
    this.registrationForm.get("size")?.setValue(product.size);
    this.registrationForm.get("colour")?.setValue(product.colour);
  }

}
