import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-functionality-btn',
  templateUrl: './functionality-btn.component.html',
  styleUrls: ['./functionality-btn.component.scss']
})
export class FunctionalityBtnComponent {

  @Output() navigateFunctionality = new EventEmitter<void>();
  public label: string = 'Functionality';


  public navigateToFunctionality(): void {
    this.navigateFunctionality.emit();
  }

}
