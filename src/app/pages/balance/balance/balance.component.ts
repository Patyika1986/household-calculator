import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent {

  constructor( private router: Router) { }

  public title: string = 'Home Overview';



  public navigateToInfo(): void {
    this.router.navigate(['/info-software']);
    console.log('navigateToInfo');
  }
  
  public logout(): void {
    console.log('logout');
  }

}
