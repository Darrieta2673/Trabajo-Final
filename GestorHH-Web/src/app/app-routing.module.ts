import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ClientComponent } from './pages/client/client.component';
import { ExpensesComponent } from './pages/expenses/expenses.component';
import { ProjectComponent } from './pages/project/project.component';
import { WorkerComponent } from './pages/worker/worker.component';
import { UsersComponent } from './pages/users/users.component';
import { ProductionComponent } from './pages/production/production.component';
import { LoginComponent } from './access/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'aboutus', component: AboutusComponent},
  { path: 'client', component: ClientComponent},
  { path: 'expenses', component: ExpensesComponent},
  { path: 'project', component: ProjectComponent},
  { path: 'worker', component: WorkerComponent},
  { path: 'users', component: UsersComponent},
  { path: 'production', component: ProductionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
