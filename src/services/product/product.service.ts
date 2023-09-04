import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

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
}
