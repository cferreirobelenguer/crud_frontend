import { Component } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from '../../interfaces/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public userRegister: user;
  public isPasswordVisible: boolean;
  public formularyRegister: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder
  ) {
    //name only letters and min leght 2
    //username with min leght 4 digits and max lenght 10 digits
    //password min lenght 8 digits, at least one digit, one uppercase, one lowercase, and especial characters
    // email with @
    this.formularyRegister = this.fb.group ({
      name: new FormControl('', [Validators.pattern(/^[A-Za-z]+$/), Validators.required, Validators.minLength(2)]),
      username: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(4)]),
      password: new FormControl ('', [Validators.required, this.passwordValidator]),
      repeatpassword: new FormControl ('', [Validators.required, this.passwordValidator]),
      email: new FormControl('',[Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
    })
  }

    //register user
    public handleSubmit(): void {
      if (this.formularyRegister.valid){
        const { name, username, password, email, repeatpassword } = this.formularyRegister.value;
        if (username && password && name && email && repeatpassword && (password === repeatpassword)) {
          this.userRegister = { name, username, password, email};
          console.log("is valid ", this.userRegister)
        }
  
      } else {
          console.log("Hay datos inválidos en el formulario");
      }
    }

  public passwordValidator(control: FormControl): { [key: string]: boolean } | null {
    const validPasswordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-|=]).{8,}$/;
  
    if (control.value && !validPasswordPattern.test(control.value)) {
      return { 'invalidPassword': true };
    }
  
    return null;
  }

  public handleRegister(): void {
    console.log(this.formularyRegister.value)
  }

  //show password
  public showPassword(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}
