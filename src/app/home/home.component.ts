import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  
  constructor(
    private router: Router
  ) {}
  ngOnInit(): void {
  }

  public handleCreate(): void {
    this.router.navigate(['create'])
    console.log("Se ejecuta el evento crear")
  }
  public handleEdit(): void {
    this.router.navigate(['update/:id'])
    console.log("Se ejecuta el evento editar")
  }
  public handleDelete(): void {
    console.log("Se ejecuta el evento eliminar")
  }
  
  
}
