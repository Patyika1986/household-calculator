import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IncomeList } from 'src/app/models/income-list.model';
import { WhitchEdition } from 'src/app/models/whitch-edition.model';

@Component({
  selector: 'app-income-expense-list',
  templateUrl: './income-expense-list.component.html',
  styleUrls: ['./income-expense-list.component.scss']
})
export class IncomeExpenseListComponent {

  constructor() {

  }

  @Input() items: WhitchEdition[] = [];
  @Input() checked = false;
  @Input() disabled = false;
  @Input() showIncomeChanges = true;
  @Input() showExpenseChanges = true;
  @Output() changeSort = new EventEmitter<boolean>();
  @Output() changeIncome = new EventEmitter<boolean>();
  @Output() changeExpense = new EventEmitter<boolean>();


  public onChangeSort(event: boolean): void {
    this.changeSort.emit(event);
  }

  public onChangeIncome(event: boolean): void {
    this.changeIncome.emit(event);
  }

  public onChangeExpense(event: boolean): void {
    this.changeExpense.emit(event);
  }




}
