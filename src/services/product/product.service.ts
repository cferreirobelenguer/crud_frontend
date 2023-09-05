import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Product } from '../../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  //get all the products
  getProducts(): Observable<any> {
    return this.http.get('http://localhost/backend/controller/view.php')
  }

  //delete product
  deleteProduct(id:string): Observable<any>{
    return this.http.delete('http://localhost/backend/controller/delete.php?idProduct='+id)
  }

  //create product
  createProduct(data:Product): Observable<any> {
    return this.http.post('http://localhost/backend/controller/create.php',{
      description: data.descripcion,
      price: data.precio,
      img: data.img
    });
  }
  //update data
  updateProduct(data:Product, id:string): Observable<any> {
    return this.http.post('http://localhost/backend/controller/update.php?idProduct='+id , {
      description: data.descripcion,
      price: data.precio,
      img: data.img
    });
  }
}
