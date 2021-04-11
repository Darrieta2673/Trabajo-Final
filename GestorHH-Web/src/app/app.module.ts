import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './access/login/login.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ClientComponent } from './pages/client/client.component';
import { ExpensesComponent } from './pages/expenses/expenses.component';
import { ProjectComponent } from './pages/project/project.component';
import { WorkerComponent } from './pages/worker/worker.component';
import { UsersComponent } from './pages/users/users.component';
import { ProductionComponent } from './pages/production/production.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutusComponent,
    ClientComponent,
    ExpensesComponent,
  ProjectComponent,
    WorkerComponent,
    UsersComponent,
    ProductionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
