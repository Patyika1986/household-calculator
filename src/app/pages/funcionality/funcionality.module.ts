import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunctionalityComponent } from './functionality/functionality.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: FunctionalityComponent
  }
]

@NgModule({
  declarations: [
    FunctionalityComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class FuncionalityModule { }
