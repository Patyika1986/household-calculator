import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-logout-btn',
  templateUrl: './logout-btn.component.html',
  styleUrls: ['./logout-btn.component.scss']
})
export class LogoutBtnComponent {

  @Output() logout = new EventEmitter<void>();


  public logoutUser(): void {
    this.logout.emit();
  }

}
