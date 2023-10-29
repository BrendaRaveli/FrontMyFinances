import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryFinancialComponent } from './category-financial.component';

describe('CategoryFinancialComponent', () => {
  let component: CategoryFinancialComponent;
  let fixture: ComponentFixture<CategoryFinancialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryFinancialComponent]
    });
    fixture = TestBed.createComponent(CategoryFinancialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
