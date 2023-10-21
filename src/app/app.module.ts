import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FinancialMovementsComponent } from './financial-movements/financial-movements.component';
import { FinancialMovementsRouterModule } from './financial-movements/financial-movements-routing';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home/home.routing';

@NgModule({
  declarations: [
    AppComponent,
    FinancialMovementsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FinancialMovementsRouterModule,
    HomeRoutingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,
    FinancialMovementsComponent,
    HomeComponent]
})
export class AppModule { }
