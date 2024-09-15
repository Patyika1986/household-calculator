import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeBtnComponent } from './income-btn.component';

describe('IncomeBtnComponent', () => {
  let component: IncomeBtnComponent;
  let fixture: ComponentFixture<IncomeBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncomeBtnComponent]
    });
    fixture = TestBed.createComponent(IncomeBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
