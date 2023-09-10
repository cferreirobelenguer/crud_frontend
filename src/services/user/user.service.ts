import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrlpost = 'http://localhost/backend/controller/register.php';
  private apiUrlGet = 'http://localhost/backend/controller/login.php';

  constructor(private http: HttpClient) { }
  //register user
  public registerUser(userRegister: any): Observable<any> {
    return this.http.post<any>(this.apiUrlpost, userRegister);
  }

  //login user
  public loginUser(userData: any): Observable<any> {
    return this.http.get<any>(this.apiUrlGet, userData);
  } 
}
