import { Component, OnInit } from '@angular/core';
import { IncomeList } from 'src/app/models/income-list.model';
import { WhitchEdition } from 'src/app/models/whitch-edition.model';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-income-expense-overview',
  templateUrl: './income-expense-overview.component.html',
  styleUrls: ['./income-expense-overview.component.scss']
})
export class IncomeExpenseOverviewComponent implements OnInit {

  constructor(private dateService: DataService) {
    this.dateService.loadMergedLists();
    this.loadList();

  }
  public items: WhitchEdition[] = [];
  public checked = false;
  public disabled = false;


  ngOnInit(): void {
    this.sortItems();
  }

  private loadList(): void {
    this.dateService.list$.subscribe((data: WhitchEdition[] | IncomeList[]) => {
      this.items = data as WhitchEdition[];
    });
  }



  private sortItems(): void {
    this.items.sort((a, b) => b.value - a.value);
  }


  public changeSort(event: boolean): void {
    event ? this.items.sort((a, b) => a.value - b.value) : this.sortItems()
  }

  public onChangeIncome(event: boolean): void {
    event ? this.items = this.items.filter(income => income.isOutOrIncome === true) : this.loadList();
  }

  public onChangeExpense(event: boolean): void {
    event ? this.items = this.items.filter(income => income.isOutOrIncome === false) : this.loadList();

  }


}
