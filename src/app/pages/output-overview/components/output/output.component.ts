import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Title } from '@angular/platform-browser';
import { WhitchEdition } from 'src/app/models/whitch-edition.model';
import { DataService } from '../../../../services/data/data.service';
import { IncomeList } from 'src/app/models/income-list.model';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {
  currentTitle: string = "";
  public inputOrOutput: string[] = ['Output', 'Input'];
  public isMoneyActive = false;
  public expenseList:WhitchEdition[] = [];


  public value = 'Clear me';

  constructor(private titleService: Title, public dataService:DataService) {
    this.dataService.loadMergedLists();
    this.loadList();
   }

  ngOnInit(): void {
    this.currentTitle = this.titleService.getTitle();
  }

  public onClick(): void {
    console.log('click from output component');
  }

  private loadList(): void {
    this.dataService.list$.subscribe((data: WhitchEdition[] | IncomeList[]) => {
      this.expenseList = data as WhitchEdition[];
      this.expenseList = this.expenseList.filter(item => item.isOutOrIncome === false);
    });
  }

  public changeInputsOutput(value: Event): void {
    const selectElement = value.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    console.log('Selected value:', selectedValue);
  }

  public onChangeSort(event: boolean): void {
    if (event) {
      this.expenseList.sort((a, b) => a.value - b.value); 
    } else {
      this.expenseList.sort((a, b) => b.value - a.value);
    }
  }

  public clearInput(): void {
    this.value = '';
  }


  public readMoney(money: number): void {
    if (this.value === '') {
      money = 0;
    }
    console.log('Read money', money);
  }

  public changeKindSelection(selectedId: string): void {
    const selectedItem = this.dataService.whichEdition.find(item => item.id === selectedId);
    if (selectedItem) {
      selectedItem.value === 0 ? this.isMoneyActive = true : this.isMoneyActive = false;
      console.log('Selected item:', selectedItem);
    }
  }

  /*
    It should be checked whether value is 0, if so then show how much input, otherwise hide it
  */
  private checkIfValueNull() {
    this.dataService.whichEdition.filter(x => x.value === 0);
  }

}
