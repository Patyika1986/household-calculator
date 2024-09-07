import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {

  @Input() isSpinnerActive: boolean = false;

  constructor(){}

}
