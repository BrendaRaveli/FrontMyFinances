import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FinancialMovementsComponent } from './transactions/financial-movements/financial-movements.component';
import { homeRoutingModule } from './home/home-routing.modules';
import { FinancialMovementsRoutingModule } from './transactions/financial-movements/financial-movements-routing.modules';
import { CategoryFinancialComponent } from './transactions/category-financial/category-financial.component';
import { TransactionsComponent } from './transactions/transactions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FinancialMovementsComponent,
    CategoryFinancialComponent,
    TransactionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    homeRoutingModule, 
    FinancialMovementsRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent,
  ]
})
export class AppModule { }
