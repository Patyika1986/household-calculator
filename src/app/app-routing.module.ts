import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistComponent } from './auth/components/regist/regist.component';

const routes: Routes = [
  { path: 'output', loadChildren: () => import('./pages/output-overview/output-overview.module').then(m => m.OutputOverviewModule) ,data: { title: 'Output' }},
  { path: 'income', loadChildren: () => import('./pages/income-overview/income-overview.module').then(m => m.IncomeOverviewModule),data: { title: 'Income' } },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),data: { title: 'Home' } },
  { path: 'start-overview', loadChildren: () => import('./pages/start-overview/start-overview.module').then(m => m.StartOverviewModule) },
  { path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'register', component: RegistComponent },
  { path: '' ,redirectTo: 'start-overview', pathMatch: 'full' },
  { path: '**', redirectTo: 'start-overview' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
