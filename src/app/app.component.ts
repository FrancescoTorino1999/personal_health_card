import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'personal_health_card';

  logging = false;

  constructor(private router: Router) { 


  }

  navigate(routingLink:string){

    this.logging = true;
    this.router.navigate(['login']);

  }
}
