import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartOverviewComponent } from './start-overview.component';

describe('StartOverviewComponent', () => {
  let component: StartOverviewComponent;
  let fixture: ComponentFixture<StartOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartOverviewComponent]
    });
    fixture = TestBed.createComponent(StartOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
