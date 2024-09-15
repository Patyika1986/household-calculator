import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeOverviewComponent } from './components/home-overview/home-overview.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: HomeOverviewComponent
  }
]

@NgModule({
  declarations: [
    HomeOverviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class HomeModule { }
