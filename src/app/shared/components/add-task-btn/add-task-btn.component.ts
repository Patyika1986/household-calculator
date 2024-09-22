import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-task-btn',
  templateUrl: './add-task-btn.component.html',
  styleUrls: ['./add-task-btn.component.scss']
})
export class AddTaskBtnComponent {

  constructor() { }


  @Output() click = new EventEmitter();

  public onClick(): void {
    this.click.emit();
  }


  
}
