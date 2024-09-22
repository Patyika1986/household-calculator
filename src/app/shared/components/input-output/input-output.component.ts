import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent {

  @Input() data: string[] = [];
  @Output() changeInputsOutput = new EventEmitter<Event>();





  public changeSelection(value: Event): void {
    this.changeInputsOutput.emit(value);
  }
}
