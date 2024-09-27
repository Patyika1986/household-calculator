import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-income-expense-btn',
  templateUrl: './income-expense-btn.component.html',
  styleUrls: ['./income-expense-btn.component.scss']
})
export class IncomeExpenseBtnComponent {
  constructor(private router: Router) { }


  @Input() label: string = "Income-Expense";
  @Input() page: string = "";


  onClick(page: string) {
    this.router.navigate([this.page]);
  }
}
