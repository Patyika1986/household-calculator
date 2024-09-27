import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeExpenseListComponent } from './income-expense-list.component';

describe('IncomeExpenseListComponent', () => {
  let component: IncomeExpenseListComponent;
  let fixture: ComponentFixture<IncomeExpenseListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncomeExpenseListComponent]
    });
    fixture = TestBed.createComponent(IncomeExpenseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
