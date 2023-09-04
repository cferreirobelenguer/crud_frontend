import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  constructor(
    private router: Router
  ) {

  }
  public handleNavigation():void {
    this.router.navigate(['']);
  }

  public handleSendData() {
    
  }
}
