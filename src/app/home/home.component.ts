import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/services/product/product.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  public productList: Product[];
  constructor(
    private router: Router,
    private productService: ProductService
  ) {}
  ngOnInit(): void {
    this.getData()
  }

  public getData(): void {
    this.productService.getProducts().subscribe((data) => {
      this.productList = data;
    })
  }

  public handleCreate(): void {
    this.router.navigate(['create'])
    console.log("Se ejecuta el evento crear")
  }
  public handleEdit(): void {
    this.router.navigate(['update/:id'])
    console.log("Se ejecuta el evento editar")
  }
  public handleDelete(): void {
    console.log("Se ejecuta el evento eliminar")
  }
  
  
}
