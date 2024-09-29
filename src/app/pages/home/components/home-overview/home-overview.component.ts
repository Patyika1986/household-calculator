import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-overview',
  templateUrl: './home-overview.component.html',
  styleUrls: ['./home-overview.component.scss']
})
export class HomeOverviewComponent {

  constructor(private titleService: Title, private router: Router) {
    this.titleService.setTitle('Home Overview');
  }


  public title: string = 'Home Overview';
  public greeting: string = 'Welcome to HouseholdCalculator!';



  public navigateToInfo(): void {
    console.log('navigateToInfo');
  }
  
  public logout(): void {
    console.log('logout');
  }
  
  public navigateToFunctionality(): void {
    this.router.navigate(['/info']);
    console.log('navigateToFunctionality');
  }


}
