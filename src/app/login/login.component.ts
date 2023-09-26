import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from '../../interfaces/user';
import { UserService } from 'src/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public userData: user;
  public loginInfo: any;
  public isPasswordVisible: boolean;
  public formularyLogin: FormGroup;
  public errorMessage: string;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) {
    //username with min leght 4 digits and max lenght 10 digits
    //password min lenght 8 digits, at least one digit, one uppercase, one lowercase, and especial characters
    this.formularyLogin = this.fb.group ({
      username: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(4)]),
      password: new FormControl ('', [Validators.required, this.passwordValidator])
    })
  }

  ngOnInit(): void {
    this.errorMessage = '';
  }

  //login user
  public handleSubmit(): void {
    this.errorMessage = '';
    if (this.formularyLogin.valid){
      const { username, password } = this.formularyLogin.value;
      if (username && password ) {
        this.userData = { username , password };
      }
      if (this.userData) {
        this.userService.longinUser(this.userData). subscribe ( (res) => {
          console.log(res);
          if (res.error) {
            console.log('Se produce esto')
            this.errorMessage = 'Inicio de sesión fallido';
          }
          this.loginInfo = res.data;
          if(res.data) {
            this.router.navigate(['home']);
            //put data into sessionStorage
            sessionStorage.setItem('userData', JSON.stringify(res.data));
          }
        })
    }

    } else {
        console.log("Hay datos inválidos en el formulario");
        this.errorMessage = 'Hay datos inválidos en el formulario'
    }
  }

  public passwordValidator(control: FormControl): { [key: string]: boolean } | null {
    const validPasswordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-|=]).{8,}$/;
  
    if (control.value && !validPasswordPattern.test(control.value)) {
      return { 'invalidPassword': true };
    }
  
    return null;
  }
  //redirect to register url
  public handleRedirectRegister(): void {
    this.router.navigate(['register'])
  }

  //show password
  public showPassword(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
  
}
