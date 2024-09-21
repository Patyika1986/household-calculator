import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-info-btn',
  templateUrl: './info-btn.component.html',
  styleUrls: ['./info-btn.component.scss']
})
export class InfoBtnComponent {

  @Output() openInfo = new EventEmitter<void>();




  public navigateToInfo(): void {
    this.openInfo.emit();
  }

}
