import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-info-btn',
  templateUrl: './info-btn.component.html',
  styleUrls: ['./info-btn.component.scss']
})
export class InfoBtnComponent {

  @Output() openInfo = new EventEmitter<void>();


  public title: string = 'Info';

  public navigateToInfo(): void {
    this.openInfo.emit();
  }

}
