import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { IncomeExpenseOverviewComponent } from './income-expense-overview.component';
import { Router, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: IncomeExpenseOverviewComponent
  }
]

@NgModule({
  declarations: [
    IncomeExpenseOverviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class IncomeExpenseOverviewModule { }
