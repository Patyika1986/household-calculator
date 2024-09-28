import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IncomeList } from 'src/app/models/income-list.model';
import { WhitchEdition } from 'src/app/models/whitch-edition.model';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {

  constructor(public dataService: DataService, private router: Router) {
    this.dataService.loadMergedLists();
    this.loadList();
  }

  public inputOrOutput: string[] = ['Input', 'Output'];
  public isMoneyActive = false;
  public incomeList: WhitchEdition[] = [];

  public value = 'Clear me';

  ngOnInit(): void {

  }

  private loadList(): void {
    this.dataService.list$.subscribe((data: WhitchEdition[] | IncomeList[]) => {
      this.incomeList = data as WhitchEdition[];
      this.incomeList = this.incomeList.filter(item => item.isOutOrIncome === true);
    });
  }


  public onClick(): void {
    console.log('click from income component');
  }

  private navigate(page: string): void {
    switch (page) {
      case 'Output':
        this.router.navigate(['/output']);
        break;
      case 'Input':
        //this.router.navigate(['/income']);
        console.warn('You are already on this page', page);
        break;
      default:
        console.warn('No such page');
        break;
    }
  }

  public changeInputsOutput(selected: Event): void {
    const selectElement = selected.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    this.navigate(selectedValue);
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

  public onChangeSort(event: boolean): void {
    if (event) {
      this.incomeList.sort((a, b) => a.value - b.value);
    } else {
      this.incomeList.sort((a, b) => b.value - a.value);
    }
  }

}
