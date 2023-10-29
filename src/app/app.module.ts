import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FinancialMovementsComponent } from './financial-movements/financial-movements.component';
import { homeRoutingModule } from './home/home-routing.modules';
import { FinancialMovementsRoutingModule } from './financial-movements/financial-movements-routing.modules';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FinancialMovementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    homeRoutingModule, 
    FinancialMovementsRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,
  ]
})
export class AppModule { }
