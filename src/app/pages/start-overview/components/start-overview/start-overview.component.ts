import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-overview',
  templateUrl: './start-overview.component.html',
  styleUrls: ['./start-overview.component.scss']
})
export class StartOverviewComponent implements OnInit {

  
  constructor(private router: Router) { }
  
  public title: string = 'houshould-budget-app';
  public spinnerActive:boolean = false;

  ngOnInit(): void {
  }


  onClick(event: any): void {
    console.log('Start button clicked');
    this.spinnerActive = true;

    setTimeout(() => {
      this.router.navigate(['/login']);
    },3000);
  }
}
