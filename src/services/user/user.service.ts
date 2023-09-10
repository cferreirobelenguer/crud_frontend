import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost/backend/controller/register.php';

  constructor(private http: HttpClient) { }
  //register user
  registerUser(userRegister: any): Observable<any> {

    return this.http.post<any>(this.apiUrl, userRegister);
  }
}
