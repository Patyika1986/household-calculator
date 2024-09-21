import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-overview',
  templateUrl: './home-overview.component.html',
  styleUrls: ['./home-overview.component.scss']
})
export class HomeOverviewComponent {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Home Overview');
  }


  public title: string = 'Home Overview';
  public greeting: string = 'Welcome to HouseholdCalculator!';
  public currentDate: Date = new Date();



  public navigateToInfo(): void {
    console.log('navigateToInfo');
  }

  public logout(): void {
    console.log('logout');
  }

  public navigateToFunctionality(): void {
    console.log('navigateToFunctionality');
  }


}
