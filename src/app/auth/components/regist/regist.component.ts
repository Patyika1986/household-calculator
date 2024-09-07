import { Component } from '@angular/core';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.scss']
})
export class RegistComponent {
  constructor(public spinnerService: SpinnerService) { }


  public navigateBack(): void {
    this.spinnerService.loadSpinner('/login');
  }
}
