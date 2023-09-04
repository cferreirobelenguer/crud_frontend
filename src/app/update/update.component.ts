import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit{
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}
  public id!: string|null;

  ngOnInit(): void {
    //id url
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
  }

  public handleNavigation():void {
    this.router.navigate(['']);
  }

  public handleSendData() {
    
  }
}
