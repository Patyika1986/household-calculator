import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task-btn',
  templateUrl: './add-task-btn.component.html',
  styleUrls: ['./add-task-btn.component.scss']
})
export class AddTaskBtnComponent {

  constructor(private router:Router) { }


  @Output() click = new EventEmitter();
  @Input() pages: string = '';

  public onClick(): void {
    this.router.navigate([this.pages]);
    this.click.emit();
  }


  
}
