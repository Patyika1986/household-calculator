import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTasksComponent } from './components/add-tasks/add-tasks.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Router, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AddTasksComponent
  }
]

@NgModule({
  declarations: [
    AddTasksComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class AddTasksModule { }
