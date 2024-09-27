import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeExpenseOverviewComponent } from './income-expense-overview.component';

describe('IncomeExpenseOverviewComponent', () => {
  let component: IncomeExpenseOverviewComponent;
  let fixture: ComponentFixture<IncomeExpenseOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncomeExpenseOverviewComponent]
    });
    fixture = TestBed.createComponent(IncomeExpenseOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
