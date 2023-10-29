import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialMovementsComponent } from './financial-movements.component';

describe('FinancialMovementsComponent', () => {
  let component: FinancialMovementsComponent;
  let fixture: ComponentFixture<FinancialMovementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinancialMovementsComponent]
    });
    fixture = TestBed.createComponent(FinancialMovementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
