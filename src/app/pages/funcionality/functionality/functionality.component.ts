import { Component } from '@angular/core';

@Component({
  selector: 'app-functionality',
  templateUrl: './functionality.component.html',
  styleUrls: ['./functionality.component.scss']
})
export class FunctionalityComponent {

  constructor() { }

  public title: string = 'Info Overview';
  public greeting: string = 'Welcome to HouseholdCalculator!';




  public logout(): void {
    console.log('logout');
  }
}
