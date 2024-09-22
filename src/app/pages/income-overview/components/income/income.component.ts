import { Component } from '@angular/core';
import { IncomeList } from 'src/app/models/income-list.model';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent {

  public inputOrOutput: string[] = ['Input','Output'];
  
  public incomeList:IncomeList[] = [
    { id: '1', title: 'Salary', value: 3200 },
    { id: '2', title: 'Child benefit ', value: 750 },
    { id: '3', title: 'Child allowance', value: 600 },
  ];

  public value = 'Clear me';


  public onClick(): void {
    console.log('click from income component');
  }
}
