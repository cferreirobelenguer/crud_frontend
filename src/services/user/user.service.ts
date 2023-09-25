import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from '../../interfaces/user';

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

  longinUser(userData:user): Observable<any> {
    return this.http.post(this.apiUrlGet, {
      username: userData.username,
      password: userData.password
    });
  }
}
