import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-start-button',
  templateUrl: './start-button.component.html',
  styleUrls: ['./start-button.component.scss']
})
export class StartButtonComponent {
  @Input() label: string = 'Start';
  @Output() click = new EventEmitter<void>();


  onClick(): void {
    this.click.emit();
  }

}
