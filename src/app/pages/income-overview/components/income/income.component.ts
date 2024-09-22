import { Component } from '@angular/core';
import { IncomeList } from 'src/app/models/income-list.model';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent {

  public inputOrOutput: string[] = ['Input','Output'];
  public isMoneyActive = false;
  
  
  public incomeList:IncomeList[] = [
    { id: '1', title: 'Salary', value: 3200 },
    { id: '2', title: 'Child benefit ', value: 750 },
    { id: '3', title: 'Child allowance', value: 600 },
    { id: '4', title: 'Test', value: 0 },

  ];

  public value = 'Clear me';


  public onClick(): void {
    console.log('click from income component');
  }

  public changeInputsOutput(selected: Event): void {
    const selectElement = selected.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    console.log('Selected value: from income', selectedValue);
  }

  public readHowMuch(money: number): void {
    console.log('Read how much', money);
  }

  public changedIncome(selectedId:string){    
    const selectedItem = this.incomeList.find(item => item.id === selectedId);
    if (selectedItem) {
      selectedItem.value === 0 ? this.isMoneyActive = true : this.isMoneyActive = false;
      console.log('Selected item:', selectedItem);
    }
  }
  
}
