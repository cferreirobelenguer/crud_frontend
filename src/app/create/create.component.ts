import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../interfaces/product';
import { ProductService } from 'src/services/product/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  public description:string;
  public price:number;
  public img:string;
  public errorMessage:string;
  public data:Product;

  constructor(
    private router: Router,
    private productService: ProductService
  ) {

  }
  public handleNavigation():void {
    this.router.navigate(['home']);
  }

  public handleSendData() {
    this.errorMessage= '';
    if (this.validateInputs()) {
      this.data = {
        descripcion: this.description,
        precio: this.price.toString(),
        img: this.img
      }
      this.productService.createProduct(this.data).subscribe((item) => {
        console.log(item)
      })

    } else {
      this.errorMessage = 'Datos erróneos, no puede realizar la solicitud.'
    }
  }

  validateInputs(): boolean {
    // Validation inputs
    const descriptionPattern = /[A-Za-z\s]+/;
    const pricePattern = /[0-9]+/;
    const imgPattern = /.+\.(png|jpg|svg)$/;

    return (
      descriptionPattern.test(this.description) &&
      pricePattern.test(String(this.price)) &&
      imgPattern.test(this.img)
    );
  }
}
