import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';

@Component({
  selector: 'app-start-overview',
  templateUrl: './start-overview.component.html',
  styleUrls: ['./start-overview.component.scss']
})
export class StartOverviewComponent implements OnInit {

  
  constructor(private router: Router, public spinnerService: SpinnerService) { }
  
  public title: string = 'houshould-budget-app';
  public isSpinnerActive: boolean = this.spinnerService.activateSpinner();
  public isBtnDisabled: boolean = this.spinnerService.btnDisabled();

  ngOnInit(): void {
  }

  onClick(): void {
    this.spinnerService.loadSpinner("/login");
    console.log(this.spinnerService.activateSpinner());
  }
}
