import { Component } from '@angular/core';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.scss']
})
export class AddTasksComponent {

  constructor() { }


  public title: string = 'Task Overview';

  public onClick(): void {
    console.log('click from income component');
  }
}
