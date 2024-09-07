import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartOverviewComponent } from './components/start-overview/start-overview.component';
import { StartButtonComponent } from './start-button/start-button.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';



const routes: Routes = [
  { path: '', component: StartOverviewComponent }
]

@NgModule({
  declarations: [
    StartOverviewComponent,
    StartButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class StartOverviewModule { }
