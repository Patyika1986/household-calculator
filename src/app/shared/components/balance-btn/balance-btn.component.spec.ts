import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceBtnComponent } from './balance-btn.component';

describe('BalanceBtnComponent', () => {
  let component: BalanceBtnComponent;
  let fixture: ComponentFixture<BalanceBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BalanceBtnComponent]
    });
    fixture = TestBed.createComponent(BalanceBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
