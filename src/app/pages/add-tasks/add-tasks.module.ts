import { forwardRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTasksComponent } from './components/add-tasks/add-tasks.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Router, RouterModule, Routes } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Form, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

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
    SharedModule,
    MatFormFieldModule,
    MatInputModule, 
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [

  ]
})
export class AddTasksModule { }
