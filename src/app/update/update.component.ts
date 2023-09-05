import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../../interfaces/product';
import { ProductService } from 'src/services/product/product.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit{
  public description:string;
  public price:number;
  public img:string;
  public errorMessage:string;
  public data:Product;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}
  public id!: string|null;

  ngOnInit(): void {
    //id url
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
  }

  public handleNavigation():void {
    this.router.navigate(['']);
  }

  public handleSendData() {
    this.errorMessage= '';
    if (this.validateInputs()) {
      this.data = {
        descripcion: this.description,
        precio: this.price.toString(),
        img: this.img
      }
      if(this.id != null) {
        console.log(this.id)
        this.productService.updateProduct(this.data, this.id).subscribe((item) => {
          console.log(item)
        })
      }
      

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
