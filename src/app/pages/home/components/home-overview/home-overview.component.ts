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


  public title: string = 'Welcome to HouseholdCalculator';
  public currentDate: Date = new Date();

}
