import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent {

  constructor(public dataService:DataService) { }

  public inputOrOutput: string[] = ['Input', 'Output'];
  public isMoneyActive = false;

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

  public changedIncome(selectedId: string) {
    const selectedItem = this.dataService.incomeList.find(item => item.id === selectedId);
    if (selectedItem) {
      selectedItem.value === 0 ? this.isMoneyActive = true : this.isMoneyActive = false;
      console.log('Selected from income item:', selectedItem);
    }
  }

}
