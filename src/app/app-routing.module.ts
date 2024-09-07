import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistComponent } from './auth/components/regist/regist.component';

const routes: Routes = [
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
