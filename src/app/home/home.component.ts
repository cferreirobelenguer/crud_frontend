import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/services/product/product.service';
import { Product } from '../../interfaces/product';
import { UserService } from 'src/services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public productList: Product[];
  public titleImage:string = 'image';
  public titleDescription:string = 'description';
  public titlePrice:string = 'price';
  public titleAction:string = 'action';
  public userData: any;
  constructor(
    private router: Router,
    private productService: ProductService,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    this.getData();
    const userDataString = sessionStorage.getItem('userData');

    if (userDataString !== null) {
      this.userData = JSON.parse(userDataString);
    }
  }

  public getData(): void {
    this.productService.getProducts().subscribe((data) => {
      this.productList = data;
    })
  }

  public handleCreate(): void {
    this.router.navigate(['create'])
  }
  public handleEdit(id:number): void {
    this.router.navigate(['update/', id.toString()])
  }
  public handleDelete(id:number): void {
    this.productService.deleteProduct(id.toString()).subscribe((data) => {
      console.log(data);
    })
    this.getData();
  }
  
  public logOut(): void {
    this.userService.logoutUser().subscribe((res)=> {
      console.log(res)
    })
    sessionStorage.clear();
    this.router.navigate(['']);
  }
  
}
