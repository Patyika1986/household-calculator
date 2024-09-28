import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiagramComponent } from './diagram/diagram.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
const routes: Routes = [
  {
    path: '',
    component: DiagramComponent
  }
]

@NgModule({
  declarations: [
    DiagramComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatSlideToggleModule,
  ]
})
export class DiagramModule { }
