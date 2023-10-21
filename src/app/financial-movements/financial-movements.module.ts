import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinancialMovementsComponent } from './financial-movements.component';
import { FinancialMovementsRouterModule } from './financial-movements-routing';

@NgModule({
  declarations: [
    FinancialMovementsComponent
  ],
  imports: [
    FinancialMovementsRouterModule,
    CommonModule
  ],
  bootstrap: [FinancialMovementsComponent]
})
export class FinancialMovementsModule { }
