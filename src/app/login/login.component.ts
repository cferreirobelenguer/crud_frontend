import { Component } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from '../../interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public userData: user;
  public isPasswordVisible: boolean;
  constructor(
    private router: Router,
    private fb: FormBuilder
  ) {}
  //username with min leght 4 digits and max lenght 10 digits
  //password min lenght 8 digits, at least one digit, one uppercase, one lowercase, and especial characters
  formularyLogin = this.fb.group ({
    username: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(4)]],
    password: ['', [Validators.required, this.passwordValidator]]
  })
  //login user
  public handleLogin(): void {
    if (this.formularyLogin.valid){
        console.log('es válido');
      const { username, password } = this.formularyLogin.value;
      if (username && password ) {
        this.userData = { username, password };
      }
      console.log(this.userData)

    } else {
        console.log("Hay datos inválidos en el formulario");
    }
  }

  public passwordValidator(control: FormControl): { [key: string]: boolean } | null {
    const validPasswordPattern = /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-|=])(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).{8,}$/;
  
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
    const passwordId = document.getElementById('password') as HTMLInputElement;
    this.isPasswordVisible = !this.isPasswordVisible;
    if (this.isPasswordVisible) {
      const textInput = document.createElement("input");
      textInput.type = "text";
      textInput.id = passwordId.id;
      textInput.value = passwordId.value;
      passwordId.parentNode?.replaceChild(textInput, passwordId);
      textInput.focus();
      console.log(this.isPasswordVisible)
    } else {
      const textInput = document.createElement("input");
      textInput.type = "password";
      textInput.id = passwordId.id;
      textInput.value = passwordId.value;
      passwordId.parentNode?.replaceChild(textInput, passwordId);
      textInput.focus();
      console.log(this.isPasswordVisible)
    }
  }
  
}
