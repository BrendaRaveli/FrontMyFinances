import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FinancialMovementsComponent } from './financial-movements/financial-movements.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'financial-movements', component: FinancialMovementsComponent}
  // {path:'home', component: HomeComponent},
  // {path:'financial-movements', component: FinancialMovementsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
