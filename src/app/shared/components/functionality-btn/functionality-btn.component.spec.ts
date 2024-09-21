import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalityBtnComponent } from './functionality-btn.component';

describe('FunctionalityBtnComponent', () => {
  let component: FunctionalityBtnComponent;
  let fixture: ComponentFixture<FunctionalityBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FunctionalityBtnComponent]
    });
    fixture = TestBed.createComponent(FunctionalityBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
