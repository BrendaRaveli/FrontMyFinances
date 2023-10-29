import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FinancialMovementsComponent } from './transactions/financial-movements/financial-movements.component';
import { CategoryFinancialComponent } from './transactions/category-financial/category-financial.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'transactions', component: TransactionsComponent},
  {path: 'category-financial', component: CategoryFinancialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
