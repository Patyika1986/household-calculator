import { Component } from '@angular/core';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(public spinnerService: SpinnerService) { }


  public navigateGuest(): void {
    this.spinnerService.loadSpinner('/register');
  }

}
