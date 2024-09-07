import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistComponent } from './components/regist/regist.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: '', component: RegistComponent }
]

@NgModule({
  declarations: [
    LoginComponent,
    RegistComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class AuthModule { }
