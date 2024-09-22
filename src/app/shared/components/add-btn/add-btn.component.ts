import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-btn',
  templateUrl: './add-btn.component.html',
  styleUrls: ['./add-btn.component.scss']
})
export class AddBtnComponent {

  @Output() click = new EventEmitter();




  public onClick(): void {
    this.click.emit();
  }
}
