import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FinancialMovementsComponent } from './financial-movements/financial-movements.component';
import { FinancialMovementsRouterModule } from './financial-movements/financial-movements-routing';

@NgModule({
  declarations: [
    AppComponent,
    FinancialMovementsComponent
  ],
  imports: [
    BrowserModule,
    FinancialMovementsRouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,
    FinancialMovementsComponent]
})
export class AppModule { }
