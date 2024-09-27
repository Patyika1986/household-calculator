import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeExpenseBtnComponent } from './income-expense-btn.component';

describe('IncomeExpenseBtnComponent', () => {
  let component: IncomeExpenseBtnComponent;
  let fixture: ComponentFixture<IncomeExpenseBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncomeExpenseBtnComponent]
    });
    fixture = TestBed.createComponent(IncomeExpenseBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
